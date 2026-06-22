$pdfFile = Get-ChildItem -Path "pdf" -Filter "*.pdf" | Where-Object { $_.Name -like "*到達*" } | Select-Object -First 1
if (-not $pdfFile) {
    Write-Error "PDF file not found."
    exit 1
}
$pdfPath = $pdfFile.FullName
$outputPath = Join-Path (Get-Location).Path "scratch/curriculum_text.txt"

Write-Host "Found PDF: $pdfPath"
Write-Host "Output path: $outputPath"

try {
    Write-Host "Opening Word..."
    $word = New-Object -ComObject Word.Application
    
    Write-Host "Opening PDF in Word..."
    $doc = $word.Documents.Open($pdfPath, $false, $true)
    
    Write-Host "Extracting text..."
    $text = $doc.Content.Text
    
    $doc.Close(0) # wdDoNotSaveChanges = 0
    $word.Quit()
    
    [System.IO.File]::WriteAllText($outputPath, $text, [System.Text.Encoding]::UTF8)
    Write-Host "Saved to $outputPath"
} catch {
    Write-Host "Error: $_"
    if ($word) { $word.Quit() }
}
