$content = [System.IO.File]::ReadAllText("scratch/curriculum_text.txt", [System.Text.Encoding]::UTF8)
$slides = $content -split "--- Slide "
$out = [System.Collections.Generic.List[string]]::new()

foreach ($slide in $slides) {
    if ([string]::IsNullOrWhiteSpace($slide)) { continue }
    $lines = $slide -split "`r`n"
    $lines = $lines | Where-Object { $_.Trim().Length -gt 0 }
    if ($lines.Count -gt 0) {
        $header = $lines[0].Trim()
        $firstLines = ($lines | Select-Object -First 3) -join " | "
        $out.Add("Slide " + $header + ": " + $firstLines)
    }
}

[System.IO.File]::WriteAllLines("scratch/slide_headers.txt", $out, [System.Text.Encoding]::UTF8)
Write-Host "Done!"
