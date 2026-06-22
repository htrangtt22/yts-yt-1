$content = [System.IO.File]::ReadAllText("scratch/curriculum_text.txt", [System.Text.Encoding]::UTF8)
$lines = $content -split "`r`n"
$out = [System.Collections.Generic.List[string]]::new()

foreach ($line in $lines) {
    # Remove extra spaces to see if we can find keywords
    $clean = $line -replace '\s+', ''
    if ($clean -match 'GIO|SBO|Chapter|章|第[0-9]章|到達目標|1\.[1-9]|2\.[1-9]|3\.[1-9]') {
        $out.Add($line)
    }
}

[System.IO.File]::WriteAllLines("scratch/structure_lines.txt", $out, [System.Text.Encoding]::UTF8)
Write-Host "Found $($out.Count) lines"
