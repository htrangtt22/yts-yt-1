$content = [System.IO.File]::ReadAllText("scratch/curriculum_text.txt", [System.Text.Encoding]::UTF8)
$lines = $content -split "`r`n"
$out = [System.Collections.Generic.List[string]]::new()

foreach ($line in $lines) {
    if ($line -match '[0-9]\s*\.\s*[0-9]\s*\.\s*[0-9]') {
        $out.Add("MATCH SBO: " + $line)
    } elseif ($line -match '[0-9]\s*\.\s*[0-9]') {
        $out.Add("MATCH GIO: " + $line)
    }
}

[System.IO.File]::WriteAllLines("scratch/matches.txt", $out, [System.Text.Encoding]::UTF8)
Write-Host "Found $($out.Count) matches"
