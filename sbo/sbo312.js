// Auto-generated SBO Template Component
window.SBO_TEMPLATES = window.SBO_TEMPLATES || {};
window.SBO_TEMPLATES['sbo312'] = `<div id="sbo312" class="sbo-section-wrapper">
                <section class="section">
                    <div class="container">
                        <div class="section-badge">臨床推論 (Clinical Reasoning)</div>
                        <h2 class="section-title">臨床推論チャレンジ・シミュレーター</h2>
                        <p class="section-desc">患者の病歴とバイタルサインから適切な診断アプローチを推論する体験型学習です。</p>

                        <div class="card glass-card simulator-box">
                            <div class="case-header">
                                <span class="case-tag"
                                    style="background: rgba(239, 68, 68, 0.15); color: #ef4444; border: 1px solid #ef4444;">緊急度:
                                    高</span>
                                <h3>患者「急に左胸から肩にかけて締め付けられるような激しい痛みが…」</h3>
                            </div>
                            <p class="case-narrative">
                                「62歳男性。冷や汗を伴う突然の胸部圧迫感を主訴に来院。血圧 145/90 mmHg、脈拍 92回/分。最も緊急に行うべき初期検査と鑑別診断のアプローチを選択してください。」
                            </p>

                            <div class="dilemma-choices">
                                <button class="reasoning-btn" data-reason="1">
                                    <span class="btn-num">A</span>
                                    <span>心筋酵素パネル (血液検査) の結果を待つ</span>
                                </button>
                                <button class="reasoning-btn" data-reason="2">
                                    <span class="btn-num">B</span>
                                    <span>直ちに12誘導心電図 (ECG) を実施し ST変化を確認</span>
                                </button>
                                <button class="reasoning-btn" data-reason="3">
                                    <span class="btn-num">C</span>
                                    <span>肺塞栓症を疑い、緊急CT造影検査へ搬送</span>
                                </button>
                            </div>

                            <div class="case-feedback" id="reasoning-feedback" style="display:none;">
                                <h4 id="reason-feedback-heading"></h4>
                                <p id="reason-feedback-body"></p>
                            </div>
                        </div>
                    </div>
                </section>
            </div><!-- END sbo312 wrapper -->


            <!-- FUKUSHU / REVIEW MODE SECTION -->`;
