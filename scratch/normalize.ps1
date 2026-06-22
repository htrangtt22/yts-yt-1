$content = [System.IO.File]::ReadAllText("scratch/curriculum_text.txt", [System.Text.Encoding]::UTF8)

# Normalize spaces:
$normalized = $content
for ($i = 0; $i -lt 10; $i++) {
    $normalized = [regex]::Replace($normalized, '([a-zA-Z0-9\.\-\:])\s+([a-zA-Z0-9\.\-\:])', '$1$2')
}

for ($i = 0; $i -lt 10; $i++) {
    $normalized = [regex]::Replace($normalized, '([\p{IsHiragana}\p{IsKatakana}\p{IsCJKUnifiedIdeographs}])\s+([\p{IsHiragana}\p{IsKatakana}\p{IsCJKUnifiedIdeographs}])', '$1$2')
}

[System.IO.File]::WriteAllText("scratch/curriculum_normalized.txt", $normalized, [System.Text.Encoding]::UTF8)
Write-Host "Normalized!"
