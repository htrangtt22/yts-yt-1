// Auto-generated SBO Template Component
window.SBO_TEMPLATES = window.SBO_TEMPLATES || {};
window.SBO_TEMPLATES['sbo111'] = `<div id="sbo111" class="sbo-section-wrapper">
                <style>
                    .prerequisites-grid {
                        display: grid;
                        grid-template-columns: repeat(4, 1fr);
                        gap: 12px;
                    }

                    .preventive-grid {
                        display: grid;
                        grid-template-columns: 1fr 1.3fr;
                        gap: 20px;
                        margin: 0 auto;
                        align-items: start;
                    }

                    @media (max-width: 768px) {
                        .prerequisites-grid {
                            grid-template-columns: repeat(2, 1fr);
                        }

                        .preventive-grid {
                            grid-template-columns: 1fr;
                            gap: 15px;
                        }
                    }
                </style>
                <!-- 1. HEALTH CONCEPT -->
                <section id="section-concept" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">健康の概念</span>
                            <span class="lang-vi">Khái niệm về Sức khỏe</span>
                        </div>
                        <h2 class="section-title">
                            <span class="lang-ja">健康の概念の定義と深化</span>
                            <span class="lang-vi">Định nghĩa & Sự mở rộng khái niệm Sức khỏe</span>
                        </h2>
                        <p class="section-desc">
                            <span class="lang-ja">WHOによる定義、1998年の深化提案、およびヘルスプロモーションのためのオタワ憲章の基本方針。</span>
                            <span class="lang-vi">Định nghĩa của WHO, đề xuất mở rộng khái niệm năm 1998 và các nguyên
                                tắc nâng cao sức khỏe trong Hiến chương Ottawa.</span>
                        </p>

                        <!-- Tabs for Health Concept -->
                        <div class="syllabus-tabs-container"
                            style="margin-bottom: 25px; display: flex; overflow-x: auto; -webkit-overflow-scrolling: touch; gap: 10px; padding-bottom: 5px;">
                            <button class="syllabus-tab-btn active accent-teal" data-concept-tab="who1948"
                                style="white-space: nowrap; flex-shrink: 0;">
                                <span class="lang-ja">WHO基本定義</span>
                                <span class="lang-vi">Định nghĩa WHO</span>
                            </button>
                            <button class="syllabus-tab-btn accent-teal" data-concept-tab="who1998"
                                style="white-space: nowrap; flex-shrink: 0;">
                                <span class="lang-ja">概念の拡張</span>
                                <span class="lang-vi">Mở rộng khái niệm</span>
                            </button>
                            <button class="syllabus-tab-btn accent-teal" data-concept-tab="ottawa"
                                style="white-space: nowrap; flex-shrink: 0;">
                                <span class="lang-ja">オタワ憲章</span>
                                <span class="lang-vi">Hiến chương Ottawa</span>
                            </button>
                        </div>

                        <!-- Content Panes -->
                        <div id="concept-pane-who1948" class="concept-pane" style="display: block;">
                            <div class="card glass-card" style="margin-bottom: 20px; padding: 20px;">
                                <h4>
                                    <span class="lang-ja">WHOによる基本定義</span>
                                    <span class="lang-vi">Định nghĩa cơ bản của WHO</span>
                                </h4>
                                <p
                                    style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary); margin-top: 8px;">
                                    <span
                                        class="lang-ja">健康の概念は、1948年設立の世界保健機関（WHO）憲章の前文において、以下のように定義されています。<br><strong>「身体的・精神的・社会的に完全に良好な状態であり，たんに病気あるいは虚弱ではないことではない」</strong>（Health
                                        is a state of complete physical, mental and social well-being and not merely the
                                        absence of disease or infirmity.）</span>
                                    <span class="lang-vi">Khái niệm về sức khỏe bắt nguồn từ phần mở đầu của Hiến chương
                                        Tổ chức Y tế Thế giới (WHO) được thành lập vào năm 1948. Theo đó, sức khỏe được
                                        định nghĩa là <strong>"một trạng thái hoàn toàn khỏe mạnh về thể chất, tinh thần
                                            và xã hội, chứ không chỉ đơn thuần là không có bệnh tật hay ốm
                                            yếu"</strong>.</span>
                                </p>
                            </div>

                            <div class="grid-2col">
                                <div class="card glass-card triangle-card"
                                    style="display: flex; justify-content: center; align-items: center; min-height: 280px;">
                                    <div class="interactive-triangle-container" style="width: 100%; max-width: 300px;">
                                        <svg viewBox="0 0 300 260" class="interactive-triangle">
                                            <polygon points="150,30 270,230 30,230" class="tri-bg" />
                                            <polygon points="150,110 210,210 90,210" class="tri-inner-bg" />
                                            <line x1="150" y1="30" x2="150" y2="150" class="tri-line" />
                                            <line x1="270" y1="230" x2="150" y2="150" class="tri-line" />
                                            <line x1="30" y1="230" x2="150" y2="150" class="tri-line" />
                                            <circle cx="150" cy="30" r="14" class="tri-node active" id="node-mental"
                                                data-target="mental" />
                                            <circle cx="270" cy="230" r="14" class="tri-node" id="node-social"
                                                data-target="social" />
                                            <circle cx="30" cy="230" r="14" class="tri-node" id="node-physical"
                                                data-target="physical" />
                                            <text x="150" y="70" class="tri-label" text-anchor="middle"
                                                data-target="mental">
                                                <tspan class="lang-ja">精神的 (Mental)</tspan>
                                                <tspan class="lang-vi">Tinh thần (Mental)</tspan>
                                            </text>
                                            <text x="235" y="200" class="tri-label" text-anchor="middle"
                                                data-target="social">
                                                <tspan class="lang-ja">社会的 (Social)</tspan>
                                                <tspan class="lang-vi">Xã hội (Social)</tspan>
                                            </text>
                                            <text x="65" y="200" class="tri-label" text-anchor="middle"
                                                data-target="physical">
                                                <tspan class="lang-ja">身体的 (Physical)</tspan>
                                                <tspan class="lang-vi">Thể chất (Physical)</tspan>
                                            </text>
                                        </svg>
                                        <div class="center-badge">
                                            <span class="lang-ja">完全に良好な状態</span>
                                            <span class="lang-vi">Hoàn toàn khỏe mạnh</span>
                                        </div>
                                    </div>
                                </div>

                                <div class="card glass-card info-card" id="triangle-info-card" style="padding: 20px;">
                                    <h3 id="info-title"><i class="fa-solid fa-brain"></i> <span class="lang-ja">精神的健康
                                            (Mental Health)</span><span class="lang-vi">Sức khỏe tinh thần (Mental
                                            Health)</span></h3>
                                    <p id="info-body">
                                        精神的な健康とは、自身の感情を認識・コントロールし、ストレスに対処でき、自立して意思決定を行える状態です。単に精神疾患がないことではなく、心が満たされ、自己肯定感があることが含まれます。
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div id="concept-pane-who1998" class="concept-pane" style="display: none;">
                            <div class="card glass-card" style="padding: 25px; margin-bottom: 20px;">
                                <h3 style="color: var(--accent-gold); margin-bottom: 12px;"><i
                                        class="fa-solid fa-arrow-up-right-from-square"></i> <span
                                        class="lang-ja">概念の深化</span><span class="lang-vi">Sự mở rộng và đào sâu khái
                                        niệm</span></h3>
                                <p
                                    style="line-height: 1.8; color: var(--text-secondary); font-size: 0.96rem; margin-bottom: 20px;">
                                    <span class="lang-ja">1998年WHO執行理事会で、この定義に<strong>「dynamic（動的）」</strong>と<strong>「spiritual（崇高的
                                            /
                                            尊厳・生きがい）」</strong>という要素を加える改変が提案されました。総会では変える必要がないと否決されましたが、現代医療において以下の観点は本質的なものとして十分認識しておくことが肝要です。</span>
                                    <span class="lang-vi">Đến năm 1998, Hội đồng Chấp hành WHO đã đề xuất sửa đổi định
                                        nghĩa này bằng cách thêm vào hai yếu tố là <strong>"động" (dynamic)</strong> và
                                        <strong>"tôn nghiêm/tâm linh" (spiritual)</strong>. Mặc dù đề xuất này sau đó bị
                                        Đại hội đồng từ chối với lý do không cần thiết phải thay đổi, nhưng trong y học
                                        hiện đại, việc nhận thức đầy đủ hai quan điểm bản chất này là vô cùng quan
                                        trọng:</span>
                                </p>
                                <div class="grid-2col" style="gap: 20px;">
                                    <div
                                        style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-card); border-radius: 8px; padding: 15px;">
                                        <strong
                                            style="color: var(--accent-gold); display: flex; align-items: center; gap: 8px; font-size: 0.96rem;"><i
                                                class="fa-solid fa-wave-square"></i> <span
                                                class="lang-ja">dynamic（動的）</span><span class="lang-vi">Yếu tố "động"
                                                (dynamic)</span></strong>
                                        <p
                                            style="font-size: 0.96rem; margin-top: 8px; line-height: 1.8; color: var(--text-secondary);">
                                            <span
                                                class="lang-ja">静的に固定した状態ではないということを示します。健康と疾病は別個のものではなく連続したものであり、刻々と変化することを意味します。</span>
                                            <span class="lang-vi">Chỉ ra rằng sức khỏe không phải là một trạng thái tĩnh
                                                hay cố định. Sức khỏe và bệnh tật không phải là hai phạm trù tách biệt
                                                mà là một chuỗi liên tục, biến đổi không ngừng theo từng khoảnh
                                                khắc.</span>
                                        </p>
                                    </div>
                                    <div
                                        style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-card); border-radius: 8px; padding: 15px;">
                                        <strong
                                            style="color: var(--accent-teal); display: flex; align-items: center; gap: 8px; font-size: 0.96rem;"><i
                                                class="fa-solid fa-dharmachakra"></i> <span
                                                class="lang-ja">spiritual（崇高的）</span><span class="lang-vi">Yếu tố "tôn
                                                nghiêm/tâm linh" (spiritual)</span></strong>
                                        <p
                                            style="font-size: 0.96rem; margin-top: 8px; line-height: 1.8; color: var(--text-secondary);">
                                            <span class="lang-ja">人間の尊厳の確保や生活の質（QOL）を考えるために必要で本質的なものだという観点です。</span>
                                            <span class="lang-vi">Nhấn mạnh góc nhìn bản chất và vô cùng cần thiết để
                                                xem xét việc đảm bảo nhân phẩm con người và nâng cao chất lượng cuộc
                                                sống (QOL).</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div id="concept-pane-ottawa" class="concept-pane" style="display: none;">
                            <div class="card glass-card" style="padding: 20px; margin-bottom: 20px;">
                                <h3>
                                    <span class="lang-ja">健康づくりの基本：オタワ憲章</span>
                                    <span class="lang-vi">Nền tảng của phong trào nâng cao sức khỏe: Hiến chương
                                        Ottawa</span>
                                </h3>
                                <p
                                    style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary); margin-top: 8px;">
                                    <span class="lang-ja">この定義に基づく健康づくりの基本は、1986年11月にカナダ（オタワ）第1回健康づくり国際会議にて採択された<strong>オタワ憲章（Ottawa
                                            charter for health
                                            promotion）</strong>に始まります。この概念は、健康の<strong>前提条件、基本戦略、活動領域</strong>として記述されており、現在においても否定されていません。</span>
                                    <span class="lang-vi">Dựa trên định nghĩa về sức khỏe, nền tảng của các phong trào
                                        kiến tạo sức khỏe bắt nguồn từ <strong>Hiến chương Ottawa (Ottawa Charter for
                                            Health Promotion)</strong>, được thông qua tại Hội nghị Quốc tế về Nâng cao
                                        Sức khỏe lần thứ nhất tại Canada vào tháng 11 năm 1986. Khái niệm này được mô tả
                                        thông qua các điều kiện tiền đề, chiến lược cơ bản và lĩnh vực hoạt động, và vẫn
                                        được công nhận rộng rãi cho đến ngày nay.</span>
                                </p>
                            </div>

                            <div style="display: flex; flex-direction: column; gap: 20px;">
                                <!-- Prerequisites -->
                                <div class="card glass-card"
                                    style="border-top: 3px solid var(--accent-teal); padding: 20px;">
                                    <h4 style="color: var(--accent-teal); font-size: 0.96rem; margin-bottom: 15px;"><i
                                            class="fa-solid fa-list-check"></i> <span
                                            class="lang-ja">健康の前提条件</span><span class="lang-vi">Các điều kiện tiền
                                            đề</span></h4>
                                    <div class="prerequisites-grid">
                                        <div
                                            style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-card); border-radius: 8px; padding: 12px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 6px;">
                                            <i class="fa-solid fa-peace"
                                                style="color: var(--accent-teal); font-size: 1.35rem;"></i>
                                            <span style="font-size: 0.96rem; font-weight: 600;"><span class="lang-ja">平和
                                                    (Peace)</span><span class="lang-vi">Hòa bình</span></span>
                                        </div>
                                        <div
                                            style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-card); border-radius: 8px; padding: 12px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 6px;">
                                            <i class="fa-solid fa-house"
                                                style="color: var(--accent-teal); font-size: 1.35rem;"></i>
                                            <span style="font-size: 0.96rem; font-weight: 600;"><span class="lang-ja">住居
                                                    (Shelter)</span><span class="lang-vi">Chỗ ở</span></span>
                                        </div>
                                        <div
                                            style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-card); border-radius: 8px; padding: 12px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 6px;">
                                            <i class="fa-solid fa-graduation-cap"
                                                style="color: var(--accent-teal); font-size: 1.35rem;"></i>
                                            <span style="font-size: 0.96rem; font-weight: 600;"><span class="lang-ja">教育
                                                    (Education)</span><span class="lang-vi">Giáo dục</span></span>
                                        </div>
                                        <div
                                            style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-card); border-radius: 8px; padding: 12px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 6px;">
                                            <i class="fa-solid fa-utensils"
                                                style="color: var(--accent-teal); font-size: 1.35rem;"></i>
                                            <span style="font-size: 0.96rem; font-weight: 600;"><span class="lang-ja">食糧
                                                    (Food)</span><span class="lang-vi">Lương thực</span></span>
                                        </div>
                                        <div
                                            style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-card); border-radius: 8px; padding: 12px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 6px;">
                                            <i class="fa-solid fa-coins"
                                                style="color: var(--accent-teal); font-size: 1.35rem;"></i>
                                            <span style="font-size: 0.96rem; font-weight: 600;"><span class="lang-ja">収入
                                                    (Income)</span><span class="lang-vi">Thu nhập</span></span>
                                        </div>
                                        <div
                                            style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-card); border-radius: 8px; padding: 12px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 6px;">
                                            <i class="fa-solid fa-seedling"
                                                style="color: var(--accent-teal); font-size: 1.35rem;"></i>
                                            <span style="font-size: 0.96rem; font-weight: 600;"><span
                                                    class="lang-ja">安定した環境</span><span class="lang-vi">Môi trường ổn
                                                    định</span></span>
                                        </div>
                                        <div
                                            style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-card); border-radius: 8px; padding: 12px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 6px;">
                                            <i class="fa-solid fa-tree"
                                                style="color: var(--accent-teal); font-size: 1.35rem;"></i>
                                            <span style="font-size: 0.96rem; font-weight: 600;"><span
                                                    class="lang-ja">持続可能な資源</span><span class="lang-vi">Tài nguyên bền
                                                    vững</span></span>
                                        </div>
                                        <div
                                            style="background: rgba(255,255,255,0.02); border: 1px solid var(--border-card); border-radius: 8px; padding: 12px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 6px;">
                                            <i class="fa-solid fa-scale-balanced"
                                                style="color: var(--accent-teal); font-size: 1.35rem;"></i>
                                            <span style="font-size: 0.96rem; font-weight: 600;"><span
                                                    class="lang-ja">社会的公正と公平</span><span class="lang-vi">Công bằng và
                                                    công lý</span></span>
                                        </div>
                                    </div>
                                </div>

                                <!-- Strategies & Activities -->
                                <div
                                    style="display: grid; grid-template-columns: repeat(auto-fit, minmax(290px, 1fr)); gap: 20px;">
                                    <!-- Strategies -->
                                    <div class="card glass-card"
                                        style="border-top: 3px solid var(--accent-gold); padding: 20px;">
                                        <h4 style="color: var(--accent-gold); font-size: 0.96rem; margin-bottom: 15px;">
                                            <i class="fa-solid fa-bullseye"></i> <span class="lang-ja">基本戦略</span><span
                                                class="lang-vi">Chiến lược cơ bản</span>
                                        </h4>
                                        <div style="display: flex; flex-direction: column; gap: 15px;">
                                            <div
                                                style="background: rgba(255,255,255,0.01); border-left: 3px solid var(--accent-gold); padding: 8px 12px; border-radius: 4px;">
                                                <strong style="color: var(--accent-gold); font-size: 0.96rem;">
                                                    <span class="lang-ja">推奨する (Advocate)</span>
                                                    <span class="lang-vi">Đề xướng (Advocate)</span>
                                                </strong>
                                                <p
                                                    style="font-size: 0.96rem; margin-top: 4px; line-height: 1.8; color: var(--text-secondary);">
                                                    <span class="lang-ja">健康の利点を明らかにすることで、健康的な環境の創造を推進する。</span>
                                                    <span class="lang-vi">Làm rõ những lợi ích của sức khỏe để thúc đẩy
                                                        việc kiến tạo một môi trường lành mạnh.</span>
                                                </p>
                                            </div>
                                            <div
                                                style="background: rgba(255,255,255,0.01); border-left: 3px solid var(--accent-gold); padding: 8px 12px; border-radius: 4px;">
                                                <strong style="color: var(--accent-gold); font-size: 0.96rem;">
                                                    <span class="lang-ja">可能にする (Enable)</span>
                                                    <span class="lang-vi">Tạo điều kiện (Enable)</span>
                                                </strong>
                                                <p
                                                    style="font-size: 0.96rem; margin-top: 4px; line-height: 1.8; color: var(--text-secondary);">
                                                    <span
                                                        class="lang-ja">健康のための機会や資源を確保することで、健康面での潜在能力を引き出せるようにする。</span>
                                                    <span class="lang-vi">Đảm bảo các cơ hội và nguồn lực nhằm khai phá
                                                        tiềm năng về mặt sức khỏe của con người.</span>
                                                </p>
                                            </div>
                                            <div
                                                style="background: rgba(255,255,255,0.01); border-left: 3px solid var(--accent-gold); padding: 8px 12px; border-radius: 4px;">
                                                <strong style="color: var(--accent-gold); font-size: 0.96rem;">
                                                    <span class="lang-ja">調停する (Mediate)</span>
                                                    <span class="lang-vi">Điều phối (Mediate)</span>
                                                </strong>
                                                <p
                                                    style="font-size: 0.96rem; margin-top: 4px; line-height: 1.8; color: var(--text-secondary);">
                                                    <span
                                                        class="lang-ja">健康の追求において利害関係の対立する立場を仲立ちし、健康づくりにむけた妥協点を模索する。</span>
                                                    <span class="lang-vi">Đứng ra làm trung gian giữa các nhóm có lợi
                                                        ích đối lập để tìm kiếm điểm thỏa hiệp hướng tới việc xây dựng
                                                        sức khỏe.</span>
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Activities -->
                                    <div class="card glass-card" style="border-top: 3px solid #3b82f6; padding: 20px;">
                                        <h4 style="color: #93c5fd; font-size: 0.96rem; margin-bottom: 15px;"><i
                                                class="fa-solid fa-map"></i> <span class="lang-ja">活動領域</span><span
                                                class="lang-vi">Lĩnh vực hoạt động</span></h4>
                                        <div style="display: flex; flex-direction: column; gap: 12px;">
                                            <div
                                                style="background: rgba(255,255,255,0.01); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.04); display: flex; align-items: flex-start; gap: 10px;">
                                                <i class="fa-solid fa-file-signature"
                                                    style="color: #3b82f6; font-size: 0.96rem; margin-top: 2px;"></i>
                                                <span style="font-size: 0.96rem; line-height: 1.4; width: 100%;">
                                                    <strong style="color: #fff;"><span
                                                            class="lang-ja">保健政策の制定</span><span class="lang-vi">Hoạch
                                                            định chính sách bảo vệ sức khỏe</span></strong>
                                                    <p
                                                        style="font-size: 0.96rem; color: var(--text-secondary); margin-top: 2px; line-height: 1.4;">
                                                        <span class="lang-ja">社会のあらゆる分野で健康を推進する政策を策定する。</span>
                                                        <span class="lang-vi">Ban hành các quyết sách và luật pháp thúc
                                                            đẩy sức khỏe trong mọi lĩnh vực xã hội.</span>
                                                    </p>
                                                </span>
                                            </div>
                                            <div
                                                style="background: rgba(255,255,255,0.01); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.04); display: flex; align-items: flex-start; gap: 10px;">
                                                <i class="fa-solid fa-handshake-angle"
                                                    style="color: #3b82f6; font-size: 0.96rem; margin-top: 2px;"></i>
                                                <span style="font-size: 0.96rem; line-height: 1.4; width: 100%;">
                                                    <strong style="color: #fff;"><span
                                                            class="lang-ja">支援環境の整備</span><span class="lang-vi">Xây dựng
                                                            môi trường hỗ trợ</span></strong>
                                                    <p
                                                        style="font-size: 0.96rem; color: var(--text-secondary); margin-top: 2px; line-height: 1.4;">
                                                        <span class="lang-ja">安全で健康的に暮らし、働ける環境を整える。</span>
                                                        <span class="lang-vi">Tạo lập môi trường sống và làm việc an
                                                            toàn, lành mạnh.</span>
                                                    </p>
                                                </span>
                                            </div>
                                            <div
                                                style="background: rgba(255,255,255,0.01); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.04); display: flex; align-items: flex-start; gap: 10px;">
                                                <i class="fa-solid fa-users"
                                                    style="color: #3b82f6; font-size: 0.96rem; margin-top: 2px;"></i>
                                                <span style="font-size: 0.96rem; line-height: 1.4; width: 100%;">
                                                    <strong style="color: #fff;"><span
                                                            class="lang-ja">地域活動の強化</span><span class="lang-vi">Tăng
                                                            cường các hoạt động cộng đồng</span></strong>
                                                    <p
                                                        style="font-size: 0.96rem; color: var(--text-secondary); margin-top: 2px; line-height: 1.4;">
                                                        <span class="lang-ja">地域住民が自ら健康課題に取り組むよう支援する。</span>
                                                        <span class="lang-vi">Trao quyền cho cộng đồng tự chủ động lập
                                                            kế hoạch và hành động vì sức khỏe.</span>
                                                    </p>
                                                </span>
                                            </div>
                                            <div
                                                style="background: rgba(255,255,255,0.01); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.04); display: flex; align-items: flex-start; gap: 10px;">
                                                <i class="fa-solid fa-book-open-reader"
                                                    style="color: #3b82f6; font-size: 0.96rem; margin-top: 2px;"></i>
                                                <span style="font-size: 0.96rem; line-height: 1.4; width: 100%;">
                                                    <strong style="color: #fff;"><span
                                                            class="lang-ja">個人スキルの開発</span><span class="lang-vi">Phát
                                                            triển kỹ năng cá nhân</span></strong>
                                                    <p
                                                        style="font-size: 0.96rem; color: var(--text-secondary); margin-top: 2px; line-height: 1.4;">
                                                        <span class="lang-ja">情報スキルや教育スキルを通じて自己管理能力を育てる。</span>
                                                        <span class="lang-vi">Nâng cao năng lực tự quản lý sức khỏe suốt
                                                            đời thông qua kỹ năng thông tin và giáo dục.</span>
                                                    </p>
                                                </span>
                                            </div>
                                            <div
                                                style="background: rgba(255,255,255,0.01); padding: 8px 12px; border-radius: 6px; border: 1px solid rgba(255,255,255,0.04); display: flex; align-items: flex-start; gap: 10px;">
                                                <i class="fa-solid fa-house-medical-circle-check"
                                                    style="color: #3b82f6; font-size: 0.96rem; margin-top: 2px;"></i>
                                                <span style="font-size: 0.96rem; line-height: 1.4; width: 100%;">
                                                    <strong style="color: #fff;"><span
                                                            class="lang-ja">医療の再設定</span><span class="lang-vi">Tái định
                                                            hướng các dịch vụ y tế</span></strong>
                                                    <p
                                                        style="font-size: 0.96rem; color: var(--text-secondary); margin-top: 2px; line-height: 1.4;">
                                                        <span class="lang-ja">疾病の予防と健康づくりのため、医療システムを再調整する。</span>
                                                        <span class="lang-vi">Chuyển dịch hệ thống y tế hướng tới mục
                                                            đích phòng bệnh và nâng cao sức khỏe.</span>
                                                    </p>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <script>
                            document.querySelectorAll('[data-concept-tab]').forEach(btn => {
                                btn.addEventListener('click', () => {
                                    document.querySelectorAll('[data-concept-tab]').forEach(b => b.classList.remove('active'));
                                    btn.classList.add('active');
                                    const tab = btn.getAttribute('data-concept-tab');
                                    document.querySelectorAll('.concept-pane').forEach(pane => {
                                        pane.style.display = pane.id === 'concept-pane-' + tab ? 'block' : 'none';
                                    });
                                });
                            });
                        </script>
                    </div>
                </section>

                <!-- 2. PREVENTIVE MEDICINE -->
                <section id="preventive-medicine" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">予防医学</span>
                            <span class="lang-vi">Y học dự phòng</span>
                        </div>
                        <h2 class="section-title">
                            <span class="lang-ja">予防医学の3段階</span>
                            <span class="lang-vi">3 cấp độ của Y học dự phòng</span>
                        </h2>
                        <p class="section-desc">
                            <span class="lang-ja">「予防医学」の観点から、医療政策はより広い意味で、疾病予防、障害予防、寿命の延長、身体的・精神的健康の増進を基本としています。</span>
                            <span class="lang-vi">Từ góc độ "Y học dự phòng", chính sách y tế mang một ý nghĩa rộng lớn,
                                lấy nền tảng cơ bản là: phòng ngừa bệnh tật, phòng ngừa khuyết tật, kéo dài tuổi thọ, và
                                nâng cao sức khỏe cả về thể chất lẫn tinh thần.</span>
                        </p>

                        <!-- Symmetrical Side-by-Side layout on Desktop, Stacked on Mobile -->
                        <div class="preventive-grid">
                            <!-- Left Column: Buttons -->
                            <div style="display: flex; flex-direction: column; gap: 12px; width: 100%;">
                                <div class="chart-segment segment-pension active" data-prev-lvl="1"
                                    style="border-left: 6px solid #10b981; margin: 0; cursor: pointer; padding: 15px; border-radius: 8px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-card); border-left-width: 6px; display: flex; align-items: center; min-height: 55px;">
                                    <span class="segment-label"
                                        style="font-weight: 600; font-size: 0.96rem; color: #fff;">
                                        <span class="lang-ja">一次予防 (Primary)</span>
                                        <span class="lang-vi">Dự phòng cấp 1</span>
                                    </span>
                                </div>
                                <div class="chart-segment segment-medical" data-prev-lvl="2"
                                    style="border-left: 6px solid #f59e0b; margin: 0; cursor: pointer; padding: 15px; border-radius: 8px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-card); border-left-width: 6px; display: flex; align-items: center; min-height: 55px;">
                                    <span class="segment-label"
                                        style="font-weight: 600; font-size: 0.96rem; color: #fff;">
                                        <span class="lang-ja">二次予防 (Secondary)</span>
                                        <span class="lang-vi">Dự phòng cấp 2</span>
                                    </span>
                                </div>
                                <div class="chart-segment segment-welfare" data-prev-lvl="3"
                                    style="border-left: 6px solid #ef4444; margin: 0; cursor: pointer; padding: 15px; border-radius: 8px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-card); border-left-width: 6px; display: flex; align-items: center; min-height: 55px;">
                                    <span class="segment-label"
                                        style="font-weight: 600; font-size: 0.96rem; color: #fff;">
                                        <span class="lang-ja">三次予防 (Tertiary)</span>
                                        <span class="lang-vi">Dự phòng cấp 3</span>
                                    </span>
                                </div>
                            </div>

                            <!-- Right Column: Details Card -->
                            <div class="card glass-card info-card" id="prev-lvl-info"
                                style="margin: 0; background: rgba(255,255,255,0.02); padding: 22px; min-height: 190px; width: 100%; display: flex; flex-direction: column; justify-content: flex-start; box-sizing: border-box;">
                                <h4 id="prev-lvl-title"
                                    style="margin-top: 0; color: #10b981; font-size: 0.96rem; line-height: 1.4; display: flex; align-items: center; gap: 8px;">
                                    一次予防：健康増進・疾病予防・事故予防</h4>
                                <p id="prev-lvl-body"
                                    style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary); margin-top: 10px; margin-bottom: 0; white-space: pre-line;">
                                    健康な人を対象に、生活習慣や環境の改善、予防接種等を通じて、病気やケガを未然に防ぎます。</p>
                            </div>
                        </div>

                        <!-- Modern Trend Note -->
                        <div class="tip-box" style="margin-top: 25px; border-left-color: var(--accent-teal);">
                            <i class="fa-solid fa-circle-info" style="color: var(--accent-teal);"></i>
                            <span>
                                <span
                                    class="lang-ja"><strong>現代の政策動向：</strong>21世紀における国民健康づくり運動（「健康日本21」など）では、従来にも増して、発病を予防する<strong>「一次予防」に重点を置いた対策</strong>（一次予防重視）が強力に推進されています。</span>
                                <span class="lang-vi"><strong>Xu hướng hiện đại:</strong> Trong bối cảnh thế kỷ 21, các
                                    phong trào y tế quốc gia (như "Health Japan 21") đang đặc biệt chú trọng và chuyển
                                    dịch trọng tâm mạnh mẽ vào <strong>Dự phòng cấp 1 (一次予防重視)</strong> để ngăn chặn
                                    phát bệnh ngay từ đầu.</span>
                            </span>
                        </div>
                    </div>
                </section>

                <!-- 3. CHALLENGES -->
                <section id="sbo111-challenges" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">少子高齢化と生活習慣病</span>
                            <span class="lang-vi">Thách thức: Già hóa dân số và Bệnh lối sống</span>
                        </div>
                        <h2 class="section-title">
                            <span class="lang-ja">超高齢社会の到来と疾病構造の変容</span>
                            <span class="lang-vi">Già hóa dân số & Dịch chuyển cơ cấu bệnh tật</span>
                        </h2>
                        <p class="section-desc">
                            <span class="lang-ja">世界最速で進む少子高齢化と、急増する非感染性疾患（NCDs）が医療体制に深刻な課題を突きつけています。</span>
                            <span class="lang-vi">Tình trạng già hóa dân số đi kèm tỷ lệ sinh giảm kết hợp sự gia tăng
                                các bệnh mãn tính (NCDs) đang đặt ra thách thức lớn.</span>
                        </p>

                        <!-- Symmetrical 2x2 Grid of 4 Cards -->
                        <div class="grid-2col" style="gap: 20px;">
                            <!-- Card 1: 少子高齢化 -->
                            <div class="card glass-card"
                                style="border-left: 5px solid var(--accent-teal); padding: 22px;">
                                <h3
                                    style="color: var(--accent-teal); margin-bottom: 12px; display: flex; align-items: center; gap: 8px; font-size: 0.96rem;">
                                    <i class="fa-solid fa-people-down"></i>
                                    <span class="lang-ja">少子高齢化の進行</span>
                                    <span class="lang-vi">Già hóa dân số và tỷ lệ sinh giảm</span>
                                </h3>
                                <div style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary);">
                                    <div class="lang-ja">
                                        <p style="margin: 0 0 8px 0;">•
                                            <strong>平均寿命の上昇と出生率低下：</strong>医学や医療技術の向上により寿命が延びる一方、少子化が進み高齢化比率が増大しています。
                                        </p>
                                        <p style="margin: 0;">•
                                            <strong>財政的課題：</strong>生産年齢人口の減少と高齢者急増に伴い、国民医療費の負担増が国家的な問題となっています。
                                        </p>
                                    </div>
                                    <div class="lang-vi">
                                        <p style="margin: 0 0 8px 0;">• <strong>Tuổi thọ tăng &amp; Sinh giảm:</strong>
                                            Tuổi thọ trung bình tăng lên nhờ sự phát triển y học, nhưng tỷ lệ sinh sụt
                                            giảm khiến tỷ lệ người cao tuổi tăng nhanh.</p>
                                        <p style="margin: 0;">• <strong>Gánh nặng tài chính:</strong> Lực lượng lao động
                                            co hẹp trong khi lượng người già tăng vọt tạo áp lực lớn lên chi phí y tế
                                            quốc gia (国民医療費).</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Card 2: 疾病構造の変化 -->
                            <div class="card glass-card"
                                style="border-left: 5px solid var(--accent-gold); padding: 22px;">
                                <h3
                                    style="color: var(--accent-gold); margin-bottom: 12px; display: flex; align-items: center; gap: 8px; font-size: 0.96rem;">
                                    <i class="fa-solid fa-heart-crack"></i>
                                    <span class="lang-ja">疾病構造の変化と生活習慣病の増加</span>
                                    <span class="lang-vi">Thay đổi cấu trúc bệnh &amp; Bệnh lối sống</span>
                                </h3>
                                <div style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary);">
                                    <div class="lang-ja">
                                        <p style="margin: 0 0 8px 0;">•
                                            <strong>生活習慣病の台頭：</strong>疾患の中心が感染症から、がん、心疾患、脳血管疾患などの生活習慣病へシフトしています。
                                        </p>
                                        <p style="margin: 0;">• <strong>非感染性疾患 (NCD)：</strong>慢性閉塞性肺疾患 (COPD)
                                            や糖尿病など、長期の管理や療養が必要な疾患が大部分を占めています。</p>
                                    </div>
                                    <div class="lang-vi">
                                        <p style="margin: 0 0 8px 0;">• <strong>Dịch chuyển cấu trúc bệnh:</strong> Cơ
                                            cấu bệnh dịch chuyển từ bệnh truyền nhiễm sang nhóm bệnh lối sống (ung thư,
                                            tim mạch, đột quỵ, tiểu đường...).</p>
                                        <p style="margin: 0;">• <strong>Bệnh không lây nhiễm (NCD):</strong> Các bệnh
                                            như phổi tắc nghẽn mạn tính (COPD) đòi hỏi việc quản lý, điều trị và chăm
                                            sóc y tế lâu dài.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Card 3: 要介護者の増加 -->
                            <div class="card glass-card" style="border-left: 5px solid #ef4444; padding: 22px;">
                                <h3
                                    style="color: #f87171; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; font-size: 0.96rem;">
                                    <i class="fa-solid fa-wheelchair"></i>
                                    <span class="lang-ja">要介護者等の増加</span>
                                    <span class="lang-vi">Gia tăng người cần chăm sóc điều dưỡng</span>
                                </h3>
                                <div style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary);">
                                    <div class="lang-ja">
                                        <p style="margin: 0 0 8px 0;">•
                                            <strong>日常生活の制限：</strong>生活習慣病の悪化に伴い、日常生活が制限される高齢者が増えています。
                                        </p>
                                        <p style="margin: 0;">•
                                            <strong>社会保障への圧力：</strong>認知症や寝たきり状態の「要介護者」が増加し、社会的な介護提供体制の確保が急務です。
                                        </p>
                                    </div>
                                    <div class="lang-vi">
                                        <p style="margin: 0 0 8px 0;">• <strong>Hạn chế hoạt động:</strong> Bệnh lối
                                            sống tiến triển làm suy giảm thể trạng, gây khó khăn cho việc tự sinh hoạt
                                            hàng ngày.</p>
                                        <p style="margin: 0;">• <strong>Áp lực lên an sinh:</strong> Lượng người cần
                                            chăm sóc điều dưỡng (sa sút trí tuệ, nằm liệt giường) tăng mạnh, gây áp lực
                                            cực lớn lên hệ thống.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Card 4: 解決への方向性 -->
                            <div class="card glass-card" style="border-left: 5px solid #3b82f6; padding: 22px;">
                                <h3
                                    style="color: #93c5fd; margin-bottom: 12px; display: flex; align-items: center; gap: 8px; font-size: 0.96rem;">
                                    <i class="fa-solid fa-circle-chevron-right"></i>
                                    <span class="lang-ja">解決への方向性：一次予防と健康寿命の延伸</span>
                                    <span class="lang-vi">Hướng giải quyết và kéo dài tuổi thọ khỏe mạnh</span>
                                </h3>
                                <div style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary);">
                                    <div class="lang-ja">
                                        <p style="margin: 0 0 8px 0;">•
                                            <strong>一次予防への注力：</strong>病気になった後の治療だけではなく、食事や運動習慣の改善により発病そのものを防ぐ対策を推進します。
                                        </p>
                                        <p style="margin: 0;">•
                                            <strong>健康寿命の延伸：</strong>介護や生活制限を受けずに自立して元気に生活できる期間を最大限延ばすことが究極の目標です。
                                        </p>
                                    </div>
                                    <div class="lang-vi">
                                        <p style="margin: 0 0 8px 0;">• <strong>Tập trung Dự phòng cấp 1:</strong> Thay
                                            vì chỉ điều trị khi có bệnh, cần cải thiện lối sống để ngăn ngừa nguy cơ
                                            khởi phát bệnh ngay từ đầu.</p>
                                        <p style="margin: 0;">• <strong>Kéo dài tuổi thọ khỏe mạnh:</strong> Mục tiêu
                                            cốt lõi là giúp người dân sống vui khỏe, tự lập và không bị giới hạn bởi
                                            bệnh tật (健康寿命).</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- 4. HEALTH JAPAN 21 -->
                <section id="kenko-nippon-21" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">健康日本21</span>
                            <span class="lang-vi">Chính sách ứng phó: "Health Japan 21"</span>
                        </div>
                        <h2 class="section-title">
                            <span class="lang-ja">健康日本21（第二次）の背景と基本方向</span>
                            <span class="lang-vi">Bối cảnh &amp; 5 định hướng của Kenkou Nippon 21 (Lần 2)</span>
                        </h2>
                        <p class="section-desc">
                            <span
                                class="lang-ja">2000年開始の「健康日本21」は一次予防に重点を置いた総合的対策。2013年開始の第二次では、健康寿命の延伸や格差縮小を含めた5つの基本方向が掲げられました。</span>
                            <span class="lang-vi">Phong trào "Health Japan 21" bắt đầu từ năm 2000 tập trung vào phòng
                                ngừa cấp 1. Giai đoạn 2 (từ 2013) mở rộng ra 5 định hướng cốt lõi cho y tế quốc
                                gia.</span>
                        </p>

                        <!-- Background & Ultimate Goal Card -->
                        <div class="card glass-card"
                            style="padding: 24px; margin-bottom: 25px; border-left: 5px solid var(--accent-teal);">
                            <h3
                                style="color: var(--accent-teal); margin-bottom: 12px; font-size: 0.96rem; display: flex; align-items: center; gap: 8px;">
                                <i class="fa-solid fa-circle-info"></i>
                                <span class="lang-ja">運動の背景と最大の目標</span>
                                <span class="lang-vi">Bối cảnh và Mục tiêu cốt lõi</span>
                            </h3>
                            <div style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary);">
                                <div class="lang-ja">
                                    <p style="margin: 0 0 8px 0;">•
                                        <strong>背景：</strong>わが国は長寿国となりましたが、急速な高齢化に伴い生活習慣病（がん、心疾患、脳卒中、糖尿病等）が増加し、要介護者等の増大が深刻な社会問題となっています。
                                    </p>
                                    <p style="margin: 0;">•
                                        <strong>最大の目標：</strong>病気になってから治療するのではなく、発病そのものを予防する<strong>「一次予防」</strong>に重点を置き、壮年期死亡の減少や、制限なく自立して暮らせる<strong>「健康寿命」の延伸</strong>を目指します。
                                    </p>
                                </div>
                                <div class="lang-vi">
                                    <p style="margin: 0 0 8px 0;">• <strong>Bối cảnh:</strong> Nhật Bản có tuổi thọ
                                        trung bình cao, nhưng già hóa nhanh kéo theo bệnh lối sống (ung thư, tim mạch,
                                        tiểu đường, đột quỵ) tăng mạnh, gia tăng nghiêm trọng số người cần chăm sóc điều
                                        dưỡng.</p>
                                    <p style="margin: 0;">• <strong>Mục tiêu cốt lõi:</strong> Thay vì chờ có bệnh mới
                                        chữa, phong trào chuyển trọng tâm sang <strong>"Dự phòng cấp 1" (一次予防)</strong>
                                        để ngừa bệnh từ đầu, hướng tới <strong>kéo dài "tuổi thọ khỏe mạnh"
                                            (健康寿命)</strong>.</p>
                                </div>
                            </div>
                        </div>

                        <!-- 5 Basic Directions Card -->
                        <div class="card glass-card" style="padding: 28px;">
                            <h3
                                style="margin-top: 0; margin-bottom: 20px; font-size: 0.96rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px;">
                                <i class="fa-solid fa-compass"
                                    style="color: var(--accent-gold); margin-right: 8px;"></i>
                                <span class="lang-ja">「健康日本21（第二次）」における5つの基本的な方向性</span>
                                <span class="lang-vi">5 Phương hướng cơ bản của "Health Japan 21 (Giai đoạn 2)"</span>
                            </h3>

                            <div style="display: flex; flex-direction: column; gap: 20px;">
                                <!-- Direction 1 -->
                                <div style="display: flex; gap: 16px; align-items: flex-start;">
                                    <div
                                        style="min-width: 36px; height: 36px; border-radius: 50%; background: rgba(20,184,166,0.15); border: 2px solid var(--accent-teal); display: flex; align-items: center; justify-content: center; color: var(--accent-teal);">
                                        <i class="fa-solid fa-heart-pulse" style="font-size: 1rem;"></i>
                                    </div>
                                    <div>
                                        <h5
                                            style="color: var(--accent-teal); margin: 0 0 5px; font-size: 0.96rem; font-weight: 600;">
                                            <span class="lang-ja">健康寿命の延伸と健康格差の縮小</span>
                                            <span class="lang-vi">Kéo dài tuổi thọ khỏe mạnh và thu hẹp khoảng cách sức
                                                khỏe</span>
                                        </h5>
                                        <p
                                            style="font-size: 0.96rem; color: var(--text-secondary); margin: 0; line-height: 1.8;">
                                            <span
                                                class="lang-ja">日常生活が制限されることなく生活できる期間（健康寿命）の延伸と、地域や社会経済状況の違いによる集団間の健康格差の縮小を実現します。</span>
                                            <span class="lang-vi">Kéo dài thời gian sống khỏe mạnh và giảm thiểu khoảng
                                                cách sức khỏe sinh ra do sự khác biệt về khu vực hoặc điều kiện kinh tế
                                                xã hội.</span>
                                        </p>
                                    </div>
                                </div>

                                <div style="height: 1px; background: rgba(255,255,255,0.05);"></div>

                                <!-- Direction 2 -->
                                <div style="display: flex; gap: 16px; align-items: flex-start;">
                                    <div
                                        style="min-width: 36px; height: 36px; border-radius: 50%; background: rgba(245,158,11,0.15); border: 2px solid var(--accent-gold); display: flex; align-items: center; justify-content: center; color: var(--accent-gold);">
                                        <i class="fa-solid fa-shield-heart" style="font-size: 1rem;"></i>
                                    </div>
                                    <div>
                                        <h5
                                            style="color: var(--accent-gold); margin: 0 0 5px; font-size: 0.96rem; font-weight: 600;">
                                            <span class="lang-ja">生活習慣病の発症予防と重症化予防の徹底</span>
                                            <span class="lang-vi">Phòng ngừa triệt để sự phát bệnh và trở nặng của bệnh
                                                lối sống (NCDs)</span>
                                        </h5>
                                        <p
                                            style="font-size: 0.96rem; color: var(--text-secondary); margin: 0; line-height: 1.8;">
                                            <span
                                                class="lang-ja">NCD（非感染性疾患：がん、循環器疾患、糖尿病及びCOPD）に対処するため、一次予防に重点を置いた対策を推進するとともに、合併症の発症や症状の進展等の重症化予防を徹底します。</span>
                                            <span class="lang-vi">Tập trung phòng ngừa dự phòng cấp 1 và ngăn chặn sự
                                                tiến triển nặng của các bệnh không lây nhiễm (ung thư, bệnh tim mạch,
                                                tiểu đường và bệnh phổi tắc nghẽn mạn tính COPD).</span>
                                        </p>
                                    </div>
                                </div>

                                <div style="height: 1px; background: rgba(255,255,255,0.05);"></div>

                                <!-- Direction 3 -->
                                <div style="display: flex; gap: 16px; align-items: flex-start;">
                                    <div
                                        style="min-width: 36px; height: 36px; border-radius: 50%; background: rgba(16,185,129,0.15); border: 2px solid #10b981; display: flex; align-items: center; justify-content: center; color: #10b981;">
                                        <i class="fa-solid fa-people-roof" style="font-size: 1rem;"></i>
                                    </div>
                                    <div>
                                        <h5
                                            style="color: #34d399; margin: 0 0 5px; font-size: 0.96rem; font-weight: 600;">
                                            <span class="lang-ja">社会生活を営むために必要な機能の維持及び向上</span>
                                            <span class="lang-vi">Duy trì và nâng cao các chức năng cần thiết để duy trì
                                                cuộc sống xã hội</span>
                                        </h5>
                                        <p
                                            style="font-size: 0.96rem; color: var(--text-secondary); margin: 0; line-height: 1.8;">
                                            <span
                                                class="lang-ja">乳幼児期から高齢期まで、それぞれのライフステージにおいて心身機能の維持向上に努め、「こころの健康づくり」に取り組みます。</span>
                                            <span class="lang-vi">Hỗ trợ duy trì chức năng tâm sinh lý từ lúc sơ sinh
                                                đến khi cao tuổi để con người sống tự lập, đồng thời tập trung vào "sức
                                                khỏe tinh thần" (こころの健康づくり).</span>
                                        </p>
                                    </div>
                                </div>

                                <div style="height: 1px; background: rgba(255,255,255,0.05);"></div>

                                <!-- Direction 4 -->
                                <div style="display: flex; gap: 16px; align-items: flex-start;">
                                    <div
                                        style="min-width: 36px; height: 36px; border-radius: 50%; background: rgba(239,68,68,0.15); border: 2px solid #ef4444; display: flex; align-items: center; justify-content: center; color: #f87171;">
                                        <i class="fa-solid fa-handshake-angle" style="font-size: 1rem;"></i>
                                    </div>
                                    <div>
                                        <h5
                                            style="color: #f87171; margin: 0 0 5px; font-size: 0.96rem; font-weight: 600;">
                                            <span class="lang-ja">健康を支え、守るための社会環境の整備</span>
                                            <span class="lang-vi">Xây dựng môi trường xã hội hỗ trợ và bảo vệ sức
                                                khỏe</span>
                                        </h5>
                                        <p
                                            style="font-size: 0.96rem; color: var(--text-secondary); margin: 0; line-height: 1.8;">
                                            <span
                                                class="lang-ja">行政機関のみならず、企業、民間団体等の積極的な参加協力を得て、社会全体が相互に支え合いながら国民の健康を守る環境を整備します。</span>
                                            <span class="lang-vi">Huy động sự tham gia của các tổ chức hành chính, doanh
                                                nghiệp và cộng đồng để tạo ra một môi trường tương trợ lẫn nhau, hỗ trợ
                                                nâng cao sức khỏe cho người dân.</span>
                                        </p>
                                    </div>
                                </div>

                                <div style="height: 1px; background: rgba(255,255,255,0.05);"></div>

                                <!-- Direction 5 -->
                                <div style="display: flex; gap: 16px; align-items: flex-start;">
                                    <div
                                        style="min-width: 36px; height: 36px; border-radius: 50%; background: rgba(59,130,246,0.15); border: 2px solid #3b82f6; display: flex; align-items: center; justify-content: center; color: #93c5fd;">
                                        <i class="fa-solid fa-person-running" style="font-size: 1rem;"></i>
                                    </div>
                                    <div>
                                        <h5
                                            style="color: #93c5fd; margin: 0 0 5px; font-size: 0.96rem; font-weight: 600;">
                                            <span class="lang-ja">生活習慣及び社会環境の改善</span>
                                            <span class="lang-vi">Cải thiện thói quen sinh hoạt và môi trường xã
                                                hội</span>
                                        </h5>
                                        <p
                                            style="font-size: 0.96rem; color: var(--text-secondary); margin: 0; line-height: 1.8;">
                                            <span
                                                class="lang-ja">栄養・食生活、身体活動・運動、休養、飲酒、喫煙及び歯・口腔の健康に関する生活習慣及び社会環境の改善と、具体的な健康増進活動を推進します。</span>
                                            <span class="lang-vi">Thúc đẩy thay đổi các thói quen cụ thể như dinh dưỡng
                                                và ăn uống, hoạt động thể chất và vận động, nghỉ ngơi, uống rượu, hút
                                                thuốc và sức khỏe răng miệng.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Exam Tips -->
                        <div class="tip-box" style="margin-top: 20px; border-left-color: #f87171;">
                            <i class="fa-solid fa-lightbulb" style="color: #f87171;"></i>
                            <span>
                                <span
                                    class="lang-ja"><strong>試験ポイント：</strong>「健康日本21（第二次）」の基本方向として<u>含まれないもの</u>として問われる場合、「医療費の削減」「病院の統廃合」「公的医療保険の拡充」などが典型的な<em>誤りの選択肢</em>です。基本方向は健康寿命の延伸・格差縮小、生活習慣病の予防、生活習慣の改善の3つが核心。</span>
                                <span class="lang-vi"><strong>Điểm thi:</strong> Khi hỏi điều <u>không thuộc</u> định
                                    hướng cơ bản của Kenkou Nippon 21 (Lần 2), các đáp án sai điển hình là "giảm chi phí
                                    y tế", "sáp nhập bệnh viện", "mở rộng bảo hiểm y tế công". Ba trụ cột: Kéo dài tuổi
                                    thọ khỏe mạnh, Phòng bệnh lối sống, Cải thiện lối sống.</span>
                            </span>
                        </div>
                    </div>
                </section>

                <!-- 5. SPECIFIC CHECKUPS & DATA HEALTH REFORM -->
                <section id="sbo111-data-health-reform" class="section">
                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">特定健診とデータヘルス改革</span>
                            <span class="lang-vi">Khám sức khỏe đặc định &amp; Cải cách dữ liệu sức khỏe</span>
                        </div>
                        <h2 class="section-title">
                            <span class="lang-ja">特定健診・保健指導とデータヘルス改革</span>
                            <span class="lang-vi">Khám sức khỏe đặc định và Cải cách Dữ liệu sức khỏe</span>
                        </h2>
                        <p class="section-desc">
                            <span
                                class="lang-ja">メタボリックシンドロームに着目した予防介入（特定健診）と、ビッグデータを活用した効率的な健康増進事業（データヘルス改革）の推進。</span>
                            <span class="lang-vi">Kết hợp sàng lọc phòng ngừa tích cực (Khám sức khỏe đặc định) và thúc
                                đẩy nâng cao sức khỏe cộng đồng qua dữ liệu lớn (Cải cách dữ liệu sức khỏe).</span>
                        </p>

                        <!-- Row 1: Detailed Bilingual Information Cards -->
                        <div class="grid-2col" style="gap: 20px; margin-bottom: 20px;">
                            <!-- Card 1: 特定健康診査・特定保健指導 -->
                            <div class="card glass-card"
                                style="border-left: 5px solid var(--accent-teal); padding: 22px;">
                                <h3
                                    style="color: var(--accent-teal); margin-top: 0; margin-bottom: 12px; font-size: 0.96rem; display: flex; align-items: center; gap: 8px;">
                                    <i class="fa-solid fa-notes-medical"></i>
                                    <span class="lang-ja">特定健康診査・特定保健指導</span>
                                    <span class="lang-vi">Khám sức khỏe đặc định &amp; Chỉ đạo sức khỏe đặc định</span>
                                </h3>
                                <div style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary);">
                                    <div class="lang-ja">
                                        <p style="margin: 0 0 8px 0;">•
                                            <strong>目的と対象：</strong>2008年4月から開始され、40歳から74歳までの公的医療保険加入者を対象として実施。メタボリックシンドロームに焦点をあて、生活習慣病予防により医療費の抑制を図ります。
                                        </p>
                                        <p style="margin: 0;">•
                                            <strong>財政的インセンティブ：</strong>健診受診率や保健指導実施率の目標到達度に応じて、各保険者から後期高齢者医療制度への支援金が加算・減算（ペナルティ/インセンティブ）される仕組みが導入されています。
                                        </p>
                                    </div>
                                    <div class="lang-vi">
                                        <p style="margin: 0 0 8px 0;">• <strong>Mục đích &amp; Đối tượng:</strong> Triển
                                            khai từ 4/2008 cho nhóm 40-74 tuổi tham gia bảo hiểm y tế. Tập trung vào hội
                                            chứng chuyển hóa (Metabolic syndrome), phát hiện sớm béo phì, cao huyết áp,
                                            đường huyết cao để kiềm chế chi phí y tế.</p>
                                        <p style="margin: 0;">• <strong>Cơ chế tài chính:</strong> Kết quả受診率 (tỷ lệ
                                            khám) và thực hiện chỉ đạo sức khỏe được sử dụng để điều chỉnh (tăng hoặc
                                            giảm) mức đóng góp tài chính của hiệp hội bảo hiểm cho hệ thống y tế người
                                            cao tuổi.</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Card 2: データヘルス改革 -->
                            <div class="card glass-card"
                                style="border-left: 5px solid var(--accent-gold); padding: 22px;">
                                <h3
                                    style="color: var(--accent-gold); margin-top: 0; margin-bottom: 12px; font-size: 0.96rem; display: flex; align-items: center; gap: 8px;">
                                    <i class="fa-solid fa-server"></i>
                                    <span class="lang-ja">データヘルス改革の背景と期待される効果</span>
                                    <span class="lang-vi">Cải cách dữ liệu sức khỏe &amp; Hiệu quả kì vọng</span>
                                </h3>
                                <div style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary);">
                                    <div class="lang-ja">
                                        <p style="margin: 0 0 8px 0;">• <strong>概念と背景：</strong>Society
                                            5.0実現に向け2017年から推進。2020年7月に「データヘルス集中改革プラン」を公表し、健康・医療・介護分野のビッグデータプラットフォームの構築と利活用を推進します。
                                        </p>
                                        <p style="margin: 0;">•
                                            <strong>期待される効果：</strong>AI等の解析を用いることで、効果的な予防プログラムの提供、個人に最適化された医療（PHR）の推進、エビデンスに基づく医療政策の立案を行います。
                                        </p>
                                    </div>
                                    <div class="lang-vi">
                                        <p style="margin: 0 0 8px 0;">• <strong>Khái niệm &amp; Bối cảnh:</strong> Thúc
                                            đẩy từ 2017 hướng tới Society 5.0. Công bố "Kế hoạch cải cách tập trung dữ
                                            liệu sức khỏe" 7/2020 xây dựng hệ thống thu thập Dữ liệu lớn (Big Data)
                                            trong y tế, điều dưỡng.</p>
                                        <p style="margin: 0;">• <strong>Hiệu quả kỳ vọng:</strong> Áp dụng trí tuệ nhân
                                            tạo (AI) để phân tích dữ liệu giúp phòng bệnh hiệu quả, cá nhân hóa y tế và
                                            hoạch định chính sách dựa trên bằng chứng thực tế.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Row 2: Interactive Components and Database Lists -->
                        <div class="grid-2col" style="gap: 20px; align-items: stretch;">
                            <!-- Card 3: Specific Checkup Simulator -->
                            <div class="card glass-card" style="padding: 24px; display: flex; flex-direction: column;">
                                <h3
                                    style="margin-top: 0; margin-bottom: 8px; font-size: 0.96rem; color: #fff; display: flex; align-items: center; gap: 8px;">
                                    <i class="fa-solid fa-laptop-code" style="color: var(--accent-teal);"></i>
                                    <span class="lang-ja">特定健診の階層化シミュレーター</span>
                                    <span class="lang-vi">Trình mô phỏng phân tầng rủi ro khám sức khỏe đặc định</span>
                                </h3>
                                <p class="small-desc" style="margin-bottom: 15px;">
                                    <span class="lang-ja">患者の健診データをチェックして、保健指導の階層を自動判定します（40〜74歳が対象）。</span>
                                    <span class="lang-vi">Đánh giá phân tầng hướng dẫn sức khỏe dựa trên các tiêu chí
                                        (đối tượng 40-74 tuổi).</span>
                                </p>

                                <div class="stratification-simulator"
                                    style="background: rgba(0,0,0,0.12); padding: 16px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.04); flex-grow: 1; display: flex; flex-direction: column; justify-content: space-between;">
                                    <div>
                                        <div class="sim-input-group">
                                            <label class="checklist-item">
                                                <input type="checkbox" class="strat-checkbox" id="check-waist">
                                                <span class="checkbox-custom"></span>
                                                <span class="item-text" style="font-size: 0.96rem;">
                                                    <span class="lang-ja">腹囲：男性 85cm以上 / 女性 90cm以上 (内臓脂肪蓄積)</span>
                                                    <span class="lang-vi">Vòng bụng: Nam ≥ 85cm / Nữ ≥ 90cm (Tích tụ mỡ
                                                        nội tạng)</span>
                                                </span>
                                            </label>
                                            <label class="checklist-item" style="margin-top: 8px;">
                                                <input type="checkbox" class="strat-checkbox" id="check-bmi">
                                                <span class="checkbox-custom"></span>
                                                <span class="item-text" style="font-size: 0.96rem;">
                                                    <span class="lang-ja">BMI 25以上 (肥満基準)</span>
                                                    <span class="lang-vi">BMI ≥ 25 (Tiêu chuẩn béo phì)</span>
                                                </span>
                                            </label>
                                            <label class="checklist-item" style="margin-top: 8px;">
                                                <input type="checkbox" class="strat-checkbox" id="check-age65">
                                                <span class="checkbox-custom"></span>
                                                <span class="item-text" style="font-size: 0.96rem;">
                                                    <span class="lang-ja">年齢：65歳〜74歳 (前期高齢者)</span>
                                                    <span class="lang-vi">Tuổi: 65 ~ 74 tuổi (Người cao tuổi giai đoạn
                                                        đầu)</span>
                                                </span>
                                            </label>
                                        </div>

                                        <div class="sim-input-group"
                                            style="margin-top: 12px; padding-top: 12px; border-top: 1px solid rgba(255,255,255,0.05);">
                                            <p class="small-desc" style="font-size: 0.96rem; margin-bottom: 6px;">
                                                <span class="lang-ja">追加リスク因子 (血圧・血糖・脂質・喫煙):</span>
                                                <span class="lang-vi">Yếu tố nguy cơ bổ sung (Huyết áp, đường huyết, mỡ
                                                    máu, hút thuốc):</span>
                                            </p>
                                            <label class="checklist-item">
                                                <input type="checkbox" class="strat-checkbox" id="check-bp">
                                                <span class="checkbox-custom"></span>
                                                <span class="item-text" style="font-size: 0.96rem;">
                                                    <span class="lang-ja">血圧：収縮期130以上 または 拡張期85以上</span>
                                                    <span class="lang-vi">Huyết áp: Tâm thu ≥ 130 hoặc Tâm trương ≥
                                                        85</span>
                                                </span>
                                            </label>
                                            <label class="checklist-item" style="margin-top: 8px;">
                                                <input type="checkbox" class="strat-checkbox" id="check-bs">
                                                <span class="checkbox-custom"></span>
                                                <span class="item-text" style="font-size: 0.96rem;">
                                                    <span class="lang-ja">血糖：空腹時血糖100以上 または HbA1c 5.6%以上</span>
                                                    <span class="lang-vi">Đường huyết: Đường huyết đói ≥ 100 hoặc HbA1c
                                                        ≥ 5.6%</span>
                                                </span>
                                            </label>
                                            <label class="checklist-item" style="margin-top: 8px;">
                                                <input type="checkbox" class="strat-checkbox" id="check-lipid">
                                                <span class="checkbox-custom"></span>
                                                <span class="item-text" style="font-size: 0.96rem;">
                                                    <span class="lang-ja">脂質：中性脂肪150以上 または HDL 40未満</span>
                                                    <span class="lang-vi">Mỡ máu: Triglyceride ≥ 150 hoặc HDL <
                                                            40</span>
                                                    </span>
                                            </label>
                                            <label class="checklist-item" style="margin-top: 8px;">
                                                <input type="checkbox" class="strat-checkbox" id="check-smoke">
                                                <span class="checkbox-custom"></span>
                                                <span class="item-text" style="font-size: 0.96rem;">
                                                    <span class="lang-ja">喫煙歴：あり（上記リスクが1つ以上ある場合のみカウント）</span>
                                                    <span class="lang-vi">Tiền sử hút thuốc: Có (chỉ tính khi có ít nhất
                                                        1 yếu tố nguy cơ trên)</span>
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <div class="simulator-feedback" id="strat-feedback"
                                        style="display:block; margin-top:15px; padding: 12px; border-radius: 6px; background: rgba(255,255,255,0.02);">
                                        <h5 id="strat-feedback-title"
                                            style="color: var(--accent-teal); margin-top: 0; margin-bottom: 6px; font-size: 0.96rem;">
                                            判定：情報提供 (Information Provision)</h5>
                                        <p id="strat-feedback-body"
                                            style="font-size: 0.96rem; line-height: 1.4; margin: 0; color: var(--text-secondary);">
                                            内臓脂肪蓄積の基準に該当しないか、追加のリスク因子がありません。現状の健康生活を維持するための情報提供のみを行います。</p>
                                    </div>
                                </div>
                            </div>

                            <!-- Card 4: Databases and PHR -->
                            <div class="card glass-card"
                                style="padding: 24px; display: flex; flex-direction: column; justify-content: space-between;">
                                <div>
                                    <h3
                                        style="margin-top: 0; margin-bottom: 12px; font-size: 0.96rem; color: #fff; display: flex; align-items: center; gap: 8px;">
                                        <i class="fa-solid fa-database" style="color: var(--accent-gold);"></i>
                                        <span class="lang-ja">主要データベースの構築と利活用</span>
                                        <span class="lang-vi">Xây dựng &amp; Ứng dụng các Cơ sở dữ liệu chính</span>
                                    </h3>

                                    <div
                                        style="display: flex; flex-direction: column; gap: 8px; font-size: 0.96rem; color: var(--text-secondary); margin-bottom: 15px;">
                                        <div
                                            style="padding: 10px 12px; background: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.02);">
                                            <strong style="color:#fff;">NDB (National Database)</strong>
                                            <p style="margin: 3px 0 0 0; font-size: 0.96rem; line-height: 1.45;">
                                                <span
                                                    class="lang-ja">レセプト情報・特定健診等情報データベース。日本全国の診療報酬明細書（レセプト）や特定健診情報を集約。</span>
                                                <span class="lang-vi">Cơ sở dữ liệu hóa đơn bảo hiểm y tế (Receipt) và
                                                    kết quả khám sức khỏe đặc định trên toàn quốc.</span>
                                            </p>
                                        </div>
                                        <div
                                            style="padding: 10px 12px; background: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.02);">
                                            <strong style="color:#fff;">介護DB</strong>
                                            <p style="margin: 3px 0 0 0; font-size: 0.96rem; line-height: 1.45;">
                                                <span class="lang-ja">介護保険総合データベース。要介護認定や介護サービス利用状況を記録・格納。</span>
                                                <span class="lang-vi">CSDL bảo hiểm chăm sóc dài hạn, ghi nhận mức độ
                                                    cần chăm sóc và các dịch vụ sử dụng.</span>
                                            </p>
                                        </div>
                                        <div
                                            style="padding: 10px 12px; background: rgba(255,255,255,0.03); border-radius: 6px; border: 1px solid rgba(255,255,255,0.02);">
                                            <strong style="color:#fff;">KDB (国保データベース)</strong>
                                            <p style="margin: 3px 0 0 0; font-size: 0.96rem; line-height: 1.45;">
                                                <span class="lang-ja">国民健康保険団体連合会が管理。各自治体の健康づくり事業やデータヘルス計画に直結。</span>
                                                <span class="lang-vi">CSDL Bảo hiểm y tế quốc dân trực thuộc địa phương,
                                                    phục vụ lập kế hoạch y tế.</span>
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div class="tip-box" style="margin-top: 15px; margin-bottom: 0;">
                                    <i class="fa-solid fa-id-card" style="color: var(--accent-gold);"></i>
                                    <span>
                                        <span class="lang-ja"><strong>PHRの推進と患者管理：</strong>国民がマイナポータルやPHR（Personal
                                            Health Record）を通じて自分の医療情報を閲覧・管理できる仕組みが整備されています。</span>
                                        <span class="lang-vi"><strong>Thúc đẩy PHR:</strong> Khuyến khích người dân tự
                                            theo dõi, quản lý hồ sơ sức khỏe cá nhân (PHR) qua cổng dịch vụ công
                                            Mynaportal.</span>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <!-- 6. CONNECTION -->
                <section id="sbo111-integration" class="section">
                    <style>
                        .roadmap-container {
                            display: flex;
                            justify-content: space-between;
                            align-items: center;
                            gap: 15px;
                            margin-bottom: 25px;
                            position: relative;
                            padding: 10px 0;
                        }

                        .roadmap-line {
                            position: absolute;
                            top: 50%;
                            left: 5%;
                            right: 5%;
                            height: 3px;
                            background: rgba(255, 255, 255, 0.08);
                            z-index: 1;
                            transform: translateY(-50%);
                        }

                        .roadmap-step {
                            position: relative;
                            z-index: 2;
                            background: var(--bg-card);
                            border: 1px solid var(--border-card);
                            border-radius: 50%;
                            width: 65px;
                            height: 65px;
                            display: flex;
                            align-items: center;
                            justify-content: center;
                            cursor: pointer;
                            transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                            box-shadow: var(--shadow-sm);
                        }

                        .roadmap-step:hover {
                            transform: scale(1.1);
                            border-color: rgba(255, 255, 255, 0.2);
                        }

                        .roadmap-step.active {
                            transform: scale(1.15);
                            box-shadow: 0 0 20px rgba(45, 212, 191, 0.3);
                        }

                        .roadmap-step i {
                            font-size: 1.5rem;
                            transition: color 0.3s ease;
                        }

                        .roadmap-step[data-step="1"].active {
                            border-color: var(--accent-teal);
                        }

                        .roadmap-step[data-step="1"] i {
                            color: #888;
                        }

                        .roadmap-step[data-step="1"].active i {
                            color: var(--accent-teal);
                        }

                        .roadmap-step[data-step="2"].active {
                            border-color: var(--accent-gold);
                        }

                        .roadmap-step[data-step="2"] i {
                            color: #888;
                        }

                        .roadmap-step[data-step="2"].active i {
                            color: var(--accent-gold);
                        }

                        .roadmap-step[data-step="3"].active {
                            border-color: #3b82f6;
                        }

                        .roadmap-step[data-step="3"] i {
                            color: #888;
                        }

                        .roadmap-step[data-step="3"].active i {
                            color: #60a5fa;
                        }

                        .roadmap-step[data-step="4"].active {
                            border-color: #10b981;
                        }

                        .roadmap-step[data-step="4"] i {
                            color: #888;
                        }

                        .roadmap-step[data-step="4"].active i {
                            color: #34d399;
                        }

                        .roadmap-labels {
                            display: flex;
                            justify-content: space-between;
                            margin-bottom: 20px;
                            padding: 0 10px;
                        }

                        .roadmap-label-item {
                            width: 22%;
                            text-align: center;
                            font-size: 0.96rem;
                            font-weight: 600;
                            color: var(--text-muted);
                            cursor: pointer;
                            transition: color 0.3s ease;
                        }

                        .roadmap-label-item.active {
                            color: #fff;
                        }

                        @media (max-width: 768px) {
                            .roadmap-container {
                                flex-direction: column;
                                height: 320px;
                                justify-content: space-between;
                                align-items: center;
                            }

                            .roadmap-line {
                                top: 5%;
                                bottom: 5%;
                                left: 50%;
                                width: 3px;
                                height: 90%;
                                transform: translateX(-50%);
                            }

                            .roadmap-labels {
                                display: none;
                                /* Hide horizontal labels on mobile, title is inside details card anyway */
                            }

                            .roadmap-step {
                                width: 55px;
                                height: 55px;
                            }
                        }
                    </style>

                    <div class="container">
                        <div class="section-badge">
                            <span class="lang-ja">保健・医療・福祉の関わり</span>
                            <span class="lang-vi">Bảo vệ sức khỏe, Y tế và Phúc lợi</span>
                        </div>
                        <h2 class="section-title">
                            <span class="lang-ja">保健・医療・福祉の三位一体と地域包括ケア</span>
                            <span class="lang-vi">Sự gắn kết hữu cơ giữa Bảo vệ sức khỏe, Y tế và Phúc lợi</span>
                        </h2>
                        <p class="section-desc">
                            <span class="lang-ja">予防（保健）、治療（医療）、そして生活支援（福祉・介護）が統合されて初めて、超高齢社会を支えることができます。</span>
                            <span class="lang-vi">Sự tích hợp liền mạch giữa phòng bệnh (保健), chữa bệnh (医療) và hỗ trợ
                                đời sống (福祉/介護) là chìa khóa thích ứng với xã hội siêu già hóa.</span>
                        </p>

                        <!-- Interactive Roadmap Component -->
                        <div style="width: 100%; margin: 0 0 30px 0;">
                            <div class="roadmap-container">
                                <div class="roadmap-line"></div>
                                <div class="roadmap-step active" data-step="1">
                                    <i class="fa-solid fa-users-line"></i>
                                </div>
                                <div class="roadmap-step" data-step="2">
                                    <i class="fa-solid fa-arrows-spin"></i>
                                </div>
                                <div class="roadmap-step" data-step="3">
                                    <i class="fa-solid fa-circle-nodes"></i>
                                </div>
                                <div class="roadmap-step" data-step="4">
                                    <i class="fa-solid fa-network-wired"></i>
                                </div>
                            </div>

                            <!-- Labels for Desktop -->
                            <div class="roadmap-labels">
                                <div class="roadmap-label-item active" data-step="1">
                                    <span class="lang-ja">① 基本的理念</span><span class="lang-vi">Triết lý cơ bản</span>
                                </div>
                                <div class="roadmap-label-item" data-step="2">
                                    <span class="lang-ja">② 地域完結型への転換</span><span class="lang-vi">Dịch chuyển khu
                                        vực</span>
                                </div>
                                <div class="roadmap-label-item" data-step="3">
                                    <span class="lang-ja">③ 情報ネットワーク</span><span class="lang-vi">Mạng lưới EHR</span>
                                </div>
                                <div class="roadmap-label-item" data-step="4">
                                    <span class="lang-ja">④ 地域包括ケア</span><span class="lang-vi">Chăm sóc toàn diện</span>
                                </div>
                            </div>

                            <!-- Central Details Card -->
                            <div class="card glass-card" id="roadmap-details-card"
                                style="padding: 24px; min-height: 180px; border-left: 5px solid var(--accent-teal); transition: opacity 0.25s ease;">
                                <h3 id="roadmap-card-title"
                                    style="color: var(--accent-teal); margin-top: 0; margin-bottom: 12px; font-size: 0.96rem; display: flex; align-items: center; gap: 8px;">
                                    <i class="fa-solid fa-users-line"></i>
                                    <span class="lang-ja">一連のプロセスとしての健康（基本的理念）</span>
                                    <span class="lang-vi">Sức khỏe là một quá trình liên tục (Triết lý cơ bản)</span>
                                </h3>
                                <div id="roadmap-card-body"
                                    style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary);">
                                    <div class="lang-ja">
                                        <p style="margin: 0 0 8px 0;">•
                                            <strong>包括的ヘルスケア：</strong>健康、医療と介護は人生における一連の経過であり、施設ごとに分断するのではなく統合的なシステムとして構築されるべきです。
                                        </p>
                                        <p style="margin: 0;">•
                                            <strong>法律上の規定：</strong>医療法や社会福祉法にも「医療提供時に福祉サービス等と有機的な連携を図る」ことが明記され、三者の連携が必須となっています。
                                        </p>
                                    </div>
                                    <div class="lang-vi">
                                        <p style="margin: 0 0 8px 0;">• <strong>Hệ thống tích hợp:</strong> Sức khỏe, y
                                            tế và Kaigo (điều dưỡng) là chuỗi liên tục suốt đời, không được chia cắt hay
                                            cô lập theo từng cơ sở đơn lẻ.</p>
                                        <p style="margin: 0;">• <strong>Liên kết pháp lý:</strong> Luật Y tế và Luật
                                            Phúc lợi xã hội Nhật Bản quy định rõ dịch vụ bảo vệ sức khỏe, y tế và phúc
                                            lợi phải "đảm bảo liên kết hữu cơ" với nhau.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- Row 2: The Three Pillars -->
                        <div class="grid-3col" style="gap: 20px; margin-top: 25px;">
                            <div class="card glass-card"
                                style="border-top: 4px solid var(--accent-teal); padding: 20px;">
                                <h4 style="color: var(--accent-teal); margin-bottom: 10px;"><i
                                        class="fa-solid fa-shield-halved"></i> <span class="lang-ja">保健 (Health
                                        Care)</span><span class="lang-vi">Bảo vệ sức khỏe (保健)</span></h4>
                                <p style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary);">
                                    <span class="lang-ja">疾病の予防や健康づくり活動。健康寿命の延伸のための一次・二次予防を担います。</span>
                                    <span class="lang-vi">Y tế dự phòng, hướng dẫn thói quen sống và tiêm chủng nhằm kéo
                                        dài tuổi thọ khỏe mạnh (Dự phòng cấp 1 &amp; 2).</span>
                                </p>
                            </div>
                            <div class="card glass-card" style="border-top: 4px solid #3b82f6; padding: 20px;">
                                <h4 style="color: #3b82f6; margin-bottom: 10px;"><i class="fa-solid fa-user-md"></i>
                                    <span class="lang-ja">医療 (Medical Care)</span><span class="lang-vi">Y tế (医療)</span>
                                </h4>
                                <p style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary);">
                                    <span class="lang-ja">病気や怪我の診断・治療。高度急性期から回復期までの切れ目のない医療の提供。</span>
                                    <span class="lang-vi">Khám, chẩn đoán và điều trị tích cực. Chuyển đổi từ mô hình
                                        chữa trị cô lập sang y tế liên kết khu vực.</span>
                                </p>
                            </div>
                            <div class="card glass-card"
                                style="border-top: 4px solid var(--accent-gold); padding: 20px;">
                                <h4 style="color: var(--accent-gold); margin-bottom: 10px;"><i
                                        class="fa-solid fa-hands-holding"></i> <span class="lang-ja">福祉 (Social
                                        Welfare)</span><span class="lang-vi">Phúc lợi xã hội (福祉)</span></h4>
                                <p style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary);">
                                    <span class="lang-ja">日常生活の支援や介護サービス。健康状態に関わらず尊厳を持って生きるためのサポート。</span>
                                    <span class="lang-vi">Chăm sóc điều dưỡng (Kaigo), hỗ trợ đời sống, tạo điều kiện
                                        cho người cao tuổi sống tự lập đến cuối đời.</span>
                                </p>
                            </div>
                        </div>

                        <!-- Row 3: Final Integration Card -->
                        <div class="card glass-card text-center"
                            style="margin-top: 25px; padding: 25px; border-color: rgba(245, 158, 11, 0.2);">
                            <h3 style="color: var(--accent-gold); margin-bottom: 10px;">
                                <i class="fa-solid fa-network-wired"></i>
                                <span class="lang-ja">最終目標：地域包括ケアシステム構築</span>
                                <span class="lang-vi">Mục tiêu cuối cùng: Xây dựng Hệ thống chăm sóc toàn diện khu
                                    vực</span>
                            </h3>
                            <p
                                style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary); max-width: 800px; margin: 0 auto;">
                                <span
                                    class="lang-ja">これら3分野が有機的に連携し、住み慣れた地域で最期まで自分らしい暮らしを維持できる<strong>「地域包括ケアシステム（地域完結型）」</strong>の構築こそが、超高齢社会に対する我が国の医療政策の究極の到達点です。</span>
                                <span class="lang-vi">Sự kết nối hữu cơ giữa Phòng bệnh, Chữa bệnh và Chăm sóc lâu dài
                                    giúp người cao tuổi có thể sống tại nơi ở quen thuộc đến cuối đời chính là điểm đến
                                    cuối cùng của chính sách y tế hiện đại.</span>
                            </p>
                        </div>

                        <!-- Inline Javascript for Roadmap interaction -->
                        <script>
                            (() => {
                                const roadmapData = {
                                    '1': {
                                        color: 'var(--accent-teal)',
                                        icon: 'fa-users-line',
                                        titleJa: '一連のプロセスとしての健康（基本的理念）',
                                        titleVi: 'Sức khỏe là một quá trình liên tục (Triết lý cơ bản)',
                                        bodyJa: \`<p style="margin: 0 0 8px 0;">• <strong>包括的ヘルスケア：</strong>健康、医療と介護は人生における一連の経過であり、施設ごとに分断するのではなく統合的なシステムとして構築されるべきです。</p>
                                                 <p style="margin: 0;">• <strong>法律上の規定：</strong>医療法や社会福祉法にも「医療提供時に福祉サービス等と有機的な連携を図る」ことが明記され、三者の連携が必須となっています。</p>\`,
                                        bodyVi: \`<p style="margin: 0 0 8px 0;">• <strong>Hệ thống tích hợp:</strong> Sức khỏe, y tế và Kaigo (điều dưỡng) là chuỗi liên tục suốt đời, không được chia cắt hay cô lập theo từng cơ sở đơn lẻ.</p>
                                                 <p style="margin: 0;">• <strong>Liên kết pháp lý:</strong> Luật Y tế và Luật Phúc lợi xã hội Nhật Bản quy định rõ dịch vụ bảo vệ sức khỏe, y tế và phúc lợi phải "đảm bảo liên kết hữu cơ" với nhau.</p>\`
                                    },
                                    '2': {
                                        color: 'var(--accent-gold)',
                                        icon: 'fa-arrows-spin',
                                        titleJa: '「病院完結型」から「地域完結型」への転換',
                                        titleVi: 'Từ "Bệnh viện khép kín" sang "Hoàn thiện tại khu vực"',
                                        bodyJa: \`<p style="margin: 0 0 8px 0;">• <strong>医療ニーズの変容：</strong>高齢化や慢性疾患の増加に伴い、病院の中だけで治療を終わらせる「病院完結型」の医療モデルは限界を迎えています。</p>
                                                 <p style="margin: 0;">• <strong>地域全体での支援：</strong>在宅医療、介護、リハビリテーションを含め、地域全体で患者の生活を「治し支える」医療システムへの移行が必要です。</p>\`,
                                        bodyVi: \`<p style="margin: 0 0 8px 0;">• <strong>Sự thay đổi nhu cầu:</strong> Với sự gia tăng các bệnh mạn tính ở người cao tuổi, mô hình "Bệnh viện khép kín" (vào viện chữa xong về) đã không còn phù hợp.</p>
                                                 <p style="margin: 0;">• <strong>Hoàn thiện tại khu vực:</strong> Chuyển dịch sang mô hình "Hoàn thiện tại khu vực" (地域完結型), huy động toàn bộ cộng đồng cùng vừa chữa trị vừa hỗ trợ sinh hoạt.</p>\`
                                    },
                                    '3': {
                                        color: '#3b82f6',
                                        icon: 'fa-circle-nodes',
                                        titleJa: '連携の基盤となる情報ネットワーク',
                                        titleVi: 'Mạng lưới thông tin làm nền tảng liên kết',
                                        bodyJa: \`<p style="margin: 0 0 8px 0;">• <strong>多職種・多機関の情報共有：</strong>保健・医療・福祉・介護の各機関が分断なく繋がるため、シームレスな共有環境が必要です。</p>
                                                 <p style="margin: 0;">• <strong>EHRの重要性：</strong>ICTを活用した地域医療情報連携ネットワーク（EHR等）の構築が、包括的な連携介護を支える核心インフラとなります。</p>\`,
                                        bodyVi: \`<p style="margin: 0 0 8px 0;">• <strong>Chia sẻ liên cơ quan:</strong> Đảm bảo thông tin lưu chuyển thông suốt giữa bệnh viện, phòng khám, nhà thuốc, cơ sở chăm sóc, trung tâm y tế.</p>
                                                 <p style="margin: 0;">• <strong>Nền tảng EHR:</strong> Việc áp dụng mạng lưới thông tin y tế khu vực (như EHR - Hồ sơ sức khỏe điện tử khu vực) đóng vai trò sống còn để kết nối các dịch vụ.</p>\`
                                    },
                                    '4': {
                                        color: '#10b981',
                                        icon: 'fa-network-wired',
                                        titleJa: '最終目標：地域包括ケアシステムの構築',
                                        titleVi: 'Mục tiêu tối thượng: Hệ thống chăm sóc toàn diện khu vực',
                                        bodyJa: \`<p style="margin: 0 0 8px 0;">• <strong>5つの構成要素の一体提供：</strong>2025年を目途に「住まい・医療・介護・予防・生活支援」を一体的に提供するネットワークを構築します。</p>
                                                 <p style="margin: 0;">• <strong>地域での自立支援：</strong>重度の要介護状態となっても、住み慣れた地域で自分らしい暮らしを最後まで維持できる社会の実現を目指します。</p>\`,
                                        bodyVi: \`<p style="margin: 0 0 8px 0;">• <strong>Tích hợp 5 yếu tố:</strong> Xây dựng hệ thống đồng bộ gồm Chỗ ở, Y tế, Chăm sóc điều dưỡng, Dự phòng và Hỗ trợ cuộc sống hướng tới mốc năm 2025.</p>
                                                 <p style="margin: 0;">• <strong>Sống tự lập tại quê nhà:</strong> Giúp người cao tuổi dù cần chăm sóc nặng vẫn có thể sống tự do, tôn nghiêm đến cuối đời tại chính nơi ở quen thuộc.</p>\`
                                    }
                                };

                                const steps = document.querySelectorAll('.roadmap-step');
                                const labelItems = document.querySelectorAll('.roadmap-label-item');
                                const detailCard = document.getElementById('roadmap-details-card');
                                const cardTitle = document.getElementById('roadmap-card-title');
                                const cardBody = document.getElementById('roadmap-card-body');

                                function activateStep(stepId) {
                                    // Update active classes
                                    steps.forEach(s => s.classList.toggle('active', s.getAttribute('data-step') === stepId));
                                    labelItems.forEach(l => l.classList.toggle('active', l.getAttribute('data-step') === stepId));

                                    const data = roadmapData[stepId];
                                    if (data && detailCard && cardTitle && cardBody) {
                                        detailCard.style.opacity = '0.1';

                                        setTimeout(() => {
                                            // Apply card modifications
                                            detailCard.style.borderLeftColor = data.color;

                                            // Title
                                            cardTitle.style.color = data.color === '#3b82f6' ? '#60a5fa' : (data.color === '#10b981' ? '#34d399' : data.color);
                                            cardTitle.innerHTML = \`
                                                <i class="fa-solid \${data.icon}"></i>
                                                <span class="lang-ja">\${data.titleJa}</span>
                                                <span class="lang-vi">\${data.titleVi}</span>
                                            \`;

                                            // Body
                                            cardBody.innerHTML = \`
                                                <div class="lang-ja">\${data.bodyJa}</div>
                                                <div class="lang-vi">\${data.bodyVi}</div>
                                            \`;

                                            detailCard.style.opacity = '1';
                                        }, 200);
                                    }
                                }

                                steps.forEach(step => {
                                    step.addEventListener('click', () => {
                                        const stepId = step.getAttribute('data-step');
                                        activateStep(stepId);
                                    });
                                });

                                labelItems.forEach(label => {
                                    label.addEventListener('click', () => {
                                        const stepId = label.getAttribute('data-step');
                                        activateStep(stepId);
                                    });
                                });
                            })();
                        </script>
                    </div>
                </section>
            </div>

            <!-- SBO 1.1.2 CONTENT WRAPPER -->`;
