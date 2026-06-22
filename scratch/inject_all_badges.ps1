# inject_all_badges.ps1
$htmlPath = "c:\Users\TRANG TRUONG\.gemini\antigravity\scratch\yts-yt\index.html"
$html = [System.IO.File]::ReadAllText($htmlPath, [System.Text.Encoding]::UTF8)

# SBO 1.1.1 badges
$replacements111 = @(
    @{
        target = "<section id=`"paradigm-shift`" class=`"section`">`r`n                    <div class=`"container`">`r`n                        <h2 class=`"section-title`">"
        badge = "                        <div class=`"section-badge`">`r`n                            <span class=`"lang-ja`">健康概念のシフト</span>`r`n                            <span class=`"lang-vi`">Dịch chuyển khái niệm sức khỏe</span>`r`n                        </div>"
    },
    @{
        target = "<section id=`"evolution-dynamic`" class=`"section`">`r`n                    <div class=`"container`">`r`n                        <h2 class=`"section-title`">"
        badge = "                        <div class=`"section-badge`">`r`n                            <span class=`"lang-ja`">1998年：動的健康</span>`r`n                            <span class=`"lang-vi`">1998: Sức khỏe động</span>`r`n                        </div>"
    },
    @{
        target = "<section id=`"evolution-spiritual`" class=`"section`">`r`n                    <div class=`"container`">`r`n                        <h2 class=`"section-title`">"
        badge = "                        <div class=`"section-badge`">`r`n                            <span class=`"lang-ja`">人間の尊厳とQOL</span>`r`n                            <span class=`"lang-vi`">Phẩm giá & Chất lượng cuộc sống</span>`r`n                        </div>"
    },
    @{
        target = "<section id=`"comparison`" class=`"section`">`r`n                    <div class=`"container`">`r`n                        <h2 class=`"section-title`">"
        badge = "                        <div class=`"section-badge`">`r`n                            <span class=`"lang-ja`">新旧概念の比較</span>`r`n                            <span class=`"lang-vi`">So sánh khái niệm Cũ & Mới</span>`r`n                        </div>"
    },
    @{
        target = "<section id=`"policy-goals`" class=`"section`">`r`n                    <div class=`"container`">`r`n                        <h2 class=`"section-title`">"
        badge = "                        <div class=`"section-badge`">`r`n                            <span class=`"lang-ja`">医療政策の目標</span>`r`n                            <span class=`"lang-vi`">Mục tiêu chính sách y tế</span>`r`n                        </div>"
    },
    @{
        target = "<section id=`"preventive-medicine`" class=`"section`">`r`n                    <div class=`"container`">`r`n                        <h2 class=`"section-title`">"
        badge = "                        <div class=`"section-badge`">`r`n                            <span class=`"lang-ja`">予防医学の3段階</span>`r`n                            <span class=`"lang-vi`">3 cấp độ y học dự phòng</span>`r`n                        </div>"
    }
)

# SBO 1.1.2 badges
$replacements112 = @(
    @{
        target = "<section id=`"sbo112-trigger`" class=`"section`">`r`n                    <div class=`"container`">`r`n                        <h2 class=`"section-title`">"
        badge = "                        <div class=`"section-badge`">`r`n                            <span class=`"lang-ja`">意思決定の主体性</span>`r`n                            <span class=`"lang-vi`">Tính chủ thể trong quyết định</span>`r`n                        </div>"
    },
    @{
        target = "<section id=`"sbo112-actions`" class=`"section`">`r`n                    <div class=`"container`">`r`n                        <h2 class=`"section-title`">"
        badge = "                        <div class=`"section-badge`">`r`n                            <span class=`"lang-ja`">3つの具体的権利</span>`r`n                            <span class=`"lang-vi`">3 quyền cụ thể</span>`r`n                        </div>"
    },
    @{
        target = "<section id=`"sbo112-responsibilities`" class=`"section`">`r`n                    <div class=`"container`">`r`n                        <h2 class=`"section-title`">"
        badge = "                        <div class=`"section-badge`">`r`n                            <span class=`"lang-ja`">医療者の新たな責務</span>`r`n                            <span class=`"lang-vi`">Trách nhiệm mới của y bác sĩ</span>`r`n                        </div>"
    },
    @{
        target = "<section id=`"sbo112-harmony`" class=`"section`">`r`n                    <div class=`"container`">`r`n                        <h2 class=`"section-title`">"
        badge = "                        <div class=`"section-badge`">`r`n                            <span class=`"lang-ja`">保護と公益の調和</span>`r`n                            <span class=`"lang-vi`">Hòa hợp bảo mật & lợi ích công</span>`r`n                        </div>"
    }
)

# Apply SBO 1.1.1
foreach ($r in $replacements111) {
    $t = $r.target
    $b = $r.badge
    if ($html.Contains($t)) {
        $rep = $t.Replace("<h2 class=`"section-title`">", $b + "`r`n                        <h2 class=`"section-title`">")
        $html = $html.Replace($t, $rep)
    } else {
        # Try LF
        $tLF = $t.Replace("`r`n", "`n")
        $bLF = $b.Replace("`r`n", "`n")
        if ($html.Contains($tLF)) {
            $repLF = $tLF.Replace("<h2 class=`"section-title`">", $bLF + "`n                        <h2 class=`"section-title`">")
            $html = $html.Replace($tLF, $repLF)
        }
    }
}

# Apply SBO 1.1.2
foreach ($r in $replacements112) {
    $t = $r.target
    $b = $r.badge
    if ($html.Contains($t)) {
        $rep = $t.Replace("<h2 class=`"section-title`">", $b + "`r`n                        <h2 class=`"section-title`">")
        $html = $html.Replace($t, $rep)
    } else {
        # Try LF
        $tLF = $t.Replace("`r`n", "`n")
        $bLF = $b.Replace("`r`n", "`n")
        if ($html.Contains($tLF)) {
            $repLF = $tLF.Replace("<h2 class=`"section-title`">", $bLF + "`n                        <h2 class=`"section-title`">")
            $html = $html.Replace($tLF, $repLF)
        }
    }
}

[System.IO.File]::WriteAllText($htmlPath, $html, [System.Text.Encoding]::UTF8)
Write-Host "Success: All sub-section badges injected into SBO 1.1.1 and SBO 1.1.2!"
