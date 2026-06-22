# replace_first_badges.ps1
$htmlPath = "c:\Users\TRANG TRUONG\.gemini\antigravity\scratch\yts-yt\index.html"
$jsonPath = "c:\Users\TRANG TRUONG\.gemini\antigravity\scratch\yts-yt\scratch\badges_shift.json"

$html = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)
$jsonText = [System.IO.File]::ReadAllText($jsonPath, [System.Text.Encoding]::UTF8)
$badgeShifts = ConvertFrom-Json $jsonText

# We know the raw badges mapping to replace
$rawBadges = @{
    "section-1948" = "SBO 1.1.1"
    "sbo112-privacy-evolution" = "SBO 1.1.2"
    "sbo122" = "SBO 1.2.2"
    "sbo123" = "SBO 1.2.3"
    "sbo211" = "SBO 2.1.1"
    "sbo212" = "SBO 2.1.2"
    "sbo213" = "SBO 2.1.3"
    "sbo214" = "SBO 2.1.4"
    "sbo311" = "SBO 3.1.1"
    "sbo312" = "SBO 3.1.2"
    "sbo411" = "SBO 4.1.1"
    "sbo412" = "SBO 4.1.2"
}

foreach ($b in $badgeShifts) {
    $id = $b.id
    $ja = $b.ja
    $vi = $b.vi
    $rawSbo = $rawBadges[$id]
    
    $targetText = "                        <div class=`"section-badge`">`r`n                            <span class=`"lang-ja`">$rawSbo</span>`r`n                            <span class=`"lang-vi`">$rawSbo</span>`r`n                        </div>"
    $replacement = "                        <div class=`"section-badge`">`r`n                            <span class=`"lang-ja`">$ja</span>`r`n                            <span class=`"lang-vi`">$vi</span>`r`n                        </div>"
    
    if ($html.Contains($targetText)) {
        $html = $html.Replace($targetText, $replacement)
        Write-Host "Replaced badge for $id (CRLF)"
    } else {
        # Try LF
        $targetTextLF = "                        <div class=`"section-badge`">\n                            <span class=`"lang-ja`">$rawSbo</span>\n                            <span class=`"lang-vi`">$rawSbo</span>\n                        </div>"
        $replacementLF = "                        <div class=`"section-badge`">\n                            <span class=`"lang-ja`">$ja</span>\n                            <span class=`"lang-vi`">$vi</span>\n                        </div>"
        if ($html.Contains($targetTextLF)) {
            $html = $html.Replace($targetTextLF, $replacementLF)
            Write-Host "Replaced badge for $id (LF)"
        } else {
            Write-Host "Warning: raw badge pattern for $id ($rawSbo) not found"
        }
    }
}

[System.IO.File]::WriteAllText($htmlPath, $html, [System.Text.Encoding]::UTF8)
Write-Host "Completed!"
