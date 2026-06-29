// Auto-generated SBO Template Component (from commit 12fe937)
window.SBO_TEMPLATES = window.SBO_TEMPLATES || {};
window.SBO_TEMPLATES['sbo112'] = `<div id="sbo112" class="sbo-section-wrapper">

                <!-- I. Patient & Medical Relationship -->
                <section id="sbo112-patient-relation" class="section">
                    <div class="container">
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
                            <span class="lang-vi">Thay đổi mô hình ra quyết định y khoa truyền thống để tôn trọng giá
                                trị sống và quyền tự quyết của cá nhân.</span>
                        </p>

                        
                        <!-- Interactive Tabs Layout for Part 1 -->
                        <div class="sbo112-tabs-container" style="display: flex; gap: 30px; margin-bottom: 30px; flex-wrap: wrap;">
                            <!-- Left Sidebar: Tab Buttons -->
                            <div style="display: flex; flex-direction: column; gap: 12px; flex: 1 1 260px;" id="sbo112-p1-tabs-group">
                                <button type="button" class="segment-btn active" data-sbo112-p1-tab="1"
                                    style="padding: 16px 20px; border-radius: 12px; border: 1px solid var(--accent-teal); background: rgba(45, 212, 191, 0.08); color: #fff; font-size: 0.96rem; cursor: pointer; transition: all 0.3s ease; text-align: left; display: flex; align-items: center; gap: 12px; outline: none; font-weight: 600;">
                                    <i class="fa-solid fa-handshake" style="font-size: 1.25rem; color: var(--accent-teal); opacity: 0.8;"></i>
                                    <div>
                                        <span class="lang-ja">準委任契約関係へ</span>
                                        <span class="lang-vi">Hợp đồng chuẩn ủy quyền</span>
                                    </div>
                                </button>
                                <button type="button" class="segment-btn" data-sbo112-p1-tab="2"
                                    style="padding: 16px 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.25); color: var(--text-muted); font-size: 0.96rem; cursor: pointer; transition: all 0.3s ease; text-align: left; display: flex; align-items: center; gap: 12px; outline: none; font-weight: 600;">
                                    <i class="fa-solid fa-clipboard-check" style="font-size: 1.25rem; opacity: 0.5;"></i>
                                    <div>
                                        <span class="lang-ja">説明と同意・選択</span>
                                        <span class="lang-vi">Giải thích & Đồng ý/Lựa chọn</span>
                                    </div>
                                </button>
                                <button type="button" class="segment-btn" data-sbo112-p1-tab="3"
                                    style="padding: 16px 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.08); background: rgba(0,0,0,0.25); color: var(--text-muted); font-size: 0.96rem; cursor: pointer; transition: all 0.3s ease; text-align: left; display: flex; align-items: center; gap: 12px; outline: none; font-weight: 600;">
                                    <i class="fa-solid fa-scale-unbalanced" style="font-size: 1.25rem; opacity: 0.5;"></i>
                                    <div>
                                        <span class="lang-ja">情報の非対称性</span>
                                        <span class="lang-vi">Bất đối xứng thông tin</span>
                                    </div>
                                </button>
                            </div>

                            <!-- Right Side: Content Panels -->
                            <div class="card glass-card" id="sbo112-p1-details-panel"
                                style="padding: 30px; border-left: 5px solid var(--accent-teal); background: rgba(255, 255, 255, 0.02); flex: 2 1 450px; min-height: 220px; display: flex; flex-direction: column; justify-content: flex-start; transition: all 0.3s ease;">
                                <!-- Dynamic content -->
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
                            <span class="lang-vi">Đảm bảo quyền riêng tư và phát triển Hồ sơ sức khỏe cá nhân (PHR),
                                đồng thời tạo sự đồng thuận về việc sử dụng dữ liệu lớn cho dịch tễ học.</span>
                        </p>

                        
                        <!-- Horizontal Timeline Layout for Part 2 -->
                        <div style="position: relative; margin: 40px 0 35px 0; padding: 0 10px;">
                            <!-- Connecting Line -->
                            <div style="position: absolute; top: 25px; left: 10%; right: 10%; height: 4px; background: rgba(255,255,255,0.06); border-radius: 2px; z-index: 1;">
                                <div id="sbo112-p2-timeline-progress" style="width: 0%; height: 100%; background: linear-gradient(90deg, var(--accent-teal), var(--accent-gold), #a855f7); transition: width 0.4s ease; border-radius: 2px;"></div>
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
