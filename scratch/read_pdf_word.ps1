$pdfPath = "C:\Users\TRANG TRUONG\Downloads\Health_Redefined.pdf"
$outputPath = "c:\Users\TRANG TRUONG\.gemini\antigravity\scratch\yts-yt\scratch\health_redefined_text.txt"

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
