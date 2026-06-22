# ocr_pptx_titles.ps1
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

if ($ocrEngineJa -eq $null) {
    $ocrEngineJa = [Windows.Media.Ocr.OcrEngine]::TryCreateFromUserProfileLanguages()
}

$ppt = New-Object -ComObject PowerPoint.Application
$files = Get-ChildItem -Path "pdf" -Filter "*.pptx" | Sort-Object Name
$out = [System.Collections.Generic.List[string]]::new()

foreach ($file in $files) {
    $pptxPath = $file.FullName
    $pngPath = Join-Path (Get-Location).Path "scratch/temp_title.png"
    
    try {
        $pres = $ppt.Presentations.Open($pptxPath, 1, 0, 0)
        if ($pres.Slides.Count -ge 1) {
            $slide = $pres.Slides.Item(1)
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
            
            $ocrTask = $ocrEngineJa.RecognizeAsync($bitmap)
            $ocrResult = Await-WinRT $ocrTask $ocrResultType
            
            $cleanText = $ocrResult.Text -replace "\r?\n", " "
            $out.Add("$($file.Name) : $cleanText")
            Write-Host "$($file.Name) OCR finished"
        }
        $pres.Close()
    } catch {
        Write-Host "Error processing $($file.Name): $_"
    }
}

$ppt.Quit()

[System.IO.File]::WriteAllLines("scratch/pptx_titles.txt", $out, [System.Text.Encoding]::UTF8)
Write-Host "Done!"
