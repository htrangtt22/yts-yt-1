# ocr_sbo123.ps1
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
$decoderType = [Type]::GetType("Windows.Graphics.Imaging.BitmapDecoder, Windows.Graphics, ContentType=WindowsRuntime")
$softwareBitmapType = [Type]::GetType("Windows.Graphics.Imaging.SoftwareBitmap, Windows.Graphics, ContentType=WindowsRuntime")
$ocrEngineType = [Type]::GetType("Windows.Media.Ocr.OcrEngine, Windows.Media.Ocr, ContentType=WindowsRuntime")
$ocrResultType = [Type]::GetType("Windows.Media.Ocr.OcrResult, Windows.Media.Ocr, ContentType=WindowsRuntime")
$langType = [Type]::GetType("Windows.Globalization.Language, Windows.Foundation, ContentType=WindowsRuntime")
$streamType = [Type]::GetType("Windows.Storage.Streams.IRandomAccessStream, Windows.Foundation, ContentType=WindowsRuntime")

$jaLang = [Activator]::CreateInstance($langType, "ja-JP")
$ocrEngineJa = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage($jaLang)
$viLang = [Activator]::CreateInstance($langType, "vi-VN")
$ocrEngineVi = [Windows.Media.Ocr.OcrEngine]::TryCreateFromLanguage($viLang)

if ($ocrEngineJa -eq $null) { $ocrEngineJa = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages() }
if ($ocrEngineVi -eq $null) { $ocrEngineVi = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages() }

$pptxPath = "c:\Users\TRANG TRUONG\.gemini\antigravity\scratch\yts-yt\pdf\SBO 1.2.3.pptx"
$outputPath = "c:\Users\TRANG TRUONG\.gemini\antigravity\scratch\yts-yt\scratch\sbo123_ocr_text.txt"

if (-not (Test-Path $pptxPath)) {
    Write-Host "File not found: $pptxPath"
    exit 1
}

$ppt = New-Object -ComObject PowerPoint.Application
$pngPath = "c:\Users\TRANG TRUONG\.gemini\antigravity\scratch\yts-yt\scratch\temp_sbo123.png"

try {
    $pres = $ppt.Presentations.Open($pptxPath, 1, 0, 0)
    $slideCount = $pres.Slides.Count
    Write-Host "Total slides: $slideCount"
    $out = [System.Collections.Generic.List[string]]::new()

    for ($i = 1; $i -le $slideCount; $i++) {
        Write-Host "Processing slide $i of $slideCount..."
        $slide = $pres.Slides.Item($i)
        if (Test-Path $pngPath) { Remove-Item $pngPath -Force }
        $slide.Export($pngPath, "PNG")
        
        # OCR the exported image
        $fileAsync = [Windows.Storage.StorageFile]::GetFileFromPathAsync($pngPath)
        $storageFile = Await-WinRT $fileAsync $storageFileType
        
        $streamAsync = $storageFile.OpenAsync([Windows.Storage.FileAccessMode]::Read)
        $readStream = Await-WinRT $streamAsync $streamType
        
        $decoderTask = [Windows.Graphics.Imaging.BitmapDecoder]::CreateAsync($readStream)
        $decoder = Await-WinRT $decoderTask $decoderType
        
        $bitmapTask = $decoder.GetSoftwareBitmapAsync()
        $bitmap = Await-WinRT $bitmapTask $softwareBitmapType
        
        # We can run both Japanese and Vietnamese OCR, or print both, or run JP first
        $ocrTaskJa = $ocrEngineJa.RecognizeAsync($bitmap)
        $ocrResultJa = Await-WinRT $ocrTaskJa $ocrResultType
        
        $ocrTaskVi = $ocrEngineVi.RecognizeAsync($bitmap)
        $ocrResultVi = Await-WinRT $ocrTaskVi $ocrResultType
        
        $out.Add("=== Slide $i (JA) ===")
        $out.Add($ocrResultJa.Text)
        $out.Add("=== Slide $i (VI) ===")
        $out.Add($ocrResultVi.Text)
        $out.Add("")
    }
    $pres.Close()
} catch {
    Write-Host "Error: $_"
} finally {
    if ($ppt) { $ppt.Quit() }
    if (Test-Path $pngPath) { Remove-Item $pngPath -Force }
}

[System.IO.File]::WriteAllLines($outputPath, $out, [System.Text.Encoding]::UTF8)
Write-Host "Done! Saved to $outputPath"
