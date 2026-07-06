// Auto-generated SBO Template Component (from commit 12fe937)
window.SBO_TEMPLATES = window.SBO_TEMPLATES || {};
window.SBO_TEMPLATES['sbo112'] = `<div id="sbo112" class="sbo-section-wrapper">

                <!-- I. Patient & Medical Relationship -->
                <section id="sbo112-patient-relation" class="section">
                    <div class="container">
                        <style>
                            .sbo112-diagram-container {
                                display: grid;
                                grid-template-columns: 1fr 1.2fr;
                                gap: 30px;
                                margin-bottom: 30px;
                                background: var(--bg-card);
                                border: 1px solid var(--border-card);
                                border-radius: 20px;
                                padding: 30px;
                                backdrop-filter: blur(16px);
                            }
                            .sbo112-traditional-side {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: space-between;
                                border-right: 1px solid rgba(255,255,255,0.08);
                                padding-right: 30px;
                                min-height: 320px;
                            }
                            .sbo112-modern-side {
                                display: flex;
                                flex-direction: column;
                                align-items: center;
                                justify-content: space-between;
                                padding-left: 10px;
                                min-height: 320px;
                                position: relative;
                            }
                            .sbo112-factor-node {
                                position: absolute;
                                width: 42px;
                                height: 42px;
                                border-radius: 50%;
                                background: rgba(30, 41, 59, 0.9);
                                border: 2px solid rgba(255, 255, 255, 0.15);
                                display: flex;
                                align-items: center;
                                justify-content: center;
                                cursor: pointer;
                                z-index: 4;
                                outline: none;
                                transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                                color: var(--text-secondary);
                                box-shadow: 0 4px 10px rgba(0,0,0,0.3);
                            }
                            .sbo112-factor-node:hover {
                                transform: scale(1.15);
                                border-color: var(--accent-gold);
                                color: #fff;
                                background: rgba(245, 158, 11, 0.2);
                                box-shadow: 0 0 15px rgba(245, 158, 11, 0.4);
                            }
                            .sbo112-factor-node.active {
                                background: rgba(245, 158, 11, 0.25);
                                border-color: var(--accent-gold);
                                color: #fff;
                                box-shadow: 0 0 15px rgba(245, 158, 11, 0.4);
                            }
                            @media (max-width: 900px) {
                                .sbo112-diagram-container {
                                    grid-template-columns: 1fr;
                                    gap: 40px;
                                }
                                .sbo112-traditional-side {
                                    border-right: none;
                                    border-bottom: 1px solid rgba(255,255,255,0.08);
                                    padding-right: 0;
                                    padding-bottom: 40px;
                                }
                                .sbo112-modern-side {
                                    padding-left: 0;
                                }
                            }
                        </style>

                        <div class="section-badge">
                            <span class="lang-ja">患者と医療の関係</span>
                            <span class="lang-vi">Mối quan hệ giữa Bệnh nhân và Y tế</span>
                        </div>
                        <h2 class="section-title">
                            <span class="lang-ja">患者（生活者）中心の医療へのシフト</span>
                            <span class="lang-vi">Dịch chuyển sang nền y tế lấy bệnh nhân làm trung tâm</span>
                        </h2>
                        <p class="section-desc">
                            <span class="lang-ja">従来の意思決定モデルを見直し、個人の人生観や意思決定権を尊重する医療が推進されています。</span>
                            <span class="lang-vi">Thay đổi mô hình ra quyết định y khoa truyền thống để tôn trọng giá trị sống và quyền tự quyết của cá nhân.</span>
                        </p>

                        <!-- Interactive Diagram for Medical Model Shift -->
                        <div class="sbo112-diagram-container">
                            <!-- Left: Traditional Model -->
                            <div class="sbo112-traditional-side">
                                <h4 style="color: var(--text-primary); font-size: 1.05rem; margin-top: 0; margin-bottom: 20px; font-weight: 600; text-align: center;">
                                    <span class="lang-ja">従来の医療モデル（パターナリズム）</span>
                                    <span class="lang-vi">Mô hình y tế truyền thống (Gia trưởng)</span>
                                </h4>
                                
                                <div style="display: flex; flex-direction: column; align-items: center; gap: 15px; flex-grow: 1; justify-content: center;">
                                    <div style="width: 76px; height: 76px; border-radius: 50%; background: rgba(30, 41, 59, 0.8); border: 2px solid var(--text-muted); display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-primary);">
                                        <span class="lang-ja">医師</span>
                                        <span class="lang-vi">Bác sĩ</span>
                                    </div>
                                    
                                    <div style="font-size: 1.5rem; color: var(--text-muted);">
                                        <i class="fa-solid fa-arrow-down"></i>
                                    </div>
                                    
                                    <div style="width: 64px; height: 64px; border-radius: 50%; background: rgba(30, 41, 59, 0.8); border: 2px solid var(--text-muted); display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-secondary);">
                                        <span class="lang-ja">患者</span>
                                        <span class="lang-vi">Bệnh nhân</span>
                                    </div>
                                </div>
                                
                                <p style="font-size: 0.92rem; color: var(--text-secondary); text-align: center; margin: 20px 0 0 0; line-height: 1.6;">
                                    <span class="lang-ja">医師主導の意思決定。経験と技術を有する医療者に患者が従う構造。</span>
                                    <span class="lang-vi">Quyết định hoàn toàn do bác sĩ chỉ định. Người bệnh tuân thủ hướng dẫn một chiều.</span>
                                </p>
                            </div>

                            <!-- Right: Modern Model -->
                            <div class="sbo112-modern-side">
                                <h4 style="color: var(--accent-gold); font-size: 1.05rem; margin-top: 0; margin-bottom: 20px; font-weight: 600; text-align: center;">
                                    <span class="lang-ja">現代の医療モデル（多様な価値観の尊重）</span>
                                    <span class="lang-vi">Mô hình y tế hiện đại (Tôn trọng giá trị đa dạng)</span>
                                </h4>
                                
                                <div style="display: flex; align-items: center; justify-content: center; gap: 40px; flex-grow: 1; position: relative; width: 100%; height: 200px;">
                                    <div style="width: 76px; height: 76px; border-radius: 50%; background: rgba(30, 41, 59, 0.8); border: 2px solid var(--text-muted); display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--text-primary); z-index: 2;">
                                        <span class="lang-ja">医師</span>
                                        <span class="lang-vi">Bác sĩ</span>
                                    </div>
                                    
                                    <div style="display: flex; flex-direction: column; gap: 6px; color: var(--accent-gold); font-size: 1.3rem; z-index: 2; font-weight: bold;">
                                        <i class="fa-solid fa-right-left"></i>
                                    </div>
                                    
                                    <!-- Patient Central Circle with Connected Factors -->
                                    <div style="position: relative; display: flex; align-items: center; justify-content: center; width: 180px; height: 180px;">
                                        <div style="position: absolute; width: 130px; height: 130px; border: 1.5px dashed rgba(245, 158, 11, 0.35); border-radius: 50%; z-index: 1;"></div>
                                        
                                        <div style="width: 80px; height: 80px; border-radius: 50%; background: rgba(245, 158, 11, 0.12); border: 3px solid var(--accent-gold); display: flex; align-items: center; justify-content: center; font-weight: 600; color: var(--accent-gold); z-index: 3; box-shadow: 0 0 15px rgba(245, 158, 11, 0.25);">
                                            <span class="lang-ja">患者</span>
                                            <span class="lang-vi">Bệnh nhân</span>
                                        </div>
                                        
                                        <!-- Surrounding Factor Nodes -->
                                        <button type="button" class="sbo112-factor-node" data-factor="1" style="position: absolute; top: -10px; left: calc(50% - 21px);" title="家族・地域 / Gia đình & Xã hội">
                                            <i class="fa-solid fa-house-user"></i>
                                        </button>
                                        <button type="button" class="sbo112-factor-node" data-factor="2" style="position: absolute; top: 32px; right: -12px;" title="人生観・価値観 / Nhân sinh quan & Giá trị">
                                            <i class="fa-solid fa-brain"></i>
                                        </button>
                                        <button type="button" class="sbo112-factor-node" data-factor="3" style="position: absolute; bottom: 8px; right: 12px;" title="生活習慣 / Thói quen lối sống">
                                            <i class="fa-solid fa-leaf"></i>
                                        </button>
                                        <button type="button" class="sbo112-factor-node" data-factor="4" style="position: absolute; bottom: 8px; left: 12px;" title="経済・支援体制 / Kinh tế & Hỗ trợ">
                                            <i class="fa-solid fa-hand-holding-dollar"></i>
                                        </button>
                                        <button type="button" class="sbo112-factor-node" data-factor="5" style="position: absolute; top: 32px; left: -12px;" title="意思・希望 / Nguyện vọng & Tự quyết">
                                            <i class="fa-solid fa-scale-balanced"></i>
                                        </button>
                                    </div>
                                </div>
                                
                                <p style="font-size: 0.92rem; color: var(--text-secondary); text-align: center; margin: 20px 0 0 0; line-height: 1.6;">
                                    <span class="lang-ja">個人の多様な価値観や人生観を尊重し、患者が自発的に意思決定を行う構造。</span>
                                    <span class="lang-vi">Quyết định dựa trên sự tôn trọng lối sống và quyền tự quyết của người bệnh.</span>
                                </p>
                            </div>
                        </div>

                        <!-- Details Panel -->
                        <div class="card glass-card" id="sbo112-p1-details-panel"
                            style="padding: 24px 30px; border-left: 5px solid var(--accent-gold); background: rgba(255, 255, 255, 0.02); min-height: 140px; display: flex; flex-direction: column; justify-content: flex-start; transition: all 0.3s ease; margin-bottom: 40px;">
                            <!-- Dynamic content populated by JS -->
                        </div>

                        <!-- Patient-Centered Medicine Relationship Cards -->
                        <div class="card glass-card" style="margin-top: 30px; text-align: center; padding: 30px;">
                            <h3 style="margin-top: 0; margin-bottom: 16px; font-size: 1.15rem; color: #fff; display: flex; align-items: center; gap: 8px; justify-content: flex-start; font-weight: 600;">
                                <i class="fa-solid fa-heart-pulse" style="color: var(--accent-gold);"></i>
                                <span class="lang-ja">患者中心の医療</span>
                                <span class="lang-vi">Y tế lấy bệnh nhân làm trung tâm</span>
                            </h3>

                            <p class="section-desc" style="max-width: 650px; margin: 0 auto 25px auto;">
                                <span class="lang-ja">医療者の説明と同意（インフォームド・コンセント）および選択（インフォームド・チョイス）の交差点に、真の「患者の意向」が存在します。</span>
                                <span class="lang-vi">Ý nguyện thực sự của bệnh nhân nằm ở điểm giao thoa giữa sự đồng ý (Informed Consent) và sự lựa chọn (Informed Choice) sau khi được giải thích đầy đủ.</span>
                            </p>
                            
                            <style>
                                .sbo112-venn-cards-grid {
                                    display: grid;
                                    grid-template-columns: 1fr 1.1fr 1fr;
                                    gap: 20px;
                                    margin: 0 auto 25px auto;
                                    max-width: 800px;
                                    align-items: stretch;
                                }
                                .sbo112-venn-card-item {
                                    background: rgba(30, 41, 59, 0.3);
                                    border: 1px solid var(--border-card);
                                    border-radius: 12px;
                                    padding: 20px;
                                    cursor: pointer;
                                    transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
                                    display: flex;
                                    flex-direction: column;
                                    align-items: center;
                                    justify-content: center;
                                    position: relative;
                                }
                                .sbo112-venn-card-item:hover, .sbo112-venn-card-item.active {
                                    transform: translateY(-4px);
                                }
                                .sbo112-venn-card-item[data-venn="consent"].active {
                                    border-color: var(--accent-teal);
                                    background: rgba(6, 182, 212, 0.08);
                                    box-shadow: 0 0 20px rgba(6, 182, 212, 0.15);
                                }
                                .sbo112-venn-card-item[data-venn="choice"].active {
                                    border-color: var(--accent-teal);
                                    background: rgba(6, 182, 212, 0.08);
                                    box-shadow: 0 0 20px rgba(6, 182, 212, 0.15);
                                }
                                .sbo112-venn-card-item[data-venn="wishes"] {
                                    border: 1.5px solid rgba(245, 158, 11, 0.4);
                                    background: rgba(245, 158, 11, 0.03);
                                }
                                .sbo112-venn-card-item[data-venn="wishes"].active {
                                    border-color: var(--accent-gold);
                                    background: rgba(245, 158, 11, 0.08);
                                    box-shadow: 0 0 20px rgba(245, 158, 11, 0.2);
                                }
                                @media (max-width: 768px) {
                                    .sbo112-venn-cards-grid {
                                        grid-template-columns: 1fr;
                                        gap: 15px;
                                    }
                                }
                            </style>
                            
                            <div class="sbo112-venn-cards-grid">
                                <!-- Card 1: Consent -->
                                <div class="sbo112-venn-card-item" data-venn="consent" style="border-top: 4px solid var(--accent-teal);">
                                    <i class="fa-solid fa-file-signature" style="color: var(--accent-teal); font-size: 1.5rem; margin-bottom: 12px;"></i>
                                    <h4 style="margin: 0; color: #fff; font-size: 1.05rem; font-weight: bold; text-align: center;">
                                        <span class="lang-ja" style="display: block; text-align: center; width: 100%;">説明と同意</span>
                                        <span class="lang-vi" style="display: block; text-align: center; width: 100%; line-height: 1.2;">Giải thích &amp; Đồng ý</span>
                                    </h4>
                                    <span style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px; display: block; text-align: center; width: 100%;">Informed Consent</span>
                                </div>
                                
                                <!-- Card 3: Wishes (Highlight) -->
                                <div class="sbo112-venn-card-item" data-venn="wishes" style="border-top: 4px solid var(--accent-gold);">
                                    <i class="fa-solid fa-heart-pulse" style="color: var(--accent-gold); font-size: 1.8rem; margin-bottom: 12px;"></i>
                                    <h4 style="margin: 0; color: var(--accent-gold); font-size: 1.15rem; font-weight: 800; text-align: center;">
                                        <span class="lang-ja" style="display: block; text-align: center; width: 100%;">患者の意向</span>
                                        <span class="lang-vi" style="display: block; text-align: center; width: 100%; font-size: 1.0rem;">Ý nguyện của BN</span>
                                    </h4>
                                    <span style="font-size: 0.82rem; color: var(--text-secondary); margin-top: 4px; display: block; text-align: center; width: 100%;">Patient's Wishes</span>
                                </div>
                                
                                <!-- Card 2: Choice -->
                                <div class="sbo112-venn-card-item" data-venn="choice" style="border-top: 4px solid var(--accent-teal);">
                                    <i class="fa-solid fa-code-branch" style="color: var(--accent-teal); font-size: 1.5rem; margin-bottom: 12px;"></i>
                                    <h4 style="margin: 0; color: #fff; font-size: 1.05rem; font-weight: bold; text-align: center;">
                                        <span class="lang-ja" style="display: block; text-align: center; width: 100%;">説明と選択</span>
                                        <span class="lang-vi" style="display: block; text-align: center; width: 100%; line-height: 1.2;">Giải thích &amp; Lựa chọn</span>
                                    </h4>
                                    <span style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 4px; display: block; text-align: center; width: 100%;">Informed Choice</span>
                                </div>
                            </div>
                            
                            <!-- Venn Interactive Details Panel -->
                            <div id="sbo112-venn-details-panel" class="card glass-card" style="margin: 20px auto; padding: 22px 28px; max-width: 800px; text-align: left; border-left: 5px solid var(--accent-gold); background: rgba(255,255,255,0.02); min-height: 90px; display: flex; flex-direction: column; justify-content: center; transition: all 0.3s ease;">
                                <p style="margin: 0; font-size: 0.96rem; color: var(--text-secondary); text-align: center; font-style: italic;">
                                    <span class="lang-ja">カードをクリックすると、患者中心の医療における各概念の詳細が表示されます。</span>
                                    <span class="lang-vi">Nhấp vào từng thẻ để xem chi tiết các khái niệm về Y tế lấy bệnh nhân làm trung tâm.</span>
                                </p>
                            </div>
                            
                            <div style="background: rgba(30, 41, 59, 0.8); border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; padding: 18px 24px; text-align: center; max-width: 800px; margin: 0 auto;">
                                <p style="margin: 0; font-size: 0.95rem; line-height: 1.6; color: #e2e8f0; font-weight: 500;">
                                    <span class="lang-ja">現代のあらゆる医療行為は、これらを前提とし、患者の意向を最優先する準委任契約関係へと拡がっている。</span>
                                    <span class="lang-vi">Mọi hành vi y khoa hiện đại đều lấy các điều này làm tiền đề, hướng tới mối quan hệ hợp đồng ủy quyền ưu tiên tối đa nguyện vọng của bệnh nhân.</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- II. Personal Information & Medical -->
                <section id="sbo112-personal-info" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">個人情報と医療</span>
                            <span class="lang-vi">Mối quan hệ giữa Thông tin cá nhân và Y tế</span>
                        </div>
                        <h2 class="section-title">
                            <span class="lang-ja">診療情報の管理と公益利用のバランス</span>
                            <span class="lang-vi">Quản lý hồ sơ khám chữa bệnh &amp; Hài hòa lợi ích công cộng</span>
                        </h2>
                        <p class="section-desc">
                            <span class="lang-ja">個人情報保護法に基づく患者データの自己管理（PHR）と、疫学研究のためのビッグデータ二次利用との調和が問われています。</span>
                            <span class="lang-vi">Đảm bảo quyền riêng tư và phát triển Hồ sơ sức khỏe cá nhân (PHR), đồng thời tạo sự đồng thuận về việc sử dụng dữ liệu lớn cho dịch tễ học.</span>
                        </p>

                        <!-- Horizontal Timeline Layout for Part 2 -->
                        <div style="position: relative; margin: 40px 0 35px 0; padding: 0 10px;">
                            <!-- Connecting Line -->
                            <div style="position: absolute; top: 25px; left: 10%; right: 10%; height: 4px; background: rgba(255,255,255,0.06); border-radius: 2px; z-index: 1;">
                                <div id="sbo112-p2-timeline-progress" style="width: 0%; height: 100%; background: linear-gradient(90deg, var(--accent-teal), var(--accent-gold)); transition: width 0.4s ease; border-radius: 2px;"></div>
                            </div>

                            <!-- Timeline Milestones -->
                            <div style="display: flex; justify-content: space-between; position: relative; z-index: 2; width: 100%;" id="sbo112-p2-tabs-group">
                                
                                <button type="button" class="sbo112-p2-timeline-node" data-sbo112-p2-tab="1" style="background: none; border: none; outline: none; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 8px; width: 30%;">
                                    <div class="node-circle" style="width: 50px; height: 50px; border-radius: 50%; background: rgba(15,23,42,0.8); border: 2px solid rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; color: var(--text-muted); transition: all 0.3s ease; box-shadow: 0 0 15px rgba(0,0,0,0.5);">
                                        <i class="fa-solid fa-user-shield"></i>
                                    </div>
                                    <span style="font-size: 0.95rem; font-weight: 600; color: var(--text-secondary); text-align: center; transition: all 0.3s ease;">
                                        <span class="lang-ja">情報コントロール</span>
                                        <span class="lang-vi">Kiểm soát thông tin</span>
                                    </span>
                                </button>

                                <button type="button" class="sbo112-p2-timeline-node" data-sbo112-p2-tab="2" style="background: none; border: none; outline: none; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 8px; width: 30%;">
                                    <div class="node-circle" style="width: 50px; height: 50px; border-radius: 50%; background: rgba(15,23,42,0.8); border: 2px solid rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; color: var(--text-muted); transition: all 0.3s ease; box-shadow: 0 0 15px rgba(0,0,0,0.5);">
                                        <i class="fa-solid fa-id-card-clip"></i>
                                    </div>
                                    <span style="font-size: 0.95rem; font-weight: 600; color: var(--text-secondary); text-align: center; transition: all 0.3s ease;">
                                        <span class="lang-ja">PHR活用</span>
                                        <span class="lang-vi">Ứng dụng PHR</span>
                                    </span>
                                </button>

                                <button type="button" class="sbo112-p2-timeline-node" data-sbo112-p2-tab="3" style="background: none; border: none; outline: none; cursor: pointer; display: flex; flex-direction: column; align-items: center; gap: 8px; width: 30%;">
                                    <div class="node-circle" style="width: 50px; height: 50px; border-radius: 50%; background: rgba(15,23,42,0.8); border: 2px solid rgba(255,255,255,0.15); display: flex; align-items: center; justify-content: center; font-size: 1.1rem; color: var(--text-muted); transition: all 0.3s ease; box-shadow: 0 0 15px rgba(0,0,0,0.5);">
                                        <i class="fa-solid fa-users"></i>
                                    </div>
                                    <span style="font-size: 0.95rem; font-weight: 600; color: var(--text-secondary); text-align: center; transition: all 0.3s ease;">
                                        <span class="lang-ja">ビッグデータ</span>
                                        <span class="lang-vi">Dữ liệu lớn</span>
                                    </span>
                                </button>
                            </div>
                        </div>

                        <!-- Details Display Card Below -->
                        <div class="card glass-card" id="sbo112-p2-details-panel"
                            style="padding: 30px; border-top: 5px solid var(--accent-teal); background: rgba(255, 255, 255, 0.02); min-height: 180px; display: flex; flex-direction: column; justify-content: flex-start; transition: all 0.3s ease; border-radius: 12px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);">
                            <!-- Dynamic content -->
                        </div>
                    </div>
                </section>

                <!-- III. Personalized Medicine -->
                <section id="sbo112-personalized-med" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">個別化医療</span>
                            <span class="lang-vi">Mối quan hệ với Y học cá thể hóa</span>
                        </div>
                        <h2 class="section-title">
                            <span class="lang-ja">「集団の標準」から「個人の最適」へ</span>
                            <span class="lang-vi">Từ chẩn đoán theo quần thể đến tối ưu hóa cho cá nhân</span>
                        </h2>
                        <p class="section-desc">
                            <span class="lang-ja">遺伝子情報（ゲノタイプ）と環境要因（フェノタイプ）を解析し、一律ではない最適なアプローチを実現します。</span>
                            <span class="lang-vi">Phân tích kết hợp thông tin di truyền (Genotype) và môi trường sống
                                (Phenotype) để mang lại hiệu quả điều trị và chẩn đoán tối đa.</span>
                        </p>

                        <div class="sbo112-pm-cards-stack" style="display: flex; flex-direction: column; gap: 24px; margin-bottom: 35px;">
                            
                            <!-- Card 1: Paradigm Shift -->
                            <div class="card glass-card" style="padding: 30px; border-top: 5px solid var(--accent-teal); background: rgba(255, 255, 255, 0.02); border-radius: 12px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border-left: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <div style="display: flex; gap: 30px; flex-wrap: wrap; align-items: center;">
                                    <!-- Left side: text -->
                                    <div style="flex: 1.2 1 350px;">
                                        <h3 style="color: var(--accent-teal); margin-top: 0; margin-bottom: 16px; font-size: 1.15rem; display: flex; align-items: center; gap: 10px; font-weight: 600;">
                                            <i class="fa-solid fa-arrows-spin" style="font-size: 1.2rem;"></i>
                                            <span class="lang-ja">パラダイムシフト</span>
                                            <span class="lang-vi">Sự chuyển dịch</span>
                                        </h3>
                                        <div style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary);">
                                            <div class="lang-ja">
                                                <p style="margin: 0 0 10px 0;">• <strong>一律判定の限界：</strong>従来の医療では、集団の検査値分布から導出される「正常値」に基づく判断が一般的でした。しかし、ホメオスタシス（恒常性維持）の機序により、個人ごとの本来の変動幅は集団全体の幅よりもはるかに小さいのが現実です。</p>
                                                <p style="margin: 0;">• <strong>個体差の客観評価：</strong>同一 of 同一の病名であってもすべての人に同じ治療が有効とは限りません。「個体差」を客観的に測定し、最適な個別化医療への転換が進んでいます。</p>
                                            </div>
                                            <div class="lang-vi">
                                                <p style="margin: 0 0 10px 0;">• <strong>Hạn chế của chỉ số chung:</strong> Y học truyền thống đánh giá bệnh dựa trên "giá trị bình thường" từ phân bố của quần thể. Tuy nhiên, biên độ biến động sinh lý thực tế của mỗi cá nhân nhỏ hơn rất nhiều.</p>
                                                <p style="margin: 0;">• <strong>Đo lường khác biệt cá nhân:</strong> Không áp dụng một phác đồ chung cho tất cả bệnh nhân cùng chẩn đoán, chuyển dịch sang đo lường khách quan "khác biệt cá thể" để điều trị tối ưu.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Right side: diagram -->
                                    <div style="flex: 1 1 300px; display: flex; justify-content: center;">
                                        <div class="sbo112-paradigm-shift-diagram" style="width: 100%; max-width: 450px; display: flex; gap: 15px; align-items: center; justify-content: space-between; background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 20px; flex-wrap: wrap;">
                                            <div style="flex: 1 1 150px; display: flex; flex-direction: column; align-items: center; text-align: center;">
                                                <span style="font-weight: bold; color: #fff; font-size: 0.8rem; margin-bottom: 8px;">集団判定 (画一的)</span>
                                                <svg width="150" height="90" viewBox="0 0 150 90" style="overflow: visible;">
                                                    <line x1="0" y1="85" x2="150" y2="85" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" />
                                                    <path d="M 5 85 C 45 85, 60 15, 75 15 C 90 15, 105 85, 145 85" fill="rgba(37, 99, 235, 0.2)" stroke="#2563eb" stroke-width="2.5" />
                                                </svg>
                                            </div>
                                            <div style="flex: 0 1 30px; display: flex; align-items: center; justify-content: center; color: #64748b; font-size: 1.5rem;">
                                                <i class="fa-solid fa-right-long"></i>
                                            </div>
                                            <div style="flex: 1 1 150px; display: flex; flex-direction: column; align-items: center; text-align: center;">
                                                <span style="font-weight: bold; color: var(--accent-gold); font-size: 0.8rem; margin-bottom: 8px;">個体測定 (個別最適)</span>
                                                <svg width="150" height="90" viewBox="0 0 150 90" style="overflow: visible;">
                                                    <line x1="0" y1="85" x2="150" y2="85" stroke="rgba(255,255,255,0.15)" stroke-width="1.5" />
                                                    <path d="M 35 85 C 65 85, 72 5, 75 5 C 78 5, 85 85, 115 85" fill="rgba(245, 158, 11, 0.2)" stroke="var(--accent-gold)" stroke-width="2.5" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Card 2: Data & IoT Integration -->
                            <div class="card glass-card" style="padding: 30px; border-top: 5px solid var(--accent-gold); background: rgba(255, 255, 255, 0.02); border-radius: 12px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border-left: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <div style="display: flex; gap: 30px; flex-wrap: wrap; align-items: center;">
                                    <!-- Left side: text -->
                                    <div style="flex: 1.2 1 350px;">
                                        <h3 style="color: var(--accent-gold); margin-top: 0; margin-bottom: 16px; font-size: 1.15rem; display: flex; align-items: center; gap: 10px; font-weight: 600;">
                                            <i class="fa-solid fa-mobile-screen-button" style="font-size: 1.2rem;"></i>
                                            <span class="lang-ja">データとIoTの統合</span>
                                            <span class="lang-vi">Tích hợp dữ liệu &amp; IoT</span>
                                        </h3>
                                        <div style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary);">
                                            <div class="lang-ja">
                                                <p style="margin: 0 0 10px 0;">• <strong>データ解析の進歩：</strong>ゲノム解読技術と生命情報学（バイオインフォマティクス）の進歩により、個人の遺伝的素因（Genotype）を瞬時に分析することが可能になりました。</p>
                                                <p style="margin: 0;">• <strong>リアルタイム生体連携：</strong>IoT機器により、心拍、血圧、睡眠などの生体情報（Phenotype）がリアルタイムにPHRへと蓄積され、予防・治療の特定に役立てられます。</p>
                                            </div>
                                            <div class="lang-vi">
                                                <p style="margin: 0 0 10px 0;">• <strong>Giải mã gen tiên tiến:</strong> Tin sinh học (Bioinformatics) cùng giải trình tự gen quy mô lớn giúp phân tích nhanh chóng kiểu gen (Genotype) của người bệnh.</p>
                                                <p style="margin: 0;">• <strong>Thu nhập thực tế qua IoT:</strong> Thông qua thiết bị đeo (IoT), chỉ số sinh lý (Phenotype) được ghi nhận liên tục vào PHR giúp đưa ra khuyến nghị chính xác.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Right side: diagram -->
                                    <div style="flex: 1 1 300px; display: flex; justify-content: center;">
                                        <div class="sbo112-iot-diagram" style="width: 100%; max-width: 450px; display: flex; gap: 20px; align-items: center; justify-content: center; background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 20px; min-height: 130px;">
                                            <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; width: 70px;">
                                                <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(6, 182, 212, 0.15); border: 1.5px solid var(--accent-teal); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: var(--accent-teal);">
                                                    <i class="fa-solid fa-dna"></i>
                                                </div>
                                                <span style="font-size: 0.75rem; color: #cbd5e1; font-weight: bold;">Genotype</span>
                                            </div>
                                            <div style="color: #64748b; font-size: 1.1rem;"><i class="fa-solid fa-plus"></i></div>
                                            <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; width: 70px;">
                                                <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(245, 158, 11, 0.15); border: 1.5px solid var(--accent-gold); display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: var(--accent-gold);">
                                                    <i class="fa-solid fa-mobile-screen-button"></i>
                                                </div>
                                                <span style="font-size: 0.75rem; color: #cbd5e1; font-weight: bold;">Phenotype</span>
                                            </div>
                                            <div style="color: #64748b; font-size: 1.1rem;"><i class="fa-solid fa-arrow-right-long"></i></div>
                                            <div style="display: flex; flex-direction: column; align-items: center; gap: 6px; width: 75px;">
                                                <div style="width: 44px; height: 44px; border-radius: 50%; background: rgba(37, 99, 235, 0.15); border: 1.5px solid #2563eb; display: flex; align-items: center; justify-content: center; font-size: 1.2rem; color: #2563eb;">
                                                    <i class="fa-solid fa-cloud"></i>
                                                </div>
                                                <span style="font-size: 0.75rem; color: #cbd5e1; font-weight: bold;">PHR (IoT)</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Card 3: Precision Medicine Development -->
                            <div class="card glass-card" style="padding: 30px; border-top: 5px solid #a855f7; background: rgba(255, 255, 255, 0.02); border-radius: 12px; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1); border-left: 1px solid rgba(255,255,255,0.05); border-right: 1px solid rgba(255,255,255,0.05); border-bottom: 1px solid rgba(255,255,255,0.05);">
                                <div style="display: flex; gap: 30px; flex-wrap: wrap; align-items: center;">
                                    <!-- Left side: text -->
                                    <div style="flex: 1.2 1 350px;">
                                        <h3 style="color: #a855f7; margin-top: 0; margin-bottom: 16px; font-size: 1.15rem; display: flex; align-items: center; gap: 10px; font-weight: 600;">
                                            <i class="fa-solid fa-microchip" style="font-size: 1.2rem;"></i>
                                            <span class="lang-ja">精密医療への発展</span>
                                            <span class="lang-vi">Y học chính xác</span>
                                        </h3>
                                        <div style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary);">
                                            <div class="lang-ja">
                                                <p style="margin: 0 0 10px 0;">• <strong>単なる「個別」から「層別化」へ：</strong>精密医療は、個人の遺伝的特徴や疾患の分子レベルのサブタイプに基づき、患者を細かく「層別化」して最適な治療を施すアプローチです。</p>
                                                <p style="margin: 0;">• <strong>多重因子的解析：</strong>遺伝的素因と環境要因の複雑な相互作用に基づき、マルチオミクス（多様な分子データ）をビッグデータ技術で解析します。</p>
                                            </div>
                                            <div class="lang-vi">
                                                <p style="margin: 0 0 10px 0;">• <strong>Phân tầng nhóm bệnh nhân chuyên sâu:</strong> Y học chính xác thực hiện việc phân tầng (層別化) bệnh nhân thành các nhóm nhỏ (subtype) để điều trị tối ưu nhất.</p>
                                                <p style="margin: 0;">• <strong>Phân tích đa yếu tố:</strong> Phân tích dữ liệu sinh học phân tử quy mô lớn (Multi-omics) để làm rõ tương tác giữa gen bẩm sinh và môi trường.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <!-- Right side: diagram -->
                                    <div style="flex: 1 1 300px; display: flex; justify-content: center;">
                                        <div class="sbo112-precision-med-diagram" style="width: 100%; max-width: 450px; display: flex; gap: 15px; align-items: center; justify-content: space-between; background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255,255,255,0.06); border-radius: 12px; padding: 20px; flex-wrap: wrap;">
                                            <div style="flex: 1.2 1 150px; display: flex; flex-direction: column; gap: 8px;">
                                                <div style="background: rgba(30, 41, 59, 0.6); border: 1.5px solid #2563eb; border-radius: 6px; padding: 6px 10px; display: flex; align-items: center; gap: 8px; font-size: 0.78rem;">
                                                    <i class="fa-solid fa-dna" style="color: #60a5fa; font-size: 0.95rem;"></i>
                                                    <span style="color: #fff; font-weight: 600;">Genotype</span>
                                                </div>
                                                <div style="background: rgba(30, 41, 59, 0.6); border: 1.5px solid #2563eb; border-radius: 6px; padding: 6px 10px; display: flex; align-items: center; gap: 8px; font-size: 0.78rem;">
                                                    <i class="fa-solid fa-apple-whole" style="color: #4ade80; font-size: 0.95rem;"></i>
                                                    <span style="color: #fff; font-weight: 600;">Phenotype</span>
                                                </div>
                                                <div style="background: rgba(30, 41, 59, 0.6); border: 1.5px solid #2563eb; border-radius: 6px; padding: 6px 10px; display: flex; align-items: center; gap: 8px; font-size: 0.78rem;">
                                                    <i class="fa-solid fa-clock" style="color: #f59e0b; font-size: 0.95rem;"></i>
                                                    <span style="color: #fff; font-weight: 600;">IoT Data</span>
                                                </div>
                                            </div>
                                            
                                            <div style="flex: 0 1 45px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
                                                <div style="width: 40px; height: 40px; border-radius: 50%; background: #1e293b; border: 2px dashed var(--accent-teal); display: flex; align-items: center; justify-content: center; color: var(--accent-teal); font-size: 1.1rem; animation: spin 10s linear infinite;">
                                                    <i class="fa-solid fa-microchip"></i>
                                                </div>
                                                <div style="font-size: 1.1rem; color: var(--accent-gold); margin-top: 6px; animation: pulse 2s infinite;"><i class="fa-solid fa-arrow-right"></i></div>
                                            </div>
                                            
                                            <div style="flex: 1 1 120px; display: flex; flex-direction: column; align-items: center; text-align: center;">
                                                <div style="position: relative; width: 60px; height: 60px; display: flex; align-items: center; justify-content: center; margin-bottom: 6px;">
                                                    <div style="position: absolute; width: 56px; height: 56px; border: 2px solid rgba(245, 158, 11, 0.3); border-radius: 50%;"></div>
                                                    <div style="position: absolute; width: 36px; height: 36px; border: 2px solid rgba(245, 158, 11, 0.6); border-radius: 50%;"></div>
                                                    <div style="position: absolute; width: 14px; height: 14px; background: var(--accent-gold); border-radius: 50%; box-shadow: 0 0 6px var(--accent-gold);"></div>
                                                </div>
                                                <span style="font-weight: bold; color: var(--accent-gold); font-size: 0.78rem;">個別最適</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <!-- Tab Script -->

                        <!-- Interactive Personalized Medicine Simulator Widget -->
                        <div class="card glass-card"
                            style="padding: 28px; border: 1px solid rgba(255,255,255,0.08); background: linear-gradient(135deg, rgba(20,20,35,0.6) 0%, rgba(10,10,20,0.8) 100%);">
                            <h3
                                style="margin-top: 0; margin-bottom: 12px; font-size: 0.96rem; color: #fff; display: flex; align-items: center; gap: 8px;">
                                <i class="fa-solid fa-microscope" style="color: var(--accent-teal);"></i>
                                <span class="lang-ja">精密医療（高血圧個別アプローチ）臨床シミュレーター</span>
                                <span class="lang-vi">Trình mô phỏng lâm sàng Y học chính xác (Tăng huyết áp)</span>
                            </h3>
                            <p class="small-desc"
                                style="margin-bottom: 22px; font-size: 0.96rem; color: var(--text-muted);">
                                <span
                                    class="lang-ja">同じ血圧値でも、遺伝子（ゲノタイプ）と生活習慣（フェノタイプ）の違いによって、集団基準の診断と個別化医療の処方がどう変わるかを比較します。</span>
                                <span class="lang-vi">So sánh sự khác biệt giữa chẩn đoán theo quần thể và điều trị cá
                                    thể hóa thông qua việc kết hợp các chỉ số huyết áp, gen (Genotype) và thói quen ăn
                                    uống (Phenotype).</span>
                            </p>

                            <div class="grid-2col" style="gap: 25px;">
                                <!-- Left Column: Inputs Area -->
                                <div
                                    style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); padding: 22px; border-radius: 12px; display: flex; flex-direction: column; gap: 20px;">
                                    <!-- Blood Pressure Slider -->
                                    <div>
                                        <div
                                            style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                                            <label
                                                style="font-size: 0.96rem; color: #fff; font-weight: 600; margin: 0;">
                                                <span class="lang-ja">測定血圧値 (mmHg)</span>
                                                <span class="lang-vi">Chỉ số Huyết áp đo được</span>
                                            </label>
                                            <span id="bp-val-display"
                                                style="font-size: 0.96rem; font-weight: bold; color: var(--accent-teal); transition: color 0.3s ease;">135
                                                mmHg</span>
                                        </div>
                                        <input type="range" id="sbo112-bp-slider" min="100" max="180" value="135"
                                            style="width: 100%; accent-color: var(--accent-teal); cursor: pointer; height: 6px; border-radius: 3px; background: rgba(255,255,255,0.1);">
                                        <div
                                            style="display: flex; justify-content: space-between; font-size: 0.96rem; color: var(--text-muted); margin-top: 6px;">
                                            <span>100 (Normal)</span>
                                            <span>130 (Pre-HTN)</span>
                                            <span>140+ (HTN)</span>
                                        </div>
                                    </div>

                                    <!-- Genotype Segmented Control -->
                                    <div>
                                        <label
                                            style="display: block; font-size: 0.96rem; color: #fff; margin-bottom: 8px; font-weight: 600;">
                                            <span class="lang-ja">ゲノタイプ (塩分感受性遺伝子)</span>
                                            <span class="lang-vi">Genotype (Gen nhạy cảm muối)</span>
                                        </label>
                                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;"
                                            id="geno-btn-group">
                                            <button type="button" class="segment-btn active" data-value="salt-sensitive"
                                                style="padding: 10px; border-radius: 8px; border: 1px solid var(--accent-teal); background: rgba(45, 212, 191, 0.12); color: #fff; font-size: 0.96rem; cursor: pointer; transition: all 0.25s; display: flex; align-items: center; justify-content: center; gap: 6px; outline: none;">
                                                <i class="fa-solid fa-dna"
                                                    style="color: var(--accent-teal); font-size: 0.96rem;"></i>
                                                <span class="lang-ja">感受性あり</span><span class="lang-vi">Có nhạy
                                                    cảm</span>
                                            </button>
                                            <button type="button" class="segment-btn" data-value="salt-resistant"
                                                style="padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.25); color: var(--text-muted); font-size: 0.96rem; cursor: pointer; transition: all 0.25s; display: flex; align-items: center; justify-content: center; gap: 6px; outline: none;">
                                                <i class="fa-solid fa-shield-halved" style="font-size: 0.96rem;"></i>
                                                <span class="lang-ja">非感受性</span><span class="lang-vi">Không nhạy
                                                    cảm</span>
                                            </button>
                                        </div>
                                    </div>

                                    <!-- Phenotype Segmented Control -->
                                    <div>
                                        <label
                                            style="display: block; font-size: 0.96rem; color: #fff; margin-bottom: 8px; font-weight: 600;">
                                            <span class="lang-ja">フェノタイプ (塩分摂取習慣)</span>
                                            <span class="lang-vi">Phenotype (Thói quen ăn muối)</span>
                                        </label>
                                        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;"
                                            id="pheno-btn-group">
                                            <button type="button" class="segment-btn active" data-value="high-salt"
                                                style="padding: 10px; border-radius: 8px; border: 1px solid var(--accent-gold); background: rgba(245, 158, 11, 0.12); color: #fff; font-size: 0.96rem; cursor: pointer; transition: all 0.25s; display: flex; align-items: center; justify-content: center; gap: 6px; outline: none;">
                                                <i class="fa-solid fa-shaker"
                                                    style="color: var(--accent-gold); font-size: 0.96rem;"></i>
                                                <span class="lang-ja">高塩分摂取</span><span class="lang-vi">Ăn mặn (Nhiều
                                                    muối)</span>
                                            </button>
                                            <button type="button" class="segment-btn" data-value="low-salt"
                                                style="padding: 10px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.25); color: var(--text-muted); font-size: 0.96rem; cursor: pointer; transition: all 0.25s; display: flex; align-items: center; justify-content: center; gap: 6px; outline: none;">
                                                <i class="fa-solid fa-leaf" style="font-size: 0.96rem;"></i>
                                                <span class="lang-ja">低塩分摂取</span><span class="lang-vi">Ăn nhạt (Ít
                                                    muối)</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>

                                <!-- Right Column: Output Comparisons -->
                                <div
                                    style="display: flex; flex-direction: column; gap: 20px; justify-content: space-between;">
                                    <!-- Traditional Box -->
                                    <div id="sbo112-traditional-box"
                                        style="padding: 20px; background: rgba(239, 68, 68, 0.03); border: 1px solid rgba(239, 68, 68, 0.12); border-radius: 12px; border-left: 5px solid #ef4444; position: relative; transition: all 0.3s ease;">
                                        <span
                                            style="position: absolute; top: 12px; right: 15px; font-size: 0.96rem; color: #f87171; border: 1px solid rgba(239,68,68,0.2); padding: 2px 8px; border-radius: 4px; background: rgba(239,68,68,0.05); font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Traditional</span>
                                        <h4
                                            style="margin-top: 0; margin-bottom: 12px; color: #f87171; font-size: 0.96rem; display: flex; align-items: center; gap: 8px; font-weight: bold;">
                                            <i class="fa-solid fa-people-group"></i>
                                            <span class="lang-ja">集団基準に基づく診断（従来型）</span>
                                            <span class="lang-vi">Chẩn đoán theo Quần thể (Truyền thống)</span>
                                        </h4>
                                        <div id="sbo112-pop-result"
                                            style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary);">
                                            <!-- Dynamic content -->
                                        </div>
                                    </div>

                                    <!-- Precision Medicine Box -->
                                    <div
                                        style="padding: 20px; background: rgba(45, 212, 191, 0.03); border: 1px solid rgba(45, 212, 191, 0.12); border-radius: 12px; border-left: 5px solid var(--accent-teal); position: relative; flex-grow: 1; display: flex; flex-direction: column;">
                                        <span
                                            style="position: absolute; top: 12px; right: 15px; font-size: 0.96rem; color: var(--accent-teal); border: 1px solid rgba(45, 212, 191, 0.2); padding: 2px 8px; border-radius: 4px; background: rgba(45, 212, 191, 0.05); font-weight: bold; text-transform: uppercase; letter-spacing: 0.5px;">Precision</span>
                                        <h4
                                            style="margin-top: 0; margin-bottom: 12px; color: var(--accent-teal); font-size: 0.96rem; display: flex; align-items: center; gap: 8px; font-weight: bold;">
                                            <i class="fa-solid fa-circle-check"></i>
                                            <span class="lang-ja">個別化・精密医療によるアプローチ</span>
                                            <span class="lang-vi">Chẩn đoán theo Y học cá thể hóa &amp; Chính xác</span>
                                        </h4>
                                        <div id="sbo112-pers-result"
                                            style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary); flex-grow: 1;">
                                            <!-- Dynamic content -->
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Inline script for simulator -->
                    </div>
                </section>
            </div>`;
