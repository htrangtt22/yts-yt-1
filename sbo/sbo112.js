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

                        <div class="personalized-med-tabs-container" style="display: flex; gap: 30px; margin-bottom: 30px; flex-wrap: wrap;">
                            <!-- Left Sidebar: Tab Buttons -->
                            <div style="display: flex; flex-direction: column; gap: 12px; flex: 1 1 260px;" id="pm-tabs-btn-group">
                                <button type="button" class="segment-btn active" data-pm-tab="1"
                                    style="padding: 16px 20px; border-radius: 12px; border: 1px solid var(--accent-teal); background: rgba(45, 212, 191, 0.08); color: #fff; font-size: 0.96rem; cursor: pointer; transition: all 0.3s ease; text-align: left; display: flex; align-items: center; gap: 12px; outline: none; font-weight: 600;">
                                    <span style="font-size: 1.25rem; font-weight: 800; opacity: 0.75;">01</span>
                                    <div>
                                        <span class="lang-ja">パラダイムシフト</span>
                                        <span class="lang-vi">Sự chuyển dịch</span>
                                    </div>
                                </button>
                                <button type="button" class="segment-btn" data-pm-tab="2"
                                    style="padding: 16px 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.25); color: var(--text-muted); font-size: 0.96rem; cursor: pointer; transition: all 0.3s ease; text-align: left; display: flex; align-items: center; gap: 12px; outline: none; font-weight: 600;">
                                    <span style="font-size: 1.25rem; font-weight: 800; opacity: 0.5;">02</span>
                                    <div>
                                        <span class="lang-ja">データとIoTの統合</span>
                                        <span class="lang-vi">Tích hợp dữ liệu &amp; IoT</span>
                                    </div>
                                </button>
                                <button type="button" class="segment-btn" data-pm-tab="3"
                                    style="padding: 16px 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.25); color: var(--text-muted); font-size: 0.96rem; cursor: pointer; transition: all 0.3s ease; text-align: left; display: flex; align-items: center; gap: 12px; outline: none; font-weight: 600;">
                                    <span style="font-size: 1.25rem; font-weight: 800; opacity: 0.5;">03</span>
                                    <div>
                                        <span class="lang-ja">精密医療への発展</span>
                                        <span class="lang-vi">Y học chính xác</span>
                                    </div>
                                </button>
                            </div>

                            <!-- Right Side: Content Panels -->
                            <div class="card glass-card" id="pm-details-panel"
                                style="padding: 30px; border-top: 5px solid var(--accent-teal); background: rgba(255, 255, 255, 0.02); flex: 2 1 450px; min-height: 250px; display: flex; flex-direction: column; justify-content: center; transition: all 0.3s ease;">
                                <!-- Content will be updated dynamically via Javascript -->
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
