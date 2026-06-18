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
    }

    const sboHeaderData = {
        sbo111: {
            chapter: '章1 医学・医療総論',
            gio: 'GIO 1.1 社会における医療の役割',
            badge: 'SBO 1.1.1',
            title: '<span class="lang-ja">健康の定義と医療政策<br><span class="hero-subheading">－何を目標とするか</span></span><span class="lang-vi">Định nghĩa sức khỏe và chính sách y tế<br><span class="hero-subheading">－Mục tiêu hướng tới là gì</span></span>',
            desc: '<span class="lang-ja">保健、医療、福祉の関わりについて説明できる。</span><span class="lang-vi">Có thể giải thích mối quan hệ giữa bảo vệ sức khỏe, y tế và phúc lợi.</span>'
        },
        sbo112: {
            chapter: '章1 医学・医療総論',
            gio: 'GIO 1.1 社会における医療の役割',
            badge: 'SBO 1.1.2',
            title: '<span class="lang-ja">個人と社会<br><span class="hero-subheading">－多様な価値観の調和</span></span><span class="lang-vi">Cá nhân và xã hội<br><span class="hero-subheading">－Sự điều hòa các giá trị đa dạng</span></span>',
            desc: '<span class="lang-ja">医療に対する社会のニーズの動向について説明できる。</span><span class="lang-vi">Có thể giải thích xu hướng nhu cầu xã hội đối với y tế.</span>'
        },
        sbo113: {
            chapter: '章1 医学・医療総論',
            gio: 'GIO 1.1 社会における医療の役割',
            badge: 'SBO 1.1.3',
            title: '<span class="lang-ja">医療需要の量的増加と質的多様化への対応</span><span class="lang-vi">Đáp ứng sự gia tăng về lượng & đa dạng hóa về chất của nhu cầu y tế</span>',
            desc: '<span class="lang-ja">超高齢化社会に対応した医療需要を説明できる。</span><span class="lang-vi">Có thể giải thích nhu cầu y tế đáp ứng với xã hội siêu già hóa.</span>'
        },
        sbo121: {
            chapter: '章1 医学・医療総論',
            gio: 'GIO 1.2 医師のプロフェッショナリズム',
            badge: 'SBO 1.2.1',
            title: '<span class="lang-ja">医の倫理の変遷<br><span class="hero-subheading">－歴史的規範と現代的展開</span></span><span class="lang-vi">Lịch sử biến đổi của y đức<br><span class="hero-subheading">－Chuẩn mực lịch sử và sự phát triển hiện đại</span></span>',
            desc: '<span class="lang-ja">ヒポクラテスの誓い、ジュネーブ宣言、ヘルシンキ宣言、リスボン宣言などの変遷を説明できる。</span><span class="lang-vi">Có thể giải thích sự phát triển lịch sử của đạo đức y khoa (Lời thề Hippocrates, Tuyên ngôn Geneva, Tuyên ngôn Helsinki, Tuyên ngôn Lisbon, v.v.).</span>'
        },
        sbo122: {
            chapter: '章1 医学・医療総論',
            gio: 'GIO 1.2 医師のプロフェッショナリズム',
            badge: 'SBO 1.2.2',
            title: '<span class="lang-ja">個人情報保護と情報開示<br><span class="hero-subheading">－消極的から積極的プライバシーへ</span></span><span class="lang-vi">Bảo vệ thông tin cá nhân và công bố thông tin<br><span class="hero-subheading">－Từ quyền riêng tư thụ động sang chủ động</span></span>',
            desc: '<span class="lang-ja">個人情報の保護と開示の重要性を理解し、アクセス権、支配・制御権、訂正権について説明できる。</span><span class="lang-vi">Hiểu được tầm quan trọng của việc bảo vệ và công bố thông tin cá nhân, có thể giải thích về quyền truy cập, kiểm soát và chỉnh sửa.</span>'
        },
        sbo123: {
            chapter: '章1 医学・医療総論',
            gio: 'GIO 1.2 医師のプロフェッショナリズム',
            badge: 'SBO 1.2.3',
            title: '<span class="lang-ja">患者が参画する医療<br><span class="hero-subheading">－自己決定・インフォームドコンセント・チーム医療</span></span><span class="lang-vi">Y tế với sự tham gia của bệnh nhân<br><span class="hero-subheading">－Tự quyết định, đồng thuận và điều trị nhóm</span></span>',
            desc: '<span class="lang-ja">患者の権利、インフォームドコンセント、セカンドオピニオン、多職種連携を説明できる。</span><span class="lang-vi">Có thể giải thích về quyền của bệnh nhân, đồng thuận (Informed Consent), ý kiến thứ hai (Second Opinion) và sự hợp tác đa ngành.</span>'
        },
        sbo211: {
            chapter: '章2 基礎医学の基本',
            gio: 'GIO 2.1 人体の構造と機能',
            badge: 'SBO 2.1.1',
            title: '<span class="lang-ja">解剖学の基本構造<br><span class="hero-subheading">－人体の器官系統分類</span></span><span class="lang-vi">Cấu trúc cơ bản của giải phẫu học<br><span class="hero-subheading">－Phân loại hệ thống cơ quan của cơ thể con người</span></span>',
            desc: '<span class="lang-ja">主要器官系（神経系・循環器系・消化器系）の解剖的配置と機能分類を説明できる。</span><span class="lang-vi">Giải thích được vị trí giải phẫu và phân loại chức năng của các hệ cơ quan chính (thần kinh, tuần hoàn, tiêu hóa).</span>'
        },
        sbo212: {
            chapter: '章2 基礎医学の基本',
            gio: 'GIO 2.1 人体の構造と機能',
            badge: 'SBO 2.1.2',
            title: '<span class="lang-ja">生理学とホメオスタシス<br><span class="hero-subheading">－体内環境の維持と体温調節</span></span><span class="lang-vi">Sinh lý học và cân bằng nội môi<br><span class="hero-subheading">－Duy trì môi trường bên trong và điều hòa thân nhiệt</span></span>',
            desc: '<span class="lang-ja">自律神経や効果器を通じた生体の自己調節恒常性フィードバックを説明できる。</span><span class="lang-vi">Giải thích được phản hồi cân bằng tự điều chỉnh của cơ thể thông qua hệ thần kinh tự chủ và các cơ quan hiệu ứng.</span>'
        },
        sbo311: {
            chapter: '章3 臨床医学へのアプローチ',
            gio: 'GIO 3.1 診断と治療のプロセス',
            badge: 'SBO 3.1.1',
            title: '<span class="lang-ja">主要症候と身体診察<br><span class="hero-subheading">－主訴から見出す鑑別診断</span></span><span class="lang-vi">Triệu chứng chính và khám thực thể<br><span class="hero-subheading">－Chẩn đoán phân biệt từ lời khai của bệnh nhân</span></span>',
            desc: '<span class="lang-ja">発熱・頭痛・咳嗽に対する主観的病歴聴取と客観的診察プロセスを説明できる。</span><span class="lang-vi">Giải thích được quy trình khám thực thể khách quan và khai thác bệnh sử chủ quan đối với sốt, đau đầu, ho.</span>'
        },
        sbo312: {
            chapter: '章3 臨床医学へのアプローチ',
            gio: 'GIO 3.1 診断と治療のプロセス',
            badge: 'SBO 3.1.2',
            title: '<span class="lang-ja">臨床推論チャレンジ<br><span class="hero-subheading">－緊急疾患の早期鑑別と意思決定</span></span><span class="lang-vi">Thách thức suy luận lâm sàng<br><span class="hero-subheading">－Phân biệt sớm bệnh khẩn cấp và đưa ra quyết định</span></span>',
            desc: '<span class="lang-ja">胸痛を主訴とする患者に対する正確な診断ステップと臨床の論理的推論を説明できる。</span><span class="lang-vi">Giải thích được các bước chẩn đoán chính xác và suy luận lâm sàng logic đối với bệnh nhân bị đau ngực.</span>'
        }
    };

    const sboNavLinks = document.querySelectorAll('.sbo-nav-link');
    const sboWrappers = document.querySelectorAll('.sbo-section-wrapper');
    const crumbChap = document.getElementById('crumb-chap');
    const crumbGio = document.getElementById('crumb-gio');
    const crumbSbo = document.getElementById('crumb-sbo');
    const heroChapBadge = document.getElementById('hero-chap-badge');
    const heroGioBadge = document.getElementById('hero-gio-badge');
    const heroSboBadge = document.getElementById('hero-sbo-badge');
    const heroMainTitle = document.getElementById('hero-main-title');
    const heroSubDesc = document.getElementById('hero-sub-desc');

    const activateSBO = (targetSbo, updateHash = true) => {
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
        crumbSbo.textContent = `${data.badge} ${link.querySelector('.sbo-name').textContent}`;

        const heroContainer = document.querySelector('#hero .container');
        heroContainer.style.opacity = '0.3';
        
        setTimeout(() => {
            heroChapBadge.textContent = data.chapter;
            heroGioBadge.textContent = data.gio;
            heroSboBadge.textContent = data.badge;
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

    const updateOathScore = () => {
        let score = 0;
        oathCheckboxes.forEach(cb => {
            if (cb.checked) {
                score += parseInt(cb.getAttribute('data-weight') || 0);
            }
        });

        if (oathScoreValue) {
            oathScoreValue.textContent = `${score}%`;

            if (score === 0) {
                oathScoreValue.style.color = 'var(--text-muted)';
                oathScoreCircle.style.borderColor = 'rgba(255,255,255,0.05)';
                oathStatusLabel.textContent = '未実施';
                oathStatusLabel.style.color = 'var(--text-muted)';
                oathStatusDesc.textContent = 'チェックボックスを選択して医師の義務と態度への誓約度を測定してください。';
            } else if (score < 100) {
                oathScoreValue.style.color = 'var(--accent-gold)';
                oathScoreCircle.style.borderColor = 'var(--accent-gold)';
                oathScoreCircle.style.boxShadow = '0 0 15px var(--accent-gold-glow)';
                oathStatusLabel.textContent = '宣誓進行中';
                oathStatusLabel.style.color = 'var(--accent-gold)';
                oathStatusDesc.textContent = '医師としてのプロフェッショナルな自覚を高めています。すべての責務を確認してください。';
            } else {
                oathScoreValue.style.color = 'var(--accent-teal)';
                oathScoreCircle.style.borderColor = 'var(--accent-teal)';
                oathScoreCircle.style.boxShadow = '0 0 20px var(--accent-teal-glow)';
                oathStatusLabel.textContent = '宣誓完了！';
                oathStatusLabel.style.color = 'var(--accent-teal)';
                oathStatusDesc.textContent = 'プロフェッショナル精神が最大限にコミットされました。この倫理誓約を生涯維持しましょう。';
            }
        }
    };

    oathCheckboxes.forEach(cb => {
        cb.addEventListener('change', updateOathScore);
    });


    // --- 9. SBO 1.2.2: Communication Rapport Dialogue Logic ---
    const commBtns = document.querySelectorAll('.comm-btn');
    const commFeedback = document.getElementById('comm-feedback');
    const commFeedbackHeading = document.getElementById('comm-feedback-heading');
    const commFeedbackBody = document.getElementById('comm-feedback-body');

    const commFeedbackData = {
        '10': {
            heading: '評価: 機械的 / 不十分な共感 (Score: 10/30)',
            body: '生存率のデータのみを提示して安心させようとする姿勢は、患者の抱える心理的不安や個別性を無視したアプローチとなり、むしろ患者の孤独感や防衛反応を強めてしまいます。データよりまず感情を受け止めることが優先されます。'
        },
        '20': {
            heading: '評価: 早すぎる解決策の提示 (Score: 20/30)',
            body: '薬物の処方は一時的な対応策にはなりますが、患者が「不安である」と告白した背景にある個人のストーリーや生活への懸念を引き出す対話のプロセスが省略されています。薬を出す前に、まず感情に共感を示すことが基本です。'
        },
        '30': {
            heading: '評価: 卓越した共感・アクティブリスニング (Score: 30/30) [最適解]',
            body: '正解です！患者の「生活が不安である」という発言を正確にリフレクション（反射・オウム返し）し、自身の共感的態度を表明した上で、オープンクエスチョンを用いて患者が具体的な不安を語るための場を開く優れたアプローチです。ラポール形成の基本です。'
        }
    };

    commBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            commBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const scoreKey = btn.getAttribute('data-score');
            const data = commFeedbackData[scoreKey];

            if (data && commFeedback) {
                commFeedback.style.display = 'block';
                commFeedbackHeading.textContent = data.heading;
                commFeedbackBody.innerHTML = data.body;
            }
        });
    });


    // --- 10. SBO 2.1.1: Organ Systems Selector Logic ---
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


    // --- 11. SBO 2.1.2: Temperature Homeostasis Slider ---
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


    // --- 12. SBO 3.1.1: Clinical Symptom Guide ---
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


    // --- 13. SBO 3.1.2: Clinical Reasoning Solver ---
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

});

