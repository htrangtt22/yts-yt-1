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

    const prevLvlData = {
        '1': {
            title: {
                ja: '一次予防：健康増進・疾病予防 (Primary Prevention)',
                vi: 'Dự phòng cấp 1: Nâng cao sức khỏe & Phòng ngừa bệnh tật (Primary Prevention)'
            },
            body: {
                ja: '健康な人を対象に、生活習慣の改善、栄養管理、運動習慣、予防接種、安全な住環境整備等を通じて、病気になることを未然に防ぎます。',
                vi: 'Dành cho đối tượng người khỏe mạnh, ngăn chặn bệnh tật xảy ra thông qua cải thiện lối sống, quản lý dinh dưỡng, thói quen vận động, tiêm chủng, cải thiện môi trường sống an toàn...'
            }
        },
        '2': {
            title: {
                ja: '二次予防：早期発見・早期治療 (Secondary Prevention)',
                vi: 'Dự phòng cấp 2: Phát hiện sớm & Điều trị sớm (Secondary Prevention)'
            },
            body: {
                ja: '無症状の段階で病気を発見し、早期に介入します。特定健診やがん検診、健康相談などがこれに該当し、重症化を阻止します。',
                vi: 'Phát hiện bệnh ở giai đoạn chưa có triệu chứng và can thiệp kịp thời. Khám sức khỏe đặc hiệu, tầm soát ung thư, tư vấn sức khỏe... thuộc nhóm này để ngăn ngừa bệnh tiến triển nặng.'
            }
        },
        '3': {
            title: {
                ja: '三次予防：重症化予防・リハビリテーション (Tertiary Prevention)',
                vi: 'Dự phòng cấp 3: Ngăn ngừa biến chứng & Phục hồi chức năng (Tertiary Prevention)'
            },
            body: {
                ja: '既に病気が発症した後に、適切な治療、合併症予防、リハビリテーションを行い、障害を最小限に抑え、社会復帰やQOL維持を促進します。',
                vi: 'Sau khi bệnh đã khởi phát, tiến hành điều trị thích hợp, phòng ngừa biến chứng và phục hồi chức năng để giảm thiểu tàn tật, thúc đẩy tái hòa nhập xã hội và duy trì chất lượng cuộc sống (QOL).'
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
        if (typeof deactivateReviewMode === 'function') {
            deactivateReviewMode();
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

        sboWrappers.forEach(w => w.classList.remove('active'));
        const activeWrapper = document.getElementById(targetSbo);
        if (activeWrapper) {
            activeWrapper.classList.add('active');
        }

        crumbChap.textContent = data.chapter;
        crumbGio.textContent = data.gio;
        const sboNum = link.querySelector('.sbo-num') ? link.querySelector('.sbo-num').textContent : '';
        const sboName = link.querySelector('.sbo-name') ? link.querySelector('.sbo-name').textContent : '';
        crumbSbo.textContent = sboNum + (sboName ? ' ' + sboName : '');

        const heroContainer = document.querySelector('#hero .container');
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

    // --- 5. SBO 1.1.2: Dynamic Social Security Chart ---
    const budgetSegments = document.querySelectorAll('.chart-segment');
    const budgetTitle = document.getElementById('budget-title');
    const budgetBody = document.getElementById('budget-body');

    const budgetData = {
        pension: {
            title: '<i class="fa-solid fa-wallet"></i> 年金給付費 (Pension Benefits: 45%)',
            body: '高齢者の生活基盤を支える最大の給付項目です。少子高齢化の進展に伴い、給付額は増加傾向にあり、働く世代の負担と給付のバランス維持が深刻な課題となっています。'
        },
        medical: {
            title: '<i class="fa-solid fa-notes-medical"></i> 医療給付費 (Healthcare Benefits: 35%)',
            body: '国民皆保険制度に基づき、病気やケガの治療に必要なサービスを提供する費用。最先端の高度先進医療や高額薬の保険適用に伴い、国民医療費は毎年増加しており、財源確保が急務となっています。'
        },
        welfare: {
            title: '<i class="fa-solid fa-hands-holding-child"></i> 福祉・その他 (Social Welfare: 20%)',
            body: '介護保険給付や生活保護、子育て支援など多岐にわたるサポート費用です。特に要介護高齢者の増加に伴う介護保険給付の増大や、児童福祉などの社会的セーフティネットの充実が求められています。'
        }
    };

    budgetSegments.forEach(segment => {
        segment.addEventListener('click', () => {
            if (!segment.getAttribute('data-budget')) return;
            budgetSegments.forEach(s => s.classList.remove('active'));
            segment.classList.add('active');

            const key = segment.getAttribute('data-budget');
            const data = budgetData[key];

            if (data && budgetTitle) {
                const infoCard = document.getElementById('budget-info-card');
                infoCard.style.opacity = '0.3';
                setTimeout(() => {
                    budgetTitle.innerHTML = data.title;
                    budgetBody.textContent = data.body;
                    infoCard.style.opacity = '1';
                }, 200);
            }
        });
    });


    // --- 6. SBO 1.1.2: Copayment Age Simulator ---
    const ageTabs = document.querySelectorAll('.age-tab');
    const copayPercentage = document.getElementById('copay-percentage');
    const copayCircle = document.getElementById('copay-value-circle');
    const socialCoveredBar = document.getElementById('social-covered-bar');
    const copayAgeTitle = document.getElementById('copay-age-title');
    const copayAgeDesc = document.getElementById('copay-age-desc');

    const copayData = {
        child: {
            percent: '20%',
            covered: '社会保障による負担: 80% (自治体により実質0%)',
            title: '乳幼児・未就学児の医療負担',
            desc: '原則2割自己負担ですが、多くの市区町村では独自の「子ども医療費助成制度」により、実質無料化または少額のワンコイン負担に抑えられ、子育て世代を強力に支援しています。',
            color: '#06b6d4'
        },
        adult: {
            percent: '30%',
            covered: '社会保障による負担: 70%',
            title: '現役世代 (小学校〜70歳未満) の医療負担',
            desc: '最も一般的な負担割合で3割です。ただし、大病などで支払額が多額になった場合は「高額療養費制度」が適用され、年収に応じた自己負担上限を超えた分は全額社会保障から還付されます。',
            color: '#3b82f6'
        },
        elderly1: {
            percent: '20%',
            covered: '社会保障による負担: 80% (現役並み所得者は3割)',
            title: '前期高齢者 (70〜74歳) の医療負担',
            desc: '原則2割です（誕生日が平成26年4月1日以前の方は特例措置で1割）。ただし、現役並みの所得がある高齢者は現役世代同様の3割負担となり、公平性が確保されています。',
            color: '#10b981'
        },
        elderly2: {
            percent: '10%',
            covered: '社会保障による負担: 90% (現役並み所得者は3割)',
            title: '後期高齢者 (75歳〜) の医療負担',
            desc: '原則1割負担です（一定以上の所得がある方は2割、現役並み所得者は3割）。長生き社会における高齢者の受診のしやすさを支えるセーフティネットとして機能しています。',
            color: '#f59e0b'
        }
    };

    ageTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            ageTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            const ageKey = tab.getAttribute('data-age');
            const data = copayData[ageKey];

            if (data && copayPercentage) {
                copayPercentage.textContent = data.percent;
                socialCoveredBar.textContent = data.covered;
                copayAgeTitle.textContent = data.title;
                copayAgeDesc.textContent = data.desc;
                copayCircle.style.borderColor = data.color;
                copayCircle.style.boxShadow = `0 0 20px ${data.color}40`;
            }
        });
    });


    // --- 7. SBO 1.1.3: Principles & Dilemma Simulator ---
    const principleCards = document.querySelectorAll('.principle-card-interactive');
    
    principleCards.forEach(card => {
        card.addEventListener('click', () => {
            principleCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

    const dilemmaBtns = document.querySelectorAll('.dilemma-btn');
    const caseFeedback = document.getElementById('case-feedback');
    const feedbackHeading = document.getElementById('feedback-heading');
    const feedbackBody = document.getElementById('feedback-body');

    const feedbackData = {
        '1': {
            heading: '「守秘義務」の尊重に対するフィードバック',
            body: '守秘義務（自律尊重）の遵守は極めて重要ですが、他者（危害予告された被害対象者）に差し迫った身体的危険が及ぶ場合、秘密保持の義務は制限されるのが一般的です（タラソフ判決などの倫理・法的判例）。単に診察室内に留める判断は、他者を危機に晒すだけでなく、患者の社会的破滅を防げないリスクもあります。'
        },
        '2': {
            heading: '「他者保護」の即時実行に対するフィードバック',
            body: '第三者の生命保護を最優先する姿勢は「善行原則」や「社会的危害防止責任」に合合物しますが、事前の説得や説明を完全に省略して直ちに通報することは、患者との今後の治療的信頼関係を完全に破壊し、結果的に治療中断による予測不能な暴力行為を再発させる危険性も孕んでいます。'
        },
        '3': {
            heading: '「対話と調和」によるアプローチ (最適解)',
            body: '正解です！患者のプライバシーや自己決定権（自律）を最大限尊重しつつ、社会への危害を未然に防ぐ（善行・他者危害防止）ための最も推奨される倫理プロセスです。患者に対し、他者を保護するために必要な連絡を行う責任があることを丁寧に説明・説得し、合意の獲得に努めながら警告を行うのが現代医療倫理のスタンダードです。'
        }
    };

    dilemmaBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            dilemmaBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const optionKey = btn.getAttribute('data-option');
            const data = feedbackData[optionKey];

            if (data && caseFeedback) {
                caseFeedback.style.display = 'block';
                feedbackHeading.textContent = data.heading;
                feedbackBody.textContent = data.body;
            }
        });
    });


    // --- 8. SBO 1.2.1: Doctor's Oath Checklist Logic ---
    const oathCheckboxes = document.querySelectorAll('.oath-checkbox');
    const oathScoreValue = document.getElementById('oath-score-value');
    const oathScoreCircle = document.getElementById('oath-score-circle');
    const oathStatusLabel = document.getElementById('oath-status-label');
    const oathStatusDesc = document.getElementById('oath-status-desc');

    function updateOathScore() {
        let score = 0;
        oathCheckboxes.forEach(cb => {
            if (cb.checked) {
                score += parseInt(cb.getAttribute('data-weight') || 0);
            }
        });

        if (oathScoreValue) {
            oathScoreValue.textContent = `${score}%`;
            const isVi = document.body.classList.contains('lang-vi');

            if (score === 0) {
                oathScoreValue.style.color = 'var(--text-muted)';
                oathScoreCircle.style.borderColor = 'rgba(255,255,255,0.05)';
                oathStatusLabel.textContent = isVi ? 'Chưa thực hiện' : '未実施';
                oathStatusLabel.style.color = 'var(--text-muted)';
                oathStatusDesc.textContent = isVi ? 'Hãy chọn các ô kiểm để đo lường mức độ cam kết với nghĩa vụ và thái độ của bác sĩ.' : 'チェックボックスを選択して医師の義務と態度への誓約度を測定してください。';
            } else if (score < 100) {
                oathScoreValue.style.color = 'var(--accent-gold)';
                oathScoreCircle.style.borderColor = 'var(--accent-gold)';
                oathScoreCircle.style.boxShadow = '0 0 15px var(--accent-gold-glow)';
                oathStatusLabel.textContent = isVi ? 'Đang thực hiện' : '宣誓進行中';
                oathStatusLabel.style.color = 'var(--accent-gold)';
                oathStatusDesc.textContent = isVi ? 'Đang nâng cao nhận thức chuyên nghiệp của bác sĩ. Vui lòng kiểm tra tất cả các nghĩa vụ.' : '医師としてのプロフェッショナルな自覚を高めています。すべての責務を確認してください。';
            } else {
                oathScoreValue.style.color = 'var(--accent-teal)';
                oathScoreCircle.style.borderColor = 'var(--accent-teal)';
                oathScoreCircle.style.boxShadow = '0 0 20px var(--accent-teal-glow)';
                oathStatusLabel.textContent = isVi ? 'Hoàn thành tuyên thệ!' : '宣誓完了！';
                oathStatusLabel.style.color = 'var(--accent-teal)';
                oathStatusDesc.textContent = isVi ? 'Tinh thần chuyên nghiệp đã được cam kết tối đa. Hãy duy trì lời thề đạo đức này suốt đời.' : 'プロフェッショナル精神が最大限にコミットされました。この倫理誓約を生涯維持しましょう。';
            }
        }
    }

    oathCheckboxes.forEach(cb => {
        cb.addEventListener('change', updateOathScore);
    });

    // Make updateOathScore available globally in DOMContentLoaded scope
    window.updateOathScore = updateOathScore;


    // --- 9. SBO 1.2.2: Transparent Vault Interactive Logic ---

    // 9a. SBO 1.2.2 Pillar Selector Logic
    const sbo122PillarSegments = document.querySelectorAll('[data-sbo122-pillar]');
    const sbo122PillarTitle = document.getElementById('sbo122-pillar-title');
    const sbo122PillarBody = document.getElementById('sbo122-pillar-body');
    const sbo122PillarTip = document.getElementById('sbo122-pillar-tip');

    const sbo122PillarsData = {
        access: {
            title: {
                ja: '<i class="fa-solid fa-folder-open"></i> アクセス権 (Access Right)',
                vi: '<i class="fa-solid fa-folder-open"></i> Quyền truy cập (Access Right)'
            },
            body: {
                ja: '自己情報の「開示」を求める権利です。カルテ（診療録）や検査データ、画像等、自己の健康や診療に関するすべての情報を閲覧し、請求（コピー等の交付）することができます。',
                vi: 'Quyền yêu cầu "công khai" thông tin của bản thân. Người bệnh có quyền xem và yêu cầu cung cấp bản sao của tất cả các thông tin liên quan đến sức khỏe và điều trị của mình, bao gồm bệnh án, dữ liệu xét nghiệm và chẩn đoán hình ảnh.'
            },
            tip: {
                ja: '<strong>実務の鍵：</strong> 診療記録開示ガイドラインに基づき、原則すべての開示に対応します。',
                vi: '<strong>Từ khóa thực tế:</strong> Dựa trên hướng dẫn công khai bệnh án, cơ sở y tế về nguyên tắc phải phản hồi tất cả các yêu cầu.'
            },
            color: 'var(--accent-teal)'
        },
        control: {
            title: {
                ja: '<i class="fa-solid fa-sliders"></i> 制御権 (Control Right)',
                vi: '<i class="fa-solid fa-sliders"></i> Quyền kiểm soát (Control Right)'
            },
            body: {
                ja: '自己に関する情報の「流通」を支配する権利です。目的外利用の拒否、本人の同意のない第三者提供の差し止め請求、情報の破棄等を求めることができます。',
                vi: 'Quyền kiểm soát "sự lưu thông" thông tin liên quan đến bản thân. Bệnh nhân có quyền từ chối sử dụng thông tin ngoài mục đích công bố, yêu cầu dừng cung cấp cho bên thứ ba khi chưa đồng ý, hoặc yêu cầu hủy bỏ thông tin.'
            },
            tip: {
                ja: '<strong>実務の鍵：</strong> 第三者提供の制限（オプトイン必須）や目的外利用の禁止を管理します。',
                vi: '<strong>Từ khóa thực tế:</strong> Quản lý chặt chẽ việc giới hạn cung cấp cho bên thứ ba (bắt buộc Opt-in) và cấm sử dụng ngoài mục đích.'
            },
            color: 'var(--accent-gold)'
        },
        correction: {
            title: {
                ja: '<i class="fa-solid fa-file-pen"></i> 訂正権 (Correction Right)',
                vi: '<i class="fa-solid fa-file-pen"></i> Quyền hiệu đính (Correction Right)'
            },
            body: {
                ja: '誤った情報や不完全な記録に対して「訂正・追加・削除」を求める権利です。プライバシーの保護や不利益の防止、自己の尊厳を守るために不可欠です。',
                vi: 'Quyền yêu cầu "hiệu đính, bổ sung hoặc xóa bỏ" đối với các thông tin sai lệch hoặc hồ sơ không hoàn chỉnh. Điều này là tối quan trọng để bảo vệ quyền riêng tư, tránh các bất lợi và bảo vệ nhân phẩm.'
            },
            tip: {
                ja: '<strong>実務の鍵：</strong> 事実関係の検証に基づき、カルテ等の客観的誤記や虚偽記載の速やかな訂正に応じます。',
                vi: '<strong>Từ khóa thực tế:</strong> Dựa trên việc kiểm chứng các dữ kiện thực tế, nhanh chóng hiệu đính các lỗi nhập liệu khách quan hoặc ghi chép sai lệch trong bệnh án.'
            },
            color: '#ef4444'
        }
    };

    function updateSbo122Pillar() {
        const isVi = document.body.classList.contains('lang-vi');
        const activeSegment = document.querySelector('[data-sbo122-pillar].active');
        if (activeSegment) {
            const key = activeSegment.getAttribute('data-sbo122-pillar');
            const data = sbo122PillarsData[key];
            if (data && sbo122PillarTitle && sbo122PillarBody) {
                sbo122PillarTitle.innerHTML = isVi ? data.title.vi : data.title.ja;
                sbo122PillarTitle.style.color = data.color;
                sbo122PillarBody.textContent = isVi ? data.body.vi : data.body.ja;
                if (sbo122PillarTip) {
                    sbo122PillarTip.style.borderLeftColor = data.color;
                    const tipIcon = sbo122PillarTip.querySelector('i');
                    if (tipIcon) tipIcon.style.color = data.color;
                    const tipSpan = sbo122PillarTip.querySelector('span');
                    if (tipSpan) tipSpan.innerHTML = isVi ? data.tip.vi : data.tip.ja;
                }
            }
        }
    }

    sbo122PillarSegments.forEach(segment => {
        segment.addEventListener('click', () => {
            sbo122PillarSegments.forEach(s => s.classList.remove('active'));
            segment.classList.add('active');

            const infoCard = document.getElementById('sbo122-pillar-info-card');
            if (infoCard) {
                infoCard.style.opacity = '0.3';
                setTimeout(() => {
                    updateSbo122Pillar();
                    infoCard.style.opacity = '1';
                }, 200);
            } else {
                updateSbo122Pillar();
            }
        });
    });

    window.updateSbo122Pillar = updateSbo122Pillar;


    // 9b. SBO 1.2.2 Disclosure Flowchart Simulator Logic
    const simYesBtn = document.getElementById('sbo122-sim-yes');
    const simNoBtn = document.getElementById('sbo122-sim-no');
    const simFeedback = document.getElementById('sbo122-sim-feedback');

    const simResponses = {
        yes: {
            title: {
                ja: '【例外措置】開示の保留・配慮（開示制限）',
                vi: '【Biện pháp Ngoại lệ】 Tạm hoãn / Cân nhắc công khai (Hạn chế công khai)'
            },
            body: {
                ja: '正解です！患者の「知る権利」は非常に強力ですが、絶対的なものではありません。情報の開示により、患者本人に重大な心理的悪影響（病状の激変、絶望による自傷他害の恐れ等）を及ぼすことが明らかである場合は、例外措置として一時的に開示を保留・制限することが法的に認められています。スタッフ（主治医や多職種）の意見を聴き、慎重に決定します。',
                vi: 'Chính xác! Quyền được biết của bệnh nhân rất mạnh mẽ nhưng không phải là tuyệt đối. Nếu việc công khai thông tin rõ ràng có nguy cơ gây ra tác động tâm lý tiêu cực nghiêm trọng cho bệnh nhân (làm bệnh tình chuyển biến xấu, nguy cơ tự hại hoặc hại người khác do tuyệt vọng, v.v.), pháp luật cho phép tạm hoãn hoặc hạn chế công khai như một biện pháp ngoại lệ. Cần tham khảo ý kiến của nhân viên y tế (bác sĩ điều trị và hội đồng đa ngành) trước khi đưa ra quyết định cẩn trọng.'
            },
            background: 'rgba(239, 68, 68, 0.1)',
            border: '1px solid #ef4444'
        },
        no: {
            title: {
                ja: '【適切な開示の実行】原則開示の遵守',
                vi: '【Thực thi công khai phù hợp】 Tuân thủ nguyên tắc công khai'
            },
            body: {
                ja: '正解です！重大な悪影響を及ぼす恐れがない限り、開示請求には原則としてすべて応じます（知る権利・アクセス権の保障）。必要に応じて職員が介入して専門的な内容の説明を補足し、所定の手続き（本人確認等）を経て写し（カルテコピー等）を速やかに提供します。',
                vi: 'Chính xác! Trừ khi có nguy cơ gây ảnh hưởng tiêu cực nghiêm trọng, về nguyên tắc cơ sở y tế phải đáp ứng tất cả các yêu cầu công khai (bảo đảm quyền được biết và quyền truy cập). Nhân viên y tế sẽ can thiệp để giải thích bổ sung các nội dung chuyên môn nếu cần, và nhanh chóng cung cấp bản sao (bản chụp hồ sơ bệnh án, v.v.) sau khi thực hiện các thủ tục quy định (xác minh danh tính, v.v.).'
            },
            background: 'rgba(6, 182, 212, 0.1)',
            border: '1px solid var(--accent-teal)'
        }
    };

    function handleSimClick(choice, event) {
        const btn = event.currentTarget;
        const container = btn.closest('.simulator-box');
        if (!container) return;
        const yesBtn = container.querySelector('#sbo122-sim-yes, #sbo112-sim-yes');
        const noBtn = container.querySelector('#sbo122-sim-no, #sbo112-sim-no');
        const feedback = container.querySelector('.simulator-feedback');
        if (!feedback) return;

        const isVi = document.body.classList.contains('lang-vi');
        const data = simResponses[choice];

        if (choice === 'yes') {
            if (yesBtn) yesBtn.classList.add('active');
            if (noBtn) noBtn.classList.remove('active');
        } else {
            if (noBtn) noBtn.classList.add('active');
            if (yesBtn) yesBtn.classList.remove('active');
        }

        feedback.style.display = 'block';
        feedback.style.background = data.background;
        feedback.style.border = data.border;
        
        feedback.innerHTML = `
            <h4 style="font-weight: bold; margin-top: 0; color: ${choice === 'yes' ? '#fca5a5' : '#a5f3fc'};">
                <i class="fa-solid ${choice === 'yes' ? 'fa-triangle-exclamation' : 'fa-circle-check'}"></i> 
                ${isVi ? data.title.vi : data.title.ja}
            </h4>
            <p class="small-desc" style="margin: 0; line-height: 1.6; color: var(--text-secondary);">
                ${isVi ? data.body.vi : data.body.ja}
            </p>
        `;
    }

    const allSimYes = document.querySelectorAll('#sbo122-sim-yes, #sbo112-sim-yes');
    const allSimNo = document.querySelectorAll('#sbo122-sim-no, #sbo112-sim-no');

    allSimYes.forEach(btn => {
        btn.addEventListener('click', (e) => handleSimClick('yes', e));
    });
    allSimNo.forEach(btn => {
        btn.addEventListener('click', (e) => handleSimClick('no', e));
    });


    // 9c. SBO 1.2.2: 8 Legal Duties Timeline Step Interaction
    const stepDots = document.querySelectorAll('[data-sbo122-step]');
    const sbo122StepTitle = document.getElementById('sbo122-step-title');
    const sbo122StepPhase = document.getElementById('sbo122-step-phase');
    const sbo122StepDesc = document.getElementById('sbo122-step-desc');

    const sbo122StepsData = {
        '1': {
            title: { ja: '1. 利用目的の特定・通知', vi: '1. Xác định & Thông báo mục đích sử dụng' },
            phase: { ja: '取得フェーズ', vi: 'Giai đoạn Thu thập' },
            phaseClass: 'tag-red',
            desc: {
                ja: '患者データの利用目的（診療、家族への説明、会計業務等）を具体的に特定し、院内掲示やホームページで公表します。特定された範囲を超えて利用する場合は、原則として患者本人の同意が必須となります。',
                vi: 'Xác định cụ thể mục đích sử dụng dữ liệu bệnh nhân (điều trị, giải thích cho gia đình, nghiệp vụ thanh toán, v.v.) và công bố tại bảng tin bệnh viện hoặc trang web. Trường hợp sử dụng vượt quá phạm vi đã công bố, về nguyên tắc phải có sự đồng ý của bệnh nhân.'
            }
        },
        '2': {
            title: { ja: '2. 適正な取得', vi: '2. Thu nhập hợp lệ' },
            phase: { ja: '取得フェーズ', vi: 'Giai đoạn Thu thập' },
            phaseClass: 'tag-red',
            desc: {
                ja: '偽りその他不正な手段によって個人情報を取得してはなりません。また、医療分野においては病歴等の要配慮個人情報を取得するため、原則オプトイン（事前同意）による適正な手順を踏むことが義務付けられています。',
                vi: 'Không được thu thập thông tin cá nhân bằng các thủ đoạn gian lận hoặc bất hợp pháp. Ngoài ra, trong y tế, khi thu thập thông tin nhạy cảm như lịch sử bệnh án, việc thực hiện đúng quy trình thông qua cơ chế Opt-in (đồng ý trước) là bắt buộc.'
            }
        },
        '3': {
            title: { ja: '3. 正確性の確保', vi: '3. Đảm bảo tính chính xác' },
            phase: { ja: '運用・保管フェーズ', vi: 'Giai đoạn Vận hành/Lưu trữ' },
            phaseClass: 'tag-gold',
            desc: {
                ja: '提供する医療の質や安全を担保するため、患者の個人データを正確かつ最新の内容に保つよう努めなければなりません。カルテへの誤記や検査結果の取り違え等は重大な医療事故に直結します。',
                vi: 'Duy trì dữ liệu cá nhân của bệnh nhân chính xác và cập nhật mới nhất để đảm bảo chất lượng và an toàn y tế. Lỗi ghi chép bệnh án hoặc nhầm lẫn kết quả xét nghiệm sẽ trực tiếp dẫn đến các tai nạn y khoa nghiêm trọng.'
            }
        },
        '4': {
            title: { ja: '4. 安全管理措置', vi: '4. Biện pháp quản lý an toàn' },
            phase: { ja: '運用・保管フェーズ', vi: 'Giai đoạn Vận hành/Lưu trữ' },
            phaseClass: 'tag-gold',
            desc: {
                ja: '個人データの漏洩、滅失、改ざんを防止するため、必要かつ適切な安全管理措置（技術的・物理的・組織的な多層防御）を講じる義務があります。システムログの監視やアクセス権限の厳格化が含まれます。',
                vi: 'Có nghĩa vụ áp dụng các biện pháp quản lý an toàn cần thiết và phù hợp (phòng thủ đa tầng về mặt kỹ thuật, vật lý và tổ chức) nhằm ngăn chặn việc rò rỉ, mất mát hoặc sửa đổi trái phép dữ liệu cá nhân. Bao gồm giám sát log hệ thống và phân quyền truy cập chặt chẽ.'
            }
        },
        '5': {
            title: { ja: '5. 苦情対応体制', vi: '5. Tiếp nhận & Giải quyết khiếu nại' },
            phase: { ja: '運用・保管フェーズ', vi: 'Giai đoạn Vận hành/Lưu trữ' },
            phaseClass: 'tag-gold',
            desc: {
                ja: '個人情報の取り扱いに関する苦情の適切かつ迅速な処理に努める義務があります。院内に相談窓口を設置し、手続きを分かりやすく明示することが求められます。',
                vi: 'Có nghĩa vụ nỗ lực xử lý phù hợp và nhanh chóng các khiếu nại liên quan đến việc xử lý thông tin cá nhân. Bệnh viện cần thiết lập ban/quầy tư vấn chuyên trách và nêu rõ quy trình xử lý để người bệnh dễ tiếp cận.'
            }
        },
        '6': {
            title: { ja: '6. 開示・訂正対応', vi: '6. Xử lý yêu cầu công khai/hiệu đính' },
            phase: { ja: '運用・保管フェーズ', vi: 'Giai đoạn Vận hành/Lưu trữ' },
            phaseClass: 'tag-gold',
            desc: {
                ja: '患者本人からのカルテ開示、誤記の訂正、利用停止等の請求に対して、法的な基準に則って適切かつ誠実に対応する義務があります。拒否する場合は合理的な理由の説明が必要です。',
                vi: 'Có nghĩa vụ phản hồi phù hợp và trung thực theo tiêu chuẩn pháp lý đối với các yêu cầu từ bệnh nhân về công khai bệnh án, hiệu đính sai sót, hoặc tạm dừng sử dụng thông tin. Trường hợp từ chối cần có giải trình lý do hợp lý.'
            }
        },
        '7': {
            title: { ja: '7. 外部提供の制限', vi: '7. Hạn chế cung cấp ra bên ngoài' },
            phase: { ja: '提供・破棄フェーズ', vi: 'Giai đoạn Cung cấp/Hủy bỏ' },
            phaseClass: 'tag-teal',
            desc: {
                ja: '委託先の適切な監督を行うとともに、本人の事前同意を得ない第三者提供の制限ルールを厳守する義務があります。要配慮個人情報であるため、通常の個人情報で認められるオプトアウト提供は不可です。',
                vi: 'Có nghĩa vụ giám sát phù hợp bên nhận ủy thác công việc và tuân thủ nghiêm ngặt quy định hạn chế cung cấp cho bên thứ ba khi chưa có sự đồng ý của bản thân. Vì là thông tin cá nhân đặc biệt nhạy cảm, cơ chế tự động cung cấp Opt-out thông thường không được áp dụng.'
            }
        },
        '8': {
            title: { ja: '8. 不要データの消去', vi: '8. Xóa dữ liệu không cần thiết' },
            phase: { ja: '提供・破棄フェーズ', vi: 'Giai đoạn Cung cấp/Hủy bỏ' },
            phaseClass: 'tag-teal',
            desc: {
                ja: '法令（医師法等）で義務付けられた法定保存期間（カルテは完結の日から5年間、病院日誌は2年間等）を過ぎ、利用する必要がなくなった個人データは、速やかに、かつ復元不可能な方法で廃棄・消去しなければなりません。',
                vi: 'Sự hoàn thành của dữ liệu cá nhân sau khi hết thời hạn lưu trữ theo luật định (bệnh án lưu trữ ít nhất 5 năm kể từ ngày điều trị xong, nhật ký bệnh viện lưu trữ 2 năm, v.v.) và không còn nhu cầu sử dụng, cơ sở y tế phải nhanh chóng tiêu hủy/xóa bỏ dữ liệu cá nhân đó bằng phương pháp không thể khôi phục.'
            }
        }
    };

    function updateSbo122Step() {
        const isVi = document.body.classList.contains('lang-vi');
        const activeDot = document.querySelector('.step-dot.active');
        if (activeDot) {
            const stepNum = activeDot.getAttribute('data-sbo122-step');
            const data = sbo122StepsData[stepNum];
            if (data && sbo122StepTitle && sbo122StepPhase && sbo122StepDesc) {
                sbo122StepTitle.textContent = isVi ? data.title.vi : data.title.ja;
                sbo122StepPhase.className = `node-tag ${data.phaseClass}`;
                sbo122StepPhase.innerHTML = `
                    <span class="lang-ja">${data.phase.ja}</span>
                    <span class="lang-vi">${data.phase.vi}</span>
                `;
                sbo122StepDesc.textContent = isVi ? data.desc.vi : data.desc.ja;
            }
        }
    }

    stepDots.forEach(dot => {
        dot.addEventListener('click', () => {
            stepDots.forEach(d => {
                d.classList.remove('active');
                d.style.borderColor = 'rgba(255,255,255,0.1)';
            });
            dot.classList.add('active');
            dot.style.borderColor = 'var(--accent-teal)';

            const stepCard = document.getElementById('sbo122-step-card');
            if (stepCard) {
                stepCard.style.opacity = '0.3';
                setTimeout(() => {
                    updateSbo122Step();
                    stepCard.style.opacity = '1';
                }, 200);
            } else {
                updateSbo122Step();
            }
        });
    });

    window.updateSbo122Step = updateSbo122Step;


    // --- SBO 1.2.3: Interactive Matrix and Stepper Logic ---
    const sbo123MatrixData = {
        paternalism: {
            headerJa: 'パターナリズム (父権主義) の特徴',
            headerVi: 'Đặc trưng Chủ nghĩa gia trưởng (Paternalism)',
            rows: [
                {
                    labelJa: '意思決定者',
                    labelVi: 'Người quyết định',
                    valJa: '医師（「医師がすべてを決定し、指示する」）',
                    valVi: 'Bác sĩ ("Bác sĩ quyết định tất cả và chỉ định")'
                },
                {
                    labelJa: '情報の流れ',
                    labelVi: 'Luồng thông tin',
                    valJa: '医療者による情報の独占と不透明性',
                    valVi: 'Độc quyền thông tin bởi nhân viên y tế, thiếu minh bạch'
                },
                {
                    labelJa: '患者の役割',
                    labelVi: 'Vai trò bệnh nhân',
                    valJa: '受動的なサービス受け手・指示への従属',
                    valVi: 'Người nhận dịch vụ thụ động, tuân thủ chỉ định'
                },
                {
                    labelJa: '関係性の基盤',
                    labelVi: 'Nền tảng quan hệ',
                    valJa: '医師の「守秘義務」と「裁量権」',
                    valVi: 'Nghĩa vụ bảo mật và quyền tự quyết/tự ý của bác sĩ'
                }
            ]
        },
        'patient-centered': {
            headerJa: '患者中心の医療 (共創の医療) の特徴',
            headerVi: 'Đặc trưng Y tế lấy bệnh nhân làm trung tâm',
            rows: [
                {
                    labelJa: '意思決定者',
                    labelVi: 'Người quyết định',
                    valJa: '患者と医療者の共同意思決定 (インフォームド・チョイス/SDM)',
                    valVi: 'Quyết định chung giữa bệnh nhân và y bác sĩ (Informed Choice / SDM)'
                },
                {
                    labelJa: '情報の流れ',
                    labelVi: 'Luồng thông tin',
                    valJa: '積極的な情報開示と透明性の確保 (自己情報コントロール権)',
                    valVi: 'Công khai thông tin tích cực, minh bạch (Quyền tự kiểm soát thông tin)'
                },
                {
                    labelJa: '患者の役割',
                    labelVi: 'Vai trò bệnh nhân',
                    valJa: '医療チームの能動的な一員としての参画 (Patient Engagement)',
                    valVi: 'Tham gia tích cực với vai trò thành viên của đội ngũ y tế (Patient Engagement)'
                },
                {
                    labelJa: '関係性の基盤',
                    labelVi: 'Nền tảng quan hệ',
                    valJa: '「患者の権利」の尊重と相互のパートナーシップ',
                    valVi: 'Tôn trọng "Quyền của bệnh nhân" và quan hệ đối tác song phương'
                }
            ]
        }
    };

    const sbo123StepsData = {
        '1': {
            titleJa: 'Step 1: 事実に基づく説明',
            titleVi: 'Bước 1: Giải thích dựa trên sự thật',
            descJa: '疾患名、進行度、治療プロセス、生じうる合併症・副作用のリスク、および代替療法（治療を行わない選択肢も含む）に関する客観的な情報の提供。',
            descVi: 'Cung cấp thông tin khách quan về tên bệnh, giai đoạn, quy trình điều trị, rủi ro biến chứng/tác dụng phụ có thể xảy ra, và các giải pháp thay thế (bao gồm cả lựa chọn không điều trị).'
        },
        '2': {
            titleJa: 'Step 2: 十分な理解の促進',
            titleVi: 'Bước 2: Thúc đẩy thấu hiểu đầy đủ',
            descJa: '専門用語や一方的な説明を排除し、図や資料を用いて患者と家族が現状を正しく、かつ十分理解できるよう双方向で確認するプロセス。',
            descVi: 'Loại bỏ thuật ngữ chuyên môn hoặc giải thích một chiều, sử dụng hình vẽ và tài liệu để bệnh nhân và gia đình hiểu đúng và đủ về thực trạng thông qua tương tác hai chiều.'
        },
        '3': {
            titleJa: 'Step 3: 未来の展望と人生観の照らし合わせ',
            titleVi: 'Bước 3: Đối chiếu triển vọng tương lai với nhân sinh quan',
            descJa: '理解した客観的な事実（治療リスクや予後）を、患者自身が大切にする「生活の質(QOL)」、「家族との時間」、「仕事」などの固有の価値観と照らし合わせる。',
            descVi: 'Đối chiếu các sự thật khách quan đã hiểu (rủi ro điều trị, tiên lượng) với các giá trị riêng biệt của bệnh nhân như "chất lượng cuộc sống (QOL)", "thời gian bên gia đình", "công việc".'
        },
        '4': {
            titleJa: 'Step 4: 主体的な自己決定と同意',
            titleVi: 'Bước 4: Chủ động tự quyết định và đồng thuận',
            descJa: '医療者からの提案をそのまま受け入れるのではなく、自らの意思で最も納得のいく医療行為に同意、あるいは拒否・選択する共同意思決定（Shared Decision Making）。',
            descVi: 'Không chỉ nhận đề xuất từ y bác sĩ một cách thụ động, mà bằng ý chí của mình, đồng ý hoặc từ chối, chọn phương án y tế hài lòng nhất (Shared Decision Making).'
        }
    };

    const sbo123TabBtns = document.querySelectorAll('.sbo123-tab-btn');
    const sbo123MatrixHeader = document.getElementById('sbo123-matrix-header');
    const sbo123MatrixBody = document.getElementById('sbo123-matrix-body');

    function updateSbo123Matrix() {
        const activeTabBtn = document.querySelector('.sbo123-tab-btn.active');
        if (!activeTabBtn || !sbo123MatrixBody) return;
        const isVi = document.body.classList.contains('lang-vi');
        const tab = activeTabBtn.getAttribute('data-tab');
        const data = sbo123MatrixData[tab];

        if (data) {
            if (sbo123MatrixHeader) {
                sbo123MatrixHeader.textContent = isVi ? data.headerVi : data.headerJa;
            }
            sbo123MatrixBody.innerHTML = '';
            data.rows.forEach(row => {
                const tr = document.createElement('tr');
                tr.style.borderBottom = '1px solid rgba(255, 255, 255, 0.05)';
                tr.innerHTML = `
                    <td style="padding: 12px; font-weight: bold; color: #94a3b8;">
                        <span class="lang-ja">${row.labelJa}</span>
                        <span class="lang-vi">${row.labelVi}</span>
                    </td>
                    <td style="padding: 12px; color: #e2e8f0;">
                        <span class="lang-ja">${row.valJa}</span>
                        <span class="lang-vi">${row.valVi}</span>
                    </td>
                `;
                sbo123MatrixBody.appendChild(tr);
            });
            // trigger translation toggle on new elements
            document.querySelectorAll('#sbo123-matrix-body .lang-ja').forEach(el => {
                el.style.display = isVi ? 'none' : 'inline-block';
            });
            document.querySelectorAll('#sbo123-matrix-body .lang-vi').forEach(el => {
                el.style.display = isVi ? 'inline-block' : 'none';
            });
        }
    }

    sbo123TabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            sbo123TabBtns.forEach(b => {
                b.classList.remove('active');
                b.style.background = 'rgba(255, 255, 255, 0.05)';
                b.style.borderColor = 'rgba(255, 255, 255, 0.1)';
                b.style.color = '#e2e8f0';
            });
            btn.classList.add('active');
            const tab = btn.getAttribute('data-tab');
            if (tab === 'paternalism') {
                btn.style.background = 'rgba(239, 68, 68, 0.2)';
                btn.style.borderColor = '#ef4444';
                btn.style.color = '#ef4444';
            } else {
                btn.style.background = 'rgba(16, 185, 129, 0.2)';
                btn.style.borderColor = '#10b981';
                btn.style.color = '#10b981';
            }
            updateSbo123Matrix();
        });
    });

    const icSteps = document.querySelectorAll('.ic-step');
    const icProgress = document.getElementById('ic-progress');
    const icStepTitle = document.getElementById('ic-step-title');
    const icStepDesc = document.getElementById('ic-step-desc');

    function updateSbo123Step() {
        const isVi = document.body.classList.contains('lang-vi');
        const activeStep = document.querySelector('.ic-step.active');
        if (activeStep) {
            const stepNum = activeStep.getAttribute('data-step');
            const data = sbo123StepsData[stepNum];
            if (data && icStepTitle && icStepDesc) {
                icStepTitle.textContent = isVi ? data.titleVi : data.titleJa;
                icStepDesc.textContent = isVi ? data.descVi : data.descJa;
            }
            if (icProgress) {
                const percent = ((parseInt(stepNum) - 1) / 3) * 100;
                icProgress.style.width = `${percent}%`;
            }
        }
    }

    icSteps.forEach(step => {
        step.addEventListener('click', () => {
            icSteps.forEach(s => {
                s.classList.remove('active');
                s.querySelector('.step-num').style.borderColor = 'rgba(255,255,255,0.1)';
                s.querySelector('.step-num').style.color = '#94a3b8';
            });
            step.classList.add('active');
            step.querySelector('.step-num').style.borderColor = '#3b82f6';
            step.querySelector('.step-num').style.color = '#3b82f6';

            const stepCard = document.getElementById('ic-step-card');
            if (stepCard) {
                stepCard.style.opacity = '0.3';
                setTimeout(() => {
                    updateSbo123Step();
                    stepCard.style.opacity = '1';
                }, 200);
            } else {
                updateSbo123Step();
            }
        });
    });

    // Initialize SBO 1.2.3 components
    updateSbo123Matrix();
    updateSbo123Step();

    window.updateSbo123Matrix = updateSbo123Matrix;
    window.updateSbo123Step = updateSbo123Step;


    // --- 10. SBO 3.1.1: Organ Systems Selector Logic ---
    const systemSegments = document.querySelectorAll('[data-system]');
    const systemTitle = document.getElementById('system-title');
    const systemBody = document.getElementById('system-body');

    const systemsData = {
        nervous: {
            title: '<i class="fa-solid fa-brain"></i> 神経系 (Nervous System)',
            body: '脳、脊髄の中枢神経系と、自律神経や感覚運動神経を含む末梢神経系から成り、体内外の情報伝達・解析・生体反射コントロールを担う極めて高度な情報回路です。'
        },
        cardio: {
            title: '<i class="fa-solid fa-heart-pulse"></i> 循環器系 (Cardiovascular System)',
            body: '心臓をポンプとし、血管網（動脈・静脈・毛細血管）を通じて、酸素、栄養素、免疫細胞を全身の組織へ搬送し、代謝老廃物を回収する血液循環システムです。'
        },
        digestive: {
            title: '<i class="fa-solid fa-stomach"></i> 消化器系 (Digestive System)',
            body: '口腔から咽頭、食道、胃、小腸、大腸、ならびに肝臓、膵臓などの腺体から成り、食物の消化・栄養吸収・不要物の排泄、および解毒代謝を司ります。'
        }
    };

    systemSegments.forEach(segment => {
        segment.addEventListener('click', () => {
            systemSegments.forEach(s => s.classList.remove('active'));
            segment.classList.add('active');

            const key = segment.getAttribute('data-system');
            const data = systemsData[key];

            if (data && systemTitle) {
                const infoCard = document.getElementById('system-info-card');
                infoCard.style.opacity = '0.3';
                setTimeout(() => {
                    systemTitle.innerHTML = data.title;
                    systemBody.textContent = data.body;
                    infoCard.style.opacity = '1';
                }, 200);
            }
        });
    });


    // --- 11. SBO 3.1.2: Temperature Homeostasis Slider ---
    const tempSlider = document.getElementById('temp-slider');
    const tempGlow = document.getElementById('temp-glow');
    const tempStatusTitle = document.getElementById('temp-status-title');
    const tempStatusDesc = document.getElementById('temp-status-desc');

    const getTempHomeostasisStatus = (val) => {
        if (val <= 15) {
            return {
                title: '寒冷曝露（体熱産生の亢進）',
                desc: '環境温度が低いため、視床下部が自律神経（交感神経）を刺激。骨格筋が不随意に小刻みに収縮して熱を創り出し（ふるえ熱産生）、皮膚血管を収縮させて体表からの熱放散を最小限に防ぎ、核心体温を37°Cに死守します。',
                color: '#3b82f6'
            };
        } else if (val <= 28) {
            return {
                title: '体温恒常性（安定的維持）',
                desc: '体熱産生と熱放散のバランスが取れた快適ゾーンです。特別な生理調節を必要とせず、脳内の視床下部体温調節中枢の設定温度である「37.0°C」が安定して保たれます。',
                color: '#e2e8f0'
            };
        } else {
            return {
                title: '高温曝露（熱放散の亢進）',
                desc: '外部が高温なため、皮膚の血管を拡張させて皮膚への血流を増やし、熱を逃がします。さらに発汗を促し、汗が蒸発する際の気化熱によって体を冷却し、過度の体温上昇を防ぎます。',
                color: '#ef4444'
            };
        }
    };

    const updateTempUI = () => {
        if (!tempSlider) return;
        const value = parseInt(tempSlider.value);
        const status = getTempHomeostasisStatus(value);

        tempStatusTitle.textContent = status.title;
        tempStatusTitle.style.color = status.color;
        tempStatusDesc.textContent = status.desc;

        tempGlow.style.background = `linear-gradient(90deg, #3b82f6 0%, #e2e8f0 50%, #ef4444 100%)`;
        tempGlow.style.opacity = `${0.3 + (value / 80)}`;
    };

    if (tempSlider) {
        tempSlider.addEventListener('input', updateTempUI);
        updateTempUI();
    }


    // --- 12. SBO 4.1.1: Clinical Symptom Guide ---
    const symptomSegments = document.querySelectorAll('[data-symptom]');
    const symptomTitle = document.getElementById('symptom-title');
    const symptomBody = document.getElementById('symptom-body');

    const symptomsExamData = {
        fever: {
            title: '<i class="fa-solid fa-temperature-high"></i> 急性発熱に対する身体診察要点',
            body: '体温・バイタル測定に加え、咽頭・扁桃の発赤、リンパ節の変化を確認。呼吸音の聴診、腹部触診を並行して行い、髄膜刺激症状（項部硬直など）を確認して感染部位を鑑別診断します。'
        },
        headache: {
            title: '<i class="fa-solid fa-head-side-virus"></i> 突発性頭痛に対する身体診察要点',
            body: '突発的な激痛（人生最悪の痛み）の場合はくも膜下出血を疑い、直ちに瞳孔不同、対光反射、脳神経障害、髄膜刺激徴候を確認します。意識障害の有無や血圧測定も迅速な診断のために不可欠なステップです。'
        },
        cough: {
            title: '<i class="fa-solid fa-wind"></i> 慢性咳嗽に対する身体診察要点',
            body: '呼吸音の聴診により、喘鳴（ヒューヒュー音）や湿性ラ音（ブツブツ音）の有無を確認。喀痰の性状評価、アレルギー歴の確認を行い、咳喘息、副鼻腔気管支症候群、GERD、または結核などの慢性感染症を鑑別します。'
        }
    };

    symptomSegments.forEach(segment => {
        segment.addEventListener('click', () => {
            symptomSegments.forEach(s => s.classList.remove('active'));
            segment.classList.add('active');

            const key = segment.getAttribute('data-symptom');
            const data = symptomsExamData[key];

            if (data && symptomTitle) {
                const infoCard = document.getElementById('symptom-info-card');
                infoCard.style.opacity = '0.3';
                setTimeout(() => {
                    symptomTitle.innerHTML = data.title;
                    symptomBody.textContent = data.body;
                    infoCard.style.opacity = '1';
                }, 200);
            }
        });
    });


    // --- 13. SBO 4.1.2: Clinical Reasoning Solver ---
    const reasoningBtns = document.querySelectorAll('.reasoning-btn');
    const reasoningFeedback = document.getElementById('reasoning-feedback');
    const reasonFeedbackHeading = document.getElementById('reason-feedback-heading');
    const reasonFeedbackBody = document.getElementById('reason-feedback-body');

    const reasoningFeedbackData = {
        '1': {
            heading: '評価: 延期リスク極めて高 (危険)',
            body: '心筋梗塞が疑われる状況において、心筋酵素パネルの血液検査結果（通常数十分から2時間かかる）をただ待つことは、心筋虚血壊死の範囲を拡大させ命に関わる重大な遅延となります。ただちに判定できる検査を優先すべきです。'
        },
        '2': {
            heading: '評価: 正解！最も迅速かつ適切な診断初期対応 (Optimal Choice)',
            body: '正解です！冷や汗を伴う突然の左胸痛は急性冠症候群（急性心筋梗塞など）の典型例です。来院後10分以内に「十二誘導心電図 (12-Lead ECG)」を実施し、ST上昇の有無を確認。診断が確定すれば直ちにカテーテル治療（再灌流療法）の準備に移ります。'
        },
        '3': {
            heading: '評価: 医療安全管理上の高リスク',
            body: '肺塞栓症も重要な鑑別ですが、血行動態が不安定な可能性のある重症胸痛患者を、心電図によるモニター確認や心筋梗塞の除外も行わない状態でCT室へ移動・放置することは、致死的不整脈による心停止など医療安全上の致命的なリスクを伴います。'
        }
    };

    reasoningBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            reasoningBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const key = btn.getAttribute('data-reason');
            const data = reasoningFeedbackData[key];

            if (data && reasoningFeedback) {
                reasoningFeedback.style.display = 'block';
                reasonFeedbackHeading.textContent = data.heading;
                reasonFeedbackBody.textContent = data.body;
            }
        });
    });


    // --- 14. Deep-dive sub-sections interactions for SBO 1.1.1 (Pillars wheel, Data Health, Causal loops) ---
    const wheelCenter = document.querySelector('.wheel-center-housing');
    const wheelPetals = document.querySelectorAll('.wheel-petal');
    const petalTitle = document.getElementById('petal-title');
    const petalBody = document.getElementById('petal-body');

    const petalsData = {
        housing: {
            title: '<i class="fa-solid fa-house"></i> 住まい (Housing)',
            body: '生活の基盤。個人の尊厳保持と、安心できる居住空間を確保し、すべてのケアのベースを支える土台となるレイヤーです。'
        },
        iryou: {
            title: '<i class="fa-solid fa-notes-medical"></i> 医療 (Healthcare)',
            body: '「治し支える医療」。在宅療養支援診療所や訪問看護等を通じて、急性期・回復期・在宅期をシームレスに繋ぐ地域完結型の連携医療体制を提供します。'
        },
        kaigo: {
            title: '<i class="fa-solid fa-hands-holding"></i> 介護 (Nursing Care)',
            body: '「日常生活を支えるケア」。特別養護老人ホームや訪問介護、デイサービス等を通じて、要介護高齢者の日々の尊厳ある生活自立をサポートします。'
        },
        yobou: {
            title: '<i class="fa-solid fa-heart-pulse"></i> 予防 (Prevention)',
            body: '「健康寿命の延伸」。運動プログラムや栄養改善、介護予防健診を通じて、自立した生活期を長く維持し、虚弱（フレイル）を未然に防ぎます。'
        },
        shien: {
            title: '<i class="fa-solid fa-handshake-angle"></i> 生活支援 (Living Support)',
            body: '「地域共生社会の醸成」。配食サービスや見守り、近隣住民のボランティア互助活動を通じて、孤独を防ぎ地域で共に支え合う社会環境をつくります。'
        }
    };

    const handlePetalClick = (el, key) => {
        wheelPetals.forEach(p => p.classList.remove('active'));
        if (wheelCenter) wheelCenter.classList.remove('active');

        el.classList.add('active');
        const data = petalsData[key];
        if (data && petalTitle) {
            const infoCard = document.getElementById('petal-info-card');
            infoCard.style.opacity = '0.3';
            setTimeout(() => {
                petalTitle.innerHTML = data.title;
                petalBody.textContent = data.body;
                infoCard.style.opacity = '1';
            }, 200);
        }
    };

    if (wheelCenter) {
        wheelCenter.addEventListener('click', () => handlePetalClick(wheelCenter, 'housing'));
    }
    wheelPetals.forEach(petal => {
        const key = petal.getAttribute('data-petal');
        petal.addEventListener('click', () => handlePetalClick(petal, key));
    });


    // Data Health nodes selection
    const reformNodes = document.querySelectorAll('.reform-node');
    const nodeTitle = document.getElementById('node-title');
    const nodeBody = document.getElementById('node-body');

    const nodesData = {
        ndb: {
            title: '<i class="fa-solid fa-database"></i> NDB (ナショナルデータベース)',
            body: '全国のレセプト（診療報酬明細書）や特定健診情報を匿名化して蓄積した超巨大データベース。国の医療政策評価、医療資源の最適配分、および効果的な疾病予防戦略のエビデンス創出に貢献します。'
        },
        kaigodb: {
            title: '<i class="fa-solid fa-id-card-clip"></i> 介護DB (介護データベース)',
            body: '要介護認定情報や介護保険レセプトデータを集約。科学的介護の推進や、効果的なケアマネジメント手法の確立、地域ごとの介護サービス基盤整備の計画立案に活用されます。'
        },
        phr: {
            title: '<i class="fa-solid fa-mobile-screen-button"></i> PHR (個人健康データ / Personal Health Record)',
            body: '個人の生涯健康データ（学校健診、職域健診、薬歴、バイタル）を一元的にPHR（パーソナルヘルスレコード）として管理。個人主導で、予防から退院後の切れ目のない生活支援サービスが受けられます。'
        }
    };

    reformNodes.forEach(node => {
        node.addEventListener('click', () => {
            reformNodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');

            const key = node.getAttribute('data-node');
            const data = nodesData[key];

            if (data && nodeTitle) {
                const infoCard = document.getElementById('node-info-card');
                infoCard.style.opacity = '0.3';
                setTimeout(() => {
                    nodeTitle.innerHTML = data.title;
                    nodeBody.textContent = data.body;
                    infoCard.style.opacity = '1';
                }, 200);
            }
        });
    });


    // Causal chain flow
    const causalSteps = document.querySelectorAll('.causal-step');
    const causalDetailTitle = document.getElementById('causal-detail-title');
    const causalDetailBody = document.getElementById('causal-detail-body');

    const causalData = {
        origin: {
            title: '【起点】少子高齢化と疾病構造の同時変化',
            body: '世界最速で進む高齢化と、治療して治す急性期医療から、生活習慣病などの慢性疾患に寄り添い付き合う管理医療への構造変容がパラダイムシフトの根本的原因です。'
        },
        limit: {
            title: '【限界】2025年問題と病院モデルの崩壊',
            body: '団塊の世代が75歳以上に達し、医療介護の需要が爆発。一方、それを支える生産年齢人口は激減します。疾患のみを対象とした病院完結型のインフラは完全に限界を迎えます。'
        },
        solution: {
            title: '【解決】地域包括ケアシステムへの移行',
            body: '住まい・医療・介護・予防・生活支援を一体として住み慣れた地域で提供する「地域完結型」体制へ移行。さらにデータヘルス改革によって壁を越えた情報共有を実現します。'
        }
    };

    causalSteps.forEach(step => {
        step.addEventListener('click', () => {
            causalSteps.forEach(s => s.classList.remove('active'));
            step.classList.add('active');

            const key = step.getAttribute('data-step');
            const data = causalData[key];

            if (data && causalDetailTitle) {
                const detailBox = document.getElementById('causal-detail-box');
                detailBox.style.opacity = '0.3';
                setTimeout(() => {
                    causalDetailTitle.textContent = data.title;
                    causalDetailBody.textContent = data.body;
                    detailBox.style.opacity = '1';
                }, 200);
            }
        });
    });


    // --- 14b. Interactive Preventive Medicine Levels ---
    const prevLvlSegments = document.querySelectorAll('[data-prev-lvl]');
    const prevLvlTitle = document.getElementById('prev-lvl-title');
    const prevLvlBody = document.getElementById('prev-lvl-body');

    prevLvlSegments.forEach(segment => {
        segment.addEventListener('click', () => {
            prevLvlSegments.forEach(s => s.classList.remove('active'));
            segment.classList.add('active');

            const key = segment.getAttribute('data-prev-lvl');
            const data = prevLvlData[key];

            if (data && prevLvlTitle) {
                const infoCard = document.getElementById('prev-lvl-info');
                infoCard.style.opacity = '0.3';
                setTimeout(() => {
                    const isVi = document.body.classList.contains('lang-vi');
                    prevLvlTitle.textContent = isVi ? data.title.vi : data.title.ja;
                    prevLvlBody.textContent = isVi ? data.body.vi : data.body.ja;
                    infoCard.style.opacity = '1';
                }, 200);
            }
        });
    });


    // --- 14c. Specific Health Checkups (特定健診の階層化) Simulator Logic ---
    const stratCheckboxes = document.querySelectorAll('.strat-checkbox');
    const checkWaist = document.getElementById('check-waist');
    const checkBmi = document.getElementById('check-bmi');
    const checkAge65 = document.getElementById('check-age65');
    const checkBp = document.getElementById('check-bp');
    const checkBs = document.getElementById('check-bs');
    const checkLipid = document.getElementById('check-lipid');
    const checkSmoke = document.getElementById('check-smoke');

    const stratFeedbackTitle = document.getElementById('strat-feedback-title');
    const stratFeedbackBody = document.getElementById('strat-feedback-body');

    const updateStratification = () => {
        if (!checkWaist || !checkBmi || !checkAge65 || !checkBp || !checkBs || !checkLipid || !checkSmoke || !stratFeedbackTitle || !stratFeedbackBody) return;

        const isWaistChecked = checkWaist.checked;
        const isBmiChecked = checkBmi.checked;
        const isAge65Checked = checkAge65.checked;
        
        // Count additional risk factors (Step 2)
        let factorCount = 0;
        if (checkBp.checked) factorCount++;
        if (checkBs.checked) factorCount++;
        if (checkLipid.checked) factorCount++;
        
        // Smoking is only counted if there is at least 1 other risk factor (blood pressure, blood glucose, or lipid)
        const isSmokeChecked = checkSmoke.checked;
        const countSmoke = (isSmokeChecked && factorCount >= 1);
        
        const totalFactors = factorCount + (countSmoke ? 1 : 0);

        let categoryJa = '情報提供 (Information Provision)';
        let categoryVi = 'Cung cấp thông tin (Information Provision)';
        let descJa = '内臓脂肪蓄積の基準に該当しないか、追加のリスク因子がありません。現状の健康生活を維持するための情報提供のみを行います。';
        let descVi = 'Không tích tụ mỡ nội tạng hoặc không có yếu tố nguy cơ bổ sung. Thực hiện cung cấp thông tin duy trì lối sống lành mạnh.';
        let colorClass = '#2dd4bf'; // Teal

        // Group A: Waist size >= 85cm (male) / >= 90cm (female)
        // Group B: Waist normal but BMI >= 25
        
        if (isAge65Checked) {
            // Age 65-74 (前期高齢者): No "積極的支援" (Active Support) is applied to avoid over-intervention.
            if (isWaistChecked) {
                categoryJa = '動機付け支援 (Motivational Support)';
                categoryVi = 'Hỗ trợ khuyến khích (Motivational Support)';
                descJa = '【前期高齢者（65〜74歳）特例判定】内臓脂肪蓄積を認めるため「動機付け支援」の対象です。65歳以上の方は身体的負担や過度な介入を防ぐため、基準上は積極的支援に該当する場合でも「動機付け支援」に区分されます。原則1回の生活習慣改善面接が提供されます。';
                descVi = '【Đánh giá đặc biệt người cao tuổi giai đoạn đầu (65-74 tuổi)】Do tích tụ mỡ nội tạng nên thuộc đối tượng "Hỗ trợ khuyến khích". Để tránh gánh nặng thể chất và can thiệp quá mức ở người từ 65 tuổi trở lên, ngay cả khi đủ tiêu chuẩn hỗ trợ tích cực theo lý thuyết thì vẫn được phân vào nhóm "Hỗ trợ khuyến khích". Nguyên tắc là cung cấp 1 buổi phỏng vấn cải thiện lối sống.';
                colorClass = '#f59e0b'; // Gold
            } else if (isBmiChecked) {
                if (totalFactors >= 1) {
                    categoryJa = '動機付け支援 (Motivational Support)';
                    categoryVi = 'Hỗ trợ khuyến khích (Motivational Support)';
                    descJa = '【前期高齢者（65〜74歳）特例判定】腹囲は基準値未満ですが、BMI 25以上かつ追加リスク因子があるため「動機付け支援」の対象です（65歳以上のため積極的支援への移行はありません）。';
                    descVi = '【Đánh giá đặc biệt người cao tuổi giai đoạn đầu (65-74 tuổi)】Vòng bụng dưới mức tiêu chuẩn nhưng BMI ≥ 25 và có yếu tố nguy cơ bổ sung nên thuộc đối tượng "Hỗ trợ khuyến khích" (không chuyển sang hỗ trợ tích cực vì đã từ 65 tuổi trở lên).';
                    colorClass = '#f59e0b';
                } else {
                    categoryJa = '情報提供 (Information Provision)';
                    categoryVi = 'Cung cấp thông tin (Information Provision)';
                    descJa = '腹囲基準未満かつBMI 25以上ですが、追加リスク因子が認められないため、現状維持のための「情報提供」を行います。';
                    descVi = 'Vòng bụng dưới mức tiêu chuẩn và BMI ≥ 25 nhưng không phát hiện yếu tố nguy cơ bổ sung, thực hiện "Cung cấp thông tin" để duy trì hiện trạng.';
                    colorClass = '#2dd4bf';
                }
            } else {
                categoryJa = '情報提供 (Information Provision)';
                categoryVi = 'Cung cấp thông tin (Information Provision)';
                descJa = '腹囲およびBMIが基準未満であり、追加のリスク因子がありません。現状の健康生活習慣を継続するための「情報提供」を行います。';
                descVi = 'Vòng bụng và BMI đều dưới mức tiêu chuẩn, đồng thời không có yếu tố nguy cơ bổ sung. Thực hiện "Cung cấp thông tin" để tiếp tục duy trì lối sống lành mạnh.';
                colorClass = '#2dd4bf';
            }
        } else {
            // Age under 65 (65歳未満) - Standard Stratification Rules
            if (isWaistChecked) {
                if (totalFactors >= 2) {
                    categoryJa = '積極的支援 (Active Support)';
                    categoryVi = 'Hỗ trợ tích cực (Active Support)';
                    descJa = '【65歳未満・内臓脂肪型】内臓脂肪蓄積に加え、2つ以上の追加リスク因子を認めるため「積極的支援」の対象です。初回面接による行動計画作成後、3ヶ月以上の継続的な保健指導（対面、電話、メール等）および評価が行われます。';
                    descVi = '【Dưới 65 tuổi - Nhóm mỡ nội tạng】Tích tụ mỡ nội tạng kèm theo từ 2 yếu tố nguy cơ bổ sung trở lên nên thuộc đối tượng "Hỗ trợ tích cực". Sau khi lập kế hoạch hành động qua phỏng vấn lần đầu, hướng dẫn sức khỏe liên tục (gặp mặt, điện thoại, email...) và đánh giá sẽ được thực hiện trong ít nhất 3 tháng.';
                    colorClass = '#ef4444'; // Red
                } else if (totalFactors === 1) {
                    categoryJa = '動機付け支援 (Motivational Support)';
                    categoryVi = 'Hỗ trợ khuyến khích (Motivational Support)';
                    descJa = '【65歳未満・内臓脂肪型】内臓脂肪蓄積に加え、追加リスク因子が1つ認められるため「動機付け支援」の対象です。原則1回の個別・グループ面接が行われ、自主的な生活習慣改善を促します。';
                    descVi = '【Dưới 65 tuổi - Nhóm mỡ nội tạng】Tích tụ mỡ nội tạng kèm theo 1 yếu tố nguy cơ bổ sung nên thuộc đối tượng "Hỗ trợ khuyến khích". Nguyên tắc là thực hiện 1 buổi phỏng vấn cá nhân hoặc nhóm để khuyến khích tự cải thiện lối sống.';
                    colorClass = '#f59e0b'; // Gold
                } else {
                    categoryJa = '動機付け支援 (Motivational Support)';
                    categoryVi = 'Hỗ trợ khuyến khích (Motivational Support)';
                    descJa = '【65歳未満・内臓脂肪型】内臓脂肪の蓄積が見られるものの、他のリスク因子が現在認められないため「動機付け支援」の対象となります。自主的な行動計画を策定します。';
                    descVi = '【Dưới 65 tuổi - Nhóm mỡ nội tạng】Có tích tụ mỡ nội tạng nhưng chưa phát hiện yếu tố nguy cơ bổ sung nào khác, thuộc đối tượng "Hỗ trợ khuyến khích". Thiết lập kế hoạch hành động tự nguyện.';
                    colorClass = '#f59e0b';
                }
            } else if (isBmiChecked) {
                if (totalFactors >= 3) {
                    categoryJa = '積極的支援 (Active Support)';
                    categoryVi = 'Hỗ trợ tích cực (Active Support)';
                    descJa = '【65歳未満・非肥満内臓型】腹囲は基準値未満ですが、BMI 25以上かつ3つ以上の追加リスク因子を認めるため「積極的支援」の対象です。3ヶ月以上の手厚い生活習慣改善支援が提供されます。';
                    descVi = '【Dưới 65 tuổi - Nhóm nội tạng không béo phì】Vòng bụng dưới mức tiêu chuẩn nhưng BMI ≥ 25 và có từ 3 yếu tố nguy cơ bổ sung trở lên, thuộc đối tượng "Hỗ trợ tích cực". Hỗ trợ cải thiện lối sống chu đáo trong từ 3 tháng trở lên.';
                    colorClass = '#ef4444';
                } else if (totalFactors >= 1) {
                    categoryJa = '動機付け支援 (Motivational Support)';
                    categoryVi = 'Hỗ trợ khuyến khích (Motivational Support)';
                    descJa = '【65歳未満・非肥満内臓型】腹囲は基準値未満ですが、BMI 25以上かつ1〜2個の追加リスク因子があるため「動機付け支援」の対象です。生活習慣の改善に取り組んでください。';
                    descVi = '【Dưới 65 tuổi - Nhóm nội tạng không béo phì】Vòng bụng dưới mức tiêu chuẩn nhưng BMI ≥ 25 và có 1-2 yếu tố nguy cơ bổ sung nên thuộc đối tượng "Hỗ trợ khuyến khích". Hãy bắt đầu cải thiện lối sống.';
                    colorClass = '#f59e0b';
                } else {
                    categoryJa = '情報提供 (Information Provision)';
                    categoryVi = 'Cung cấp thông tin (Information Provision)';
                    descJa = '腹囲基準未満かつBMI 25以上ですが、追加リスク因子が認められないため、現状維持のための「情報提供」を行います。';
                    descVi = 'Vòng bụng dưới mức tiêu chuẩn và BMI ≥ 25 nhưng không phát hiện yếu tố nguy cơ bổ sung, thực hiện "Cung cấp thông tin" để duy trì hiện trạng.';
                    colorClass = '#2dd4bf';
                }
            } else {
                categoryJa = '情報提供 (Information Provision)';
                categoryVi = 'Cung cấp thông tin (Information Provision)';
                descJa = '腹囲およびBMIが基準未満であり、追加のリスク因子がありません。現状の健康生活習慣を継続するための「情報提供」を行います。';
                descVi = 'Vòng bụng và BMI đều dưới mức tiêu chuẩn, đồng thời không có yếu tố nguy cơ bổ sung. Thực hiện "Cung cấp thông tin" để tiếp tục duy trì lối sống lành mạnh.';
                colorClass = '#2dd4bf';
            }
        }

        const isVi = document.body.classList.contains('lang-vi');
        stratFeedbackTitle.textContent = isVi ? `判定：${categoryVi}` : `判定：${categoryJa}`;
        stratFeedbackTitle.style.color = colorClass;
        stratFeedbackBody.textContent = isVi ? descVi : descJa;
    };

    stratCheckboxes.forEach(cb => {
        cb.addEventListener('change', updateStratification);
    });

    updateStratification();


    // --- 15. Smooth scroll indicator handler ---
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', () => {
            const activeSboWrapper = document.querySelector('.sbo-section-wrapper.active');
            if (activeSboWrapper) {
                const firstSection = activeSboWrapper.querySelector('.section');
                if (firstSection) {
                    firstSection.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }

    // --- 16. SBO 1.1.2: Privacy Tabs & Primary/Secondary Use Simulators & Bridge Simulator ---
    const privacyTabs = document.querySelectorAll('[data-privacy-tab]');
    const privacyPanes = document.querySelectorAll('.privacy-tab-pane');
    
    privacyTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            privacyTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const targetPaneId = `privacy-tab-content-${tab.getAttribute('data-privacy-tab')}`;
            privacyPanes.forEach(pane => {
                if (pane.id === targetPaneId) {
                    pane.classList.add('active');
                } else {
                    pane.classList.remove('active');
                }
            });
        });
    });

    // Paternalism Seesaw auto animation
    const paternalismBox = document.getElementById('paternalism-weight');
    const selfDecBox = document.getElementById('selfdec-weight');
    if (paternalismBox && selfDecBox) {
        setInterval(() => {
            if (paternalismBox.classList.contains('active')) {
                paternalismBox.classList.remove('active');
                paternalismBox.style.transform = 'translateY(10px)';
                selfDecBox.classList.add('active');
                selfDecBox.style.transform = 'translateY(-10px)';
            } else {
                paternalismBox.classList.add('active');
                paternalismBox.style.transform = 'translateY(-10px)';
                selfDecBox.classList.remove('active');
                selfDecBox.style.transform = 'translateY(10px)';
            }
        }, 3000);
    }

    // Three actions cards interaction
    const actionCards = document.querySelectorAll('[data-action-card]');
    actionCards.forEach(card => {
        card.addEventListener('click', () => {
            actionCards.forEach(c => c.classList.remove('active'));
            card.classList.add('active');
        });
    });

    // Opt-in Lock Simulator
    const btnToggleOptin = document.getElementById('btn-toggle-optin');
    const optinLockIcon = document.getElementById('optin-lock-icon');
    const optinLockCircle = document.getElementById('optin-lock-circle');
    const optinBtnText = document.getElementById('optin-btn-text');
    
    if (btnToggleOptin) {
        btnToggleOptin.addEventListener('click', () => {
            if (optinLockIcon.classList.contains('fa-lock')) {
                optinLockIcon.className = 'fa-solid fa-lock-open';
                optinLockIcon.style.color = 'var(--accent-teal)';
                optinLockCircle.style.background = 'rgba(45, 212, 191, 0.05)';
                optinLockCircle.style.borderColor = 'var(--accent-teal)';
                optinBtnText.textContent = '明示的同意を取り消す';
                btnToggleOptin.classList.add('active');
            } else {
                optinLockIcon.className = 'fa-solid fa-lock';
                optinLockIcon.style.color = 'var(--text-muted)';
                optinLockCircle.style.background = 'rgba(255,255,255,0.02)';
                optinLockCircle.style.borderColor = 'rgba(255,255,255,0.1)';
                optinBtnText.textContent = '鍵を開ける（同意を示す）';
                btnToggleOptin.classList.remove('active');
            }
        });
    }

    // Opt-out Valve Simulator
    const btnToggleOptout = document.getElementById('btn-toggle-optout');
    const optoutValveIcon = document.getElementById('optout-valve-icon');
    const optoutValveCircle = document.getElementById('optout-valve-circle');
    const optoutBtnText = document.getElementById('optout-btn-text');

    if (btnToggleOptout) {
        btnToggleOptout.addEventListener('click', () => {
            if (optoutValveIcon.classList.contains('fa-droplet')) {
                optoutValveIcon.className = 'fa-solid fa-droplet-slash';
                optoutValveIcon.style.color = 'var(--text-muted)';
                optoutValveCircle.style.background = 'rgba(255,255,255,0.02)';
                optoutValveCircle.style.borderColor = 'rgba(255,255,255,0.1)';
                optoutBtnText.textContent = 'データの利活用を再開する';
                btnToggleOptout.classList.add('active');
            } else {
                optoutValveIcon.className = 'fa-solid fa-droplet';
                optoutValveIcon.style.color = 'var(--accent-gold)';
                optoutValveCircle.style.background = 'rgba(245, 158, 11, 0.05)';
                optoutValveCircle.style.borderColor = 'var(--accent-gold)';
                optoutBtnText.textContent = '利用を停止する（オプトアウト）';
                btnToggleOptout.classList.remove('active');
            }
        });
    }

    // Legal & Technical Bridge Simulator
    const btnToggleBridge = document.getElementById('btn-toggle-bridge');
    const bridgePath = document.getElementById('bridge-path');
    const personalWall = document.getElementById('personal-act-wall');
    const wallLockIcon = document.getElementById('wall-lock-icon');
    const stateHub = document.getElementById('state-operator-hub');
    const packet1 = document.getElementById('data-packet-1');
    const packet2 = document.getElementById('data-packet-2');
    const bridgeBtnText = document.getElementById('bridge-btn-text');

    if (btnToggleBridge) {
        btnToggleBridge.addEventListener('click', () => {
            if (bridgeBtnText.textContent.includes('有効化')) {
                // Enable Bridge
                bridgePath.style.opacity = '1';
                bridgePath.style.strokeWidth = '8';
                stateHub.style.opacity = '1';
                personalWall.style.borderColor = '#10b981';
                wallLockIcon.style.color = '#10b981';
                
                packet1.style.display = 'block';
                packet1.classList.add('data-packet-run-1');
                packet2.style.display = 'block';
                packet2.classList.add('data-packet-run-2');
                
                bridgeBtnText.textContent = '次世代医療基盤法の架け橋を無効化';
                btnToggleBridge.classList.add('active');
            } else {
                // Disable Bridge
                bridgePath.style.opacity = '0.1';
                stateHub.style.opacity = '0';
                personalWall.style.borderColor = 'rgba(255,255,255,0.1)';
                wallLockIcon.style.color = 'var(--text-muted)';
                
                packet1.style.display = 'none';
                packet1.classList.remove('data-packet-run-1');
                packet2.style.display = 'none';
                packet2.classList.remove('data-packet-run-2');
                
                bridgeBtnText.textContent = '次世代医療基盤法の架け橋を有効化';
                btnToggleBridge.classList.remove('active');
            }
        });
    }

    // Interactive Infinity Loop Nodes
    const loopNodes = document.querySelectorAll('.loop-node');
    const loopTitle = document.getElementById('loop-detail-title');
    const loopBody = document.getElementById('loop-detail-body');
    const loopCard = document.getElementById('loop-detail-card');

    const loopData = {
        primary: {
            title: '<i class="fa-solid fa-stethoscope"></i> Primary Use (一次利用)',
            body: '個人の尊厳を守る安全な「一次利用」（患者本人への直接的還元、チーム医療の共有、電子カルテ等）が、精緻な質の高い臨床データを生み出す起点となります。'
        },
        secondary: {
            title: '<i class="fa-solid fa-circle-nodes"></i> Secondary Use (二次利用)',
            body: 'そのデータが次世代医療基盤法によって適切に「匿名加工医療情報」化され、社会全体の健康寿命を延ばすために医学研究や新薬開発の「二次利用」へと流れ込みます。'
        },
        crossover: {
            title: '<i class="fa-solid fa-rotate"></i> Loop of Health Data (好循環サイクル)',
            body: '二次利用による疫学解析やエビデンス（臨床試験成果など）が、新たな治療法や診療ガイドラインを生み、再び「一次利用（目の前の患者の医療の質）」を飛躍的に向上させます。'
        }
    };

    loopNodes.forEach(node => {
        node.addEventListener('click', () => {
            loopNodes.forEach(n => n.classList.remove('active'));
            node.classList.add('active');

            const nodeId = node.id;
            let key = 'primary';
            if (nodeId === 'node-secondary-use') key = 'secondary';
            if (nodeId === 'node-crossover') key = 'crossover';

            const data = loopData[key];
            if (data && loopTitle) {
                loopCard.style.opacity = '0.3';
                setTimeout(() => {
                    loopTitle.innerHTML = data.title;
                    loopBody.textContent = data.body;
                    loopCard.style.opacity = '1';
                }, 200);
            }
        });
    });

    // --- GIO 1.1 SBO 1.1.3: Reorganization steps interaction ---
    const reorgSteps = document.querySelectorAll('[data-step-reorg]');
    const reorgTitle = document.getElementById('reorg-detail-title');
    const reorgBody = document.getElementById('reorg-detail-body');
    const reorgCard = document.getElementById('reorg-detail-box');

    const reorgData = {
        'step1': {
            titleJa: '【Step 1】データ収集：病床機能報告制度 (2014年開始)',
            titleVi: '【Step 1】Thu thập dữ liệu: Chế độ báo cáo chức năng giường bệnh (Bắt đầu từ 2014)',
            bodyJa: '全病院が自院の現在の病床機能（高度急性期・急性期・回復期・慢性期）と将来の予定を都道府県へ報告し、地域の医療体制を可視化します。',
            bodyVi: 'Tất cả các bệnh viện phải báo cáo chức năng giường bệnh hiện tại (cấp tính cao, cấp tính, hồi phục, mãn tính) và kế hoạch tương lai cho tỉnh thành để trực quan hóa hệ thống y tế địa phương.'
        },
        'step2': {
            titleJa: '【Step 2】分析と構想：将来の必要病床量の推計',
            titleVi: '【Step 2】Phân tích & Lên phương án: Ước tính số lượng giường bệnh cần thiết trong tương lai',
            bodyJa: '2025年などのマイルストーンにおける地域の医療需要を数理モデルで推計し、4区分ごとの必要ベッド数を算出します。',
            bodyVi: 'Sử dụng mô hình toán học để ước tính nhu cầu y tế của địa phương vào các mốc thời gian như năm 2025, từ đó tính toán số lượng giường bệnh cần thiết cho mỗi loại trong số 4 phân loại.'
        },
        'step3': {
            titleJa: '【Step 3】協議の促進：地域医療構想調整会議',
            titleVi: '【Step 3】Thúc đẩy thỏa thuận: Hội nghị điều phối Tầm nhìn y tế khu vực',
            bodyJa: '地域の医療関係者、保険者、住民代表が集まり、データに基づいて各病院の役割分担や病床転換について主体的に話し合います。',
            bodyVi: 'Các bên liên quan đến y tế địa phương, bên bảo hiểm và đại diện người dân họp lại để thảo luận chủ động về việc phân chia vai trò của từng bệnh viện và chuyển đổi giường bệnh dựa trên dữ liệu.'
        },
        'step4': {
            titleJa: '【Step 4】財政的後押し：地域医療介護総合確保基金',
            titleVi: '【Step 4】Thúc đẩy tài chính: Quỹ bảo đảm tích hợp dịch vụ y tế và chăm sóc dài hạn địa phương',
            bodyJa: '病床削減やダウンサイジング、機能転換に伴う費用（退職金支援や設備改修など）を支援するための公的基金を活用します。',
            bodyVi: 'Sử dụng quỹ công để hỗ trợ các chi phí (như trợ cấp thôi việc hoặc cải tạo trang thiết bị) phát sinh từ việc giảm số lượng giường bệnh, thu nhỏ quy mô hoặc chuyển đổi chức năng giường bệnh.'
        }
    };

    function updateReorgDetail() {
        const activeStep = document.querySelector('[data-step-reorg].active');
        if (!activeStep || !reorgTitle || !reorgBody) return;
        const isVi = document.body.classList.contains('lang-vi');
        const key = activeStep.getAttribute('data-step-reorg');
        const data = reorgData[key];
        if (data) {
            reorgTitle.textContent = isVi ? data.titleVi : data.titleJa;
            reorgBody.textContent = isVi ? data.bodyVi : data.bodyJa;
        }
    }

    reorgSteps.forEach(step => {
        step.addEventListener('click', () => {
            reorgSteps.forEach(s => s.classList.remove('active'));
            step.classList.add('active');
            
            if (reorgCard) {
                reorgCard.style.opacity = '0.3';
                setTimeout(() => {
                    updateReorgDetail();
                    reorgCard.style.opacity = '1';
                }, 200);
            } else {
                updateReorgDetail();
            }
        });
    });

    window.updateReorgDetail = updateReorgDetail;

    // --- GIO 1.1 SBO 1.1.3: Bed steps interaction ---
    const bedSteps = document.querySelectorAll('.bed-step');
    const bedTitle = document.getElementById('bed-info-title');
    const bedDesc = document.getElementById('bed-info-desc');
    const bedCard = document.getElementById('bed-info-card');

    const bedData = {
        'highly-acute': {
            title: '高度急性期 (Highly Acute Phase)',
            desc: '急性期の患者に対して、状態の早期安定化に向け、高度先進医療や集中的な治療（ICUや救命救急等）を提供する病床機能です。資源を極めて集中的に投入します。'
        },
        'acute': {
            title: '急性期 (Acute Phase)',
            desc: '急性期の治療や検査が必要な状態の患者に対し、手術や集中的な医学的治療を行う病床機能です。急性期状態から回復させ、早期の退院や回復期への移行を支援します。'
        },
        'convalescent': {
            title: '回復期 (Convalescent Phase)',
            desc: '急性期を経過した患者に対し、在宅復帰に向けたリハビリテーションの提供やADL（日常生活動作）の改善、退院支援を集中的に行うための病床機能です。'
        },
        'chronic': {
            title: '慢性期 (Chronic Phase)',
            desc: '急性期・回復期を経た後、長期にわたり療養や医学的管理が必要な患者を受け入れる病床機能です。生活に寄り添ったケアやリハビリを継続的に提供します。'
        },
        'community-home': {
            title: '在宅医療・地域ケア (Community & Home Care)',
            desc: '住み慣れた地域や自宅において、訪問診療や訪問看護、介護サービスを利用しながら療養を続ける環境です。地域包括ケアシステムが目指す最終的な受け皿です。'
        }
    };

    bedSteps.forEach(step => {
        step.addEventListener('click', () => {
            bedSteps.forEach(s => {
                s.classList.remove('active');
                s.style.background = s.getAttribute('data-bed') === 'community-home' ? 'rgba(16, 185, 129, 0.1)' : 'var(--bg-card)';
            });
            step.classList.add('active');
            step.style.background = step.getAttribute('data-bed') === 'community-home' ? 'rgba(16, 185, 129, 0.2)' : 'rgba(255,255,255,0.06)';

            const key = step.getAttribute('data-bed');
            const data = bedData[key];
            if (data && bedTitle) {
                bedCard.style.opacity = '0.3';
                setTimeout(() => {
                    bedTitle.textContent = data.title;
                    bedTitle.style.color = key === 'highly-acute' ? '#3b82f6' : (key === 'acute' ? '#60a5fa' : (key === 'convalescent' ? 'var(--accent-gold)' : (key === 'chronic' ? '#10b981' : '#34d399')));
                    bedDesc.textContent = data.desc;
                    bedCard.style.opacity = '1';
                }, 200);
            }
        });
    });

    // --- GIO 1.1 SBO 1.1.3: Team medicine interaction ---
    const teamMembers = document.querySelectorAll('.team-member');
    const teamTitle = document.getElementById('team-info-title');
    const teamDesc = document.getElementById('team-info-desc');
    const teamBox = document.getElementById('team-info-box');

    const teamData = {
        'patient': {
            title: '患者 (Patient) - 決定の主役',
            desc: 'ケアの決定における中心人物です。自らの価値観や意思（自己決定）に基づき、医療者・介護者から適切な説明（インフォームドコンセント）を受けながら方針を選択します。'
        },
        'doctor': {
            title: '医師 (Doctor) - 診断・治療と医学的意思決定',
            desc: '医学的な診断、治療方針の提示、専門的処置を行います。新しいパラダイムでは独断するのではなく、チームと患者のパートナーシップのもとで協働します。'
        },
        'nurse': {
            title: '看護師 (Nurse) - 療養上の世話と療養生活の支援',
            desc: '患者の最も近くで状態を観察し、日常生活を支援しながら医療的処置を行います。患者の代弁者（アドボケイト）として意思決定を支えます。'
        },
        'pharmacist': {
            title: '薬剤師 (Pharmacist) - 服薬管理と安全性確保',
            desc: '薬歴管理、重複処方の防止、副作用のチェックを行います。特に多剤併用（ポリファーマシー）が進む高齢患者に対して、安全な薬物治療を支援します。'
        },
        'caregiver': {
            title: '介護福祉士・ケアマネジャー (Care Worker / Care Manager)',
            desc: '日常生活の身体介護や支援を行い、ケアプランを策定して地域資源と患者を繋ぎます。医療と福祉を繋ぐキーパーソンです。'
        }
    };

    teamMembers.forEach(member => {
        member.addEventListener('click', () => {
            teamMembers.forEach(m => {
                m.classList.remove('active');
                m.style.background = m.getAttribute('data-member') === 'patient' ? 'var(--accent-gold-glow)' : 'rgba(255,255,255,0.05)';
                m.style.borderColor = m.getAttribute('data-member') === 'patient' ? 'var(--accent-gold)' : 'var(--border-card)';
            });
            member.classList.add('active');
            member.style.background = member.getAttribute('data-member') === 'patient' ? 'rgba(245, 158, 11, 0.3)' : 'rgba(6, 182, 212, 0.15)';
            member.style.borderColor = member.getAttribute('data-member') === 'patient' ? 'var(--accent-gold)' : 'var(--accent-teal)';

            const key = member.getAttribute('data-member');
            const data = teamData[key];
            if (data && teamTitle) {
                teamBox.style.opacity = '0.3';
                setTimeout(() => {
                    teamTitle.textContent = data.title;
                    teamTitle.style.color = key === 'patient' ? 'var(--accent-gold)' : 'var(--accent-teal)';
                    teamDesc.textContent = data.desc;
                    teamBox.style.opacity = '1';
                }, 200);
            }
        });
    });


    // --- SBO 2.1.1: The 4 Pillars of Social Security ---
    const sbo211Pillars = document.querySelectorAll('[data-sbo211-pillar]');
    const sbo211PillarTitle = document.getElementById('sbo211-pillar-title');
    const sbo211PillarBody = document.getElementById('sbo211-pillar-body');
    const sbo211PillarInfoCard = document.getElementById('sbo211-pillar-info-card');

    const sbo211PillarsData = {
        insurance: {
            icon: 'fa-shield-halved',
            title: {
                ja: '社会保険 (Social Insurance)',
                vi: 'Bảo hiểm xã hội (Social Insurance)'
            },
            body: {
                ja: '被保険者の保険料、事業主負担、国庫負担、一部負担金を財源とし、貧困を未然に防ぐ「防貧的機能」を持ちます。年金、医療、介護、雇用、労災の5つの保険から構成されています。',
                vi: 'Nguồn tài chính dựa trên phí bảo hiểm của người tham gia, đóng góp của chủ doanh nghiệp, ngân sách quốc gia và một phần tự chi trả, có chức năng phòng ngừa nghèo đói (phòng nghèo). Gồm 5 loại bảo hiểm: hưu trí, y tế, chăm sóc điều dưỡng, việc làm, tai nạn lao động.'
            }
        },
        assistance: {
            icon: 'fa-hand-holding-hand',
            title: {
                ja: '公的扶助 (Public Assistance)',
                vi: 'Cứu trợ công (Public Assistance)'
            },
            body: {
                ja: '憲法第25条の生存権（最低限度の生活保障）に基づき、生活に困窮する国民に対して最低限度の生活を保障し、自立を助長する「救貧的機能」を持ちます。生活保護や医療扶助などがこれにあたります。',
                vi: 'Dựa trên Quyền sinh tồn quy định tại Điều 25 Hiến pháp (bảo đảm mức sống tối thiểu), cứu trợ công thiết lập mạng lưới an sinh xã hội cuối cùng nhằm bảo đảm đời sống tối thiểu và thúc đẩy sự tự lập của người dân nghèo khó. Gồm hỗ trợ đời sống, hỗ trợ y tế (Medical Assistance).'
            }
        },
        welfare: {
            icon: 'fa-users',
            title: {
                ja: '社会福祉 (Social Welfare)',
                vi: 'Phúc lợi xã hội (Social Welfare)'
            },
            body: {
                ja: '高齢者、障害者、児童、ひとり親家庭などの社会的弱者が自立した日常生活を送れるよう公的にサポートし、ノーマライゼーション（誰もが普通の生活を送れる社会環境整備）の実現を目指します。',
                vi: 'Hỗ trợ công để những nhóm yếu thế trong xã hội như người cao tuổi, người khuyết tật, trẻ em, gia dịch đơn thân... có thể tự lập trong sinh hoạt hàng ngày, hướng tới bình thường hóa xã hội (Normalization) - tạo dựng môi trường xã hội nơi ai cũng có thể sống bình thường.'
            }
        },
        health: {
            icon: 'fa-heart-pulse',
            title: {
                ja: '公衆衛生 (Public Health)',
                vi: 'Y tế công cộng (Public Health)'
            },
            body: {
                ja: '疾病の予防、健康の維持・増進、母子保健、感染症対策、環境衛生など、地域社会全体の健康水準を向上させ、命を脅かすハザードに対処する広範な取り組みを指します。',
                vi: 'Nỗ lực nâng cao tiêu chuẩn sức khỏe của toàn xã hội và đối phó các mối nguy hại đe dọa sinh mạng bao gồm: phòng ngừa bệnh tật, duy trì/nâng cao sức khỏe, y tế mẹ và bé, đối phó dịch bệnh truyền nhiễm, vệ sinh môi trường.'
            }
        }
    };

    function updateSbo211Pillar() {
        const activePillar = document.querySelector('[data-sbo211-pillar].active') || document.querySelector('[data-sbo211-pillar]');
        if (!activePillar || !sbo211PillarTitle || !sbo211PillarBody) return;
        const key = activePillar.getAttribute('data-sbo211-pillar');
        const data = sbo211PillarsData[key];
        const isVi = document.body.classList.contains('lang-vi');
        if (data) {
            sbo211PillarTitle.innerHTML = `<i class="fa-solid ${data.icon}"></i> ${isVi ? data.title.vi : data.title.ja}`;
            sbo211PillarBody.textContent = isVi ? data.body.vi : data.body.ja;
        }
    }

    sbo211Pillars.forEach(pillar => {
        pillar.addEventListener('click', () => {
            sbo211Pillars.forEach(p => p.classList.remove('active'));
            pillar.classList.add('active');
            if (sbo211PillarInfoCard) {
                sbo211PillarInfoCard.style.opacity = '0.3';
                setTimeout(() => {
                    updateSbo211Pillar();
                    sbo211PillarInfoCard.style.opacity = '1';
                }, 200);
            } else {
                updateSbo211Pillar();
            }
        });
    });


    // --- SBO 2.1.1: Copayment Simulator ---
    const sbo211AgeTabs = document.querySelectorAll('[data-sbo211-age]');
    const sbo211CopayPercent = document.getElementById('sbo211-copay-percent');
    const sbo211CopayCircle = document.getElementById('sbo211-copay-circle');
    const sbo211CopayTitle = document.getElementById('sbo211-copay-title');
    const sbo211CopayDesc = document.getElementById('sbo211-copay-desc');

    const sbo211CopayData = {
        child: {
            percent: { ja: '2割', vi: '20%' },
            title: { ja: '義務教育就学前の乳幼児', vi: 'Trẻ em trước tuổi đi học' },
            desc: {
                ja: '原則2割負担。多くの自治体では独自の子ども医療費助成制度により、窓口負担を実質無料化または少額のワンコインに抑えています。',
                vi: 'Về nguyên tắc tự chi trả 20% (2割). Nhiều chính quyền địa phương có chế độ hỗ trợ chi phí y tế cho trẻ em giúp chi phí thực tế tại quầy bằng 0 hoặc rất nhỏ.'
            },
            color: '#3b82f6'
        },
        adult: {
            percent: { ja: '3割', vi: '30%' },
            title: { ja: '小学生〜69歳の現役世代', vi: 'Học sinh〜69 tuổi (Thế hệ lao động)' },
            desc: {
                ja: '原則3割負担。高額な医療費が必要となった場合は、所得に応じた「高額療養費制度」の適用により、自己負担上限額を超えた分が払い戻されます。',
                vi: 'Về nguyên tắc tự chi trả 30% (3割). Khi chi phí y tế tăng quá cao, "Chế độ chi phí y tế cao" (高額療養費制度) sẽ áp dụng giúp hoàn lại phần vượt quá giới hạn tối đa tùy thu nhập.'
            },
            color: '#ef4444'
        },
        'early-elder': {
            percent: { ja: '2割', vi: '20%' },
            title: { ja: '70〜74歳の前期高齢者', vi: '70〜74 tuổi (前期高齢者)' },
            desc: {
                ja: '原則2割負担。ただし、現役並みの所得がある高齢者は、現役世代と同様に3割負担となり、負担の公平性が図られています。',
                vi: 'Về nguyên tắc tự chi trả 20% (2割). Tuy nhiên, người có thu nhập tương đương thế hệ đang lao động sẽ chịu tỷ lệ 30% để đảm bảo tính công bằng.'
            },
            color: '#10b981'
        },
        'late-elder': {
            percent: { ja: '1割', vi: '10%' },
            title: { ja: '75歳以上の後期高齢者', vi: '75 tuổi trở lên (後期高齢者)' },
            desc: {
                ja: '原則1割負担（現役並み所得者は3割、一定以上の所得者は2割）。長寿社会において受診しやすさを支えるセーフティネットとして機能しています。',
                vi: 'Về nguyên tắc tự chi trả 10% (1割) (thu nhập cao trả 20% hoặc 30%). Vận hành nhằm hỗ trợ chi phí khám trong xã hội thọ mệnh.'
            },
            color: '#a855f7'
        }
    };

    function updateSbo211Copay() {
        const activeTab = document.querySelector('[data-sbo211-age].active') || document.querySelector('[data-sbo211-age]');
        if (!activeTab || !sbo211CopayPercent || !sbo211CopayTitle || !sbo211CopayDesc) return;
        const key = activeTab.getAttribute('data-sbo211-age');
        const data = sbo211CopayData[key];
        const isVi = document.body.classList.contains('lang-vi');
        if (data) {
            sbo211CopayPercent.textContent = isVi ? data.percent.vi : data.percent.ja;
            sbo211CopayTitle.textContent = isVi ? data.title.vi : data.title.ja;
            sbo211CopayDesc.textContent = isVi ? data.desc.vi : data.desc.ja;
            if (sbo211CopayCircle) {
                sbo211CopayCircle.style.borderColor = data.color;
                sbo211CopayCircle.style.boxShadow = `0 0 20px ${data.color}40`;
            }
        }
    }

    sbo211AgeTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            sbo211AgeTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            updateSbo211Copay();
        });
    });


    // --- SBO 2.1.1: Long-term Care Insurance Process Steps ---
    const sbo211Steps = document.querySelectorAll('[data-sbo211-step]');
    const sbo211StepTitle = document.getElementById('sbo211-step-title');
    const sbo211StepBody = document.getElementById('sbo211-step-body');
    const sbo211StepBox = document.getElementById('sbo211-step-box');

    const sbo211StepsData = {
        step1: {
            title: {
                ja: '【Step 1】申請',
                vi: '【Bước 1】Nộp đơn'
            },
            body: {
                ja: 'お住まいの市区町村の介護保険担当窓口、または地域包括支援センターにて要介護認定の申請手続きを行います。申請には介護保険被保険者証が必要です。',
                vi: 'Tiến hành thủ tục đăng ký chứng nhận cần chăm sóc điều dưỡng tại quầy phụ trách bảo hiểm chăm sóc của quận/thị trấn nơi cư trú hoặc Trung tâm hỗ trợ toàn diện khu vực. Cần có Thẻ bảo hiểm chăm sóc khi đăng ký.'
            }
        },
        step2: {
            title: {
                ja: '【Step 2】要介護認定',
                vi: '【Bước 2】Chứng nhận cần chăm sóc'
            },
            body: {
                ja: '調査員による自宅訪問での調査項目確認と、主治医意見書をもとに、介護認定審査会による判定が行われます。判定結果は非該当（自立）、要支援1〜2、要介護1〜5に分かれます。',
                vi: 'Dựa trên kết quả khảo sát thực tế tại nhà của điều tra viên và ý kiến của bác sĩ chủ trị, Hội đồng thẩm định chăm sóc điều dưỡng sẽ đưa ra quyết định phân loại: Tự lập (Không thuộc nhóm hỗ trợ), Cần hỗ trợ 1〜2, hoặc Cần chăm sóc 1〜5.'
            }
        },
        step3: {
            title: {
                ja: '【Step 3】ケアプラン作成',
                vi: '【Bước 3】Lập kế hoạch chăm sóc'
            },
            body: {
                ja: 'ケアマネージャー（介護支援専門員）が本人の状態や希望に合わせて、月単位の利用限度額の範囲内で最適な介護サービス計画（ケアプラン）を作成します。',
                vi: 'Care Manager (chuyên viên hỗ trợ chăm sóc) sẽ thiết lập kế hoạch dịch vụ chăm sóc tối ưu (Care Plan) hàng tháng phù hợp với tình trạng thể chất và nguyện vọng của đối tượng trong phạm vi giới hạn chi trả.'
            }
        },
        step4: {
            title: {
                ja: '【Step 4】サービス利用',
                vi: '【Bước 4】Sử dụng dịch vụ'
            },
            body: {
                ja: '作成されたケアプランに基づき、居宅サービス（訪問介護・デイサービス等）、施設サービス（特別養護老人ホーム等）、地域密着型サービスなど必要な支援を開始します。',
                vi: 'Bắt đầu nhận hỗ trợ thực tế dựa trên kế hoạch chăm sóc đã lập, bao gồm dịch vụ tại nhà (chăm sóc tại nhà, trung tâm trong ngày...), dịch vụ tại cơ sở (như nhà dưỡng lão đặc biệt...), hoặc dịch vụ gắn liền với địa phương.'
            }
        }
    };

    function updateSbo211Step() {
        const activeStep = document.querySelector('[data-sbo211-step].active') || document.querySelector('[data-sbo211-step]');
        if (!activeStep || !sbo211StepTitle || !sbo211StepBody) return;
        const key = activeStep.getAttribute('data-sbo211-step');
        const data = sbo211StepsData[key];
        const isVi = document.body.classList.contains('lang-vi');
        if (data) {
            sbo211StepTitle.textContent = isVi ? data.title.vi : data.title.ja;
            sbo211StepBody.textContent = isVi ? data.body.vi : data.body.ja;
        }
    }

    sbo211Steps.forEach(step => {
        step.addEventListener('click', () => {
            sbo211Steps.forEach(s => {
                s.classList.remove('active');
                s.style.border = '1px solid var(--border-card)';
            });
            step.classList.add('active');
            step.style.border = '1px solid var(--accent-teal)';
            if (sbo211StepBox) {
                sbo211StepBox.style.opacity = '0.3';
                setTimeout(() => {
                    updateSbo211Step();
                    sbo211StepBox.style.opacity = '1';
                }, 200);
            } else {
                updateSbo211Step();
            }
        });
    });

    window.updateSbo211Pillar = updateSbo211Pillar;
    window.updateSbo211Copay = updateSbo211Copay;
    window.updateSbo211Step = updateSbo211Step;

    updateSbo211Pillar();
    updateSbo211Copay();
    updateSbo211Step();

    // --- 介護保険の3つの基本理念 Interactive Cards ---
    const kaigoPrincipleData = {
        '1': {
            title: {
                ja: '【理念 1】利用者本位（りようしゃほんい）',
                vi: '【Nguyên tắc 1】Hướng về người dùng (利用者本位)'
            },
            body: {
                ja: 'サービスの設計・提供において、常に「利用者の生活・意思・尊厳」を最優先にする理念です。介護する側の都合や行政上の効率よりも、利用者一人ひとりの「その人らしい生活」の実現を中心に据えます。これは単なるサービスの受け手ではなく、主体的に生活する「生活者」として高齢者を捉えるパラダイムの転換を意味します。',
                vi: 'Đây là nguyên tắc luôn đặt "cuộc sống, ý chí và phẩm giá của người dùng" lên hàng đầu trong thiết kế và cung cấp dịch vụ. Thay vì ưu tiên sự tiện lợi của người chăm sóc hay hiệu quả hành chính, mục tiêu trung tâm là hiện thực hóa "cuộc sống đúng với bản thân" của từng người dùng. Điều này có nghĩa là thay đổi quan điểm, coi người cao tuổi không chỉ là người thụ hưởng dịch vụ mà là "người sống chủ động".'
            }
        },
        '2': {
            title: {
                ja: '【理念 2】利用者の選択尊重（せんたくそんちょう）',
                vi: '【Nguyên tắc 2】Tôn trọng lựa chọn của người dùng (利用者の選択尊重)'
            },
            body: {
                ja: '利用者が自分の意思でサービスの種類・提供事業者・ケアの内容を自由に選択できる権利を保障する理念です。以前は行政措置による「割り当て型」でしたが、介護保険法により「契約制」に移行し、利用者が複数の事業者を比較・選択できる「準市場（Quasi-market）」が形成されました。この選択権の保障が競争を促し、サービスの質向上につながります。',
                vi: 'Nguyên tắc này đảm bảo quyền của người dùng được tự do lựa chọn loại dịch vụ, nhà cung cấp và nội dung chăm sóc theo ý muốn của mình. Trước đây, mô hình là "phân bổ" theo biện pháp hành chính, nhưng sau khi có Luật bảo hiểm chăm sóc, chuyển sang "chế độ hợp đồng", hình thành "thị trường gần như cạnh tranh (Quasi-market)" nơi người dùng có thể so sánh và lựa chọn nhiều nhà cung cấp. Việc đảm bảo quyền lựa chọn này thúc đẩy cạnh tranh và nâng cao chất lượng dịch vụ.'
            }
        },
        '3': {
            title: {
                ja: '【理念 3】自立支援（じりつしえん）',
                vi: '【Nguyên tắc 3】Hỗ trợ tự lập (自立支援)'
            },
            body: {
                ja: '介護とは「何でも代わりにやってあげる」ことではなく、利用者が「できることは自分でする」自立した生活を維持・回復できるよう支援することです。身体的な自立（ADL）だけでなく、意思決定や社会参加における「精神的・社会的自立」も含まれます。過度な介助は残存機能を低下させるため、個々の能力を最大限活かした「リハビリテーション的視点」が重視されます。',
                vi: 'Chăm sóc không phải là "làm thay mọi thứ" mà là hỗ trợ người dùng duy trì và phục hồi cuộc sống tự lập, trong đó "những gì có thể làm được thì tự làm". Điều này bao gồm không chỉ sự tự lập về thể chất (ADL) mà còn cả "sự tự lập về tinh thần và xã hội" trong việc ra quyết định và tham gia xã hội. Vì hỗ trợ quá mức làm giảm chức năng còn lại, nên "quan điểm phục hồi chức năng" tận dụng tối đa khả năng cá nhân được đề cao.'
            }
        }
    };

    const kaigoPrincipleCards = document.querySelectorAll('.kaigo-principle-card');
    const kaigoDetail = document.getElementById('kaigo-principle-detail');
    const kaigoTitle = document.getElementById('kaigo-principle-title');
    const kaigoBody = document.getElementById('kaigo-principle-body');

    kaigoPrincipleCards.forEach(card => {
        card.addEventListener('click', () => {
            const principle = card.getAttribute('data-principle');
            const data = kaigoPrincipleData[principle];
            const isVi = document.body.classList.contains('lang-vi');

            kaigoPrincipleCards.forEach(c => {
                c.style.border = '1px solid var(--border-card)';
                c.style.background = 'rgba(255,255,255,0.02)';
            });
            card.style.border = '1px solid var(--accent-gold)';
            card.style.background = 'rgba(251,191,36,0.05)';

            if (data && kaigoDetail && kaigoTitle && kaigoBody) {
                kaigoDetail.style.display = 'block';
                kaigoDetail.style.opacity = '0.3';
                setTimeout(() => {
                    kaigoTitle.textContent = isVi ? data.title.vi : data.title.ja;
                    kaigoBody.textContent = isVi ? data.body.vi : data.body.ja;
                    kaigoDetail.style.opacity = '1';
                }, 150);
            }
        });
    });

    // ==========================================
    // --- REVIEW MODE & SPACED REPETITION QUIZ ---
    // ==========================================

    const QUIZ_QUESTIONS = [
        {
            id: 'q1',
            type: 'SBO 1.1.1',
            question: {
                ja: 'WHO（世界保健機関）が1948年の憲章前文で定義した健康の定義として、最も適切なものはどれか。',
                vi: 'Định nghĩa nào là phù hợp nhất về sức khỏe do WHO (Tổ chức Y tế Thế giới) định nghĩa trong Lời mở đầu của Hiến chương năm 1948?'
            },
            options: [
                {
                    ja: 'A. 病気や虚弱でない状態のことである',
                    vi: 'A. Trạng thái không có bệnh tật hay suy nhược'
                },
                {
                    ja: 'B. 身体的に完全に良好な状態であり、精神的・社会的側面は含まない',
                    vi: 'B. Trạng thái hoàn toàn khỏe mạnh về thể chất, không bao gồm các khía cạnh tinh thần và xã hội'
                },
                {
                    ja: 'C. 身体的・精神的・社会的に完全に良好な状態であり、単に病気や虚弱でないことではない',
                    vi: 'C. Trạng thái hoàn toàn khỏe mạnh về thể chất, tinh thần và xã hội, chứ không chỉ là không có bệnh tật hay suy nhược'
                },
                {
                    ja: 'D. スピリチュアルな側面を含む動的な状態である',
                    vi: 'D. Trạng thái động bao gồm cả khía cạnh tâm linh'
                }
            ],
            answer: 2,
            explanation: {
                ja: 'WHO憲章前文では、「健康とは、病気でないとか、弱っていないということではなく、肉体的にも、精神的にも、そして社会的にも、すべてが満たされた状態（完全な状態）にあることをいう」と定義されています。',
                vi: 'Theo Lời mở đầu Hiến chương WHO năm 1948, sức khỏe được định nghĩa là "một trạng thái hoàn toàn khỏe mạnh về thể chất, tinh thần và xã hội, chứ không chỉ là không có bệnh tật hay suy nhược".'
            }
        },
        {
            id: 'q2',
            type: 'SBO 1.1.1',
            question: {
                ja: '1998年のWHO執行理事会で提案された新しい健康定義に含まれる2つの観点として、正しい組み合わせはどれか。',
                vi: 'Hai quan điểm nào sau đây được đưa vào đề xuất định nghĩa mới về sức khỏe tại Hội nghị Chấp hành WHO năm 1998?'
            },
            options: [
                {
                    ja: 'A. 遺伝的（genetic）な側面と経済的（economic）な側面',
                    vi: 'A. Khía cạnh di truyền (genetic) và khía cạnh kinh tế (economic)'
                },
                {
                    ja: 'B. 動的（dynamic）な状態とスピリチュアル（spiritual）な側面',
                    vi: 'B. Trạng thái động (dynamic) và khía cạnh tâm linh (spiritual)'
                },
                {
                    ja: 'C. 予防的（preventive）な側面と環境的（environmental）な側面',
                    vi: 'C. Khía cạnh dự phòng (preventive) và khía cạnh môi trường (environmental)'
                },
                {
                    ja: 'D. 社会的（social）な側面と文化的（cultural）な側面',
                    vi: 'D. Khía cạnh xã hội (social) và khía cạnh văn hóa (cultural)'
                }
            ],
            answer: 1,
            explanation: {
                ja: '1998年の第101回WHO執行理事会において、健康の定義に「spiritual（霊的・スピリチュアル）」と「dynamic（動的）」の2つの用語を追加する提案がなされました。',
                vi: 'Tại Hội nghị Chấp hành WHO năm 1998, đã có đề xuất thêm hai khía cạnh là "spiritual" (tâm linh) và "dynamic" (trạng thái động) vào định nghĩa sức khỏe.'
            }
        },
        {
            id: 'q3',
            type: 'SBO 1.1.1',
            question: {
                ja: '1998年のWHO新定義提案の結果として正しいものはどれか。',
                vi: 'Kết quả nào sau đây là đúng về đề xuất định nghĩa mới của WHO năm 1998?'
            },
            options: [
                {
                    ja: 'A. 総会で可決され、公式な定義として採用された',
                    vi: 'A. Được thông qua tại Đại hội đồng và được áp dụng làm định nghĩa chính thức'
                },
                {
                    ja: 'B. 執行理事会で否決され、提案自体が廃棄された',
                    vi: 'B. Bị bác bỏ tại Hội đồng Chấp hành và bản thân đề xuất bị hủy bỏ'
                },
                {
                    ja: 'C. 執行理事会で提案されたが総会では否決され、公式定義の変更には至らなかった',
                    vi: 'C. Được đề xuất tại Hội đồng Chấp hành nhưng bị bác bỏ tại Đại hội đồng, nên định nghĩa chính thức không thay đổi'
                },
                {
                    ja: 'D. 国連総会において全会一致で承認された',
                    vi: 'D. Được phê duyệt đồng thuận tại Đại hội đồng Liên Hợp Quốc'
                }
            ],
            answer: 2,
            explanation: {
                ja: '執行理事会では採択され総会に勧告されましたが、総会での審議の結果、現行の定義を維持することとなり、公式定義の改正には至りませんでした。',
                vi: 'Đề xuất này mặc dù được Hội đồng Chấp hành thông qua nhưng khi đưa ra Đại hội đồng WHO đã không được thông qua, do đó không thay đổi định nghĩa chính thức.'
            }
        },
        {
            id: 'q4',
            type: 'SBO 1.1.2',
            question: {
                ja: '日本で急速に進行する少子高齢化に伴い、疾病構造はどのように変化しているか。',
                vi: 'Cấu trúc bệnh tật ở Nhật Bản đang thay đổi như thế nào cùng với sự già hóa dân số và giảm sinh nhanh chóng?'
            },
            options: [
                {
                    ja: 'A. 急性感染症から生活習慣病などの慢性疾患へ',
                    vi: 'A. Từ các bệnh nhiễm trùng cấp tính sang các bệnh mãn tính như bệnh do lối sống'
                },
                {
                    ja: 'B. 慢性疾患から急性感染症へ',
                    vi: 'B. Từ các bệnh mãn tính sang các bệnh nhiễm trùng cấp tính'
                },
                {
                    ja: 'C. 精神疾患から身体疾患へ',
                    vi: 'C. Từ bệnh tâm thần sang bệnh thể chất'
                },
                {
                    ja: 'D. 生活習慣病から遺伝性疾患へ',
                    vi: 'D. Từ bệnh do lối sống sang bệnh di truyền'
                }
            ],
            answer: 0,
            explanation: {
                ja: '少子高齢化や衛生環境の改善に伴い、疾病の中心は「急性感染症」からがん、心疾患、脳血管疾患などの「慢性疾患（生活習慣病）」へと変化しました。',
                vi: 'Cùng với sự già hóa dân số và cải thiện vệ sinh, cấu trúc bệnh tật đã chuyển từ bệnh nhiễm trùng cấp tính sang các bệnh mãn tính nguy hiểm như ung thư, tim mạch (bệnh do lối sống).'
            }
        },
        {
            id: 'q5',
            type: 'SBO 1.1.3',
            question: {
                ja: '「2025年問題」とは何を指すか。',
                vi: '"Vấn đề năm 2025" (2025年問題) đề cập đến điều gì?'
            },
            options: [
                {
                    ja: 'A. 2025年に医療保険制度が完全廃止される問題',
                    vi: 'A. Vấn đề hệ thống bảo hiểm y tế bị bãi bỏ hoàn toàn vào năm 2025'
                },
                {
                    ja: 'B. 2025年に団塊の世代がすべて75歳以上となり、医療・介護の需要が急増する問題',
                    vi: 'B. Vấn đề thế hệ Baby Boomer đều từ 75 tuổi trở lên vào năm 2025, dẫn đến nhu cầu y tế và chăm sóc tăng vọt'
                },
                {
                    ja: 'C. 2025年までに少子化が完全に解消されるという目標',
                    vi: 'C. Mục tiêu giải quyết hoàn toàn tình trạng giảm sinh vào năm 2025'
                },
                {
                    ja: 'D. 2025年に新型感染症が世界的に流行するという予測',
                    vi: 'D. Dự báo dịch bệnh truyền nhiễm mới bùng phát toàn cầu vào năm 2025'
                }
            ],
            answer: 1,
            explanation: {
                ja: '「団塊の世代」（約800万人）がすべて75歳以上の後期高齢者となり、社会保障費（医療・介護など）の急増が懸念される問題です。',
                vi: 'Đây là mốc thời gian thế hệ Baby Boomer (sinh năm 1947-1949) đều bước qua tuổi 75, khiến nhu cầu và chi phí y tế, chăm sóc điều dưỡng tại Nhật Bản tăng đột biến.'
            }
        },
        {
            id: 'q6',
            type: 'SBO 1.1.1',
            question: {
                ja: '一次予防（第一次予防）の内容として最も適切なものはどれか。',
                vi: 'Nội dung nào sau đây là phù hợp nhất về dự phòng cấp 1 (一次予防)?'
            },
            options: [
                {
                    ja: 'A. 発生した疾病を早期に発見し、早期に治療する',
                    vi: 'A. Phát hiện sớm và điều trị sớm bệnh tật đã phát sinh'
                },
                {
                    ja: 'B. リハビリテーションにより機能回復を図り、社会復帰を支援する',
                    vi: 'B. Hỗ trợ phục hồi chức năng bằng vật lý trị liệu và tái hòa nhập xã hội'
                },
                {
                    ja: 'C. 生活習慣の改善・健康教育・予防接種などにより疾病の発生を予防する',
                    vi: 'C. Phòng ngừa sự phát sinh bệnh tật bằng cách cải thiện lối sống, giáo dục sức khỏe, tiêm chủng...'
                },
                {
                    ja: 'D. 合併症の発症や症状の進展を防ぐための重症化予防',
                    vi: 'D. Phòng ngừa diễn tiến nặng để ngăn chặn biến chứng hoặc triệu chứng xấu đi'
                }
            ],
            answer: 2,
            explanation: {
                ja: '一次予防は、健康な人に対して疾病の発生自体を防ぐ取り組み（健康増進、予防接種、生活習慣改善など）を指します。',
                vi: 'Dự phòng cấp 1 nhằm ngăn chặn sự xuất hiện của bệnh tật ngay từ đầu thông qua tiêm chủng, cải thiện lối sống, nâng cao sức khỏe.'
            }
        },
        {
            id: 'q7',
            type: 'SBO 1.1.1',
            question: {
                ja: '二次予防（第二次予防）の内容として最も適切なものはどれか。',
                vi: 'Nội dung nào sau đây là phù hợp nhất về dự phòng cấp 2 (二次予防)?'
            },
            options: [
                {
                    ja: 'A. 予防接種や生活習慣の改善により疾病の発生を防ぐ',
                    vi: 'A. Phòng ngừa sự phát sinh bệnh tật bằng tiêm chủng hoặc cải thiện lối sống'
                },
                {
                    ja: 'B. 検診などにより疾病を早期発見し、重症化を予防する',
                    vi: 'B. Phát hiện sớm bệnh tật thông qua khám sàng lọc để ngăn ngừa diễn tiến nặng'
                },
                {
                    ja: 'C. リハビリテーションで機能を回復し、再発を防ぐ',
                    vi: 'C. Phục hồi chức năng và ngăn ngừa tái phát thông qua vật lý trị liệu'
                },
                {
                    ja: 'D. 要介護状態の高齢者を施設に収容して管理する',
                    vi: 'D. Đưa người cao tuổi cần chăm sóc vào các cơ sở để quản lý'
                }
            ],
            answer: 1,
            explanation: {
                ja: '二次予防は、発症した病気を「早期に発見し、早期に治療する」ことで重症化を防ぐ取り組み（健康診断や各種がん検診など）です。',
                vi: 'Dự phòng cấp 2 tập trung vào việc tầm soát, phát hiện sớm bệnh và điều trị kịp thời để tránh bệnh tiến triển nặng.'
            }
        },
        {
            id: 'q8',
            type: 'SBO 1.1.1',
            question: {
                ja: '三次予防（第三次予防）の内容として最も適切なものはどれか。',
                vi: 'Nội dung nào sau đây là phù hợp nhất về dự phòng cấp 3 (三次予防)?'
            },
            options: [
                {
                    ja: 'A. 健康教育により住民の健康意識を高める',
                    vi: 'A. Nâng cao nhận thức sức khỏe của người dân thông qua giáo dục sức khỏe'
                },
                {
                    ja: 'B. 検診による早期発見・早期治療',
                    vi: 'B. Phát hiện sớm và điều trị sớm bằng khám sức khỏe định kỳ'
                },
                {
                    ja: 'C. リハビリテーション等により機能回復を図り、社会復帰・再発予防を行う',
                    vi: 'C. Phục hồi chức năng, hỗ trợ tái hòa nhập xã hội và phòng ngừa tái phát bằng vật lý trị liệu...'
                },
                {
                    ja: 'D. メタボリックシンドロームのスクリーニングを実施する',
                    vi: 'D. Tiến hành sàng lọc hội chứng chuyển hóa (Metabolic Syndrome)'
                }
            ],
            answer: 2,
            explanation: {
                ja: '三次予防は、疾病が進行した後にリハビリテーションや再発防止を行い、社会復帰を支援する段階の対策です。',
                vi: 'Dự phòng cấp 3 bao gồm các biện pháp điều trị phục hồi chức năng, hạn chế tàn phế, ngăn ngừa tái phát và đưa bệnh nhân trở lại đời sống xã hội.'
            }
        },
        {
            id: 'q9',
            type: 'SBO 1.1.1',
            question: {
                ja: '「メタボリックシンドローム」の定義として正しいものはどれか。',
                vi: 'Định nghĩa nào là đúng về "Hội chứng chuyển hóa" (Metabolic Syndrome)?'
            },
            options: [
                {
                    ja: 'A. 内臓脂肪型肥満に高血糖・高血圧・脂質異常が合わさった状態',
                    vi: 'A. Trạng thái béo phì dạng tích tụ mỡ nội tạng kết hợp với đường huyết cao, huyết áp cao, rối loạn mỡ máu'
                },
                {
                    ja: 'B. 皮下脂肪型肥満に骨粗しょう症が合わさった状態',
                    vi: 'B. Trạng thái béo phì dưới da kết hợp với loãng xương'
                },
                {
                    ja: 'C. BMIが25以上の状態のみを指す',
                    vi: 'C. Chỉ trạng thái có chỉ số BMI từ 25 trở lên'
                },
                {
                    ja: 'D. 空腹時血糖が126mg/dL以上の状態',
                    vi: 'D. Trạng thái đường huyết lúc đói từ 126mg/dL trở lên'
                }
            ],
            answer: 0,
            explanation: {
                ja: 'メタボリックシンドロームは、内臓脂肪型肥満（腹囲が基準値以上）を必須要件とし、高血糖・高血圧・脂質異常のうち2つ以上を合併した状態を指します。',
                vi: 'Hội chứng chuyển hóa lấy béo phì nội tạng làm điều kiện tiên quyết, kết hợp thêm tối thiểu 2 trong 3 yếu tố: huyết áp cao, đường huyết cao, rối loạn lipid máu.'
            }
        },
        {
            id: 'q10',
            type: 'SBO 1.1.1',
            question: {
                ja: '特定健康診査（特定健診）の対象者として正しいものはどれか。',
                vi: 'Đối tượng của Khám sức khỏe đặc biệt (Tokutei Kenshin) là ai?'
            },
            options: [
                {
                    ja: 'A. 75歳以上のすべての高齢者',
                    vi: 'A. Tất cả người cao tuổi từ 75 tuổi trở lên'
                },
                {
                    ja: 'B. 20歳から39歳までの若年層',
                    vi: 'B. Thế hệ trẻ từ 20 đến 39 tuổi'
                },
                {
                    ja: 'C. 40歳から74歳までの公的医療保険加入者',
                    vi: 'C. Người tham gia bảo hiểm y tế công cộng từ 40 đến 74 tuổi'
                },
                {
                    ja: 'D. すべての年齢の生活習慣病患者',
                    vi: 'D. Tất cả bệnh nhân mắc bệnh do lối sống ở mọi lứa tuổi'
                }
            ],
            answer: 2,
            explanation: {
                ja: '特定健診は、生活習慣病予防のために40歳から74歳までの医療保険加入者（被扶養者を含む）を対象として実施されます。',
                vi: 'Tokutei Kenshin hướng tới đối tượng là người tham gia bảo hiểm y tế (và người phụ thuộc) từ 40 đến 74 tuổi nhằm phòng ngừa hội chứng chuyển hóa.'
            }
        },
        {
            id: 'q11',
            type: 'SBO 1.1.1',
            question: {
                ja: '特定健診が医療保険者に義務付けられたのはいつからか。',
                vi: 'Việc tổ chức Khám sức khỏe đặc biệt bắt đầu bắt buộc đối với các đơn vị bảo hiểm y tế từ khi nào?'
            },
            options: [
                {
                    ja: 'A. 2000年（平成12年）4月',
                    vi: 'A. Tháng 4 năm 2000 (Heisei 12)'
                },
                {
                    ja: 'B. 2004年（平成16年）4月',
                    vi: 'B. Tháng 4 năm 2004 (Heisei 16)'
                },
                {
                    ja: 'C. 2008年（平成20年）4月',
                    vi: 'C. Tháng 4 năm 2008 (Heisei 20)'
                },
                {
                    ja: 'D. 2013年（平成25年）4月',
                    vi: 'D. Tháng 4 năm 2013 (Heisei 25)'
                }
            ],
            answer: 2,
            explanation: {
                ja: '2008年（平成20年）4月施行の高齢者医療確保法に基づき、医療保険者に対する特定健診・特定保健指導の実施が義務化されました。',
                vi: 'Từ tháng 4 năm 2008, theo Luật Đảm bảo Chăm sóc Y tế cho Người cao tuổi, tất cả các công ty bảo hiểm y tế đều có nghĩa vụ thực hiện Tokutei Kenshin.'
            }
        },
        {
            id: 'q12',
            type: 'SBO 1.1.1',
            question: {
                ja: '特定健診における腹囲の基準値として正しいものはどれか。',
                vi: 'Tiêu chuẩn vòng bụng trong Khám sức khỏe đặc biệt ở Nhật Bản là bao nhiêu?'
            },
            options: [
                {
                    ja: 'A. 男性90cm以上、女性85cm以上',
                    vi: 'A. Nam từ 90cm trở lên, Nữ từ 85cm trở lên'
                },
                {
                    ja: 'B. 男性85cm以上、女性90cm以上',
                    vi: 'B. Nam từ 85cm trở lên, Nữ từ 90cm trở lên'
                },
                {
                    ja: 'C. 男女ともに90cm以上',
                    vi: 'C. Cả nam và nữ từ 90cm trở lên'
                },
                {
                    ja: 'D. 男女ともに85cm以上',
                    vi: 'D. Cả nam và nữ từ 85cm trở lên'
                }
            ],
            answer: 1,
            explanation: {
                ja: '日本のメタボリックシンドローム診断基準における内臓脂肪蓄積の指標として、腹囲の基準値は「男性85cm以上、女性90cm以上」と定められています。',
                vi: 'Vòng bụng tiêu chuẩn quy định cho béo phì nội tạng tại Nhật Bản là nam từ 85cm trở lên và nữ từ 90cm trở lên (lưu ý nữ cao hơn nam ở Nhật).'
            }
        },
        {
            id: 'q13',
            type: 'SBO 1.1.1',
            question: {
                ja: '特定保健指導の種類として正しい組み合わせはどれか。',
                vi: 'Sự kết hợp nào sau đây là đúng về các loại Hướng dẫn sức khỏe đặc biệt (Tokutei Hoken Shido)?'
            },
            options: [
                {
                    ja: 'A. 一般支援と専門支援',
                    vi: 'A. Hỗ trợ thông thường và Hỗ trợ chuyên môn'
                },
                {
                    ja: 'B. 基本支援と強化支援',
                    vi: 'B. Hỗ trợ cơ bản và Hỗ trợ tăng cường'
                },
                {
                    ja: 'C. 動機付け支援と積極的支援',
                    vi: 'C. Hỗ trợ tạo động lực (動機付け支援) và Hỗ trợ tích cực (積極的支援)'
                },
                {
                    ja: 'D. 初期支援と継続支援',
                    vi: 'D. Hỗ trợ ban đầu và Hỗ trợ liên tục'
                }
            ],
            answer: 2,
            explanation: {
                ja: '特定保健指導は、健診結果のリスク度合いに応じて、「情報提供」「動機付け支援」「積極的支援」の3つのレベルに分けて実施されます。',
                vi: 'Chương trình hướng dẫn sức khỏe đặc biệt chia thành: Cung cấp thông tin (cho nhóm ít nguy cơ), Hỗ trợ tạo động lực, và Hỗ trợ tích cực (cho nhóm nguy cơ cao).'
            }
        },
        {
            id: 'q14',
            type: 'SBO 1.1.1',
            question: {
                ja: '積極的支援に分類された対象者への保健指導の内容として正しいものはどれか。',
                vi: 'Nội dung hướng dẫn sức khỏe đối với đối tượng phân loại vào nhóm "Hỗ trợ tích cực" là gì?'
            },
            options: [
                {
                    ja: 'A. 初回面接のみで終了する',
                    vi: 'A. Chỉ kết thúc sau buổi phỏng vấn đầu tiên'
                },
                {
                    ja: 'B. 初回面接の後に3カ月以上の継続的な支援が実施される',
                    vi: 'B. Thực hiện hỗ trợ liên tục trong từ 3 tháng trở lên sau buổi phỏng vấn đầu tiên'
                },
                {
                    ja: 'C. 入院させてプログラムを実施する',
                    vi: 'C. Nhập viện để thực hiện chương trình'
                },
                {
                    ja: 'D. 医師による薬物療法のみが提供される',
                    vi: 'D. Chỉ cung cấp điều trị bằng thuốc bởi bác sĩ'
                }
            ],
            answer: 1,
            explanation: {
                ja: '「積極的支援」では、初回面接で行動計画を作成した後、3ヶ月以上にわたり電話、Eメール、面接などによる継続的な支援が行われます。',
                vi: 'Với nhóm "Hỗ trợ tích cực", nhân viên y tế sẽ hỗ trợ và giám sát liên tục trong tối thiểu 3 tháng qua điện thoại, email, gặp mặt sau buổi lên kế hoạch ban đầu.'
            }
        },
        {
            id: 'q15',
            type: 'SBO 1.1.1',
            question: {
                ja: '「健康日本21（第二次）」が開始された年はいつか。',
                vi: 'Chiến dịch "Sức khỏe Nhật Bản 21 (Lần 2)" bắt đầu vào năm nào?'
            },
            options: [
                {
                    ja: 'A. 2000年',
                    vi: 'A. Năm 2000'
                },
                {
                    ja: 'B. 2008年',
                    vi: 'B. Năm 2008'
                },
                {
                    ja: 'C. 2013年',
                    vi: 'C. Năm 2013'
                },
                {
                    ja: 'D. 2017年',
                    vi: 'D. Năm 2017'
                }
            ],
            answer: 2,
            explanation: {
                ja: '「健康日本21（第二次）」は、国民の健康増進の総合的な推進を図るため、2013年度（平成25年度）から開始されました。',
                vi: 'Chiến dịch Health Japan 21 (Lần thứ 2) được triển khai bắt đầu từ năm 2013 nhằm nâng cao tuổi thọ khỏe mạnh và thu hẹp chênh lệch vùng miền.'
            }
        },
        {
            id: 'q16',
            type: 'SBO 1.1.1',
            question: {
                ja: '「健康日本21（第二次）」の基本方向として含まれないものはどれか。',
                vi: 'Hướng đi cơ bản nào sau đây KHÔNG nằm trong chiến dịch "Sức khỏe Nhật Bản 21 (Lần 2)"?'
            },
            options: [
                {
                    ja: 'A. 健康寿命の延伸と健康格差の縮小',
                    vi: 'A. Kéo dài tuổi thọ khỏe mạnh và thu hẹp khoảng cách về sức khỏe'
                },
                {
                    ja: 'B. 生活習慣病の発症予防と重症化予防',
                    vi: 'B. Phòng ngừa phát sinh và ngăn ngừa biến chứng nặng của bệnh do lối sống'
                },
                {
                    ja: 'C. 栄養・運動・禁煙などの生活習慣の改善',
                    vi: 'C. Cải thiện lối sống như dinh dưỡng, vận động, cai thuốc lá...'
                },
                {
                    ja: 'D. 全国一律の医療費の引き下げ',
                    vi: 'D. Giảm chi phí y tế đồng loạt trên toàn quốc'
                }
            ],
            answer: 3,
            explanation: {
                ja: '健康日本21（第二次）の目標は国民の健康増進であり、直接的な医療費の引き下げ自体は基本方向には含まれていません。',
                vi: 'Mặc dù cải thiện sức khỏe gián tiếp giảm gánh nặng tài chính, nhưng việc cắt giảm viện phí trực tiếp không thuộc định hướng cơ bản của Health Japan 21.'
            }
        },
        {
            id: 'q17',
            type: 'SBO 1.1.2',
            question: {
                ja: 'データヘルス改革が推進開始されたのはいつか。',
                vi: 'Cải cách dữ liệu sức khỏe (Data Health Reform) bắt đầu được thúc đẩy từ năm nào?'
            },
            options: [
                {
                    ja: 'A. 2008年',
                    vi: 'A. Năm 2008'
                },
                {
                    ja: 'B. 2013年',
                    vi: 'B. Năm 2013'
                },
                {
                    ja: 'C. 2017年',
                    vi: 'C. Năm 2017'
                },
                {
                    ja: 'D. 2021年',
                    vi: 'D. Năm 2021'
                }
            ],
            answer: 2,
            explanation: {
                ja: '厚生労働省において「データヘルス改革推進本部」が設置され、本格的な取り組みが開始されたのは2017年（平成29年）です。',
                vi: 'Văn phòng Thúc đẩy cải cách dữ liệu sức khỏe thuộc Bộ Y tế, Lao động và Phúc lợi Nhật Bản được thành lập vào năm 2017.'
            }
        },
        {
            id: 'q18',
            type: 'SBO 1.1.2',
            question: {
                ja: 'データヘルス改革の4つの柱に含まれないものはどれか。',
                vi: 'Trụ cột nào sau đây KHÔNG nằm trong 4 trụ cột của Cải cách dữ liệu sức khỏe ở Nhật Bản?'
            },
            options: [
                {
                    ja: 'A. 自身の保健医療情報を閲覧できる仕組みの整備（PHR）',
                    vi: 'A. Xây dựng cơ chế cho phép cá nhân xem thông tin y tế của mình (PHR)'
                },
                {
                    ja: 'B. 医療・介護分野での情報利活用の推進',
                    vi: 'B. Thúc đẩy sử dụng thông tin trong lĩnh vực y tế và chăm sóc điều dưỡng'
                },
                {
                    ja: 'C. ゲノム医療の推進',
                    vi: 'C. Thúc đẩy y học bộ gen (Genome)'
                },
                {
                    ja: 'D. 海外の医療機関との国際データ共有',
                    vi: 'D. Chia sẻ dữ liệu quốc tế với các cơ sở y tế ở nước ngoài'
                }
            ],
            answer: 3,
            explanation: {
                ja: 'データヘルス改革の主な柱は、PHRの整備、医療・介護分野の情報利活用、ゲノム医療の推進、AI技術の活用などであり、国際データ共有は主要な柱に含まれていません。',
                vi: 'Bốn trụ cột bao gồm: xây dựng hệ thống PHR cho cá nhân, sử dụng dữ liệu y tế/điều dưỡng, phát triển y học gen và ứng dụng AI. Chia sẻ quốc tế không phải trụ cột chính.'
            }
        },
        {
            id: 'q19',
            type: 'SBO 1.1.2',
            question: {
                ja: 'NDB（ナショナルデータベース）に集約されるデータとして正しい組み合わせはどれか。',
                vi: 'Sự kết hợp nào sau đây là đúng về các dữ liệu được tập hợp trong NDB (National Database)?'
            },
            options: [
                {
                    ja: 'A. 戸籍情報と税務情報',
                    vi: 'A. Thông tin hộ tịch và thông tin thuế'
                },
                {
                    ja: 'B. レセプト情報と特定健診等の情報',
                    vi: 'B. Thông tin biên lai viện phí (Recept) và thông tin Khám sức khỏe đặc biệt...'
                },
                {
                    ja: 'C. 介護認定情報と学校健診情報',
                    vi: 'C. Thông tin xác nhận chăm sóc điều dưỡng và khám sức khỏe học đường'
                },
                {
                    ja: 'D. マイナンバー情報と銀行口座情報',
                    vi: 'D. Thông tin số cá nhân (My Number) và thông tin tài khoản ngân hàng'
                }
            ],
            answer: 1,
            explanation: {
                ja: 'NDB（レセプト情報・特定健診等データベース）には、医療機関の診療報酬明細書（レセプト）情報と特定健診・特定保健指導の情報が集約されています。',
                vi: 'NDB (Cơ sở dữ liệu quốc gia) lưu trữ dữ liệu tập hợp khổng lồ gồm biên lai y tế điện tử (recept) và thông tin khám sức khỏe đặc biệt tại Nhật.'
            }
        },
        {
            id: 'q20',
            type: 'SBO 2.1.2',
            question: {
                ja: '地域包括ケアシステムの目的として最も適切なものはどれか。',
                vi: 'Mục tiêu phù hợp nhất của Hệ thống chăm sóc toàn diện khu vực (地域包括ケアシステム) là gì?'
            },
            options: [
                {
                    ja: 'A. 高齢者をすべて施設に収容して一元的に管理する',
                    vi: 'A. Đưa tất cả người cao tuổi vào các cơ sở tập trung để quản lý thống nhất'
                },
                {
                    ja: 'B. 住み慣れた地域で自分らしく人生の最期まで暮らせるよう、住まい・医療・介護・予防・生活支援を一体的に提供する',
                    vi: 'B. Cung cấp tích hợp nhà ở, y tế, chăm sóc điều dưỡng, dự phòng và hỗ trợ đời sống nhằm giúp người cao tuổi sống theo cách của mình tại khu vực quen thuộc cho đến cuối đời'
                },
                {
                    ja: 'C. 医療費を削減するために在宅医療を廃止する',
                    vi: 'C. Bãi bỏ y tế tại nhà để cắt giảm chi phí y tế'
                },
                {
                    ja: 'D. 保健・医療・福祉を完全に分離して独立したサービスとして提供する',
                    vi: 'D. Phân tách hoàn toàn bảo vệ sức khỏe, y tế và phúc lợi thành các dịch vụ độc lập'
                }
            ],
            answer: 1,
            explanation: {
                ja: '地域包括ケアシステムは、重度な要介護状態となっても住み慣れた地域で自分らしい暮らしを人生の最後まで続けることができるよう、住まい・医療・介護・予防・生活支援が一体的に提供される体制です。',
                vi: 'Mục tiêu của hệ thống là cung cấp toàn diện nhà ở, y tế, chăm sóc điều dưỡng, phòng ngừa và hỗ trợ sinh hoạt để người dân được sống hạnh phúc theo cách của mình tại chính nơi thân thuộc đến cuối đời.'
            }
        }
    ];

    let quizQuestionsList = [];
    let currentQuizIndex = 0;
    let correctCountThisRun = 0;

    function getSpacedRepStats() {
        const stored = localStorage.getItem('yts_yt_spaced_rep');
        return stored ? JSON.parse(stored) : {};
    }

    function saveSpacedRepStats(stats) {
        localStorage.setItem('yts_yt_spaced_rep', JSON.stringify(stats));
    }

    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function stripOptionPrefix(text) {
        if (!text) return '';
        return text.replace(/^[A-D]\.\s*/, '');
    }

    function buildQuizQuestions() {
        const stats = getSpacedRepStats();
        const needsReview = [];
        const others = [];

        QUIZ_QUESTIONS.forEach(q => {
            const qStat = stats[q.id] || { consecutiveCorrect: 0, inReviewList: false };
            if (qStat.inReviewList) {
                needsReview.push(q);
            } else {
                others.push(q);
            }
        });

        shuffleArray(needsReview);
        shuffleArray(others);

        const combined = [...needsReview, ...others];

        return combined.map(q => {
            const qCopy = { ...q, options: q.options.map(opt => ({ ...opt })) };
            const correctTextJa = stripOptionPrefix(q.options[q.answer].ja);
            shuffleArray(qCopy.options);
            qCopy.answer = qCopy.options.findIndex(opt => stripOptionPrefix(opt.ja) === correctTextJa);
            return qCopy;
        });
    }

    function getQuizHistory() {
        const stored = localStorage.getItem('yts_yt_spaced_rep_history');
        return stored ? JSON.parse(stored) : [];
    }

    function saveQuizHistory(history) {
        localStorage.setItem('yts_yt_spaced_rep_history', JSON.stringify(history));
    }

    function logQuizResult(correctCount, totalCount) {
        if (totalCount === 0) return;
        const history = getQuizHistory();
        const now = new Date();
        const dateStr = now.toLocaleDateString() + ' ' + now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        
        history.push({
            date: dateStr,
            score: `${correctCount}/${totalCount}`,
            percent: Math.round((correctCount / totalCount) * 100),
            wrongCount: totalCount - correctCount
        });
        
        if (history.length > 50) history.shift();
        saveQuizHistory(history);
        updateDashboardUI();
    }

    let myChartInstance = null;
    function renderProgressChart() {
        const canvas = document.getElementById('progressChart');
        if (!canvas) return;

        if (typeof Chart === 'undefined') {
            console.log("Chart.js not loaded yet.");
            return;
        }

        const ctx = canvas.getContext('2d');
        const history = getQuizHistory();
        const last7 = history.slice(-7);
        const labels = last7.map((h, i) => `#${i + 1}`);
        const dataPoints = last7.map(h => h.percent);

        if (dataPoints.length === 0) {
            labels.push('Start');
            dataPoints.push(0);
        }

        if (myChartInstance) {
            myChartInstance.destroy();
        }

        myChartInstance = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: document.body.classList.contains('lang-vi') ? 'Tỉ lệ chính xác (%)' : '正答率 (%)',
                    data: dataPoints,
                    borderColor: '#14b8a6',
                    backgroundColor: 'rgba(20, 184, 166, 0.1)',
                    borderWidth: 2.5,
                    tension: 0.3,
                    fill: true,
                    pointBackgroundColor: '#fbbf24',
                    pointRadius: 4
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                plugins: {
                    legend: { display: false }
                },
                scales: {
                    y: {
                        min: 0,
                        max: 100,
                        grid: { color: 'rgba(255,255,255,0.05)' },
                        ticks: { color: '#94a3b8' }
                    },
                    x: {
                        grid: { display: false },
                        ticks: { color: '#94a3b8' }
                    }
                }
            }
        });
    }

    function updateDashboardUI() {
        const stats = getSpacedRepStats();
        const isVi = document.body.classList.contains('lang-vi');
        let needsReviewCount = 0;
        let totalCorrect = 0;
        let totalAttempted = 0;
        let currentStreak = stats._streak || 0;
        let uniqueAnswered = 0;

        let ch1Total = 0, ch2Total = 0;
        let ch1Correct = 0, ch2Correct = 0;

        QUIZ_QUESTIONS.forEach(q => {
            const qStat = stats[q.id];
            
            const isCorrect = qStat && qStat.totalCorrect > 0;
            if (q.type.startsWith('SBO 1.')) {
                ch1Total++;
                if (isCorrect) ch1Correct++;
            } else if (q.type.startsWith('SBO 2.')) {
                ch2Total++;
                if (isCorrect) ch2Correct++;
            }

            if (qStat) {
                if (qStat.inReviewList) {
                    needsReviewCount++;
                }
                totalCorrect += (qStat.totalCorrect || 0);
                totalAttempted += (qStat.totalAttempted || 0);
                if (qStat.totalAttempted > 0) {
                    uniqueAnswered++;
                }
            }
        });

        const streakEl = document.getElementById('review-streak');
        const needsEl = document.getElementById('review-needs');
        const accuracyEl = document.getElementById('review-accuracy');

        if (streakEl) streakEl.textContent = currentStreak;
        if (needsEl) needsEl.textContent = needsReviewCount;
        
        if (accuracyEl) {
            if (totalAttempted === 0) {
                accuracyEl.textContent = '0%';
            } else {
                const rate = Math.round((totalCorrect / totalAttempted) * 100);
                accuracyEl.textContent = `${rate}%`;
            }
        }

        const totalAnsEl = document.getElementById('total-questions-answered');
        if (totalAnsEl) totalAnsEl.textContent = uniqueAnswered;

        const ch1Percent = ch1Total > 0 ? Math.round((ch1Correct / ch1Total) * 100) : 0;
        const ch2Percent = ch2Total > 0 ? Math.round((ch2Correct / ch2Total) * 100) : 0;

        const ch1PercentEl = document.getElementById('chapter1-percent');
        const ch1BarEl = document.getElementById('chapter1-progress-bar');
        const ch2PercentEl = document.getElementById('chapter2-percent');
        const ch2BarEl = document.getElementById('chapter2-progress-bar');

        if (ch1PercentEl) ch1PercentEl.textContent = `${ch1Percent}%`;
        if (ch1BarEl) ch1BarEl.style.width = `${ch1Percent}%`;
        if (ch2PercentEl) ch2PercentEl.textContent = `${ch2Percent}%`;
        if (ch2BarEl) ch2BarEl.style.width = `${ch2Percent}%`;

        const sboMap = {};
        QUIZ_QUESTIONS.forEach(q => {
            if (!sboMap[q.type]) {
                sboMap[q.type] = { correct: 0, attempted: 0 };
            }
            const qStat = stats[q.id];
            if (qStat) {
                sboMap[q.type].correct += (qStat.totalCorrect || 0);
                sboMap[q.type].attempted += (qStat.totalAttempted || 0);
            }
        });

        const sboListEl = document.getElementById('sbo-accuracy-list');
        if (sboListEl) {
            sboListEl.innerHTML = '';
            Object.keys(sboMap).sort().forEach(sbo => {
                const data = sboMap[sbo];
                const percent = data.attempted > 0 ? Math.round((data.correct / data.attempted) * 100) : 0;
                
                const item = document.createElement('div');
                item.innerHTML = `
                    <div style="display: flex; justify-content: space-between; font-size: 0.8rem; margin-bottom: 4px;">
                        <span style="font-weight: 600; color: #fff;">${sbo}</span>
                        <span style="color: var(--text-secondary);">${percent}% (${data.correct}/${data.attempted})</span>
                    </div>
                    <div style="height: 6px; background: rgba(255,255,255,0.06); border-radius: 3px; overflow: hidden;">
                        <div style="height: 100%; width: ${percent}%; background: var(--accent-teal); border-radius: 3px; transition: width 0.3s ease;"></div>
                    </div>
                `;
                sboListEl.appendChild(item);
            });
        }

        const tbody = document.getElementById('history-table-body');
        if (tbody) {
            tbody.innerHTML = '';
            const history = getQuizHistory().slice().reverse();
            if (history.length === 0) {
                tbody.innerHTML = `
                    <tr>
                        <td colspan="3" style="padding: 15px; text-align: center; color: var(--text-muted);">
                            <span class="lang-ja">履歴はありません</span>
                            <span class="lang-vi">Chưa có lịch sử làm bài</span>
                        </td>
                    </tr>
                `;
            } else {
                history.forEach(h => {
                    const row = document.createElement('tr');
                    row.style.borderBottom = '1px solid rgba(255,255,255,0.05)';
                    row.innerHTML = `
                        <td style="padding: 8px 12px;">${h.date}</td>
                        <td style="padding: 8px 12px; font-weight: bold; color: var(--accent-teal);">${h.score} (${h.percent}%)</td>
                        <td style="padding: 8px 12px; color: #ef4444;">${h.wrongCount}</td>
                    `;
                    tbody.appendChild(row);
                });
            }
        }

        renderProgressChart();
    }

    function activateReviewMode() {
        sboNavLinks.forEach(l => l.classList.remove('active'));
        sboWrappers.forEach(w => w.classList.remove('active'));

        if (reviewModeBtn) reviewModeBtn.classList.add('active');
        if (reviewSection) reviewSection.classList.add('active');
        if (heroSection) heroSection.style.display = 'none';

        const startScreen = document.getElementById('quiz-start-screen');
        const activeScreen = document.getElementById('quiz-active-screen');
        const summaryScreen = document.getElementById('quiz-summary-screen');
        
        if (startScreen) startScreen.style.display = 'block';
        if (activeScreen) activeScreen.style.display = 'none';
        if (summaryScreen) summaryScreen.style.display = 'none';

        updateDashboardUI();
    }

    function deactivateReviewMode() {
        if (reviewModeBtn) reviewModeBtn.classList.remove('active');
        if (reviewSection) reviewSection.classList.remove('active');
        if (heroSection) heroSection.style.display = '';
    }

    console.log("App.js initialization complete, binding reviewModeBtn:", reviewModeBtn);

    if (reviewModeBtn) {
        reviewModeBtn.addEventListener('click', () => {
            console.log("reviewModeBtn clicked!");
            window.location.hash = '';
            activateReviewMode();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const startQuizBtn = document.getElementById('start-quiz-btn');
    if (startQuizBtn) {
        startQuizBtn.addEventListener('click', () => {
            quizQuestionsList = buildQuizQuestions();
            currentQuizIndex = 0;
            correctCountThisRun = 0;

            const startScreen = document.getElementById('quiz-start-screen');
            const activeScreen = document.getElementById('quiz-active-screen');
            
            if (startScreen) startScreen.style.display = 'none';
            if (activeScreen) activeScreen.style.display = 'block';

            renderQuestion(currentQuizIndex);
        });
    }

    const nextQuizBtn = document.getElementById('quiz-next-btn');
    if (nextQuizBtn) {
        nextQuizBtn.addEventListener('click', () => {
            currentQuizIndex++;
            renderQuestion(currentQuizIndex);
        });
    }

    const restartQuizBtn = document.getElementById('quiz-restart-btn');
    if (restartQuizBtn) {
        restartQuizBtn.addEventListener('click', () => {
            quizQuestionsList = buildQuizQuestions();
            currentQuizIndex = 0;
            correctCountThisRun = 0;

            const startScreen = document.getElementById('quiz-start-screen');
            const activeScreen = document.getElementById('quiz-active-screen');
            const summaryScreen = document.getElementById('quiz-summary-screen');

            if (startScreen) startScreen.style.display = 'none';
            if (summaryScreen) summaryScreen.style.display = 'none';
            if (activeScreen) activeScreen.style.display = 'block';

            renderQuestion(currentQuizIndex);
        });
    }

    function renderQuestion(index) {
        if (index >= quizQuestionsList.length) {
            showSummary();
            return;
        }

        const q = quizQuestionsList[index];
        const isVi = document.body.classList.contains('lang-vi');

        const progressText = document.getElementById('quiz-progress-text');
        const qType = document.getElementById('quiz-question-type');
        const qText = document.getElementById('quiz-question-text');
        const optionsContainer = document.getElementById('quiz-options-container');
        const explanationBox = document.getElementById('quiz-explanation-box');
        const nextBtn = document.getElementById('quiz-next-btn');

        if (progressText) {
            progressText.textContent = isVi 
                ? `Câu hỏi ${index + 1} / ${quizQuestionsList.length}` 
                : `問題 ${index + 1} / ${quizQuestionsList.length}`;
        }
        if (qType) {
            qType.textContent = q.type;
        }
        if (qText) {
            qText.textContent = isVi ? q.question.vi : q.question.ja;
        }

        if (explanationBox) {
            explanationBox.style.display = 'none';
        }
        if (nextBtn) {
            nextBtn.style.display = 'none';
        }
        const resultBanner = document.getElementById('quiz-result-banner');
        if (resultBanner) {
            resultBanner.style.display = 'none';
        }

        if (optionsContainer) {
            optionsContainer.innerHTML = '';
            const prefixes = ['A', 'B', 'C', 'D'];
            q.options.forEach((opt, optIndex) => {
                const btn = document.createElement('button');
                btn.className = 'quiz-option-btn';
                btn.style.width = '100%';
                btn.style.textAlign = 'left';
                btn.style.padding = '15px 20px';
                btn.style.background = 'rgba(255,255,255,0.03)';
                btn.style.border = '1px solid rgba(255,255,255,0.1)';
                btn.style.borderRadius = '8px';
                btn.style.color = '#fff';
                btn.style.fontSize = '0.95rem';
                btn.style.cursor = 'pointer';
                btn.style.transition = 'all 0.2s ease';
                
                const cleanText = isVi ? stripOptionPrefix(opt.vi) : stripOptionPrefix(opt.ja);
                btn.innerHTML = `${prefixes[optIndex]}. ${cleanText}`;

                btn.addEventListener('click', () => {
                    const allBtns = optionsContainer.querySelectorAll('button');
                    allBtns.forEach(b => {
                        b.disabled = true;
                        b.style.cursor = 'default';
                    });

                    const isCorrect = (optIndex === q.answer);
                    const stats = getSpacedRepStats();
                    if (!stats[q.id]) {
                        stats[q.id] = { consecutiveCorrect: 0, inReviewList: false, totalCorrect: 0, totalAttempted: 0 };
                    }

                    stats[q.id].totalAttempted++;

                    // --- Always highlight the correct answer boldly ---
                    const correctBtn = allBtns[q.answer];
                    if (correctBtn) {
                        correctBtn.style.borderColor = '#22c55e';
                        correctBtn.style.background = 'rgba(34,197,94,0.18)';
                        correctBtn.style.boxShadow = '0 0 20px rgba(34,197,94,0.4)';
                        correctBtn.style.fontWeight = '700';
                        correctBtn.innerHTML = `<span style="display:flex;align-items:center;gap:10px;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#22c55e;color:#000;font-size:0.8rem;flex-shrink:0;"><i class="fa-solid fa-check"></i></span>${correctBtn.innerHTML}</span>`;
                    }

                    if (isCorrect) {
                        correctCountThisRun++;
                        stats[q.id].totalCorrect++;
                        stats[q.id].consecutiveCorrect++;
                        stats._streak = (stats._streak || 0) + 1;

                        if (stats[q.id].consecutiveCorrect >= 2) {
                            stats[q.id].inReviewList = false;
                        }
                    } else {
                        // Highlight selected wrong answer
                        btn.style.borderColor = '#ef4444';
                        btn.style.background = 'rgba(239,68,68,0.18)';
                        btn.style.boxShadow = '0 0 20px rgba(239,68,68,0.4)';
                        btn.innerHTML = `<span style="display:flex;align-items:center;gap:10px;"><span style="display:inline-flex;align-items:center;justify-content:center;width:22px;height:22px;border-radius:50%;background:#ef4444;color:#fff;font-size:0.8rem;flex-shrink:0;"><i class="fa-solid fa-xmark"></i></span>${btn.innerHTML}</span>`;
                        btn.style.animation = 'quiz-shake 0.4s ease';

                        stats[q.id].consecutiveCorrect = 0;
                        stats[q.id].inReviewList = true;
                        stats._streak = 0;
                    }

                    saveSpacedRepStats(stats);
                    updateDashboardUI();

                    // --- Result banner above explanation ---
                    const resultBanner = document.getElementById('quiz-result-banner');
                    if (resultBanner) {
                        if (isCorrect) {
                            resultBanner.innerHTML = `<i class="fa-solid fa-circle-check" style="font-size:1.4rem;"></i><span style="font-size:1.1rem;font-weight:800;">${isVi ? 'Chính xác!' : '正解！'}</span>`;
                            resultBanner.style.background = 'linear-gradient(135deg, rgba(34,197,94,0.2), rgba(34,197,94,0.08))';
                            resultBanner.style.borderColor = '#22c55e';
                            resultBanner.style.color = '#4ade80';
                        } else {
                            resultBanner.innerHTML = `<i class="fa-solid fa-circle-xmark" style="font-size:1.4rem;"></i><span style="font-size:1.1rem;font-weight:800;">${isVi ? 'Sai rồi!' : '不正解'}</span>`;
                            resultBanner.style.background = 'linear-gradient(135deg, rgba(239,68,68,0.2), rgba(239,68,68,0.08))';
                            resultBanner.style.borderColor = '#ef4444';
                            resultBanner.style.color = '#f87171';
                        }
                        resultBanner.style.display = 'flex';
                    }

                    const explanationText = document.getElementById('quiz-explanation-text');
                    if (explanationText && explanationBox) {
                        explanationText.textContent = isVi ? q.explanation.vi : q.explanation.ja;
                        explanationBox.style.display = 'flex';
                    }

                    if (nextBtn) {
                        nextBtn.style.display = 'inline-flex';
                    }
                });

                optionsContainer.appendChild(btn);
            });
        }
    }

    function showSummary() {
        const activeScreen = document.getElementById('quiz-active-screen');
        const summaryScreen = document.getElementById('quiz-summary-screen');
        const scoreVal = document.getElementById('quiz-summary-score');
        const accuracyVal = document.getElementById('quiz-summary-accuracy');

        if (activeScreen) activeScreen.style.display = 'none';
        if (summaryScreen) summaryScreen.style.display = 'block';

        if (scoreVal) {
            scoreVal.textContent = `${correctCountThisRun} / ${quizQuestionsList.length}`;
        }
        if (accuracyVal) {
            const pct = quizQuestionsList.length > 0 ? Math.round((correctCountThisRun / quizQuestionsList.length) * 100) : 0;
            accuracyVal.textContent = `${pct}%`;
        }

        logQuizResult(correctCountThisRun, quizQuestionsList.length);
    }

    function updateReviewModeLang() {
        if (reviewSection && reviewSection.classList.contains('active')) {
            updateDashboardUI();

            const activeScreen = document.getElementById('quiz-active-screen');
            if (activeScreen && activeScreen.style.display === 'block') {
                renderQuestion(currentQuizIndex);
            }
        }
    }
    
    window.updateReviewModeLang = updateReviewModeLang;

});


