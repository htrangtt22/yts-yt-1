# ocr_pdf_all.ps1
param (
    [string]$pdfPath,
    [string]$outputPath
)

[void][System.Reflection.Assembly]::LoadWithPartialName("System.Runtime.WindowsRuntime")

function Await-WinRT ($asyncOp, $resultType) {
    $methods = [System.WindowsRuntimeSystemExtensions].GetMethods()
    if ($resultType -eq $null) {
        $m = $methods | Where-Object { $_.Name -eq 'AsTask' -and -not $_.IsGenericMethod -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -match 'IAsyncAction' }
        $task = $m.Invoke($null, @($asyncOp))
    } else {
        $m = $methods | Where-Object { $_.Name -eq 'AsTask' -and $_.IsGenericMethod -and $_.GetGenericArguments().Count -eq 1 -and $_.GetParameters().Count -eq 1 -and $_.GetParameters()[0].ParameterType.Name -match 'IAsyncOperation' }
        $gm = $m.MakeGenericMethod($resultType)
        $task = $gm.Invoke($null, @($asyncOp))
    }
    while (-not $task.IsCompleted) { Start-Sleep -Milliseconds 50 }
    return $task.Result
}

$storageFileType = [Type]::GetType("Windows.Storage.StorageFile, Windows.Storage, ContentType=WindowsRuntime")
$pdfDocType = [Type]::GetType("Windows.Data.Pdf.PdfDocument, Windows.Data.Pdf, ContentType=WindowsRuntime")
$decoderType = [Type]::GetType("Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics, ContentType=WindowsRuntime")
$softwareBitmapType = [Type]::GetType("Windows.Graphics.Imaging.SoftwareBitmap, Windows.Graphics, ContentType=WindowsRuntime")
$ocrEngineType = [Type]::GetType("Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType=WindowsRuntime")
$ocrResultType = [Type]::GetType("Windows.Media.Ocr.OcrResult, Windows.Media.Ocr, ContentType=WindowsRuntime")
$langType = [Type]::GetType("Windows.Globalization.Language, Windows.Foundation, ContentType=WindowsRuntime")

$jaLang = [Activator]::CreateInstance($langType, "ja-JP")
$ocrEngineJa = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage($jaLang)
$viLang = [Activator]::CreateInstance($langType, "vi-VN")
$ocrEngineVi = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage($viLang)

if ($ocrEngineJa -eq $null) { $ocrEngineJa = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages() }
if ($ocrEngineVi -eq $null) { $ocrEngineVi = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages() }

if (-not (Test-Path $pdfPath)) {
    Write-Host "File not found: $pdfPath"
    exit 1
}

$fileAsync = [Windows.Storage.StorageFile]::GetFileFromPathAsync($pdfPath)
$file = Await-WinRT $fileAsync $storageFileType

$pdfDocAsync = [Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file)
$pdfDoc = Await-WinRT $pdfDocAsync $pdfDocType

$total = $pdfDoc.PageCount
Write-Host "Total Pages: $total"
$outStr = ""

for ($i = 0; $i -lt $total; $i++) {
    Write-Host "Processing page $($i+1) of $total..."
    $page = $pdfDoc.GetPage($i)
    $stream = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream
    $renderTask = $page.RenderToStreamAsync($stream)
    Await-WinRT $renderTask $null | Out-Null
    
    $decoderTask = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
    $decoder = Await-WinRT $decoderTask $decoderType
    
    $bitmapTask = $decoder.GetSoftwareBitmapAsync()
    $bitmap = Await-WinRT $bitmapTask $softwareBitmapType
    
    # Use Japanese engine for Japanese files, Vietnamese engine for Vietnamese files
    $engine = $ocrEngineJa
    if ($pdfPath -match "Redefining" -or $pdfPath -match "_vi" -or $pdfPath -match "Vietnamese") {
        $engine = $ocrEngineVi
    }
    
    $ocrTask = $engine.RecognizeAsync($bitmap)
    $ocrResult = Await-WinRT $ocrTask $ocrResultType
    
    $outStr += "--- Slide $($i+1) ---`r`n"
    $outStr += $ocrResult.Text + "`r`n`r`n"
}

[System.IO.File]::WriteAllText($outputPath, $outStr, [System.Text.Encoding]::UTF8)
Write-Host "Completed! Saved to $outputPath"
