# inject_all_badges_clean.ps1
$htmlPath = "c:\Users\TRANG TRUONG\.gemini\antigravity\scratch\yts-yt\index.html"
$html = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)

# SBO 1.1.1
$t1 = '<section id="paradigm-shift" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <h2 class="section-title">'
$b1 = '<section id="paradigm-shift" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <div class="section-badge">' + "`r`n" + '                            <span class="lang-ja">健康概念のシフト</span>' + "`r`n" + '                            <span class="lang-vi">Dịch chuyển khái niệm sức khỏe</span>' + "`r`n" + '                        </div>' + "`r`n" + '                        <h2 class="section-title">'

$t2 = '<section id="evolution-dynamic" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <h2 class="section-title">'
$b2 = '<section id="evolution-dynamic" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <div class="section-badge">' + "`r`n" + '                            <span class="lang-ja">1998年：動的健康</span>' + "`r`n" + '                            <span class="lang-vi">1998: Sức khỏe động</span>' + "`r`n" + '                        </div>' + "`r`n" + '                        <h2 class="section-title">'

$t3 = '<section id="evolution-spiritual" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <h2 class="section-title">'
$b3 = '<section id="evolution-spiritual" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <div class="section-badge">' + "`r`n" + '                            <span class="lang-ja">人間の尊厳とQOL</span>' + "`r`n" + '                            <span class="lang-vi">Phẩm giá & Chất lượng cuộc sống</span>' + "`r`n" + '                        </div>' + "`r`n" + '                        <h2 class="section-title">'

$t4 = '<section id="comparison" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <h2 class="section-title">'
$b4 = '<section id="comparison" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <div class="section-badge">' + "`r`n" + '                            <span class="lang-ja">新旧概念の比較</span>' + "`r`n" + '                            <span class="lang-vi">So sánh khái niệm Cũ & Mới</span>' + "`r`n" + '                        </div>' + "`r`n" + '                        <h2 class="section-title">'

$t5 = '<section id="policy-goals" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <h2 class="section-title">'
$b5 = '<section id="policy-goals" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <div class="section-badge">' + "`r`n" + '                            <span class="lang-ja">医療政策の目標</span>' + "`r`n" + '                            <span class="lang-vi">Mục tiêu chính sách y tế</span>' + "`r`n" + '                        </div>' + "`r`n" + '                        <h2 class="section-title">'

$t6 = '<section id="preventive-medicine" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <h2 class="section-title">'
$b6 = '<section id="preventive-medicine" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <div class="section-badge">' + "`r`n" + '                            <span class="lang-ja">予防医学の3段階</span>' + "`r`n" + '                            <span class="lang-vi">3 cấp độ y học dự phòng</span>' + "`r`n" + '                        </div>' + "`r`n" + '                        <h2 class="section-title">'

# SBO 1.1.2
$t7 = '<section id="sbo112-trigger" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <h2 class="section-title">'
$b7 = '<section id="sbo112-trigger" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <div class="section-badge">' + "`r`n" + '                            <span class="lang-ja">意思決定の主体性</span>' + "`r`n" + '                            <span class="lang-vi">Tính chủ thể trong quyết định</span>' + "`r`n" + '                        </div>' + "`r`n" + '                        <h2 class="section-title">'

$t8 = '<section id="sbo112-actions" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <h2 class="section-title">'
$b8 = '<section id="sbo112-actions" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <div class="section-badge">' + "`r`n" + '                            <span class="lang-ja">3つの具体的権利</span>' + "`r`n" + '                            <span class="lang-vi">3 quyền cụ thể</span>' + "`r`n" + '                        </div>' + "`r`n" + '                        <h2 class="section-title">'

$t9 = '<section id="sbo112-responsibilities" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <h2 class="section-title">'
$b9 = '<section id="sbo112-responsibilities" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <div class="section-badge">' + "`r`n" + '                            <span class="lang-ja">医療者の新たな責務</span>' + "`r`n" + '                            <span class="lang-vi">Trách nhiệm mới của y bác sĩ</span>' + "`r`n" + '                        </div>' + "`r`n" + '                        <h2 class="section-title">'

$t10 = '<section id="sbo112-harmony" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <h2 class="section-title">'
$b10 = '<section id="sbo112-harmony" class="section">' + "`r`n" + '                    <div class="container">' + "`r`n" + '                        <div class="section-badge">' + "`r`n" + '                            <span class="lang-ja">保護と公益の調和</span>' + "`r`n" + '                            <span class="lang-vi">Hòa hợp bảo mật & lợi ích công</span>' + "`r`n" + '                        </div>' + "`r`n" + '                        <h2 class="section-title">'

# Loop through and replace
$pairs = @(
    @($t1, $b1), @($t2, $b2), @($t3, $b3), @($t4, $b4), @($t5, $b5), @($t6, $b6),
    @($t7, $b7), @($t8, $b8), @($t9, $b9), @($t10, $b10)
)

foreach ($pair in $pairs) {
    $t = $pair[0]
    $b = $pair[1]
    
    if ($html.Contains($t)) {
        $html = $html.Replace($t, $b)
    } else {
        # Try LF
        $tLF = $t.Replace("`r`n", "`n")
        $bLF = $b.Replace("`r`n", "`n")
        if ($html.Contains($tLF)) {
            $html = $html.Replace($tLF, $bLF)
        }
    }
}

[System.IO.File]::WriteAllText($htmlPath, $html, [System.Text.Encoding]::UTF8)
Write-Host "Success!"
