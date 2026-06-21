$path = "c:\Users\TRANG TRUONG\.gemini\antigravity\scratch\yts-yt\index.html"
$html = [System.IO.File]::ReadAllText($path, [System.Text.Encoding]::UTF8)

# Replace the text lines directly
$html = $html.Replace("1948年（Slide 2）", "1948年")
$html = $html.Replace("Năm 1948 (Slide 2)", "Năm 1948")
$html = $html.Replace("1998年 新提案（Slide 3, 4）", "1998年 新提案")
$html = $html.Replace("Năm 1998 Đề xuất mới (Slide 3, 4)", "Năm 1998 Đề xuất mới")
$html = $html.Replace("政策の方向性（Slide 7, 8）", "政策の方向性")
$html = $html.Replace("Định hướng chính sách (Slide 7, 8)", "Định hướng chính sách")

[System.IO.File]::WriteAllText($path, $html, [System.Text.Encoding]::UTF8)
Write-Host "Replaced successfully!"
