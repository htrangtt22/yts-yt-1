$content = [System.IO.File]::ReadAllText("scratch/curriculum_normalized.txt", [System.Text.Encoding]::UTF8)
$slides = $content -split "---Slide"
$out = [System.Collections.Generic.List[string]]::new()

foreach ($slide in $slides) {
    if ([string]::IsNullOrWhiteSpace($slide)) { continue }
    $lines = $slide -split "`r`n"
    $lines = $lines | Where-Object { $_.Trim().Length -gt 0 }
    
    $header = $lines[0].Trim()
    $out.Add("=== Page " + $header + " ===")
    
    # Take first 8 non-empty lines
    $first8 = $lines | Select-Object -Skip 1 -First 8
    foreach ($fl in $first8) {
        $out.Add($fl.Trim())
    }
    $out.Add("")
}

[System.IO.File]::WriteAllLines("scratch/ocr_simplified.txt", $out, [System.Text.Encoding]::UTF8)
Write-Host "Simplified OCR written!"
