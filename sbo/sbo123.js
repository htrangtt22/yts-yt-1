// SBO 1.2.3: Patients' Engagement & Self-Determination
window.SBO_TEMPLATES = window.SBO_TEMPLATES || {};
window.SBO_TEMPLATES['sbo123'] = `<div id="sbo123" class="sbo-section-wrapper">


    <!-- SECTION I: 患者の権利と新たなパートナーシップ -->
    <section id="sbo123-sec1" class="section" style="padding-top: 30px; padding-bottom: 30px;">
        <div class="container">
            <div class="section-badge" style="margin-bottom: 12px;">
                <span class="lang-ja">患者の権利とパートナーシップ</span>
                <span class="lang-vi">Quyền của bệnh nhân & Đối tác</span>
            </div>
            <h2 class="section-title" style="margin-bottom: 24px;">
                <span class="lang-ja">患者の権利と新たなパートナーシップ</span>
                <span class="lang-vi">Quyền của bệnh nhân và Quan hệ đối tác mới</span>
            </h2>

            <!-- 1. Patient Rights Detailed Section -->
            <div class="card glass-card text-left" style="padding: 25px; border-top: 4px solid var(--accent-teal); margin-bottom: 25px; box-sizing: border-box; width: 100%;">
                <h3 style="color: var(--accent-teal); margin-top: 0; margin-bottom: 15px; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                    <i class="fa-solid fa-scale-balanced"></i>
                    <span class="lang-ja">「患者の権利」の誕生とその内容</span>
                    <span class="lang-vi">Sự ra đời và nội dung của "Quyền của bệnh nhân"</span>
                </h3>
                
                <p class="small-desc" style="line-height: 1.7; color: var(--text-secondary); margin-bottom: 20px;">
                    <span class="lang-ja">「患者の権利」という概念は、1973年に米国病院協会（AHA）が制定した<strong>「患者の権利章典」</strong>に端を発しています。これらの権利を尊重することは、患者と医師（および医療機関）との関係を明朗にし、より満足度の高い医療を提供できる環境を整えることにつながります。医療者が守るべき要件は、基本的に<strong>「患者を主語」</strong>（「患者は〜の権利を有する」等）として表現されています。</span>
                    <span class="lang-vi">Khái niệm "Quyền của bệnh nhân" được khởi nguồn từ <strong>"Tuyên ngôn về Quyền của Bệnh nhân" (Patient's Bill of Rights)</strong> do Hiệp hội Bệnh viện Hoa Kỳ (AHA) ban hành năm 1973. Việc tôn trọng các quyền này giúp mối quan hệ giữa bệnh nhân và y bác sĩ trở nên minh bạch, tạo ra một môi trường điều trị mang lại sự hài lòng cao hơn. Các điều khoản quy định về nghĩa vụ của nhân viên y tế thường được diễn đạt với <strong>"Bệnh nhân là chủ ngữ"</strong> (chẳng hạn như: <i>bệnh nhân có quyền...</i>).</span>
                </p>

                <!-- Diagram Visualizer based on AHA 1973 Slide -->
                <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 15px; margin-bottom: 30px; background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.05); padding: 20px; border-radius: 12px;">
                    <!-- Left: Bill of Rights Icon & Year -->
                    <div style="flex: 1; min-width: 220px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: rgba(45, 212, 191, 0.03); border: 1px solid rgba(45, 212, 191, 0.1); border-radius: 8px; padding: 20px; text-align: center;">
                        <i class="fa-solid fa-file-invoice" style="font-size: 3rem; color: var(--accent-teal); margin-bottom: 12px; filter: drop-shadow(0 0 10px rgba(45, 212, 191, 0.3));"></i>
                        <h4 style="margin: 0; font-size: 1.4rem; font-weight: 800; color: #fff;">1973年</h4>
                        <p style="margin: 5px 0 0 0; font-size: 0.85rem; line-height: 1.4; color: var(--text-secondary);">
                            <span class="lang-ja">米国病院協会<br><strong>「患者の権利章典」</strong></span>
                            <span class="lang-vi">Hiệp hội Bệnh viện Hoa Kỳ<br><strong>"Tuyên ngôn Quyền BN"</strong></span>
                        </p>
                    </div>
                    
                    <!-- Right: 2x2 Grid of 4 core rights -->
                    <div style="flex: 2; min-width: 320px; display: grid; grid-template-columns: 1fr 1fr; gap: 15px;">
                        <!-- Box 1 -->
                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; display: flex; flex-direction: column; justify-content: space-between;">
                            <div>
                                <h4 style="margin: 0 0 8px 0; color: var(--accent-teal); font-size: 0.95rem; font-weight: bold; display: flex; align-items: center; gap: 6px;">
                                    <i class="fa-solid fa-scale-balanced"></i>
                                    <span class="lang-ja">1. 平等と最良の医療</span>
                                    <span class="lang-vi">1. Bình đẳng & Y tế tốt nhất</span>
                                </h4>
                                <p style="margin: 0; font-size: 0.82rem; line-height: 1.4; color: var(--text-secondary);">
                                    <span class="lang-ja">平等で最善の安全な医療を受ける権利。</span>
                                    <span class="lang-vi">Quyền nhận điều trị tốt nhất, bình đẳng và an toàn.</span>
                                </p>
                            </div>
                        </div>
                        <!-- Box 2 -->
                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; display: flex; flex-direction: column; justify-content: space-between;">
                            <div>
                                <h4 style="margin: 0 0 8px 0; color: var(--accent-teal); font-size: 0.95rem; font-weight: bold; display: flex; align-items: center; gap: 6px;">
                                    <i class="fa-solid fa-eye"></i>
                                    <span class="lang-ja">2. 情報の知る権利</span>
                                    <span class="lang-vi">2. Quyền được biết thông tin</span>
                                </h4>
                                <p style="margin: 0; font-size: 0.82rem; line-height: 1.4; color: var(--text-secondary);">
                                    <span class="lang-ja">医療の目的、方法、効果、危険性（リスク）を知る権利。</span>
                                    <span class="lang-vi">Quyền biết rõ mục đích, phương pháp, hiệu quả, rủi ro y tế.</span>
                                </p>
                            </div>
                        </div>
                        <!-- Box 3 -->
                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; display: flex; flex-direction: column; justify-content: space-between;">
                            <div>
                                <h4 style="margin: 0 0 8px 0; color: var(--accent-teal); font-size: 0.95rem; font-weight: bold; display: flex; align-items: center; gap: 6px;">
                                    <i class="fa-solid fa-circle-check"></i>
                                    <span class="lang-ja">3. 選択と拒否</span>
                                    <span class="lang-vi">3. Lựa chọn và từ chối</span>
                                </h4>
                                <p style="margin: 0; font-size: 0.82rem; line-height: 1.4; color: var(--text-secondary);">
                                    <span class="lang-ja">十分な説明を受けた後、同意または拒否を選択できる権利。</span>
                                    <span class="lang-vi">Quyền chọn lựa đồng ý hoặc từ chối sau khi được giải thích.</span>
                                </p>
                            </div>
                        </div>
                        <!-- Box 4 -->
                        <div style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; display: flex; flex-direction: column; justify-content: space-between;">
                            <div>
                                <h4 style="margin: 0 0 8px 0; color: var(--accent-teal); font-size: 0.95rem; font-weight: bold; display: flex; align-items: center; gap: 6px;">
                                    <i class="fa-solid fa-user-shield"></i>
                                    <span class="lang-ja">4. プライバシーと尊厳</span>
                                    <span class="lang-vi">4. Riêng tư và tôn trọng</span>
                                </h4>
                                <p style="margin: 0; font-size: 0.82rem; line-height: 1.4; color: var(--text-secondary);">
                                    <span class="lang-ja">プライバシーが守られ、尊厳が保たれる権利。</span>
                                    <span class="lang-vi">Quyền bảo vệ sự riêng tư và giữ gìn phẩm giá.</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <!-- Bottom Takeaway banner -->
                    <div style="width: 100%; margin-top: 10px; background: rgba(245, 158, 11, 0.05); border-left: 4px solid var(--accent-gold); padding: 12px 15px; border-radius: 0 8px 8px 0; display: flex; align-items: center; gap: 10px;">
                        <i class="fa-solid fa-lightbulb" style="color: var(--accent-gold); font-size: 1.2rem; flex-shrink: 0;"></i>
                        <div style="font-size: 0.88rem; line-height: 1.5; color: #fff;">
                            <span class="lang-ja"><strong>Key Takeaway:</strong> 患者は受動的な対象ではなく、自らの医療の主体である。</span>
                            <span class="lang-vi"><strong>Điểm cốt lõi:</strong> Bệnh nhân không phải đối tượng thụ động, mà là chủ thể trong y tế của chính mình.</span>
                        </div>
                    </div>
                </div>

                <!-- Scrollable list of 11 core rights -->
                <h4 style="margin: 0 0 12px 0; color: #fff; font-size: 0.95rem; font-weight: bold; border-bottom: 1px solid rgba(255,255,255,0.06); padding-bottom: 8px;">
                    <span class="lang-ja">患者の11の基本権利</span>
                    <span class="lang-vi">11 Quyền cơ bản của bệnh nhân</span>
                </h4>
                
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 12px; margin-bottom: 15px;">
                    <!-- Right 1 -->
                    <div style="background: rgba(255,255,255,0.015); border: 1px solid rgba(255,255,255,0.04); border-radius: 6px; padding: 12px; display: flex; gap: 10px; align-items: start;">
                        <span style="background: rgba(45, 212, 191, 0.1); color: var(--accent-teal); font-weight: 900; font-size: 0.85rem; padding: 2px 6px; border-radius: 4px; flex-shrink: 0;">1</span>
                        <div style="font-size: 0.85rem; line-height: 1.5; color: var(--text-primary);">
                            <span class="lang-ja">平等で最良の医療を受ける権利</span>
                            <span class="lang-vi">Quyền được nhận điều trị bình đẳng và tốt nhất</span>
                        </div>
                    </div>
                    <!-- Right 2 -->
                    <div style="background: rgba(255,255,255,0.015); border: 1px solid rgba(255,255,255,0.04); border-radius: 6px; padding: 12px; display: flex; gap: 10px; align-items: start;">
                        <span style="background: rgba(45, 212, 191, 0.1); color: var(--accent-teal); font-weight: 900; font-size: 0.85rem; padding: 2px 6px; border-radius: 4px; flex-shrink: 0;">2</span>
                        <div style="font-size: 0.85rem; line-height: 1.5; color: var(--text-primary);">
                            <span class="lang-ja">安全な医療が確保される権利</span>
                            <span class="lang-vi">Quyền được bảo đảm y tế an toàn</span>
                        </div>
                    </div>
                    <!-- Right 3 -->
                    <div style="background: rgba(255,255,255,0.015); border: 1px solid rgba(255,255,255,0.04); border-radius: 6px; padding: 12px; display: flex; gap: 10px; align-items: start;">
                        <span style="background: rgba(45, 212, 191, 0.1); color: var(--accent-teal); font-weight: 900; font-size: 0.85rem; padding: 2px 6px; border-radius: 4px; flex-shrink: 0;">3</span>
                        <div style="font-size: 0.85rem; line-height: 1.5; color: var(--text-primary);">
                            <span class="lang-ja">予定される医療（検査・治療等）の目的、方法を知る権利</span>
                            <span class="lang-vi">Quyền được biết rõ mục đích và phương pháp (khám/điều trị)</span>
                        </div>
                    </div>
                    <!-- Right 4 -->
                    <div style="background: rgba(255,255,255,0.015); border: 1px solid rgba(255,255,255,0.04); border-radius: 6px; padding: 12px; display: flex; gap: 10px; align-items: start;">
                        <span style="background: rgba(45, 212, 191, 0.1); color: var(--accent-teal); font-weight: 900; font-size: 0.85rem; padding: 2px 6px; border-radius: 4px; flex-shrink: 0;">4</span>
                        <div style="font-size: 0.85rem; line-height: 1.5; color: var(--text-primary);">
                            <span class="lang-ja">予測される効果と、危険性を含む問題点を知る権利</span>
                            <span class="lang-vi">Quyền biết hiệu quả dự đoán cũng như nguy cơ rủi ro</span>
                        </div>
                    </div>
                    <!-- Right 5 -->
                    <div style="background: rgba(255,255,255,0.015); border: 1px solid rgba(255,255,255,0.04); border-radius: 6px; padding: 12px; display: flex; gap: 10px; align-items: start;">
                        <span style="background: rgba(45, 212, 191, 0.1); color: var(--accent-teal); font-weight: 900; font-size: 0.85rem; padding: 2px 6px; border-radius: 4px; flex-shrink: 0;">5</span>
                        <div style="font-size: 0.85rem; line-height: 1.5; color: var(--text-primary);">
                            <span class="lang-ja">示される医療を受けない場合の問題点を知る権利</span>
                            <span class="lang-vi">Quyền biết hậu quả phát sinh nếu từ chối điều trị chỉ định</span>
                        </div>
                    </div>
                    <!-- Right 6 -->
                    <div style="background: rgba(255,255,255,0.015); border: 1px solid rgba(255,255,255,0.04); border-radius: 6px; padding: 12px; display: flex; gap: 10px; align-items: start;">
                        <span style="background: rgba(45, 212, 191, 0.1); color: var(--accent-teal); font-weight: 900; font-size: 0.85rem; padding: 2px 6px; border-radius: 4px; flex-shrink: 0;">6</span>
                        <div style="font-size: 0.85rem; line-height: 1.5; color: var(--text-primary);">
                            <span class="lang-ja">代替の方法の効果と問題点を知る権利</span>
                            <span class="lang-vi">Quyền biết hiệu quả và vấn đề của các phương pháp thay thế</span>
                        </div>
                    </div>
                    <!-- Right 7 -->
                    <div style="background: rgba(255,255,255,0.015); border: 1px solid rgba(255,255,255,0.04); border-radius: 6px; padding: 12px; display: flex; gap: 10px; align-items: start;">
                        <span style="background: rgba(45, 212, 191, 0.1); color: var(--accent-teal); font-weight: 900; font-size: 0.85rem; padding: 2px 6px; border-radius: 4px; flex-shrink: 0;">7</span>
                        <div style="font-size: 0.85rem; line-height: 1.5; color: var(--text-primary);">
                            <span class="lang-ja">分かりやすく十分に説明を受け、理解した後に同意・拒否できる権利</span>
                            <span class="lang-vi">Quyền giải thích đầy đủ, tự quyết định đồng ý hoặc từ chối</span>
                        </div>
                    </div>
                    <!-- Right 8 -->
                    <div style="background: rgba(255,255,255,0.015); border: 1px solid rgba(255,255,255,0.04); border-radius: 6px; padding: 12px; display: flex; gap: 10px; align-items: start;">
                        <span style="background: rgba(45, 212, 191, 0.1); color: var(--accent-teal); font-weight: 900; font-size: 0.85rem; padding: 2px 6px; border-radius: 4px; flex-shrink: 0;">8</span>
                        <div style="font-size: 0.85rem; line-height: 1.5; color: var(--text-primary);">
                            <span class="lang-ja">自分のプライバシーが守られ、また尊厳が保たれる権利</span>
                            <span class="lang-vi">Quyền bảo vệ riêng tư và tôn trọng nhân phẩm</span>
                        </div>
                    </div>
                    <!-- Right 9 -->
                    <div style="background: rgba(255,255,255,0.015); border: 1px solid rgba(255,255,255,0.04); border-radius: 6px; padding: 12px; display: flex; gap: 10px; align-items: start;">
                        <span style="background: rgba(45, 212, 191, 0.1); color: var(--accent-teal); font-weight: 900; font-size: 0.85rem; padding: 2px 6px; border-radius: 4px; flex-shrink: 0;">9</span>
                        <div style="font-size: 0.85rem; line-height: 1.5; color: var(--text-primary);">
                            <span class="lang-ja">診療内容に関する疑問や、入院生活上の不満を解決できる権利</span>
                            <span class="lang-vi">Quyền được giải quyết thắc mắc và sự bất mãn khi điều trị</span>
                        </div>
                    </div>
                    <!-- Right 10 -->
                    <div style="background: rgba(255,255,255,0.015); border: 1px solid rgba(255,255,255,0.04); border-radius: 6px; padding: 12px; display: flex; gap: 10px; align-items: start;">
                        <span style="background: rgba(45, 212, 191, 0.1); color: var(--accent-teal); font-weight: 900; font-size: 0.85rem; padding: 2px 6px; border-radius: 4px; flex-shrink: 0;">10</span>
                        <div style="font-size: 0.85rem; line-height: 1.5; color: var(--text-primary);">
                            <span class="lang-ja">健康上の特性に相応しい継続的なケアを地域で連携して受ける権利</span>
                            <span class="lang-vi">Quyền nhận sự chăm sóc liên tục thông qua liên kết mạng lưới khu vực</span>
                        </div>
                    </div>
                    <!-- Right 11 -->
                    <div style="background: rgba(255,255,255,0.015); border: 1px solid rgba(255,255,255,0.04); border-radius: 6px; padding: 12px; display: flex; gap: 10px; align-items: start;">
                        <span style="background: rgba(45, 212, 191, 0.1); color: var(--accent-teal); font-weight: 900; font-size: 0.85rem; padding: 2px 6px; border-radius: 4px; flex-shrink: 0;">11</span>
                        <div style="font-size: 0.85rem; line-height: 1.5; color: var(--text-primary);">
                            <span class="lang-ja">医療上の費用と公的支援に関する情報を得て、可能な便宜を受ける権利</span>
                            <span class="lang-vi">Quyền nhận thông tin chi phí và chính sách hỗ trợ công cộng</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2. Partnership and Team Medicine detailed (Restructured to full-width cards with internal grids) -->
            <style>
            .sbo123-sec1-grid {
                display: grid;
                grid-template-columns: 1.1fr 1.3fr;
                gap: 30px;
                align-items: start;
            }
            @media (max-width: 991px) {
                .sbo123-sec1-grid {
                    grid-template-columns: 1fr;
                    gap: 20px;
                }
            }
            </style>

            <!-- Card 1: Partnership (Full-Width Card with Internal Grid) -->
            <div class="card glass-card text-left" style="padding: 25px; border-top: 4px solid var(--accent-gold); margin-bottom: 25px;">
                <div class="sbo123-sec1-grid">
                    
                    <!-- Left Column: Title, Equation, Key Takeaway -->
                    <div style="display: flex; flex-direction: column; height: 100%; justify-content: space-between; gap: 20px;">
                        <div>
                            <h3 style="color: var(--accent-gold); margin-top: 0; margin-bottom: 15px; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                                <i class="fa-solid fa-handshake-angle"></i>
                                <span class="lang-ja">医療者と患者の新たなパートナーシップ</span>
                                <span class="lang-vi">Quan hệ đối tác mới giữa Nhân viên y tế & Bệnh nhân</span>
                            </h3>
                            
                            <!-- Description -->
                            <p style="font-size: 0.88rem; line-height: 1.7; color: var(--text-secondary); margin: 0 0 20px 0;">
                                <span class="lang-ja">現代の医療は、医師の一方的な決定（パターナリズム）から、双方の専門的知見と尊厳を統合した「共創のパートナーシップ」へとシフトしています。</span>
                                <span class="lang-vi">Y tế hiện đại chuyển dịch từ quyết định đơn phương của bác sĩ (Chủ nghĩa gia trưởng) sang "Mối quan hệ đối tác đồng sáng tạo" tích hợp kiến thức chuyên môn và sự tôn trọng của cả hai bên.</span>
                            </p>

                            <!-- Partnership Equation Layout -->
                            <div style="display: flex; align-items: center; justify-content: center; gap: 8px; background: rgba(255,255,255,0.015); border: 1px solid rgba(255,255,255,0.04); padding: 15px 10px; border-radius: 10px; box-sizing: border-box; width: 100%;">
                                <!-- Box 1: Medical Professional -->
                                <div style="flex: 1; max-width: 120px; background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); border-radius: 6px; padding: 10px 5px; text-align: center;">
                                    <i class="fa-solid fa-user-doctor" style="font-size: 1.2rem; color: #93c5fd; margin-bottom: 5px;"></i>
                                    <h4 style="margin: 0; font-size: 0.8rem; font-weight: bold; color: #fff;">
                                        <span class="lang-ja">医療専門職</span>
                                        <span class="lang-vi">Chuyên môn Y tế</span>
                                    </h4>
                                    <span style="font-size: 0.65rem; color: #93c5fd; font-weight: 700; text-transform: uppercase; margin-top: 2px; display: block;">Expertise</span>
                                </div>
                                
                                <!-- Plus Sign -->
                                <div style="font-size: 1.1rem; color: var(--text-muted); font-weight: bold; text-align: center; width: 15px;">+</div>
                                
                                <!-- Box 2: Patient Dignity -->
                                <div style="flex: 1; max-width: 120px; background: rgba(245, 158, 11, 0.05); border: 1px solid rgba(245, 158, 11, 0.2); border-radius: 6px; padding: 10px 5px; text-align: center;">
                                    <i class="fa-solid fa-hospital-user" style="font-size: 1.2rem; color: var(--accent-gold); margin-bottom: 5px;"></i>
                                    <h4 style="margin: 0; font-size: 0.8rem; font-weight: bold; color: #fff;">
                                        <span class="lang-ja">患者の尊厳</span>
                                        <span class="lang-vi">Tôn trọng & Nhân phẩm</span>
                                    </h4>
                                    <span style="font-size: 0.65rem; color: var(--accent-gold); font-weight: 700; text-transform: uppercase; margin-top: 2px; display: block;">Dignity</span>
                                </div>
                                
                                <!-- Equal Arrow -->
                                <div style="font-size: 1.1rem; color: var(--accent-teal); font-weight: bold; text-align: center; width: 15px; display: flex; align-items: center; justify-content: center;">
                                    <i class="fa-solid fa-chevron-right"></i>
                                </div>
                                
                                <!-- Box 3: Partnership -->
                                <div style="flex: 1.3; max-width: 170px; background: rgba(45, 212, 191, 0.1); border: 1px solid var(--accent-teal); border-radius: 6px; padding: 10px 5px; text-align: center; box-shadow: 0 4px 15px rgba(45, 212, 191, 0.15);">
                                    <i class="fa-solid fa-handshake-angle" style="font-size: 1.2rem; color: var(--accent-teal); margin-bottom: 5px;"></i>
                                    <h4 style="margin: 0; font-size: 0.82rem; font-weight: 800; color: #fff;">
                                        <span class="lang-ja">共創の医療</span>
                                        <span class="lang-vi">Đối tác đồng sáng tạo</span>
                                    </h4>
                                    <span style="font-size: 0.65rem; color: var(--accent-teal); font-weight: 700; text-transform: uppercase; margin-top: 2px; display: block;">Partnership</span>
                                </div>
                            </div>
                        </div>

                        <!-- Takeaway Banner -->
                        <div style="background: rgba(245, 158, 11, 0.05); border-left: 3px solid var(--accent-gold); padding: 12px 15px; border-radius: 0 8px 8px 0; font-size: 0.85rem; line-height: 1.5; color: #fde047;">
                            <span class="lang-ja"><strong>Key Takeaway:</strong> 「すべてを医師に任せる」から「最優先される患者の意向」へのパラダイムシフト。</span>
                            <span class="lang-vi"><strong>Điểm cốt lõi:</strong> Dịch chuyển mô hình từ "Phó thác hoàn toàn cho bác sĩ" sang "Ý chí của bệnh nhân là ưu tiên hàng đầu".</span>
                        </div>
                    </div>

                    <!-- Right Column: Transition Diagrams (Paternalism vs Partnership) -->
                    <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: start; width: 100%;">
                        <!-- Left: Paternalism Visual Diagram -->
                        <div style="flex: 1; min-width: 200px; background: rgba(255,255,255,0.015); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; text-align: center;">
                            <div style="font-size: 0.82rem; font-weight: 700; color: #ef4444; background: rgba(239, 68, 68, 0.1); padding: 2px 8px; border-radius: 4px; display: inline-block; margin-bottom: 10px;">
                                <span class="lang-ja">パターナリズム（父権主義）</span>
                                <span class="lang-vi">Chủ nghĩa gia trưởng (Paternalism)</span>
                            </div>
                            
                            <div style="display: flex; justify-content: center; align-items: center;">
                                <svg width="180" height="170" viewBox="0 0 180 170" style="max-width: 100%;">
                                    <!-- Background Triangle -->
                                    <polygon points="90,15 25,155 155,155" fill="rgba(255,255,255,0.01)" stroke="rgba(255,255,255,0.05)" stroke-width="1.5" />
                                    
                                    <!-- Doctor Circle (Top) -->
                                    <circle cx="90" cy="38" r="24" fill="#3b82f6" stroke="#93c5fd" stroke-width="1.5" />
                                    <text x="90" y="42" fill="#fff" font-size="10.5" font-weight="bold" text-anchor="middle">医師</text>
                                    
                                    <!-- Down Arrow -->
                                    <defs>
                                        <marker id="arrowRed" markerWidth="10" markerHeight="10" refX="6" refY="3" orient="auto" markerUnits="strokeWidth">
                                            <path d="M0,0 L0,6 L6,3 Z" fill="#ef4444" />
                                        </marker>
                                    </defs>
                                    <line x1="90" y1="70" x2="90" y2="100" stroke="#ef4444" stroke-width="3" marker-end="url(#arrowRed)" />
                                    
                                    <!-- Asymmetry Label -->
                                    <text x="100" y="90" fill="#fca5a5" font-size="9" text-anchor="start" font-weight="bold">
                                        <tspan class="lang-ja" x="102" dy="0">非対称性・情報格差</tspan>
                                        <tspan class="lang-vi" x="102" dy="0">Bất đối xứng / Lệch thông tin</tspan>
                                    </text>
                                    
                                    <!-- Patient Circle (Bottom) -->
                                    <circle cx="90" cy="132" r="20" fill="#64748b" stroke="#cbd5e1" stroke-width="1.5" />
                                    <text x="90" y="136" fill="#fff" font-size="10" font-weight="bold" text-anchor="middle">患者</text>
                                </svg>
                            </div>
                        </div>
                        
                        <!-- Right: Partnership Visual Diagram -->
                        <div style="flex: 1.2; min-width: 240px; background: rgba(255,255,255,0.015); border: 1px solid rgba(255,255,255,0.05); border-radius: 8px; padding: 15px; display: flex; flex-direction: column; justify-content: space-between; height: 100%; min-height: 220px; box-sizing: border-box;">
                            <div>
                                <div style="text-align: center; margin-bottom: 15px;">
                                    <div style="font-size: 0.82rem; font-weight: 700; color: var(--accent-teal); background: rgba(45, 212, 191, 0.1); padding: 2px 8px; border-radius: 4px; display: inline-block;">
                                        <span class="lang-ja">パートナーシップ</span>
                                        <span class="lang-vi">Quan hệ đối tác (Partnership)</span>
                                    </div>
                                </div>
                                
                                <!-- Horizontal Flow SVG -->
                                <div style="display: flex; justify-content: center; align-items: center; margin-bottom: 15px;">
                                    <svg width="280" height="80" viewBox="0 0 280 80" style="max-width: 100%;">
                                        <!-- Double-headed Arrow Defs -->
                                        <defs>
                                            <marker id="arrowTealStart" markerWidth="8" markerHeight="8" refX="2" refY="3" orient="auto" markerUnits="strokeWidth">
                                                <path d="M6,0 L6,6 L0,3 Z" fill="var(--accent-teal)" />
                                            </marker>
                                            <marker id="arrowTealEnd" markerWidth="8" markerHeight="8" refX="4" refY="3" orient="auto" markerUnits="strokeWidth">
                                                <path d="M0,0 L0,6 L6,3 Z" fill="var(--accent-teal)" />
                                            </marker>
                                        </defs>
                                        
                                        <!-- Doctor Circle (Left) -->
                                        <circle cx="34" cy="40" r="24" fill="#3b82f6" stroke="#93c5fd" stroke-width="1.5" />
                                        <text x="34" y="44" fill="#fff" font-size="10.5" font-weight="bold" text-anchor="middle">医師</text>
                                        
                                        <!-- Horizontal Double-headed Arrow -->
                                        <line x1="68" y1="40" x2="212" y2="40" stroke="var(--accent-teal)" stroke-width="3.5" marker-start="url(#arrowTealStart)" marker-end="url(#arrowTealEnd)" />
                                        
                                        <!-- Arrow text: Empathy / Goals -->
                                        <text x="140" y="32" fill="var(--accent-teal)" font-size="10" font-weight="bold" text-anchor="middle">
                                            <tspan class="lang-ja">共感・目標の共有・対等</tspan>
                                            <tspan class="lang-vi">Đồng cảm - Chia sẻ mục tiêu - Bình đẳng</tspan>
                                        </text>
                                        
                                        <!-- Patient Circle (Right) -->
                                        <circle cx="246" cy="40" r="24" fill="#f97316" stroke="#ffedd5" stroke-width="1.5" />
                                        <text x="246" y="44" fill="#fff" font-size="10.5" font-weight="bold" text-anchor="middle">患者</text>
                                    </svg>
                                </div>
                            </div>
                            
                            <!-- Bullet list -->
                            <ul style="margin: 0; padding-left: 15px; font-size: 0.8rem; line-height: 1.6; color: var(--text-secondary); display: flex; flex-direction: column; gap: 4px;">
                                <li>
                                    <span class="lang-ja">病を得た患者の「苦痛と不安」への共感</span>
                                    <span class="lang-vi">Đồng cảm sâu sắc với "đau đớn và lo âu" khi mắc bệnh của bệnh nhân.</span>
                                </li>
                                <li>
                                    <span class="lang-ja">患者の尊厳の保持</span>
                                    <span class="lang-vi">Luôn luôn tôn trọng và gìn giữ nhân phẩm người bệnh.</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                </div>
            </div>

            <!-- Card 2: Team Medicine (Full-Width Card with Internal Grid) -->
            <div class="card glass-card text-left" style="padding: 25px; border-top: 4px solid #3b82f6; margin-bottom: 25px;">
                <div class="sbo123-sec1-grid">
                    
                    <!-- Left Column: Title, Text highlights, Takeaway -->
                    <div style="display: flex; flex-direction: column; height: 100%; justify-content: space-between; gap: 20px;">
                        <div>
                            <h3 style="color: #93c5fd; margin-top: 0; margin-bottom: 15px; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                                <i class="fa-solid fa-users-gear"></i>
                                <span class="lang-ja">チーム医療における患者の役割</span>
                                <span class="lang-vi">Vai trò của bệnh nhân trong "Y tế theo nhóm"</span>
                            </h3>
                            
                            <!-- Slide text highlights -->
                            <div style="font-size: 0.85rem; line-height: 1.7; color: var(--text-secondary); display: flex; flex-direction: column; gap: 15px;">
                                <div>
                                    <strong style="color: #93c5fd; display: block; margin-bottom: 4px; font-size: 0.95rem;">
                                        <span class="lang-ja">■ チーム医療とは</span>
                                        <span class="lang-vi">■ Y tế theo nhóm là gì?</span>
                                    </strong>
                                    <span class="lang-ja">多職種が協同して一人の患者をケアする医療体制。</span>
                                    <span class="lang-vi">Mô hình chăm sóc trong đó nhiều bộ phận chuyên môn phối hợp chặt chẽ xung quanh người bệnh.</span>
                                </div>
                                <div>
                                    <strong style="color: #93c5fd; display: block; margin-bottom: 4px; font-size: 0.95rem;">
                                        <span class="lang-ja">■ 患者の役割</span>
                                        <span class="lang-vi">■ Vai trò của bệnh nhân</span>
                                    </strong>
                                    <span class="lang-ja">患者自身もチームの中心（コアメンバー）であり、方針を共有し、自ら守るべきことを実行する。</span>
                                    <span class="lang-vi">Bản thân bệnh nhân là trung tâm (thành viên cốt lõi) của nhóm y tế, chia sẻ kế hoạch điều trị và chủ động thực hiện trách nhiệm của mình.</span>
                                </div>
                            </div>
                        </div>

                        <!-- Key Takeaway Banner Slide 4 -->
                        <div style="background: rgba(245, 158, 11, 0.05); border-left: 3px solid var(--accent-gold); padding: 12px 15px; border-radius: 0 8px 8px 0; font-size: 0.85rem; line-height: 1.5; color: #fde047; margin-top: 10px;">
                            <span class="lang-ja"><strong>Key Takeaway:</strong> 患者はケアの「受け手」であると同時に、チームの「不可欠な一員」である。</span>
                            <span class="lang-vi"><strong>Điểm cốt lõi:</strong> Bệnh nhân vừa là "người nhận" chăm sóc, vừa là "thành viên không thể thiếu" của nhóm y tế.</span>
                        </div>
                    </div>

                    <!-- Right Column: Circular Diagram and Description Panel -->
                    <div style="display: flex; flex-direction: column; align-items: center; width: 100%; justify-content: center;">
                        <!-- Circular Diagram with outer dashed circular line connecting nodes -->
                        <div style="position: relative; width: 280px; height: 230px; margin: 0 auto 15px auto; background: rgba(0,0,0,0.15); border-radius: 12px; border: 1px solid rgba(255,255,255,0.03); overflow: hidden; display: flex; align-items: center; justify-content: center; box-shadow: inset 0 0 20px rgba(0,0,0,0.3);">
                            <!-- Connection lines SVG in background -->
                            <svg width="280" height="230" style="position: absolute; top: 0; left: 0; z-index: 1; pointer-events: none;">
                                <!-- Curved dashed line connecting surrounding nodes in a circle -->
                                <circle cx="140" cy="115" r="75" fill="none" stroke="rgba(147, 197, 253, 0.25)" stroke-dasharray="3,3" stroke-width="1.5" />
                                
                                <!-- Hub-and-spoke straight lines to center -->
                                <line id="line-doctor" x1="140" y1="115" x2="140" y2="40" stroke="rgba(255, 255, 255, 0.15)" stroke-dasharray="4,4" stroke-width="2" style="transition: all 0.3s;" />
                                <line id="line-nurse" x1="140" y1="115" x2="220" y2="88" stroke="rgba(255, 255, 255, 0.15)" stroke-dasharray="4,4" stroke-width="2" style="transition: all 0.3s;" />
                                <line id="line-pharmacist" x1="140" y1="115" x2="196" y2="176" stroke="rgba(255, 255, 255, 0.15)" stroke-dasharray="4,4" stroke-width="2" style="transition: all 0.3s;" />
                                <line id="line-nutritionist" x1="140" y1="115" x2="84" y2="176" stroke="rgba(255, 255, 255, 0.15)" stroke-dasharray="4,4" stroke-width="2" style="transition: all 0.3s;" />
                                <line id="line-sw" x1="140" y1="115" x2="60" y2="88" stroke="rgba(255, 255, 255, 0.15)" stroke-dasharray="4,4" stroke-width="2" style="transition: all 0.3s;" />
                            </svg>

                            <!-- Patient & Family (Center Node) -->
                            <div style="z-index: 10; position: absolute; left: 98px; top: 73px; width: 84px; height: 84px; background: radial-gradient(circle, #f97316 0%, #c2410c 100%); border: 3px solid #ffedd5; border-radius: 50%; box-shadow: 0 0 15px rgba(249, 115, 22, 0.6); display: flex; flex-direction: column; align-items: center; justify-content: center; text-align: center; color: #fff; font-weight: bold; font-size: 0.85rem; cursor: pointer; transition: all 0.3s;" onclick="sbo123ShowTeamRole('patient')">
                                <span class="lang-ja">患者・家族</span>
                                <span class="lang-vi">BN & Gia đình</span>
                            </div>

                            <!-- Doctor (Top) -->
                            <div class="team-node" id="node-doctor" style="z-index: 5; position: absolute; left: 112px; top: 12px; width: 56px; height: 56px; border-radius: 50%; background: #1e293b; border: 1.5px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 0.82rem; font-weight: bold; color: #fff; transition: all 0.3s;" onclick="sbo123ShowTeamRole('doctor')">
                                <span class="lang-ja">医師</span>
                                <span class="lang-vi">Bác sĩ</span>
                            </div>
                            <!-- Nurse (Top Right) -->
                            <div class="team-node" id="node-nurse" style="z-index: 5; position: absolute; left: 192px; top: 60px; width: 56px; height: 56px; border-radius: 50%; background: #1e293b; border: 1.5px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 0.82rem; font-weight: bold; color: #fff; transition: all 0.3s;" onclick="sbo123ShowTeamRole('nurse')">
                                <span class="lang-ja">看護師</span>
                                <span class="lang-vi">ĐD</span>
                            </div>
                            <!-- Pharmacist (Bottom Right) -->
                            <div class="team-node" id="node-pharmacist" style="z-index: 5; position: absolute; left: 168px; top: 148px; width: 56px; height: 56px; border-radius: 50%; background: #1e293b; border: 1.5px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 0.82rem; font-weight: bold; color: #fff; transition: all 0.3s;" onclick="sbo123ShowTeamRole('pharmacist')">
                                <span class="lang-ja">薬剤師</span>
                                <span class="lang-vi">Dược sĩ</span>
                            </div>
                            <!-- Nutritionist (Bottom Left) -->
                            <div class="team-node" id="node-nutritionist" style="z-index: 5; position: absolute; left: 56px; top: 148px; width: 56px; height: 56px; border-radius: 50%; background: #1e293b; border: 1.5px solid rgba(255,255,255,0.2); display: flex; align-items: center; justify-content: center; cursor: pointer; font-size: 0.82rem; font-weight: bold; color: #fff; transition: all 0.3s;" onclick="sbo123ShowTeamRole('nutritionist')">
                                <span class="lang-ja">管理栄養士</span>
                                <span class="lang-vi">Dinh dưỡng</span>
                            </div>
                            <!-- Other Professional (Top Left) -->
                            <div class="team-node" id="node-sw" style="z-index: 5; position: absolute; left: 32px; top: 60px; width: 56px; height: 56px; border-radius: 50%; background: #1e293b; border: 1.5px solid rgba(255,255,255,0.2); display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: pointer; text-align: center; font-size: 0.72rem; font-weight: bold; color: #fff; transition: all 0.3s;" onclick="sbo123ShowTeamRole('sw')">
                                <span class="lang-ja" style="line-height: 1.1; font-size: 0.75rem;">その他<br>専門職</span>
                                <span class="lang-vi" style="line-height: 1.1;">Chuyên môn<br>khác</span>
                            </div>
                        </div>

                        <!-- Team Role description pane -->
                        <div id="sbo123-team-desc" class="card glass-card" style="padding: 12px; margin-bottom: 0; background: rgba(59, 130, 246, 0.05); border: 1px dashed rgba(59, 130, 246, 0.2); min-height: 55px; font-size: 0.8rem; line-height: 1.5; color: #93c5fd; width: 100%; box-sizing: border-box; text-align: left;">
                            <span class="lang-ja">💡 周辺の専門職をタップすると、それぞれの専門役割が表示されます。患者・家族自身がチームの中心です。</span>
                            <span class="lang-vi">💡 Nhấn vào các thành viên xung quanh để xem vai trò cụ thể. Bản thân người bệnh & gia đình là trung tâm của đội ngũ.</span>
                        </div>
                    </div>

                </div>
            </div>
        </div> <!-- Close Section I container -->
    </section><!-- SECTION II: 患者の自己決定を支える仕組み -->
    <section id="sbo123-sec2" class="section" style="padding-top: 20px; padding-bottom: 30px; border-top: 1px solid rgba(255,255,255,0.05);">
        <div class="container">
            <div class="section-badge" style="margin-bottom: 12px;">
                <span class="lang-ja">自己決定の支援ツール</span>
                <span class="lang-vi">Công cụ hỗ trợ tự quyết</span>
            </div>
            <h2 class="section-title" style="margin-bottom: 24px;">
                <span class="lang-ja">患者の自己決定を支える仕組み</span>
                <span class="lang-vi">Các công cụ hỗ trợ quyền tự quyết của bệnh nhân</span>
            </h2>

            <div class="grid-2col" style="gap: 24px; align-items: stretch; margin-bottom: 25px;">
                
                <!-- Tools 1: Informed Consent & Informed Choice -->
                <div class="card glass-card text-left" style="padding: 25px; border-top: 4px solid var(--accent-teal); display: flex; flex-direction: column; justify-content: space-between; margin-bottom: 0;">
                    <div>
                        <h3 style="color: var(--accent-teal); margin-top: 0; margin-bottom: 15px; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-file-signature"></i>
                            <span class="lang-ja">インフォームドコンセントと選択</span>
                            <span class="lang-vi">Quy trình Giải thích và Đồng ý / Lựa chọn</span>
                        </h3>
                        
                        <p class="small-desc" style="line-height: 1.5; color: var(--text-secondary); margin-bottom: 20px;">
                            <span class="lang-ja">医師による事実に基づく説明と、患者の十分な理解・自発的な意思決定を循環させる医療プロセス。</span>
                            <span class="lang-vi">Quy trình y tế xoay vòng giữa sự giải thích thực tế của bác sĩ và sự thấu hiểu, tự quyết định tự nguyện từ phía người bệnh.</span>
                        </p>

                        <!-- Circular Step Flowchart Diagram (Slide 5) -->
                        <div style="position: relative; background: rgba(0,0,0,0.12); border-radius: 10px; border: 1px solid rgba(255,255,255,0.03); padding: 20px 15px; margin-bottom: 20px;">
                            <!-- Connection Arrows SVG Overlay -->
                            <svg width="100%" height="100%" viewBox="0 0 400 240" style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; z-index: 1; pointer-events: none; max-width: 100%;">
                                <defs>
                                    <marker id="cyanArrow" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto" markerUnits="strokeWidth">
                                        <path d="M0,0 L0,6 L5,3 Z" fill="var(--accent-teal)" />
                                    </marker>
                                </defs>
                                <!-- Arrow: Step 1 -> Step 2 -->
                                <path d="M 175 40 Q 200 15 225 40" fill="none" stroke="var(--accent-teal)" stroke-dasharray="3,3" stroke-width="1.5" marker-end="url(#cyanArrow)" />
                                <!-- Arrow: Step 2 -> Step 3 -->
                                <path d="M 330 90 Q 365 110 330 130" fill="none" stroke="var(--accent-teal)" stroke-dasharray="3,3" stroke-width="1.5" marker-end="url(#cyanArrow)" />
                                <!-- Arrow: Step 3 -> Step 4 -->
                                <path d="M 225 180 Q 200 205 175 180" fill="none" stroke="var(--accent-teal)" stroke-dasharray="3,3" stroke-width="1.5" marker-end="url(#cyanArrow)" />
                                <!-- Arrow: Step 4 -> Step 1 -->
                                <path d="M 70 130 Q 35 110 70 90" fill="none" stroke="var(--accent-teal)" stroke-dasharray="3,3" stroke-width="1.5" marker-end="url(#cyanArrow)" />
                            </svg>

                            <div style="position: relative; z-index: 5; display: grid; grid-template-columns: 1fr 1fr; gap: 25px 30px;">
                                
                                <!-- Step 1 (Top Left) -->
                                <div style="background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.05); border-radius: 6px; padding: 12px; min-height: 80px;">
                                    <h4 style="margin: 0 0 6px 0; color: #fff; font-size: 0.85rem; font-weight: bold; display: flex; align-items: center; gap: 6px;">
                                        <i class="fa-solid fa-hospital-user" style="color: var(--accent-teal);"></i>
                                        <span class="lang-ja">1. 事実に基づく説明</span>
                                        <span class="lang-vi">1. Giải thích thực tế</span>
                                    </h4>
                                    <p style="margin: 0; font-size: 0.76rem; line-height: 1.4; color: var(--text-secondary);">
                                        <span class="lang-ja">病名、治療法、危険性、代替案の客観的提示。</span>
                                        <span class="lang-vi">Cung cấp khách quan tên bệnh, phác đồ, rủi ro, giải pháp thay thế.</span>
                                    </p>
                                </div>

                                <!-- Step 2 (Top Right) -->
                                <div style="background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.05); border-radius: 6px; padding: 12px; min-height: 80px;">
                                    <h4 style="margin: 0 0 6px 0; color: #fff; font-size: 0.85rem; font-weight: bold; display: flex; align-items: center; gap: 6px;">
                                        <i class="fa-solid fa-brain" style="color: var(--accent-teal);"></i>
                                        <span class="lang-ja">2. 患者の理解</span>
                                        <span class="lang-vi">2. Bệnh nhân thấu hiểu</span>
                                    </h4>
                                    <p style="margin: 0; font-size: 0.76rem; line-height: 1.4; color: var(--text-secondary);">
                                        <span class="lang-ja">患者・家族が説明された内容を十分に納得・理解する。</span>
                                        <span class="lang-vi">Bệnh nhân và gia đình hoàn toàn thấu hiểu kỹ càng nội dung điều trị.</span>
                                    </p>
                                </div>

                                <!-- Step 4 (Bottom Left) -->
                                <div style="background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.05); border-radius: 6px; padding: 12px; min-height: 80px;">
                                    <h4 style="margin: 0 0 6px 0; color: #fff; font-size: 0.85rem; font-weight: bold; display: flex; align-items: center; gap: 6px;">
                                        <i class="fa-solid fa-file-pen" style="color: var(--accent-teal);"></i>
                                        <span class="lang-ja">4. 説明に基づく意思表明</span>
                                        <span class="lang-vi">4. Bày tỏ ý chí tự quyết</span>
                                    </h4>
                                    <p style="margin: 0; font-size: 0.76rem; line-height: 1.4; color: var(--text-secondary);">
                                        <span class="lang-ja">自由な対話による自己の意向表明・同意と方針決定。</span>
                                        <span class="lang-vi">Tự do trao đổi, bày tỏ nguyện vọng và đưa ra quyết định đồng ý/từ chối.</span>
                                    </p>
                                </div>

                                <!-- Step 3 (Bottom Right) -->
                                <div style="background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.05); border-radius: 6px; padding: 12px; min-height: 80px;">
                                    <h4 style="margin: 0 0 6px 0; color: #fff; font-size: 0.85rem; font-weight: bold; display: flex; align-items: center; gap: 6px;">
                                        <i class="fa-solid fa-arrows-split-up-and-left" style="color: var(--accent-teal);"></i>
                                        <span class="lang-ja">3. 選択肢の比較</span>
                                        <span class="lang-vi">3. So sánh các lựa chọn</span>
                                    </h4>
                                    <p style="margin: 0; font-size: 0.76rem; line-height: 1.4; color: var(--text-secondary);">
                                        <span class="lang-ja">専門家と共に最良の道筋を比較し自らの意思を育む。</span>
                                        <span class="lang-vi">Cùng chuyên gia y tế so sánh các giải pháp để có quyết định tốt nhất.</span>
                                    </p>
                                </div>

                            </div>
                        </div>

                        <!-- Important note block: Consent is rewritable -->
                        <div style="background: rgba(59, 130, 246, 0.05); border: 1px solid rgba(59, 130, 246, 0.2); border-left: 3px solid #3b82f6; padding: 12px; border-radius: 0 6px 6px 0; font-size: 0.82rem; line-height: 1.5; color: #93c5fd; margin-bottom: 15px;">
                            <span class="lang-ja">ℹ️ <strong>意向の流動性：</strong> 病状の進展に伴い、患者の意向は常に揺らぐため、同意書は一度限りでなく、何度でも書き換え・撤回が可能です。</span>
                            <span class="lang-vi">ℹ️ <strong>Tính dao động của ý chí:</strong> Theo tiến triển của bệnh, ý chí bệnh nhân luôn dao động, do đó văn bản đồng ý không phải ký một lần duy nhất mà có thể cập nhật/viết lại nhiều lần.</span>
                        </div>

                        <!-- Key Takeaway Banner Slide 5 -->
                        <div style="background: rgba(245, 158, 11, 0.05); border-left: 3px solid var(--accent-gold); padding: 12px 15px; border-radius: 0 8px 8px 0; font-size: 0.85rem; line-height: 1.5; color: #fde047;">
                            <span class="lang-ja"><strong>Key Takeaway:</strong> 単なる「同意」ではなく、自ら判断し決定する「Informed Choice（選択）」が本質である。</span>
                            <span class="lang-vi"><strong>Điểm cốt lõi:</strong> Bản chất không phải là sự "đồng ý" đơn thuần, mà là "Lựa chọn có giải thích (Informed Choice)", nơi bệnh nhân tự phán đoán và quyết định.</span>
                        </div>
                    </div>
                </div>

                <!-- Tools 2: Second Opinion -->
                <div class="card glass-card text-left" style="padding: 25px; border-top: 4px solid var(--accent-gold); display: flex; flex-direction: column; justify-content: space-between; margin-bottom: 0;">
                    <div>
                        <h3 style="color: var(--accent-gold); margin-top: 0; margin-bottom: 15px; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-comments-text"></i>
                            <span class="lang-ja">セカンドオピニオン（Second Opinion）</span>
                            <span class="lang-vi">Ý kiến y tế thứ hai (Second Opinion)</span>
                        </h3>
                        
                        <p class="small-desc" style="line-height: 1.5; color: var(--text-secondary); margin-bottom: 20px;">
                            <span class="lang-ja">主治医以外の専門的な知識を持った第三者に求める「意見」。</span>
                            <span class="lang-vi">Ý kiến chuyên môn độc lập từ bác sĩ bên ngoài giúp củng cố sự an tâm và chính xác trước khi đưa ra quyết định điều trị.</span>
                        </p>

                        <!-- Second Opinion Flowchart SVG (Slide 6) -->
                        <div style="background: rgba(0,0,0,0.12); border-radius: 10px; border: 1px solid rgba(255,255,255,0.03); padding: 15px 10px; margin-bottom: 20px; display: flex; justify-content: center; align-items: center;">
                            <svg width="420" height="150" viewBox="0 0 420 150" style="max-width: 100%; height: auto;">
                                <defs>
                                    <marker id="arrowGold" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto" markerUnits="strokeWidth">
                                        <path d="M0,0 L0,6 L5,3 Z" fill="var(--accent-gold)" />
                                    </marker>
                                    <marker id="arrowTeal" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto" markerUnits="strokeWidth">
                                        <path d="M0,0 L0,6 L5,3 Z" fill="var(--accent-teal)" />
                                    </marker>
                                </defs>

                                <!-- Left Box: Current policy -->
                                <rect x="5" y="47" width="90" height="56" rx="6" fill="#1e293b" stroke="#3b82f6" stroke-width="1.5" />
                                <text x="50" y="73" fill="#93c5fd" font-size="10" font-weight="bold" text-anchor="middle">
                                    <tspan class="lang-ja" x="50" dy="0">現在の治療方針</tspan>
                                    <tspan class="lang-vi" x="50" dy="0">Phác đồ hiện tại</tspan>
                                </text>
                                <text x="50" y="87" fill="var(--text-muted)" font-size="8.5" text-anchor="middle">Current Policy</text>

                                <!-- Path 1 (Top): To Attending Doctor -->
                                <path d="M 95 65 L 135 32" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrowGold)" />
                                <rect x="135" y="15" width="55" height="30" rx="4" fill="#3b82f6" stroke="#93c5fd" stroke-width="1" />
                                <text x="162" y="33" fill="#fff" font-size="9.5" font-weight="bold" text-anchor="middle">
                                    <tspan class="lang-ja" x="162" dy="0">主治医</tspan>
                                    <tspan class="lang-vi" x="162" dy="0">Bác sĩ điều trị</tspan>
                                </text>

                                <!-- Arrow 1: Attending -> Right Box (診療情報提供書) -->
                                <path d="M 190 30 L 315 30 L 315 55" stroke="var(--accent-gold)" stroke-width="1.5" marker-end="url(#arrowGold)" fill="none" />
                                <text x="250" y="24" fill="var(--accent-gold)" font-size="8.5" font-weight="bold" text-anchor="middle">
                                    <tspan class="lang-ja">診療情報提供書</tspan>
                                    <tspan class="lang-vi">Hồ sơ / Giấy chuyển viện</tspan>
                                </text>

                                <!-- Path 2 (Bottom): To Third Party Doctor -->
                                <path d="M 95 85 L 135 118" stroke="#3b82f6" stroke-width="1.5" marker-end="url(#arrowTeal)" />
                                <rect x="135" y="105" width="75" height="32" rx="4" fill="#1e293b" stroke="var(--accent-teal)" stroke-width="1" />
                                <text x="172" y="124" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">
                                    <tspan class="lang-ja" x="172" dy="0">第三者の専門医</tspan>
                                    <tspan class="lang-vi" x="172" dy="0">Bác sĩ độc lập</tspan>
                                </text>

                                <!-- Arrow 2: Third Party -> Right Box (意見の提供) -->
                                <path d="M 210 120 L 315 120 L 315 95" stroke="var(--accent-teal)" stroke-width="1.5" marker-end="url(#arrowTeal)" fill="none" />
                                <text x="258" y="132" fill="var(--accent-teal)" font-size="8.5" font-weight="bold" text-anchor="middle">
                                    <tspan class="lang-ja">客観的な「意見」の提供</tspan>
                                    <tspan class="lang-vi">Cung cấp ý kiến khách quan</tspan>
                                </text>

                                <!-- Right Box: Consented Self Decision -->
                                <rect x="325" y="47" width="90" height="56" rx="6" fill="#7c2d12" stroke="var(--accent-gold)" stroke-width="1.5" />
                                <text x="370" y="73" fill="#ffedd5" font-size="10" font-weight="bold" text-anchor="middle">
                                    <tspan class="lang-ja" x="370" dy="0">納得した自己決定</tspan>
                                    <tspan class="lang-vi" x="370" dy="0">Tự quyết an tâm</tspan>
                                </text>
                                <text x="370" y="87" fill="#fde047" font-size="8" text-anchor="middle">Informed Decision</text>
                            </svg>
                        </div>

                        <!-- Important warning block: Consultation vs Medical treatment (Slide 6) -->
                        <div style="background: rgba(239, 68, 68, 0.05); border: 1px dashed rgba(239, 68, 68, 0.2); padding: 12px; border-radius: 6px; font-size: 0.82rem; line-height: 1.5; color: #fca5a5; margin-bottom: 15px;">
                            <span class="lang-ja">⚠️ <strong>【重要：『診療』ではなく『相談』】</strong> 治療目的の診療行為ではないため、原則として健康保険給付の対象とならず全額自己負担となります。</span>
                            <span class="lang-vi">⚠️ <strong>【Quan trọng: Là "Tư vấn" chứ không phải "Điều trị"】</strong> Vì không có mục đích trực tiếp chữa trị, bảo hiểm y tế công sẽ không hỗ trợ chi trả, người bệnh tự chi trả 100%.</span>
                        </div>

                        <!-- Key Takeaway Banner Slide 6 -->
                        <div style="background: rgba(245, 158, 11, 0.05); border-left: 3px solid var(--accent-gold); padding: 12px 15px; border-radius: 0 8px 8px 0; font-size: 0.85rem; line-height: 1.5; color: #fde047;">
                            <span class="lang-ja"><strong>Key Takeaway:</strong> セカンドオピニオンは、患者の自己決定権を裏付ける強力なツールである。</span>
                            <span class="lang-vi"><strong>Điểm cốt lõi:</strong> Ý kiến y tế thứ hai là công cụ mạnh mẽ củng cố quyền tự quyết của bệnh nhân.</span>
                        </div>
                    </div>
                </div>
            </div> <!-- Close Section II grid-2col -->

            <!-- Historical Transition Tabs (Slide 2 & IC Stepper) -->
            <div class="card glass-card text-left" style="padding: 25px; margin-bottom: 25px;">
                <h3 style="color: #fff; margin-top: 0; font-size: 1.1rem; margin-bottom: 20px;">
                    <span class="lang-ja">意思決定モデルの対比とステップ</span>
                    <span class="lang-vi">So sánh mô hình quyết định và các bước</span>
                </h3>
                
                <!-- Interactive Tabs for Paternalism vs Patient-Centered -->
                <style>
                .sbo123-matrix-grid {
                    display: grid;
                    grid-template-columns: 250px 1fr;
                    gap: 20px;
                    align-items: start;
                    margin-top: 15px;
                    margin-bottom: 30px;
                }
                @media (max-width: 768px) {
                    .sbo123-matrix-grid {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <div class="sbo123-matrix-grid">
                    <div style="display: flex; flex-direction: column; gap: 10px;">
                        <button class="sbo123-tab-btn comm-btn active" data-tab="paternalism" style="padding: 15px; text-align: left; border: 1px solid #ef4444; background: rgba(239, 68, 68, 0.2); color: #ef4444; width: 100%; border-radius: 6px; font-weight: bold; cursor: pointer;">
                            <i class="fa-solid fa-user-doctor" style="margin-right: 8px;"></i>
                            <span class="lang-ja">パターナリズム（父権主義）</span>
                            <span class="lang-vi">Chủ nghĩa gia trưởng (Paternalism)</span>
                        </button>
                        <button class="sbo123-tab-btn comm-btn" data-tab="patient-centered" style="padding: 15px; text-align: left; border: 1px solid rgba(255, 255, 255, 0.1); background: rgba(255, 255, 255, 0.05); color: #e2e8f0; width: 100%; border-radius: 6px; font-weight: bold; cursor: pointer;">
                            <i class="fa-solid fa-hospital-user" style="margin-right: 8px;"></i>
                            <span class="lang-ja">患者中心の医療（共創の医療）</span>
                            <span class="lang-vi">Y tế lấy bệnh nhân làm trung tâm</span>
                        </button>
                    </div>
                    <div id="sbo123-matrix-card" class="card glass-card" style="padding: 20px; text-align: left; background: rgba(255, 255, 255, 0.02); min-height: 220px; margin-bottom: 0; transition: all 0.3s;">
                        <h4 id="sbo123-matrix-header" style="margin-top: 0; color: #fff; border-bottom: 2px solid rgba(255,255,255,0.1); padding-bottom: 10px; font-size: 0.96rem; font-weight: bold; transition: color 0.3s;">
                            <!-- Set dynamically -->
                        </h4>
                        <table style="width: 100%; border-collapse: collapse; font-size: 0.9rem;">
                            <tbody id="sbo123-matrix-body">
                                <!-- Filled dynamically -->
                            </tbody>
                        </table>
                    </div>
                </div>

                <!-- IC Stepper Container -->
                <div style="border-top: 1px solid rgba(255,255,255,0.06); padding-top: 25px;">
                    <h4 style="margin: 0 0 20px 0; color: var(--accent-teal); font-size: 1rem; font-weight: bold;">
                        <span class="lang-ja">インフォームドコンセントのプロセスステップ</span>
                        <span class="lang-vi">Các bước trong quy trình Informed Consent</span>
                    </h4>
                    
                    <div style="display: flex; justify-content: space-between; align-items: center; position: relative; margin-bottom: 30px; max-width: 500px; margin-left: auto; margin-right: auto;">
                        <!-- Connecting line -->
                        <div style="position: absolute; top: 20px; left: 0; right: 0; height: 4px; background: rgba(255,255,255,0.1); z-index: 1;"></div>
                        <div id="ic-progress" style="position: absolute; top: 20px; left: 0; width: 0%; height: 4px; background: var(--accent-teal); z-index: 1; transition: width 0.3s ease;"></div>

                        <!-- Dots -->
                        <button class="ic-step step-dot active" data-step="1" style="z-index: 2; position: relative; width: 40px; height: 40px; border-radius: 50%; border: 3px solid var(--accent-teal); background: #0f172a; color: var(--accent-teal); font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s;">1</button>
                        <button class="ic-step step-dot" data-step="2" style="z-index: 2; position: relative; width: 40px; height: 40px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.2); background: #0f172a; color: var(--text-muted); font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s;">2</button>
                        <button class="ic-step step-dot" data-step="3" style="z-index: 2; position: relative; width: 40px; height: 40px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.2); background: #0f172a; color: var(--text-muted); font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s;">3</button>
                        <button class="ic-step step-dot" data-step="4" style="z-index: 2; position: relative; width: 40px; height: 40px; border-radius: 50%; border: 3px solid rgba(255,255,255,0.2); background: #0f172a; color: var(--text-muted); font-weight: bold; cursor: pointer; display: flex; align-items: center; justify-content: center; transition: all 0.3s;">4</button>
                    </div>

                    <div class="card glass-card" id="ic-step-card" style="border: 1px solid rgba(45, 212, 191, 0.15); border-left: 4px solid var(--accent-teal); text-align: left; padding: 20px; background: rgba(45, 212, 191, 0.02); min-height: 120px; transition: opacity 0.2s ease; margin-bottom: 0;">
                        <h5 id="ic-step-title" style="margin: 0 0 10px 0; color: var(--accent-teal); font-size: 1.05rem; font-weight: bold;">
                            <!-- Dynamic -->
                        </h5>
                        <p id="ic-step-desc" class="small-desc" style="line-height: 1.7; color: var(--text-secondary); margin: 0; font-size: 0.88rem;">
                            <!-- Dynamic -->
                        </p>
                    </div>
                </div>

            </div>
        </div>
    </section>

    <!-- SECTION III: 終末期における自己決定 -->
    <section id="sbo123-sec3" class="section" style="padding-top: 20px; padding-bottom: 50px; border-top: 1px solid rgba(255,255,255,0.05);">
        <div class="container">
            <div class="section-badge" style="margin-bottom: 12px;">
                <span class="lang-ja">終末期の自己決定</span>
                <span class="lang-vi">Tự quyết giai đoạn cuối đời</span>
            </div>
            <h2 class="section-title" style="margin-bottom: 24px;">
                <span class="lang-ja">終末期における自己決定</span>
                <span class="lang-vi">Sự tự quyết trong giai đoạn cuối đời</span>
            </h2>

            <style>
                .sbo123-grid-3col {
                    display: grid;
                    grid-template-columns: repeat(3, 1fr);
                    gap: 20px;
                    align-items: stretch;
                    margin-bottom: 25px;
                }
                @media (max-width: 992px) {
                    .sbo123-grid-3col {
                        grid-template-columns: 1fr;
                    }
                }
            </style>
            <!-- Card 1: Living Will (Full Width split layout) -->
            <div class="card glass-card text-left" style="padding: 25px; border-top: 4px solid var(--accent-teal); margin-bottom: 20px;">
                <div class="grid-2col" style="gap: 25px; align-items: center;">
                    <!-- Left: Timeline Diagram -->
                    <div>
                        <div style="background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 10px; padding: 20px 15px; display: flex; justify-content: center; align-items: center;">
                            <svg width="420" height="150" viewBox="0 0 420 150" style="max-width: 100%; height: auto;">
                                <defs>
                                    <marker id="arrowTealEnd" markerWidth="6" markerHeight="6" refX="4" refY="3" orient="auto" markerUnits="strokeWidth">
                                        <path d="M0,0 L0,6 L5,3 Z" fill="var(--accent-teal)" />
                                    </marker>
                                </defs>

                                <!-- Left (Present): Sunny/Self-Determination -->
                                <circle cx="65" cy="40" r="18" fill="rgba(45, 212, 191, 0.1)" stroke="var(--accent-teal)" stroke-width="1.5" />
                                <text x="65" y="45" font-size="16" text-anchor="middle">☀️</text>
                                <text x="65" y="75" fill="#fff" font-size="9.5" font-weight="bold" text-anchor="middle">
                                    <tspan class="lang-ja">現在：意思決定可能</tspan>
                                    <tspan class="lang-vi">Hiện tại: Tỉnh táo</tspan>
                                </text>

                                <!-- Down Arrow Left -->
                                <line x1="65" y1="84" x2="65" y2="102" stroke="var(--accent-teal)" stroke-width="1.5" stroke-dasharray="2,2" />

                                <!-- Left Document Icon -->
                                <rect x="55" y="105" width="20" height="25" rx="3" fill="rgba(30, 41, 59, 0.8)" stroke="var(--accent-teal)" stroke-width="1.5" />
                                <text x="65" y="121" fill="var(--accent-teal)" font-size="12" font-weight="bold" text-anchor="middle">📄</text>
                                <text x="65" y="144" fill="var(--text-muted)" font-size="8.5" font-weight="bold" text-anchor="middle">
                                    <tspan class="lang-ja">事前の意思表示</tspan>
                                    <tspan class="lang-vi">Lập di chúc trước</tspan>
                                </text>

                                <!-- Transition Timeline arrow -->
                                <line x1="105" y1="40" x2="295" y2="40" stroke="var(--accent-teal)" stroke-width="3.5" marker-end="url(#arrowTealEnd)" />
                                <text x="200" y="30" fill="var(--text-muted)" font-size="9.5" font-weight="bold" text-anchor="middle">Time Progression</text>

                                <!-- Right (Future): Lost Capability -->
                                <circle cx="345" cy="40" r="18" fill="rgba(245, 158, 11, 0.1)" stroke="var(--accent-gold)" stroke-width="1.5" />
                                <text x="345" y="45" font-size="16" text-anchor="middle">☁️</text>
                                <text x="345" y="75" fill="#fff" font-size="9.5" font-weight="bold" text-anchor="middle">
                                    <tspan class="lang-ja">将来：判断能力喪失</tspan>
                                    <tspan class="lang-vi">Tương lai: Mất nhận thức</tspan>
                                </text>

                                <!-- Down Arrow Right -->
                                <line x1="345" y1="84" x2="345" y2="102" stroke="var(--accent-gold)" stroke-width="1.5" stroke-dasharray="2,2" />

                                <!-- Right Document Icon -->
                                <rect x="335" y="105" width="20" height="25" rx="3" fill="rgba(30, 41, 59, 0.8)" stroke="var(--accent-gold)" stroke-width="1.5" />
                                <text x="345" y="121" fill="var(--accent-gold)" font-size="12" font-weight="bold" text-anchor="middle">📄</text>
                                <text x="345" y="144" fill="var(--text-muted)" font-size="8.5" font-weight="bold" text-anchor="middle">
                                    <tspan class="lang-ja">文書の効力発揮</tspan>
                                    <tspan class="lang-vi">Di chúc có hiệu lực</tspan>
                                </text>
                            </svg>
                        </div>
                    </div>

                    <!-- Right: Info Details -->
                    <div style="display: flex; flex-direction: column; justify-content: center;">
                        <h3 style="color: var(--accent-teal); margin-top: 0; margin-bottom: 12px; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-file-shield"></i>
                            <span class="lang-ja">III-1. リビングウィル（Living Will）</span>
                            <span class="lang-vi">III-1. Di chúc sinh mệnh (Living Will)</span>
                        </h3>
                        
                        <p class="small-desc" style="line-height: 1.5; color: var(--text-secondary); margin-bottom: 15px;">
                            <span class="lang-ja">終末期の医療方針について、自らが希望する処置（または拒否）を事前に書面で明示する生前の意思表明です。</span>
                            <span class="lang-vi">Văn bản thể hiện nguyện vọng sinh mệnh trước khi mất đi năng lực nhận thức hành vi, quyết định việc đồng ý hoặc từ chối các can thiệp duy trì sự sống.</span>
                        </p>

                        <div style="background: rgba(255,255,255,0.02); padding: 12px; border-radius: 6px; font-size: 0.82rem; line-height: 1.5; color: var(--text-secondary); margin-bottom: 15px; border: 1px solid rgba(255,255,255,0.04); display: flex; flex-direction: column; gap: 6px;">
                            <div>
                                <strong style="color: var(--accent-teal); display: block;">
                                    <span class="lang-ja">■ 定義（生前の告示）</span>
                                    <span class="lang-vi">■ Định nghĩa (Di chúc sống)</span>
                                </strong>
                                <span class="lang-ja">自らの終末期をどのように迎えたいかについての「生前の告示」。</span>
                                <span class="lang-vi">Văn bản bày tỏ trước nguyện vọng điều trị trong giai đoạn cuối đời.</span>
                            </div>
                            <div>
                                <strong style="color: var(--accent-teal); display: block;">
                                    <span class="lang-ja">■ 具体例</span>
                                    <span class="lang-vi">■ Ví dụ cụ thể</span>
                                </strong>
                                <span class="lang-ja">無駄な延命治療の拒否、DNAR（心肺蘇生を行わない指示）など。</span>
                                <span class="lang-vi">Từ chối kéo dài sự sống vô ích, chỉ định không hồi sức tim phổi (DNAR).</span>
                            </div>
                        </div>

                        <!-- Key Takeaway Banner Slide 7 -->
                        <div style="background: rgba(245, 158, 11, 0.05); border-left: 3px solid var(--accent-gold); padding: 10px 12px; border-radius: 0 6px 6px 0; font-size: 0.82rem; line-height: 1.4; color: #fde047;">
                            <span class="lang-ja"><strong>Key Takeaway:</strong> 本人の健康障害が具体的に存在し、医療従事者と家族が「延命を希望しない」ことを確認した上で成立する。</span>
                            <span class="lang-vi"><strong>Điểm cốt lõi:</strong> Di chúc sinh mệnh có hiệu lực khi có tình trạng suy giảm sức khỏe cụ thể, và có sự xác nhận đồng thuận không kéo dài sự sống từ nhân viên y tế và gia đình.</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Card 2: Terminal Care (Full Width split layout) -->
            <div class="card glass-card text-left" style="padding: 25px; border-top: 4px solid var(--accent-gold); margin-bottom: 20px;">
                <div class="grid-2col" style="gap: 25px; align-items: center;">
                    <!-- Left: Circular Diagram -->
                    <div>
                        <div style="background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 10px; padding: 15px 5px; display: flex; justify-content: center; align-items: center;">
                            <svg width="240" height="240" viewBox="0 0 240 240" style="max-width: 100%; height: auto;">
                                <!-- Definitions of quadrants -->
                                <!-- Top-Left (Blue): Physical Pain -->
                                <path d="M 120 120 L 120 20 A 100 100 0 0 0 20 120 Z" fill="rgba(59, 130, 246, 0.15)" stroke="#3b82f6" stroke-width="1.5" />
                                <text x="75" y="65" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">
                                    <tspan class="lang-ja" x="75" dy="0">身体的苦痛</tspan>
                                    <tspan class="lang-ja" x="75" dy="11" font-size="7" fill="var(--text-muted)">痛み、呼吸困難</tspan>
                                    <tspan class="lang-vi" x="75" dy="0">Thể chất</tspan>
                                    <tspan class="lang-vi" x="75" dy="11" font-size="7" fill="var(--text-muted)">Đau đớn, khó thở</tspan>
                                </text>

                                <!-- Top-Right (Green): Mental Pain -->
                                <path d="M 120 120 L 220 120 A 100 100 0 0 0 120 20 Z" fill="rgba(16, 185, 129, 0.15)" stroke="#10b981" stroke-width="1.5" />
                                <text x="165" y="65" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">
                                    <tspan class="lang-ja" x="165" dy="0">精神的苦痛</tspan>
                                    <tspan class="lang-ja" x="165" dy="11" font-size="7" fill="var(--text-muted)">不安、うつ、恐怖</tspan>
                                    <tspan class="lang-vi" x="165" dy="0">Tâm lý</tspan>
                                    <tspan class="lang-vi" x="165" dy="11" font-size="7" fill="var(--text-muted)">Lo âu, trầm cảm</tspan>
                                </text>

                                <!-- Bottom-Left (Orange/Gold): Social Pain -->
                                <path d="M 120 120 L 20 120 A 100 100 0 0 0 120 220 Z" fill="rgba(245, 158, 11, 0.15)" stroke="var(--accent-gold)" stroke-width="1.5" />
                                <text x="75" y="165" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">
                                    <tspan class="lang-ja" x="75" dy="0">社会的苦痛</tspan>
                                    <tspan class="lang-ja" x="75" dy="11" font-size="7" fill="var(--text-muted)">経済問題、家族関係</tspan>
                                    <tspan class="lang-vi" x="75" dy="0">Xã hội</tspan>
                                    <tspan class="lang-vi" x="75" dy="11" font-size="7" fill="var(--text-muted)">Tài chính, gia đình</tspan>
                                </text>

                                <!-- Bottom-Right (Grey/Spiritual): Spiritual Pain -->
                                <path d="M 120 120 L 120 220 A 100 100 0 0 0 220 120 Z" fill="rgba(168, 85, 247, 0.15)" stroke="#a855f7" stroke-width="1.5" />
                                <text x="165" y="165" fill="#fff" font-size="9" font-weight="bold" text-anchor="middle">
                                    <tspan class="lang-ja" x="165" dy="0">霊的苦痛</tspan>
                                    <tspan class="lang-ja" x="165" dy="11" font-size="7" fill="var(--text-muted)">死への恐怖、意味深さ</tspan>
                                    <tspan class="lang-vi" x="165" dy="0">Tâm linh</tspan>
                                    <tspan class="lang-vi" x="165" dy="11" font-size="7" fill="var(--text-muted)">Nỗi sợ cái chết</tspan>
                                </text>

                                <!-- Center Circle: Total Pain -->
                                <circle cx="120" cy="120" r="32" fill="#111827" stroke="#fff" stroke-width="1.5" />
                                <text x="120" y="120" fill="#fff" font-size="8" font-weight="900" text-anchor="middle">
                                    <tspan class="lang-ja" x="120" dy="-2">全人的</tspan>
                                    <tspan class="lang-ja" x="120" dy="10">苦痛</tspan>
                                    <tspan class="lang-vi" x="120" dy="-2">Total</tspan>
                                    <tspan class="lang-vi" x="120" dy="10">Pain</tspan>
                                </text>
                            </svg>
                        </div>
                    </div>

                    <!-- Right: Info Details -->
                    <div style="display: flex; flex-direction: column; justify-content: center;">
                        <h3 style="color: var(--accent-gold); margin-top: 0; margin-bottom: 12px; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-heart-pulse"></i>
                            <span class="lang-ja">III-2. ターミナルケア（Terminal Care）</span>
                            <span class="lang-vi">III-2. Chăm sóc giảm nhẹ cuối đời (Terminal Care)</span>
                        </h3>
                        
                        <!-- Shift in Medical Goal definitions from slide -->
                        <div style="font-size: 0.82rem; line-height: 1.5; color: var(--text-secondary); margin-bottom: 15px; display: flex; flex-direction: column; gap: 8px;">
                            <div>
                                <strong style="color: var(--accent-gold); display: block; margin-bottom: 2px;">
                                    <span class="lang-ja">■ 医療目標の転換 (Shift in Medical Goal)</span>
                                    <span class="lang-vi">■ Chuyển đổi mục tiêu y tế</span>
                                </strong>
                                <span class="lang-ja">治癒 (Cure) を目指す医療から、苦痛を緩和し支える (Care) 医療への転換。</span>
                                <span class="lang-vi">Chuyển từ điều trị khỏi bệnh (Cure) sang xoa dịu đau đớn và hỗ trợ tinh thần (Care).</span>
                            </div>
                            <div>
                                <span class="lang-ja">ホスピス（施設）や在宅で、「その人らしさ」をまっとうする支援。</span>
                                <span class="lang-vi">Hỗ trợ duy trì phẩm giá và "phong cách sống riêng" tại nhà hoặc viện dưỡng tế.</span>
                            </div>
                        </div>

                        <!-- Key Takeaway Banner Slide 8 -->
                        <div style="background: rgba(245, 158, 11, 0.05); border-left: 3px solid var(--accent-gold); padding: 10px 12px; border-radius: 0 6px 6px 0; font-size: 0.82rem; line-height: 1.4; color: #fde047;">
                            <span class="lang-ja"><strong>Key Takeaway:</strong> ターミナルケアは単なる身体的治療ではなく、全人的な苦悩を緩和する総合的なアプローチである。</span>
                            <span class="lang-vi"><strong>Điểm cốt lõi:</strong> Chăm sóc cuối đời không đơn thuần là can thiệp thể chất, mà là phương pháp tiếp cận toàn diện giúp xoa dịu nỗi đau toàn diện (Total Pain) của người bệnh.</span>
                        </div>
                    </div>
                </div>
            </div>

            <!-- Card 3: Dignified Death vs Euthanasia (Full width split layout) -->
            <div class="card glass-card text-left" style="padding: 25px; border-top: 4px solid #ef4444; margin-bottom: 25px;">
                <div class="grid-2col" style="gap: 25px; align-items: start;">
                    <!-- Left: Intro Description -->
                    <div style="display: flex; flex-direction: column; justify-content: start;">
                        <h3 style="color: #fca5a5; margin-top: 0; margin-bottom: 12px; font-size: 1.15rem; display: flex; align-items: center; gap: 8px;">
                            <i class="fa-solid fa-scale-unbalanced"></i>
                            <span class="lang-ja">III-3. 尊厳死 と 安楽死の区別</span>
                            <span class="lang-vi">III-3. Phân biệt Cái chết nhân đạo & Cái chết êm dịu</span>
                        </h3>
                        
                        <p class="small-desc" style="line-height: 1.5; color: var(--text-secondary); margin-bottom: 15px;">
                            <span class="lang-ja">終末期の最期の迎え方において、倫理的・法律的に厳格に区別される極めて重要な概念です。</span>
                            <span class="lang-vi">Hai khái niệm đạo đức/pháp lý cực kỳ quan trọng và nhạy cảm được phân biệt rõ ràng trong chăm sóc giảm nhẹ.</span>
                        </p>

                        <!-- Key Takeaway Banner Slide 9 -->
                        <div style="background: rgba(239, 68, 68, 0.05); border-left: 3px solid #ef4444; padding: 12px 15px; border-radius: 0 8px 8px 0; font-size: 0.85rem; line-height: 1.5; color: #fca5a5;">
                            <span class="lang-ja"><strong>Key Takeaway:</strong> 尊厳死は「自然なプロセスへの回帰」であり、安楽死は「人為的な死の操作」であるという本質的な差異がある。</span>
                            <span class="lang-vi"><strong>Điểm cốt lõi:</strong> Có sự khác biệt bản chất: Cái chết nhân đạo (尊厳死) là "trở lại quy trình tự nhiên", trong khi cái chết êm dịu (安楽死) là "can thiệp nhân tạo vào sự sống".</span>
                        </div>
                    </div>

                    <!-- Right: Comparative Table -->
                    <div>
                        <div style="background: rgba(255, 255, 255, 0.02); backdrop-filter: blur(8px); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 10px; padding: 12px; overflow-x: auto;">
                            <table style="width: 100%; border-collapse: collapse; font-size: 0.85rem; text-align: left; line-height: 1.5; color: var(--text-secondary);">
                                <thead>
                                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.1); background: rgba(255,255,255,0.02);">
                                        <th style="padding: 10px 8px; color: #fff; font-weight: bold; width: 22%;">
                                            <span class="lang-ja">比較項目</span>
                                            <span class="lang-vi">Tiêu chí</span>
                                        </th>
                                        <th style="padding: 10px 8px; color: var(--accent-teal); font-weight: bold; width: 39%;">
                                            <span class="lang-ja">尊厳死（自然死）</span>
                                            <span class="lang-vi">Cái chết nhân đạo</span>
                                        </th>
                                        <th style="padding: 10px 8px; color: #fca5a5; font-weight: bold; width: 39%;">
                                            <span class="lang-ja">安楽死</span>
                                            <span class="lang-vi">Cái chết êm dịu</span>
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                                        <td style="padding: 12px 8px; font-weight: bold; color: #fff; background: rgba(255,255,255,0.01);">
                                            <span class="lang-ja">介入の<br>アプローチ</span>
                                            <span class="lang-vi">Cách thức<br>can thiệp</span>
                                        </td>
                                        <td style="padding: 12px 8px;">
                                            <span class="lang-ja">人工的な延命治療の「拒否・中止」</span>
                                            <span class="lang-vi">Từ chối hoặc dừng các thiết bị hỗ trợ duy trì sự sống nhân tạo.</span>
                                        </td>
                                        <td style="padding: 12px 8px; color: #fca5a5;">
                                            <span class="lang-ja">薬物などの積極的な介入による死の意図的誘発</span>
                                            <span class="lang-vi">Chủ động can thiệp bằng thuốc nhằm chấm dứt sự sống một cách cố ý.</span>
                                        </td>
                                    </tr>
                                    <tr style="border-bottom: 1px solid rgba(255,255,255,0.04);">
                                        <td style="padding: 12px 8px; font-weight: bold; color: #fff; background: rgba(255,255,255,0.01);">
                                            <span class="lang-ja">生命の長さ</span>
                                            <span class="lang-vi">Thời gian sống</span>
                                        </td>
                                        <td style="padding: 12px 8px;">
                                            <span class="lang-ja">自然な死期をそのまま受け入れる</span>
                                            <span class="lang-vi">Chấp nhận và đón nhận tiến trình ra đi tự nhiên của cơ thể.</span>
                                        </td>
                                        <td style="padding: 12px 8px; color: #fca5a5;">
                                            <span class="lang-ja">死期を意図的に「早める」</span>
                                            <span class="lang-vi">Rút ngắn cuộc sống một cách chủ động và cố ý.</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td style="padding: 12px 8px; font-weight: bold; color: #fff; background: rgba(255,255,255,0.01);">
                                            <span class="lang-ja">日本の<br>法的現状</span>
                                            <span class="lang-vi">Tình trạng<br>pháp lý (Nhật)</span>
                                        </td>
                                        <td style="padding: 12px 8px;">
                                            <span class="lang-ja">リビングウィル等を通じて社会的に容認・実践されている</span>
                                            <span class="lang-vi">Được chấp nhận rộng rãi và thực hành thông qua Di chúc sinh mệnh.</span>
                                        </td>
                                        <td style="padding: 12px 8px; color: #fca5a5;">
                                            <span class="lang-ja">法制化されておらず、濫用を防ぐため厳格な法的・倫理的問題を含む</span>
                                            <span class="lang-vi">Chưa được luật pháp hóa; có tranh cãi pháp lý và đạo đức để tránh lạm dụng.</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
    </section>

    <!-- SECTION IV: まとめ：患者参画の全体像 (Slide 10) -->
    <section id="sbo123-sec4" class="section" style="padding-top: 20px; padding-bottom: 50px; border-top: 1px solid rgba(255,255,255,0.05);">
        <div class="container">
            <div class="section-badge" style="margin-bottom: 12px;">
                <span class="lang-ja">全体像のまとめ</span>
                <span class="lang-vi">Tổng kết toàn cảnh</span>
            </div>
            <h2 class="section-title" style="margin-bottom: 24px;">
                <span class="lang-ja">まとめ：患者参画の全体像</span>
                <span class="lang-vi">Tổng kết: Toàn cảnh người bệnh tham gia y tế</span>
            </h2>

            <!-- Flowchart Container -->
            <div style="background: rgba(255,255,255,0.01); border: 1px solid rgba(255,255,255,0.05); border-radius: 12px; padding: 25px 20px; margin-bottom: 25px; box-shadow: 0 4px 30px rgba(0,0,0,0.2);">
                
                <!-- Horizontal Stage Map -->
                <div style="display: flex; flex-direction: row; align-items: stretch; justify-content: space-between; flex-wrap: wrap; gap: 20px; margin-bottom: 25px; position: relative;">
                    
                    <!-- Stage 1: Foundation (基礎) -->
                    <div style="flex: 1; min-width: 140px; background: rgba(59, 130, 246, 0.04); border: 1px solid rgba(59, 130, 246, 0.15); border-radius: 8px; padding: 15px; text-align: center; position: relative;">
                        <span style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); font-size: 0.72rem; font-weight: bold; background: #3b82f6; color: #fff; padding: 2px 8px; border-radius: 10px; text-transform: uppercase; letter-spacing: 0.5px;">基礎 / Foundation</span>
                        <div style="margin-top: 5px; margin-bottom: 10px; font-size: 1.5rem; color: #93c5fd;"><i class="fa-solid fa-cubes"></i></div>
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            <div style="background: rgba(30, 41, 59, 0.6); border: 1px solid rgba(255,255,255,0.05); padding: 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; color: #fff;">
                                <span class="lang-ja">患者の権利</span>
                                <span class="lang-vi">Quyền của bệnh nhân</span>
                            </div>
                            <div style="background: rgba(30, 41, 59, 0.6); border: 1px solid rgba(255,255,255,0.05); padding: 8px; border-radius: 4px; font-size: 0.8rem; font-weight: bold; color: #fff;">
                                <span class="lang-ja">パートナーシップ</span>
                                <span class="lang-vi">Quan hệ đối tác</span>
                            </div>
                        </div>
                    </div>

                    <!-- Flow Arrow 1 -->
                    <div style="display: flex; align-items: center; justify-content: center; width: 25px; color: var(--accent-teal); font-size: 1.5rem; font-weight: bold;">
                        <i class="fa-solid fa-arrow-right" style="animation: pulse 2s infinite;"></i>
                    </div>

                    <!-- Stage 2: Under Treatment (治療中) -->
                    <div style="flex: 1.2; min-width: 160px; background: rgba(45, 212, 191, 0.04); border: 1px solid rgba(45, 212, 191, 0.15); border-radius: 8px; padding: 15px; text-align: center; position: relative;">
                        <span style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); font-size: 0.72rem; font-weight: bold; background: var(--accent-teal); color: #0f172a; padding: 2px 8px; border-radius: 10px; text-transform: uppercase; letter-spacing: 0.5px;">治療中 / Treatment</span>
                        <div style="margin-top: 5px; margin-bottom: 10px; font-size: 1.5rem; color: #2dd4bf;"><i class="fa-solid fa-gears"></i></div>
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            <div style="background: rgba(30, 41, 59, 0.6); border: 1px solid rgba(255,255,255,0.05); padding: 6px; border-radius: 4px; font-size: 0.78rem; font-weight: bold; color: #fff; display: flex; align-items: center; justify-content: center; gap: 4px;">
                                <i class="fa-solid fa-check" style="color: var(--accent-teal); font-size: 0.7rem;"></i>
                                <span class="lang-ja">インフォームド・チョイス</span>
                                <span class="lang-vi">Lựa chọn có giải thích</span>
                            </div>
                            <div style="background: rgba(30, 41, 59, 0.6); border: 1px solid rgba(255,255,255,0.05); padding: 6px; border-radius: 4px; font-size: 0.78rem; font-weight: bold; color: #fff; display: flex; align-items: center; justify-content: center; gap: 4px;">
                                <i class="fa-solid fa-check" style="color: var(--accent-teal); font-size: 0.7rem;"></i>
                                <span class="lang-ja">チーム医療への参加</span>
                                <span class="lang-vi">Tham gia y tế nhóm</span>
                            </div>
                            <div style="background: rgba(30, 41, 59, 0.6); border: 1px solid rgba(255,255,255,0.05); padding: 6px; border-radius: 4px; font-size: 0.78rem; font-weight: bold; color: #fff; display: flex; align-items: center; justify-content: center; gap: 4px;">
                                <i class="fa-solid fa-check" style="color: var(--accent-teal); font-size: 0.7rem;"></i>
                                <span class="lang-ja">セカンドオピニオン</span>
                                <span class="lang-vi">Ý kiến y tế thứ hai</span>
                            </div>
                        </div>
                    </div>

                    <!-- Flow Arrow 2 -->
                    <div style="display: flex; align-items: center; justify-content: center; width: 25px; color: var(--accent-gold); font-size: 1.5rem; font-weight: bold;">
                        <i class="fa-solid fa-arrow-right" style="animation: pulse 2s infinite;"></i>
                    </div>

                    <!-- Stage 3: End-of-Life (終末期) -->
                    <div style="flex: 1.2; min-width: 160px; background: rgba(245, 158, 11, 0.04); border: 1px solid rgba(245, 158, 11, 0.15); border-radius: 8px; padding: 15px; text-align: center; position: relative;">
                        <span style="position: absolute; top: -10px; left: 50%; transform: translateX(-50%); font-size: 0.72rem; font-weight: bold; background: var(--accent-gold); color: #0f172a; padding: 2px 8px; border-radius: 10px; text-transform: uppercase; letter-spacing: 0.5px;">終末期 / End-of-Life</span>
                        <div style="margin-top: 5px; margin-bottom: 10px; font-size: 1.5rem; color: #fde047;"><i class="fa-solid fa-route"></i></div>
                        <div style="display: flex; flex-direction: column; gap: 8px;">
                            <div style="background: rgba(30, 41, 59, 0.6); border: 1px solid rgba(255,255,255,0.05); padding: 6px; border-radius: 4px; font-size: 0.78rem; font-weight: bold; color: #fff; display: flex; align-items: center; justify-content: center; gap: 4px;">
                                <i class="fa-solid fa-chevron-right" style="color: var(--accent-gold); font-size: 0.7rem;"></i>
                                <span class="lang-ja">リビングウィル</span>
                                <span class="lang-vi">Di chúc sinh mệnh</span>
                            </div>
                            <div style="background: rgba(30, 41, 59, 0.6); border: 1px solid rgba(255,255,255,0.05); padding: 6px; border-radius: 4px; font-size: 0.78rem; font-weight: bold; color: #fff; display: flex; align-items: center; justify-content: center; gap: 4px;">
                                <i class="fa-solid fa-chevron-right" style="color: var(--accent-gold); font-size: 0.7rem;"></i>
                                <span class="lang-ja">ターミナルケア</span>
                                <span class="lang-vi">Chăm sóc cuối đời</span>
                            </div>
                            <div style="background: rgba(30, 41, 59, 0.6); border: 1px solid rgba(255,255,255,0.05); padding: 6px; border-radius: 4px; font-size: 0.78rem; font-weight: bold; color: #fff; display: flex; align-items: center; justify-content: center; gap: 4px;">
                                <i class="fa-solid fa-chevron-right" style="color: var(--accent-gold); font-size: 0.7rem;"></i>
                                <span class="lang-ja">尊厳死の選択</span>
                                <span class="lang-vi">Lựa chọn chết nhân đạo</span>
                            </div>
                        </div>
                    </div>

                </div>

                <!-- Ecosystem Definition Block -->
                <div style="background: rgba(45, 212, 191, 0.05); border: 1px solid rgba(45, 212, 191, 0.2); padding: 18px; border-radius: 8px; font-size: 0.9rem; line-height: 1.6; color: var(--text-primary); margin-bottom: 20px; display: flex; align-items: start; gap: 12px;">
                    <i class="fa-solid fa-network-wired" style="color: var(--accent-teal); font-size: 1.3rem; margin-top: 3px; flex-shrink: 0;"></i>
                    <div>
                        <span class="lang-ja"><strong>「患者が参画する医療」とは：</strong> 治療の入り口から人生の最終段階に至るまで、患者の<strong>「自己決定権」</strong>と<strong>「尊厳」</strong>を中心軸に据える医療のエコシステムである。</span>
                        <span class="lang-vi"><strong>“Y tế có sự tham gia của bệnh nhân” là:</strong> Một hệ sinh thái y tế đặt <strong>“quyền tự quyết”</strong> và <strong>“nhân phẩm”</strong> của người bệnh làm trục trung tâm, kéo dài xuyên suốt từ cửa ngõ điều trị cho tới những giây phút cuối đời.</span>
                    </div>
                </div>

                <!-- Bottom Key Takeaway Banner Slide 10 -->
                <div style="background: rgba(245, 158, 11, 0.05); border-left: 4px solid var(--accent-gold); padding: 15px 20px; border-radius: 0 8px 8px 0; font-size: 0.9rem; line-height: 1.5; color: #fde047; display: flex; align-items: center; gap: 10px;">
                    <i class="fa-solid fa-lightbulb" style="color: var(--accent-gold); font-size: 1.3rem; flex-shrink: 0;"></i>
                    <div>
                        <span class="lang-ja"><strong>Key Takeaway:</strong> 医療は「施されるもの（一方的サービス）」から、双方が「共に創り上げるもの（共創の旅）」へ。</span>
                        <span class="lang-vi"><strong>Điểm cốt lõi:</strong> Y học dịch chuyển từ "sự ban phát một chiều" (dịch vụ đơn phương) sang "sự đồng sáng tạo cùng nhau" (hành trình chia sẻ).</span>
                    </div>
                </div>

            </div>
        </div>
    </section>

</div>

<!-- SBO 2.1.1 CONTENT WRAPPER -->`;
