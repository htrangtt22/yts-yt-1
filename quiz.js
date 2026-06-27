document.addEventListener('DOMContentLoaded', () => {
    // ==========================================
    // --- REVIEW MODE & SPACED REPETITION QUIZ ---
    // ==========================================

    const DEFAULT_QUIZ_QUESTIONS = [
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

    let QUIZ_QUESTIONS = [...DEFAULT_QUIZ_QUESTIONS];

    const TRANSLATION_MAP = {};
    DEFAULT_QUIZ_QUESTIONS.forEach(q => {
        TRANSLATION_MAP[q.question.ja.trim()] = {
            questionVi: q.question.vi,
            options: q.options,
            explanationVi: q.explanation.vi
        };
    });

    function parseQuizMarkdown(content, fileName) {
        const type = fileName.replace(/_/g, ' ').replace('.md', '');
        const questions = [];
        const parts = content.split(/###\s*問/);
        for (let i = 1; i < parts.length; i++) {
            const part = parts[i].trim();
            if (!part) continue;
            const lines = part.split('\n').map(l => l.trim()).filter(l => l);
            if (lines.length < 5) continue;
            
            const qLine = lines[0];
            const qTextMatch = qLine.match(/^\d+[\.．\s]+(.*)/);
            const questionJaText = qTextMatch ? qTextMatch[1].trim() : qLine;
            
            const options = [];
            let answerIndex = -1;
            let explanation = '';
            
            for (let j = 1; j < lines.length; j++) {
                const line = lines[j];
                const optMatch = line.match(/^([A-D])[\.．\s]+(.*)/);
                if (optMatch) {
                    options.push({
                        ja: line,
                        vi: line
                    });
                }
                
                const ansMatch = line.match(/正解[：:]\s*([A-D])/);
                if (ansMatch) {
                    const ansLetter = ansMatch[1];
                    answerIndex = ansLetter.charCodeAt(0) - 65;
                }
                
                if (line.startsWith('>')) {
                    explanation += line.substring(1).trim() + '\n';
                }
            }
            
            const cleanQJaText = questionJaText.trim();
            let questionViText = questionJaText;
            let finalOptions = options;
            let explanationViText = explanation.trim();
            let explanationJaText = explanation.trim();
            
            if (TRANSLATION_MAP[cleanQJaText]) {
                const trans = TRANSLATION_MAP[cleanQJaText];
                questionViText = trans.questionVi;
                explanationViText = trans.explanationVi || explanationViText;
                if (trans.options && trans.options.length === options.length) {
                    finalOptions = options.map((opt, idx) => ({
                        ja: opt.ja,
                        vi: trans.options[idx].vi
                    }));
                }
            }
            
            if (options.length === 4 && answerIndex !== -1) {
                questions.push({
                    id: `${type.toLowerCase().replace(/[^a-z0-9]/g, '')}_q${questions.length + 1}`,
                    type: type,
                    question: {
                        ja: questionJaText,
                        vi: questionViText
                    },
                    options: finalOptions,
                    answer: answerIndex,
                    explanation: {
                        ja: explanationJaText || `正解は ${String.fromCharCode(65 + answerIndex)} です。`,
                        vi: explanationViText || `Đáp án đúng là ${String.fromCharCode(65 + answerIndex)}.`
                    }
                });
            }
        }
        return questions;
    }

    async function loadDynamicQuizzes() {
        try {
            const res = await fetch('/api/quizzes');
            if (!res.ok) throw new Error('Failed to fetch quizzes list');
            const files = await res.json();
            
            let allLoadedQuestions = [];
            for (const file of files) {
                try {
                    const fileRes = await fetch(`/quiz/${file}`);
                    if (!fileRes.ok) continue;
                    const content = await fileRes.text();
                    const parsed = parseQuizMarkdown(content, file);
                    allLoadedQuestions = allLoadedQuestions.concat(parsed);
                } catch (err) {
                    console.error(`Error loading quiz file ${file}:`, err);
                }
            }
            
            if (allLoadedQuestions.length > 0) {
                QUIZ_QUESTIONS = shuffleArray(allLoadedQuestions);
                console.log(`Loaded ${QUIZ_QUESTIONS.length} dynamic questions successfully.`);
                updateDashboardUI();
            }
        } catch (err) {
            console.error('Failed to load dynamic quizzes, using defaults:', err);
        }
    }

    loadDynamicQuizzes();

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
        sboWrappers.forEach(w => {
            w.classList.remove('active');
            w.style.display = 'none';
        });

        if (reviewModeBtn) reviewModeBtn.classList.add('active');
        if (reviewSection) {
            reviewSection.classList.add('active');
            reviewSection.style.display = 'block';
        }
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
        if (reviewSection) {
            reviewSection.classList.remove('active');
            reviewSection.style.display = 'none';
        }
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
