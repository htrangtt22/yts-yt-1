document.addEventListener('DOMContentLoaded', () => {
    // Language Switcher Setup
    if (!document.body.classList.contains('lang-vi') && !document.body.classList.contains('lang-ja')) {
        document.body.classList.add('lang-ja');
    }

    const langToggleBtn = document.getElementById('lang-toggle-btn');
    if (langToggleBtn) {
        langToggleBtn.addEventListener('click', () => {
            const isVi = document.body.classList.toggle('lang-vi');
            document.body.classList.toggle('lang-ja', !isVi);
            updateDynamicContentLang();
        });
    }

    // Interactive Triangle elements
    const triNodes = document.querySelectorAll('.tri-node');
    const infoTitle = document.getElementById('info-title');
    const infoBody = document.getElementById('info-body');

    const triangleData = {
        mental: {
            title: {
                ja: '<i class="fa-solid fa-brain"></i> 精神的健康 (Mental Health)',
                vi: '<i class="fa-solid fa-brain"></i> Sức khỏe tinh thần (Mental Health)'
            },
            body: {
                ja: '精神的な健康とは、自身の感情を認識・コントロールし、ストレスに対処でき、自立して意思決定を行える状態です。単に精神疾患がないことではなく、心が満たされ、自己肯定感があることが含まれます。',
                vi: 'Sức khỏe tinh thần là trạng thái nhận biết và kiểm soát được cảm xúc của bản thân, đối phó được với căng thẳng, và có thể tự lập đưa ra quyết định. Nó không chỉ đơn thuần là không có bệnh tâm thần, mà bao gồm cả sự mãn nguyện trong tâm hồn và lòng tự tôn.'
            }
        },
        physical: {
            title: {
                ja: '<i class="fa-solid fa-heart-pulse"></i> 身体的健康 (Physical Health)',
                vi: '<i class="fa-solid fa-heart-pulse"></i> Sức khỏe thể chất (Physical Health)'
            },
            body: {
                ja: '身体的な健康とは、病気や虚弱がないだけでなく、適切な栄養、運動、睡眠が確保され、身体の諸器官が正常かつ調和的に機能している状態を指します。身体のエネルギーと生命力がみなぎっている状態です。',
                vi: 'Sức khỏe thể chất là trạng thái không chỉ không có bệnh tật hay ốm yếu, mà còn đảm bảo dinh dưỡng hợp lý, vận động, giấc ngủ, và các cơ quan trong cơ thể hoạt động bình thường, hài hòa. Đó là trạng thái tràn đầy năng lượng và sinh lực thể chất.'
            }
        },
        social: {
            title: {
                ja: '<i class="fa-solid fa-users"></i> 社会的健康 (Social Health)',
                vi: '<i class="fa-solid fa-users"></i> Sức khỏe xã hội (Social Health)'
            },
            body: {
                ja: '社会的健康とは、他者との良好な人間関係を築き、社会の構成員として適切な役割を果たし、孤独にならずに支え合える状態です。自己の帰属感があり、社会保障や地域のネットワークと繋がっていることも含みます。',
                vi: 'Sức khỏe xã hội là trạng thái xây dựng được mối quan hệ tốt đẹp với người khác, đóng vai trò phù hợp với tư cách là thành viên xã hội, hỗ trợ lẫn nhau mà không cô đơn. Nó bao gồm cảm giác thuộc về và kết nối với mạng lưới cộng đồng hoặc an sinh xã hội.'
            }
        }
    };

    triNodes.forEach(node => {
        node.addEventListener('click', () => {
            triNodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');
            const target = node.getAttribute('data-target');
            const data = triangleData[target];
            const isVi = document.body.classList.contains('lang-vi');
            if (data && infoTitle && infoBody) {
                infoTitle.innerHTML = isVi ? data.title.vi : data.title.ja;
                infoBody.textContent = isVi ? data.body.vi : data.body.ja;
            }
        });
    });

    // Dynamic Spectrum (Continuous Slider)
    const healthSlider = document.getElementById('health-slider');
    const sliderGlow = document.getElementById('slider-glow');
    const sliderStatusTitle = document.getElementById('slider-status-title');
    const sliderStatusDesc = document.getElementById('slider-status-desc');

    const getSpectrumStatus = (val) => {
        const isVi = document.body.classList.contains('lang-vi');
        if (val <= 20) {
            return {
                title: isVi ? 'Trạng thái bệnh nặng (Illness)' : '重篤な疾病 (Illness)',
                desc: isVi 
                    ? 'Bạn đang trong trạng thái bệnh tật nghiêm trọng, cơ thể hoặc tinh thần mất đi khả năng tự điều chỉnh bình thường. Cần sự can thiệp và hỗ trợ y tế tích cực.'
                    : '重い病気や機能障がいにあり、身体的・精神的な自己調節機能が著しく低下しています。積極的な医療治療と福祉的支援が必要です。'
            };
        } else if (val <= 50) {
            return {
                title: isVi ? 'Trạng thái không khỏe (Poor Health)' : '不調な状態 (Poor Health)',
                desc: isVi 
                    ? 'Xuất hiện các triệu chứng bất định hoặc mệt mỏi mãn tính. Trạng thái sức khỏe không được tốt hoàn toàn, nằm ở ranh giới cần điều chỉnh thói quen sinh hoạt.'
                    : '自覚症状や慢性的な疲労感があり、健康と病気の境界線上に位置しています。生活習慣の改善や予防的アプローチが必要です。'
            };
        } else if (val <= 80) {
            return {
                title: isVi ? 'Trạng thái bình thường hàng ngày' : '日常の健康状態',
                desc: isVi 
                    ? 'Đang duy trì các hoạt động bình thường, mặc dù có thể có một vài căng thẳng nhẹ hoặc mệt mỏi thoáng qua. Sức khỏe ở mức độ cân bằng trung bình.'
                    : '大きな不調はなく、日常生活を安定して送ることができています。ストレスや一時的な疲労への自己回復力が維持されている状態です。'
            };
        } else {
            return {
                title: isVi ? 'Sức khỏe tối ưu (Wellness)' : '最適な健康 (Wellness)',
                desc: isVi 
                    ? 'Trạng thái thể chất, tinh thần và xã hội đều vô cùng năng động, phát huy tối đa tiềm năng cá nhân và cảm nhận rõ nét ý nghĩa cuộc sống.'
                    : '自己の可能性を最大限に引き出し、身体的・精神的・社会的にきわめて活気があり、自らのQOLと尊厳に満ち溢れている状態です。'
            };
        }
    };

    const updateSliderUI = (val) => {
        if (!healthSlider) return;
        const percent = val + '%';
        if (sliderGlow) {
            sliderGlow.style.width = percent;
        }
        const status = getSpectrumStatus(val);
        if (sliderStatusTitle) {
            sliderStatusTitle.textContent = status.title;
        }
        if (sliderStatusDesc) {
            sliderStatusDesc.textContent = status.desc;
        }
    };

    if (healthSlider) {
        healthSlider.addEventListener('input', (e) => {
            updateSliderUI(e.target.value);
        });
        updateSliderUI(healthSlider.value);
    }

    // Spiritual Dimensions & Concentric Spinning Rings
    const ringElements = document.querySelectorAll('.ring-element');
    const spiritualTitle = document.getElementById('spiritual-title');
    const spiritualBody = document.getElementById('spiritual-body');

    const ringsData = {
        physical: {
            title: {
                ja: '<i class="fa-solid fa-dumbbell"></i> 身体的次元 (Physical Dimension)',
                vi: '<i class="fa-solid fa-dumbbell"></i> Chiều kích thể chất (Physical Dimension)'
            },
            body: {
                ja: '健康の土台をなす外側の輪。食事、運動、睡眠などを通じて、病気を防ぎ、生命を維持するための機能が正常に保たれているレイヤーです。',
                vi: 'Vòng ngoài cùng tạo nên nền tảng của sức khỏe. Lớp này duy trì các chức năng bình thường để phòng ngừa bệnh tật và duy trì sự sống thông qua ăn uống, vận động, giấc ngủ...'
            }
        },
        mental: {
            title: {
                ja: '<i class="fa-solid fa-brain"></i> 精神的次元 (Mental Dimension)',
                vi: '<i class="fa-solid fa-brain"></i> Chiều kích tinh thần (Mental Dimension)'
            },
            body: {
                ja: '自己の感情の統制、知的な探求、精神の安定を司る輪。ストレスへの適応力や、論理的・感情的な調和を含みます。',
                vi: 'Vòng quản lý việc kiểm soát cảm xúc cá nhân, tìm tòi trí tuệ và sự ổn định tinh thần. Bao gồm khả năng thích ứng với căng thẳng và sự hài hòa giữa lý trí và cảm xúc.'
            }
        },
        social: {
            title: {
                ja: '<i class="fa-solid fa-users"></i> 社会的次元 (Social Dimension)',
                vi: '<i class="fa-solid fa-users"></i> Chiều kích xã hội (Social Dimension)'
            },
            body: {
                ja: '他者との人間関係、コミュニティへの参加、社会の中での役割を持つ輪。孤独を防ぎ、互助関係の中で生きる喜びを得る層です。',
                vi: 'Vòng đại diện cho các mối quan hệ với người khác, sự tham gia vào cộng đồng và vai trò trong xã hội. Lớp này giúp ngăn ngừa sự cô đơn và mang lại niềm vui sống trong mối quan hệ tương hỗ.'
            }
        },
        spiritual: {
            title: {
                ja: '<i class="fa-solid fa-dharmachakra"></i> スピリチュアル・コア (Spiritual Core)',
                vi: '<i class="fa-solid fa-dharmachakra"></i> Nhân lõi tâm linh (Spiritual Core)'
            },
            body: {
                ja: 'ホリスティック健康観の中心核。宗教的な概念ではなく、人間としての「尊厳（Dignity）」を持ち、「生きる意味や目的」を感じることで、QOLの根底を支える本質的な要素です。',
                vi: 'Hạt nhân trung tâm của quan điểm sức khỏe toàn diện. Không phải là một khái niệm tôn giáo, mà là yếu tố bản chất nâng đỡ nền tảng của QOL bằng cách sở hữu "phẩm giá (Dignity)" con người và cảm nhận "ý nghĩa, mục tiêu cuộc sống".'
            }
        }
    };

        window.prevLvlData = {
        '1': {
            title: {
                ja: '一次予防：健康増進・疾病予防・事故予防 (Primary Prevention)',
                vi: 'Dự phòng cấp 1: Nâng cao sức khỏe & Phòng ngừa bệnh tật'
            },
            body: {
                ja: `病気やケガの発生を未然に防ぐ段階です。
・健康増進：生活習慣や環境の改善、健康教育を実施します。
・疾病予防：予防接種などにより疾病の発生を防ぎます。
・事故予防：事故防止対策により傷害を防ぎます。`,
                vi: `Ngăn chặn sự phát sinh của bệnh tật và thương tích ngay từ ban đầu:
• Nâng cao sức khỏe: Cải thiện lối sống, môi trường sống và giáo dục sức khỏe.
• Phòng ngừa bệnh tật: Thực hiện tiêm chủng để phòng ngừa phát sinh bệnh lý.
• Phòng tránh tai nạn: Áp dụng biện pháp phòng chống tai nạn để ngăn tổn thương.`
            }
        },
        '2': {
            title: {
                ja: '二次予防：早期発見・早期対処・適切な医療 (Secondary Prevention)',
                vi: 'Dự phòng cấp 2: Phát hiện sớm, Xử trí sớm & Y tế phù hợp'
            },
            body: {
                ja: `発生した疾病を早期に発見し、進行を防ぐ段階です。
・早期発見・早期対処：検診などにより早期発見し、治療や保健指導により重症化を予防します。
・適切な医療：合併症対策を含め、適切な医療を提供します。`,
                vi: `Tập trung vào việc phát hiện sớm và can thiệp kịp thời khi bệnh mới chớm phát:
• Phát hiện và xử trí sớm: Khám sàng lọc (検診), tiến hành điều trị và chỉ đạo sức khỏe (保健指導) kịp thời để phòng ngừa bệnh trở nặng.
• Y tế phù hợp: Cung cấp can thiệp y tế đúng đắn ngăn biến chứng.`
            }
        },
        '3': {
            title: {
                ja: '三次予防：リハビリテーション・社会復帰 (Tertiary Prevention)',
                vi: 'Dự phòng cấp 3: Phục hồi chức năng & Tái hòa nhập'
            },
            body: {
                ja: `病気になった後の機能回復と社会復帰を支援する段階です。
・機能回復・再発予防：保健指導やリハビリテーション等による機能回復を図り、社会復帰を支援し再発を予防します。`,
                vi: `Tập trung giai đoạn sau khi mắc bệnh, giảm thiểu di chứng và đưa người bệnh trở lại cuộc sống bình thường:
• Phục hồi chức năng: Kết hợp chỉ đạo sức khỏe và vật lý trị liệu để khôi phục chức năng cơ thể.
• Hỗ trợ tái hòa nhập: Giúp quay trở lại cộng đồng (社会復帰) và ngăn ngừa tái phát.`
            }
        }
    };

    ringElements.forEach(ring => {
        const handleInteraction = () => {
            ringElements.forEach(r => r.classList.remove('active'));
            ring.classList.add('active');

            const isVi = document.body.classList.contains('lang-vi');
            const layer = ring.getAttribute('data-layer');
            const data = ringsData[layer];

            if (data && spiritualTitle) {
                const infoCard = document.getElementById('spiritual-info-card');
                infoCard.style.opacity = '0.3';
                setTimeout(() => {
                    spiritualTitle.innerHTML = isVi ? data.title.vi : data.title.ja;
                    spiritualBody.textContent = isVi ? data.body.vi : data.body.ja;
                    infoCard.style.opacity = '1';
                }, 200);
            }
        };

        ring.addEventListener('mouseenter', handleInteraction);
    });

    function updateDynamicContentLang() {
        const isVi = document.body.classList.contains('lang-vi');
        
        // 1. Triangle update
        const activeNode = document.querySelector('.tri-node.active');
        if (activeNode) {
            const target = activeNode.getAttribute('data-target');
            const data = triangleData[target];
            const titleEl = document.getElementById('info-title');
            const bodyEl = document.getElementById('info-body');
            if (data && titleEl && bodyEl) {
                titleEl.innerHTML = isVi ? data.title.vi : data.title.ja;
                bodyEl.textContent = isVi ? data.body.vi : data.body.ja;
            }
        }
        
        // 2. Rings update
        const activeRing = document.querySelector('.ring-element.active') || document.querySelector('.ring-element');
        if (activeRing) {
            const layer = activeRing.getAttribute('data-layer');
            const data = ringsData[layer];
            if (data && spiritualTitle && spiritualBody) {
                spiritualTitle.innerHTML = isVi ? data.title.vi : data.title.ja;
                spiritualBody.textContent = isVi ? data.body.vi : data.body.ja;
            }
        }
        
        // 3. Slider update
        const healthSlider = document.getElementById('health-slider');
        if (healthSlider) {
            updateSliderUI(healthSlider.value);
        }
        
        // 4. Preventive medicine levels update
        const activePrevLvl = document.querySelector('[data-prev-lvl].active') || document.querySelector('[data-prev-lvl]');
        if (activePrevLvl) {
            const lvl = activePrevLvl.getAttribute('data-prev-lvl');
            const data = prevLvlData[lvl];
            const prevLvlTitle = document.getElementById('prev-lvl-title');
            const prevLvlBody = document.getElementById('prev-lvl-body');
            if (data && prevLvlTitle && prevLvlBody) {
                prevLvlTitle.textContent = isVi ? data.title.vi : data.title.ja;
                prevLvlBody.textContent = isVi ? data.body.vi : data.body.ja;
            }
        }

        // 5. Simulator update
        if (typeof updateStratification === 'function') {
            updateStratification();
        }

        // 6. SBO 1.2.1 Oath checklist text update on language toggle
        if (typeof updateOathScore === 'function') {
            updateOathScore();
        }

        // 7. SBO 1.2.2 Interactive components update on language toggle
        if (typeof updateSbo122Pillar === 'function') {
            updateSbo122Pillar();
        }
        if (typeof updateSbo122Step === 'function') {
            updateSbo122Step();
        }
        if (typeof updateSbo123Matrix === 'function') {
            updateSbo123Matrix();
        }
        if (typeof updateSbo123Step === 'function') {
            updateSbo123Step();
        }
        if (typeof updateReorgDetail === 'function') {
            updateReorgDetail();
        }
        if (typeof updateSbo211Pillar === 'function') {
            updateSbo211Pillar();
        }
        if (typeof updateSbo211Copay === 'function') {
            updateSbo211Copay();
        }
        if (typeof updateSbo211Step === 'function') {
            updateSbo211Step();
        }
        if (typeof updateReviewModeLang === 'function') {
            updateReviewModeLang();
        }
    }

    const sboHeaderData = {
        sbo111: {
            chapter: 'Chapter 1 医学・医療総論',
            gio: 'GIO 1.1 社会における医療の役割',
            badge: 'SBO 1.1.1',
            title: '<span class="lang-ja">健康の定義と医療政策<br><span class="hero-subheading">－何を目標とするか</span></span><span class="lang-vi">Định nghĩa sức khỏe và chính sách y tế<br><span class="hero-subheading">－Mục tiêu hướng tới là gì</span></span>',
            desc: '<span class="lang-ja">保健、医療、福祉の関わりについて説明できる。</span><span class="lang-vi">Có thể giải thích mối quan hệ giữa bảo vệ sức khỏe, y tế và phúc lợi.</span>'
        },
        sbo112: {
            chapter: 'Chapter 1 医学・医療総論',
            gio: 'GIO 1.1 社会における医療の役割',
            badge: 'SBO 1.1.2',
            title: '<span class="lang-ja">個人と社会<br><span class="hero-subheading">－多様な価値観の調和</span></span><span class="lang-vi">Cá nhân và xã hội<br><span class="hero-subheading">－Sự điều hòa các giá trị đa dạng</span></span>',
            desc: '<span class="lang-ja">医療に対する社会のニーズの動向について説明できる。</span><span class="lang-vi">Có thể giải thích xu hướng nhu cầu xã hội đối với y tế.</span>'
        },
        sbo113: {
            chapter: 'Chapter 1 医学・医療総論',
            gio: 'GIO 1.1 社会における医療の役割',
            badge: 'SBO 1.1.3',
            title: '<span class="lang-ja">医療需要の量的増加と質的多様化<br><span class="hero-subheading">－超高齢社会への対応</span></span><span class="lang-vi">Gia tăng & Đa dạng hóa nhu cầu y tế<br><span class="hero-subheading">－Đáp ứng với xã hội siêu già hóa</span></span>',
            desc: '<span class="lang-ja">超高齢化社会に対応した医療需要を説明できる。</span><span class="lang-vi">Có thể giải thích nhu cầu y tế đáp ứng với xã hội siêu già hóa.</span>'
        },
        sbo121: {
            chapter: 'Chapter 1 医学・医療総論',
            gio: 'GIO 1.2 医の倫理',
            badge: 'SBO 1.2.1',
            title: '<span class="lang-ja">医の倫理の変遷<br><span class="hero-subheading">－歴史的規範と現代的展開</span></span><span class="lang-vi">Lịch sử biến đổi của y đức<br><span class="hero-subheading">－Chuẩn mực lịch sử và sự phát triển hiện đại</span></span>',
            desc: '<span class="lang-ja">ヒポクラテスの誓い、ジュネーブ宣言、ヘルシンキ宣言、リスボン宣言などの変遷を説明できる。</span><span class="lang-vi">Có thể giải thích sự phát triển lịch sử của đạo đức y khoa (Lời thề Hippocrates, Tuyên ngôn Geneva, Tuyên ngôn Helsinki, Tuyên ngôn Lisbon, v.v.).</span>'
        },
        sbo122: {
            chapter: 'Chapter 1 医学・医療総論',
            gio: 'GIO 1.2 医の倫理',
            badge: 'SBO 1.2.2',
            title: '<span class="lang-ja">個人情報保護と情報開示<br><span class="hero-subheading">－消極的から積極的プライバシーへ</span></span><span class="lang-vi">Bảo vệ thông tin cá nhân và công bố thông tin<br><span class="hero-subheading">－Từ quyền riêng tư thụ động sang chủ động</span></span>',
            desc: '<span class="lang-ja">個人情報の保護と開示の重要性を理解し、アクセス権、支配・制御権、訂正権について説明できる。</span><span class="lang-vi">Hiểu được tầm quan trọng của việc bảo vệ và công bố thông tin cá nhân, có thể giải thích về quyền truy cập, kiểm soát và chỉnh sửa.</span>'
        },
        sbo123: {
            chapter: 'Chapter 1 医学・医療総論',
            gio: 'GIO 1.2 医の倫理',
            badge: 'SBO 1.2.3',
            title: '<span class="lang-ja">患者が参画する医療<br><span class="hero-subheading">－自己決定・インフォームドコンセント・チーム医療</span></span><span class="lang-vi">Y tế với sự tham gia của bệnh nhân<br><span class="hero-subheading">－Tự quyết định, đồng thuận và điều trị nhóm</span></span>',
            desc: '<span class="lang-ja">患者の権利、インフォームドコンセント、セカンドオピニオン、多職種連携を説明できる。</span><span class="lang-vi">Có thể giải thích về quyền của bệnh nhân, đồng thuận (Informed Consent), ý kiến thứ hai (Second Opinion) và sự hợp tác đa ngành.</span>'
        },
        sbo211: {
            chapter: 'Chapter 2 社会保障と医療制度',
            gio: 'GIO 2.1 社会保障制度と医療制度',
            badge: 'SBO 2.1.1',
            title: '<span class="lang-ja">日本の社会保障制度<br><span class="hero-subheading">－健康・医療・福祉の全体像</span></span><span class="lang-vi">Hệ thống an sinh xã hội Nhật Bản<br><span class="hero-subheading">－Toàn cảnh về Sức khỏe, Y tế và Phúc lợi</span></span>',
            desc: '<span class="lang-ja">日本の社会保障制度（年金・医療・福祉・公衆衛生）の基本構造と役割を説明できる。</span><span class="lang-vi">Có thể giải thích cấu trúc cơ bản và vai trò của hệ thống an sinh xã hội Nhật Bản (hưu trí, y tế, phúc lợi, y tế công cộng).</span>'
        },
        sbo212: {
            chapter: 'Chapter 2 社会保障と医療制度',
            gio: 'GIO 2.1 社会保障制度と医療制度',
            badge: 'SBO 2.1.2',
            title: '<span class="lang-ja">日本の医療提供体制<br><span class="hero-subheading">－地域完結型システムへの再構築</span></span><span class="lang-vi">Hệ thống cung cấp dịch vụ y tế Nhật Bản<br><span class="hero-subheading">－Tái cơ cấu hướng tới hệ thống hoàn thiện tại địa phương</span></span>',
            desc: '<span class="lang-ja">2025年問題に伴う病床機能分化と、地域包括ケアシステムの全体像を説明できる。</span><span class="lang-vi">Có thể giải thích sự phân hóa chức năng giường bệnh đi kèm với vấn đề năm 2025 và toàn cảnh hệ thống chăm sóc toàn diện khu vực.</span>'
        },
        sbo213: {
            chapter: 'Chapter 2 社会保障と医療制度',
            gio: 'GIO 2.1 社会保障制度と医療制度',
            badge: 'SBO 2.1.3',
            title: '<span class="lang-ja">日本の医療保険制度<br><span class="hero-subheading">－国民皆保険の仕組みと持続可能性</span></span><span class="lang-vi">Hệ thống bảo hiểm y tế Nhật Bản<br><span class="hero-subheading">－Cơ chế bảo hiểm toàn dân và tính bền vững</span></span>',
            desc: '<span class="lang-ja">職域・地域保険の仕組みと、少子高齢化における医療保険財政の持続可能性を説明できる。</span><span class="lang-vi">Có thể giải thích cơ chế bảo hiểm nghề nghiệp/khu vực và tính bền vững tài chính bảo hiểm y tế trong bối cảnh ít con già hóa dân số.</span>'
        },
        sbo214: {
            chapter: 'Chapter 2 社会保障と医療制度',
            gio: 'GIO 2.1 社会保障制度と医療制度',
            badge: 'SBO 2.1.4',
            title: '<span class="lang-ja">保険診療報酬制度<br><span class="hero-subheading">－保険診療の仕組みと診療報酬の構造</span></span><span class="lang-vi">Chế độ thanh toán chi phí khám chữa bệnh bảo hiểm<br><span class="hero-subheading">－Cơ chế khám chữa bệnh bảo hiểm và cấu trúc viện phí</span></span>',
            desc: '<span class="lang-ja">保険医療機関における診療報酬（医科）の算定ルールと基本的仕組みを説明できる。</span><span class="lang-vi">Có thể giải thích quy tắc tính điểm và cơ chế cơ bản của giá dịch vụ y tế (khoa y) tại các cơ sở y tế bảo hiểm.</span>'
        },
        sbo311: {
            chapter: 'Chapter 3 基礎医学の基本',
            gio: 'GIO 3.1 人体の構造と機能',
            badge: 'SBO 3.1.1',
            title: '<span class="lang-ja">解剖学の基本構造<br><span class="hero-subheading">－人体の器官系統分類</span></span><span class="lang-vi">Cấu trúc cơ bản của giải phẫu học<br><span class="hero-subheading">－Phân loại hệ thống cơ quan của cơ thể con người</span></span>',
            desc: '<span class="lang-ja">主要器官系（神経系・循環器系・消化器系）の解剖的配置と機能分類を説明できる。</span><span class="lang-vi">Giải thích được vị trí giải phẫu và phân loại chức năng của các hệ cơ quan chính (thần kinh, tuần hoàn, tiêu hóa).</span>'
        },
        sbo312: {
            chapter: 'Chapter 3 基礎医学の基本',
            gio: 'GIO 3.1 人体の構造と機能',
            badge: 'SBO 3.1.2',
            title: '<span class="lang-ja">生理学とホメオスタシス<br><span class="hero-subheading">－体内環境の維持と体温調節</span></span><span class="lang-vi">Sinh lý học và cân bằng nội môi<br><span class="hero-subheading">－Duy trì môi trường bên trong và điều hòa thân nhiệt</span></span>',
            desc: '<span class="lang-ja">自律神経や効果器を通じた生体の自己調節恒常性フィードバックを説明できる。</span><span class="lang-vi">Giải thích được phản hồi cân bằng tự điều chỉnh của cơ thể thông qua hệ thần kinh tự chủ và các cơ quan hiệu ứng.</span>'
        },
        sbo411: {
            chapter: 'Chapter 4 臨床医学へのアプローチ',
            gio: 'GIO 4.1 診断と治療のプロセス',
            badge: 'SBO 4.1.1',
            title: '<span class="lang-ja">主要症候と身体診察<br><span class="hero-subheading">－主訴から見出す鑑別診断</span></span><span class="lang-vi">Triệu chứng chính và khám thực thể<br><span class="hero-subheading">－Chẩn đoán phân biệt từ lời khai của bệnh nhân</span></span>',
            desc: '<span class="lang-ja">発熱・頭痛・咳嗽に対する主観的病歴聴取と客観的診察プロセスを説明できる。</span><span class="lang-vi">Giải thích được quy trình khám thực thể khách quan và khai thác bệnh sử chủ quan đối với sốt, đau đầu, ho.</span>'
        },
        sbo412: {
            chapter: 'Chapter 4 臨床医学へのアプローチ',
            gio: 'GIO 4.1 診断と治療のプロセス',
            badge: 'SBO 4.1.2',
            title: '<span class="lang-ja">臨床推論チャレンジ<br><span class="hero-subheading">－緊急疾患の早期鑑別と意思決定</span></span><span class="lang-vi">Thách thức suy luận lâm sàng<br><span class="hero-subheading">－Phân biệt sớm bệnh khẩn cấp và đưa ra quyết định</span></span>',
            desc: '<span class="lang-ja">胸痛を主訴とする患者に対する正確な診断ステップと臨床の論理的推論を説明できる。</span><span class="lang-vi">Giải thích được các bước chẩn đoán chính xác và suy luận lâm sàng logic đối với bệnh nhân bị đau ngực.</span>'
        }
    };

    const sboNavLinks = document.querySelectorAll('.sbo-nav-link');
    const sboWrappers = document.querySelectorAll('.sbo-section-wrapper');
    const reviewModeBtn = document.getElementById('review-mode-btn');
    const reviewSection = document.getElementById('review-section');
    const heroSection = document.getElementById('hero');
    const crumbChap = document.getElementById('crumb-chap');
    const crumbGio = document.getElementById('crumb-gio');
    const crumbSbo = document.getElementById('crumb-sbo');
    const heroChapBadge = document.getElementById('hero-chap-badge');
    const heroGioBadge = document.getElementById('hero-gio-badge');
    const heroSboBadge = document.getElementById('hero-sbo-badge');
    const heroMainTitle = document.getElementById('hero-main-title');
    const heroSubDesc = document.getElementById('hero-sub-desc');

    const activateSBO = (targetSbo, updateHash = true) => {
        if (typeof window.deactivateReviewMode === 'function') {
            window.deactivateReviewMode();
        }
        const link = document.querySelector(`.sbo-nav-link[data-sbo="${targetSbo}"]`);
        const data = sboHeaderData[targetSbo];

        if (!data || !link) return;

        sboNavLinks.forEach(l => l.classList.remove('active'));
        link.classList.add('active');

        const parentGIO = link.closest('.gio-group');
        if (parentGIO) {
            parentGIO.classList.add('active');
            parentGIO.querySelector('.folder-icon').className = 'fa-solid fa-folder-open folder-icon';
        }
        const parentChap = link.closest('.chapter-group');
        if (parentChap) {
            parentChap.classList.add('active');
        }

        // Dynamically inject the active SBO template
        const sboContainer = document.getElementById('sbo-container');
        if (sboContainer && window.SBO_TEMPLATES && window.SBO_TEMPLATES[targetSbo]) {
            sboContainer.innerHTML = window.SBO_TEMPLATES[targetSbo];
            
            // The template wrapper has class="sbo-section-wrapper" (hidden by CSS default).
            // We must add the 'active' class to make it visible.
            const injectedWrapper = sboContainer.firstElementChild;
            if (injectedWrapper && injectedWrapper.classList.contains('sbo-section-wrapper')) {
                injectedWrapper.classList.add('active');
            }
            
            // Re-bind SBO 1.1.1 specific DOM listeners if SBO 1.1.1 is active
            if (targetSbo === 'sbo111') {
                const sbo111TriNodes = sboContainer.querySelectorAll('.tri-node');
                const sbo111InfoTitle = document.getElementById('info-title');
                const sbo111InfoBody = document.getElementById('info-body');
                sbo111TriNodes.forEach(node => {
                    node.addEventListener('click', () => {
                        sbo111TriNodes.forEach(n => n.classList.remove('active'));
                        node.classList.add('active');
                        const target = node.getAttribute('data-target');
                        const triData = triangleData[target];
                        const isVi = document.body.classList.contains('lang-vi');
                        if (triData && sbo111InfoTitle && sbo111InfoBody) {
                            sbo111InfoTitle.innerHTML = isVi ? triData.title.vi : triData.title.ja;
                            sbo111InfoBody.textContent = isVi ? triData.body.vi : triData.body.ja;
                        }
                    });
                });

                const sbo111HealthSlider = document.getElementById('health-slider');
                if (sbo111HealthSlider) {
                    sbo111HealthSlider.addEventListener('input', (e) => {
                        updateSliderUI(e.target.value);
                    });
                    updateSliderUI(sbo111HealthSlider.value);
                }

                const sbo111RingElements = sboContainer.querySelectorAll('.ring-element');
                sbo111RingElements.forEach(ring => {
                    const handleSpiritualInteraction = () => {
                        sbo111RingElements.forEach(r => r.classList.remove('active'));
                        ring.classList.add('active');
                        const isVi = document.body.classList.contains('lang-vi');
                        const layer = ring.getAttribute('data-layer');
                        const ringData = ringsData[layer];
                        if (ringData && spiritualTitle) {
                            const infoCard = document.getElementById('spiritual-info-card');
                            if (infoCard) infoCard.style.opacity = '0.3';
                            setTimeout(() => {
                                spiritualTitle.innerHTML = isVi ? ringData.title.vi : ringData.title.ja;
                                spiritualBody.textContent = isVi ? ringData.body.vi : ringData.body.ja;
                                if (infoCard) infoCard.style.opacity = '1';
                            }, 200);
                        }
                    };
                    ring.addEventListener('mouseenter', handleSpiritualInteraction);
                });

                // Init SBO 1.1.1 Roadmap simulator
                if (typeof window.initSbo111Simulator === 'function') {
                    window.initSbo111Simulator();
                }
            }

            // Re-bind SBO 1.1.2 specific DOM listeners (Individual tabs, Privacy/BigData tabs) and simulator
            if (targetSbo === 'sbo112') {
                // Individual details tabs (Part I)
                const indTabs = sboContainer.querySelectorAll('[data-sbo112-ind-tab]');
                const indPanes = sboContainer.querySelectorAll('.sbo112-ind-pane');
                indTabs.forEach(tab => {
                    tab.addEventListener('click', () => {
                        const targetNum = tab.getAttribute('data-sbo112-ind-tab');
                        indTabs.forEach(t => { t.classList.remove('active'); t.style.border = '1px solid rgba(255,255,255,0.15)'; t.style.color = 'var(--text-secondary)'; t.style.background = 'rgba(255,255,255,0.03)'; });
                        tab.classList.add('active'); tab.style.border = '1px solid var(--accent-teal)'; tab.style.color = 'var(--accent-teal)'; tab.style.background = 'rgba(20,184,166,0.15)';
                        indPanes.forEach(pane => {
                            pane.style.display = (pane.id === `sbo112-ind-pane-${targetNum}`) ? 'block' : 'none';
                        });
                    });
                });

                // Privacy/BigData tabs (Part II)
                const socTabs = sboContainer.querySelectorAll('[data-sbo112-soc-tab]');
                const socPanes = sboContainer.querySelectorAll('.sbo112-soc-pane');
                socTabs.forEach(tab => {
                    tab.addEventListener('click', () => {
                        const targetNum = tab.getAttribute('data-sbo112-soc-tab');
                        socTabs.forEach(t => { t.classList.remove('active'); t.style.border = '1px solid rgba(255,255,255,0.15)'; t.style.color = 'var(--text-secondary)'; t.style.background = 'rgba(255,255,255,0.03)'; });
                        tab.classList.add('active'); tab.style.border = '1px solid var(--accent-teal)'; tab.style.color = 'var(--accent-teal)'; tab.style.background = 'rgba(20,184,166,0.15)';
                        socPanes.forEach(pane => {
                            pane.style.display = (pane.id === `sbo112-soc-pane-${targetNum}`) ? 'block' : 'none';
                        });
                    });
                });

                // Init SBO 1.1.2 Personalized medicine simulator
                if (typeof window.initSbo112Simulator === 'function') {
                    window.initSbo112Simulator();
                }
            }

            // Re-bind SBO 1.1.3 specific DOM listeners and initialize bed allocator simulator
            if (targetSbo === 'sbo113') {
                if (typeof window.initSbo113Simulator === 'function') {
                    window.initSbo113Simulator();
                }
            }

            // Re-bind SBO 1.2.1 detailed tabs
            if (targetSbo === 'sbo121') {
                if (typeof window.initSbo121Simulator === 'function') {
                    window.initSbo121Simulator();
                }
            }

            // Re-bind SBO 1.2.2 details tabs and simulator logic
            if (targetSbo === 'sbo122') {
                if (typeof window.initSbo122Simulator === 'function') {
                    window.initSbo122Simulator();
                }
            }

            // Re-bind SBO 1.2.3 details tabs
            if (targetSbo === 'sbo123') {
                const sbo123Tabs = sboContainer.querySelectorAll('[data-sbo123-tab]');
                const sbo123Panes = sboContainer.querySelectorAll('.sbo123-pane');
                sbo123Tabs.forEach(tab => {
                    tab.addEventListener('click', () => {
                        const targetNum = tab.getAttribute('data-sbo123-tab');
                        sbo123Tabs.forEach(t => t.classList.remove('active'));
                        tab.classList.add('active');
                        sbo123Panes.forEach(pane => {
                            pane.style.display = (pane.id === `sbo123-pane-${targetNum}`) ? 'block' : 'none';
                        });
                    });
                });

                // Initialize SBO 1.2.3 specific interactive functions if defined
                if (typeof window.updateSbo123Matrix === 'function') {
                    window.updateSbo123Matrix();
                }
                if (typeof window.updateSbo123Step === 'function') {
                    window.updateSbo123Step();
                }
            }

            // Re-bind SBO 2.1.1 details tabs
            if (targetSbo === 'sbo211') {
                const sbo211Tabs = sboContainer.querySelectorAll('[data-sbo211-tab]');
                const sbo211Panes = sboContainer.querySelectorAll('.sbo211-pane');
                sbo211Tabs.forEach(tab => {
                    tab.addEventListener('click', () => {
                        const targetNum = tab.getAttribute('data-sbo211-tab');
                        sbo211Tabs.forEach(t => t.classList.remove('active'));
                        tab.classList.add('active');
                        sbo211Panes.forEach(pane => {
                            pane.style.display = (pane.id === `sbo211-pane-${targetNum}`) ? 'block' : 'none';
                        });
                    });
                });

                // Initialize SBO 2.1.1 specific simulator
                if (typeof window.initSbo211Simulator === 'function') {
                    window.initSbo211Simulator();
                }
            }

            // Synced language update after template injection
            updateDynamicContentLang();
            
            // Re-sync standard language toggles in case template HTML was loaded raw
            if (typeof window.syncLanguages === 'function') {
                window.syncLanguages();
            }
        }

        crumbChap.textContent = data.chapter;
        crumbGio.textContent = data.gio;
        const sboNum = link.querySelector('.sbo-num') ? link.querySelector('.sbo-num').textContent : '';
        const sboName = link.querySelector('.sbo-name') ? link.querySelector('.sbo-name').textContent : '';
        crumbSbo.textContent = sboNum + (sboName ? ' ' + sboName : '');

        const heroContainer = document.querySelector('#hero .container');
        if (heroContainer) {
            heroContainer.style.opacity = '0.3';
            setTimeout(() => {
                heroChapBadge.textContent = data.chapter;
                heroGioBadge.textContent = data.gio;
                if (heroSboBadge) {
                    heroSboBadge.textContent = data.badge;
                }
                heroMainTitle.innerHTML = data.title;
                heroSubDesc.innerHTML = data.desc;
                heroContainer.style.opacity = '1';
            }, 200);
        }

        if (updateHash) {
            window.location.hash = targetSbo;
        }
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    sboNavLinks.forEach(link => {
        link.addEventListener('click', () => {
            const targetSbo = link.getAttribute('data-sbo');
            activateSBO(targetSbo, true);
        });
    });

    window.addEventListener('hashchange', () => {
        const targetSbo = window.location.hash.substring(1);
        if (targetSbo && sboHeaderData[targetSbo]) {
            activateSBO(targetSbo, false);
        }
    });

    // Initial load route checking
    const initialHash = window.location.hash.substring(1);
    if (initialHash && sboHeaderData[initialHash]) {
        activateSBO(initialHash, false);
    } else {
        activateSBO('sbo111', true);
    }

    // --- Sidebar Accordion Toggle Logic ---
    const chapterHeaders = document.querySelectorAll('.chapter-group-header');
    chapterHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const group = header.parentElement;
            if (group) {
                group.classList.toggle('active');
            }
        });
    });

    const gioHeaders = document.querySelectorAll('.gio-group-header');
    gioHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const group = header.parentElement;
            if (group) {
                const isActive = group.classList.toggle('active');
                const folderIcon = group.querySelector('.folder-icon');
                if (folderIcon) {
                    folderIcon.className = isActive 
                        ? 'fa-solid fa-folder-open folder-icon' 
                        : 'fa-solid fa-folder folder-icon';
                }
            }
        });
    });


    // --- Mobile Sidebar Hamburger Toggle Logic ---
    const sidebarToggleBtn = document.getElementById('sidebar-toggle-btn');
    const sidebarCloseBtn = document.getElementById('sidebar-close-btn');
    const sidebarBackdrop = document.getElementById('sidebar-backdrop');
    const sidebarNav = document.querySelector('.sidebar-nav');

    function openMobileSidebar() {
        if (sidebarNav) sidebarNav.classList.add('active');
        if (sidebarBackdrop) sidebarBackdrop.style.display = 'block';
    }

    function closeMobileSidebar() {
        if (sidebarNav) sidebarNav.classList.remove('active');
        if (sidebarBackdrop) sidebarBackdrop.style.display = 'none';
    }

    if (sidebarToggleBtn) {
        sidebarToggleBtn.addEventListener('click', openMobileSidebar);
    }

    if (sidebarCloseBtn) {
        sidebarCloseBtn.addEventListener('click', closeMobileSidebar);
    }

    if (sidebarBackdrop) {
        sidebarBackdrop.addEventListener('click', closeMobileSidebar);
    }

    // Auto-close sidebar when an SBO link is clicked (on mobile)
    const sidebarSboLinks = document.querySelectorAll('.sbo-nav-link');
    sidebarSboLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (window.innerWidth <= 900) {
                closeMobileSidebar();
            }
        });
    });

});

