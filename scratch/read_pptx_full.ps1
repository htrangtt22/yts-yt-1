$pptxPath = "c:\Users\TRANG TRUONG\.gemini\antigravity\scratch\yts-yt\pdf\SBO 1.1.1.pptx"
$outputPath = "c:\Users\TRANG TRUONG\.gemini\antigravity\scratch\yts-yt\scratch\sbo111_pptx_text.txt"

if (-not (Test-Path $pptxPath)) {
    Write-Host "File not found: $pptxPath"
    exit 1
}

try {
    Write-Host "Opening PowerPoint..."
    $ppt = New-Object -ComObject PowerPoint.Application
    # Enable macro-like accessibility if needed, open presentation
    $presentation = $ppt.Presentations.Open($pptxPath, 1, 0, 0)
    
    $outStr = ""
    $slideCount = $presentation.Slides.Count
    Write-Host "Total slides: $slideCount"
    
    for ($i = 1; $i -le $slideCount; $i++) {
        $slide = $presentation.Slides.Item($i)
        $outStr += "=== Slide $i ===`r`n"
        
        # Check shapes
        foreach ($shape in $slide.Shapes) {
            # 1. TextFrame
            try {
                if ($shape.HasTextFrame -eq -1) { # True in VBA/COM is -1
                    if ($shape.TextFrame.HasText -eq -1) {
                        $outStr += $shape.TextFrame.TextRange.Text + "`r`n"
                    }
                }
            } catch {}
            
            # 2. TextFrame2
            try {
                if ($shape.TextFrame2 -and $shape.TextFrame2.HasText -eq -1) {
                    $outStr += $shape.TextFrame2.TextRange.Text + "`r`n"
                }
            } catch {}
            
            # 3. Table
            try {
                if ($shape.HasTable -eq -1) {
                    $table = $shape.Table
                    for ($r = 1; $r -le $table.Rows.Count; $r++) {
                        for ($c = 1; $c -le $table.Columns.Count; $c++) {
                            $cell = $table.Cell($r, $c)
                            if ($cell.Shape.TextFrame.HasText -eq -1) {
                                $outStr += "[Table Row $r Col $c]: " + $cell.Shape.TextFrame.TextRange.Text + "`r`n"
                            }
                        }
                    }
                }
            } catch {}
            
            # 4. GroupItems
            try {
                if ($shape.Type -eq 6) { # msoGroup
                    foreach ($subShape in $shape.GroupItems) {
                        if ($subShape.HasTextFrame -eq -1 -and $subShape.TextFrame.HasText -eq -1) {
                            $outStr += $subShape.TextFrame.TextRange.Text + "`r`n"
                        }
                        if ($subShape.TextFrame2 -and $subShape.TextFrame2.HasText -eq -1) {
                            $outStr += $subShape.TextFrame2.TextRange.Text + "`r`n"
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
    Write-Host "Error: $_"
    if ($ppt) { $ppt.Quit() }
}
