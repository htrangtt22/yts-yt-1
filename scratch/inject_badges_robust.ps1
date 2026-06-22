$filePath = "c:\Users\TRANG TRUONG\.gemini\antigravity\scratch\yts-yt\index.html"
$utf8NoBom = New-Object System.Text.UTF8Encoding($false)
$content = [System.IO.File]::ReadAllText($filePath, $utf8NoBom)

$replacements = @(
    @{
        Target = @'
                <section id="section-1948" class="section">
                    <div class="container">
'@
        Replacement = @'
                <section id="section-1948" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">WHO憲章の土台</span>
                            <span class="lang-vi">Nền tảng Hiến chương WHO</span>
                        </div>
'@
    },
    @{
        Target = @'
                <section id="paradigm-shift" class="section">
                    <div class="container">
'@
        Replacement = @'
                <section id="paradigm-shift" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">健康概念のシフト</span>
                            <span class="lang-vi">Dịch chuyển khái niệm sức khỏe</span>
                        </div>
'@
    },
    @{
        Target = @'
                <section id="evolution-dynamic" class="section">
                    <div class="container">
'@
        Replacement = @'
                <section id="evolution-dynamic" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">1998年：動的健康</span>
                            <span class="lang-vi">1998: Sức khỏe động</span>
                        </div>
'@
    },
    @{
        Target = @'
                <section id="evolution-spiritual" class="section">
                    <div class="container">
'@
        Replacement = @'
                <section id="evolution-spiritual" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">人間の尊厳とQOL</span>
                            <span class="lang-vi">Phẩm giá & Chất lượng cuộc sống</span>
                        </div>
'@
    },
    @{
        Target = @'
                <section id="comparison" class="section">
                    <div class="container">
'@
        Replacement = @'
                <section id="comparison" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">新旧概念 of 比較</span>
                            <span class="lang-vi">So sánh khái niệm Cũ & Mới</span>
                        </div>
'@
    },
    @{
        Target = @'
                <section id="policy-goals" class="section">
                    <div class="container">
'@
        Replacement = @'
                <section id="policy-goals" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">医療政策の目標</span>
                            <span class="lang-vi">Mục tiêu chính sách y tế</span>
                        </div>
'@
    },
    @{
        Target = @'
                <section id="preventive-medicine" class="section">
                    <div class="container">
'@
        Replacement = @'
                <section id="preventive-medicine" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">予防医学の3段階</span>
                            <span class="lang-vi">3 cấp độ y học dự phòng</span>
                        </div>
'@
    },
    @{
        Target = @'
                <section id="sbo112-privacy-evolution" class="section">
                    <div class="container">
'@
        Replacement = @'
                <section id="sbo112-privacy-evolution" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">医療プライバシーの進化</span>
                            <span class="lang-vi">Tiến hóa quyền riêng tư y tế</span>
                        </div>
'@
    },
    @{
        Target = @'
                <section id="sbo112-trigger" class="section">
                    <div class="container">
'@
        Replacement = @'
                <section id="sbo112-trigger" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">意思決定の主体性</span>
                            <span class="lang-vi">Tính chủ thể trong quyết định</span>
                        </div>
'@
    },
    @{
        Target = @'
                <section id="sbo112-actions" class="section">
                    <div class="container">
'@
        Replacement = @'
                <section id="sbo112-actions" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">3つの具体的権利</span>
                            <span class="lang-vi">3 quyền cụ thể</span>
                        </div>
'@
    },
    @{
        Target = @'
                <section id="sbo112-responsibilities" class="section">
                    <div class="container">
'@
        Replacement = @'
                <section id="sbo112-responsibilities" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">医療者の新たな責務</span>
                            <span class="lang-vi">Trách nhiệm mới của y bác sĩ</span>
                        </div>
'@
    },
    @{
        Target = @'
                <section id="sbo112-harmony" class="section">
                    <div class="container">
'@
        Replacement = @'
                <section id="sbo112-harmony" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">保護と公益の調和</span>
                            <span class="lang-vi">Hòa hợp bảo mật & lợi ích công</span>
                        </div>
'@
    }
)

$normalizedContent = $content -replace "`r`n", "`n"

foreach ($rep in $replacements) {
    $targetNorm = $rep.Target -replace "`r`n", "`n"
    $replacementNorm = $rep.Replacement -replace "`r`n", "`n"
    
    if ($normalizedContent.Contains($targetNorm)) {
        $normalizedContent = $normalizedContent.Replace($targetNorm, $replacementNorm)
        Write-Host "Injected badge successfully!"
    } else {
        Write-Host "Warning: Target not found for: $($rep.Target)"
    }
}

$newContent = $normalizedContent -replace "`n", "`r`n"
[System.IO.File]::WriteAllText($filePath, $newContent, $utf8NoBom)
Write-Host "Badge injection complete!"
