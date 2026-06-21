# check_evolution_pdf.ps1
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

$pdfPath = "C:\Users\TRANG TRUONG\Downloads\Healthcare_Ecosystem_Evolution.pdf"
if (-not (Test-Path $pdfPath)) {
    Write-Host "File not found: $pdfPath"
    exit 1
}

$fileAsync = [Windows.Storage.StorageFile]::GetFileFromPathAsync($pdfPath)
$file = Await-WinRT $fileAsync $storageFileType

$pdfDocAsync = [Windows.Data.Pdf.PdfDocument]::LoadFromFileAsync($file)
$pdfDoc = Await-WinRT $pdfDocAsync $pdfDocType

Write-Host "Total Pages: $($pdfDoc.PageCount)"
# Let's OCR page 0 to see if it is SBO 1.1.3
$page = $pdfDoc.GetPage(0)
$stream = New-Object Windows.Storage.Streams.InMemoryRandomAccessStream
$renderTask = $page.RenderToStreamAsync($stream)
Await-WinRT $renderTask $null | Out-Null

$decoderType = [Type]::GetType("Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics, ContentType=WindowsRuntime")
$decoderTask = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($stream)
$decoder = Await-WinRT $decoderTask $decoderType

$softwareBitmapType = [Type]::GetType("Windows.Graphics.Imaging.SoftwareBitmap, Windows.Graphics, ContentType=WindowsRuntime")
$bitmapTask = $decoder.GetSoftwareBitmapAsync()
$bitmap = Await-WinRT $bitmapTask $softwareBitmapType

$ocrEngineType = [Type]::GetType("Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType=WindowsRuntime")
$jaLang = New-Object Windows.Globalization.Language("ja-JP")
$ocrEngine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage($jaLang)
if ($ocrEngine -eq $null) {
    $ocrEngine = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
}

$ocrResultType = [Type]::GetType("Windows.Media.Ocr.OcrResult, Windows.Media.Ocr, ContentType=WindowsRuntime")
$ocrTask = $ocrEngine.RecognizeAsync($bitmap)
$ocrResult = Await-WinRT $ocrTask $ocrResultType

Write-Host "Page 1 Content Preview:"
Write-Host $ocrResult.Text
