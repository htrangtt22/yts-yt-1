$pptxPath = "c:\Users\TRANG TRUONG\.gemini\antigravity\scratch\yts-yt\pdf\SBO 1.1.3.pptx"
$outputPath = "c:\Users\TRANG TRUONG\.gemini\antigravity\scratch\yts-yt\scratch\sbo113_pptx_text.txt"

if (-not (Test-Path $pptxPath)) {
    Write-Host "File not found: $pptxPath"
    exit 1
}

try {
    Write-Host "Opening PowerPoint..."
    $ppt = New-Object -ComObject PowerPoint.Application
    
    # Open presentation as read-only and without window (msoFalse for Visible)
    # Open(fileName, ReadOnly, Untitled, WithWindow)
    $presentation = $ppt.Presentations.Open($pptxPath, 1, 0, 0)
    
    $outStr = ""
    $slideCount = $presentation.Slides.Count
    Write-Host "Total slides: $slideCount"
    
    for ($i = 1; $i -le $slideCount; $i++) {
        $slide = $presentation.Slides.Item($i)
        $outStr += "=== Slide $i ===`r`n"
        
        # Extract all text from shapes
        foreach ($shape in $slide.Shapes) {
            try {
                if ($shape.HasTextFrame) {
                    if ($shape.TextFrame.HasText) {
                        $outStr += $shape.TextFrame.TextRange.Text + "`r`n"
                    }
                }
            } catch {}
            
            # If shape is a group, check items in group
            try {
                if ($shape.Type -eq 6) { # msoGroup
                    foreach ($subShape in $shape.GroupItems) {
                        if ($subShape.HasTextFrame -and $subShape.TextFrame.HasText) {
                            $outStr += $subShape.TextFrame.TextRange.Text + "`r`n"
                        }
                    }
                }
            } catch {}
        }
        
        $outStr += "`r`n"
    }
    
    $presentation.Close()
    $ppt.Quit()
    
    [System.IO.File]::WriteAllText($outputPath, $outStr, [System.Text.Encoding]::UTF8)
    Write-Host "Completed! Saved to $outputPath"
} catch {
    Write-Host "Error occurred: $_"
    if ($ppt) { $ppt.Quit() }
}
