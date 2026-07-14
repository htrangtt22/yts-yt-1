// Auto-generated SBO Template Component
window.SBO_TEMPLATES = window.SBO_TEMPLATES || {};
window.SBO_TEMPLATES['sbo122'] = `<div id="sbo122" class="sbo-section-wrapper">

    <!-- SECTION I: プライバシーと守秘義務 (Quyền riêng tư và Nghĩa vụ bảo mật) -->
    <section id="sbo122-sec1" class="section">
        <div class="container">
            <!-- Section Badge styled like 1.2.1 -->
            <div class="section-badge" style="margin-bottom: 12px;">
                <span class="lang-ja">プライバシーと守秘義務</span>
                <span class="lang-vi">Quyền riêng tư và Nghĩa vụ bảo mật</span>
            </div>
            <h2 class="section-title" style="margin-bottom: 24px;">
                <span class="lang-ja">プライバシーと守秘義務</span>
                <span class="lang-vi">Quyền riêng tư và Nghĩa vụ bảo mật</span>
            </h2>
            
            <!-- SECTION: Two Wheels of Confidentiality & Disclosure (Interactive Visualizer) -->
            <div class="card glass-card sub-module-card" style="margin-top: 15px; margin-bottom: 25px; padding: 25px; box-sizing: border-box; width: 100%;">
                <div style="font-size: 0.82rem; font-weight: 700; text-transform: uppercase; color: var(--accent-gold); letter-spacing: 0.5px; margin-bottom: 8px;">
                    <span class="lang-ja">核心理念：表裏一体の両輪</span>
                    <span class="lang-vi">Triết lý cốt lõi: Hai mặt song hành</span>
                </div>
                
                <h3 style="margin-top: 0; margin-bottom: 12px; font-size: 1.15rem; color: #fff;">
                    <span class="lang-ja">「隠す」ことと「見せる」ことは、相反する概念ではない</span>
                    <span class="lang-vi">"Che giấu" và "Công khai" không phải là các khái niệm đối lập</span>
                </h3>
                <p class="small-desc" style="margin-bottom: 20px; color: var(--text-secondary); line-height: 1.6;">
                    <span class="lang-ja">「個人情報の厳重な保護」と「積極的な情報開示」は、現代の「患者中心の医療」を実現するために同じ速度で回転するべき「表裏一体の両輪」です。どちらか一方が欠けても、医療の質（カート）は前に進みません。</span>
                    <span class="lang-vi">"Bảo vệ nghiêm ngặt thông tin cá nhân" và "Chủ động công khai thông tin" là hai bánh xe của một cỗ xe. Cả hai phải quay cùng tốc độ để thúc đẩy nền y tế lấy bệnh nhân làm trung tâm tiến về phía trước.</span>
                </p>

                <!-- Interactive Chassis & Wheels Graphic -->
                <div style="background: rgba(15, 23, 42, 0.4); border-radius: 16px; padding: 30px 20px; border: 1px solid rgba(255,255,255,0.04); margin-bottom: 25px; display: flex; flex-direction: column; align-items: center; justify-content: center; box-sizing: border-box; width: 100%;">
                    
                    <!-- SVG Visualizer (Fully responsive single SVG container) -->
                    <div style="width: 100%; max-width: 500px; margin: 10px 0;">
                        <svg viewBox="0 0 500 170" width="100%" height="auto" style="overflow: visible;">
                            <!-- Connection Shaft (Chassis) -->
                            <rect x="100" y="72" width="300" height="16" rx="4" fill="rgba(255,255,255,0.1)" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />
                            <line x1="100" y1="80" x2="400" y2="80" stroke="#38bdf8" stroke-width="2" stroke-dasharray="8 6" style="animation: shaft-pulse 2s linear infinite;" />

                            <!-- Center Carriage (Patient Centricity) -->
                            <g transform="translate(180, 45)">
                                <rect x="0" y="0" width="140" height="54" rx="8" fill="#0f172a" stroke="#0ea5e9" stroke-width="2" filter="drop-shadow(0 0 8px rgba(14,165,233,0.3))" />
                                <text x="70" y="24" fill="#38bdf8" font-size="10.5" font-weight="900" text-anchor="middle" letter-spacing="0.5">患者中心の医療</text>
                                <text x="70" y="40" fill="#94a3b8" font-size="8" font-weight="700" text-anchor="middle">Patient-Centric Care</text>
                            </g>

                            <!-- Left Wheel (Vault) - Interactive Group -->
                            <svg x="50" y="30" width="100" height="100" viewBox="0 0 100 100" id="sbo122-wheel-left" class="sbo122-interactive-wheel active" style="overflow: visible; cursor: pointer;">
                                <!-- Glowing Outer Ring -->
                                <circle cx="50" cy="50" r="44" fill="rgba(15,23,42,0.9)" stroke="var(--accent-gold)" stroke-width="2.5" class="wheel-ring" style="transition: all 0.3s ease;" />
                                <!-- Spoke indicators -->
                                <line x1="50" y1="6" x2="50" y2="94" stroke="rgba(234, 179, 8, 0.4)" stroke-width="1.5" class="wheel-spokes" />
                                <line x1="6" y1="50" x2="94" y2="50" stroke="rgba(234, 179, 8, 0.4)" stroke-width="1.5" class="wheel-spokes" />
                                <circle cx="50" cy="50" r="32" fill="#1e293b" stroke="var(--accent-gold)" stroke-width="1.5" />
                                <!-- Icon in center -->
                                <g transform="translate(38, 38)">
                                    <path d="M6 2a4 4 0 0 0-4 4v12a4 4 0 0 0 4 4h12a4 4 0 0 0 4-4V6a4 4 0 0 0-4-4H6zm0 2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z" fill="var(--accent-gold)"/>
                                    <circle cx="12" cy="12" r="3" fill="var(--accent-gold)" />
                                </g>
                            </svg>
                            <!-- Label Left -->
                            <text x="100" y="155" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--accent-gold)">守秘・保護 (Vault)</text>

                            <!-- Right Wheel (Transparent) - Interactive Group -->
                            <svg x="350" y="30" width="100" height="100" viewBox="0 0 100 100" id="sbo122-wheel-right" class="sbo122-interactive-wheel" style="overflow: visible; cursor: pointer;">
                                <!-- Glowing Outer Ring -->
                                <circle cx="50" cy="50" r="44" fill="rgba(15,23,42,0.9)" stroke="var(--accent-teal)" stroke-width="2.5" class="wheel-ring" style="transition: all 0.3s ease;" />
                                <!-- Spoke indicators -->
                                <line x1="50" y1="6" x2="50" y2="94" stroke="rgba(45, 212, 191, 0.4)" stroke-width="1.5" class="wheel-spokes" />
                                <line x1="6" y1="50" x2="94" y2="50" stroke="rgba(45, 212, 191, 0.4)" stroke-width="1.5" class="wheel-spokes" />
                                <circle cx="50" cy="50" r="32" fill="#1e293b" stroke="var(--accent-teal)" stroke-width="1.5" />
                                <!-- Icon in center -->
                                <g transform="translate(38, 38)">
                                    <path d="M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z" fill="var(--accent-teal)" />
                                </g>
                            </svg>
                            <!-- Label Right -->
                            <text x="400" y="155" text-anchor="middle" font-size="11" font-weight="bold" fill="var(--accent-teal)">開示・共有 (Transparent)</text>
                        </svg>
                    </div>

                    <style>
                        @keyframes shaft-pulse {
                            0% { stroke-dashoffset: 0; }
                            100% { stroke-dashoffset: 28; }
                        }
                        @keyframes wheel-spin-clockwise {
                            0% { transform: rotate(0deg); }
                            100% { transform: rotate(360deg); }
                        }
                        .sbo122-interactive-wheel.active .wheel-spokes {
                            transform-origin: 50px 50px;
                            animation: wheel-spin-clockwise 10s linear infinite;
                        }
                        .sbo122-interactive-wheel.active .wheel-ring {
                            stroke-width: 4px;
                            filter: drop-shadow(0 0 6px var(--accent-gold));
                        }
                        #sbo122-wheel-right.active .wheel-ring {
                            filter: drop-shadow(0 0 6px var(--accent-teal));
                        }
                    </style>

                </div>

                <!-- Display Box for Active Wheel details -->
                <div id="sbo122-wheel-details-card" class="card glass-card text-left" style="padding: 24px; border-left: 5px solid var(--accent-gold); background: rgba(255,255,255,0.02); transition: all 0.3s ease; box-sizing: border-box; width: 100%;">
                    <!-- Details content injected dynamically by JS -->
                </div>

            </div>
            
            <!-- SECTION I-1: Comparison of "Personal Information" vs "Privacy" -->
            <div style="text-align: center; margin-bottom: 12px; margin-top: 10px;">
                <h3 style="color: #fff; font-size: 1.15rem; font-weight: 600; display: inline-flex; align-items: center; gap: 8px;">
                    <i class="fa-solid fa-scale-unbalanced" style="color: var(--accent-gold);"></i>
                    <span class="lang-ja">概念の違い：「個人情報」対「プライバシー」</span>
                    <span class="lang-vi">Khác biệt khái niệm: "Thông tin cá nhân" vs "Quyền riêng tư"</span>
                </h3>
            </div>

            <div class="grid-2col" style="gap: 24px; margin-bottom: 30px;">
                
                <!-- Left: Personal Information (Objective Data) -->
                <div class="card glass-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; border: 1.5px solid rgba(255,255,255,0.06); background: rgba(15, 23, 42, 0.35); border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.25); margin-bottom: 0;">
                    <!-- Illustration Header -->
                    <div style="background: rgba(15,23,42,0.4); display: flex; align-items: center; justify-content: center; padding: 20px 10px; border-bottom: 1px solid rgba(255,255,255,0.04); min-height: 160px;">
                        <svg width="220" height="150" viewBox="0 0 220 150">
                            <defs>
                                <linearGradient id="info-shield-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#1e293b" />
                                    <stop offset="100%" stop-color="#0f172a" />
                                </linearGradient>
                            </defs>
                            <path d="M 110 10 L 170 30 C 170 90 140 125 110 140 C 80 125 50 90 50 30 Z" fill="url(#info-shield-grad)" stroke="#475569" stroke-width="2" />
                            <rect x="75" y="45" width="60" height="70" rx="4" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5" transform="rotate(-8 105 80)" />
                            <line x1="85" y1="65" x2="125" y2="59" stroke="#93c5fd" stroke-width="1.5" transform="rotate(-8 105 80)" />
                            <line x1="85" y1="78" x2="115" y2="74" stroke="#93c5fd" stroke-width="1.5" transform="rotate(-8 105 80)" />
                            <rect x="85" y="55" width="70" height="50" rx="6" fill="#fff" stroke="#94a3b8" stroke-width="1.5" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))" />
                            <rect x="93" y="63" width="18" height="22" rx="2" fill="#e2e8f0" />
                            <circle cx="102" cy="70" r="4" fill="#64748b" />
                            <path d="M 95 83 Q 102 78 109 83 Z" fill="#64748b" />
                            <line x1="118" y1="68" x2="145" y2="68" stroke="#94a3b8" stroke-width="2" />
                            <line x1="118" y1="76" x2="140" y2="76" stroke="#94a3b8" stroke-width="2" />
                            <line x1="118" y1="84" x2="135" y2="84" stroke="#94a3b8" stroke-width="2" />
                            <rect x="98" y="98" width="24" height="20" rx="3" fill="#fbbf24" filter="drop-shadow(0 2px 4px rgba(0,0,0,0.4))" />
                            <path d="M 103 98 L 103 91 A 7 7 0 0 1 117 91 L 117 98" fill="none" stroke="#fbbf24" stroke-width="2.5" />
                            <circle cx="110" cy="107" r="2" fill="#1e293b" />
                            <line x1="110" y1="109" x2="110" y2="114" stroke="#1e293b" stroke-width="2" />
                        </svg>
                    </div>
                    <div style="background: linear-gradient(90deg, #1e3a8a, #1d4ed8); padding: 12px 20px; text-align: center;">
                        <h4 style="margin: 0; color: #fff; font-size: 1.05rem; font-weight: bold; letter-spacing: 0.5px;">
                            <span class="lang-ja">個人情報（客観的データ）</span>
                            <span class="lang-vi">Thông tin cá nhân (Dữ liệu khách quan)</span>
                        </h4>
                    </div>
                    <div style="padding: 24px; flex-grow: 1; display: flex; flex-direction: column; gap: 15px;">
                        <div style="display: flex; flex-direction: column; gap: 6px;">
                            <span style="font-size: 0.78rem; font-weight: bold; text-transform: uppercase; color: var(--accent-gold); letter-spacing: 0.5px;">
                                <span class="lang-ja">定義</span>
                                <span class="lang-vi">Định nghĩa</span>
                            </span>
                            <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: #fff; font-weight: 500;">
                                <span class="lang-ja">特定の個人を識別できる情報。</span>
                                <span class="lang-vi">Các thông tin bằng cách trực tiếp hoặc gián tiếp nhận diện được một cá nhân cụ thể.</span>
                            </p>
                        </div>
                        <div style="height: 1px; background: rgba(255,255,255,0.06); width: 100%;"></div>
                        <div style="display: flex; flex-direction: column; gap: 6px;">
                            <span style="font-size: 0.78rem; font-weight: bold; text-transform: uppercase; color: var(--accent-gold); letter-spacing: 0.5px;">
                                <span class="lang-ja">性質</span>
                                <span class="lang-vi">Tính chất</span>
                            </span>
                            <p style="margin: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">
                                <span class="lang-ja">事実としての記録（氏名、住所、生年月日、基礎年金番号、カルテ番号、検査データなど）。</span>
                                <span class="lang-vi">Bản ghi mang tính sự thật khách quan (Họ tên, ngày sinh, số bệnh án, kết quả xét nghiệm...).</span>
                            </p>
                        </div>
                    </div>
                </div>

                <!-- Right: Privacy (Subjective Right) -->
                <div class="card glass-card" style="padding: 0; overflow: hidden; display: flex; flex-direction: column; border: 1.5px solid rgba(255,255,255,0.06); background: rgba(15, 23, 42, 0.35); border-radius: 16px; box-shadow: 0 8px 32px rgba(0,0,0,0.25); margin-bottom: 0;">
                    <div style="background: rgba(15,23,42,0.4); display: flex; align-items: center; justify-content: center; padding: 20px 10px; border-bottom: 1px solid rgba(255,255,255,0.04); min-height: 160px;">
                        <svg width="220" height="150" viewBox="0 0 220 150">
                            <defs>
                                <linearGradient id="shield-teal-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#2dd4bf" stop-opacity="0.1" />
                                    <stop offset="100%" stop-color="#14b8a6" stop-opacity="0.25" />
                                </linearGradient>
                                <linearGradient id="shield-glow" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="#2dd4bf" />
                                    <stop offset="100%" stop-color="#0d9488" />
                                </linearGradient>
                            </defs>
                            <circle cx="110" cy="62" r="20" fill="none" stroke="#2dd4bf" stroke-width="2" />
                            <path d="M 75 125 C 75 100 90 90 110 90 C 130 90 145 100 145 125 Z" fill="none" stroke="#2dd4bf" stroke-width="2" />
                            <path d="M 110 50 L 150 62 C 150 102 130 122 110 132 C 90 122 70 102 70 62 Z" fill="url(#shield-teal-grad)" stroke="url(#shield-glow)" stroke-width="2.5" filter="drop-shadow(0 0 10px rgba(45,212,191,0.5))" />
                            <path d="M 103 91 L 108 96 L 117 87" fill="none" stroke="#2dd4bf" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
                            <circle cx="110" cy="91" r="16" fill="none" stroke="#2dd4bf" stroke-width="1.5" stroke-dasharray="3 3" />
                        </svg>
                    </div>
                    <div style="background: linear-gradient(90deg, #0d9488, #14b8a6); padding: 12px 20px; text-align: center;">
                        <h4 style="margin: 0; color: #fff; font-size: 1.05rem; font-weight: bold; letter-spacing: 0.5px;">
                            <span class="lang-ja">プライバシー（主観的権利）</span>
                            <span class="lang-vi">Quyền riêng tư (Quyền chủ quan)</span>
                        </h4>
                    </div>
                    <div style="padding: 24px; flex-grow: 1; display: flex; flex-direction: column; gap: 15px;">
                        <div style="display: flex; flex-direction: column; gap: 6px;">
                            <span style="font-size: 0.78rem; font-weight: bold; text-transform: uppercase; color: var(--accent-teal); letter-spacing: 0.5px;">
                                <span class="lang-ja">定義</span>
                                <span class="lang-vi">Định nghĩa</span>
                            </span>
                            <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: #fff; font-weight: 500;">
                                <span class="lang-ja">本人がその情報を開示しないで欲しいと望む情報。</span>
                                <span class="lang-vi">Thông tin mà bản thân cá nhân có nguyện vọng chính đáng không muốn bị tiết lộ hay công khai.</span>
                            </p>
                        </div>
                        <div style="height: 1px; background: rgba(255,255,255,0.06); width: 100%;"></div>
                        <div style="display: flex; flex-direction: column; gap: 6px;">
                            <span style="font-size: 0.78rem; font-weight: bold; text-transform: uppercase; color: var(--accent-teal); letter-spacing: 0.5px;">
                                <span class="lang-ja">性質</span>
                                <span class="lang-vi">Tính chất</span>
                            </span>
                            <p style="margin: 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">
                                <span class="lang-ja">保護されるべき個人の領域と感情（病歴、遺伝情報、身体的特徴、私生活の事実など）。</span>
                                <span class="lang-vi">Lĩnh vực cá nhân và đời tư nhạy cảm cần được bảo vệ (Bệnh sử, dữ liệu di truyền, đặc điểm cơ thể, đời tư...).</span>
                            </p>
                        </div>
                    </div>
                </div>

            </div>
            
            <!-- SECTION I-2: Pillars of Confidentiality (Visual Temple) -->
            <div class="card glass-card text-left" style="padding: 25px; margin-bottom: 25px; border-top: 4px solid var(--accent-teal); box-sizing: border-box; width: 100%;">
                
                <!-- Section Title -->
                <h3 style="color: var(--accent-teal); margin-top: 0; margin-bottom: 12px; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                    <i class="fa-solid fa-hotel"></i>
                    <span class="lang-ja">医療従事者の厳格な守秘義務（Pillars of Confidentiality）</span>
                    <span class="lang-vi">Nghĩa vụ bảo mật nghiêm ngặt của nhân viên y tế (Pillars of Confidentiality)</span>
                </h3>
                <p class="small-desc" style="line-height: 1.7; color: var(--text-secondary); margin-bottom: 25px;">
                    <span class="lang-ja">診療情報を扱う上で、<strong>守秘義務は医療者に課せられる義務であり、プライバシーは患者の権利です</strong>。医療従事者にはモラルと各専門職に定められた法規範（刑法や医師法など）により厳格な守秘義務が定められています。</span>
                    <span class="lang-vi">Trong y tế, **bảo mật là nghĩa vụ của nhân viên y tế, còn riêng tư là quyền của bệnh nhân**. Sự bảo mật này được củng cố bởi hai trụ cột cốt lõi: Quy phạm đạo đức nghề nghiệp và Quy phạm pháp luật hiện hành.</span>
                </p>

                <!-- Pillars of Confidentiality Visual Temple -->
                <div style="display: flex; flex-direction: column; align-items: center; background: rgba(15, 23, 42, 0.4); border-radius: 12px; padding: 25px 20px; border: 1px solid rgba(255,255,255,0.04); box-sizing: border-box; width: 100%; overflow-x: auto;">
                    <h4 style="margin: 0 0 20px 0; color: #fff; font-size: 0.95rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; display: flex; align-items: center; gap: 8px;">
                        <i class="fa-solid fa-columns"></i>
                        <span>Pillars of Confidentiality</span>
                    </h4>

                    <div style="position: relative; width: 100%; max-width: 650px; min-width: 580px; height: 260px; margin: 10px auto; display: flex; flex-direction: column; justify-content: space-between; box-sizing: border-box;">
                        
                        <!-- Temple Roof: Basic Principle of Medicine (Trust) -->
                        <div style="width: 100%; height: 42px; background: linear-gradient(180deg, #0f766e, #115e59); border: 2px solid #2dd4bf; clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%); display: flex; align-items: center; justify-content: center; position: relative; box-shadow: 0 4px 10px rgba(13,148,136,0.3);">
                            <span style="font-size: 0.88rem; font-weight: 900; color: #fff; text-shadow: 0 2px 4px rgba(0,0,0,0.5); letter-spacing: 1px; text-align: center;">
                                <span class="lang-ja">医療の基本原則（患者からの信頼）</span>
                                <span class="lang-vi">NGUYÊN TẮC CƠ BẢN CỦA Y KHOA (NIỀM TIN TỪ NGƯỜI BỆNH)</span>
                            </span>
                        </div>
                        <!-- Architrave -->
                        <div style="width: 96%; height: 10px; background: #115e59; border: 2px solid #2dd4bf; border-top: none; margin: 0 auto; border-radius: 2px; box-shadow: 0 3px 6px rgba(0,0,0,0.3);"></div>

                        <!-- Two Pillars of Confidentiality -->
                        <div style="display: flex; justify-content: space-between; width: 90%; margin: 0 auto; height: 160px; position: relative;">
                            
                            <!-- Left Pillar: Ethical Code (Morality) -->
                            <div style="width: 44%; background: linear-gradient(90deg, #111827, #1f2937, #111827); border: 2.5px solid var(--accent-gold); border-top: none; border-bottom: none; border-radius: 6px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 12px 15px; box-shadow: 0 4px 20px rgba(245, 158, 11, 0.1); position: relative; box-sizing: border-box;">
                                <div style="position: absolute; top: 0; left: -4px; right: -4px; height: 6px; background: #475569; border-radius: 2px;"></div>
                                
                                <span style="font-size: 0.9rem; font-weight: 900; color: var(--accent-gold); text-align: center; line-height: 1.2; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">
                                    <span class="lang-ja">倫理的規範（モラル）</span>
                                    <span class="lang-vi">QUY PHẠM ĐẠO ĐỨC (MORALS)</span>
                                </span>
                                <span style="font-size: 0.72rem; color: #cbd5e1; text-align: center; line-height: 1.45; font-weight: 500;">
                                    <span class="lang-ja">ヒポクラテスの誓いから連綿と続く、医療専門職としての根本的かつ本質的な職業倫理。</span>
                                    <span class="lang-vi">Y đức nghề nghiệp cốt lõi kế thừa từ Lời thề Hippocrates, danh dự và lương tâm của người thầy thuốc.</span>
                                </span>
                                
                                <div style="position: absolute; bottom: 0; left: -4px; right: -4px; height: 6px; background: #475569; border-radius: 2px;"></div>
                            </div>

                            <!-- Right Pillar: Legal Code (Rules) -->
                            <div style="width: 44%; background: linear-gradient(90deg, #111827, #1f2937, #111827); border: 2.5px solid #ef4444; border-top: none; border-bottom: none; border-radius: 6px; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 12px 15px; box-shadow: 0 4px 20px rgba(239, 68, 68, 0.1); position: relative; box-sizing: border-box;">
                                <div style="position: absolute; top: 0; left: -4px; right: -4px; height: 6px; background: #475569; border-radius: 2px;"></div>
                                
                                <span style="font-size: 0.9rem; font-weight: 900; color: #fca5a5; text-align: center; line-height: 1.2; margin-bottom: 8px; text-transform: uppercase; letter-spacing: 0.5px;">
                                    <span class="lang-ja">法的規範（ルール）</span>
                                    <span class="lang-vi">QUY PHẠM PHÁP LÝ (RULES)</span>
                                </span>
                                <span style="font-size: 0.72rem; color: #cbd5e1; text-align: center; line-height: 1.45; font-weight: 500;">
                                    <span class="lang-ja">刑法第134条（秘密漏示罪）や医師法第23条などの各医療職資格法による厳格な罰則規定。</span>
                                    <span class="lang-vi">Chế tài pháp luật nghiêm khắc: Điều 134 Bộ luật Hình sự (Tội tiết lộ bí mật) và Điều 23 Luật Bác sĩ.</span>
                                </span>
                                
                                <div style="position: absolute; bottom: 0; left: -4px; right: -4px; height: 6px; background: #475569; border-radius: 2px;"></div>
                            </div>
                        </div>
                        
                        <!-- Base Pedestal: Media neutrality -->
                        <div style="width: 100%; height: 35px; background: linear-gradient(180deg, #115e59, #0f766e); border: 2px solid #2dd4bf; border-radius: 4px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 12px rgba(0,0,0,0.4);">
                            <span style="font-size: 0.8rem; font-weight: bold; color: #fff; text-align: center;">
                                <span class="lang-ja">患者の秘密は、紙媒体でも電子媒体でも変わらず堅く守られる。</span>
                                <span class="lang-vi">Bí mật của bệnh nhân luôn được giữ kín tuyệt đối, dù là hồ sơ giấy hay bệnh án điện tử.</span>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            
            <!-- Sự tiến hóa của Quyền riêng tư thành "Quyền kiểm soát thông tin cá nhân" -->
            <div class="card glass-card text-left" style="padding: 25px; border-top: 4px solid var(--accent-teal);">
                <h3 style="color: var(--accent-teal); margin-top: 0; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                    <i class="fa-solid fa-arrows-spin"></i>
                    <span class="lang-ja">プライバシー概念の進化と「自己情報コントロール権」</span>
                    <span class="lang-vi">Sự tiến hóa của Quyền riêng tư thành "Quyền kiểm soát thông tin cá nhân"</span>
                </h3>
                <p class="small-desc" style="line-height: 1.8; color: var(--text-secondary); margin-bottom: 20px;">
                    <span class="lang-ja">「プライバシーの権利」は、古くは「ひとりでほっておいてもらう権利」という消極的・受動的な概念として説明されてきた。しかし、近年の情報化社会においては、単なる消極的な権利にとどまらず、<strong>「自己に関する情報の流れをコントロールする」</strong>という積極的・能動的な権利、すなわち<strong>自己情報コントロール権</strong>を含むという考え方が主流となっている。</span>
                    <span class="lang-vi">Trước đây, "quyền riêng tư" thường được giải thích theo một khái niệm mang tính tiêu cực và thụ động, đó là "quyền được để cho yên tĩnh một mình". Tuy nhiên, trong bối cảnh xã hội thông tin hóa mạnh mẽ như hiện nay, cách tiếp cận này đã thay đổi. Quyền riêng tư giờ đây đã mở rộng thành một quyền mang tính tích cực và chủ động hơn, đó là **"quyền được kiểm soát luồng thông tin liên quan đến bản thân mình"**, hay còn gọi là **Quyền kiểm soát thông tin cá nhân (自己情報コントロール権)**.</span>
                </p>

                <div class="shift-visualizer" style="display: flex; gap: 15px; align-items: center; flex-wrap: wrap; margin-top: 15px;">
                    <div class="shift-box source-box" style="flex: 1; min-width: 240px; background: rgba(255,255,255,0.02); padding: 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05); text-align: left;">
                        <h4 style="margin: 0 0 10px 0; color: #ef4444; font-size: 0.95rem;">
                            <i class="fa-solid fa-lock" style="margin-right: 6px;"></i>
                            <span class="lang-ja">過去のプライバシー（消極的・受動的）</span>
                            <span class="lang-vi">Quyền riêng tư trước kia (Thụ động)</span>
                        </h4>
                        <span class="lang-ja" style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6;">「ひとりでほっておいてもらう権利」<br>「知られたくない私生活の情報を隠す権利」<br>医師の良心に頼る秘密保持（任せきり医療）</span>
                        <span class="lang-vi" style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6;">"Quyền được để yên thân"<br>"Quyền giữ kín thông tin không muốn ai biết"<br>Hoạt động bảo mật dựa vào lương tâm bác sĩ (phó thác hoàn toàn)</span>
                    </div>
                    <div style="font-size: 1.5rem; color: var(--text-muted); text-align: center; width: 100%; max-width: 40px;">
                        <i class="fa-solid fa-right-long"></i>
                    </div>
                    <div class="shift-box target-box" style="flex: 1; min-width: 240px; background: rgba(255,255,255,0.02); padding: 15px; border-radius: 8px; border: 1px solid var(--accent-teal); text-align: left;">
                        <h4 style="margin: 0 0 10px 0; color: var(--accent-teal); font-size: 0.95rem;">
                            <i class="fa-solid fa-user-gear" style="margin-right: 6px;"></i>
                            <span class="lang-ja">現代のプライバシー（積極的・能動的）</span>
                            <span class="lang-vi">Quyền riêng tư hiện đại (Tích cực)</span>
                        </h4>
                        <span class="lang-ja" style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6;"><strong>「自己情報コントロール権」</strong><br>「自己に関する情報の流れを自らコントロールする権利」<br>患者の同意を前提とする主体的な医療参加</span>
                        <span class="lang-vi" style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.6;">**"Quyền tự kiểm soát thông tin cá nhân"**<br>"Quyền tự chi phối luồng thông tin liên quan đến bản thân"<br>Chủ động tham gia y tế dựa trên sự đồng ý tự nguyện của bản thân</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- SECTION II: 個人情報保護法 (Luật Bảo vệ Thông tin Cá nhân) -->
    <section id="sbo122-sec2" class="section" style="padding-top: 30px; padding-bottom: 30px; border-top: 1px solid rgba(255,255,255,0.05);">
        <div class="container">
            <!-- Section Badge styled like 1.2.1 -->
            <div class="section-badge" style="margin-bottom: 12px;">
                <span class="lang-ja">個人情報保護法</span>
                <span class="lang-vi">Luật Bảo vệ Thông tin Cá nhân</span>
            </div>
            <h2 class="section-title" style="margin-bottom: 24px;">
                <span class="lang-ja">個人情報保護法</span>
                <span class="lang-vi">Luật Bảo vệ Thông tin Cá nhân</span>
            </h2>

            <!-- SECTION II-1: Background of Personal Information Protection Act (Evolution Steps) -->
            <div class="card glass-card text-left" style="padding: 25px; margin-top: 15px; margin-bottom: 25px; box-sizing: border-box; width: 100%;">
                
                <h3 style="color: var(--accent-teal); margin-top: 0; margin-bottom: 12px; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                    <i class="fa-solid fa-clock-rotate-left"></i>
                    <span class="lang-ja">個人情報保護法の背景と法改正の進化</span>
                    <span class="lang-vi">Bối cảnh và Sự tiến hóa của Luật Bảo vệ Thông tin Cá nhân</span>
                </h3>
                <p class="small-desc" style="line-height: 1.7; color: var(--text-secondary); margin-bottom: 25px;">
                    <span class="lang-ja">わが国の個人情報保護法は、IT社会の進展や医療データの有効活用、グローバル基準への適合など、時代の変化に対応するため大規模な法改正を重ねて進化してきました。技術進展に対応するため、3年ごとに内容の見直しを強制する規定が盛り込まれています。</span>
                    <span class="lang-vi">Luật Bảo vệ Thông tin Cá nhân của Nhật Bản liên tục được sửa đổi qua các dấu mốc lớn để phù hợp với sự phát triển của công nghệ thông tin, khai thác Big Data y tế và tiệm cận tiêu chuẩn quốc tế. Nhằm bắt kịp tốc độ công nghệ, luật quy định bắt buộc đánh giá và sửa đổi định kỳ mỗi 3 năm một lần.</span>
                </p>

                <!-- Vertical Timeline Container aligned with general UI -->
                <div style="position: relative; padding-left: 24px; border-left: 2px dashed rgba(255, 255, 255, 0.1); margin-left: 12px; display: flex; flex-direction: column; gap: 24px; box-sizing: border-box; width: 100%;">
                    
                    <!-- Step 1 -->
                    <div style="position: relative; width: 100%; box-sizing: border-box;">
                        <!-- Timeline Node Dot -->
                        <div style="position: absolute; left: -35px; top: 6px; width: 20px; height: 20px; border-radius: 50%; background: #0f172a; border: 2px solid var(--accent-gold); box-shadow: 0 0 8px rgba(245, 158, 11, 0.4); display: flex; align-items: center; justify-content: center; z-index: 2;">
                            <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--accent-gold);"></div>
                        </div>
                        
                        <div class="card glass-card" style="padding: 20px; border-top: 3px solid var(--accent-gold); margin: 0; box-sizing: border-box; width: 100%; text-align: left; background: rgba(255, 255, 255, 0.015);">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; flex-wrap: wrap; gap: 10px;">
                                <h4 style="margin: 0; color: #fff; font-size: 1rem; font-weight: bold; display: flex; align-items: center; gap: 8px;">
                                    <i class="fa-solid fa-file-shield" style="color: var(--accent-gold);"></i>
                                    <span class="lang-ja">2003年制定・2005年全面施行</span>
                                    <span class="lang-vi">Ban hành 2003 / Hiệu lực 2005</span>
                                </h4>
                                <span class="node-tag tag-gold" style="font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px;">
                                    <span class="lang-ja">初期枠組み</span>
                                    <span class="lang-vi">Khung cơ bản</span>
                                </span>
                            </div>
                            <p style="margin: 0; font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary);">
                                <span class="lang-ja">インターネットやPCの急速な普及に伴う、情報化社会への移行期における初期の個人情報保護制度の確立。医療機関を含むすべての取扱事業者に適用。</span>
                                <span class="lang-vi">Thiết lập nền móng pháp lý bảo vệ dữ liệu ban đầu trước làn sóng phổ cập mạng Internet và máy tính cá nhân. Áp dụng nghĩa vụ chính thức cho các cơ sở y tế.</span>
                            </p>
                        </div>
                    </div>

                    <!-- Step 2 -->
                    <div style="position: relative; width: 100%; box-sizing: border-box;">
                        <!-- Timeline Node Dot -->
                        <div style="position: absolute; left: -35px; top: 6px; width: 20px; height: 20px; border-radius: 50%; background: #0f172a; border: 2px solid var(--accent-teal); box-shadow: 0 0 8px rgba(45, 212, 191, 0.4); display: flex; align-items: center; justify-content: center; z-index: 2;">
                            <div style="width: 6px; height: 6px; border-radius: 50%; background: var(--accent-teal);"></div>
                        </div>
                        
                        <div class="card glass-card" style="padding: 20px; border-top: 3px solid var(--accent-teal); margin: 0; box-sizing: border-box; width: 100%; text-align: left; background: rgba(255, 255, 255, 0.015);">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; flex-wrap: wrap; gap: 10px;">
                                <h4 style="margin: 0; color: #fff; font-size: 1rem; font-weight: bold; display: flex; align-items: center; gap: 8px;">
                                    <i class="fa-solid fa-arrows-spin" style="color: var(--accent-teal);"></i>
                                    <span class="lang-ja">2015年 大規模改正（2017年施行）</span>
                                    <span class="lang-vi">2015 Sửa đổi lớn (Hiệu lực 2017)</span>
                                </h4>
                                <span class="node-tag tag-teal" style="font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px;">
                                    <span class="lang-ja">利活用と保護</span>
                                    <span class="lang-vi">Khai thác & Bảo vệ</span>
                                </span>
                            </div>
                            <p style="margin: 0; font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary);">
                                <span class="lang-ja">「要配慮個人情報」や「匿名加工情報」などの新しい概念が定義され、データの保護と学術研究・産業への有効活用のバランスを再構築。</span>
                                <span class="lang-vi">Định nghĩa các khái niệm mới như "Thông tin cần quan tâm đặc biệt" và "Ẩn danh gia công", giải quyết bài toán khai thác Big Data nghiên cứu song song với bảo mật.</span>
                            </p>
                        </div>
                    </div>

                    <!-- Step 3 -->
                    <div style="position: relative; width: 100%; box-sizing: border-box;">
                        <!-- Timeline Node Dot -->
                        <div style="position: absolute; left: -35px; top: 6px; width: 20px; height: 20px; border-radius: 50%; background: #0f172a; border: 2px solid #ef4444; box-shadow: 0 0 8px rgba(239, 68, 68, 0.4); display: flex; align-items: center; justify-content: center; z-index: 2;">
                            <div style="width: 6px; height: 6px; border-radius: 50%; background: #ef4444;"></div>
                        </div>
                        
                        <div class="card glass-card" style="padding: 20px; border-top: 3px solid #ef4444; margin: 0; box-sizing: border-box; width: 100%; text-align: left; background: rgba(255, 255, 255, 0.015);">
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 8px; flex-wrap: wrap; gap: 10px;">
                                <h4 style="margin: 0; color: #fff; font-size: 1rem; font-weight: bold; display: flex; align-items: center; gap: 8px;">
                                    <i class="fa-solid fa-globe" style="color: #ef4444;"></i>
                                    <span class="lang-ja">2020年 大規模改正（2022年施行）</span>
                                    <span class="lang-vi">2020 Sửa đổi lớn (Hiệu lực 2022)</span>
                                </h4>
                                <span class="node-tag tag-red" style="font-size: 0.75rem; font-weight: 700; padding: 2px 8px; border-radius: 4px;">
                                    <span class="lang-ja">国際基準・罰則</span>
                                    <span class="lang-vi">Chuẩn quốc tế & Chế tài</span>
                                </span>
                            </div>
                            <p style="margin: 0; font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary);">
                                <span class="lang-ja">GDPR等の欧州基準に適合。「仮名加工情報」の新設や、個人情報漏洩時の報告義務化、ペナルティ（法人重罰化など）を厳格化。</span>
                                <span class="lang-vi">Đáp ứng các tiêu chuẩn khắt khe quốc tế (như GDPR). Bổ sung khái niệm "Thông tin giả danh", bắt buộc khai báo khi rò rỉ dữ liệu và siết chặt hình phạt pháp nhân.</span>
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            
            <!-- SECTION II-2: Key Concepts Added by Legal Revisions (Visual Funnel) -->
            <div class="card glass-card text-left" style="padding: 25px; margin-bottom: 25px; border-top: 4px solid var(--accent-gold); box-sizing: border-box; width: 100%;">
                
                <h3 style="color: var(--accent-gold); margin-top: 0; margin-bottom: 12px; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                    <i class="fa-solid fa-brain"></i>
                    <span class="lang-ja">法改正による重要な追加概念</span>
                    <span class="lang-vi">Các khái niệm quan trọng bổ sung từ các đợt sửa đổi Luật</span>
                </h3>
                <p class="small-desc" style="line-height: 1.7; color: var(--text-secondary); margin-bottom: 25px;">
                    <span class="lang-ja">医療情報の「確実な保護」と「研究・利活用の促進」の両立を目指し、法改正によって特に重要となる3つの主要概念が体系化されました。</span>
                    <span class="lang-vi">Nhằm cân bằng giữa "Bảo vệ nghiêm ngặt" và "Thúc đẩy nghiên cứu/Khai thác", luật sửa đổi đã quy định 3 khái niệm cốt lõi cấu thành mô hình quản lý dữ liệu.</span>
                </p>

                <!-- Funnel Layer Stack -->
                <div style="display: flex; flex-direction: column; align-items: center; gap: 15px; width: 100%; box-sizing: border-box;">
                    
                    <!-- Tier 1: 要配慮個人情報 (Width: 100%) -->
                    <div style="width: 100%; display: flex; background: rgba(255, 255, 255, 0.015); border: 1px solid rgba(255, 255, 255, 0.08); border-top: 3px solid var(--accent-gold); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15); box-sizing: border-box;">
                        <div style="width: 25%; background: rgba(255, 255, 255, 0.02); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 15px; box-sizing: border-box; min-width: 130px; text-align: center; border-right: 1px solid rgba(255, 255, 255, 0.08);">
                            <div style="font-size: 1.8rem; color: var(--accent-gold); margin-bottom: 5px; filter: drop-shadow(0 0 4px rgba(245, 158, 11, 0.3));"><i class="fa-solid fa-folder-plus"></i></div>
                            <span style="font-size: 0.72rem; font-weight: bold; color: var(--accent-gold); text-transform: uppercase; letter-spacing: 0.5px;">Strict Protection</span>
                        </div>
                        <div style="width: 75%; padding: 18px; box-sizing: border-box;">
                            <h4 style="margin: 0 0 6px 0; color: var(--accent-gold); font-size: 0.95rem; font-weight: bold; display: flex; align-items: center; gap: 6px;">
                                <span>要配慮個人情報</span>
                                <span style="font-size: 0.78rem; font-weight: normal; color: var(--text-muted);">(Strict Protection)</span>
                            </h4>
                            <p style="margin: 0; font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary);">
                                <span class="lang-ja">病歴や診療・治療に関する記録など、不当な差別や偏見を生じさせないために**原則として本人同意を得ることが義務付けられる**極めて厳格な取り扱い情報。</span>
                                <span class="lang-vi">Tiền sử bệnh án, hồ sơ chẩn đoán/điều trị... Để tránh sự phân biệt đối xử không công bằng, luật **bắt buộc phải có sự đồng ý của bệnh nhân** khi thu thập.</span>
                            </p>
                        </div>
                    </div>

                    <!-- Tier 2: 個人識別符号 (Width: 93%) -->
                    <div style="width: 93%; display: flex; background: rgba(255, 255, 255, 0.015); border: 1px solid rgba(255, 255, 255, 0.08); border-top: 3px solid var(--accent-teal); border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15); box-sizing: border-box;">
                        <div style="width: 25%; background: rgba(255, 255, 255, 0.02); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 15px; box-sizing: border-box; min-width: 130px; text-align: center; border-right: 1px solid rgba(255, 255, 255, 0.08);">
                            <div style="font-size: 1.8rem; color: var(--accent-teal); margin-bottom: 5px; filter: drop-shadow(0 0 4px rgba(45, 212, 191, 0.3));"><i class="fa-solid fa-fingerprint"></i></div>
                            <span style="font-size: 0.72rem; font-weight: bold; color: var(--accent-teal); text-transform: uppercase; letter-spacing: 0.5px;">Biometrics & IDs</span>
                        </div>
                        <div style="width: 75%; padding: 18px; box-sizing: border-box;">
                            <h4 style="margin: 0 0 6px 0; color: var(--accent-teal); font-size: 0.95rem; font-weight: bold; display: flex; align-items: center; gap: 6px;">
                                <span>2. 個人識別符号</span>
                                <span style="font-size: 0.78rem; font-weight: normal; color: var(--text-muted);">(Biometrics & IDs)</span>
                            </h4>
                            <p style="margin: 0; font-size: 0.88rem; line-height: 1.6; color: #cbd5e1;">
                                <span class="lang-ja">DNA、指紋、顔認識データなどの「生体情報」や、マイナンバー、パスポート番号、保険者番号などの「公的に発行されたコード」。これ単体で個人識別が可能。</span>
                                <span class="lang-vi">Dữ liệu sinh trắc học (ADN, dấu vân tay, khuôn mặt) và các mã định danh công (My Number, hộ chiếu, số bảo hiểm...). Cho phép nhận dạng cá nhân trực tiếp.</span>
                            </p>
                        </div>
                    </div>

                    <!-- Tier 3: 匿名加工情報 (Width: 86%) -->
                    <div style="width: 86%; display: flex; background: rgba(255, 255, 255, 0.015); border: 1px solid rgba(255, 255, 255, 0.08); border-top: 3px solid #3b82f6; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15); box-sizing: border-box;">
                        <div style="width: 25%; background: rgba(255, 255, 255, 0.02); display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 15px; box-sizing: border-box; min-width: 130px; text-align: center; border-right: 1px solid rgba(255, 255, 255, 0.08);">
                            <div style="font-size: 1.8rem; color: #93c5fd; margin-bottom: 5px; filter: drop-shadow(0 0 4px rgba(147, 197, 253, 0.3));"><i class="fa-solid fa-cloud-arrow-up"></i></div>
                            <span style="font-size: 0.72rem; font-weight: bold; color: #93c5fd; text-transform: uppercase; letter-spacing: 0.5px;">Data Utilization</span>
                        </div>
                        <div style="width: 75%; padding: 18px; box-sizing: border-box;">
                            <h4 style="margin: 0 0 6px 0; color: #93c5fd; font-size: 0.95rem; font-weight: bold; display: flex; align-items: center; gap: 6px;">
                                <span>匿名加工情報</span>
                                <span style="font-size: 0.78rem; font-weight: normal; color: var(--text-muted);">(Data Utilization)</span>
                            </h4>
                            <p style="margin: 0; font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary);">
                                <span class="lang-ja">特定の個人を完全に復元できないよう加工した情報。本人の同意なく第三者提供・共同利用が可能で、医療データ（次世代医療基盤法など）の研究促進に貢献。</span>
                                <span class="lang-vi">Thông tin được xử lý triệt để sao cho không thể nhận diện hay khôi phục lại cá nhân cụ thể. Cho phép chia sẻ/sử dụng tự do phục vụ nghiên cứu và phát triển y tế.</span>
                            </p>
                        </div>
                    </div>

                </div>

                <!-- Footnote for Pseudonymized Information (仮名加工情報) added in 2020 -->
                <div style="margin-top: 20px; padding: 15px; background: rgba(255,255,255,0.02); border: 1px dashed rgba(255,255,255,0.1); border-radius: 8px; font-size: 0.85rem; line-height: 1.6; color: var(--text-muted); box-sizing: border-box; width: 100%;">
                    <span class="lang-ja">💡 <strong>2020年改正の補足：「仮名加工情報」について</strong><br>匿名加工情報とは異なり、他の情報と照合しなければ個人を識別できない状態に加工した情報です。学術研究目的での内部利用に特化し、手続き要件がさらに緩和されています。</span>
                    <span class="lang-vi">💡 <strong>Bổ sung từ đợt sửa đổi năm 2020: "Thông tin gia công giả danh" (仮名加工情報)</strong><br>Khác với ẩn danh hoàn toàn, thông tin giả danh chỉ có thể nhận diện khi đối chiếu với dữ liệu khác. Chuyên dùng cho mục đích nghiên cứu nội bộ với thủ tục nới lỏng hơn.</span>
                </div>

            </div>

            <!-- 8 Legal Duties Timeline Step Interactive -->
            <div class="card glass-card text-left" style="padding: 25px; margin-bottom: 25px;">
                <h3 style="color: var(--accent-teal); margin-top: 0; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                    <i class="fa-solid fa-list-check"></i>
                    <span class="lang-ja">医療機関が負う「8つの法的義務」</span>
                    <span class="lang-vi">"8 nghĩa vụ pháp lý" của Cơ sở y tế</span>
                </h3>
                <p class="small-desc" style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 25px;">
                    <span class="lang-ja">情報の取得から運用、保管、廃棄に至るライフサイクル全体にわたり、以下の義務が課せられます。数字をクリックして詳細を確認してください。</span>
                    <span class="lang-vi">Xuyên suốt toàn bộ vòng đời của dữ liệu từ thu thập, vận hành, lưu trữ đến tiêu hủy, cơ sở y tế phải tuân thủ nghiêm ngặt 8 nghĩa vụ dưới đây. Bấm chọn các số để xem chi tiết.</span>
                </p>

                <div class="timeline-steps" style="display: flex; justify-content: space-between; position: relative; margin-bottom: 25px; flex-wrap: wrap; gap: 10px;">
                    <div class="timeline-line" style="position: absolute; top: 18px; left: 0; right: 0; height: 2px; background: rgba(255,255,255,0.1); z-index: 1;"></div>
                    <button class="step-dot active" data-sbo122-step="1" style="z-index: 2; border-color: var(--accent-teal); width: 36px; height: 36px; border-radius: 50%; background: #0f172a; border: 2px solid rgba(255,255,255,0.3); color: #fff; cursor: pointer; font-weight: bold; transition: all 0.3s ease;">01</button>
                    <button class="step-dot" data-sbo122-step="2" style="z-index: 2; width: 36px; height: 36px; border-radius: 50%; background: #0f172a; border: 2px solid rgba(255,255,255,0.3); color: #fff; cursor: pointer; font-weight: bold; transition: all 0.3s ease;">02</button>
                    <button class="step-dot" data-sbo122-step="3" style="z-index: 2; width: 36px; height: 36px; border-radius: 50%; background: #0f172a; border: 2px solid rgba(255,255,255,0.3); color: #fff; cursor: pointer; font-weight: bold; transition: all 0.3s ease;">03</button>
                    <button class="step-dot" data-sbo122-step="4" style="z-index: 2; width: 36px; height: 36px; border-radius: 50%; background: #0f172a; border: 2px solid rgba(255,255,255,0.3); color: #fff; cursor: pointer; font-weight: bold; transition: all 0.3s ease;">04</button>
                    <button class="step-dot" data-sbo122-step="5" style="z-index: 2; width: 36px; height: 36px; border-radius: 50%; background: #0f172a; border: 2px solid rgba(255,255,255,0.3); color: #fff; cursor: pointer; font-weight: bold; transition: all 0.3s ease;">05</button>
                    <button class="step-dot" data-sbo122-step="6" style="z-index: 2; width: 36px; height: 36px; border-radius: 50%; background: #0f172a; border: 2px solid rgba(255,255,255,0.3); color: #fff; cursor: pointer; font-weight: bold; transition: all 0.3s ease;">06</button>
                    <button class="step-dot" data-sbo122-step="7" style="z-index: 2; width: 36px; height: 36px; border-radius: 50%; background: #0f172a; border: 2px solid rgba(255,255,255,0.3); color: #fff; cursor: pointer; font-weight: bold; transition: all 0.3s ease;">07</button>
                    <button class="step-dot" data-sbo122-step="8" style="z-index: 2; width: 36px; height: 36px; border-radius: 50%; background: #0f172a; border: 2px solid rgba(255,255,255,0.3); color: #fff; cursor: pointer; font-weight: bold; transition: all 0.3s ease;">08</button>
                </div>

                <div class="card glass-card" id="sbo122-step-card" style="border: 1px dashed var(--accent-teal); padding: 20px; background: rgba(6, 182, 212, 0.01); transition: opacity 0.2s ease;">
                    <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 8px; margin-bottom: 12px;">
                        <h3 id="sbo122-step-title" style="margin: 0; color: var(--accent-teal); font-size: 1.1rem;">
                            <span class="lang-ja">1. 利用目的の特定・通知</span>
                            <span class="lang-vi">1. Xác định & Thông báo mục đích sử dụng</span>
                        </h3>
                        <span class="node-tag tag-red" id="sbo122-step-phase" style="padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold;">
                            <span class="lang-ja">取得フェーズ</span>
                            <span class="lang-vi">Giai đoạn Thu thập</span>
                        </span>
                    </div>
                    <p id="sbo122-step-desc" class="small-desc" style="line-height: 1.7; color: var(--text-secondary); margin: 0;">
                        <span class="lang-ja">患者データの利用目的（診療、家族への説明、会計業務等）を具体的に特定し、院内掲示やホームページで公表します。特定された範囲を超えて利用する場合は、原則として患者本人の同意が必須となります。</span>
                        <span class="lang-vi">Xác định cụ thể mục đích sử dụng dữ liệu bệnh nhân (điều trị, giải thích cho gia đình, nghiệp vụ thanh toán, v.v.) và công bố tại bảng tin bệnh viện hoặc trang web. Trường hợp sử dụng vượt quá phạm vi đã công bố, về nguyên tắc phải có sự đồng ý của bệnh nhân.</span>
                    </p>
                </div>
            </div>
        </div>
    </section>

        <!-- SECTION III: アクセス権と情報開示 (Quyền truy cập và Công khai thông tin) -->
    <section id="sbo122-sec3" class="section" style="padding-top: 30px; padding-bottom: 30px; border-top: 1px solid rgba(255,255,255,0.05);">
        <div class="container">
            <!-- Section Badge styled like 1.2.1 -->
            <div class="section-badge" style="margin-bottom: 12px;">
                <span class="lang-ja">アクセス権と情報開示</span>
                <span class="lang-vi">Quyền truy cập và Công khai thông tin</span>
            </div>
            <h2 class="section-title" style="margin-bottom: 24px;">
                <span class="lang-ja">アクセス権と情報開示</span>
                <span class="lang-vi">Quyền truy cập và Công khai thông tin</span>
            </h2>

            <!-- Detailed Subsections -->
            <div class="grid-2col" style="gap: 20px; margin-bottom: 25px;">
                <!-- 1. Quyền yêu cầu thông tin của bản thân -->
                <div class="card glass-card text-left" style="padding: 20px;">
                    <h3 style="color: var(--accent-teal); margin-top: 0; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
                        <i class="fa-solid fa-magnifying-glass-chart"></i>
                        <span class="lang-ja">自己情報を請求する権利（アクセス権）</span>
                        <span class="lang-vi">Quyền yêu cầu thông tin của bản thân (Quyền truy cập)</span>
                    </h3>
                    <p class="small-desc" style="line-height: 1.7; color: var(--text-secondary); margin-bottom: 0;">
                        <span class="lang-ja">患者には「自己情報を請求する権利（自己情報の閲覧権、自己情報へのアクセス権）」があります。これは、患者が医療機関に対して、診療録に記載された傷病名や検査データなど、自分自身の健康に関する情報を閲覧する権利を指します。患者が開示を求めれば、求められた情報はすべて本人に開示することが原則です。専門的な表現では、この<strong>「自己情報へのアクセス権」</strong>を保証することが医療者に求められています。</span>
                        <span class="lang-vi">Bệnh nhân có "Quyền yêu cầu thông tin của chính mình" (hay còn gọi là quyền xem thông tin cá nhân, quyền truy cập thông tin cá nhân). Điều này có nghĩa là bệnh nhân có quyền yêu cầu cơ sở y tế cho phép xem các thông tin liên quan đến sức khỏe của mình, chẳng hạn như tên thương bệnh hay dữ liệu xét nghiệm được ghi chép trong bệnh án. Về nguyên tắc, khi bệnh nhân yêu cầu công khai thông tin, cơ sở y tế phải cung cấp toàn bộ các thông tin đã được yêu cầu cho chính bệnh nhân đó. Bằng ngôn ngữ chuyên môn, đây chính là việc bảo đảm **"Quyền truy cập vào thông tin cá nhân" (自己情報へのアクセス権)**.</span>
                    </p>
                </div>

                <!-- 2. Sự cẩn trọng trong thời điểm và cách thức công khai -->
                <div class="card glass-card text-left" style="padding: 20px;">
                    <h3 style="color: var(--accent-gold); margin-top: 0; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
                        <i class="fa-solid fa-bullhorn"></i>
                        <span class="lang-ja">開示のタイミングや内容表現への慎重な配慮</span>
                        <span class="lang-vi">Sự cẩn trọng trong thời điểm và cách thức công khai</span>
                    </h3>
                    <p class="small-desc" style="line-height: 1.7; color: var(--text-secondary); margin-bottom: 0;">
                        <span class="lang-ja">情報開示の原則があるとはいえ、画一的にカルテ情報をコピーして患者に渡せばよいというものではありません。医療側は、情報を開示するタイミングや内容の表現方法について、慎重に配慮を進める必要があります。患者には「知る権利」と同時に、<strong>「知りたくない情報を忌避する権利（知らされたくない情報の開示を拒む権利）」</strong>も保証されています。そのため、期待に沿わない悪い検査結果などの「Bad News」を含む情報開示については、患者がそれを必要とするか否かについて事前にヒアリングを行い、その意向に沿うように対処することが重要です。</span>
                        <span class="lang-vi">Mặc dù nguyên tắc là công khai toàn bộ, nhưng việc này không có nghĩa là chỉ cần photocopy thông tin bệnh án một cách cứng nhắc rồi giao cho bệnh nhân là xong. Cơ sở y tế cần phải hết sức cẩn trọng trong việc lựa chọn thời điểm công khai và cách thức diễn đạt nội dung. Bên cạnh quyền được biết, bệnh nhân còn có **"Quyền từ chối tiếp nhận thông tin không mong muốn" (知りたくない情報を忌避する権利)**. Đặc biệt là khi phải công khai những "Tin xấu" (Bad News) như kết quả xét nghiệm không như mong đợi, bác sĩ cần tiến hành thăm dò ý kiến trước (hỏi xem bệnh nhân có muốn biết chi tiết sự thật hay không) và xử lý linh hoạt theo đúng nguyện vọng của họ.</span>
                    </p>
                </div>
            </div>

            <!-- 3. Ngoại lệ từ chối công khai thông tin -->
            <div class="card glass-card text-left" style="padding: 20px; margin-bottom: 25px; border-left: 4px solid var(--accent-gold); background: rgba(234, 179, 8, 0.01);">
                <h3 style="color: var(--accent-gold); margin-top: 0; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
                    <i class="fa-solid fa-triangle-exclamation"></i>
                    <span class="lang-ja">情報開示の例外（開示を拒み得る場合）</span>
                    <span class="lang-vi">Ngoại lệ từ chối công khai thông tin (Ngoại lệ từ chối/hạn chế)</span>
                </h3>
                <p class="small-desc" style="line-height: 1.7; color: var(--text-secondary); margin: 0;">
                    <span class="lang-ja">アクセス権は重視されますが、すべてのケースで無条件に開示されるわけではありません。例えば、真実の病状をそのまま開示することが、患者の心身の状況を著しく損なう恐れがあると医師が判断した場合（精神の激変による自傷他害の危険があるなど）などには、例外として情報の開示を拒む（または制限する）ことが認められる場合があります。</span>
                    <span class="lang-vi">Mặc dù quyền truy cập của bệnh nhân được tôn trọng tối đa, nhưng vẫn tồn tại những ngoại lệ mà cơ sở y tế có thể từ chối hoặc hạn chế công khai thông tin. Điển hình là khi bác sĩ đánh giá rằng việc công khai thông tin thật (như chẩn đoán ung thư giai đoạn cuối cho bệnh nhân có tâm lý quá yếu) có nguy cơ làm tổn hại nghiêm trọng đến tình trạng tâm sinh lý của bệnh nhân (nguy cơ tự hại hoặc hại người do sốc tinh thần).</span>
                </p>
            </div>

            <!-- Simulator: Bad News Disclosure -->
            <div class="card glass-card simulator-box" style="padding: 25px;">
                <div class="case-header" style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 12px; margin-bottom: 15px; text-align: left;">
                    <span class="case-tag" style="background: var(--accent-gold); color: #000; font-weight: bold; padding: 2px 8px; border-radius: 4px; font-size: 0.8rem; text-transform: uppercase;">
                        <span class="lang-ja">判断シミュレーション</span>
                        <span class="lang-vi">Mô phỏng phán đoán</span>
                    </span>
                    <h3 style="margin: 8px 0 0 0; color: #fff; font-size: 1.1rem;">
                        <span class="lang-ja">【事例】悪性腫瘍（末期）の診断結果開示を求める患者への対応</span>
                        <span class="lang-vi">【Tình huống】 Bệnh nhân yêu cầu công khai hồ sơ xét nghiệm khối u ác tính giai đoạn cuối</span>
                    </h3>
                </div>

                <div class="sim-step-div">
                    <p class="case-narrative" style="text-align: left; font-size: 0.92rem; line-height: 1.7; color: var(--text-secondary); margin-bottom: 20px;">
                        <span class="lang-ja">患者「検査結果のカルテコピーが欲しい」と請求がありました。主治医は、患者が現在極めてうつ状態が強く、病状を突然知ることで衝動的な自殺（自傷）を引き起こす恐れが非常に高いと判断しています。<br><strong>医療者として、この開示請求に対して一時的な保留・制限などの例外を適用すべきですか？</strong></span>
                        <span class="lang-vi">Bệnh nhân yêu cầu: "Tôi muốn bản sao hồ sơ kết quả xét nghiệm". Bác sĩ điều trị nhận thấy bệnh nhân đang trong trạng thái trầm cảm nặng, nếu biết sự thật đột ngột có nguy cơ cao xảy ra hành vi tự tử hoặc tự hại do bộc phát.<br><strong>Là nhân viên y tế, bạn có nên áp dụng biện pháp ngoại lệ (tạm hoãn / hạn chế công khai) đối với yêu cầu này không?</strong></span>
                    </p>
                    <div style="display: flex; gap: 15px; justify-content: center; flex-wrap: wrap;">
                        <button class="comm-btn" id="sbo122-sim-yes" style="padding: 10px 20px; border: 1px solid #ef4444; background: rgba(239, 68, 68, 0.1); color: #fca5a5; cursor: pointer; border-radius: 6px; font-weight: bold; transition: all 0.3s ease;">
                            <i class="fa-solid fa-triangle-exclamation" style="margin-right: 6px;"></i>
                            <span class="lang-ja">はい (例外措置を適用し、一時保留・配慮する)</span>
                            <span class="lang-vi">Có (Áp dụng ngoại lệ, tạm hoãn để cẩn trọng)</span>
                        </button>
                        <button class="comm-btn" id="sbo122-sim-no" style="padding: 10px 20px; border: 1px solid var(--accent-teal); background: rgba(6, 182, 212, 0.1); color: #a5f3fc; cursor: pointer; border-radius: 6px; font-weight: bold; transition: all 0.3s ease;">
                            <i class="fa-solid fa-circle-check" style="margin-right: 6px;"></i>
                            <span class="lang-ja">いいえ (原則通り、そのまま直ちにすべて開示する)</span>
                            <span class="lang-vi">Không (Không hoãn, công khai ngay theo nguyên tắc)</span>
                        </button>
                    </div>
                </div>

                <div id="sbo122-sim-feedback" class="simulator-feedback" style="display: none; text-align: left; margin-top: 20px; padding: 15px; border-radius: 6px; font-size: 0.92rem; line-height: 1.6;">
                    <!-- Content injected via JS -->
                </div>
            </div>
        </div>
    </section>

        <!-- SECTION IV: 自己情報コントロール権 (Quyền kiểm soát thông tin cá nhân) -->
    <section id="sbo122-sec4" class="section" style="padding-top: 30px; padding-bottom: 30px; border-top: 1px solid rgba(255,255,255,0.05);">
        <div class="container">
            <!-- Section Badge styled like 1.2.1 -->
            <div class="section-badge" style="margin-bottom: 12px;">
                <span class="lang-ja">自己情報コントロール権</span>
                <span class="lang-vi">Quyền kiểm soát thông tin cá nhân</span>
            </div>
            <h2 class="section-title" style="margin-bottom: 24px;">
                <span class="lang-ja">自己情報コントロール権</span>
                <span class="lang-vi">Quyền kiểm soát thông tin cá nhân</span>
            </h2>

            <!-- Detailed Subsections -->
            <!-- SECTION IV-1: Evolution of Privacy Concept: Passive to Active (Slide 9) -->
            <div class="card glass-card text-left" style="padding: 25px; margin-bottom: 25px; border-top: 4px solid var(--accent-teal); box-sizing: border-box; width: 100%;">
                <h3 style="color: var(--accent-teal); margin-top: 0; margin-bottom: 12px; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                    <i class="fa-solid fa-arrows-turn-to-dots"></i>
                    <span class="lang-ja">プライバシー概念の進化：消極的から積極的へ</span>
                    <span class="lang-vi">Sự tiến hóa của khái niệm Quyền riêng tư: Từ thụ động đến chủ động</span>
                </h3>
                <p class="small-desc" style="line-height: 1.7; color: var(--text-secondary); margin-bottom: 25px;">
                    <span class="lang-ja">「プライバシーの権利」は、かつては「ひとりでほっておいてもらう権利」という消極的・受動的な権利として説明されてきました。しかし、近年の情報化社会では、その枠にとどまらず、<strong>「自己に関する情報の流れをコントロールする」</strong>という積極的・能動的な権利、すなわち<strong>自己情報コントロール権</strong>を含むという考え方が主流になっています。</span>
                    <span class="lang-vi">Trước đây, "Quyền riêng tư" (Privacy) thường được giải thích theo nghĩa tiêu cực và thụ động là "quyền được để cho yên tĩnh một mình". Tuy nhiên, trong xã hội thông tin hóa ngày nay, khái niệm này đã tiến hóa thành một quyền mang tính tích cực và năng động hơn: **"Quyền được kiểm soát luồng thông tin liên quan đến bản thân"** (Quyền kiểm soát thông tin cá nhân - 自己情報コントロール権).</span>
                </p>

                <!-- Comparison Layout matching Slide 9 -->
                <div class="grid-2col" style="gap: 24px; align-items: stretch;">
                    
                    <!-- Left Column: Passive Right (消極的権利) -->
                    <div class="card glass-card" style="padding: 0; background: rgba(15, 23, 42, 0.35); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; display: flex; flex-direction: column; overflow: hidden; margin-bottom: 0;">
                        <!-- SVG Wall Illustration -->
                        <div style="background: rgba(15,23,42,0.4); padding: 20px; display: flex; justify-content: center; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.04); min-height: 140px;">
                            <svg width="220" height="110" viewBox="0 0 220 110">
                                <!-- Hiding person -->
                                <circle cx="110" cy="65" r="12" fill="#64748b" />
                                <path d="M 95 100 Q 110 82 125 100 Z" fill="#64748b" />
                                
                                <!-- Wall 1 (Left) -->
                                <rect x="55" y="20" width="20" height="80" rx="3" fill="#334155" stroke="#475569" stroke-width="1.5" />
                                <!-- Wall 2 (Front Shielding) -->
                                <rect x="135" y="20" width="20" height="80" rx="3" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5" />
                                <!-- Wall lines representing separation -->
                                <line x1="40" y1="20" x2="40" y2="100" stroke="rgba(255,255,255,0.05)" stroke-width="2" />
                                <line x1="170" y1="20" x2="170" y2="100" stroke="rgba(255,255,255,0.05)" stroke-width="2" />
                                
                                <!-- Watchful Eyes representing intrusion (Outer world) -->
                                <g transform="translate(180, 45)">
                                    <path d="M 0 10 Q 12 -3 24 10 Q 12 23 0 10 Z" fill="none" stroke="#ef4444" stroke-width="1.5" />
                                    <circle cx="12" cy="10" r="3.5" fill="#ef4444" />
                                </g>
                            </svg>
                        </div>
                        <!-- Content -->
                        <div style="padding: 16px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
                            <div>
                                <h4 style="margin: 0 0 8px 0; color: #fff; font-size: 0.95rem; font-weight: bold; text-align: center;">
                                    <span class="lang-ja">過去：消極的権利 (Passive Right)</span>
                                    <span class="lang-vi">Quá khứ: Quyền thụ động (Passive Right)</span>
                                </h4>
                                <p style="margin: 0; font-size: 0.82rem; line-height: 1.5; color: var(--text-secondary); text-align: center;">
                                    <span class="lang-ja">「ひとりにしておいてもらう権利」<br>外部からの干渉を防ぐ防御的な概念。</span>
                                    <span class="lang-vi">"Quyền được để cho yên tĩnh một mình"<br>Khái niệm phòng vệ nhằm ngăn chặn sự can thiệp từ bên ngoài.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Right Column: Active Right (積極的権利) -->
                    <div class="card glass-card" style="padding: 0; background: rgba(15, 23, 42, 0.35); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; display: flex; flex-direction: column; overflow: hidden; margin-bottom: 0;">
                        <!-- SVG Dashboard Illustration -->
                        <div style="background: rgba(15,23,42,0.4); padding: 20px; display: flex; justify-content: center; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.04); min-height: 140px;">
                            <svg width="220" height="110" viewBox="0 0 220 110">
                                <defs>
                                    <radialGradient id="dashboard-glow" cx="50%" cy="50%" r="50%">
                                        <stop offset="0%" stop-color="#2dd4bf" stop-opacity="0.2" />
                                        <stop offset="100%" stop-color="#2dd4bf" stop-opacity="0" />
                                    </radialGradient>
                                </defs>
                                <circle cx="110" cy="55" r="45" fill="url(#dashboard-glow)" />
                                <!-- Control board base -->
                                <rect x="35" y="20" width="150" height="70" rx="6" fill="#1e293b" stroke="#2dd4bf" stroke-width="1.5" />
                                
                                <!-- Dials (Rotary Knobs) -->
                                <circle cx="70" cy="45" r="14" fill="#0f172a" stroke="#cbd5e1" stroke-width="1.5" />
                                <line x1="70" y1="45" x2="70" y2="35" stroke="#2dd4bf" stroke-width="2" stroke-linecap="round" />
                                
                                <circle cx="110" cy="45" r="14" fill="#0f172a" stroke="#cbd5e1" stroke-width="1.5" />
                                <line x1="110" y1="45" x2="120" y2="39" stroke="#2dd4bf" stroke-width="2" stroke-linecap="round" />

                                <circle cx="150" cy="45" r="14" fill="#0f172a" stroke="#cbd5e1" stroke-width="1.5" />
                                <line x1="150" y1="45" x2="142" y2="53" stroke="#2dd4bf" stroke-width="2" stroke-linecap="round" />
                                
                                <!-- Slider/Toggle Switch -->
                                <rect x="65" y="70" width="30" height="10" rx="3" fill="#0f172a" stroke="#475569" stroke-width="1" />
                                <circle cx="85" cy="75" r="6" fill="#2dd4bf" />
                                
                                <rect x="125" y="70" width="30" height="10" rx="3" fill="#0f172a" stroke="#475569" stroke-width="1" />
                                <circle cx="130" cy="75" r="6" fill="#cbd5e1" />
                            </svg>
                        </div>
                        <!-- Content -->
                        <div style="padding: 16px; flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
                            <div>
                                <h4 style="margin: 0 0 8px 0; color: #fff; font-size: 0.95rem; font-weight: bold; text-align: center;">
                                    <span class="lang-ja">現代：積極的権利 (Active Right)</span>
                                    <span class="lang-vi">Hiện tại: Quyền chủ động (Active Right)</span>
                                </h4>
                                <p style="margin: 0; font-size: 0.82rem; line-height: 1.5; color: var(--text-secondary); text-align: center;">
                                    <span class="lang-ja">「自己に関する情報の流れをコントロールする権利」<br>データの流通を自ら把握し、支配する能動的な概念。</span>
                                    <span class="lang-vi">"Quyền tự kiểm soát luồng thông tin liên quan đến bản thân"<br>Khái niệm chủ động theo dõi và tự chi phối dòng chảy dữ liệu.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <!-- SECTION IV-2: Principles in Third-Party Information Provision (Slide 10) -->
            <div class="grid-2col" style="gap: 24px; margin-bottom: 25px; align-items: stretch;">
                
                <!-- Left: Rules & Principles -->
                <div class="card glass-card text-left" style="padding: 25px; border-top: 4px solid var(--accent-gold); display: flex; flex-direction: column; justify-content: space-between; margin-bottom: 0;">
                    <div>
                        <h3 style="color: var(--accent-gold); margin-top: 0; margin-bottom: 20px; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-handshake-angle"></i>
                            <span class="lang-ja">第三者への提供制限と本人の意思</span>
                            <span class="lang-vi">Hạn chế cung cấp cho bên thứ ba và Ý chí của bản thân</span>
                        </h3>
                        
                        <div style="background: rgba(255,255,255,0.02); padding: 15px; border-left: 3px solid var(--accent-gold); border-radius: 4px; margin-bottom: 15px;">
                            <h4 style="margin: 0 0 6px 0; color: #fff; font-size: 0.98rem; font-weight: bold;">
                                <span class="lang-ja">第三者への情報提供のルール</span>
                                <span class="lang-vi">Quy tắc cung cấp thông tin cho bên thứ ba</span>
                            </h4>
                            <p style="margin: 0; font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary);">
                                <span class="lang-ja">・<strong>情報提供先</strong>：他の医師/医療機関、家族、警察、民間保険会社など。<br>・<strong>必須条件</strong>：情報提供の目的や提供する内容について明確に説明すること。<br>・<strong>絶対原則</strong>：患者本人の意思（同意）に従うことが大前提。</span>
                                <span class="lang-vi">・<strong>Nơi nhận</strong>: Bác sĩ khác/Cơ sở y tế khác, gia đình, cảnh sát, công ty bảo hiểm tư nhân...<br>・<strong>Điều kiện bắt buộc</strong>: Giải thích rõ ràng mục đích và nội dung cung cấp.<br>・<strong>Nguyên tắc tuyệt đối</strong>: Tuân theo ý chí (sự đồng ý) của chính bệnh nhân.</span>
                            </p>
                        </div>
                    </div>
                    
                    <div id="sbo122-gatekeeper-desc" style="padding: 12px; background: rgba(14, 165, 233, 0.08); border: 1px dashed rgba(14, 165, 233, 0.2); border-radius: 6px; font-size: 0.85rem; line-height: 1.4; color: #38bdf8;">
                        <span class="lang-ja">💡 門番（ゲートキーパー）である患者本人が同意の鍵を開けることで、初めて第三者への情報提供が可能になります。右の図の鍵をクリックして試してみましょう。</span>
                        <span class="lang-vi">💡 Bệnh nhân đóng vai trò người gác cổng (Gatekeeper). Chỉ khi họ mở khóa bằng "Khóa đồng ý" thì thông tin mới được cung cấp. Click vào các ổ khóa ở hình bên để thử nghiệm.</span>
                    </div>
                </div>

                <!-- Right: Interactive Gatekeeper Model -->
                <div class="card glass-card" style="padding: 20px; overflow: hidden; display: flex; flex-direction: column; justify-content: center; align-items: center; border: 1px solid rgba(255,255,255,0.08); background: rgba(15, 23, 42, 0.35); border-radius: 16px; margin-bottom: 0; min-height: 320px; position: relative;">
                    
                    <!-- Interactive Gatekeeper SVG -->
                    <svg width="340" height="260" viewBox="0 0 340 260" style="overflow: visible;">
                        <defs>
                            <radialGradient id="gatekeeper-glow" cx="50%" cy="50%" r="50%">
                                <stop offset="0%" stop-color="#0ea5e9" stop-opacity="0.3" />
                                <stop offset="100%" stop-color="#0ea5e9" stop-opacity="0" />
                            </radialGradient>
                        </defs>
                        
                        <!-- Glow behind patient -->
                        <circle cx="80" cy="130" r="60" fill="url(#gatekeeper-glow)" />

                        <!-- Flow lines from Patient to Destinations -->
                        <!-- Line 1: Doctors -->
                        <path id="sbo122-flow-line-1" d="M 80 130 C 140 100 180 50 250 50" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="3.5" style="transition: stroke 0.3s ease;" />
                        <!-- Line 2: Family -->
                        <path id="sbo122-flow-line-2" d="M 80 130 C 140 130 180 130 250 130" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="3.5" style="transition: stroke 0.3s ease;" />
                        <!-- Line 3: Police -->
                        <path id="sbo122-flow-line-3" d="M 80 130 C 140 160 180 210 250 210" fill="none" stroke="rgba(255,255,255,0.12)" stroke-width="3.5" style="transition: stroke 0.3s ease;" />

                        <!-- Center: Patient / Gatekeeper -->
                        <circle cx="80" cy="130" r="42" fill="#0ea5e9" stroke="#38bdf8" stroke-width="2" />
                        <text x="80" y="121" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#fff">Patient</text>
                        <text x="80" y="135" text-anchor="middle" font-size="9" fill="#e0f2fe" font-weight="bold">Gatekeeper</text>
                        <text x="80" y="147" text-anchor="middle" font-size="8" fill="#bae6fd">同意の鍵</text>

                        <!-- Interactive Lock Buttons on flow lines -->
                        <!-- Lock 1: Doctors -->
                        <g id="sbo122-lock-btn-1" style="cursor: pointer;" onclick="sbo122ToggleGate(1)">
                            <circle cx="160" cy="85" r="15" fill="#1e293b" stroke="#cbd5e1" stroke-width="1.5" />
                            <path id="sbo122-lock-icon-1" d="M156 86h8v6h-8zm1-4a3 3 0 0 1 6 0v4h-6z" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round" />
                        </g>
                        <!-- Lock 2: Family -->
                        <g id="sbo122-lock-btn-2" style="cursor: pointer;" onclick="sbo122ToggleGate(2)">
                            <circle cx="160" cy="130" r="15" fill="#1e293b" stroke="#cbd5e1" stroke-width="1.5" />
                            <path id="sbo122-lock-icon-2" d="M156 131h8v6h-8zm1-4a3 3 0 0 1 6 0v4h-6z" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round" />
                        </g>
                        <!-- Lock 3: Police -->
                        <g id="sbo122-lock-btn-3" style="cursor: pointer;" onclick="sbo122ToggleGate(3)">
                            <circle cx="160" cy="175" r="15" fill="#1e293b" stroke="#cbd5e1" stroke-width="1.5" />
                            <path id="sbo122-lock-icon-3" d="M156 176h8v6h-8zm1-4a3 3 0 0 1 6 0v4h-6z" fill="none" stroke="#ef4444" stroke-width="1.5" stroke-linecap="round" />
                        </g>

                        <!-- Destinations (Circles with Icons & Text) -->
                        <!-- 1. Other Doctors -->
                        <g transform="translate(250, 50)">
                            <circle cx="0" cy="0" r="24" fill="rgba(30, 41, 59, 0.8)" stroke="#cbd5e1" stroke-width="1.5" />
                            <path d="M-8 -6h16v12h-16zM0 -10v4" fill="none" stroke="#cbd5e1" stroke-width="1.5" />
                            <text x="34" y="4" font-size="12" font-weight="bold" fill="#fff">
                                <tspan class="lang-ja">他の医師/医療機関</tspan>
                                <tspan class="lang-vi">Bác sĩ / Y tế khác</tspan>
                            </text>
                        </g>

                        <!-- 2. Family -->
                        <g transform="translate(250, 130)">
                            <circle cx="0" cy="0" r="24" fill="rgba(30, 41, 59, 0.8)" stroke="#cbd5e1" stroke-width="1.5" />
                            <!-- Simple family silhouette representation -->
                            <circle cx="-4" cy="-4" r="3.5" fill="#cbd5e1" />
                            <path d="M-9 7 C-9 2 -1 2 -1 7" fill="none" stroke="#cbd5e1" stroke-width="1.5" />
                            <circle cx="5" cy="-2" r="3" fill="#cbd5e1" />
                            <path d="M1 7 C1 3 9 3 9 7" fill="none" stroke="#cbd5e1" stroke-width="1.5" />
                            <text x="34" y="4" font-size="12" font-weight="bold" fill="#fff">
                                <tspan class="lang-ja">家族</tspan>
                                <tspan class="lang-vi">Gia đình</tspan>
                            </text>
                        </g>

                        <!-- 3. Police / Insurances -->
                        <g transform="translate(250, 210)">
                            <circle cx="0" cy="0" r="24" fill="rgba(30, 41, 59, 0.8)" stroke="#cbd5e1" stroke-width="1.5" />
                            <!-- Police badge silhouette -->
                            <path d="M0 -8 L6 -4 L4 4 L0 8 L-4 4 L-6 -4 Z" fill="none" stroke="#cbd5e1" stroke-width="1.5" />
                            <text x="34" y="4" font-size="12" font-weight="bold" fill="#fff">
                                <tspan class="lang-ja">警察/民間保険会社</tspan>
                                <tspan class="lang-vi">Cảnh sát / Bảo hiểm</tspan>
                            </text>
                        </g>

                    </svg>

                </div>

            </div>

            <script>
                // State holding consent doors
                let sbo122Gates = { 1: false, 2: false, 3: false };
                
                function sbo122ToggleGate(id) {
                    sbo122Gates[id] = !sbo122Gates[id];
                    const active = sbo122Gates[id];
                    
                    // Update flow line stroke
                    const line = document.getElementById('sbo122-flow-line-' + id);
                    if (line) {
                        line.style.stroke = active ? 'var(--accent-teal)' : 'rgba(255,255,255,0.12)';
                    }
                    
                    // Update Lock Icon representation (Locked red vs Unlocked green)
                    const icon = document.getElementById('sbo122-lock-icon-' + id);
                    if (icon) {
                        if (active) {
                            // Draw unlocked path
                            icon.setAttribute('d', 'M156 86h8v6h-8zm5-4a3 3 0 0 1 3 3v1'); 
                            // Quick translate adjustment based on standard positions
                            if (id === 2) icon.setAttribute('d', 'M156 131h8v6h-8zm5-4a3 3 0 0 1 3 3v1');
                            if (id === 3) icon.setAttribute('d', 'M156 176h8v6h-8zm5-4a3 3 0 0 1 3 3v1');
                            icon.style.stroke = 'var(--accent-teal)';
                        } else {
                            // Draw locked path
                            icon.setAttribute('d', 'M156 86h8v6h-8zm1-4a3 3 0 0 1 6 0v4h-6z');
                            if (id === 2) icon.setAttribute('d', 'M156 131h8v6h-8zm1-4a3 3 0 0 1 6 0v4h-6z');
                            if (id === 3) icon.setAttribute('d', 'M156 176h8v6h-8zm1-4a3 3 0 0 1 6 0v4h-6z');
                            icon.style.stroke = '#ef4444';
                        }
                    }
                    
                    // Update explanations text dynamically
                    const desc = document.getElementById('sbo122-gatekeeper-desc');
                    if (desc) {
                        if (id === 1) {
                            desc.innerHTML = active 
                                ? '<span class="lang-ja">🔓 <strong>他の医師/医療機関（開）</strong>：医療連携に同意しました。円滑な紹介や照会が可能です。</span><span class="lang-vi">🔓 <strong>Bác sĩ khác (Mở)</strong>: Đã đồng ý liên kết y tế. Cho phép giới thiệu hồ sơ bệnh án thuận lợi.</span>'
                                : '<span class="lang-ja">🔒 <strong>他の医師/医療機関（閉）</strong>：本人意思の確認中、または共有を留保しています。</span><span class="lang-vi">🔒 <strong>Bác sĩ khác (Khóa)</strong>: Đang xác nhận ý chí hoặc tạm giữ chia sẻ.</span>';
                        } else if (id === 2) {
                            desc.innerHTML = active 
                                ? '<span class="lang-ja">🔓 <strong>家族（開）</strong>：家族への病状説明に同意しました。がん告知等の重大告知で連携します。</span><span class="lang-vi">🔓 <strong>Gia đình (Mở)</strong>: Đã đồng ý giải thích bệnh tình cho gia đình. Phối hợp khi có tin tức lớn.</span>'
                                : '<span class="lang-ja">🔒 <strong>家族（閉）</strong>：家族であっても、患者本人の同意がない限り病状開示は不可（原則厳守）。</span><span class="lang-vi">🔒 <strong>Gia đình (Khóa)</strong>: Cho dù là gia đình, nếu không có sự đồng ý của bệnh nhân thì cấm tiết lộ thông tin bệnh án (nguyên tắc nghiêm ngặt).</span>';
                        } else if (id === 3) {
                            desc.innerHTML = active 
                                ? '<span class="lang-ja">🔓 <strong>警察/民間保険会社（開）</strong>：本人の同意または令状等に基づき、限定的な開示を承認しました。</span><span class="lang-vi">🔓 <strong>Cảnh sát / Bảo hiểm (Mở)</strong>: Phê duyệt công khai có giới hạn dựa trên sự đồng ý hoặc lệnh từ tòa án.</span>'
                                : '<span class="lang-ja">🔒 <strong>警察/民間保険会社（閉）</strong>：任意の開示請求に対しては厳格に拒否（刑事事件捜査であっても令状がない限り拒絶可能）。</span><span class="lang-vi">🔒 <strong>Cảnh sát / Bảo hiểm (Khóa)</strong>: Từ chối nghiêm khắc các yêu cầu tùy ý (dù điều tra vụ án hình sự vẫn có quyền từ chối nếu không có lệnh tòa).</span>';
                        }
                    }
                }
            </script>
            
            <!-- 3. Quyền từ chối cung cấp thông tin -->
            <div class="card glass-card text-left" style="padding: 25px; border-left: 4px solid #ef4444; background: rgba(239, 68, 68, 0.01); margin-bottom: 25px;">
                <h3 style="color: #ef4444; margin-top: 0; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                    <i class="fa-solid fa-shield-halved"></i>
                    <span class="lang-ja">情報提供を拒む権利</span>
                    <span class="lang-vi">Quyền từ chối cung cấp thông tin</span>
                </h3>
                <p class="small-desc" style="line-height: 1.8; color: var(--text-secondary); margin-bottom: 0;">
                    <span class="lang-ja">医療従事者は、交通事故や刑事事件においてさえ、被害者や加害者の人権を厳格に守らなければなりません。公的には担当の（受任）裁判官、検察官、および司法警察員（警部以上）等以外からの請求、また私的には民間の保険会社員からの請求に対しては、<strong>いかなる場合も情報提供を拒むことができます</strong>。情報の開示にあたっては裁判所の指示に従うのが原則ですが、緊急時において患者の生命が優先される場合は、担当医師の裁量に委ねられます。さらに、たとえ家族であっても、原則として<strong>患者本人の同意なしに情報を明かしてはなりません</strong>。（ただし、わが国においては主治医の裁量により、がん告知など生命に関わる重大な事柄については、本人に開示する前に家族に開示する場合が多いのが実情です。）</span>
                    <span class="lang-vi">Nhân viên y tế có trách nhiệm phải bảo vệ nghiêm ngặt nhân quyền của bệnh nhân ngay cả trong các trường hợp liên quan đến tai nạn giao thông hay vụ án hình sự. Đối với các yêu cầu cung cấp thông tin mang tính công cộng (ngoại trừ yêu cầu từ thẩm phán phụ trách, công tố viên, hoặc cảnh sát tư pháp từ cấp thanh tra trở lên), hoặc các yêu cầu mang tính tư nhân từ nhân viên công ty bảo hiểm, cơ sở y tế **có quyền từ chối cung cấp thông tin trong mọi trường hợp**. Việc công khai thông tin về nguyên tắc phải tuân theo chỉ thị của tòa án, ngoại trừ trường hợp khẩn cấp khi tính mạng của bệnh nhân được ưu tiên hàng đầu, lúc này quyết định sẽ thuộc về sự suy xét của bác sĩ phụ trách. Hơn nữa, ngay cả với người nhà của bệnh nhân, về nguyên tắc cũng **không được phép tiết lộ thông tin nếu không có sự đồng ý của bản thân bệnh nhân**. (Tuy nhiên, trong thực tế tại Nhật Bản, đối với các vấn đề quan trọng liên quan đến tính mạng như thông báo bệnh ung thư, thông tin thường được tiết lộ cho gia đình trước khi thông báo cho bệnh nhân dựa trên quyết định của bác sĩ chủ trị).</span>
                </p>
            </div>

            <!-- 3rd Party Release Limits -->
            <div class="card glass-card text-left" style="padding: 25px; margin-bottom: 25px;">
                <h3 style="color: var(--accent-teal); margin-top: 0; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                    <i class="fa-solid fa-share-nodes"></i>
                    <span class="lang-ja">第三者提供の制限（自己決定権の実践）</span>
                    <span class="lang-vi">Hạn chế cung cấp cho bên thứ ba (Thực hành Quyền tự quyết)</span>
                </h3>
                <p class="small-desc" style="color: var(--text-secondary); line-height: 1.7; margin-bottom: 20px;">
                    <span class="lang-ja">患者本人の同意がない限り、医療情報を他の第三者に提供することは原則禁止されています。実務において最もトラブルになりやすい領域です。以下の各主体への提供について、提供ルールを確認しましょう。</span>
                    <span class="lang-vi">Khi chuyển giao thông tin bệnh án cho bên thứ ba, về nguyên tắc cơ sở y tế bắt buộc phải giải thích rõ ràng và tuân thủ ý nguyện (đồng ý) của bệnh nhân. Bấm vào từng bên dưới đây để xem quy tắc thực tế.</span>
                </p>

                <!-- Release Selector Interactive Grid -->
                <div class="grid-4col" style="gap: 15px; margin-bottom: 20px;">
                    <button class="release-btn active" data-sbo122-release="doctor" style="padding: 12px; border: 1px solid var(--accent-teal); background: rgba(6, 182, 212, 0.08); color: #fff; cursor: pointer; border-radius: 6px; font-weight: bold; transition: all 0.3s ease;">
                        <i class="fa-solid fa-user-doctor" style="display: block; font-size: 1.4rem; margin-bottom: 8px; color: var(--accent-teal);"></i>
                        <span class="lang-ja">他の医師への紹介</span>
                        <span class="lang-vi">Giới thiệu bác sĩ khác</span>
                    </button>
                    <button class="release-btn" data-sbo122-release="family" style="padding: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); color: var(--text-muted); cursor: pointer; border-radius: 6px; font-weight: bold; transition: all 0.3s ease;">
                        <i class="fa-solid fa-people-group" style="display: block; font-size: 1.4rem; margin-bottom: 8px;"></i>
                        <span class="lang-ja">患者の家族</span>
                        <span class="lang-vi">Gia đình bệnh nhân</span>
                    </button>
                    <button class="release-btn" data-sbo122-release="police" style="padding: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); color: var(--text-muted); cursor: pointer; border-radius: 6px; font-weight: bold; transition: all 0.3s ease;">
                        <i class="fa-solid fa-building-shield" style="display: block; font-size: 1.4rem; margin-bottom: 8px;"></i>
                        <span class="lang-ja">警察・捜査機関</span>
                        <span class="lang-vi">Cảnh sát / Công an</span>
                    </button>
                    <button class="release-btn" data-sbo122-release="insurance" style="padding: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(255,255,255,0.02); color: var(--text-muted); cursor: pointer; border-radius: 6px; font-weight: bold; transition: all 0.3s ease;">
                        <i class="fa-solid fa-file-invoice-dollar" style="display: block; font-size: 1.4rem; margin-bottom: 8px;"></i>
                        <span class="lang-ja">民間保険会社</span>
                        <span class="lang-vi">Công ty bảo hiểm</span>
                    </button>
                </div>

                <!-- Release Data Card -->
                <div class="card glass-card" id="sbo122-release-card" style="border: 1px solid var(--accent-teal); padding: 20px; background: rgba(6, 182, 212, 0.01); transition: all 0.2s ease;">
                    <h4 id="sbo122-release-title" style="margin-top: 0; color: var(--accent-teal); font-size: 1.05rem;">
                        <i class="fa-solid fa-user-doctor" style="margin-right: 6px;"></i>
                        <span class="lang-ja">他の医師・医療機関への紹介</span>
                        <span class="lang-vi">Giới thiệu sang bác sĩ / Cơ sở y tế khác</span>
                    </h4>
                    <p id="sbo122-release-desc" class="small-desc" style="line-height: 1.7; color: var(--text-secondary); margin: 0;">
                        <span class="lang-ja">適切な紹介・転院先での診療に役立てる目的であっても、原則として患者本人の同意（または明示的な非反対）が必要です。通常、紹介状（診療情報提供書）の作成時に説明し同意を得ます。</span>
                        <span class="lang-vi">Ngay cả khi nhằm phục vụ khám chữa bệnh tại nơi chuyển viện phù hợp, về nguyên tắc vẫn bắt buộc phải có sự đồng ý của bệnh nhân (hoặc không phản đối rõ ràng). Thông thường, sự đồng ý này sẽ được giải thích và lấy ý kiến trực tiếp khi lập Giấy chuyển viện.</span>
                    </p>
                </div>
            </div>
        </div>
    </section>
    <!-- SECTION V: 総括：患者主体の医療情報管理へ (Slide 11) -->
    <section id="sbo122-sec5" class="section" style="padding-top: 30px; padding-bottom: 50px; border-top: 1px solid rgba(255,255,255,0.05);">
        <div class="container">
            <div class="section-badge" style="margin-bottom: 12px;">
                <span class="lang-ja">総括</span>
                <span class="lang-vi">Tổng kết</span>
            </div>
            <h2 class="section-title" style="margin-bottom: 24px;">
                <span class="lang-ja">患者主体の医療情報管理へ</span>
                <span class="lang-vi">Hướng tới quản lý thông tin y tế lấy bệnh nhân làm chủ thể</span>
            </h2>

            <div class="card glass-card text-left" style="padding: 25px; margin-bottom: 0;">
                <div class="grid-2col" style="gap: 30px; align-items: center;">
                    
                    <!-- Left Column: Pyramidal Hierarchy (Slide 11) -->
                    <div style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
                        
                        <!-- Peak Level (自己情報コントロール権) -->
                        <div style="background: rgba(45, 212, 191, 0.08); border: 1.5px solid var(--accent-teal); border-radius: 8px; padding: 15px; text-align: center; position: relative;">
                            <span style="position: absolute; left: 12px; top: 12px; background: var(--accent-teal); color: #0f172a; font-size: 0.72rem; font-weight: 900; padding: 2px 6px; border-radius: 3px; text-transform: uppercase;">Peak</span>
                            <h4 style="margin: 0 0 6px 0; color: var(--accent-teal); font-size: 1.05rem; font-weight: bold;">
                                <span class="lang-ja">自己情報コントロール権</span>
                                <span class="lang-vi">Quyền kiểm soát thông tin cá nhân</span>
                            </h4>
                            <p style="margin: 0; font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary);">
                                <span class="lang-ja">患者自身が主役となり、医療を共に創る「究極の目標」。</span>
                                <span class="lang-vi">Bệnh nhân đóng vai trò chủ đạo, cùng hợp tác xây dựng y tế - "Mục tiêu tối thượng".</span>
                            </p>
                        </div>
                        
                        <!-- Downward connector arrow -->
                        <div style="text-align: center; color: rgba(255,255,255,0.2); font-size: 1.1rem; line-height: 1;"><i class="fa-solid fa-chevron-up"></i></div>

                        <!-- Middle Level (アクセス権・開示) -->
                        <div style="background: rgba(59, 130, 246, 0.08); border: 1.5px solid #3b82f6; border-radius: 8px; padding: 15px; text-align: center; position: relative;">
                            <span style="position: absolute; left: 12px; top: 12px; background: #3b82f6; color: #fff; font-size: 0.72rem; font-weight: 900; padding: 2px 6px; border-radius: 3px; text-transform: uppercase;">Middle</span>
                            <h4 style="margin: 0 0 6px 0; color: #93c5fd; font-size: 1.05rem; font-weight: bold;">
                                <span class="lang-ja">アクセス権（開示）</span>
                                <span class="lang-vi">Quyền truy cập (Công khai)</span>
                            </h4>
                            <p style="margin: 0; font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary);">
                                <span class="lang-ja">情報の透明性と、自身の健康状態の「把握」。</span>
                                <span class="lang-vi">Tính minh bạch của thông tin và sự "nắm bắt" tình trạng sức khỏe bản thân.</span>
                            </p>
                        </div>

                        <!-- Downward connector arrow -->
                        <div style="text-align: center; color: rgba(255,255,255,0.2); font-size: 1.1rem; line-height: 1;"><i class="fa-solid fa-chevron-up"></i></div>

                        <!-- Base Level (守秘義務 & 個人情報保護法) -->
                        <div style="background: rgba(239, 68, 68, 0.08); border: 1.5px solid #ef4444; border-radius: 8px; padding: 15px; text-align: center; position: relative;">
                            <span style="position: absolute; left: 12px; top: 12px; background: #ef4444; color: #fff; font-size: 0.72rem; font-weight: 900; padding: 2px 6px; border-radius: 3px; text-transform: uppercase;">Base</span>
                            <h4 style="margin: 0 0 6px 0; color: #fca5a5; font-size: 1.05rem; font-weight: bold;">
                                <span class="lang-ja">守秘義務 ＆ 個人情報保護法</span>
                                <span class="lang-vi">Nghĩa vụ bảo mật & Luật bảo vệ thông tin cá nhân</span>
                            </h4>
                            <p style="margin: 0; font-size: 0.85rem; line-height: 1.5; color: var(--text-secondary);">
                                <span class="lang-ja">強固なセキュリティと法整備による「信頼の土台」。</span>
                                <span class="lang-vi">Nền tảng của sự tin cậy dựa trên bảo mật vững chắc và hành lang pháp lý hoàn thiện.</span>
                            </p>
                        </div>

                    </div>

                    <!-- Right Column: Upward Arrow (Empowerment & Trust) -->
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 20px; background: rgba(255,255,255,0.015); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; min-height: 280px; box-sizing: border-box; text-align: center; width: 100%;">
                        
                        <!-- SVG Upward Arrow matching Slide 11 -->
                        <svg width="80" height="160" viewBox="0 0 80 160">
                            <defs>
                                <linearGradient id="up-arrow-grad" x1="0%" y1="100%" x2="0%" y2="0%">
                                    <stop offset="0%" stop-color="#3b82f6" />
                                    <stop offset="100%" stop-color="#2dd4bf" />
                                </linearGradient>
                            </defs>
                            <!-- Large arrow shape -->
                            <path d="M 40 10 L 75 60 L 55 60 L 55 150 L 25 150 L 25 60 L 5 60 Z" fill="url(#up-arrow-grad)" stroke="#2dd4bf" stroke-width="1.5" />
                        </svg>

                        <h4 style="margin: 15px 0 6px 0; color: var(--accent-teal); font-size: 1.1rem; font-weight: bold;">
                            <span class="lang-ja">患者主体の実現</span>
                            <span class="lang-vi">Hiện thực hóa vai trò chủ thể của bệnh nhân</span>
                        </h4>
                        <span style="font-size: 0.85rem; font-weight: 500; color: var(--text-muted); letter-spacing: 0.5px;">(Empowerment & Trust)</span>
                    </div>

                </div>
            </div>
        </div>
    </section>\n\n</div>`;
