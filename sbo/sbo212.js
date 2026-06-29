// Auto-generated SBO Template Component
window.SBO_TEMPLATES = window.SBO_TEMPLATES || {};
window.SBO_TEMPLATES['sbo212'] = `<div id="sbo212" class="sbo-section-wrapper">
                <section class="section">
                    <div class="container">
                        <div class="section-badge">生理学 (Physiology)</div>
                        <h2 class="section-title">体温調節と恒常性 (Homeostasis)</h2>
                        <p class="section-desc">外部環境の変動に対し、自律神経系を通じて体内の環境（体温など）を一定に保つ仕組みをシミュレートします。</p>

                        <div class="card glass-card slider-card">
                            <div class="spectrum-labels">
                                <span class="label-left"><i class="fa-solid fa-snowflake"></i> 寒冷環境 (10°C)</span>
                                <span class="label-center">基準室温 (22°C)</span>
                                <span class="label-right"><i class="fa-solid fa-sun"></i> 酷暑環境 (40°C)</span>
                            </div>

                            <div class="interactive-slider-container">
                                <div class="slider-track-glow" id="temp-glow"
                                    style="background: linear-gradient(90deg, #3b82f6 0%, #e2e8f0 50%, #ef4444 100%);">
                                </div>
                                <input type="range" min="10" max="40" value="22" class="health-slider" id="temp-slider">
                            </div>

                            <div class="slider-result" id="temp-result-container">
                                <h3 id="temp-status-title" style="color: #e2e8f0;">体温恒常性（維持）</h3>
                                <p id="temp-status-desc">快適な室温です。自律神経は特別な調節行動を必要とせず、安定して核心体温 37.0°C を維持しています。</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            <!-- SBO 3.1.1 CONTENT WRAPPER -->`;
