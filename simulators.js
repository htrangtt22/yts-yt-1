document.addEventListener('DOMContentLoaded', () => {
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
    window.initSbo122Simulator = function() {
        const isVi = document.body.classList.contains('lang-vi');
        const container = document.getElementById('sbo122');
        if (!container) return;

        // 9a. 8 Legal Duties Timeline Step Interaction
        const stepDots = container.querySelectorAll('[data-sbo122-step]');
        const sbo122StepTitle = container.querySelector('#sbo122-step-title');
        const sbo122StepPhase = container.querySelector('#sbo122-step-phase');
        const sbo122StepDesc = container.querySelector('#sbo122-step-desc');

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
                    ja: '個人データの漏洩、滅失、改ざんを防止するため、必要かつ適切な安全管理措置（技術的・物理的・組織的な多層防御）を講じる義務があります。システムログ of 監視やアクセス権限の厳格化が含まれます。',
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
                    vi: 'Khi hết thời hạn lưu trữ theo luật định (bệnh án lưu trữ ít nhất 5 năm kể từ ngày điều trị xong, nhật ký bệnh viện lưu trữ 2 năm, v.v.) và không còn nhu cầu sử dụng, cơ sở y tế phải nhanh chóng tiêu hủy/xóa bỏ dữ liệu cá nhân đó bằng phương pháp không thể khôi phục.'
                }
            }
        };

        function updateSbo122Step(stepNum) {
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

        stepDots.forEach(dot => {
            dot.addEventListener('click', () => {
                stepDots.forEach(d => {
                    d.classList.remove('active');
                    d.style.borderColor = 'rgba(255,255,255,0.1)';
                });
                dot.classList.add('active');
                dot.style.borderColor = 'var(--accent-teal)';

                const stepNum = dot.getAttribute('data-sbo122-step');
                const stepCard = container.querySelector('#sbo122-step-card');
                if (stepCard) {
                    stepCard.style.opacity = '0.3';
                    setTimeout(() => {
                        updateSbo122Step(stepNum);
                        stepCard.style.opacity = '1';
                    }, 150);
                } else {
                    updateSbo122Step(stepNum);
                }
            });
        });

        // 9b. Bad News / Exception Disclosure Decision Simulator
        const yesBtn = container.querySelector('#sbo122-sim-yes');
        const noBtn = container.querySelector('#sbo122-sim-no');
        const feedback = container.querySelector('#sbo122-sim-feedback');

        const simResponses = {
            yes: {
                title: {
                    ja: '【正解】例外措置の適用（開示保留・制限）',
                    vi: '【Chính xác】 Áp dụng biện pháp ngoại lệ (Tạm hoãn / Hạn chế công khai)'
                },
                body: {
                    ja: 'その通りです！患者の「知る権利」「アクセス権」は基本原則ですが、絶対的なものではありません。情報の開示が、患者本人に重大な心理的悪影響（絶望による衝動的な自傷行為など）を及ぼす危険性が極めて高いと判断される場合は、例外として開示を保留・制限することが認められています。チームで協議し、段階的なアプローチを取ることが重要です。',
                    vi: 'Chính xác! Quyền được biết và quyền truy cập là nguyên tắc cốt lõi nhưng không phải là tuyệt đối. Nếu việc công khai rõ ràng có nguy cơ gây tác động tâm lý tiêu cực nghiêm trọng (như bộc phát tự tử hoặc tự hại do tuyệt vọng), cơ sở y tế được phép tạm hoãn hoặc hạn chế công khai như một biện pháp ngoại lệ. Cần hội chẩn đa chuyên khoa để đưa ra cách tiếp cận từng bước.'
                },
                color: 'var(--accent-gold)',
                background: 'rgba(234, 179, 8, 0.08)',
                border: '1px solid var(--accent-gold)'
            },
            no: {
                title: {
                    ja: '【不適切】原則のみの適用によるリスク発生',
                    vi: '【Không phù hợp】 Nguy cơ nghiêm trọng từ việc cứng nhắc áp dụng nguyên tắc'
                },
                body: {
                    ja: '原則開示は重要ですが、今回のケースのように患者の精神状態が極めて不安定で、自傷行為（自殺等）の具体的な恐れがある場合は、直ちにすべてを開示することは不適切です。法にも例外規定（本人の心身の状況を著しく損なう恐れがある場合）が存在するため、安全に配慮した丁寧な手順を踏む必要があります。',
                    vi: 'Mặc dù nguyên tắc là công khai, việc công khai trực tiếp ngay lập tức trong tình huống bệnh nhân có tâm lý cực kỳ bất ổn và có nguy cơ tự hại/tự tử cụ thể là không phù hợp. Luật pháp đã quy định ngoại lệ (khi tổn hại nghiêm trọng tâm sinh lý chủ thể) để bảo vệ tính mạng bệnh nhân, đòi hỏi quy trình tiếp cận an toàn.'
                },
                color: '#ef4444',
                background: 'rgba(239, 68, 68, 0.08)',
                border: '1px solid #ef4444'
            }
        };

        function triggerDisclosureFeedback(choice) {
            if (!feedback) return;
            const data = simResponses[choice];
            if (choice === 'yes') {
                yesBtn.classList.add('active');
                yesBtn.style.background = 'rgba(234, 179, 8, 0.2)';
                noBtn.classList.remove('active');
                noBtn.style.background = 'rgba(6, 182, 212, 0.1)';
            } else {
                noBtn.classList.add('active');
                noBtn.style.background = 'rgba(239, 68, 68, 0.2)';
                yesBtn.classList.remove('active');
                yesBtn.style.background = 'rgba(234, 179, 8, 0.1)';
            }

            feedback.style.display = 'block';
            feedback.style.background = data.background;
            feedback.style.border = data.border;
            feedback.innerHTML = `
                <h4 style="font-weight: bold; margin-top: 0; color: ${data.color};">
                    <i class="fa-solid ${choice === 'yes' ? 'fa-circle-check' : 'fa-circle-xmark'}"></i> 
                    ${isVi ? data.title.vi : data.title.ja}
                </h4>
                <p class="small-desc" style="margin: 0; line-height: 1.6; color: var(--text-secondary);">
                    ${isVi ? data.body.vi : data.body.ja}
                </p>
            `;
        }

        if (yesBtn) yesBtn.addEventListener('click', () => triggerDisclosureFeedback('yes'));
        if (noBtn) noBtn.addEventListener('click', () => triggerDisclosureFeedback('no'));

        // 9c. 3rd-Party Release Selector Logic
        const releaseBtns = container.querySelectorAll('[data-sbo122-release]');
        const sbo122ReleaseCard = container.querySelector('#sbo122-release-card');
        const sbo122ReleaseTitle = container.querySelector('#sbo122-release-title');
        const sbo122ReleaseDesc = container.querySelector('#sbo122-release-desc');

        const sbo122ReleaseData = {
            doctor: {
                title: { ja: '他の医師・医療機関への紹介', vi: 'Giới thiệu sang bác sĩ / Cơ sở y tế khác' },
                desc: {
                    ja: '適切な紹介・転院先での診療に役立てる目的であっても、原則として患者本人の同意（または明示的な非反対）が必要です。通常、紹介状（診療情報提供書）の作成時に説明し同意を得ます。',
                    vi: 'Ngay cả khi nhằm phục vụ khám chữa bệnh tại nơi chuyển viện phù hợp, về nguyên tắc vẫn bắt buộc phải có sự đồng ý của bệnh nhân (hoặc không phản đối rõ ràng). Thông thường, sự đồng ý này sẽ được giải thích và lấy ý kiến trực tiếp khi lập Giấy chuyển viện.'
                },
                iconClass: 'fa-user-doctor',
                color: 'var(--accent-teal)'
            },
            family: {
                title: { ja: '患者の家族への情報提供', vi: 'Cung cấp thông tin cho gia đình bệnh nhân' },
                desc: {
                    ja: '家族であっても第三者であるため、原則として「患者本人の同意」が必要です。意識不明の緊急時や認知症等で判断能力を欠く場合を除き、勝手に家族に病状を説明することは守秘義務違反になります。',
                    vi: 'Gia đình về mặt pháp lý vẫn là bên thứ ba, do đó về nguyên tắc bắt buộc phải có "sự đồng ý của bệnh nhân". Ngoại trừ trường hợp khẩn cấp bất tỉnh hoặc mất năng lực nhận thức (sa sút trí tuệ), tự ý giải thích tình trạng bệnh cho gia đình là vi phạm nghĩa vụ bảo mật.'
                },
                iconClass: 'fa-people-group',
                color: 'var(--accent-gold)'
            },
            police: {
                title: { ja: '警察・捜査機関からの照会', vi: 'Yêu cầu cung cấp từ cảnh sát / cơ quan điều tra' },
                desc: {
                    ja: '警察からの任意の照会（捜査関係事項照会書）に対しては、本人の同意がなくても守秘義務違反にはなりませんが、医療機関의判断で提供を拒否することも可能です。ただし、裁判所が発行した「令状（差押令状等）」がある場合は、応じる義務があります。',
                    vi: 'Đối với yêu cầu cung cấp thông tin tự nguyện của cảnh sát (Văn bản yêu cầu điều tra), việc cung cấp không vi phạm nghĩa vụ bảo mật nhưng bệnh viện có quyền từ chối. Tuy nhiên, nếu có "Lệnh của tòa án" (Lệnh thu giữ, v.v.), cơ sở y tế bắt buộc phải tuân thủ.'
                },
                iconClass: 'fa-building-shield',
                color: '#ef4444'
            },
            insurance: {
                title: { ja: '民間保険会社からの調査・照会', vi: 'Yêu cầu điều tra từ công ty bảo hiểm tư nhân' },
                desc: {
                    ja: '民間保険会社からの契約調査や給付確認の照会については、100%「患者本人の同意（署名入りの同意書等）」の提示が必要です。同意がない場合は絶対に開示してはなりません。',
                    vi: 'Đối với các yêu cầu điều tra hợp đồng bảo hiểm hoặc xác nhận chi trả từ công ty bảo hiểm tư nhân, bắt buộc 100% phải trình "Văn bản đồng ý có chữ ký của bệnh nhân". Tuyệt đối không được công khai nếu không có văn bản này.'
                },
                iconClass: 'fa-file-invoice-dollar',
                color: 'var(--accent-teal)'
            }
        };

        function updateReleaseCard(type) {
            const data = sbo122ReleaseData[type];
            if (data && sbo122ReleaseCard && sbo122ReleaseTitle && sbo122ReleaseDesc) {
                sbo122ReleaseCard.style.borderColor = data.color;
                sbo122ReleaseTitle.style.color = data.color;
                sbo122ReleaseTitle.innerHTML = `<i class="fa-solid ${data.iconClass}" style="margin-right: 6px;"></i> ${isVi ? data.title.vi : data.title.ja}`;
                sbo122ReleaseDesc.innerHTML = `<span class="lang-ja">${data.desc.ja}</span><span class="lang-vi">${data.desc.vi}</span>`;
            }
        }

        releaseBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                releaseBtns.forEach(b => {
                    b.classList.remove('active');
                    b.style.background = 'rgba(255,255,255,0.02)';
                    b.style.color = 'var(--text-muted)';
                    b.style.borderColor = 'rgba(255,255,255,0.08)';
                });
                btn.classList.add('active');
                const type = btn.getAttribute('data-sbo122-release');
                const data = sbo122ReleaseData[type];
                btn.style.background = `rgba(${type === 'police' ? '239, 68, 68' : type === 'family' ? '234, 179, 8' : '6, 182, 212'}, 0.08)`;
                btn.style.color = '#fff';
                btn.style.borderColor = data.color;

                sbo122ReleaseCard.style.opacity = '0.3';
                setTimeout(() => {
                    updateReleaseCard(type);
                    sbo122ReleaseCard.style.opacity = '1';
                }, 150);
            });
        });
    };
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


    // --- 16. SBO 1.1.2: Opt-out & Anonymization Simulator ---
    const optoutBtn = document.getElementById('sbo112-optout-btn');
    const sbo112Arrow1 = document.getElementById('sbo112-arrow-1');
    const sbo112Arrow2 = document.getElementById('sbo112-arrow-2');
    const sbo112NodeFilter = document.getElementById('sbo112-node-filter');
    const sbo112NodePool = document.getElementById('sbo112-node-pool');
    const sbo112StatusDesc = document.getElementById('sbo112-status-desc');

    if (optoutBtn) {
        optoutBtn.addEventListener('click', () => {
            const isActive = optoutBtn.classList.toggle('active');
            
            if (isActive) {
                optoutBtn.innerHTML = `
                    <i class="fa-solid fa-circle-check" style="color: var(--accent-teal); margin-right: 8px;"></i>
                    <span class="lang-ja">同意（Opt-outしない）</span>
                    <span class="lang-vi">Đồng ý (Không Opt-out)</span>
                `;
                
                // Flow Active styles
                if (sbo112Arrow1) {
                    sbo112Arrow1.style.color = 'var(--accent-teal)';
                    sbo112Arrow1.style.opacity = '1';
                }
                if (sbo112Arrow2) {
                    sbo112Arrow2.style.color = 'var(--accent-teal)';
                    sbo112Arrow2.style.opacity = '1';
                }
                if (sbo112NodeFilter) {
                    sbo112NodeFilter.style.opacity = '1';
                    sbo112NodeFilter.style.borderColor = 'var(--border-card)';
                }
                if (sbo112NodePool) {
                    sbo112NodePool.style.opacity = '1';
                    sbo112NodePool.style.borderColor = 'var(--border-card)';
                }
                if (sbo112StatusDesc) {
                    sbo112StatusDesc.innerHTML = `
                        <span class="lang-ja">患者が提供を承諾しているため、医療データは安全に匿名加工され、医学研究のためのビッグデータプール（二次利用）に蓄積されています。</span>
                        <span class="lang-vi">Bệnh nhân chấp thuận cung cấp, dữ liệu y tế được xử lý ẩn danh hóa an toàn và tích hợp vào bể dữ liệu lớn (Tái sử dụng) phục vụ nghiên cứu y học.</span>
                    `;
                }
            } else {
                optoutBtn.innerHTML = `
                    <i class="fa-solid fa-circle-xmark" style="color: #ef4444; margin-right: 8px;"></i>
                    <span class="lang-ja">オプトアウト（提供拒否）</span>
                    <span class="lang-vi">Opt-out (Từ chối cung cấp)</span>
                `;
                
                // Flow Blocked styles
                if (sbo112Arrow1) {
                    sbo112Arrow1.style.color = '#ef4444';
                    sbo112Arrow1.style.opacity = '0.5';
                }
                if (sbo112Arrow2) {
                    sbo112Arrow2.style.color = 'var(--text-muted)';
                    sbo112Arrow2.style.opacity = '0.3';
                }
                if (sbo112NodeFilter) {
                    sbo112NodeFilter.style.opacity = '0.5';
                    sbo112NodeFilter.style.borderColor = 'rgba(255,255,255,0.05)';
                }
                if (sbo112NodePool) {
                    sbo112NodePool.style.opacity = '0.3';
                    sbo112NodePool.style.borderColor = 'rgba(255,255,255,0.05)';
                }
                if (sbo112StatusDesc) {
                    sbo112StatusDesc.innerHTML = `
                        <span class="lang-ja">患者がオプトアウト（拒否権の行使）を行ったため、医療機関外へのデータ提供は完全にブロックされ、個人のプライバシーは厳格に守られます。</span>
                        <span class="lang-vi">Bệnh nhân đã thực hiện quyền Opt-out (Từ chối), dữ liệu bị chặn hoàn toàn tại cơ sở y tế và không được chia sẻ ra ngoài, bảo vệ tuyệt đối quyền riêng tư.</span>
                    `;
                }
            }
        });
    }


    // --- 14b. Interactive Preventive Medicine Levels and 14c. Specific Health Checkups moved to window.initSbo111Simulator ---


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

    // --- SBO 1.1.2: Individual Perspective Tabs Logic ---
    const sbo112IndTabs = document.querySelectorAll('[data-sbo112-ind-tab]');
    const sbo112IndPanes = document.querySelectorAll('.sbo112-ind-pane');

    sbo112IndTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTabNum = tab.getAttribute('data-sbo112-ind-tab');
            
            sbo112IndTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            sbo112IndPanes.forEach(pane => {
                if (pane.id === `sbo112-ind-pane-${targetTabNum}`) {
                    pane.style.display = 'block';
                } else {
                    pane.style.display = 'none';
                }
            });
        });
    });

    // --- SBO 1.1.2: Social Perspective Tabs Logic ---
    const sbo112SocTabs = document.querySelectorAll('[data-sbo112-soc-tab]');
    const sbo112SocPanes = document.querySelectorAll('.sbo112-soc-pane');

    sbo112SocTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTabNum = tab.getAttribute('data-sbo112-soc-tab');
            
            sbo112SocTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            sbo112SocPanes.forEach(pane => {
                if (pane.id === `sbo112-soc-pane-${targetTabNum}`) {
                    pane.style.display = 'block';
                } else {
                    pane.style.display = 'none';
                }
            });
        });
    });

    // --- SBO 1.1.2: Harmony Section Tabs Logic ---
    const sbo112HarTabs = document.querySelectorAll('[data-sbo112-har-tab]');
    const sbo112HarPanes = document.querySelectorAll('.sbo112-har-pane');

    sbo112HarTabs.forEach(tab => {
        tab.addEventListener('click', () => {
            const targetTabNum = tab.getAttribute('data-sbo112-har-tab');
            
            sbo112HarTabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');

            sbo112HarPanes.forEach(pane => {
                if (pane.id === `sbo112-har-pane-${targetTabNum}`) {
                    pane.style.display = 'block';
                } else {
                    pane.style.display = 'none';
                }
            });
        });
    });

});

window.initSbo111Simulator = function() {
    // --- PART 1: WHO Health Concept Timeline Tabs ---
    const conceptTabsGroup = document.getElementById('sbo111-concept-tabs');
    const conceptDetailsPanel = document.getElementById('sbo111-concept-detail-panel');
    const conceptProgressBar = document.getElementById('sbo111-concept-progress');

    const conceptData = {
        'who1948': {
            color: 'var(--accent-teal)',
            icon: 'fa-cube',
            titleJa: '健康の定義 (1948年 WHO憲章基本定義)',
            titleVi: 'Định nghĩa Sức khỏe (Định nghĩa cơ bản của WHO, 1948)',
            bodyJa: '',
            bodyVi: ''
        },
        'who1998': {
            color: 'var(--accent-gold)',
            icon: 'fa-circle-nodes',
            titleJa: '概念の深化提案 (1998年 WHO執行理事会提案)',
            titleVi: 'Đề xuất Mở rộng Khái niệm (Hội đồng Chấp hành WHO, 1998)',
            bodyJa: '<p style="margin: 0 0 10px 0;">• <strong>「動的 (Dynamic)」かつ「スピリチュアル (Spiritual)」：</strong>従来の3要素に「dynamic（動的/変化するプロセス）」および「spiritual（霊的/尊厳・生きがい）」という表現を付け加える提案がなされました。</p>'
                 + '<p style="margin: 0;">• <strong>静的定義から構築への契機：</strong>採択には至りませんでしたが、健康を単なる固定された静的な「状態」ではなく、自ら高め構築していく「動的プロセス」として捉え直す上で、非常に重要な契機となりました。</p>',
            bodyVi: '<p style="margin: 0 0 10px 0;">• <strong>Bổ sung tính "Động" và "Tâm linh":</strong> Đề xuất bổ sung các từ "dynamic" (động) và "spiritual" (tâm linh/phẩm giá/lẽ sống) vào định nghĩa sức khỏe truyền thống.</p>'
                 + '<p style="margin: 0;">• <strong>Chuyển đổi nhận thức:</strong> Dù chưa được thông qua chính thức, đề xuất này đã tạo bước ngoặt quan trọng, định hình lại sức khỏe không phải một "trạng thái" tĩnh mà là một "quá trình động" liên tục được xây dựng và vun đắp.</p>'
        },
        'ottawa': {
            color: '#3b82f6',
            icon: 'fa-landmark',
            titleJa: '実践・構築の青写真 (1986年 オタワ憲章)',
            titleVi: 'Thực tiễn và Kiến tạo (Hiến chương Ottawa, 1986)',
            bodyJa: '<p style="margin: 0 0 10px 0;">• <strong>ヘルスプロモーションの提唱：</strong>「人々が自らの健康とその決定要因をコントロールし、改善できるようにするプロセス」と定義。健康を「生活の目標」ではなく「日常生活の資源」と位置づけました。</p>'
                 + '<p style="margin: 0;">• <strong>5大アクション領域：</strong>①健康的な公共政策づくり、②健康を支援する環境づくり、③地域活動の強化、④個人のスキルの開発、⑤ヘルスケアサービスの再志向（予防重視へ）を掲げ、健康を社会的に構築する枠組みを示しました。</p>',
            bodyVi: '<p style="margin: 0 0 10px 0;">• <strong>Nâng cao Sức khỏe (Health Promotion):</strong> Định nghĩa là "quá trình giúp mọi người tăng khả năng kiểm soát và tự cải thiện sức khỏe". Xem sức khỏe là "nguồn lực cho cuộc sống hàng ngày" chứ không phải mục tiêu sống.</p>'
                 + '<p style="margin: 0;">• <strong>5 lĩnh vực hành động chính:</strong> (1) Xây dựng chính sách công cộng lành mạnh, (2) Tạo dựng môi trường hỗ trợ, (3) Tăng cường hành động cộng đồng, (4) Phát triển kỹ năng cá nhân, (5) Định hướng lại dịch vụ y tế (hướng về dự phòng).</p>'
        }
    };

    function activateConceptTab(tabId) {
        if (!conceptTabsGroup || !conceptDetailsPanel) return;
        const buttons = conceptTabsGroup.querySelectorAll('.sbo111-concept-node');
        
        if (conceptProgressBar) {
            const percentages = { 'who1948': '0%', 'who1998': '50%', 'ottawa': '100%' };
            conceptProgressBar.style.width = percentages[tabId] || '0%';
        }

        buttons.forEach(btn => {
            const isCurrent = btn.getAttribute('data-concept-tab') === tabId;
            const year = btn.querySelector('.node-year');
            const wrapper = btn.querySelector('.node-icon-wrapper');
            const title = btn.querySelector('.node-title-ja');
            const data = conceptData[btn.getAttribute('data-concept-tab')];

            if (isCurrent) {
                btn.classList.add('active');
                if (year) year.style.color = '#fff';
                if (title) title.style.color = '#fff';
                if (wrapper && data) {
                    wrapper.style.borderColor = data.color;
                    wrapper.style.color = data.color;
                    wrapper.style.boxShadow = '0 0 20px ' + (data.color.startsWith('var') ? 'rgba(45, 212, 191, 0.4)' : data.color);
                    wrapper.style.transform = 'scale(1.05)';
                }
            } else {
                btn.classList.remove('active');
                if (year) year.style.color = 'var(--text-muted)';
                if (title) title.style.color = 'var(--text-muted)';
                if (wrapper) {
                    wrapper.style.borderColor = 'rgba(255,255,255,0.12)';
                    wrapper.style.color = 'var(--text-muted)';
                    wrapper.style.boxShadow = 'none';
                    wrapper.style.transform = 'scale(1)';
                }
            }
        });

        const data = conceptData[tabId];
        if (data) {
            if (tabId === 'who1948') {
                conceptDetailsPanel.style.opacity = '0.1';
                conceptDetailsPanel.style.transform = 'translateY(5px)';
                setTimeout(() => {
                    conceptDetailsPanel.style.borderTopColor = data.color;
                    conceptDetailsPanel.innerHTML = '<h3 style="color: ' + data.color + '; margin-top: 0; margin-bottom: 16px; font-size: 1.15rem; display: flex; align-items: center; gap: 10px; font-weight: 600;">'
                        + '<i class="fa-solid ' + data.icon + '" style="font-size: 1.2rem;"></i>'
                        + '<span class="lang-ja">' + data.titleJa + '</span>'
                        + '<span class="lang-vi">' + data.titleVi + '</span>'
                        + '</h3>'
                        + '<div class="who1948-container">'
                        + '  <div class="who1948-venn-side">'
                        + '    <div class="concept-title-sub" style="text-align: center; margin-bottom: 25px;">'
                        + '      <span class="lang-ja">健康概念：三位一体のウェルビーイング</span>'
                        + '      <span class="lang-vi">Khái niệm sức khỏe: Well-being tam vị nhất thể</span>'
                        + '    </div>'
                        + '    <div class="venn-diagram-wrapper" style="margin: 0 auto;">'
                        + '      <div class="venn-circle physical" data-venn="physical">'
                        + '        <span class="lang-ja">身体的</span>'
                        + '        <span class="lang-vi">Thể chất</span>'
                        + '      </div>'
                        + '      <div class="venn-circle social" data-venn="social">'
                        + '        <span class="lang-ja">社会的</span>'
                        + '        <span class="lang-vi">Xã hội</span>'
                        + '      </div>'
                        + '      <div class="venn-circle mental" data-venn="mental">'
                        + '        <span class="lang-ja">精神的</span>'
                        + '        <span class="lang-vi">Tinh thần</span>'
                        + '      </div>'
                        + '      <div class="venn-center-glow"></div>'
                        + '    </div>'
                        + '  </div>'
                        + '  '
                        + '  <div class="who1948-info-side">'
                        + '    <div class="bubble-info-box">'
                        + '      <div class="bubble-quote">'
                        + '        <span class="lang-ja">「健康とは、身体的・精神的・社会的にお互いに完全に良好な状態であり、単に病気あるいは虚弱ではないということではない」</span>'
                        + '        <span class="lang-vi">"Sức khỏe là một trạng thái hoàn toàn khỏe mạnh về thể chất, tinh thần và xã hội chứ không chỉ đơn thuần là không có bệnh tật hay tàn phế."</span>'
                        + '      </div>'
                        + '      <div class="bubble-desc-footer">'
                        + '        <span class="lang-ja">WHO憲章前文（1948年設立）にて明記。単なる「病気の不在」から、積極的な「ウェルビーイング（良好な状態）」へのパラダイムシフト。</span>'
                        + '        <span class="lang-vi">Được quy định rõ trong Hiến chương WHO (1948). Sự chuyển dịch từ "vắng bóng bệnh tật" sang "Well-being" một cách chủ động.</span>'
                        + '      </div>'
                        + '      <div class="venn-click-detail" id="sbo111-venn-details" style="border-left: 3px solid var(--accent-teal); padding-left: 12px; margin-top: 10px; background: rgba(255,255,255,0.01); display: block;">'
                        + '        <i class="fa-solid fa-hand-pointer"></i> '
                        + '        <span class="lang-ja">各円をクリックすると、健康の3要素の定義が表示されます。</span>'
                        + '        <span class="lang-vi">Nhấp vào từng vòng tròn để xem định nghĩa 3 yếu tố sức khỏe.</span>'
                        + '      </div>'
                        + '    </div>'
                        + '  </div>'
                        + '</div>';

                    if (typeof window.syncLanguages === 'function') window.syncLanguages();

                    // Setup Venn diagram click listeners
                    const vennCircles = conceptDetailsPanel.querySelectorAll('.venn-circle');
                    const vennDetails = document.getElementById('sbo111-venn-details');
                    const vennData = {
                        physical: {
                            color: 'var(--accent-teal)',
                            titleJa: '身体的健康 (Physical Health)',
                            titleVi: 'Sức khỏe thể chất (Physical Health)',
                            bodyJa: '病気や虚弱がないだけでなく、適切な栄養、運動、睡眠が確保され、身体の諸器官が正常かつ調和的に機能している状態。生命力に満ちている状態を指します。',
                            bodyVi: 'Không chỉ không có bệnh tật hay ốm yếu, mà còn đảm bảo dinh dưỡng hợp lý, vận động, giấc ngủ, và các cơ quan trong cơ thể hoạt động bình thường, hài hòa, tràn đầy sinh lực.'
                        },
                        social: {
                            color: 'var(--accent-gold)',
                            titleJa: '社会的健康 (Social Health)',
                            titleVi: 'Sức khỏe xã hội (Social Health)',
                            bodyJa: '他者との良好な人間関係を築き、社会の構成員として適切な役割を果たし、孤独にならずに支え合える状態。社会とのつながりや所属感を含みます。',
                            bodyVi: 'Xây dựng mối quan hệ tốt đẹp với người khác, đóng vai trò phù hợp là thành viên xã hội, hỗ trợ lẫn nhau mà không cô đơn, có sự kết nối và thuộc về cộng đồng.'
                        },
                        mental: {
                            color: '#10b981',
                            titleJa: '精神的健康 (Mental Health)',
                            titleVi: 'Sức khỏe tinh thần (Mental Health)',
                            bodyJa: '自身の感情を認識・コントロールし、ストレスに対処でき、自立して意思決定を行える状態。心が満たされ、自己肯定感がある状態です。',
                            bodyVi: 'Nhận biết và kiểm soát được cảm xúc của bản thân, đối phó được với căng thẳng, và có thể tự lập đưa ra quyết định, có lòng tự tôn và tâm hồn mãn nguyện.'
                        }
                    };

                    vennCircles.forEach(circle => {
                        circle.addEventListener('click', () => {
                            vennCircles.forEach(c => c.classList.remove('active'));
                            circle.classList.add('active');
                            const key = circle.getAttribute('data-venn');
                            const vDetails = vennData[key];
                            if (vDetails && vennDetails) {
                                vennDetails.style.borderColor = vDetails.color;
                                vennDetails.innerHTML = '<strong style="color: ' + vDetails.color + '; display: block; margin-bottom: 4px;">'
                                    + '<span class="lang-ja">' + vDetails.titleJa + '</span>'
                                    + '<span class="lang-vi">' + vDetails.titleVi + '</span>'
                                    + '</strong>'
                                    + '<span class="lang-ja">' + vDetails.bodyJa + '</span>'
                                    + '<span class="lang-vi">' + vDetails.bodyVi + '</span>';
                                if (typeof window.syncLanguages === 'function') window.syncLanguages();
                            }
                        });
                    });

                    conceptDetailsPanel.style.opacity = '1';
                    conceptDetailsPanel.style.transform = 'translateY(0)';
                }, 180);
            } else if (tabId === 'who1998') {
                conceptDetailsPanel.style.opacity = '0.1';
                conceptDetailsPanel.style.transform = 'translateY(5px)';
                setTimeout(() => {
                    conceptDetailsPanel.style.borderTopColor = data.color;
                    conceptDetailsPanel.innerHTML = '<h3 style="color: ' + data.color + '; margin-top: 0; margin-bottom: 16px; font-size: 1.15rem; display: flex; align-items: center; gap: 10px; font-weight: 600;">'
                        + '<i class="fa-solid ' + data.icon + '" style="font-size: 1.2rem;"></i>'
                        + '<span class="lang-ja">' + data.titleJa + '</span>'
                        + '<span class="lang-vi">' + data.titleVi + '</span>'
                        + '</h3>'
                        + '<div class="who1998-container">'
                        + '  <!-- Left Column: 3D coordinate system & wave -->'
                        + '  <div class="who1998-diagram-side">'
                        + '    <div class="diagram-1998-wrapper">'
                        + '      <!-- 3D Axes SVG -->'
                        + '      <svg width="320" height="280" style="position: absolute; top:0; left:0; pointer-events: none;">'
                        + '        <!-- Z Axis (Up) -->'
                        + '        <line x1="160" y1="180" x2="160" y2="20" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" stroke-dasharray="3 3" />'
                        + '        <polygon points="160,15 156,23 164,23" fill="rgba(255,255,255,0.4)" />'
                        + '        <text x="170" y="30" fill="rgba(255,255,255,0.4)" font-size="12" font-weight="bold">Z</text>'
                        + '        '
                        + '        <!-- X Axis (Down-Right) -->'
                        + '        <line x1="160" y1="180" x2="280" y2="250" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" stroke-dasharray="3 3" />'
                        + '        <polygon points="284,252 275,246 279,254" fill="rgba(255,255,255,0.4)" />'
                        + '        <text x="285" y="242" fill="rgba(255,255,255,0.4)" font-size="12" font-weight="bold">X</text>'
                        + '        '
                        + '        <!-- Y Axis (Down-Left) -->'
                        + '        <line x1="160" y1="180" x2="40" y2="250" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" stroke-dasharray="3 3" />'
                        + '        <polygon points="36,252 45,254 41,246" fill="rgba(255,255,255,0.4)" />'
                        + '        <text x="30" y="242" fill="rgba(255,255,255,0.4)" font-size="12" font-weight="bold">Y</text>'
                        + '        '
                        + '        <!-- Dynamic Wave -->'
                        + '        <path class="dynamic-wave-path" d="M 60,130 C 90,90 100,170 130,130 C 150,95 170,95 190,130 C 220,170 230,90 260,130" />'
                        + '        '
                        + '        <!-- Labels pointing -->'
                        + '        <line x1="220" y1="145" x2="235" y2="185" stroke="rgba(255,255,255,0.3)" stroke-width="1" />'
                        + '        <line x1="160" y1="190" x2="195" y2="220" stroke="rgba(255,255,255,0.3)" stroke-width="1" />'
                        + '      </svg>'
                        + '      '
                        + '      <!-- 3 health circles with low opacity -->'
                        + '      <div class="venn-circle physical" style="width: 110px; height: 110px; left: 45px; top: 35px; pointer-events: none; opacity: 0.65; font-size: 0.85rem;">'
                        + '        <span class="lang-ja">身体的</span><span class="lang-vi">Thể chất</span>'
                        + '      </div>'
                        + '      <div class="venn-circle social" style="width: 110px; height: 110px; right: 45px; top: 35px; pointer-events: none; opacity: 0.65; font-size: 0.85rem;">'
                        + '        <span class="lang-ja">社会的</span><span class="lang-vi">Xã hội</span>'
                        + '      </div>'
                        + '      <div class="venn-circle mental" style="width: 110px; height: 110px; left: 105px; bottom: 45px; pointer-events: none; opacity: 0.65; font-size: 0.85rem;">'
                        + '        <span class="lang-ja">精神的</span><span class="lang-vi">Tinh thần</span>'
                        + '      </div>'
                        + '      '
                        + '      <!-- Spiritual sphere -->'
                        + '      <div class="spiritual-sphere"></div>'
                        + '      '
                        + '      <!-- Labels overlay -->'
                        + '      <div style="position: absolute; left: 235px; top: 180px; font-size: 0.75rem; color: #10b981; font-weight: bold;">Dynamic (動的)</div>'
                        + '      <div style="position: absolute; left: 200px; top: 215px; font-size: 0.75rem; color: #fb923c; font-weight: bold;">Spiritual (霊的/尊厳)</div>'
                        + '    </div>'
                        + '  </div>'
                        + '  '
                        + '  <!-- Right Column: 2 Cards description -->'
                        + '  <div class="who1998-info-side">'
                        + '    <div class="card-1998">'
                        + '      <div style="font-size: 0.95rem; line-height: 1.6; color: #fff; font-weight: 500;">'
                        + '        <span class="lang-ja">1998年WHO執行理事会にて、憲章の「健康の定義」に新たに<strong>「dynamic (動的)」</strong>と<strong>「spiritual (霊的/尊厳)」</strong>を加える改変案が提唱されました。</span>'
                        + '        <span class="lang-vi">Tại Hội đồng Chấp hành WHO năm 1998, một dự thảo sửa đổi đã được đề xuất để thêm <strong>"dynamic" (động)</strong> và <strong>"spiritual" (tâm linh/phẩm giá)</strong> vào định nghĩa sức khỏe.</span>'
                        + '      </div>'
                        + '    </div>'
                        + '    '
                        + '    <div class="arrow-connector">'
                        + '      <i class="fa-solid fa-angles-down"></i>'
                        + '    </div>'
                        + '    '
                        + '    <div class="card-1998" style="border-left: 3px solid var(--accent-gold);">'
                        + '      <div style="font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary);">'
                        + '        <span class="lang-ja">世界総会での採択は見送られましたが、これは健康を単なる固定された静的状態ではなく、個人の尊厳（Spiritual）を保ちながら自ら高めていく「動的プロセス（Dynamic）」として再定義する重要な契機となりました。</span>'
                        + '        <span class="lang-vi">Mặc dù đại hội đồng chưa thông qua chính thức, nhưng đây là một bước đi mang tính bước ngoặt để nhìn nhận sức khỏe không chỉ là một trạng thái tĩnh, mà là một "quá trình động" (Dynamic) liên tục được kiến tạo dựa trên nền tảng nhân phẩm con người (Spiritual).</span>'
                        + '      </div>'
                        + '    </div>'
                        + '  </div>'
                        + '</div>';
                    if (typeof window.syncLanguages === 'function') window.syncLanguages();
                    conceptDetailsPanel.style.opacity = '1';
                    conceptDetailsPanel.style.transform = 'translateY(0)';
                }, 180);
            } else if (tabId === 'ottawa') {
                conceptDetailsPanel.style.opacity = '0.1';
                conceptDetailsPanel.style.transform = 'translateY(5px)';
                setTimeout(() => {
                    conceptDetailsPanel.style.borderTopColor = data.color;
                    conceptDetailsPanel.innerHTML = '<h3 style="color: ' + data.color + '; margin-top: 0; margin-bottom: 16px; font-size: 1.15rem; display: flex; align-items: center; gap: 10px; font-weight: 600;">'
                        + '<i class="fa-solid ' + data.icon + '" style="font-size: 1.2rem;"></i>'
                        + '<span class="lang-ja">' + data.titleJa + '</span>'
                        + '<span class="lang-vi">' + data.titleVi + '</span>'
                        + '</h3>'
+ '<div style="display: flex; flex-direction: column; gap: 20px; width: 100%;">'
                        + '  <div class="ottawa-container">'
                        + '    <!-- Left Column: Interactive Menu List -->'
                        + '    <div class="ottawa-menu-side">'
                        + '      <div class="ottawa-menu-item active" data-ottawa-part="action">'
                        + '        <div class="ottawa-menu-item-title">'
                        + '          <i class="fa-solid fa-gears" style="color: #60a5fa;"></i>'
                        + '          <span class="lang-ja">5つの活動領域</span>'
                        + '          <span class="lang-vi">5 lĩnh vực hành động</span>'
                        + '        </div>'
                        + '        <div class="ottawa-menu-item-desc">'
                        + '          <span class="lang-ja">健康的な公共政策、支援環境づくり、地域活動強化、個人スキル開発、医療の再設定。</span>'
                        + '          <span class="lang-vi">Chính sách công, môi trường hỗ trợ, hành động cộng đồng, kỹ năng cá nhân, định hướng lại dịch vụ y tế.</span>'
                        + '        </div>'
                        + '      </div>'
                        + '      '
                        + '      <div class="ottawa-menu-item" data-ottawa-part="strategy">'
                        + '        <div class="ottawa-menu-item-title">'
                        + '          <i class="fa-solid fa-circle-up" style="color: #60a5fa;"></i>'
                        + '          <span class="lang-ja">3つの基本戦略</span>'
                        + '          <span class="lang-vi">3 chiến lược cơ bản</span>'
                        + '        </div>'
                        + '        <div class="ottawa-menu-item-desc">'
                        + '          <span class="lang-ja">擁護する (Advocate) ・ 可能にする (Enable) ・ 調停する (Mediate)</span>'
                        + '          <span class="lang-vi">Biện hộ (Advocate) - Tạo điều kiện (Enable) - Vận động/Hòa giải (Mediate)</span>'
                        + '        </div>'
                        + '      </div>'
                        + '      '
                        + '      <div class="ottawa-menu-item" data-ottawa-part="prerequisite">'
                        + '        <div class="ottawa-menu-item-title">'
                        + '          <i class="fa-solid fa-cubes" style="color: #60a5fa;"></i>'
                        + '          <span class="lang-ja">8つの前提条件</span>'
                        + '          <span class="lang-vi">8 điều kiện tiên quyết</span>'
                        + '        </div>'
                        + '        <div class="ottawa-menu-item-desc">'
                        + '          <span class="lang-ja">平和、住居、教育、食糧、収入、安定した生態系、持続可能な資源、社会的公正と公平。</span>'
                        + '          <span class="lang-vi">Hòa bình, nhà ở, giáo dục, thực phẩm, thu nhập, hệ sinh thái ổn định, tài nguyên bền vững, công bằng xã hội.</span>'
                        + '        </div>'
                        + '      </div>'
                        + '    </div>'
                        + '    '
                        + '    <!-- Right Column: Blueprint Greek Temple Diagram -->'
                        + '    <div class="ottawa-blueprint-side" style="min-height: 280px; padding: 10px; display: flex; align-items: center; justify-content: center;">'
                        + '      <!-- Blueprint Grid overlay -->'
                        + '      <div style="position: absolute; inset: 0; background-image: linear-gradient(rgba(59, 130, 246, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(59, 130, 246, 0.05) 1px, transparent 1px); background-size: 20px 20px; pointer-events: none;"></div>'
                        + '      '
                        + '      <!-- Temple SVG -->'
                        + '      <svg width="280" height="260" viewBox="0 0 280 260" style="z-index: 2; width: 100%; max-width: 240px; height: auto; margin: 0 auto;">'
                        + '        <!-- ROOF (5 Action Areas) & Rotating Gears -->'
                        + '        <g id="temple-roof" class="temple-part active">'
                        + '          <!-- Roof Triangle Outline -->'
                        + '          <polygon points="20,80 140,10 260,80" />'
                        + '          <line x1="20" y1="80" x2="260" y2="80" />'
                        + '          '
                        + '          <!-- Spinning Gear 1 (Left) -->'
                        + '          <circle cx="85" cy="55" r="14" class="gear-spin" />'
                        + '          <circle cx="85" cy="55" r="18" stroke-dasharray="4 3" class="gear-spin" />'
                        + '          '
                        + '          <!-- Spinning Gear 2 (Center) -->'
                        + '          <circle cx="140" cy="45" r="18" class="gear-spin-reverse" />'
                        + '          <circle cx="140" cy="45" r="23" stroke-dasharray="4 3" class="gear-spin-reverse" />'
                        + '          '
                        + '          <!-- Spinning Gear 3 (Right) -->'
                        + '          <circle cx="195" cy="55" r="14" class="gear-spin" />'
                        + '          <circle cx="195" cy="55" r="18" stroke-dasharray="4 3" class="gear-spin" />'
                        + '        </g>'
                        + '        '
                        + '        <!-- PILLARS (3 Basic Strategies) -->'
                        + '        <g id="temple-pillars" class="temple-part">'
                        + '          <!-- Pillar Left -->'
                        + '          <rect x="50" y="80" width="30" height="150" rx="2" />'
                        + '          <line x1="65" y1="80" x2="65" y2="230" stroke-dasharray="2 2" />'
                        + '          '
                        + '          <!-- Pillar Center -->'
                        + '          <rect x="125" y="80" width="30" height="150" rx="2" />'
                        + '          <line x1="140" y1="80" x2="140" y2="230" stroke-dasharray="2 2" />'
                        + '          '
                        + '          <!-- Pillar Right -->'
                        + '          <rect x="200" y="80" width="30" height="150" rx="2" />'
                        + '          <line x1="215" y1="80" x2="215" y2="230" stroke-dasharray="2 2" />'
                        + '        </g>'
                        + '        '
                        + '        <!-- BASE (8 Prerequisites) -->'
                        + '        <g id="temple-base" class="temple-part">'
                        + '          <!-- Pediment Base Layers -->'
                        + '          <rect x="10" y="230" width="260" height="15" rx="3" />'
                        + '          <rect x="0" y="245" width="280" height="20" rx="3" />'
                        + '        </g>'
                        + '      </svg>'
                        + '    </div>'
                        + '  </div>'
                        + '  '
                        + '  <!-- Bottom Full-Width Details Card -->'
                        + '  <div class="ottawa-bottom-details" id="ottawa-overlay-box">'
                        + '    <!-- Content loaded dynamically -->'
                        + '    <div style="font-size: 0.82rem; color: var(--text-secondary);">'
                        + '      <span class="lang-ja">読み込み中...</span>'
                        + '      <span class="lang-vi">Đang tải...</span>'
                        + '    </div>'
                        + '  </div>'
                        + '</div>';

                    if (typeof window.syncLanguages === 'function') window.syncLanguages();

                    // Setup interactive handlers for Ottawa blueprint
                    const menuItems = conceptDetailsPanel.querySelectorAll('.ottawa-menu-item');
                    const overlayBox = document.getElementById('ottawa-overlay-box');
                    const templeRoof = document.getElementById('temple-roof');
                    const templePillars = document.getElementById('temple-pillars');
                    const templeBase = document.getElementById('temple-base');

                    const detailsData = {
                        action: {
                            color: 'var(--accent-teal)',
                            titleJa: 'ヘルスプロモーションの5大活動領域',
                            titleVi: '5 lĩnh vực hành động của Nâng cao sức khỏe',
                            bodyJa: '<ul style="margin:0; padding-left:20px; font-size:0.82rem; line-height:1.5;">'
                                + '<li><strong>健康的な公共政策づくり：</strong>健康を第一にする政策決定。</li>'
                                + '<li><strong>健康を支援する環境づくり：</strong>安全で快適に暮らせる社会環境。</li>'
                                + '<li><strong>地域活動の強化：</strong>地域コミュニティの主体的参画。</li>'
                                + '<li><strong>個人のスキルの開発：</strong>健康に関する education と能力向上。</li>'
                                + '<li><strong>医療の再設定：</strong>予防や健康づくりを重視する医療体制へ。</li>'
                                + '</ul>',
                            bodyVi: '<ul style="margin:0; padding-left:20px; font-size:0.82rem; line-height:1.5;">'
                                + '<li><strong>Xây dựng chính sách công khỏe mạnh:</strong> Đặt sức khỏe làm trọng tâm các chính sách.</li>'
                                + '<li><strong>Tạo môi trường hỗ trợ:</strong> Môi trường sống và làm việc an toàn, lành mạnh.</li>'
                                + '<li><strong>Tăng cường hành động cộng đồng:</strong> Sự tham gia tự chủ của cộng đồng.</li>'
                                + '<li><strong>Phát triển kỹ năng cá nhân:</strong> Giáo dục sức khỏe và kỹ năng tự quản lý.</li>'
                                + '<li><strong>Định hướng lại dịch vụ y tế:</strong> Chuyển từ điều trị sang dự phòng chủ động.</li>'
                                + '</ul>'
                        },
                        strategy: {
                            color: 'var(--accent-gold)',
                            titleJa: '3つの基本戦略',
                            titleVi: '3 chiến lược cơ bản',
                            bodyJa: '<ul style="margin:0; padding-left:20px; font-size:0.82rem; line-height:1.5;">'
                                + '<li><strong>擁護する (Advocate)：</strong>社会的決定要因を有利にし健康の価値を唱える。</li>'
                                + '<li><strong>可能にする (Enable)：</strong>能力向上と資源提供により健康格差を縮小する。</li>'
                                + '<li><strong>調停する (Mediate)：</strong>政府、NGO、産業界、地域社会間の連携を仲介する。</li>'
                                + '</ul>',
                            bodyVi: '<ul style="margin:0; padding-left:20px; font-size:0.82rem; line-height:1.5;">'
                                + '<li><strong>Biện hộ (Advocate):</strong> Thúc đẩy các yếu tố xã hội có lợi cho sức khỏe.</li>'
                                + '<li><strong>Tạo điều kiện (Enable):</strong> Thu hẹp khoảng cách y tế, hỗ trợ nguồn lực để tự nâng cao sức khỏe.</li>'
                                + '<li><strong>Hòa giải (Mediate):</strong> Làm cầu nối giữa chính phủ, tổ chức phi chính phủ, doanh nghiệp và cộng đồng.</li>'
                                + '</ul>'
                        },
                        prerequisite: {
                            color: '#60a5fa',
                            titleJa: '健康の8つの前提条件',
                            titleVi: '8 điều kiện tiên quyết đối với sức khỏe'
                        }
                    };

                    function updateOverlay(partId) {
                        const data = detailsData[partId];
                        const isVi = document.body.classList.contains('lang-vi');
                        if (data && overlayBox) {
                            if (partId === 'prerequisite') {
                                overlayBox.innerHTML = '<strong style="color: ' + data.color + '; display: block; margin-bottom: 6px; font-size: 0.88rem;">'
                                    + (isVi ? data.titleVi : data.titleJa)
                                    + '</strong>'
                                    + '<div style="font-size: 0.82rem; line-height: 1.5; color: var(--text-secondary); margin-bottom: 12px;">'
                                    + '<span class="lang-ja">個人の健康は、個人の努力だけでは管理できないグローバルな状況や社会基盤に大きく左右されます。これら8つの状況と資源が確保されて初めて、健康づくりがスタートします。</span>'
                                    + '<span class="lang-vi">Sức khỏe cá nhân không thể chỉ kiểm soát bằng nỗ lực của bản thân mà phụ thuộc rất lớn vào các điều kiện toàn cầu và cơ sở hạ tầng xã hội. Chỉ khi 8 điều kiện này được đảm bảo thì tiến trình nâng cao sức khỏe mới có thể bắt đầu.</span>'
                                    + '</div>'
                                    + '<div class="prereq-blocks-container" style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 10px; margin-bottom: 10px;">'
                                    + '  <div class="prereq-block" data-prereq="peace">'
                                    + '    <i class="fa-solid fa-dove prereq-block-icon"></i>'
                                    + '    <span class="prereq-block-label lang-ja">平和</span>'
                                    + '    <span class="prereq-block-label lang-vi">Hòa bình</span>'
                                    + '  </div>'
                                    + '  <div class="prereq-block" data-prereq="shelter">'
                                    + '    <i class="fa-solid fa-house prereq-block-icon"></i>'
                                    + '    <span class="prereq-block-label lang-ja">住居</span>'
                                    + '    <span class="prereq-block-label lang-vi">Nhà ở</span>'
                                    + '  </div>'
                                    + '  <div class="prereq-block" data-prereq="education">'
                                    + '    <i class="fa-solid fa-book-open prereq-block-icon"></i>'
                                    + '    <span class="prereq-block-label lang-ja">教育</span>'
                                    + '    <span class="prereq-block-label lang-vi">Giáo dục</span>'
                                    + '  </div>'
                                    + '  <div class="prereq-block" data-prereq="food">'
                                    + '    <i class="fa-solid fa-wheat-awn prereq-block-icon"></i>'
                                    + '    <span class="prereq-block-label lang-ja">食糧</span>'
                                    + '    <span class="prereq-block-label lang-vi">Thực phẩm</span>'
                                    + '  </div>'
                                    + '  <div class="prereq-block" data-prereq="income">'
                                    + '    <i class="fa-solid fa-coins prereq-block-icon"></i>'
                                    + '    <span class="prereq-block-label lang-ja">収入</span>'
                                    + '    <span class="prereq-block-label lang-vi">Thu nhập</span>'
                                    + '  </div>'
                                    + '  <div class="prereq-block" data-prereq="ecosystem">'
                                    + '    <i class="fa-solid fa-tree prereq-block-icon"></i>'
                                    + '    <span class="prereq-block-label lang-ja">安定環境</span>'
                                    + '    <span class="prereq-block-label lang-vi">Môi trường</span>'
                                    + '  </div>'
                                    + '  <div class="prereq-block" data-prereq="resources">'
                                    + '    <i class="fa-solid fa-infinity prereq-block-icon"></i>'
                                    + '    <span class="prereq-block-label lang-ja">持続資源</span>'
                                    + '    <span class="prereq-block-label lang-vi">Tài nguyên</span>'
                                    + '  </div>'
                                    + '  <div class="prereq-block" data-prereq="equity">'
                                    + '    <i class="fa-solid fa-scale-balanced prereq-block-icon"></i>'
                                    + '    <span class="prereq-block-label lang-ja">社会的公正</span>'
                                    + '    <span class="prereq-block-label lang-vi">Công bằng</span>'
                                    + '  </div>'
                                    + '</div>'
                                    + '<div id="prereq-desc-box" style="border-top: 1px dashed rgba(255,255,255,0.12); padding-top: 8px; font-size: 0.78rem; min-height: 48px; color: var(--text-secondary);">'
                                    + '  <i class="fa-solid fa-hand-pointer"></i> '
                                    + '  <span class="lang-ja">ブロックをクリックすると詳細が表示されます。</span>'
                                    + '  <span class="lang-vi">Nhấp vào ô để xem chi tiết.</span>'
                                    + '</div>';
                                
                                const pBlocks = overlayBox.querySelectorAll('.prereq-block');
                                const pDescBox = document.getElementById('prereq-desc-box');
                                const prereqData = {
                                    peace: {
                                        ja: '<strong>平和 (Peace):</strong> 紛争のない状態は、あらゆる人間の営みの土台であり、健康にとっても最優先の前提条件です。',
                                        vi: '<strong>Hòa bình (Peace):</strong> Sự vắng bóng của xung đột là nền tảng cho mọi hoạt động của con người và là điều kiện tiên quyết hàng đầu cho sức khỏe.'
                                    },
                                    shelter: {
                                        ja: '<strong>住居 (Shelter):</strong> 暑さ寒さや危険から身を守り、プライバシーが保たれる安全で衛生的な居住空間。',
                                        vi: '<strong>Nhà ở (Shelter):</strong> Không gian sống an toàn, vệ sinh, bảo vệ cơ thể khỏi thời tiết khắc nghiệt và nguy hiểm.'
                                    },
                                    education: {
                                        ja: '<strong>教育 (Education):</strong> 正しい情報を選択し、自立した意思決定を行い、社会で適切に生きるための知識を得る機会。',
                                        vi: '<strong>Giáo dục (Education):</strong> Cơ hội tiếp thu tri thức để đưa ra các quyết định độc lập, đúng đắn bảo vệ sức khỏe.'
                                    },
                                    food: {
                                        ja: '<strong>食糧 (Food):</strong> 生命維持と活力ある生活に必要な、安全で栄養価の高い食料が持続的に確保されていること。',
                                        vi: '<strong>Thực phẩm (Food):</strong> Nguồn lương thực an toàn, giàu dinh dưỡng được đảm bảo cung cấp một cách bền vững.'
                                    },
                                    income: {
                                        ja: '<strong>収入 (Income):</strong> 必要な生活物資やサービスを手に入れ、尊厳ある生活設計を立てるための経済的基盤。',
                                        vi: '<strong>Thu nhập (Income):</strong> Nền tảng tài chính ổn định để trang trải cuộc sống và tiếp cận các dịch vụ cần thiết.'
                                    },
                                    ecosystem: {
                                        ja: '<strong>安定した環境 (Stable Ecosystem):</strong> 大気、水、土壌などの自然環境が保全され、生態系のバランスが維持されている状態。',
                                        vi: '<strong>Môi trường ổn định (Ecosystem):</strong> Sự bảo tồn không khí, nguồn nước, đất đai và duy trì sự cân bằng sinh thái.'
                                    },
                                    resources: {
                                        ja: '<strong>持続可能な資源 (Sustainable Resources):</strong> 次世代の健康や社会を脅かすことなく、継続的に利用可能なエネルギーや資源の管理。',
                                        vi: '<strong>Tài nguyên bền vững (Resources):</strong> Sử dụng hợp lý năng lượng và tài nguyên để không ảnh hưởng thế hệ mai sau.'
                                    },
                                    equity: {
                                        ja: '<strong>社会的公正と公平 (Social Justice and Equity):</strong> すべての人が公平に社会資源やサービスにアクセスできる平等の保障。',
                                        vi: '<strong>Công bằng xã hội (Equity):</strong> Đảm bảo mọi người đều có cơ hội tiếp cận công bằng các nguồn lực và dịch vụ.'
                                    }
                                };
                                
                                pBlocks.forEach(blk => {
                                    blk.addEventListener('click', () => {
                                        pBlocks.forEach(b => b.classList.remove('active'));
                                        blk.classList.add('active');
                                        const key = blk.getAttribute('data-prereq');
                                        const detail = prereqData[key];
                                        if (detail && pDescBox) {
                                            pDescBox.innerHTML = '<span class="lang-ja">' + detail.ja + '</span>'
                                                + '<span class="lang-vi">' + detail.vi + '</span>';
                                            if (typeof window.syncLanguages === 'function') window.syncLanguages();
                                        }
                                    });
                                });
                                
                                // Auto-click first one
                                if (pBlocks.length > 0) pBlocks[0].click();
                            } else if (partId === 'strategy') {
                                overlayBox.innerHTML = '<strong style="color: ' + data.color + '; display: block; margin-bottom: 12px; font-size: 0.88rem;">'
                                    + (isVi ? data.titleVi : data.titleJa)
                                    + '</strong>'
                                    + '<div class="strategy-pillars-container">'
                                    + '  <div class="strategy-pillar-card">'
                                    + '    <i class="fa-solid fa-arrow-up-long strategy-arrow-icon"></i>'
                                    + '    <div class="strategy-pillar-title">'
                                    + '      <span class="lang-ja">推奨する (Advocate)</span>'
                                    + '      <span class="lang-vi">Biện hộ (Advocate)</span>'
                                    + '    </div>'
                                    + '    <div class="strategy-pillar-desc">'
                                    + '      <span class="lang-ja">健康の利点を明確にし、健康的な環境の創造を社会全体に推進・提唱する。</span>'
                                    + '      <span class="lang-vi">Làm rõ lợi ích của sức khỏe, thúc đẩy và vận động toàn xã hội tạo dựng môi trường sống lành mạnh.</span>'
                                    + '    </div>'
                                    + '  </div>'
                                    + '  <div class="strategy-pillar-card">'
                                    + '    <i class="fa-solid fa-arrow-up-long strategy-arrow-icon"></i>'
                                    + '    <div class="strategy-pillar-title">'
                                    + '      <span class="lang-ja">可能にする (Enable)</span>'
                                    + '      <span class="lang-vi">Tạo điều kiện (Enable)</span>'
                                    + '    </div>'
                                    + '    <div class="strategy-pillar-desc">'
                                    + '      <span class="lang-ja">全ての人々が健康面での潜在能力を最大限に引き出せるよう、機会や資源を確保し支援する。</span>'
                                    + '      <span class="lang-vi">Đảm bảo cơ hội và cung cấp nguồn lực hỗ trợ giúp tất cả mọi người phát huy tối đa tiềm năng sức khỏe.</span>'
                                    + '    </div>'
                                    + '  </div>'
                                    + '  <div class="strategy-pillar-card">'
                                    + '    <i class="fa-solid fa-arrow-up-long strategy-arrow-icon"></i>'
                                    + '    <div class="strategy-pillar-title">'
                                    + '      <span class="lang-ja">調停する (Mediate)</span>'
                                    + '      <span class="lang-vi">Hòa giải (Mediate)</span>'
                                    + '    </div>'
                                    + '    <div class="strategy-pillar-desc">'
                                    + '      <span class="lang-ja">健康の追求において対立する様々な利害関係者の間に立ち、妥協点と協力を模索する。</span>'
                                    + '      <span class="lang-vi">Làm cầu nối giữa các bên có lợi ích mâu thuẫn, tìm kiếm điểm chung và sự hợp tác để cùng nâng cao sức khỏe.</span>'
                                    + '    </div>'
                                    + '  </div>'
                                    + '</div>';
                            } else if (partId === 'action') {
                                overlayBox.innerHTML = '<strong style="color: ' + data.color + '; display: block; margin-bottom: 8px; font-size: 0.88rem;">'
                                    + (isVi ? data.titleVi : data.titleJa)
                                    + '</strong>'
                                    + '<div class="action-gears-container">'
                                    + '  <div class="action-gear-card">'
                                    + '    <div class="action-gear-icon-wrapper"><i class="fa-solid fa-gear"></i></div>'
                                    + '    <div class="action-gear-content">'
                                    + '      <div class="action-gear-title">'
                                    + '        <span class="lang-ja">健康的な公共政策づくり</span>'
                                    + '        <span class="lang-vi">Xây dựng chính sách công khỏe mạnh</span>'
                                    + '      </div>'
                                    + '      <div class="action-gear-desc">'
                                    + '        <span class="lang-ja">すべての政策決定において健康を最優先項目として組み込むこと。</span>'
                                    + '        <span class="lang-vi">Đưa yếu tố bảo vệ sức khỏe thành ưu tiên hàng đầu trong mọi quyết định chính sách.</span>'
                                    + '      </div>'
                                    + '    </div>'
                                    + '  </div>'
                                    + '  <div class="action-gear-card">'
                                    + '    <div class="action-gear-icon-wrapper"><i class="fa-solid fa-gear"></i></div>'
                                    + '    <div class="action-gear-content">'
                                    + '      <div class="action-gear-title">'
                                    + '        <span class="lang-ja">健康を支援する環境づくり</span>'
                                    + '        <span class="lang-vi">Tạo môi trường hỗ trợ sức khỏe</span>'
                                    + '      </div>'
                                    + '      <div class="action-gear-desc">'
                                    + '        <span class="lang-ja">安全で快適に暮らせ、健康的な選択が容易にできる社会環境をつくること。</span>'
                                    + '        <span class="lang-vi">Xây dựng không gian sống và làm việc an toàn, tạo điều kiện thuận lợi cho các lựa chọn lành mạnh.</span>'
                                    + '      </div>'
                                    + '    </div>'
                                    + '  </div>'
                                    + '  <div class="action-gear-card">'
                                    + '    <div class="action-gear-icon-wrapper"><i class="fa-solid fa-gear"></i></div>'
                                    + '    <div class="action-gear-content">'
                                    + '      <div class="action-gear-title">'
                                    + '        <span class="lang-ja">地域活動の強化</span>'
                                    + '        <span class="lang-vi">Tăng cường hành động cộng đồng</span>'
                                    + '      </div>'
                                    + '      <div class="action-gear-desc">'
                                    + '        <span class="lang-ja">地域コミュニティが主体となって健康課題に取り組み、決定権を持つこと。</span>'
                                    + '        <span class="lang-vi">Khuyến khích và hỗ trợ các cộng đồng tự chủ giải quyết các vấn đề sức khỏe của chính họ.</span>'
                                    + '      </div>'
                                    + '    </div>'
                                    + '  </div>'
                                    + '  <div class="action-gear-card">'
                                    + '    <div class="action-gear-icon-wrapper"><i class="fa-solid fa-gear"></i></div>'
                                    + '    <div class="action-gear-content">'
                                    + '      <div class="action-gear-title">'
                                    + '        <span class="lang-ja">個人のスキルの開発</span>'
                                    + '        <span class="lang-vi">Phát triển kỹ năng cá nhân</span>'
                                    + '      </div>'
                                    + '      <div class="action-gear-desc">'
                                    + '        <span class="lang-ja">生涯を通じて健康を自ら管理し、賢明な判断ができる知識や能力を培うこと。</span>'
                                    + '        <span class="lang-vi">Cung cấp thông tin, giáo dục sức khỏe giúp mọi người tự kiểm soát và cải thiện sức khỏe suốt đời.</span>'
                                    + '      </div>'
                                    + '    </div>'
                                    + '  </div>'
                                    + '  <div class="action-gear-card">'
                                    + '    <div class="action-gear-icon-wrapper"><i class="fa-solid fa-gear"></i></div>'
                                    + '    <div class="action-gear-content">'
                                    + '      <div class="action-gear-title">'
                                    + '        <span class="lang-ja">医療の再設定</span>'
                                    + '        <span class="lang-vi">Định hướng lại dịch vụ y tế</span>'
                                    + '      </div>'
                                    + '      <div class="action-gear-desc">'
                                    + '        <span class="lang-ja">治療偏重から予防や健康の維持・増進を重視するシステムへと再設計すること。</span>'
                                    + '        <span class="lang-vi">Chuyển đổi trọng tâm từ chăm sóc lâm sàng/điều trị sang dự phòng và nâng cao sức khỏe chủ động.</span>'
                                    + '      </div>'
                                    + '    </div>'
                                    + '  </div>'
                                    + '</div>';
                            } else {
                                overlayBox.innerHTML = '<strong style="color: ' + data.color + '; display: block; margin-bottom: 6px; font-size: 0.88rem;">'
                                    + (isVi ? data.titleVi : data.titleJa)
                                    + '</strong>'
                                    + (isVi ? data.bodyVi : data.bodyJa);
                            }
                            if (typeof window.syncLanguages === 'function') window.syncLanguages();
                        }

                        // Update SVG highlight active classes
                        if (templeRoof) templeRoof.classList.toggle('active', partId === 'action');
                        if (templePillars) templePillars.classList.toggle('active', partId === 'strategy');
                        if (templeBase) templeBase.classList.toggle('active', partId === 'prerequisite');
                    }

                    menuItems.forEach(item => {
                        item.addEventListener('click', () => {
                            menuItems.forEach(i => i.classList.remove('active'));
                            item.classList.add('active');
                            updateOverlay(item.getAttribute('data-ottawa-part'));
                        });
                    });

                    // Init overlay with Action Areas
                    updateOverlay('action');

                    conceptDetailsPanel.style.opacity = '1';
                    conceptDetailsPanel.style.transform = 'translateY(0)';
                }, 180);
            } else {
                conceptDetailsPanel.style.opacity = '0.1';
                conceptDetailsPanel.style.transform = 'translateY(5px)';
                setTimeout(() => {
                    conceptDetailsPanel.style.borderTopColor = data.color;
                    conceptDetailsPanel.innerHTML = '<h3 style="color: ' + data.color + '; margin-top: 0; margin-bottom: 16px; font-size: 1.15rem; display: flex; align-items: center; gap: 10px; font-weight: 600;">'
                        + '<i class="fa-solid ' + data.icon + '" style="font-size: 1.2rem;"></i>'
                        + '<span class="lang-ja">' + data.titleJa + '</span>'
                        + '<span class="lang-vi">' + data.titleVi + '</span>'
                        + '</h3>'
                        + '<div style="font-size: 0.98rem; line-height: 1.8; color: var(--text-secondary);">'
                        + '<div class="lang-ja">' + data.bodyJa + '</div>'
                        + '<div class="lang-vi">' + data.bodyVi + '</div>'
                        + '</div>';
                    if (typeof window.syncLanguages === 'function') window.syncLanguages();
                    conceptDetailsPanel.style.opacity = '1';
                    conceptDetailsPanel.style.transform = 'translateY(0)';
                }, 180);
            }
        }
    }

    if (conceptTabsGroup) {
        conceptTabsGroup.querySelectorAll('.sbo111-concept-node').forEach(btn => {
            btn.addEventListener('click', () => {
                activateConceptTab(btn.getAttribute('data-concept-tab'));
            });
        });
        activateConceptTab('who1948');
    }

    // --- PART 2: Roadmap Steps Simulator ---
    const steps = document.querySelectorAll('.roadmap-step');
    const labelItems = document.querySelectorAll('.roadmap-label-item');
    const detailCard = document.getElementById('roadmap-details-card');
    const cardTitle = document.getElementById('roadmap-card-title');
    const cardBody = document.getElementById('roadmap-card-body');

    if (!steps.length || !detailCard || !cardTitle || !cardBody) return;

    const roadmapData = {
        '1': {
            color: 'var(--accent-teal)',
            icon: 'fa-users-line',
            titleJa: '一連のプロセスとしての健康（基本的理念）',
            titleVi: 'Sức khỏe là một quá trình liên tục (Triết lý cơ bản)',
            bodyJa: '<p style="margin: 0 0 8px 0;">• <strong>包括的ヘルスケア：</strong>健康、医療と介護は人生における一連の経過であり、施設ごとに分断するのではなく統合的なシステムとして構築されるべきです。</p>'
                 + '<p style="margin: 0;">• <strong>法律上の規定：</strong>医療法や社会福祉法にも「医療提供時に福祉サービス等と有機的な連携を図る」ことが明記され、三者の連携が必須となっています。</p>',
            bodyVi: '<p style="margin: 0 0 8px 0;">• <strong>Hệ thống tích hợp:</strong> Sức khỏe, y tế và Kaigo (điều dưỡng) là chuỗi liên tục suốt đời, không được chia cắt hay cô lập theo từng cơ sở đơn lẻ.</p>'
                 + '<p style="margin: 0;">• <strong>Liên kết pháp lý:</strong> Luật Y tế và Luật Phúc lợi xã hội Nhật Bản quy định rõ dịch vụ bảo vệ sức khỏe, y tế và phúc lợi phải "đảm bảo liên kết hữu cơ" với nhau.</p>'
        },
        '2': {
            color: 'var(--accent-gold)',
            icon: 'fa-arrows-spin',
            titleJa: '「病院完結型」から「地域完結型」への転換',
            titleVi: 'Từ "Bệnh viện khép kín" sang "Hoàn thiện tại khu vực"',
            bodyJa: '<p style="margin: 0 0 8px 0;">• <strong>医療ニーズの変容：</strong>高齢化や慢性疾患の増加に伴い、病院の中だけで治療を終わらせる「病院完結型」の医療モデルは限界を迎えています。</p>'
                 + '<p style="margin: 0;">• <strong>地域全体での支援：</strong>在宅医療、介護、リハビリテーションを含め、地域全体で患者の生活を「治し支える」医療システムへの移行が必要です。</p>',
            bodyVi: '<p style="margin: 0 0 8px 0;">• <strong>Sự thay đổi nhu cầu:</strong> Với sự gia tăng các bệnh mạn tính ở người cao tuổi, mô hình "Bệnh viện khép kín" (vào viện chữa xong về) đã không còn phù hợp.</p>'
                 + '<p style="margin: 0;">• <strong>Hoàn thiện tại khu vực:</strong> Chuyển dịch sang mô hình "Hoàn thiện tại khu vực" (地域完結型), huy động toàn bộ cộng đồng cùng vừa chữa trị vừa hỗ trợ sinh hoạt.</p>'
        },
        '3': {
            color: '#3b82f6',
            icon: 'fa-circle-nodes',
            titleJa: '連携の基盤となる情報ネットワーク',
            titleVi: 'Mạng lưới thông tin làm nền tảng liên kết',
            bodyJa: '<p style="margin: 0 0 8px 0;">• <strong>多職種・多機関の情報共有：</strong>保健・医療・福祉・介護の各機関が分断なく繋がるため、シームレスな共有環境が必要です。</p>'
                 + '<p style="margin: 0;">• <strong>EHRの重要性：</strong>ICTを活用した地域医療情報連携ネットワーク（EHR等）の構築が、包括的な連携介護を支える核心インフラとなります。</p>',
            bodyVi: '<p style="margin: 0 0 8px 0;">• <strong>Chia sẻ liên cơ quan:</strong> Đảm bảo thông tin lưu chuyển thông suốt giữa bệnh viện, phòng khám, nhà thuốc, cơ sở chăm sóc, trung tâm y tế.</p>'
                 + '<p style="margin: 0;">• <strong>Nền tảng EHR:</strong> Việc áp dụng mạng lưới thông tin y tế khu vực (như EHR - Hồ sơ sức khỏe điện tử khu vực) đóng vai trò sống còn để kết nối các dịch vụ.</p>'
        },
        '4': {
            color: '#10b981',
            icon: 'fa-network-wired',
            titleJa: '最終目標：地域包括ケアシステムの構築',
            titleVi: 'Mục tiêu tối thượng: Hệ thống chăm sóc toàn diện khu vực',
            bodyJa: '<p style="margin: 0 0 8px 0;">• <strong>5つの構成要素の一体提供：</strong>2025年を目途に「住まい・医療・介護・予防・生活支援」を一体的に提供するネットワークを構築します。</p>'
                 + '<p style="margin: 0;">• <strong>地域での自立支援：</strong>重度の要介護状態となっても、住み慣れた地域で自分らしい暮らしを最後まで維持できる社会の実現を目指します。</p>',
            bodyVi: '<p style="margin: 0 0 8px 0;">• <strong>Tích hợp 5 yếu tố:</strong> Xây dựng hệ thống đồng bộ gồm Chỗ ở, Y tế, Chăm sóc điều dưỡng, Dự phòng và Hỗ trợ cuộc sống hướng tới mốc năm 2025.</p>'
                 + '<p style="margin: 0;">• <strong>Sống tự lập tại quê nhà:</strong> Giúp người cao tuổi dù cần chăm sóc nặng vẫn có thể sống tự do, tôn nghiêm đến cuối đời tại chính nơi ở quen thuộc.</p>'
        }
    };

    function activateStep(stepId) {
        steps.forEach(s => s.classList.toggle('active', s.getAttribute('data-step') === stepId));
        labelItems.forEach(l => l.classList.toggle('active', l.getAttribute('data-step') === stepId));

        const data = roadmapData[stepId];
        if (data) {
            detailCard.style.opacity = '0.1';
            setTimeout(() => {
                detailCard.style.borderLeftColor = data.color;
                const titleColor = data.color === '#3b82f6' ? '#60a5fa' : (data.color === '#10b981' ? '#34d399' : data.color);
                cardTitle.style.color = titleColor;
                cardTitle.innerHTML = '<i class="fa-solid ' + data.icon + '"></i> '
                                    + '<span class="lang-ja">' + data.titleJa + '</span> '
                                    + '<span class="lang-vi">' + data.titleVi + '</span>';
                cardBody.innerHTML = '<div class="lang-ja">' + data.bodyJa + '</div>'
                                   + '<div class="lang-vi">' + data.bodyVi + '</div>';

                if (typeof window.syncLanguages === 'function') window.syncLanguages();
                detailCard.style.opacity = '1';
            }, 180);
        }
    }

    steps.forEach(step => {
        step.addEventListener('click', () => activateStep(step.getAttribute('data-step')));
    });

    labelItems.forEach(label => {
        label.addEventListener('click', () => activateStep(label.getAttribute('data-step')));
    });


    // --- 14b & 14c. Interactive Prevention & Health Checkups Listeners ---
        // --- 14b. Interactive Preventive Medicine Levels ---
    const prevLvlSegments = document.querySelectorAll('[data-prev-lvl]');
    const prevLvlTitle = document.getElementById('prev-lvl-title');
    const prevLvlBody = document.getElementById('prev-lvl-body');
    const svgShields = document.querySelectorAll('.prev-svg-shield');
    const radarLayer = document.getElementById('integrated-radar-layer');
    const recoveryLoop = document.getElementById('svg-recovery-loop');

    const updateSvgShields = (activeLvl) => {
        const shieldStyles = {
            '1': { stroke: '#10b981', fill: 'rgba(16, 185, 129, 0.25)', filter: 'url(#glow-green)' },
            '2': { stroke: '#f59e0b', fill: 'rgba(245, 158, 11, 0.25)', filter: 'url(#glow-gold)' },
            '3': { stroke: '#ef4444', fill: 'rgba(239, 68, 68, 0.25)', filter: 'url(#glow-red)' }
        };

        // 1. Highlight shields
        ['1', '2', '3'].forEach(lvl => {
            const shieldPath = document.getElementById('svg-shield-' + lvl);
            if (!shieldPath) return;

            if (lvl === activeLvl) {
                const style = shieldStyles[lvl];
                shieldPath.setAttribute('stroke', style.stroke);
                shieldPath.setAttribute('stroke-width', '2.5');
                shieldPath.setAttribute('fill', style.fill);
                shieldPath.setAttribute('filter', style.filter);
            } else {
                shieldPath.setAttribute('stroke', 'rgba(255,255,255,0.3)');
                shieldPath.setAttribute('stroke-width', '1.5');
                shieldPath.setAttribute('fill', 'rgba(255,255,255,0.06)');
                shieldPath.removeAttribute('filter');
            }
        });

        // 2. Control dynamic overlays inside SVG
        if (radarLayer) {
            radarLayer.style.opacity = (activeLvl === '2') ? '1' : '0';
        }
        
        if (recoveryLoop) {
            if (activeLvl === '3') {
                recoveryLoop.style.opacity = '1';
                recoveryLoop.setAttribute('stroke-width', '4');
                recoveryLoop.style.filter = 'drop-shadow(0 0 6px #10b981)';
            } else {
                recoveryLoop.style.opacity = '0.2';
                recoveryLoop.setAttribute('stroke-width', '3');
                recoveryLoop.style.filter = 'none';
            }
        }
    };

    prevLvlSegments.forEach(segment => {
        segment.addEventListener('click', () => {
            prevLvlSegments.forEach(s => s.classList.remove('active'));
            segment.classList.add('active');

            const key = segment.getAttribute('data-prev-lvl');
            const data = (window.prevLvlData || {})[key];

            if (data && prevLvlTitle) {
                const infoCard = document.getElementById('prev-lvl-info');
                infoCard.style.opacity = '0.3';
                setTimeout(() => {
                    const isVi = document.body.classList.contains('lang-vi');
                    prevLvlTitle.innerHTML = isVi ? data.title.vi : data.title.ja;
                    prevLvlBody.innerHTML = isVi ? data.body.vi : data.body.ja;
                    infoCard.style.opacity = '1';
                }, 200);
            }
            updateSvgShields(key);
        });
    });

    if (svgShields) {
        svgShields.forEach(shield => {
            shield.addEventListener('click', () => {
                const idx = shield.getAttribute('data-shield-idx');
                const matchingBtn = document.querySelector('[data-prev-lvl="' + idx + '"]');
                if (matchingBtn) matchingBtn.click();
            });
        });
    }

    // Initialize
    const firstBtn = document.querySelector('[data-prev-lvl="1"]');
    if (firstBtn) firstBtn.click();

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

    activateStep('1');
};
window.initSbo112Simulator = function() {

    // --- PART 1: Patient Relation Tabs ---
    const p1TabsGroup = document.getElementById('sbo112-p1-tabs-group');
    const p1DetailsPanel = document.getElementById('sbo112-p1-details-panel');

    const p1Data = {
        '1': {
            color: 'var(--accent-teal)',
            icon: 'fa-handshake',
            titleJa: '「パターナリズム」から「準委任契約関係」への転換',
            titleVi: 'Sự chuyển dịch sang "Quan hệ hợp đồng chuẩn ủy quyền"',
            bodyJa: '<p style="margin: 0 0 10px 0;">• <strong>医師主導から相互理解へ：</strong>従来の医師主導による方針決定（パターナリズム）は家長制度の延長線上にあり、経験・知識・技術を持つ者に従うものでした。</p><p style="margin: 0;">• <strong>準委任契約の基本化：</strong>現代医療においては、医師と患者との対等な「準委任契約関係」が基本とされ、お互いの信頼関係に基づく合意が求められます。</p>',
            bodyVi: '<p style="margin: 0 0 10px 0;">• <strong>Từ bỏ chủ nghĩa gia trưởng:</strong> Trước đây thường tồn tại mối quan hệ do bác sĩ làm chủ đạo (Paternalism) bắt nguồn từ nếp nghĩ gia trưởng, yêu cầu người bệnh tuân theo hoàn toàn chuyên môn của bác sĩ.</p><p style="margin: 0;">• <strong>Thiết lập mối quan hệ bình đẳng:</strong> Ngày nay, mối quan hệ này dựa trên nền tảng "Hợp đồng chuẩn ủy quyền" (準委任契約関係), thúc đẩy hai bên trao đổi bình đẳng và cùng đồng thuận.</p>'
        },
        '2': {
            color: 'var(--accent-gold)',
            icon: 'fa-clipboard-check',
            titleJa: '「説明と同意」と「説明と選択」の前提',
            titleVi: 'Tiền đề "Giải thích & Đồng ý" và "Giải thích & Lựa chọn"',
            bodyJa: '<p style="margin: 0 0 10px 0;">• <strong>インフォームド・コンセント：</strong>医療行為を行う際の絶対的なルールとして、十分な「説明と同意」が不可欠となっています。</p><p style="margin: 0;">• <strong>インフォームド・チョイスと価値観の尊重：</strong>患者自身が納得した上で「選択」を行う権利を保障し、個人の多様な価値観や人生観を十分に考慮します。</p>',
            bodyVi: '<p style="margin: 0 0 10px 0;">• <strong>Giải thích và Đồng ý (Informed Consent):</strong> Trở thành tiền đề bắt buộc trước mọi hành vi y khoa, bảo đảm người bệnh hiểu rõ mọi lợi ích và rủi ro.</p><p style="margin: 0;">• <strong>Giải thích và Lựa chọn (Informed Choice):</strong> Tôn trọng quyền tự quyết của người bệnh dựa trên thế giới quan, nhân sinh quan và giá trị sống đa dạng của mỗi cá nhân.</p>'
        },
        '3': {
            color: '#c084fc',
            icon: 'fa-scale-unbalanced',
            titleJa: '情報の非対称性と「情報弱者」の課題',
            titleVi: 'Bất đối xứng thông tin và vấn đề "Người yếu thế thông tin"',
            bodyJa: '<p style="margin: 0 0 10px 0;">• <strong>情報の非対称性の存在：</strong>患者中心の医療が進む一方で、データや専門知識が医療側に偏在する「情報の非対称性」が依然として課題です。</p><p style="margin: 0;">• <strong>情報弱者の支援：</strong>高度情報化社会の中、ネットやITリテラシーの低い高齢者等は「情報弱者」となりやすく、情報提供側の十分なサポートが求められています。</p>',
            bodyVi: '<p style="margin: 0 0 10px 0;">• <strong>Sự bất đối xứng về thông tin:</strong> Tồn tại sự mất cân bằng sâu sắc khi dữ liệu y khoa và tri thức chuyên môn chủ yếu tập trung ở bên cung cấp dịch vụ y tế.</p><p style="margin: 0;">• <strong>Vấn đề người yếu thế thông tin:</strong> Sự bùng nổ của Internet vô tình đẩy những người hạn chế về kỹ năng công nghệ (IT literacy) như người già thành đối tượng yếu thế. Đòi hỏi y tế cần có các biện pháp hỗ trợ thu hẹp khoảng cách.</p>'
        }
    };

    function activateP1Tab(tabId) {
        if (!p1TabsGroup || !p1DetailsPanel) return;
        const buttons = p1TabsGroup.querySelectorAll('button[data-sbo112-p1-tab]');
        buttons.forEach(btn => {
            const isCurrent = btn.getAttribute('data-sbo112-p1-tab') === tabId;
            const data = p1Data[btn.getAttribute('data-sbo112-p1-tab')];
            const icon = btn.querySelector('i');
            
            if (isCurrent) {
                btn.classList.add('active');
                btn.style.background = tabId === '3' ? 'rgba(192, 132, 252, 0.12)' : (tabId === '2' ? 'rgba(245, 158, 11, 0.12)' : 'rgba(45, 212, 191, 0.12)');
                btn.style.borderColor = data.color;
                btn.style.color = '#fff';
                if(icon) { icon.style.color = data.color; icon.style.opacity = '0.8'; }
            } else {
                btn.classList.remove('active');
                btn.style.background = 'rgba(0,0,0,0.25)';
                btn.style.borderColor = 'rgba(255,255,255,0.08)';
                btn.style.color = 'var(--text-muted)';
                if(icon) { icon.style.color = 'inherit'; icon.style.opacity = '0.5'; }
            }
        });

        const data = p1Data[tabId];
        if (data) {
            p1DetailsPanel.style.opacity = '0.1';
            p1DetailsPanel.style.transform = 'translateY(5px)';
            setTimeout(() => {
                p1DetailsPanel.style.borderLeftColor = data.color;
                p1DetailsPanel.innerHTML = '<h3 style="color: ' + data.color + '; margin-top: 0; margin-bottom: 16px; font-size: 1.15rem; display: flex; align-items: center; gap: 10px; font-weight: 600;">'
                    + '<i class="fa-solid ' + data.icon + '" style="font-size: 1.2rem;"></i>'
                    + '<span class="lang-ja">' + data.titleJa + '</span>'
                    + '<span class="lang-vi">' + data.titleVi + '</span>'
                    + '</h3>'
                    + '<div style="font-size: 0.98rem; line-height: 1.8; color: var(--text-secondary);">'
                    + '<div class="lang-ja">' + data.bodyJa + '</div>'
                    + '<div class="lang-vi">' + data.bodyVi + '</div>'
                    + '</div>';
                if (typeof window.syncLanguages === 'function') window.syncLanguages();
                p1DetailsPanel.style.opacity = '1';
                p1DetailsPanel.style.transform = 'translateY(0)';
            }, 180);
        }
    }

    if (p1TabsGroup) {
        p1TabsGroup.querySelectorAll('button[data-sbo112-p1-tab]').forEach(btn => {
            btn.addEventListener('click', () => activateP1Tab(btn.getAttribute('data-sbo112-p1-tab')));
        });
        activateP1Tab('1');
    }

    // --- PART 2: Personal Info Timeline ---
    const p2TabsGroup = document.getElementById('sbo112-p2-tabs-group');
    const p2DetailsPanel = document.getElementById('sbo112-p2-details-panel');
    const p2ProgressBar = document.getElementById('sbo112-p2-timeline-progress');

    const p2Data = {
        '1': {
            color: 'var(--accent-teal)',
            icon: 'fa-user-shield',
            titleJa: '情報のコントロールと「自己情報コントロール権」',
            titleVi: 'Quyền kiểm soát thông tin cá nhân (自己情報コントロール権)',
            bodyJa: '<p style="margin: 0 0 10px 0;">• <strong>能動的な権利への転換：</strong>個人情報保護法の精神に基づき、従来の消極的なプライバシー保護だけでなく、自己に関する情報の流れを自ら管理する「自己情報コントロール権」が確立されています。</p><p style="margin: 0;">• <strong>開示請求の増加：</strong>この権利意識の高まりに伴い、患者自身による診療情報の提供や開示を求める件数が大幅に増加しています。</p>',
            bodyVi: '<p style="margin: 0 0 10px 0;">• <strong>Quyền tự quyết tích cực:</strong> Trên tinh thần Luật Bảo vệ Thông tin Cá nhân, quyền riêng tư đã chuyển thành quyền chủ động kiểm soát dòng thông tin liên quan đến bản thân.</p><p style="margin: 0;">• <strong>Yêu cầu công khai gia tăng:</strong> Nhận thức về quyền cá nhân ngày càng cao dẫn đến việc số lượng yêu cầu cung cấp và công khai thông tin khám chữa bệnh tăng trưởng mạnh mẽ.</p>'
        },
        '2': {
            color: 'var(--accent-gold)',
            icon: 'fa-id-card-clip',
            titleJa: 'PHRの活用とプライバシー保護',
            titleVi: 'Kỳ vọng vào Hồ sơ sức khỏe cá nhân (PHR)',
            bodyJa: '<p style="margin: 0 0 10px 0;">• <strong>一次利用によるケア向上：</strong>診療情報を個人のPHRとして蓄積し、マイナンバー制度等の地域包括連携で共有することで、効率的で質の高いケア（一次利用）が可能になります。</p><p style="margin: 0;">• <strong>プライバシーの死守：</strong>高い利便性と表裏一体で、データ漏洩の防止や厳格なアクセス制御などのプライバシー保護対策が絶対不可欠です。</p>',
            bodyVi: '<p style="margin: 0 0 10px 0;">• <strong>Sử dụng sơ cấp nâng cao chất lượng:</strong> Tích lũy thông tin y tế dài hạn dưới dạng PHR và kết hợp hệ My Number giúp chia sẻ dữ liệu hiệu quả trong chăm sóc sức khỏe toàn diện.</p><p style="margin: 0;">• <strong>Ưu tiên bảo vệ tối đa:</strong> Dù chia sẻ mang lại lợi ích to lớn, việc ngăn ngừa rò rỉ dữ liệu và thiết lập quyền truy cập chặt chẽ luôn là ưu tiên tối thượng.</p>'
        },
        '3': {
            color: '#c084fc',
            icon: 'fa-users',
            titleJa: '医療ビッグデータ利活用と「社会的コンセンサス」',
            titleVi: 'Thách thức hình thành sự đồng thuận xã hội',
            bodyJa: '<p style="margin: 0 0 10px 0;">• <strong>二次利用による医学的知見：</strong>PHRの時系列多変量データを利活用（二次利用）することで、医学のさらなる進歩やビッグデータ分析に役立てられます。</p><p style="margin: 0;">• <strong>社会的合意と例外規則：</strong>データ利活用には本人の同意が必要であるため、社会的なコンセンサスの形成が急務です。また、緊急時や災害時に向けた医療特例法の検討も重要です。</p>',
            bodyVi: '<p style="margin: 0 0 10px 0;">• <strong>Giá trị sử dụng thứ cấp:</strong> Khai thác dữ liệu lớn (Big Data) đa biến chuỗi thời gian của PHR mở ra nhiều tri thức y học mới giá trị cho dịch tễ học.</p><p style="margin: 0;">• <strong>Đồng thuận xã hội và ngoại lệ y tế:</strong> Việc sử dụng dữ liệu cần sự đồng ý của bệnh nhân, đòi hỏi sớm hình thành đồng thuận xã hội, đồng thời cần có cơ chế xử lý ngoại lệ trong trường hợp khẩn cấp/thảm họa.</p>'
        }
    };

    function activateP2Tab(tabId) {
        if (!p2TabsGroup || !p2DetailsPanel) return;
        const buttons = p2TabsGroup.querySelectorAll('button[data-sbo112-p2-tab]');
        
        if (p2ProgressBar) {
            const percentages = { '1': '0%', '2': '50%', '3': '100%' };
            p2ProgressBar.style.width = percentages[tabId] || '0%';
        }

        buttons.forEach(btn => {
            const isCurrent = btn.getAttribute('data-sbo112-p2-tab') === tabId;
            const circle = btn.querySelector('.node-circle');
            const textSpan = btn.querySelector(':scope > span');
            const data = p2Data[btn.getAttribute('data-sbo112-p2-tab')];

            if (isCurrent) {
                if (circle) {
                    circle.style.borderColor = data.color;
                    circle.style.background = data.color;
                    circle.style.color = '#fff';
                    circle.style.boxShadow = '0 0 20px ' + data.color;
                }
                if (textSpan) {
                    textSpan.style.color = '#fff';
                    textSpan.style.textShadow = '0 0 8px rgba(255,255,255,0.3)';
                }
            } else {
                if (circle) {
                    circle.style.borderColor = 'rgba(255,255,255,0.15)';
                    circle.style.background = 'rgba(15,23,42,0.8)';
                    circle.style.color = 'var(--text-muted)';
                    circle.style.boxShadow = 'none';
                }
                if (textSpan) {
                    textSpan.style.color = 'var(--text-secondary)';
                    textSpan.style.textShadow = 'none';
                }
            }
        });

        const data = p2Data[tabId];
        if (data) {
            p2DetailsPanel.style.opacity = '0.1';
            p2DetailsPanel.style.transform = 'translateY(5px)';
            setTimeout(() => {
                p2DetailsPanel.style.borderTopColor = data.color;
                p2DetailsPanel.innerHTML = '<h3 style="color: ' + data.color + '; margin-top: 0; margin-bottom: 16px; font-size: 1.15rem; display: flex; align-items: center; gap: 10px; font-weight: 600;">'
                    + '<i class="fa-solid ' + data.icon + '" style="font-size: 1.2rem;"></i>'
                    + '<span class="lang-ja">' + data.titleJa + '</span>'
                    + '<span class="lang-vi">' + data.titleVi + '</span>'
                    + '</h3>'
                    + '<div style="font-size: 0.98rem; line-height: 1.8; color: var(--text-secondary);">'
                    + '<div class="lang-ja">' + data.bodyJa + '</div>'
                    + '<div class="lang-vi">' + data.bodyVi + '</div>'
                    + '</div>';
                if (typeof window.syncLanguages === 'function') window.syncLanguages();
                p2DetailsPanel.style.opacity = '1';
                p2DetailsPanel.style.transform = 'translateY(0)';
            }, 180);
        }
    }

    if (p2TabsGroup) {
        p2TabsGroup.querySelectorAll('button[data-sbo112-p2-tab]').forEach(btn => {
            btn.addEventListener('click', () => activateP2Tab(btn.getAttribute('data-sbo112-p2-tab')));
        });
        activateP2Tab('1');
    }

    // --- PM concept tabs (updates pm-details-panel innerHTML) ---
    const pmTabsBtnGroup = document.getElementById('pm-tabs-btn-group');
    const pmDetailsPanel = document.getElementById('pm-details-panel');

    const pmData = {
        '1': {
            color: 'var(--accent-teal)',
            titleJa: '「集団」から「個人」へのパラダイムシフト',
            titleVi: 'Sự chuyển dịch từ "Quần thể" sang "Cá nhân"',
            bodyJa: '<p style="margin: 0 0 12px 0;">• <strong>一律判定の限界：</strong>従来の医療では、集団の検査値分布から導出される「正常値」に基づく判断が一般的でした。しかし、ホメオスタシス（恒常性維持）の機序により、個人ごとの本来の変動幅は集団全体の幅よりもはるかに小さいのが現実です。</p><p style="margin: 0;">• <strong>個体差の客観評価：</strong>同一の病名であってもすべての人に同じ治療が有効とは限りません。集団の基準を適用するのではなく、「個体差」を客観的に測定し、患者それぞれの個性に焦点を当てて最適な治療・予防を行う個別化医療への転換が進んでいます。</p>',
            bodyVi: '<p style="margin: 0 0 12px 0;">• <strong>Hạn chế của chỉ số chung:</strong> Theo truyền thống, y khoa đánh giá bệnh dựa trên "giá trị bình thường" đúc kết từ phân bố của quần thể. Tuy nhiên, nhờ cơ chế duy trì nội môi (Homeostasis), biên độ biến động sinh lý của mỗi cá nhân nhỏ hơn rất nhiều so với biên độ chung.</p><p style="margin: 0;">• <strong>Đo lường sự khác biệt cá nhân:</strong> Việc áp dụng một phác đồ chung cho tất cả bệnh nhân cùng chẩn đoán là không tối ưu. Y học hiện đại đang chuyển sang đo lường khách quan "khác biệt cá thể" để thiết kế giải pháp y khoa tập trung cho riêng từng người.</p>'
        },
        '2': {
            color: 'var(--accent-gold)',
            titleJa: 'Genotype（遺伝子型）とPhenotype（表現型）、IoT技術の統合',
            titleVi: 'Sự kết hợp giữa Genotype, Phenotype và công nghệ IoT',
            bodyJa: '<p style="margin: 0 0 12px 0;">• <strong>データ解析の進歩：</strong>大量のゲノム情報を解読する技術と、生命情報学（バイオインフォマティクス）の進歩により、一人ひとりの遺伝的素因を瞬時に分析することが可能になりました。</p><p style="margin: 0;">• <strong>リアルタイム生体連携：</strong>IoT機器やスマートデバイスの普及により、心拍、血圧、睡眠, カロリーなどの生体情報（Phenotype）がリアルタイムにPHRへと蓄積されます。遺伝データ（Genotype）と生活習慣データを統合して解析することで、最も効果的な予防法や薬剤を特定します。</p>',
            bodyVi: '<p style="margin: 0 0 12px 0;">• <strong>Phân tích dữ liệu di truyền lớn:</strong> Y học cá thể hóa ngày nay khả thi nhờ sự phát triển của tin sinh học (Bioinformatics) cùng khả năng giải trình tự gen quy mô lớn để định hình kiểu gen (Genotype) của người bệnh.</p><p style="margin: 0;">• <strong>Thu thập thực tế qua IoT:</strong> Thông qua các thiết bị cảm biến đeo thông minh (IoT), dữ liệu thói quen sinh hoạt và chỉ số sinh lý (Phenotype) được ghi nhận liên tục vào PHR. Sự kết hợp giữa Genotype và Phenotype giúp đưa ra khuyến nghị phòng ngừa chính xác nhất.</p>'
        },
        '3': {
            color: '#a855f7',
            titleJa: '「精密医療（Precision Medicine）」への発展',
            titleVi: 'Bước tiến mạnh mẽ tới "Y học chính xác" (Precision Medicine)',
            bodyJa: '<p style="margin: 0 0 12px 0;">• <strong>単なる「個別」から「層別化」へ：</strong>精密医療は、単に患者一人ひとりに合わせた一対一の医療を提供するだけでなく、遺伝子の生得的特徴や疾患の分子レベルのサブタイプに基づき、患者を細かく「層別化（グループ化）」して最適な治療を施すアプローチです。</p><p style="margin: 0;">• <strong>多重因子の統合解析：</strong>疾患は単一のゲノム情報だけでなく、遺伝的素因と環境要因（Exposome）の複雑な相互作用によって生じるという考えに基づき、マルチオミクス（多様な分子データ）をビッグデータ技術で解析します。</p>',
            bodyVi: '<p style="margin: 0 0 12px 0;">• <strong>Phân tầng nhóm bệnh nhân chuyên sâu:</strong> Khái niệm cá thể hóa được nâng tầm thành Y học chính xác. Nó không đơn thuần là y tế biệt lập, mà là việc phân tầng (層別化) bệnh nhân thành các nhóm nhỏ (subtype) dựa trên sự đa hình gen sinh học.</p><p style="margin: 0;">• <strong>Tương tác giữa Gen và Môi trường:</strong> Y học chính xác đặc biệt nhấn mạnh sự tương tác qua lại giữa yếu tố di truyền bẩm sinh và yếu tố phơi nhiễm môi trường (Exposome), đòi hỏi phân tích dữ liệu sinh học phân tử quy mô lớn để điều trị đích.</p>'
        }
    };

    function activatePmTab(tabId) {
        if (!pmTabsBtnGroup) return;
        const buttons = pmTabsBtnGroup.querySelectorAll('button');
        buttons.forEach(btn => {
            const isCurrent = btn.getAttribute('data-pm-tab') === tabId;
            btn.classList.toggle('active', isCurrent);
            const currentNum = btn.querySelector('span:first-child');
            if (isCurrent) {
                const data = pmData[tabId];
                btn.style.borderColor = data.color;
                btn.style.background = tabId === '3' ? 'rgba(168,85,247,0.08)' : (tabId === '2' ? 'rgba(245,158,11,0.08)' : 'rgba(45,212,191,0.08)');
                btn.style.color = '#fff';
                if (currentNum) currentNum.style.opacity = '0.9';
            } else {
                btn.style.borderColor = 'rgba(255,255,255,0.08)';
                btn.style.background = 'rgba(0,0,0,0.25)';
                btn.style.color = 'var(--text-muted)';
                if (currentNum) currentNum.style.opacity = '0.5';
            }
        });

        const data = pmData[tabId];
        if (data && pmDetailsPanel) {
            pmDetailsPanel.style.opacity = '0.1';
            pmDetailsPanel.style.transform = 'translateY(5px)';
            setTimeout(() => {
                pmDetailsPanel.style.borderTopColor = data.color;
                const titleColor = data.color === 'var(--accent-teal)' ? '#2dd4bf'
                    : data.color === 'var(--accent-gold)' ? 'var(--accent-gold)' : '#c084fc';
                pmDetailsPanel.innerHTML = '<h3 style="color: ' + titleColor + '; margin-top: 0; margin-bottom: 16px; font-size: 1.12rem; display: flex; align-items: center; gap: 10px; font-weight: 600;">'
                    + '<i class="fa-solid fa-microscope" style="font-size: 1.2rem;"></i>'
                    + '<span class="lang-ja">' + data.titleJa + '</span>'
                    + '<span class="lang-vi">' + data.titleVi + '</span>'
                    + '</h3>'
                    + '<div style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary);">'
                    + '<div class="lang-ja">' + data.bodyJa + '</div>'
                    + '<div class="lang-vi">' + data.bodyVi + '</div>'
                    + '</div>';
                if (typeof window.syncLanguages === 'function') window.syncLanguages();
                pmDetailsPanel.style.opacity = '1';
                pmDetailsPanel.style.transform = 'translateY(0)';
            }, 180);
        }
    }

    if (pmTabsBtnGroup) {
        pmTabsBtnGroup.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => activatePmTab(btn.getAttribute('data-pm-tab')));
        });
        activatePmTab('1');
    }

    // --- Simulator (slider-based) ---
    const bpSlider = document.getElementById('sbo112-bp-slider');
    const bpDisplay = document.getElementById('bp-val-display');
    const popResult = document.getElementById('sbo112-pop-result');
    const persResult = document.getElementById('sbo112-pers-result');

    if (!bpSlider || !popResult || !persResult) return;

    let activeGeno = 'salt-sensitive';
    let activePheno = 'high-salt';

    function styleButtonActive(btn, activeColor, isActive) {
        if (isActive) {
            btn.classList.add('active');
            btn.style.borderColor = activeColor;
            btn.style.background = activeColor === 'var(--accent-teal)' ? 'rgba(45,212,191,0.12)' : 'rgba(245,158,11,0.12)';
            btn.style.color = '#fff';
        } else {
            btn.classList.remove('active');
            btn.style.borderColor = 'rgba(255,255,255,0.08)';
            btn.style.background = 'rgba(0,0,0,0.25)';
            btn.style.color = 'var(--text-muted)';
        }
    }

    const genoButtons = document.querySelectorAll('#geno-btn-group .segment-btn');
    const phenoButtons = document.querySelectorAll('#pheno-btn-group .segment-btn');

    genoButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            activeGeno = btn.getAttribute('data-value');
            genoButtons.forEach(b => styleButtonActive(b, 'var(--accent-teal)', b === btn));
            runDiagnosis();
        });
    });

    phenoButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            activePheno = btn.getAttribute('data-value');
            phenoButtons.forEach(b => styleButtonActive(b, 'var(--accent-gold)', b === btn));
            runDiagnosis();
        });
    });

    bpSlider.addEventListener('input', () => {
        const bp = bpSlider.value;
        if (bpDisplay) {
            bpDisplay.innerText = bp + ' mmHg';
            if (bp < 120) {
                bpDisplay.style.color = '#34d399';
                bpSlider.style.accentColor = '#34d399';
            } else if (bp <= 139) {
                bpDisplay.style.color = 'var(--accent-gold)';
                bpSlider.style.accentColor = 'var(--accent-gold)';
            } else {
                bpDisplay.style.color = '#f87171';
                bpSlider.style.accentColor = '#f87171';
            }
        }
        runDiagnosis();
    });

    function runDiagnosis() {
        const bp = parseInt(bpSlider.value) || 120;
        const geno = activeGeno;
        const pheno = activePheno;

        let popStatusJa = '', popStatusVi = '', popAdviceJa = '', popAdviceVi = '';
        const tradBox = document.getElementById('sbo112-traditional-box');
        if (bp < 120) {
            popStatusJa = '至適・正常血圧'; popStatusVi = 'Huyết áp bình thường';
            popAdviceJa = '年1回の特定健診を受診し、現状の生活を維持してください。';
            popAdviceVi = 'Tiếp tục duy trì lối sống hiện tại và khám sức khỏe định kỳ hàng năm.';
            if (tradBox) {
                tradBox.style.borderLeftColor = '#34d399';
                tradBox.style.borderColor = 'rgba(52, 211, 153, 0.15)';
                tradBox.style.background = 'rgba(52, 211, 153, 0.03)';
            }
        } else if (bp <= 139) {
            popStatusJa = '高値血圧（正常高値）'; popStatusVi = 'Tiền tăng huyết áp / Huyết áp hơi cao';
            popAdviceJa = '一般的なガイドラインに基づき、一律的に食事指導および運動の推奨を行います。';
            popAdviceVi = 'Đưa ra lời khuyên chung về giảm muối và tăng cường vận động cho nhóm đối tượng chung.';
            if (tradBox) {
                tradBox.style.borderLeftColor = 'var(--accent-gold)';
                tradBox.style.borderColor = 'rgba(245, 158, 11, 0.15)';
                tradBox.style.background = 'rgba(245, 158, 11, 0.03)';
            }
        } else {
            popStatusJa = '高血圧（治療対象）'; popStatusVi = 'Tăng huyết áp (Cần can thiệp điều trị)';
            popAdviceJa = 'ガイドラインに沿った標準的な降圧薬の服用および生活習慣の見直しを開始します。';
            popAdviceVi = 'Kê đơn thuốc hạ áp tiêu chuẩn và yêu cầu tái khám theo phác đồ chung.';
            if (tradBox) {
                tradBox.style.borderLeftColor = '#ef4444';
                tradBox.style.borderColor = 'rgba(239, 68, 68, 0.15)';
                tradBox.style.background = 'rgba(239, 68, 68, 0.03)';
            }
        }

        popResult.innerHTML = '<p style="margin: 0 0 6px 0;"><strong><span class="lang-ja">判定結果：</span><span class="lang-vi">Kết quả:</span></strong> ' + bp + ' mmHg (<span class="lang-ja">' + popStatusJa + '</span><span class="lang-vi">' + popStatusVi + '</span>)</p>'
            + '<p style="margin: 0;"><strong><span class="lang-ja">標準的アプローチ：</span><span class="lang-vi">Phác đồ chuẩn:</span></strong> <span class="lang-ja">' + popAdviceJa + '</span><span class="lang-vi">' + popAdviceVi + '</span></p>';

        let persTitleJa = '', persTitleVi = '', persBodyJa = '', persBodyVi = '';
        if (geno === 'salt-sensitive' && pheno === 'high-salt') {
            persTitleJa = '食塩感受性因子＋高食塩摂取'; persTitleVi = 'Gen nhạy cảm muối + Thói quen ăn mặn';
            persBodyJa = '<p style="margin: 0 0 6px 0;">• <strong>個別化介入：</strong>この患者は遺伝的に塩分排泄能が低く、塩分摂取が高血圧に直結します。</p><p style="margin: 0;">• <strong>対策：</strong>一律の薬物治療の前に、食塩摂取量を厳密に5g/日未満に制限する塩分制限療法的介入が極めて有効（降圧成功率90%以上）と判断されます。</p>';
            persBodyVi = '<p style="margin: 0 0 6px 0;">• <strong>Can thiệp cá thể hóa:</strong> Bệnh nhân có cơ địa nhạy cảm muối cao, lượng muối ăn vào tác động trực tiếp tới huyết áp.</p><p style="margin: 0;">• <strong>Giải pháp:</strong> Việc giảm muối nghiêm ngặt dưới 5g/ngày mang lại hiệu quả hạ áp rõ rệt (tỷ lệ thành công &gt;90%) mà chưa cần dùng thuốc.</p>';
        } else if (geno === 'salt-sensitive' && pheno === 'low-salt') {
            persTitleJa = '食塩感受性因子＋低食塩摂取'; persTitleVi = 'Gen nhạy cảm muối + Đã ăn nhạt';
            persBodyJa = '<p style="margin: 0 0 6px 0;">• <strong>個別化介入：</strong>遺伝的リスクはありますが、現在すでに低食塩摂取を維持しています。</p><p style="margin: 0;">• <strong>対策：</strong>血圧上昇の原因は塩分以外（ストレス、肥満、睡眠時無呼吸など）にある可能性が高いため、マルチオミクスデータの追加分析を推奨します。</p>';
            persBodyVi = '<p style="margin: 0 0 6px 0;">• <strong>Can thiệp cá thể hóa:</strong> Có gen nhạy cảm muối nhưng đã kiểm soát ăn nhạt rất tốt.</p><p style="margin: 0;">• <strong>Giải pháp:</strong> Nguyên nhân huyết áp tăng có thể do stress, béo phì hoặc ngưng thở giấc ngủ. Khuyến nghị phân tích thêm dữ liệu giấc ngủ, vận động.</p>';
        } else if (geno === 'salt-resistant' && pheno === 'high-salt') {
            persTitleJa = '食塩非感受性＋高食塩摂取'; persTitleVi = 'Gen đề kháng muối + Ăn mặn';
            persBodyJa = '<p style="margin: 0 0 6px 0;">• <strong>個別化介入：</strong>遺伝的に塩分による血圧上昇への影響が極めて少ないタイプです。</p><p style="margin: 0;">• <strong>対策：</strong>塩分制限単独の効果は薄いため、カリウム摂取の増加やアルコール制限、または個人の体質に適したカルシウム拮抗薬の選択を行います。</p>';
            persBodyVi = '<p style="margin: 0 0 6px 0;">• <strong>Can thiệp cá thể hóa:</strong> Gen đề kháng muối khiến hiệu quả của việc kiêng muối đơn thuần rất thấp.</p><p style="margin: 0;">• <strong>Giải pháp:</strong> Thay vì bắt ăn nhạt, khuyến nghị tăng Kali, hạn chế rượu bia, hoặc lựa chọn thuốc nhóm chẹn kênh Canxi tối ưu hơn.</p>';
        } else {
            persTitleJa = '食塩非感受性＋低食塩摂取'; persTitleVi = 'Gen đề kháng muối + Ăn nhạt';
            persBodyJa = '<p style="margin: 0 0 6px 0;">• <strong>個別化介入：</strong>塩分による影響はなく、すでに減塩されています。</p><p style="margin: 0;">• <strong>対策：</strong>交感神経活性の上昇や血管収縮リスクが考えられるため、遺伝子プロファイルに適したARB（受容体拮抗薬）の選択や、有酸素運動を推奨します。</p>';
            persBodyVi = '<p style="margin: 0 0 6px 0;">• <strong>Can thiệp cá thể hóa:</strong> Loại trừ hoàn toàn yếu tố muối, và đã ăn nhạt.</p><p style="margin: 0;">• <strong>Giải pháp:</strong> Tăng huyết áp có thể do hoạt hóa giao cảm. Khuyến nghị dùng thuốc nhóm ARB phù hợp với gen, kết hợp rèn luyện thể thao.</p>';
        }

        persResult.innerHTML = '<p style="margin: 0 0 8px 0;"><strong><span class="lang-ja">解析診断：</span><span class="lang-vi">Phân tích thể chất:</span></strong> <span class="lang-ja">' + persTitleJa + '</span><span class="lang-vi">' + persTitleVi + '</span></p>'
            + '<div style="margin: 0; font-size: 0.96rem; line-height: 1.55;"><div class="lang-ja">' + persBodyJa + '</div><div class="lang-vi">' + persBodyVi + '</div></div>';

        if (typeof window.syncLanguages === 'function') window.syncLanguages();
    }

    runDiagnosis();
};

window.initSbo113Simulator = function() {
    // --- SBO 1.1.3 Part II Interactive Tabs logic ---
    const iiTabsGroup = document.getElementById('sbo113-ii-tabs-group');
    const iiDetailsPanel = document.getElementById('sbo113-ii-details-panel');

    const iiData = {
        '1': {
            color: 'var(--accent-teal)',
            titleJa: '背景と目標',
            titleVi: 'Bối cảnh và Mục tiêu',
            bodyJa: '<p style="margin: 0 0 10px 0;">• <strong>2025年問題への対応：</strong>団塊の世代が75歳以上となる2025年（2025年問題）を目途に、国民の医療や介護の需要が急増することが見込まれています。</p>'
                  + '<p style="margin: 0 0 10px 0;">• <strong>地域完結型への転換：</strong>これに対応するため、必要とされる医療は従来の病院の中で完結する<strong>「病院完結型」</strong>から、地域全体で治し支える<strong>「地域完結型」</strong>へと転換することが求められています。</p>'
                  + '<p style="margin: 0;">• <strong>最大の目標：</strong>高齢者の尊厳の保持と自立生活の支援のもと、重度な要介護状態となっても<strong>「住み慣れた地域で自分らしい暮らしを人生の最後まで続けることができるようにする」</strong>ことです。</p>',
            bodyVi: '<p style="margin: 0 0 10px 0;">• <strong>Ứng phó với "vấn đề năm 2025":</strong> Nhật Bản đang đối mặt với "vấn đề năm 2025" khi toàn bộ thế hệ bùng nổ dân số (baby boomers) sẽ bước sang tuổi 75 trở lên, kéo theo sự gia tăng đột biến về nhu cầu y tế và chăm sóc điều dưỡng.</p>'
                  + '<p style="margin: 0 0 10px 0;">• <strong>Chuyển sang y tế hoàn thiện tại khu vực:</strong> Để đáp ứng điều này, hệ thống y tế bắt buộc phải chuyển đổi từ mô hình <strong>"Y tế khép kín tại bệnh viện" (病院完結型)</strong> sang mô hình <strong>"Y tế hoàn thiện tại khu vực" (地域完結型)</strong>.</p>'
                  + '<p style="margin: 0;">• <strong>Mục tiêu cốt lõi:</strong> Ngay cả khi người cao tuổi rơi vào tình trạng cần chăm sóc điều dưỡng nặng, họ vẫn có thể duy trì nhân phẩm, tự lập và <strong>tiếp tục sống cuộc đời theo cách của riêng mình tại chính khu vực mà họ đã quen thuộc cho đến cuối đời</strong>.</p>'
        },
        '2': {
            color: 'var(--accent-gold)',
            titleJa: '一体的に提供される5つの要素',
            titleVi: '5 Yếu tố cốt lõi tích hợp',
            bodyJa: '<p style="margin: 0 0 12px 0;">目標達成のため、単なる医療提供にとどまらず、以下の5つの要素が地域で一体的に提供されるシステムを構築します：</p>'
                  + '<ul style="margin: 0; padding-left: 20px; list-style-type: disc; line-height: 1.8;">'
                  + '<li><strong>住まい (Chỗ ở):</strong> 安心安全に暮らせる住環境の確保</li>'
                  + '<li><strong>医療 (Y tế):</strong> 日常の診療や急性期・慢性期に対応する医療体制</li>'
                  + '<li><strong>介護 (Chăm sóc điều dưỡng):</strong> 必要な介護サービスと専門ケア</li>'
                  + '<li><strong>予防 (Dự phòng):</strong> 要介護状態化の防止、健康維持活動</li>'
                  + '<li><strong>生活支援 (Hỗ trợ sinh hoạt):</strong> 配食や見守り等の生活支援サービス</li>'
                  + '</ul>',
            bodyVi: '<p style="margin: 0 0 12px 0;">Để hiện thực hóa mục tiêu trên, hệ thống không chỉ tập trung vào khám chữa bệnh mà phải cung cấp một cách đồng bộ và tích hợp 5 yếu tố nền tảng bao gồm:</p>'
                  + '<ul style="margin: 0; padding-left: 20px; list-style-type: disc; line-height: 1.8;">'
                  + '<li><strong>Chỗ ở (住まい):</strong> Đảm bảo môi trường sống an toàn và ổn định</li>'
                  + '<li><strong>Y tế (医療):</strong> Cung cấp dịch vụ chăm sóc sức khỏe và khám chữa bệnh ban đầu</li>'
                  + '<li><strong>Chăm sóc điều dưỡng (介護):</strong> Hỗ trợ các nhu cầu sinh hoạt hàng ngày và điều dưỡng</li>'
                  + '<li><strong>Dự phòng (予防):</strong> Ngăn ngừa tình trạng trở nặng của người cần chăm sóc</li>'
                  + '<li><strong>Hỗ trợ sinh hoạt (生活支援):</strong> Các dịch vụ giao cơm, thăm hỏi, giám sát an toàn</li>'
                  + '</ul>'
        },
        '3': {
            color: 'var(--accent-teal)',
            titleJa: '圏域の想定',
            titleVi: 'Phạm vi khu vực lý tưởng',
            bodyJa: '<p style="margin: 0 0 10px 0;">• <strong>30分圏内（日常生活圏域）：</strong>高齢者の生活範囲を考慮し、<strong>「おおむね30分以内に駆けつけられる圏域」</strong>を理想的なサイズとして想定しています。</p>'
                  + '<p style="margin: 0;">• <strong>設定基本：</strong>具体的には、市町村の行政単位よりも身近な<strong>中学校区</strong>を基本単位として設定されます。</p>',
            bodyVi: '<p style="margin: 0 0 10px 0;">• <strong>Khoảng cách 30 phút:</strong> Phạm vi không gian của "khu vực chăm sóc toàn diện" được thiết kế dựa trên tiêu chí là một khoảng cách địa lý sinh hoạt hàng ngày. Cụ thể, đó là <strong>"một khu vực mà các dịch vụ có thể tiếp cận được trong vòng khoảng 30 phút" (おおむね30分以内に駆けつけられる圏域)</strong>.</p>'
                  + '<p style="margin: 0;">• <strong>Quy mô thực tế:</strong> Trong thực tế, quy mô này thường tương đương với phạm vi của một <strong>trường trung học cơ sở (中学校区)</strong>.</p>'
        },
        '4': {
            color: 'var(--accent-gold)',
            titleJa: '運営主体と地域包括支援センター',
            titleVi: 'Chủ thể vận hành và Trung tâm hỗ trợ',
            bodyJa: '<p style="margin: 0 0 10px 0;">• <strong>市町村が主体：</strong>地域包括ケアシステムは、地域の実情や特性に応じて、保険者でもある<strong>市町村</strong>が主体的に作り上げるものとされています。</p>'
                  + '<p style="margin: 0;">• <strong>多職種チームの配置：</strong>その中核となるのが<strong>「地域包括支援センター」</strong>です。保健師・社会福祉士・主任介護支援専門員等の多職種チームが配置され、総合相談やケアマネジメントを行います。</p>',
            bodyVi: '<p style="margin: 0 0 10px 0;">• <strong>Chủ thể 市町村 (Thành phố/Thị trấn/Làng):</strong> Các khu tự trị cấp cơ sở, cụ thể là các <strong>Thành phố/Thị trấn/Làng (市町村 - Shichoson)</strong>, đóng vai trò là chủ thể xây dựng hệ thống này dựa trên đặc thù của từng địa phương.</p>'
                  + '<p style="margin: 0;">• <strong>Trung tâm Hỗ trợ Toàn diện Khu vực:</strong> Thiết lập các <strong>"Trung tâm Hỗ trợ Toàn diện Khu vực" (地域包括支援センター)</strong> với sự tham gia của nhóm đa ngành bao gồm các y tá công cộng (保健師), nhân viên công tác xã hội (社会福祉士) và chuyên viên quản lý chăm sóc cấp cao (主任介護支援専門員) để lên kế hoạch hỗ trợ duy trì sức khỏe, ổn định cuộc sống.</p>'
        },
        '5': {
            color: '#a855f7',
            titleJa: '基盤となる情報ネットワーク',
            titleVi: 'Nền tảng liên kết thông tin',
            bodyJa: '<p style="margin: 0 0 10px 0;">• <strong>シームレスな情報共有：</strong>保健・医療・福祉・介護などの多様な関連機関（病院、診療所、介護施設、薬局など）や多職種間でのシームレスな情報共有が必要です。</p>'
                  + '<p style="margin: 0;">• <strong>ICTネットワークの活用：</strong>患者が急性期病院から在宅へと移動する際にもQOLを維持できるよう、ICTを活用した地域医療連携ネットワーク（EHRやPHRなど）の構築が必要不可欠となります。</p>',
            bodyVi: '<p style="margin: 0 0 10px 0;">• <strong>Chia sẻ thông tin sâu rộng:</strong> Đòi hỏi một sự chia sẻ thông tin sâu rộng thông qua mạng lưới CNTT (như hệ thống EHR, PHR) giữa các cơ sở khám chữa bệnh, cơ sở chăm sóc điều dưỡng, nhà thuốc, cơ quan hành chính và người cung cấp dịch vụ hỗ trợ sinh hoạt.</p>'
                  + '<p style="margin: 0;">• <strong>Chuyển đổi trơn tru:</strong> Việc chuyển đổi trơn tru thông tin của bệnh nhân khi họ di chuyển từ giường bệnh cấp tính về chăm sóc tại nhà để bảo đảm giữ vững chất lượng cuộc sống (QOL) là yếu tố sống còn.</p>'
        }
    };

    function activateSbo113IiTab(tabId) {
        if (!iiTabsGroup) return;
        const buttons = iiTabsGroup.querySelectorAll('button[data-sbo113-ii-tab]');
        buttons.forEach(btn => {
            const isCurrent = btn.getAttribute('data-sbo113-ii-tab') === tabId;
            btn.classList.toggle('active', isCurrent);
            const currentNum = btn.querySelector('span:first-child');
            if (isCurrent) {
                const data = iiData[tabId];
                btn.style.borderColor = data.color;
                btn.style.background = tabId === '5' ? 'rgba(168,85,247,0.12)' : (tabId === '2'||tabId === '4' ? 'rgba(245,158,11,0.12)' : 'rgba(45,212,191,0.12)');
                btn.style.color = '#fff';
                if (currentNum) currentNum.style.opacity = '0.9';
            } else {
                btn.style.borderColor = 'rgba(255,255,255,0.08)';
                btn.style.background = 'rgba(0,0,0,0.25)';
                btn.style.color = 'var(--text-muted)';
                if (currentNum) currentNum.style.opacity = '0.5';
            }
        });

        const data = iiData[tabId];
        if (data && iiDetailsPanel) {
            iiDetailsPanel.style.opacity = '0.1';
            iiDetailsPanel.style.transform = 'translateY(5px)';
            setTimeout(() => {
                iiDetailsPanel.style.borderLeftColor = data.color;
                const titleColor = data.color === 'var(--accent-teal)' ? '#2dd4bf'
                    : data.color === 'var(--accent-gold)' ? 'var(--accent-gold)' : '#c084fc';
                iiDetailsPanel.innerHTML = '<h3 style="color: ' + titleColor + '; margin-top: 0; margin-bottom: 16px; font-size: 1.12rem; display: flex; align-items: center; gap: 10px; font-weight: 600;">'
                    + '<i class="fa-solid fa-circle-info" style="font-size: 1.2rem;"></i>'
                    + '<span class="lang-ja">' + data.titleJa + '</span>'
                    + '<span class="lang-vi">' + data.titleVi + '</span>'
                    + '</h3>'
                    + '<div style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary);">'
                    + '<div class="lang-ja">' + data.bodyJa + '</div>'
                    + '<div class="lang-vi">' + data.bodyVi + '</div>'
                    + '</div>';
                if (typeof window.syncLanguages === 'function') window.syncLanguages();
                iiDetailsPanel.style.opacity = '1';
                iiDetailsPanel.style.transform = 'translateY(0)';
            }, 180);
        }
    }

    if (iiTabsGroup) {
        iiTabsGroup.querySelectorAll('button[data-sbo113-ii-tab]').forEach(btn => {
            btn.addEventListener('click', () => activateSbo113IiTab(btn.getAttribute('data-sbo113-ii-tab')));
        });
        activateSbo113IiTab('1');
    }

    // --- SBO 1.1.3 Bed Allocator Simulator logic ---
    const acuteSlider = document.getElementById('sim-acute');
    const recoverySlider = document.getElementById('sim-recovery');
    const chronicSlider = document.getElementById('sim-chronic');

    const acuteVal = document.getElementById('acute-beds-val');
    const recoveryVal = document.getElementById('recovery-beds-val');
    const chronicVal = document.getElementById('chronic-beds-val');

    const costDisplay = document.getElementById('sim-cost-display');
    const costBar = document.getElementById('sim-cost-bar');
    const successBanner = document.getElementById('sim-success-banner');

    const gAcute = document.getElementById('goal-acute-item');
    const gRecovery = document.getElementById('goal-recovery-item');
    const gChronic = document.getElementById('goal-chronic-item');
    const gBudget = document.getElementById('goal-budget-item');

    if (!acuteSlider || !recoverySlider || !chronicSlider) return;

    function updateSim() {
        const a = parseInt(acuteSlider.value) || 0;
        const r = parseInt(recoverySlider.value) || 0;
        const c = parseInt(chronicSlider.value) || 0;

        if (acuteVal) acuteVal.innerText = a;
        if (recoveryVal) recoveryVal.innerText = r;
        if (chronicVal) chronicVal.innerText = c;

        const totalCost = (a * 800) + (r * 400) + (c * 250);
        if (costDisplay) costDisplay.innerText = '$' + totalCost.toLocaleString() + ' / day';

        const costPercent = Math.min((totalCost / 750000) * 100, 100);
        if (costBar) {
            costBar.style.width = costPercent + '%';
            if (totalCost <= 500000) {
                costBar.style.backgroundColor = 'var(--accent-teal)';
            } else {
                costBar.style.backgroundColor = '#ef4444';
            }
        }

        const acuteOK = a <= 400;
        const recoveryOK = r >= 350;
        const chronicOK = c <= 250;
        const budgetOK = totalCost <= 500000;

        const updateChecklist = (element, isOK) => {
            if (!element) return;
            const icon = element.querySelector('i');
            if (isOK) {
                if (icon) icon.className = 'fa-solid fa-circle-check';
                if (icon) icon.style.color = '#34d399';
                element.style.color = 'var(--text-secondary)';
            } else {
                if (icon) icon.className = 'fa-solid fa-circle-xmark';
                if (icon) icon.style.color = '#ef4444';
                element.style.color = 'var(--text-muted)';
            }
        };

        updateChecklist(gAcute, acuteOK);
        updateChecklist(gRecovery, recoveryOK);
        updateChecklist(gChronic, chronicOK);
        updateChecklist(gBudget, budgetOK);

        if (successBanner) {
            if (acuteOK && recoveryOK && chronicOK && budgetOK) {
                successBanner.style.display = 'flex';
            } else {
                successBanner.style.display = 'none';
            }
        }
    }

    [acuteSlider, recoverySlider, chronicSlider].forEach(slider => {
        slider.addEventListener('input', updateSim);
    });

    updateSim();
};

window.initSbo121Simulator = function() {
    const decTabsGroup = document.getElementById('sbo121-dec-tabs-group');
    const decDetailsPanel = document.getElementById('sbo121-dec-details-panel');

    if (!decTabsGroup || !decDetailsPanel) return;

    const decData = {
        '1': {
            color: 'var(--accent-teal)',
            titleJa: 'ヒポクラテスの誓い',
            titleVi: 'Lời thề Hippocrates',
            bodyJa: '<p style="margin: 0 0 10px 0;">• <strong>歴史的起源：</strong>紀元前5世紀のギリシャにおける西洋医学の始祖とされるヒポクラテスによる7項目の規範です。</p>'
                  + '<p style="margin: 0;">• <strong>現代への意義：</strong>内容の一部が現代には不適切との指摘もありますが、2000年を経た言葉であることを考えると、医療の本質は今も変わっていないことを示しています。「患者に害を与えない」「秘密を守る」など、現代の医療の本質を示す基礎となっています。</p>',
            bodyVi: '<p style="margin: 0 0 10px 0;">• <strong>Nguồn gốc lịch sử:</strong> Xuất phát từ thế kỷ thứ 5 TCN tại Hy Lạp, đây là 7 quy tắc chuẩn mực được đưa ra bởi Hippocrates - người được coi là ông tổ của y học phương Tây.</p>'
                  + '<p style="margin: 0;">• <strong>Giá trị thời đại:</strong> Mặc dù một số nội dung bị chỉ trích là không còn phù hợp với hiện tại, nhưng sau hơn 2000 năm, bản chất của nó vẫn không thay đổi. Các quy tắc như "Không gây hại cho bệnh nhân" và "Giữ bí mật thông tin" vẫn là nền tảng cơ bản nhất thể hiện bản chất của y tế hiện đại.</p>'
        },
        '2': {
            color: 'var(--accent-gold)',
            titleJa: 'ジュネーブ宣言',
            titleVi: 'Tuyên ngôn Geneva',
            bodyJa: '<p style="margin: 0 0 10px 0;">• <strong>精神の継承：</strong>ヒポクラテスの誓いの精神を引継ぎ、世界医師会によって現代向けに制定・改定された宣言です。</p>',
            bodyVi: '<p style="margin: 0 0 10px 0;">• <strong>Kế thừa tinh thần:</strong> Đây là bản tuyên ngôn được Hiệp hội Y khoa Thế giới (WMA) ban hành và sửa đổi dành cho thời đại ngày nay, với mục đích kế thừa và tiếp nối tinh thần của Lời thề Hippocrates.</p>'
        },
        '3': {
            color: '#ef4444',
            titleJa: 'ヘルシンキ宣言',
            titleVi: 'Tuyên ngôn Helsinki',
            bodyJa: '<p style="margin: 0 0 10px 0;">• <strong>背景と歴史：</strong>戦争中に起こった強制的な人体実験への反省から作られたニュルンベルグ綱領（1947年）を経て、1964年に制定されました。</p>'
                  + '<p style="margin: 0 0 10px 0;">• <strong>核心原則：</strong><strong>「ヒトを対象とする医学研究の倫理的原則」</strong>を定めたものです。被験者の<strong>自発的同意（インフォームドコンセント）</strong>と<strong>倫理審査</strong>などの原則を倫理指針として定めています。</p>'
                  + '<p style="margin: 0;">• <strong>臨床開発への影響：</strong>この宣言の原則は、医薬品の臨床試験の実施基準である<strong>GCP（Good Clinical Practice）</strong>の開発につながりました。</p>',
            bodyVi: '<p style="margin: 0 0 10px 0;">• <strong>Bối cảnh:</strong> Xuất phát từ sự phản tỉnh sâu sắc đối với các thí nghiệm cưỡng bức tàn bạo trên cơ thể người trong Chiến tranh thế giới thứ 2 (dẫn đến Bộ luật Nuremberg năm 1947), Tuyên ngôn Helsinki được ban hành vào năm 1964.</p>'
                  + '<p style="margin: 0 0 10px 0;">• <strong>Nội dung cốt lõi:</strong> Văn bản này quy định "Các nguyên tắc đạo đức đối với nghiên cứu y học trên người". Nó thiết lập nguyên tắc bắt buộc phải có <strong>sự đồng ý tự nguyện (Informed Consent)</strong> của người tham gia nghiên cứu và phải trải qua <strong>kiểm duyệt đạo đức</strong>.</p>'
                  + '<p style="margin: 0;">• <strong>Tầm ảnh hưởng:</strong> Tuyên ngôn này chính là tiền đề dẫn đến việc hình thành tiêu chuẩn <strong>GCP (Good Clinical Practice - Thực hành Lâm sàng Tốt)</strong> - tiêu chuẩn thực hiện các thử nghiệm lâm sàng dược phẩm hiện nay.</p>'
        },
        '4': {
            color: 'var(--accent-teal)',
            titleJa: 'リスボン宣言',
            titleVi: 'Tuyên ngôn Lisbon',
            bodyJa: '<p style="margin: 0 0 10px 0;">• <strong>患者の権利宣言：</strong>1981年に世界医師会で採択され、<strong>「患者の権利宣言」</strong>ともいわれるものです。</p>'
                  + '<p style="margin: 0 0 10px 0;">• <strong>権利の認定：</strong>患者の<strong>自己決定権</strong>、代理人の役割、秘密保持、尊厳性の尊重など、現代では当然となっている患者の権利を最初に認めたものです。</p>'
                  + '<p style="margin: 0;">• <strong>歴史的潮流：</strong>この流れを汲むものとしては、米国病院協会の「患者の権利章典」（1973年）もあります。</p>',
            bodyVi: '<p style="margin: 0 0 10px 0;">• <strong>Tuyên ngôn về Quyền bệnh nhân:</strong> Được Hiệp hội Y khoa Thế giới thông qua vào năm 1981, bản tuyên ngôn này còn được gọi là <strong>"Tuyên ngôn về Quyền của Bệnh nhân"</strong>.</p>'
                  + '<p style="margin: 0 0 10px 0;">• <strong>Quyền cơ bản:</strong> Đây là văn bản đầu tiên chính thức công nhận các quyền cơ bản của bệnh nhân mà ngày nay được coi là hiển nhiên, bao gồm: <strong>Quyền tự quyết</strong>, vai trò của người đại diện, bảo mật thông tin và tôn trọng nhân phẩm.</p>'
                  + '<p style="margin: 0;">• <strong>Dòng chảy tương tự:</strong> Cùng chung dòng chảy lịch sử này còn có "Tuyên ngôn Quyền Bệnh nhân" do Hiệp hội Bệnh viện Hoa Kỳ ban hành năm 1973.</p>'
        }
    };

    function activateDecTab(tabId) {
        const buttons = decTabsGroup.querySelectorAll('button[data-sbo121-dec-tab]');
        const progressBar = document.getElementById('sbo121-timeline-progress');
        
        // Update progress bar width
        if (progressBar) {
            const percentages = { '1': '0%', '2': '33.3%', '3': '66.6%', '4': '100%' };
            progressBar.style.width = percentages[tabId] || '0%';
        }

        buttons.forEach(btn => {
            const isCurrent = btn.getAttribute('data-sbo121-dec-tab') === tabId;
            const circle = btn.querySelector('.node-circle');
            const textSpan = btn.querySelector(':scope > span');
            const data = decData[btn.getAttribute('data-sbo121-dec-tab')];

            if (isCurrent) {
                if (circle) {
                    circle.style.borderColor = data.color;
                    circle.style.background = data.color;
                    circle.style.color = '#000';
                    circle.style.boxShadow = '0 0 20px ' + data.color;
                }
                if (textSpan) {
                    textSpan.style.color = '#fff';
                    textSpan.style.textShadow = '0 0 8px rgba(255,255,255,0.3)';
                }
            } else {
                if (circle) {
                    circle.style.borderColor = 'rgba(255,255,255,0.15)';
                    circle.style.background = 'rgba(15,23,42,0.8)';
                    circle.style.color = 'var(--text-muted)';
                    circle.style.boxShadow = 'none';
                }
                if (textSpan) {
                    textSpan.style.color = 'var(--text-secondary)';
                    textSpan.style.textShadow = 'none';
                }
            }
        });

        const data = decData[tabId];
        if (data && decDetailsPanel) {
            decDetailsPanel.style.opacity = '0.1';
            decDetailsPanel.style.transform = 'translateY(5px)';
            setTimeout(() => {
                decDetailsPanel.style.borderTopColor = data.color;
                const titleColor = data.color === '#ef4444' ? '#ef4444' : (data.color === 'var(--accent-teal)' ? '#2dd4bf' : 'var(--accent-gold)');
                decDetailsPanel.innerHTML = '<h3 style="color: ' + titleColor + '; margin-top: 0; margin-bottom: 16px; font-size: 1.15rem; display: flex; align-items: center; gap: 10px; font-weight: 600;">'
                    + '<i class="fa-solid fa-file-signature" style="font-size: 1.2rem;"></i>'
                    + '<span class="lang-ja">' + data.titleJa + '</span>'
                    + '<span class="lang-vi">' + data.titleVi + '</span>'
                    + '</h3>'
                    + '<div style="font-size: 0.96rem; line-height: 1.8; color: var(--text-secondary);">'
                    + '<div class="lang-ja">' + data.bodyJa + '</div>'
                    + '<div class="lang-vi">' + data.bodyVi + '</div>'
                    + '</div>';
                if (typeof window.syncLanguages === 'function') window.syncLanguages();
                decDetailsPanel.style.opacity = '1';
                decDetailsPanel.style.transform = 'translateY(0)';
            }, 180);
        }
    }

        decTabsGroup.querySelectorAll('button[data-sbo121-dec-tab]').forEach(btn => {
        btn.addEventListener('click', () => activateDecTab(btn.getAttribute('data-sbo121-dec-tab')));
    });

    activateDecTab('1');
};
