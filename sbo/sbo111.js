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

                    /* Interactive 1948 Venn Diagram and Switch */
                    .who1948-container {
                        display: flex;
                        flex-direction: row;
                        gap: 40px;
                        margin-top: 15px;
                        align-items: center;
                        width: 100%;
                    }
                    @media (max-width: 992px) {
                        .who1948-container {
                            flex-direction: column;
                            gap: 20px;
                        }
                    }

                    .who1948-venn-side {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }

                    .who1948-info-side {
                        flex: 1.3;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        width: 100%;
                    }

                    .concept-title-sub {
                        font-size: 0.88rem;
                        font-weight: 700;
                        color: var(--text-muted);
                        margin-bottom: 20px;
                        text-transform: uppercase;
                        letter-spacing: 0.05em;
                    }

                    .switch-box-wrapper {
                        position: relative;
                        padding: 10px;
                        margin: 15px 0;
                    }

                    .mechanical-switch-base {
                        width: 120px;
                        height: 160px;
                        background: #334155;
                        border: 2px solid #475569;
                        border-radius: 8px;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        padding: 12px;
                        box-sizing: border-box;
                        position: relative;
                        box-shadow: 0 4px 10px rgba(0,0,0,0.25);
                    }

                    .mechanical-switch-base::after {
                        content: '• •\n\n\n• •';
                        white-space: pre;
                        font-size: 8px;
                        color: rgba(255,255,255,0.2);
                        position: absolute;
                        top: 6px;
                        left: 8px;
                        right: 8px;
                        text-align: center;
                        pointer-events: none;
                        line-height: 29px;
                    }

                    .switch-label {
                        font-size: 0.72rem;
                        color: #cbd5e1;
                        font-weight: 700;
                        text-align: center;
                        background: rgba(0,0,0,0.2);
                        padding: 4px 8px;
                        border-radius: 4px;
                        width: 90%;
                        margin-bottom: 12px;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                    }

                    .lever-flat-representation {
                        width: 50px;
                        height: 50px;
                        position: relative;
                        margin-bottom: 8px;
                    }

                    .lever-flat-representation::before {
                        content: '';
                        position: absolute;
                        top: 15px; left: 15px;
                        width: 20px;
                        height: 20px;
                        background: #1e293b;
                        border-radius: 50%;
                        border: 1px solid #475569;
                    }

                    .lever-flat-representation::after {
                        content: '';
                        position: absolute;
                        top: 20px; left: -10px;
                        width: 45px;
                        height: 10px;
                        background: #64748b;
                        border-radius: 3px;
                        transform: rotate(-30deg);
                        box-shadow: 2px 2px 4px rgba(0,0,0,0.3);
                    }

                    .switch-status {
                        font-size: 0.58rem;
                        color: #ef4444;
                        font-weight: 800;
                        letter-spacing: 0.1em;
                        margin-top: 5px;
                    }

                    .diagonal-crossline {
                        position: absolute;
                        top: -10px;
                        left: -10px;
                        width: calc(100% + 20px);
                        height: calc(100% + 20px);
                        background: linear-gradient(135deg, transparent 46%, #ef4444 48%, #ef4444 52%, transparent 54%);
                        pointer-events: none;
                        z-index: 10;
                        filter: drop-shadow(0 2px 4px rgba(239, 68, 68, 0.5));
                    }

                    .old-concept-desc {
                        font-size: 0.82rem;
                        color: var(--text-muted);
                        text-align: center;
                        line-height: 1.5;
                        margin-top: 12px;
                        max-width: 240px;
                    }

                    .venn-diagram-wrapper {
                        width: 320px;
                        height: 240px;
                        position: relative;
                        margin-bottom: 20px;
                    }

                    .venn-circle {
                        position: absolute;
                        width: 140px;
                        height: 140px;
                        border-radius: 50%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        font-weight: 700;
                        font-size: 0.95rem;
                        color: #fff;
                        cursor: pointer;
                        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                        box-sizing: border-box;
                    }

                    .venn-circle span {
                        pointer-events: none;
                        text-shadow: 0 1px 4px rgba(0,0,0,0.8);
                    }

                    .venn-circle.physical {
                        left: 20px;
                        top: 10px;
                        background: radial-gradient(circle, rgba(59, 130, 246, 0.25) 0%, rgba(59, 130, 246, 0.08) 60%, rgba(59, 130, 246, 0.02) 100%);
                        border: 2px solid rgba(59, 130, 246, 0.4);
                        box-shadow: 0 0 15px rgba(59, 130, 246, 0.15);
                    }

                    .venn-circle.social {
                        right: 20px;
                        top: 10px;
                        background: radial-gradient(circle, rgba(245, 158, 11, 0.25) 0%, rgba(245, 158, 11, 0.08) 60%, rgba(245, 158, 11, 0.02) 100%);
                        border: 2px solid rgba(245, 158, 11, 0.4);
                        box-shadow: 0 0 15px rgba(245, 158, 11, 0.15);
                    }

                    .venn-circle.mental {
                        left: 90px;
                        bottom: 10px;
                        background: radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, rgba(16, 185, 129, 0.08) 60%, rgba(16, 185, 129, 0.02) 100%);
                        border: 2px solid rgba(16, 185, 129, 0.4);
                        box-shadow: 0 0 15px rgba(16, 185, 129, 0.15);
                    }

                    .venn-circle:hover {
                        transform: scale(1.04);
                    }

                    .venn-circle.physical.active {
                        background: radial-gradient(circle, rgba(59, 130, 246, 0.45) 0%, rgba(59, 130, 246, 0.15) 60%, rgba(59, 130, 246, 0.03) 100%) !important;
                        border-color: #3b82f6 !important;
                        box-shadow: 0 0 25px rgba(59, 130, 246, 0.5) !important;
                    }

                    .venn-circle.social.active {
                        background: radial-gradient(circle, rgba(245, 158, 11, 0.45) 0%, rgba(245, 158, 11, 0.15) 60%, rgba(245, 158, 11, 0.03) 100%) !important;
                        border-color: #f59e0b !important;
                        box-shadow: 0 0 25px rgba(245, 158, 11, 0.5) !important;
                    }

                    .venn-circle.mental.active {
                        background: radial-gradient(circle, rgba(16, 185, 129, 0.45) 0%, rgba(16, 185, 129, 0.15) 60%, rgba(16, 185, 129, 0.03) 100%) !important;
                        border-color: #10b981 !important;
                        box-shadow: 0 0 25px rgba(16, 185, 129, 0.5) !important;
                    }

                    .venn-center-glow {
                        position: absolute;
                        left: 135px;
                        top: 60px;
                        width: 50px;
                        height: 50px;
                        background: radial-gradient(circle, rgba(255, 255, 255, 0.8) 0%, rgba(255, 255, 255, 0.2) 45%, transparent 70%);
                        border-radius: 50%;
                        pointer-events: none;
                        mix-blend-mode: screen;
                        animation: pulseGlow 3s infinite ease-in-out;
                    }

                    @keyframes pulseGlow {
                        0%, 100% { transform: scale(1); opacity: 0.5; }
                        50% { transform: scale(1.15); opacity: 0.85; }
                    }

                    .bubble-info-box {
                        width: 100%;
                        background: rgba(15, 23, 42, 0.3);
                        border: 1px solid rgba(255, 255, 255, 0.06);
                        border-radius: 12px;
                        padding: 18px;
                        position: relative;
                        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                        box-sizing: border-box;
                    }

                    .bubble-quote {
                        font-size: 0.95rem;
                        line-height: 1.6;
                        color: #fff;
                        font-weight: 500;
                        margin-bottom: 8px;
                        border-left: 3px solid var(--accent-teal);
                        padding-left: 12px;
                    }

                    .bubble-desc-footer {
                        font-size: 0.8rem;
                        color: var(--text-muted);
                        line-height: 1.5;
                        margin-top: 8px;
                    }

                    .venn-click-detail {
                        margin-top: 12px;
                        padding: 8px;
                        border-radius: 6px;
                        background: rgba(255,255,255,0.02);
                        border: 1px dashed rgba(255,255,255,0.08);
                        font-size: 0.82rem;
                        color: var(--accent-teal);
                        display: flex;
                        align-items: center;
                        gap: 8px;
                        justify-content: center;
                        transition: all 0.3s ease;
                    }
                
                    /* 1998 Deepening of Concept Diagram */
                    .who1998-container {
                        display: flex;
                        flex-direction: row;
                        gap: 40px;
                        margin-top: 15px;
                        align-items: center;
                        width: 100%;
                    }
                    @media (max-width: 992px) {
                        .who1998-container {
                            flex-direction: column;
                            gap: 20px;
                        }
                    }

                    .who1998-diagram-side {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                    }

                    .who1998-info-side {
                        flex: 1.3;
                        display: flex;
                        flex-direction: column;
                        gap: 20px;
                        width: 100%;
                    }

                    .diagram-1998-wrapper {
                        position: relative;
                        width: 320px;
                        height: 280px;
                        margin: 0 auto;
                    }

                    /* Glowing wave for Dynamic */
                    .dynamic-wave-path {
                        stroke: #10b981;
                        stroke-width: 4;
                        fill: none;
                        filter: drop-shadow(0 0 8px rgba(16, 185, 129, 0.8));
                        stroke-linecap: round;
                    }

                    /* Spiritual glowing sphere */
                    .spiritual-sphere {
                        position: absolute;
                        left: 135px;
                        top: 155px;
                        width: 50px;
                        height: 50px;
                        background: radial-gradient(circle at 35% 35%, #ffd700, #ff8c00, #d2691e);
                        border-radius: 50%;
                        box-shadow: 0 0 30px rgba(255, 140, 0, 0.8), inset 0 2px 4px rgba(255,255,255,0.4);
                        animation: pulseSpiritual 3s infinite ease-in-out;
                    }

                    @keyframes pulseSpiritual {
                        0%, 100% { transform: scale(1); box-shadow: 0 0 25px rgba(255, 140, 0, 0.7); }
                        50% { transform: scale(1.15); box-shadow: 0 0 45px rgba(255, 140, 0, 0.95); }
                    }

                    .card-1998 {
                        background: rgba(15, 23, 42, 0.35);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                        border-radius: 12px;
                        padding: 16px 20px;
                        box-shadow: 0 4px 20px rgba(0,0,0,0.15);
                        box-sizing: border-box;
                        width: 100%;
                        position: relative;
                        transition: all 0.3s ease;
                    }

                    .card-1998:hover {
                        border-color: var(--accent-gold);
                        background: rgba(15, 23, 42, 0.5);
                    }

                    .arrow-connector {
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        color: var(--accent-gold);
                        font-size: 1.2rem;
                        margin: -10px 0;
                        opacity: 0.8;
                    }

                    /* 1986 Ottawa Blueprint styles */
                    .ottawa-container {
                        display: flex;
                        flex-direction: row;
                        gap: 30px;
                        margin-top: 15px;
                        align-items: stretch;
                        width: 100%;
                    }
                    @media (max-width: 992px) {
                        .ottawa-container {
                            flex-direction: column;
                            gap: 20px;
                        }
                    }

                    .ottawa-menu-side {
                        flex: 1;
                        display: flex;
                        flex-direction: column;
                        gap: 15px;
                    }

                    .ottawa-blueprint-side {
                        flex: 1.2;
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        background: radial-gradient(circle at center, rgba(15, 23, 42, 0.6) 0%, rgba(10, 10, 20, 0.9) 100%);
                        border: 1px solid rgba(59, 130, 246, 0.2);
                        border-radius: 12px;
                        position: relative;
                        padding: 20px;
                        box-sizing: border-box;
                        min-height: 380px;
                        overflow: hidden;
                    }

                    .ottawa-menu-item {
                        background: rgba(15, 23, 42, 0.3);
                        border: 1px solid rgba(255,255,255,0.06);
                        border-radius: 8px;
                        padding: 14px 18px;
                        cursor: pointer;
                        transition: all 0.3s ease;
                        text-align: left;
                        position: relative;
                    }

                    .ottawa-menu-item:hover {
                        background: rgba(15, 23, 42, 0.5);
                        border-color: rgba(59, 130, 246, 0.4);
                        transform: translateX(4px);
                    }

                    .ottawa-menu-item.active {
                        background: rgba(59, 130, 246, 0.1);
                        border-color: #3b82f6;
                        box-shadow: 0 0 15px rgba(59, 130, 246, 0.2);
                    }

                    .ottawa-menu-item-title {
                        font-size: 0.95rem;
                        font-weight: bold;
                        color: #fff;
                        display: flex;
                        align-items: center;
                        gap: 8px;
                    }

                    .ottawa-menu-item-desc {
                        font-size: 0.78rem;
                        color: var(--text-muted);
                        margin-top: 4px;
                        line-height: 1.4;
                    }

                    /* Greek Temple SVG Styling */
                    .temple-part {
                        transition: all 0.4s ease;
                        stroke: #3b82f6;
                        stroke-width: 1.5;
                        fill: none;
                        opacity: 0.4;
                    }

                    .temple-part.active {
                        stroke: #60a5fa;
                        stroke-width: 2.5;
                        fill: rgba(59, 130, 246, 0.15);
                        opacity: 1;
                        filter: drop-shadow(0 0 12px rgba(59, 130, 246, 0.8));
                    }

                    .gear-spin {
                        transform-origin: center;
                        animation: spinGears 12s infinite linear;
                    }

                    .gear-spin-reverse {
                        transform-origin: center;
                        animation: spinGearsReverse 12s infinite linear;
                    }

                    @keyframes spinGears {
                        from { transform: rotate(0deg); }
                        to { transform: rotate(360deg); }
                    }

                    @keyframes spinGearsReverse {
                        from { transform: rotate(360deg); }
                        to { transform: rotate(0deg); }
                    }

                    .ottawa-bottom-details {
                        background: rgba(15, 23, 42, 0.45);
                        border: 1px solid rgba(59, 130, 246, 0.25);
                        border-radius: 12px;
                        padding: 20px;
                        box-shadow: 0 4px 20px rgba(0,0,0,0.3);
                        z-index: 10;
                        transition: all 0.3s ease;
                        box-sizing: border-box;
                        width: 100%;
                    }

                    /* 8 Prerequisites interactive blocks */
                    .prereq-block {
                        background: linear-gradient(180deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%);
                        border: 1px solid rgba(255,255,255,0.08);
                        border-top: 3px solid rgba(255,255,255,0.25);
                        border-radius: 6px;
                        padding: 12px 6px;
                        text-align: center;
                        cursor: pointer;
                        transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 8px;
                        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
                        box-sizing: border-box;
                    }

                    .prereq-block:hover {
                        transform: translateY(-5px);
                        border-color: #60a5fa;
                        border-top-color: #60a5fa;
                        background: rgba(59, 130, 246, 0.08);
                        box-shadow: 0 8px 16px rgba(59, 130, 246, 0.15);
                    }

                    .prereq-block.active {
                        border-color: #60a5fa;
                        border-top-color: #60a5fa;
                        background: rgba(59, 130, 246, 0.15);
                        box-shadow: 0 0 15px rgba(59, 130, 246, 0.3);
                        transform: scale(1.03);
                    }

                    .prereq-block-icon {
                        font-size: 1.4rem;
                        color: rgba(255,255,255,0.7);
                        transition: all 0.3s ease;
                    }

                    .prereq-block:hover .prereq-block-icon,
                    .prereq-block.active .prereq-block-icon {
                        color: #60a5fa;
                        transform: scale(1.1);
                    }

                    .prereq-block-label {
                        font-size: 0.72rem;
                        font-weight: bold;
                        color: var(--text-secondary);
                    }

                    .prereq-block.active .prereq-block-label {
                        color: #fff;
                    }

                    @media (max-width: 576px) {
                        .prereq-blocks-container {
                            grid-template-columns: repeat(2, 1fr) !important;
                        }
                    }

                    /* 3 Strategies interactive pillars */
                    .strategy-pillars-container {
                        display: flex;
                        gap: 15px;
                        width: 100%;
                        margin-bottom: 10px;
                        box-sizing: border-box;
                    }
                    @media (max-width: 768px) {
                        .strategy-pillars-container {
                            flex-direction: column;
                        }
                    }

                    .strategy-pillar-card {
                        flex: 1;
                        background: linear-gradient(180deg, rgba(59, 130, 246, 0.05) 0%, rgba(15, 23, 42, 0.4) 100%);
                        border: 1px solid rgba(59, 130, 246, 0.15);
                        border-radius: 8px;
                        padding: 16px 12px;
                        text-align: center;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        gap: 10px;
                        transition: all 0.3s ease;
                        box-sizing: border-box;
                    }

                    .strategy-pillar-card:hover {
                        border-color: #60a5fa;
                        background: linear-gradient(180deg, rgba(59, 130, 246, 0.1) 0%, rgba(15, 23, 42, 0.6) 100%);
                        box-shadow: 0 8px 24px rgba(59, 130, 246, 0.2);
                        transform: translateY(-5px);
                    }

                    .strategy-arrow-icon {
                        font-size: 2.2rem;
                        color: #60a5fa;
                        filter: drop-shadow(0 0 8px rgba(96, 165, 250, 0.7));
                        margin-bottom: 5px;
                        animation: arrowUpSlow 2s infinite ease-in-out;
                    }

                    @keyframes arrowUpSlow {
                        0%, 100% { transform: translateY(0); }
                        50% { transform: translateY(-4px); }
                    }

                    .strategy-pillar-title {
                        font-size: 0.92rem;
                        font-weight: bold;
                        color: #fff;
                        border-bottom: 1px solid rgba(255,255,255,0.1);
                        padding-bottom: 6px;
                        width: 100%;
                    }

                    .strategy-pillar-desc {
                        font-size: 0.76rem;
                        line-height: 1.45;
                        color: var(--text-secondary);
                    }

                    /* 5 Action Areas interactive cards */
                    .action-gears-container {
                        display: grid;
                        grid-template-columns: 1fr;
                        gap: 10px;
                        width: 100%;
                        box-sizing: border-box;
                    }

                    .action-gear-card {
                        background: rgba(15, 23, 42, 0.4);
                        border: 1px solid rgba(255, 255, 255, 0.06);
                        border-left: 3px solid var(--accent-teal);
                        border-radius: 6px;
                        padding: 10px 14px;
                        display: flex;
                        align-items: center;
                        gap: 15px;
                        transition: all 0.3s ease;
                        box-sizing: border-box;
                    }

                    .action-gear-card:hover {
                        border-color: var(--accent-teal);
                        background: rgba(45, 212, 191, 0.05);
                        transform: translateX(4px);
                    }

                    .action-gear-icon-wrapper {
                        font-size: 1.4rem;
                        color: var(--accent-teal);
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 32px;
                        height: 32px;
                    }

                    .action-gear-card:hover .action-gear-icon-wrapper i {
                        animation: spinGears 3s infinite linear;
                    }

                    .action-gear-content {
                        flex: 1;
                    }

                    .action-gear-title {
                        font-size: 0.85rem;
                        font-weight: bold;
                        color: #fff;
                        margin-bottom: 2px;
                    }

                    .action-gear-desc {
                        font-size: 0.76rem;
                        color: var(--text-secondary);
                        line-height: 1.35;
                    }

                    /* ==================================
                       LIFE EXPECTANCY COMPARISON CHART
                    ================================== */
                    .life-expectancy-chart {
                        margin-top: 25px;
                        padding: 24px;
                        background: rgba(15, 23, 42, 0.25);
                        border: 1px solid rgba(255, 255, 255, 0.05);
                        border-radius: 16px;
                    }
                    .life-bar-container {
                        position: relative;
                        padding-top: 30px; /* Space for average life line label */
                        margin-bottom: 12px;
                    }
                    .average-life-line {
                        position: absolute;
                        right: 0;
                        top: 20px;
                        bottom: 0;
                        width: 2px;
                        background: #ef4444;
                        z-index: 10;
                        box-shadow: 0 0 8px rgba(239, 68, 68, 0.5);
                    }
                    .average-life-label {
                        position: absolute;
                        top: -24px;
                        left: 50%;
                        transform: translateX(-50%);
                        white-space: nowrap;
                        font-size: 0.74rem;
                        color: #ef4444;
                        font-weight: 700;
                        background: rgba(15, 23, 42, 0.9);
                        padding: 3px 8px;
                        border-radius: 4px;
                        border: 1px solid rgba(239, 68, 68, 0.3);
                        z-index: 12;
                    }
                    .main-life-bar {
                        display: flex;
                        height: 38px;
                        border-radius: 8px;
                        overflow: hidden;
                        background: rgba(255, 255, 255, 0.05);
                        border: 1px solid rgba(255, 255, 255, 0.08);
                        position: relative;
                        width: 100%;
                    }
                    .healthy-part {
                        background: linear-gradient(90deg, #10b981, #059669);
                        width: 88%; /* Health life ratio typically ~88% in JP */
                        height: 100%;
                        display: flex;
                        align-items: center;
                        justify-content: center; /* Centered horizontally */
                        font-size: 0.8rem;
                        font-weight: 700;
                        color: #fff;
                        white-space: nowrap;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        box-sizing: border-box;
                    }
                    .gap-part {
                        background: repeating-linear-gradient(
                            45deg,
                            rgba(245, 158, 11, 0.15),
                            rgba(245, 158, 11, 0.15) 10px,
                            rgba(217, 119, 6, 0.3) 10px,
                            rgba(217, 119, 6, 0.3) 20px
                        );
                        width: 12%;
                        height: 100%;
                        position: relative;
                        box-sizing: border-box;
                    }
                    .extend-arrow {
                        position: absolute;
                        right: 8px;
                        top: 50%;
                        transform: translateY(-50%);
                        color: #f59e0b;
                        font-size: 0.95rem;
                        animation: pulseArrow 1.5s infinite alternate ease-in-out;
                    }
                    @keyframes pulseArrow {
                        0% { transform: translateY(-50%) translateX(0); }
                        100% { transform: translateY(-50%) translateX(4px); }
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
                            <span class="lang-ja">健康という概念を「定義」から「構築」へ</span>
                            <span class="lang-vi">Khái niệm Sức khỏe: Từ "Định nghĩa" sang "Kiến tạo"</span>
                        </h2>
                        <p class="section-desc">
                            <span class="lang-ja">WHOによる定義、1998年の深化提案、およびヘルスプロモーションのためのオタワ憲章の基本方針。</span>
                            <span class="lang-vi">Định nghĩa của WHO, đề xuất mở rộng khái niệm năm 1998 và các nguyên tắc nâng cao sức khỏe trong Hiến chương Ottawa.</span>
                        </p>

                        <!-- Futuristic Interactive Timeline (Matching Screenshot) -->
                        <div style="background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 40px 24px; position: relative; margin: 35px 0; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2); overflow: hidden;">
                            <!-- Circuit Grid Background Overlay -->
                            <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(45, 212, 191, 0.08) 1px, transparent 0); background-size: 24px 24px; opacity: 0.5; pointer-events: none;"></div>
                            
                            <!-- Connecting Line -->
                            <div style="position: absolute; top: 110px; left: 15%; right: 15%; height: 6px; background: rgba(255, 255, 255, 0.08); border-radius: 3px; z-index: 1;">
                                <div id="sbo111-concept-progress" style="width: 0%; height: 100%; background: linear-gradient(90deg, var(--accent-teal) 0%, var(--accent-gold) 50%, #3b82f6 100%); transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1); border-radius: 3px; box-shadow: 0 0 10px var(--accent-teal);"></div>
                            </div>

                            <!-- Timeline Nodes -->
                            <div style="display: flex; justify-content: space-between; position: relative; z-index: 2;" id="sbo111-concept-tabs">
                                
                                <!-- Node 1: 1948 WHO Basic Definition -->
                                <button type="button" class="sbo111-concept-node active" data-concept-tab="who1948" style="background: none; border: none; outline: none; cursor: pointer; display: flex; flex-direction: column; align-items: center; width: 30%; transition: all 0.3s ease;">
                                    <span style="font-size: 1.8rem; font-weight: 800; color: #fff; margin-bottom: 12px; font-family: var(--font-heading); transition: all 0.3s ease;" class="node-year">1948</span>
                                    <div class="node-icon-wrapper" style="width: 70px; height: 70px; border-radius: 12px; background: rgba(15,23,42,0.9); border: 2px solid var(--accent-teal); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; color: var(--accent-teal); transition: all 0.3s ease; box-shadow: 0 0 20px rgba(45, 212, 191, 0.25);">
                                        <i class="fa-solid fa-cube"></i>
                                    </div>
                                    <span style="font-size: 1rem; font-weight: 700; color: #fff; margin-top: 12px;" class="node-title-ja">定義 (Definition)</span>
                                    <span style="font-size: 0.85rem; color: var(--text-muted); text-align: center; margin-top: 4px; line-height: 1.4; max-width: 220px;" class="node-desc-ja">WHOによる基本定義。身体的・精神的・社会的完全性。</span>
                                </button>

                                <!-- Node 2: 1998 Concept Deepening -->
                                <button type="button" class="sbo111-concept-node" data-concept-tab="who1998" style="background: none; border: none; outline: none; cursor: pointer; display: flex; flex-direction: column; align-items: center; width: 30%; transition: all 0.3s ease;">
                                    <span style="font-size: 1.8rem; font-weight: 800; color: var(--text-muted); margin-bottom: 12px; font-family: var(--font-heading); transition: all 0.3s ease;" class="node-year">1998</span>
                                    <div class="node-icon-wrapper" style="width: 70px; height: 70px; border-radius: 50%; background: rgba(15,23,42,0.9); border: 2px solid rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; color: var(--text-muted); transition: all 0.3s ease;">
                                        <i class="fa-solid fa-circle-nodes"></i>
                                    </div>
                                    <span style="font-size: 1rem; font-weight: 700; color: var(--text-muted); margin-top: 12px;" class="node-title-ja">深化 (Deepening)</span>
                                    <span style="font-size: 0.85rem; color: var(--text-muted); text-align: center; margin-top: 4px; line-height: 1.4; max-width: 220px;" class="node-desc-ja">「動的 (Dynamic)」かつ「精神的/尊厳 (Spiritual)」の提案。</span>
                                </button>

                                <!-- Node 3: 1986 Ottawa Charter -->
                                <button type="button" class="sbo111-concept-node" data-concept-tab="ottawa" style="background: none; border: none; outline: none; cursor: pointer; display: flex; flex-direction: column; align-items: center; width: 30%; transition: all 0.3s ease;">
                                    <span style="font-size: 1.8rem; font-weight: 800; color: var(--text-muted); margin-bottom: 12px; font-family: var(--font-heading); transition: all 0.3s ease;" class="node-year">1986</span>
                                    <div class="node-icon-wrapper" style="width: 70px; height: 70px; border-radius: 12px; background: rgba(15,23,42,0.9); border: 2px solid rgba(255,255,255,0.12); display: flex; align-items: center; justify-content: center; font-size: 1.8rem; color: var(--text-muted); transition: all 0.3s ease;">
                                        <i class="fa-solid fa-landmark"></i>
                                    </div>
                                    <span style="font-size: 1rem; font-weight: 700; color: var(--text-muted); margin-top: 12px;" class="node-title-ja">実践 (Action)</span>
                                    <span style="font-size: 0.85rem; color: var(--text-muted); text-align: center; margin-top: 4px; line-height: 1.4; max-width: 220px;" class="node-desc-ja">オタワ憲章。健康的な社会を物質的・政策的に構築する青写真。</span>
                                </button>

                            </div>
                        </div>

                        <!-- Content Panes (Loaded Dynamically) -->
                        <div id="sbo111-concept-detail-panel" class="card glass-card" style="padding: 35px; border-top: 5px solid var(--accent-teal); background: rgba(255, 255, 255, 0.02); min-height: 250px; transition: all 0.3s ease; box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);">
                            <!-- Dynamic Content Injected here -->
                        </div>
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
                            <!-- Left Column: Buttons & Details Card -->
                            <div style="display: flex; flex-direction: column; gap: 15px; width: 100%;">
                                <div style="display: flex; flex-direction: column; gap: 10px;">
                                    <div class="chart-segment segment-pension active" data-prev-lvl="1" style="border-left: 6px solid #10b981; margin: 0; cursor: pointer; padding: 15px; border-radius: 8px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-card); border-left-width: 6px; display: flex; align-items: center; min-height: 50px;">
                                        <span class="segment-label" style="font-weight: 600; font-size: 0.96rem; color: #fff;">
                                            <span class="lang-ja">一次予防 (Primary Prevention)</span>
                                            <span class="lang-vi">Dự phòng cấp 1</span>
                                        </span>
                                    </div>
                                    <div class="chart-segment segment-medical" data-prev-lvl="2" style="border-left: 6px solid #f59e0b; margin: 0; cursor: pointer; padding: 15px; border-radius: 8px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-card); border-left-width: 6px; display: flex; align-items: center; min-height: 50px;">
                                        <span class="segment-label" style="font-weight: 600; font-size: 0.96rem; color: #fff;">
                                            <span class="lang-ja">二次予防 (Secondary Prevention)</span>
                                            <span class="lang-vi">Dự phòng cấp 2</span>
                                        </span>
                                    </div>
                                    <div class="chart-segment segment-welfare" data-prev-lvl="3" style="border-left: 6px solid #ef4444; margin: 0; cursor: pointer; padding: 15px; border-radius: 8px; background: rgba(255,255,255,0.02); border: 1px solid var(--border-card); border-left-width: 6px; display: flex; align-items: center; min-height: 50px;">
                                        <span class="segment-label" style="font-weight: 600; font-size: 0.96rem; color: #fff;">
                                            <span class="lang-ja">三次予防 (Tertiary Prevention)</span>
                                            <span class="lang-vi">Dự phòng cấp 3</span>
                                        </span>
                                    </div>
                                </div>
                                
                                <div class="card glass-card info-card" id="prev-lvl-info" style="margin: 0; background: rgba(255,255,255,0.02); padding: 18px; min-height: 150px; width: 100%; display: flex; flex-direction: column; justify-content: flex-start; box-sizing: border-box;">
                                    <h4 id="prev-lvl-title" style="margin-top: 0; color: #10b981; font-size: 0.96rem; line-height: 1.4; display: flex; align-items: center; gap: 8px; font-weight: 700;">
                                        一次予防：健康増進・疾病予防・事故予防
                                    </h4>
                                    <p id="prev-lvl-body" style="font-size: 0.9rem; line-height: 1.7; color: var(--text-secondary); margin-top: 8px; margin-bottom: 0; white-space: pre-line;">
                                        健康な人を対象に、生活習慣や環境の改善、予防接種等を通じて、病気やケガを未然に防ぎます。
                                    </p>
                                </div>
                            </div>

                            <!-- Right Column: Unified 3-Tier Shield Wall Diagram (Tube + Radar + Recovery) -->
                            <div class="card glass-card" style="margin: 0; padding: 15px; display: flex; flex-direction: column; align-items: center; justify-content: center; background: radial-gradient(circle at center, rgba(15, 23, 42, 0.4) 0%, rgba(10, 10, 20, 0.7) 100%); border: 1px solid rgba(255, 255, 255, 0.08); overflow: hidden; width: 100%; box-sizing: border-box;">
                                <div style="font-size: 0.82rem; font-weight: bold; color: var(--text-muted); margin-bottom: 10px; width: 100%; text-align: center;">
                                    <span class="lang-ja">健康を守る3層の防護壁 (The 3-Tier Framework)</span>
                                    <span class="lang-vi">Khung 3 lớp phòng vệ bảo vệ sức khỏe</span>
                                </div>
                                <div style="position: relative; width: 100%; max-width: 500px; height: 250px; margin: 0 auto;">
                                                                                                                                                <svg viewBox="0 0 500 240" width="100%" height="100%" style="overflow: visible;">
                                        <defs>
                                            <!-- Funnel Gradients -->
                                            <linearGradient id="funnel-grad-1" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stop-color="#10b981" stop-opacity="0.75" />
                                                <stop offset="100%" stop-color="#059669" stop-opacity="0.65" />
                                            </linearGradient>
                                            <linearGradient id="funnel-grad-2" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.65" />
                                                <stop offset="100%" stop-color="#1d4ed8" stop-opacity="0.65" />
                                            </linearGradient>
                                            <linearGradient id="funnel-grad-3" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stop-color="#475569" stop-opacity="0.65" />
                                                <stop offset="100%" stop-color="#334155" stop-opacity="0.65" />
                                            </linearGradient>
                                            <!-- Loop Gradient -->
                                            <linearGradient id="loop-grad" x1="100%" y1="0%" x2="0%" y2="0%">
                                                <stop offset="0%" stop-color="#60a5fa" stop-opacity="0.8" />
                                                <stop offset="100%" stop-color="#10b981" stop-opacity="0.8" />
                                            </linearGradient>
                                            <!-- Radar Scan Gradient -->
                                            <linearGradient id="radar-scan" x1="0%" y1="0%" x2="100%" y2="0%">
                                                <stop offset="0%" stop-color="#3b82f6" stop-opacity="0.45" />
                                                <stop offset="100%" stop-color="#3b82f6" stop-opacity="0" />
                                            </linearGradient>
                                            <!-- Glow filters -->
                                            <filter id="glow-green" x="-30%" y="-30%" width="160%" height="160%">
                                                <feGaussianBlur stdDeviation="6" result="blur" />
                                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                            </filter>
                                            <filter id="glow-gold" x="-30%" y="-30%" width="160%" height="160%">
                                                <feGaussianBlur stdDeviation="6" result="blur" />
                                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                            </filter>
                                            <filter id="glow-red" x="-30%" y="-30%" width="160%" height="160%">
                                                <feGaussianBlur stdDeviation="6" result="blur" />
                                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                            </filter>
                                        </defs>

                                        <!-- The Funnel Path segments -->
                                        <path d="M 40,50 L 160,70 L 160,170 L 40,190 Z" fill="url(#funnel-grad-1)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
                                        <path d="M 160,70 L 310,85 L 310,155 L 160,170 Z" fill="url(#funnel-grad-2)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />
                                        <path d="M 310,85 L 460,95 L 460,145 L 310,155 Z" fill="url(#funnel-grad-3)" stroke="rgba(255,255,255,0.12)" stroke-width="1" />

                                        <!-- Funnel Left Lip -->
                                        <path d="M 40,50 A 20,70 0 0,0 40,190 A 20,70 0 0,0 40,50 Z" fill="#10b981" fill-opacity="0.4" stroke="#10b981" stroke-width="1.5" />

                                        <!-- Inside Text Labels - ENLARGED WITH BETTER SPACING -->
                                        <text x="90" y="126" fill="#fff" font-size="16" font-weight="bold" text-anchor="middle" style="letter-spacing: 1px;">健康</text>
                                        <text x="198" y="125" fill="rgba(255,255,255,0.9)" font-size="12" font-weight="bold" text-anchor="middle">未病・ハイリスク</text>
                                        <text x="278" y="126" fill="#fff" font-size="16" font-weight="bold" text-anchor="middle" style="letter-spacing: 1px;">発症</text>
                                        <text x="355" y="125" fill="rgba(255,255,255,0.9)" font-size="12" font-weight="bold" text-anchor="middle">重症化</text>
                                        <text x="425" y="126" fill="#fff" font-size="16" font-weight="bold" text-anchor="middle" style="letter-spacing: 1px;">後遺症</text>

                                        <!-- INTEGRATED RADAR SENSOR LAYER -->
                                        <g id="integrated-radar-layer" style="opacity: 0; transition: opacity 0.4s ease;">
                                            <path d="M 160,70 L 310,85 L 310,155 L 160,170 Z" fill="url(#radar-scan)" />
                                            <path d="M 230,76 A 40,40 0 0,1 230,162" fill="none" stroke="rgba(59, 130, 246, 0.4)" stroke-width="1.5" stroke-dasharray="2 2" />
                                            <path d="M 270,81 A 70,70 0 0,1 270,157" fill="none" stroke="rgba(59, 130, 246, 0.3)" stroke-width="1.5" />
                                            <circle cx="210" cy="95" r="4" fill="#ef4444" filter="drop-shadow(0 0 3px #ef4444)" />
                                            <circle cx="225" cy="135" r="5" fill="#ef4444" filter="drop-shadow(0 0 4px #ef4444)" />
                                            <circle cx="280" cy="115" r="6" fill="#ef4444" filter="drop-shadow(0 0 5px #ef4444)" />
                                            <circle cx="250" cy="100" r="3" fill="#ef4444" opacity="0.7" />
                                        </g>

                                        <!-- Loop/Return Recovery Arrow -->
                                        <path id="svg-recovery-loop" d="M 385,145 A 190,65 0 0,1 65,165" fill="none" stroke="url(#loop-grad)" stroke-width="3" stroke-linecap="round" style="opacity: 0.2; transition: all 0.4s ease;" />
                                        
                                        <!-- Connectors from Cards to 3D Glass Arches (Aligned vertically) -->
                                        <line x1="160" y1="44" x2="160" y2="48" stroke="rgba(255,255,255,0.3)" stroke-width="1" stroke-dasharray="2 2" />
                                        <line x1="310" y1="44" x2="310" y2="63" stroke="rgba(255,255,255,0.3)" stroke-width="1" stroke-dasharray="2 2" />
                                        <line x1="445" y1="44" x2="453" y2="78" stroke="rgba(255,255,255,0.3)" stroke-width="1" stroke-dasharray="2 2" />

                                        <!-- 3D Curved Glass Shields slicing/wrapping the tube joints -->
                                        <!-- Shield 1 (At x=160 Joint) -->
                                        <g class="prev-svg-shield" data-shield-idx="1" style="cursor:pointer;">
                                            <path d="M 140,40 L 180,40 L 180,200 L 140,200 Z" fill="transparent" />
                                            <path id="svg-shield-1" d="M 152,48 Q 160,40 168,48 L 168,192 Q 160,200 152,192 Z" 
                                                fill="rgba(16, 185, 129, 0.25)" stroke="#10b981" stroke-width="2.5" filter="url(#glow-green)" style="transition: all 0.3s ease;" />
                                            
                                            <!-- Card 1 (Aligned horizontally at y=6) -->
                                            <rect x="102.5" y="6" width="115" height="38" rx="4" fill="rgba(15, 23, 42, 0.95)" stroke="rgba(16, 185, 129, 0.5)" stroke-width="1.2" />
                                            <text x="160" y="20" fill="#10b981" font-size="10.5" font-weight="bold" text-anchor="middle">第1の壁: 第一次予防</text>
                                            <text x="160" y="32" fill="rgba(255,255,255,0.85)" font-size="9.5" text-anchor="middle">発生を未然に防ぐ</text>
                                        </g>

                                        <!-- Shield 2 (At x=310 Joint) -->
                                        <g class="prev-svg-shield" data-shield-idx="2" style="cursor:pointer;">
                                            <path d="M 290,55 L 330,55 L 330,185 L 290,185 Z" fill="transparent" />
                                            <path id="svg-shield-2" d="M 303,63 Q 310,56 317,63 L 317,177 Q 310,184 303,177 Z" 
                                                fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" style="transition: all 0.3s ease;" />
                                            
                                            <!-- Card 2 (Aligned horizontally at y=6) -->
                                            <rect x="252.5" y="6" width="115" height="38" rx="4" fill="rgba(15, 23, 42, 0.95)" stroke="rgba(245, 158, 11, 0.5)" stroke-width="1.2" />
                                            <text x="310" y="20" fill="#f59e0b" font-size="10.5" font-weight="bold" text-anchor="middle">第2の壁: 第二次予防</text>
                                            <text x="310" y="32" fill="rgba(255,255,255,0.85)" font-size="9.5" text-anchor="middle">早期発見・進行阻止</text>
                                        </g>

                                        <!-- Shield 3 (At x=460 Joint) -->
                                        <g class="prev-svg-shield" data-shield-idx="3" style="cursor:pointer;">
                                            <path d="M 440,70 L 480,70 L 480,170 L 440,170 Z" fill="transparent" />
                                            <path id="svg-shield-3" d="M 453,78 Q 460,71 467,78 L 467,162 Q 460,169 453,162 Z" 
                                                fill="rgba(255,255,255,0.06)" stroke="rgba(255,255,255,0.3)" stroke-width="1.5" style="transition: all 0.3s ease;" />
                                            
                                            <!-- Card 3 (Aligned horizontally at y=6) -->
                                            <rect x="387.5" y="6" width="115" height="38" rx="4" fill="rgba(15, 23, 42, 0.95)" stroke="rgba(239, 68, 68, 0.5)" stroke-width="1.2" />
                                            <text x="445" y="20" fill="#ef4444" font-size="10.5" font-weight="bold" text-anchor="middle">第3の壁: 第三次予防</text>
                                            <text x="445" y="32" fill="rgba(255,255,255,0.85)" font-size="9.5" text-anchor="middle">機能回復・社会復帰</text>
                                        </g>
                                    </svg>
                                </div>
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
                                                <!-- 1. Interactive Structural Paradox Panel -->
                        <div style="background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 30px 24px; position: relative; margin: 30px 0; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2); overflow: hidden;">
                            <!-- Circuit Grid Background Overlay -->
                            <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(6, 182, 212, 0.06) 1px, transparent 0); background-size: 24px 24px; opacity: 0.5; pointer-events: none;"></div>

                            <h3 style="color: var(--accent-teal); margin-bottom: 20px; font-size: 1.1rem; display: flex; align-items: center; gap: 8px; position: relative; z-index: 2;">
                                <i class="fa-solid fa-chart-line"></i>
                                <span class="lang-ja">寿命の延伸と少子化がもたらす「構造的パラドックス」</span>
                                <span class="lang-vi">"Nghịch lý cấu trúc" từ tăng tuổi thọ và giảm tỷ lệ sinh</span>
                            </h3>
                            
                            <div class="paradox-layout" style="display: flex; gap: 25px; flex-wrap: wrap; position: relative; z-index: 2;">
                                <!-- Left: SVG Chart -->
                                <div class="paradox-chart-pane" style="flex: 1.2 1 400px; min-width: 290px; display: flex; flex-direction: column; gap: 15px;">
                                    <div style="position: relative; background: rgba(0,0,0,0.3); border-radius: 8px; padding: 20px 15px 15px 15px; border: 1px solid rgba(255,255,255,0.06);">
                                        <svg id="paradox-svg" viewBox="0 0 500 250" style="width: 100%; height: auto; overflow: visible;">
                                            <defs>
                                                <!-- Gradients -->
                                                <linearGradient id="medical-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stop-color="#f59e0b" stop-opacity="0.12" />
                                                    <stop offset="50%" stop-color="#ea580c" stop-opacity="0.45" />
                                                    <stop offset="100%" stop-color="#dc2626" stop-opacity="0.7" />
                                                </linearGradient>
                                                <linearGradient id="life-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stop-color="#2dd4bf" />
                                                    <stop offset="100%" stop-color="#14b8a6" />
                                                </linearGradient>
                                                <linearGradient id="fertility-line-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                                                    <stop offset="0%" stop-color="#fb7185" />
                                                    <stop offset="100%" stop-color="#f43f5e" />
                                                </linearGradient>
                                                <!-- Glow Filters for Refined Trend Lines -->
                                                <filter id="glow-teal" x="-20%" y="-20%" width="140%" height="140%">
                                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                                    <feMerge>
                                                        <feMergeNode in="blur" />
                                                        <feMergeNode in="SourceGraphic" />
                                                    </feMerge>
                                                </filter>
                                                <filter id="glow-rose" x="-20%" y="-20%" width="140%" height="140%">
                                                    <feGaussianBlur stdDeviation="3" result="blur" />
                                                    <feMerge>
                                                        <feMergeNode in="blur" />
                                                        <feMergeNode in="SourceGraphic" />
                                                    </feMerge>
                                                </filter>
                                            </defs>
                                            
                                            <!-- Background Grid Lines -->
                                            <line x1="50" y1="50" x2="450" y2="50" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4" />
                                            <line x1="50" y1="100" x2="450" y2="100" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4" />
                                            <line x1="50" y1="150" x2="450" y2="150" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4" />
                                            <line x1="50" y1="200" x2="450" y2="200" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4" />
                                            
                                            <line x1="50" y1="30" x2="50" y2="205" stroke="rgba(255,255,255,0.1)" />
                                            <line x1="250" y1="30" x2="250" y2="205" stroke="rgba(255,255,255,0.05)" stroke-dasharray="4" />
                                            <line x1="450" y1="30" x2="450" y2="205" stroke="rgba(255,255,255,0.1)" />
                                            
                                            <!-- Text markers for Timeline X-axis -->
                                            <text x="50" y="222" fill="var(--text-muted)" font-size="10.5" text-anchor="middle" font-weight="600">
                                                過去 (Past)
                                            </text>
                                            <text x="250" y="222" fill="var(--text-muted)" font-size="10.5" text-anchor="middle">
                                                移行期 (Transition)
                                            </text>
                                            <text x="450" y="222" fill="var(--text-muted)" font-size="10.5" text-anchor="middle" font-weight="600">
                                                未来 (Future)
                                            </text>

                                            <!-- Filled Area representing Medical Costs -->
                                            <path id="paradox-area-fill" d="" fill="url(#medical-grad)" style="transition: d 0.1s linear;" />
                                            
                                            <!-- Curves -->
                                            <path id="life-expectancy-line" d="" fill="none" stroke="url(#life-line-grad)" stroke-width="3" stroke-linecap="round" filter="url(#glow-teal)" style="transition: d 0.1s linear;" />
                                            <path id="fertility-rate-line" d="" fill="none" stroke="url(#fertility-line-grad)" stroke-width="3" stroke-linecap="round" filter="url(#glow-rose)" style="transition: d 0.1s linear;" />
                                            
                                            <!-- Interactive indicator line tracking the slider -->
                                            <line id="tracker-line" x1="50" y1="30" x2="50" y2="205" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" stroke-dasharray="2 2" />
                                            <circle id="tracker-life-dot" cx="50" cy="130" r="6" fill="#14b8a6" stroke="#fff" stroke-width="1.5" />
                                            <circle id="tracker-fert-dot" cx="50" cy="100" r="6" fill="#fb7185" stroke="#fff" stroke-width="1.5" />

                                            <!-- Annotations -->
                                            <text id="label-life" x="240" y="65" fill="#2dd4bf" font-size="12.5" font-weight="bold" filter="drop-shadow(0px 1px 3px rgba(0,0,0,0.5))">平均寿命の延伸</text>
                                            <text id="label-fert" x="220" y="190" fill="#fb7185" font-size="12.5" font-weight="bold" filter="drop-shadow(0px 1px 3px rgba(0,0,0,0.5))">合計特殊出生率の低下</text>
                                            <text id="label-medical" x="350" y="125" fill="#f59e0b" font-size="14.5" font-weight="bold" text-anchor="middle" opacity="0.95" filter="drop-shadow(0px 1px 3px rgba(0,0,0,0.5))">
                                                国民医療費の膨脹
                                            </text>
                                        </svg>
                                    </div>
                                    
                                    <!-- Slider Control -->
                                    <div style="display: flex; align-items: center; gap: 15px; background: rgba(255,255,255,0.02); padding: 10px 15px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);">
                                        <span class="lang-ja" style="font-size: 0.85rem; color: var(--text-secondary); font-weight: bold; width: 45px; text-align: right;">過去</span>
                                        <span class="lang-vi" style="font-size: 0.85rem; color: var(--text-secondary); font-weight: bold; width: 65px; text-align: right;">Quá khứ</span>
                                        
                                        <input type="range" id="paradox-slider" min="0" max="100" value="50" class="health-slider" style="flex: 1; background: linear-gradient(90deg, var(--accent-teal) 0%, var(--accent-gold) 50%, #f43f5e 100%);" />
                                        
                                        <span class="lang-ja" style="font-size: 0.85rem; color: var(--text-secondary); font-weight: bold; width: 70px;">未来 (課題)</span>
                                        <span class="lang-vi" style="font-size: 0.85rem; color: var(--text-secondary); font-weight: bold; width: 65px;">Tương lai</span>
                                    </div>
                                </div>
                                
                                <!-- Right: Explanation Card -->
                                <div id="paradox-explanation-pane" class="card glass-card" style="flex: 1 1 300px; min-width: 270px; padding: 22px; border-left: 4px solid var(--accent-gold); display: flex; flex-direction: column; justify-content: center; background: rgba(255,255,255,0.01); border-radius: 8px;">
                                    <div id="paradox-explanation-content" style="transition: opacity 0.2s ease;">
                                        <!-- Dynamically loaded content -->
                                    </div>
                                </div>
                            </div>
                        </div>

                        <!-- 2. Disease Structure Paradigm Shift Panel -->
                        <div style="background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 30px 24px; position: relative; margin: 30px 0; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2); overflow: hidden;">
                            <!-- Circuit Grid Background Overlay -->
                            <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(245, 158, 11, 0.04) 1px, transparent 0); background-size: 24px 24px; opacity: 0.5; pointer-events: none;"></div>

                            <h3 style="color: var(--accent-gold); margin-bottom: 20px; font-size: 1.1rem; display: flex; align-items: center; gap: 8px; position: relative; z-index: 2;">
                                <i class="fa-solid fa-arrows-spin"></i>
                                <span class="lang-ja">疾病構造の劇的なシフト：急性疾患から非感染性疾患（NCDs）へ</span>
                                <span class="lang-vi">Sự dịch chuyển cơ cấu bệnh tật: Từ cấp tính sang không lây nhiễm (NCDs)</span>
                            </h3>

                            <div style="position: relative; z-index: 2; overflow-x: auto;">
                                <table style="width: 100%; border-collapse: collapse; text-align: left; font-size: 0.96rem; min-width: 500px;">
                                    <thead>
                                        <tr style="border-bottom: 1.5px solid rgba(255,255,255,0.12);">
                                            <th style="padding: 12px 16px; color: var(--text-muted); font-weight: 600; width: 33.33%;">
                                                <span class="lang-ja">比較項目</span>
                                                <span class="lang-vi">Tiêu chí so sánh</span>
                                            </th>
                                            <th style="padding: 12px 16px; background: rgba(255,255,255,0.03); color: var(--text-secondary); font-weight: bold; width: 33.33%; border-left: 1px solid rgba(255,255,255,0.06); text-align: center;">
                                                <span class="lang-ja">旧パラダイム (Old Paradigm)</span>
                                                <span class="lang-vi">Hệ hình cũ (Old Paradigm)</span>
                                            </th>
                                            <th style="padding: 12px 16px; background: rgba(245, 158, 11, 0.08); color: var(--accent-gold); font-weight: bold; width: 33.33%; border-left: 1px solid rgba(255,255,255,0.06); text-align: center;">
                                                <span class="lang-ja">新パラダイム (New Paradigm)</span>
                                                <span class="lang-vi">Hệ hình mới (New Paradigm)</span>
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06); transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.01)'" onmouseout="this.style.background='none'">
                                            <td style="padding: 16px; font-weight: bold; color: var(--text-primary); vertical-align: middle;">
                                                <i class="fa-solid fa-virus" style="margin-right: 8px; color: var(--text-muted);"></i>
                                                <span class="lang-ja">主な対象疾患</span>
                                                <span class="lang-vi">Bệnh lý chính</span>
                                            </td>
                                            <td style="padding: 16px; background: rgba(255,255,255,0.01); border-left: 1px solid rgba(255,255,255,0.04); vertical-align: middle;">
                                                <div style="font-weight: 600; margin-bottom: 4px; color: var(--text-primary);">
                                                    <span class="lang-ja">感染症・急性疾患</span>
                                                    <span class="lang-vi">Bệnh truyền nhiễm & Cấp tính</span>
                                                </div>
                                                <div style="font-size: 0.88rem; color: var(--text-secondary);">
                                                    <span class="lang-ja">（単一の病原体によるもの）</span>
                                                    <span class="lang-vi">(Gây ra bởi một tác nhân pathogen duy nhất)</span>
                                                </div>
                                            </td>
                                            <td style="padding: 16px; background: rgba(245, 158, 11, 0.02); border-left: 1px solid rgba(255,255,255,0.04); vertical-align: middle;">
                                                <div style="font-weight: 600; margin-bottom: 4px; color: var(--accent-gold); display: flex; align-items: center; gap: 6px;">
                                                    <span class="lang-ja">非感染性疾患 (NCDs)・生活習慣病</span>
                                                    <span class="lang-vi">Bệnh không lây nhiễm (NCDs) & Bệnh lối sống</span>
                                                    <i class="fa-solid fa-chart-line" style="font-size: 0.85rem;"></i>
                                                </div>
                                                <div style="font-size: 0.88rem; color: var(--text-secondary);">
                                                    <span class="lang-ja">がん、心疾患、脳血管疾患、COPD、糖尿病など</span>
                                                    <span class="lang-vi">Ung thư, tim mạch, đột quỵ, COPD, tiểu đường...</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06); transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.01)'" onmouseout="this.style.background='none'">
                                            <td style="padding: 16px; font-weight: bold; color: var(--text-primary); vertical-align: middle;">
                                                <i class="fa-solid fa-circle-question" style="margin-right: 8px; color: var(--text-muted);"></i>
                                                <span class="lang-ja">発症要因</span>
                                                <span class="lang-vi">Nguyên nhân phát bệnh</span>
                                            </td>
                                            <td style="padding: 16px; background: rgba(255,255,255,0.01); border-left: 1px solid rgba(255,255,255,0.04); vertical-align: middle;">
                                                <div style="color: var(--text-primary);">
                                                    <span class="lang-ja">外部からの病原体侵入</span>
                                                    <span class="lang-vi">Tác nhân pathogen xâm nhập từ bên ngoài</span>
                                                </div>
                                            </td>
                                            <td style="padding: 16px; background: rgba(245, 158, 11, 0.02); border-left: 1px solid rgba(255,255,255,0.04); vertical-align: middle;">
                                                <div style="color: var(--text-primary); display: flex; align-items: center; gap: 6px;">
                                                    <span class="lang-ja">個人の素因と生活習慣の蓄積</span>
                                                    <span class="lang-vi">Thể trạng cá nhân & Tích tụ thói quen lối sống</span>
                                                    <i class="fa-solid fa-user-doctor" style="color: var(--accent-gold); font-size: 0.85rem;"></i>
                                                </div>
                                                <div style="font-size: 0.88rem; color: var(--text-secondary); margin-top: 4px;">
                                                    <span class="lang-ja">加齢、食生活、運動不足、喫煙などの複合的要因</span>
                                                    <span class="lang-vi">Sự kết hợp của lão hóa, chế độ ăn, lười vận động, hút thuốc...</span>
                                                </div>
                                            </td>
                                        </tr>
                                        <tr style="border-bottom: 1px solid rgba(255,255,255,0.06); transition: background 0.2s;" onmouseover="this.style.background='rgba(255,255,255,0.01)'" onmouseout="this.style.background='none'">
                                            <td style="padding: 16px; font-weight: bold; color: var(--text-primary); vertical-align: middle;">
                                                <i class="fa-solid fa-house-medical-flag" style="margin-right: 8px; color: var(--text-muted);"></i>
                                                <span class="lang-ja">医療の目的と期間</span>
                                                <span class="lang-vi">Mục tiêu & Thời gian y tế</span>
                                            </td>
                                            <td style="padding: 16px; background: rgba(255,255,255,0.01); border-left: 1px solid rgba(255,255,255,0.04); vertical-align: middle;">
                                                <div style="font-weight: 600; color: var(--text-primary); display: flex; align-items: center; gap: 6px;">
                                                    <span class="lang-ja">短期的な「治癒」（Cure）</span>
                                                    <span class="lang-vi">Chữa khỏi ngắn hạn (Cure)</span>
                                                    <i class="fa-solid fa-dna" style="font-size: 0.85rem; color: var(--text-muted);"></i>
                                                </div>
                                            </td>
                                            <td style="padding: 16px; background: rgba(245, 158, 11, 0.02); border-left: 1px solid rgba(255,255,255,0.04); vertical-align: middle;">
                                                <div style="font-weight: 600; color: var(--accent-gold); display: flex; align-items: center; gap: 6px;">
                                                    <span class="lang-ja">長期的な「コントロール」とQOLの維持（Care）</span>
                                                    <span class="lang-vi">Quản lý lâu dài & Duy trì QOL (Care)</span>
                                                    <i class="fa-solid fa-hand-holding-heart" style="font-size: 0.85rem;"></i>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <!-- 3. Domino Effect Panel -->
                        <div style="background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 30px 24px; position: relative; margin: 30px 0; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2); overflow: hidden;">
                            <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(239, 68, 68, 0.04) 1px, transparent 0); background-size: 24px 24px; opacity: 0.5; pointer-events: none;"></div>
                            
                            <h3 style="color: #f87171; margin-bottom: 20px; font-size: 1.1rem; display: flex; align-items: center; gap: 8px; position: relative; z-index: 2;">
                                <i class="fa-solid fa-people-arrows"></i>
                                <span class="lang-ja">発症から要介護へのドミノ現象</span>
                                <span class="lang-vi">Hiệu ứng Domino: Từ phát bệnh đến trạng thái cần Kaigo (Chăm sóc điều dưỡng)</span>
                            </h3>

                            <p style="color: var(--text-secondary); font-size: 0.94rem; margin-bottom: 25px; position: relative; z-index: 2;">
                                <span class="lang-ja">不健康な生活習慣のドミノが倒れると、連鎖的に生活習慣病が発症し、最終的に要介護状態へと転落します。各タイルをクリックして詳細を確認してください。</span>
                                <span class="lang-vi">Khi quân cờ domino lối sống không lành mạnh ngã xuống, nó sẽ kéo theo chuỗi phát sinh bệnh mạn tính và cuối cùng rơi vào trạng thái cần điều dưỡng. Hãy click từng quân cờ để xem chi tiết.</span>
                            </p>

                            <!-- Domino Chain Row -->
                            <div class="domino-row" style="display: flex; justify-content: space-between; gap: 12px; margin-bottom: 30px; position: relative; z-index: 2; padding: 25px 12px; overflow-x: auto; min-height: 200px;">
                                <!-- Domino Tile 1 -->
                                <button type="button" class="domino-tile active" data-domino="1" style="flex: 1; min-width: 90px; height: 140px; background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between; padding: 12px 8px; text-align: left; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.25); outline: none;">
                                    <i class="fa-solid fa-utensils" style="font-size: 1.6rem; color: #ef4444; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));"></i>
                                    <div>
                                        <div class="lang-ja" style="font-size: 0.82rem; font-weight: 700; color: #fff; line-height: 1.3;">不適切な生活習慣</div>
                                        <div class="lang-vi" style="font-size: 0.75rem; font-weight: 700; color: #fff; line-height: 1.2;">Lối sống không lành mạnh</div>
                                    </div>
                                </button>

                                <!-- Domino Tile 2 -->
                                <button type="button" class="domino-tile" data-domino="2" style="flex: 1; min-width: 90px; height: 140px; background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between; padding: 12px 8px; text-align: left; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.25); outline: none;">
                                    <i class="fa-solid fa-weight-scale" style="font-size: 1.6rem; color: #f97316; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));"></i>
                                    <div>
                                        <div class="lang-ja" style="font-size: 0.82rem; font-weight: 700; color: #fff; line-height: 1.3;">メタボリックの進行</div>
                                        <div class="lang-vi" style="font-size: 0.75rem; font-weight: 700; color: #fff; line-height: 1.2;">Tiến triển chuyển hóa</div>
                                    </div>
                                </button>

                                <!-- Domino Tile 3 -->
                                <button type="button" class="domino-tile" data-domino="3" style="flex: 1; min-width: 90px; height: 140px; background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between; padding: 12px 8px; text-align: left; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.25); outline: none;">
                                    <i class="fa-solid fa-heart-pulse" style="font-size: 1.6rem; color: #fbbf24; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));"></i>
                                    <div>
                                        <div class="lang-ja" style="font-size: 0.82rem; font-weight: 700; color: #fff; line-height: 1.3;">生活習慣病の発症</div>
                                        <div class="lang-vi" style="font-size: 0.75rem; font-weight: 700; color: #fff; line-height: 1.2;">Khởi phát bệnh lý</div>
                                    </div>
                                </button>

                                <!-- Domino Tile 4 -->
                                <button type="button" class="domino-tile" data-domino="4" style="flex: 1; min-width: 90px; height: 140px; background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between; padding: 12px 8px; text-align: left; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.25); outline: none;">
                                    <i class="fa-solid fa-person-cane" style="font-size: 1.6rem; color: #a855f7; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));"></i>
                                    <div>
                                        <div class="lang-ja" style="font-size: 0.82rem; font-weight: 700; color: #fff; line-height: 1.3;">日常生活動作の制限</div>
                                        <div class="lang-vi" style="font-size: 0.75rem; font-weight: 700; color: #fff; line-height: 1.2;">Hạn chế hoạt động (ADL)</div>
                                    </div>
                                </button>

                                <!-- Domino Tile 5 -->
                                <button type="button" class="domino-tile" data-domino="5" style="flex: 1; min-width: 90px; height: 140px; background: linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.02) 100%); border: 1px solid rgba(255,255,255,0.12); border-radius: 8px; cursor: pointer; display: flex; flex-direction: column; justify-content: space-between; padding: 12px 8px; text-align: left; transition: all 0.3s ease; box-shadow: 0 4px 12px rgba(0,0,0,0.25); outline: none;">
                                    <i class="fa-solid fa-bed-pulse" style="font-size: 1.6rem; color: #ef4444; filter: drop-shadow(0 2px 4px rgba(0,0,0,0.3));"></i>
                                    <div>
                                        <div class="lang-ja" style="font-size: 0.82rem; font-weight: 700; color: #fff; line-height: 1.3;">要介護状態への転落</div>
                                        <div class="lang-vi" style="font-size: 0.75rem; font-weight: 700; color: #fff; line-height: 1.2;">Trạng thái cần Kaigo</div>
                                    </div>
                                </button>
                            </div>

                            <!-- Domino Active Details Display Pane -->
                            <div id="domino-details-pane" style="background: rgba(255,255,255,0.02); border: 1px solid rgba(255,255,255,0.08); border-left: 4px solid #ef4444; border-radius: 8px; padding: 20px; min-height: 100px; display: flex; align-items: center; transition: all 0.3s ease;">
                                <div id="domino-details-content" style="width: 100%; transition: opacity 0.2s ease;">
                                    <!-- Dynamic content injected via JS -->
                                </div>
                            </div>
                        </div>

                        <!-- 4. Two Major Directions for Solutions -->
                        <div style="background: rgba(15, 23, 42, 0.4); border: 1px solid rgba(255, 255, 255, 0.08); border-radius: 16px; padding: 30px 24px; position: relative; margin: 30px 0; box-shadow: 0 8px 32px rgba(0, 0, 0, 0.2); overflow: hidden;">
                            <!-- Circuit Grid Background Overlay -->
                            <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(59, 130, 246, 0.04) 1px, transparent 0); background-size: 24px 24px; opacity: 0.5; pointer-events: none;"></div>

                            <h3 style="color: #60a5fa; margin-bottom: 20px; font-size: 1.1rem; display: flex; align-items: center; gap: 8px; position: relative; z-index: 2;">
                                <i class="fa-solid fa-circle-chevron-right" style="color: #60a5fa;"></i>
                                <span class="lang-ja">解決への方向性：一次予防と健康寿命の延伸</span>
                                <span class="lang-vi">Hướng giải quyết: Dự phòng cấp 1 và Kéo dài tuổi thọ khỏe mạnh</span>
                            </h3>

                            <div class="grid-2col" style="gap: 20px; position: relative; z-index: 2; align-items: stretch; margin-bottom: 25px;">
                                <!-- Direction 1: Primary Prevention -->
                                <div class="card glass-card" style="padding: 0; border: 1px solid rgba(255,255,255,0.08); border-left: 4px solid var(--accent-teal); border-radius: 12px; background: rgba(255,255,255,0.015); display: flex; flex-direction: column; overflow: hidden; box-shadow: var(--shadow-md);">
                                    <!-- Header -->
                                    <div style="background: rgba(255,255,255,0.06); padding: 14px 20px; border-bottom: 1px solid rgba(255,255,255,0.08); font-weight: 700; font-size: 1rem; color: #fff;">
                                        <span class="lang-ja">一次予防 (Primary Prevention)</span>
                                        <span class="lang-vi">Dự phòng cấp 1 (Primary Prevention)</span>
                                    </div>
                                    <!-- Body -->
                                    <div style="padding: 24px 20px; display: flex; align-items: center; justify-content: space-between; gap: 15px; flex-grow: 1;">
                                        <div style="flex: 1; font-size: 0.94rem; line-height: 1.7; color: var(--text-secondary);">
                                            <span class="lang-ja">発病そのものの阻止、リスクの遮断を目標とする活動。</span>
                                            <span class="lang-vi">Ngăn ngừa nguy cơ khởi phát bệnh ngay từ đầu và chủ động loại bỏ các yếu tố rủi ro.</span>
                                        </div>
                                        <div style="width: 80px; height: 80px; display: flex; justify-content: center; align-items: center; flex-shrink: 0;">
                                            <svg viewBox="0 0 100 100" width="70" height="70" style="overflow: visible; filter: drop-shadow(0 0 8px rgba(45,212,191,0.3));">
                                                <!-- Shield path -->
                                                <path d="M 50,15 C 65,15 80,10 80,25 C 80,55 50,85 50,85 C 50,85 20,55 20,25 C 20,10 35,15 50,15 Z" fill="rgba(45, 212, 191, 0.08)" stroke="#2dd4bf" stroke-width="2.5" stroke-linejoin="round" />
                                                <path d="M 50,20 C 62,20 75,16 75,28 C 75,52 50,78 50,78 C 50,78 25,52 25,28 C 25,16 38,20 50,20 Z" fill="none" stroke="#2dd4bf" stroke-width="1" stroke-dasharray="2 2" opacity="0.6" />
                                                <!-- Human figure inside shield -->
                                                <circle cx="50" cy="38" r="6.5" fill="#2dd4bf" />
                                                <path d="M 50,44.5 C 40,44.5 33,51 33,51" stroke="#2dd4bf" stroke-width="3" stroke-linecap="round" fill="none" />
                                                <path d="M 50,44.5 C 60,44.5 67,51 67,51" stroke="#2dd4bf" stroke-width="3" stroke-linecap="round" fill="none" />
                                                <path d="M 50,44.5 L 50,60 L 41,72" stroke="#2dd4bf" stroke-width="3" stroke-linecap="round" fill="none" />
                                                <path d="M 50,60 L 59,72" stroke="#2dd4bf" stroke-width="3" stroke-linecap="round" fill="none" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>

                                <!-- Direction 2: Extending Healthy Life Expectancy -->
                                <div class="card glass-card" style="padding: 0; border: 1px solid rgba(255,255,255,0.08); border-left: 4px solid #10b981; border-radius: 12px; background: rgba(255,255,255,0.015); display: flex; flex-direction: column; overflow: hidden; box-shadow: var(--shadow-md);">
                                    <!-- Header -->
                                    <div style="background: rgba(255,255,255,0.06); padding: 14px 20px; border-bottom: 1px solid rgba(255,255,255,0.08); font-weight: 700; font-size: 1rem; color: #fff;">
                                        <span class="lang-ja">健康寿命の延伸 (Extending Healthy Life Expectancy)</span>
                                        <span class="lang-vi">Kéo dài tuổi thọ khỏe mạnh (Extending Healthy Life Expectancy)</span>
                                    </div>
                                    <!-- Body -->
                                    <div style="padding: 24px 20px; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-grow: 1;">
                                        <div style="flex: 1.2; font-size: 0.94rem; line-height: 1.7; color: var(--text-secondary);">
                                            <span class="lang-ja">日常生活が制限されることなく自立して生活できる期間である「健康寿命」を延伸させること。</span>
                                            <span class="lang-vi">Kéo dài thời gian sống khỏe mạnh (健康寿命) - khoảng thời gian con người có thể sống tự lập, tự chủ không cần chăm sóc điều dưỡng.</span>
                                        </div>
                                        <div style="flex: 0.8; display: flex; flex-direction: column; align-items: center; justify-content: center; min-width: 130px; flex-shrink: 0; background: rgba(0,0,0,0.2); padding: 12px; border-radius: 8px; border: 1px solid rgba(255,255,255,0.04);">
                                            <!-- Green and Red Bar Chart -->
                                            <div style="display: flex; width: 100%; height: 18px; border-radius: 4px; overflow: hidden; box-shadow: 0 0 10px rgba(16,185,129,0.25);">
                                                <div style="width: 80%; background: linear-gradient(90deg, #10b981, #34d399); height: 100%; position: relative;"></div>
                                                <div style="width: 20%; background: linear-gradient(90deg, #dc2626, #ef4444); height: 100%; position: relative;"></div>
                                            </div>
                                            <div style="display: flex; justify-content: space-between; width: 100%; margin-top: 8px; font-size: 0.72rem; font-weight: 700; line-height: 1.2;">
                                                <span style="color: #34d399; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">
                                                    <span class="lang-ja">健康寿命</span>
                                                    <span class="lang-vi">Tuổi thọ khỏe mạnh</span>
                                                </span>
                                                <span style="color: #f87171; text-align: right; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">
                                                    <span class="lang-ja">要介護<br>期間</span>
                                                    <span class="lang-vi">Thời gian<br>Kaigo</span>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <!-- Detailed columns -->
                            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 15px; position: relative; z-index: 2;">
                                <div style="background: rgba(255,255,255,0.02); padding: 15px; border-radius: 8px; border-left: 4px solid var(--accent-teal);">
                                    <h4 style="color: var(--accent-teal); margin: 0 0 8px 0; font-size: 0.95rem; font-weight: bold;">
                                        <span class="lang-ja">一次予防への注力</span>
                                        <span class="lang-vi">Tập trung Dự phòng cấp 1</span>
                                    </h4>
                                    <p style="margin: 0; font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary);">
                                        <span class="lang-ja">病気になった後の治療（Cure）だけではなく、食事や運動習慣の改善により発病そのものを防ぐ対策を強力に推進します。</span>
                                        <span class="lang-vi">Thay vì chỉ tập trung điều trị (Cure) khi đã có bệnh, cần cải thiện chế độ ăn uống, thói quen vận động để ngăn ngừa nguy cơ khởi phát bệnh ngay từ đầu.</span>
                                    </p>
                                </div>
                                <div style="background: rgba(255,255,255,0.02); padding: 15px; border-radius: 8px; border-left: 4px solid #10b981;">
                                    <h4 style="color: #10b981; margin: 0 0 8px 0; font-size: 0.95rem; font-weight: bold;">
                                        <span class="lang-ja">健康寿命のさらなる延伸</span>
                                        <span class="lang-vi">Kéo dài tuổi thọ khỏe mạnh</span>
                                    </h4>
                                    <p style="margin: 0; font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary);">
                                        <span class="lang-ja">現代医療の最大の目標は、単に平均寿命（生命の長さ）を延ばすことではなく、日常生活が制限されることなく自立して生活できる「健康寿命」を平均寿命以上のスピードで延伸させることです。</span>
                                        <span class="lang-vi">Mục tiêu lớn nhất của y tế hiện đại không chỉ đơn thuần là kéo dài tuổi thọ trung bình, mà là kéo dài tốc độ tăng trưởng của "Tuổi thọ khỏe mạnh" nhanh hơn tốc độ tăng tuổi thọ trung bình.</span>
                                    </p>
                                </div>
                                <div style="background: rgba(255,255,255,0.02); padding: 15px; border-radius: 8px; border-left: 4px solid #ef4444;">
                                    <h4 style="color: #f87171; margin: 0 0 8px 0; font-size: 0.95rem; font-weight: bold;">
                                        <span class="lang-ja">要介護期間 (レッドゾーン) の圧縮</span>
                                        <span class="lang-vi">Nén chặt thời gian cần điều dưỡng</span>
                                    </h4>
                                    <p style="margin: 0; font-size: 0.88rem; line-height: 1.6; color: var(--text-secondary);">
                                        <span class="lang-ja">平均寿命と健康寿命の間にある「赤い領域（要介護期間）」を可能な限り圧縮（縮小）することこそが、個人のQOL向上と社会保障制度の持続可能性を両立させる唯一の解です。</span>
                                        <span class="lang-vi">Việc thu hẹp và nén chặt "vùng đỏ" (khoảng cách cần chăm sóc Kaigo) là giải pháp duy nhất giúp vừa nâng cao chất lượng cuộc sống (QOL) cá nhân, vừa đảm bảo tính bền vững của quỹ an sinh xã hội.</span>
                                    </p>
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

                        <!-- Background Flow (Flowchart) -->
                        <!-- Card 1: Background & Ultimate Goal -->
                        <div class="card glass-card" style="padding: 28px; margin-bottom: 25px;">
                            <h3 style="color: var(--accent-teal); margin-bottom: 24px; font-size: 1.1rem; display: flex; align-items: center; gap: 8px;">
                                <i class="fa-solid fa-route"></i>
                                <span class="lang-ja">【背景と最大の目標】健康日本21 策定と健康寿命の延伸</span>
                                <span class="lang-vi">【Bối cảnh & Mục tiêu】Thiết lập Health Japan 21 và Kéo dài tuổi thọ khỏe mạnh</span>
                            </h3>

                            <!-- Flowchart -->
                            <div class="nippon-flow-container">
                                <div class="nippon-flow-step">
                                    <div class="step-num">1</div>
                                    <div class="step-content">
                                        <h4 class="step-title">
                                            <span class="lang-ja">長寿国の実現</span>
                                            <span class="lang-vi">Quốc gia sống thọ</span>
                                        </h4>
                                        <p class="step-desc">
                                            <span class="lang-ja">日本は世界有数の長寿国へ成長。</span>
                                            <span class="lang-vi">Nhật Bản trở thành nước thọ hàng đầu.</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="nippon-flow-arrow"><i class="fa-solid fa-chevron-right"></i></div>
                                <div class="nippon-flow-step">
                                    <div class="step-num">2</div>
                                    <div class="step-content">
                                        <h4 class="step-title">
                                            <span class="lang-ja">急速な高齢化</span>
                                            <span class="lang-vi">Già hóa dân số nhanh</span>
                                        </h4>
                                        <p class="step-desc">
                                            <span class="lang-ja">高齢者人口の急増に伴う人口動態の変化。</span>
                                            <span class="lang-vi">Sự thay đổi cơ cấu dân số do già hóa nhanh.</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="nippon-flow-arrow"><i class="fa-solid fa-chevron-right"></i></div>
                                <div class="nippon-flow-step">
                                    <div class="step-num">3</div>
                                    <div class="step-content">
                                        <h4 class="step-title">
                                            <span class="lang-ja">生活習慣病の増加</span>
                                            <span class="lang-vi">Tăng bệnh do lối sống</span>
                                        </h4>
                                        <p class="step-desc">
                                            <span class="lang-ja">がん、心疾患、脳卒中、糖尿病などのNCDs急増。</span>
                                            <span class="lang-vi">Sự gia tăng nhanh của các bệnh lối sống (NCDs).</span>
                                        </p>
                                    </div>
                                </div>
                                <div class="nippon-flow-arrow"><i class="fa-solid fa-chevron-right"></i></div>
                                <div class="nippon-flow-step">
                                    <div class="step-num">4</div>
                                    <div class="step-content">
                                        <h4 class="step-title">
                                            <span class="lang-ja">要介護者の増大</span>
                                            <span class="lang-vi">Tăng người cần chăm sóc</span>
                                        </h4>
                                        <p class="step-desc">
                                            <span class="lang-ja">社会保障費の圧迫と深刻な社会問題化。</span>
                                            <span class="lang-vi">Gây áp lực lên hệ thống y tế và Kaigo.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div class="nippon-flow-shift" style="margin-bottom: 24px;">
                                <div class="shift-icon"><i class="fa-solid fa-shuffle"></i></div>
                                <div class="shift-content">
                                    <h4 class="shift-title">
                                        <span class="lang-ja">政策の転換点：一次予防（発病そのものの予防）へのシフト</span>
                                        <span class="lang-vi">Bước ngoặt chính sách: Chuyển dịch sang Dự phòng cấp 1 (ngăn bệnh từ gốc)</span>
                                    </h4>
                                </div>
                            </div>

                            <!-- Gap Comparison Chart -->
                            <div class="life-expectancy-chart" style="margin-top: 20px;">
                                <div class="life-bar-container">
                                    <div class="average-life-line">
                                        <div class="average-life-label">
                                            <span class="lang-ja">平均寿命</span>
                                            <span class="lang-vi">Tuổi thọ trung bình</span>
                                        </div>
                                    </div>
                                    <div class="main-life-bar">
                                        <div class="healthy-part">
                                            <span class="lang-ja">健康寿命 (制限なく自立して暮らせる期間)</span>
                                            <span class="lang-vi">Tuổi thọ khỏe mạnh (Sống độc lập không giới hạn)</span>
                                        </div>
                                        <div class="gap-part">
                                            <div class="extend-arrow"><i class="fa-solid fa-angles-right"></i></div>
                                        </div>
                                    </div>
                                </div>
                                <div style="display: flex; justify-content: space-between; font-size: 0.8rem; line-height: 1.4; margin-top: 5px;">
                                    <div style="color: #34d399; font-weight: 600;">
                                        <span class="lang-ja">健康寿命</span>
                                        <span class="lang-vi">Tuổi thọ khỏe mạnh</span>
                                    </div>
                                    <div style="color: #f59e0b; font-weight: 600; text-align: right;">
                                        <span class="lang-ja">ギャップ (不健康な期間 / 要介護など)</span>
                                        <span class="lang-vi">Khoảng trống (Thời gian không khỏe mạnh / Cần Kaigo)</span>
                                    </div>
                                </div>
                            </div>

                            <p style="margin: 15px 0 0 0; font-size: 0.92rem; line-height: 1.6; color: var(--text-secondary); text-align: center;">
                                <span class="lang-ja">壮年期死亡の減少と、この<strong>「健康寿命」を延伸</strong>し、ギャップ（要介護期間）を縮小することが最大の目標です。</span>
                                <span class="lang-vi">Mục tiêu tối thượng là giảm tử vong tuổi trung niên, <strong>kéo dài tuổi thọ khỏe mạnh</strong> và rút ngắn khoảng cách Kaigo.</span>
                            </p>
                        </div>

                        <!-- 5 Basic Directions Card -->
                        <div class="card glass-card" style="padding: 28px;">
                            <h3 style="margin-top: 0; margin-bottom: 20px; font-size: 0.95rem; border-bottom: 1px solid rgba(255,255,255,0.08); padding-bottom: 10px; font-weight: 700;">
                                <i class="fa-solid fa-compass" style="color: var(--accent-gold); margin-right: 8px;"></i>
                                <span class="lang-ja">「健康日本21（第二次）」における5つの基本的な方向性</span>
                                <span class="lang-vi" style="font-size: 0.85rem; font-weight: 600; display: block; margin-top: 2px; color: var(--text-secondary);">5 Phương hướng cơ bản của "Health Japan 21 (Giai đoạn 2)"</span>
                            </h3>

                            <div style="display: flex; flex-direction: column; gap: 20px;">
                                <!-- Direction 1 -->
                                <div style="display: flex; gap: 16px; align-items: flex-start;">
                                    <div style="min-width: 36px; height: 36px; border-radius: 50%; background: rgba(20,184,166,0.15); border: 2px solid var(--accent-teal); display: flex; align-items: center; justify-content: center; color: var(--accent-teal); flex-shrink: 0;">
                                        <i class="fa-solid fa-heart-pulse" style="font-size: 1rem;"></i>
                                    </div>
                                    <div>
                                        <h5 style="color: var(--accent-teal); margin: 0 0 6px; font-size: 0.95rem; font-weight: 700; line-height: 1.3;">
                                            <span class="lang-ja">健康寿命の延伸と健康格差の縮小</span>
                                            <span class="lang-vi" style="font-size: 0.85rem; font-weight: 600; display: block; margin-top: 2px;">Kéo dài tuổi thọ khỏe mạnh và thu hẹp khoảng cách sức khỏe</span>
                                        </h5>
                                        <p style="margin: 0; line-height: 1.7;">
                                            <span class="lang-ja" style="font-size: 0.88rem; color: var(--text-primary);">日常生活が制限されることなく生活できる期間（健康寿命）の延伸と、地域や社会経済状況の違いによる集団間の健康格差の縮小を実現します。</span>
                                            <span class="lang-vi" style="font-size: 0.82rem; color: var(--text-muted); display: block; margin-top: 4px;">Kéo dài thời gian sống khỏe mạnh và giảm thiểu khoảng cách sức khỏe sinh ra do sự khác biệt về khu vực hoặc điều kiện kinh tế xã hội.</span>
                                        </p>
                                    </div>
                                </div>

                                <div style="height: 1px; background: rgba(255,255,255,0.05);"></div>

                                <!-- Direction 2 -->
                                <div style="display: flex; gap: 16px; align-items: flex-start;">
                                    <div style="min-width: 36px; height: 36px; border-radius: 50%; background: rgba(245,158,11,0.15); border: 2px solid var(--accent-gold); display: flex; align-items: center; justify-content: center; color: var(--accent-gold); flex-shrink: 0;">
                                        <i class="fa-solid fa-shield-heart" style="font-size: 1rem;"></i>
                                    </div>
                                    <div>
                                        <h5 style="color: var(--accent-gold); margin: 0 0 6px; font-size: 0.95rem; font-weight: 700; line-height: 1.3;">
                                            <span class="lang-ja">生活習慣病の発症予防と重症化予防の徹底</span>
                                            <span class="lang-vi" style="font-size: 0.85rem; font-weight: 600; display: block; margin-top: 2px;">Phòng ngừa triệt để sự phát bệnh và trở nặng của bệnh lối sống (NCDs)</span>
                                        </h5>
                                        <p style="margin: 0; line-height: 1.7;">
                                            <span class="lang-ja" style="font-size: 0.88rem; color: var(--text-primary);">NCD（非感染性疾患：がん、循環器疾患、糖尿病及びCOPD）に対処するため、一次予防に重点を置いた対策を推進するとともに、合併症の発症や症状の進展等の重症化予防を徹底します。</span>
                                            <span class="lang-vi" style="font-size: 0.82rem; color: var(--text-muted); display: block; margin-top: 4px;">Tập trung phòng ngừa dự phòng cấp 1 và ngăn chặn sự tiến triển nặng của các bệnh không lây nhiễm (ung thư, bệnh tim mạch, tiểu đường và bệnh phổi tắc nghẽn mạn tính COPD).</span>
                                        </p>
                                    </div>
                                </div>

                                <div style="height: 1px; background: rgba(255,255,255,0.05);"></div>

                                <!-- Direction 3 -->
                                <div style="display: flex; gap: 16px; align-items: flex-start;">
                                    <div style="min-width: 36px; height: 36px; border-radius: 50%; background: rgba(16,185,129,0.15); border: 2px solid #10b981; display: flex; align-items: center; justify-content: center; color: #10b981; flex-shrink: 0;">
                                        <i class="fa-solid fa-people-roof" style="font-size: 1rem;"></i>
                                    </div>
                                    <div>
                                        <h5 style="color: #34d399; margin: 0 0 6px; font-size: 0.95rem; font-weight: 700; line-height: 1.3;">
                                            <span class="lang-ja">社会生活を営むために必要な機能の維持及び向上</span>
                                            <span class="lang-vi" style="font-size: 0.85rem; font-weight: 600; display: block; margin-top: 2px;">Duy trì và nâng cao các chức năng cần thiết để duy trì cuộc sống xã hội</span>
                                        </h5>
                                        <p style="margin: 0; line-height: 1.7;">
                                            <span class="lang-ja" style="font-size: 0.88rem; color: var(--text-primary);">乳幼児期から高齢期まで、それぞれのライフステージにおいて心身機能の維持向上に努め、「こころの健康づくり」に取り組みます。</span>
                                            <span class="lang-vi" style="font-size: 0.82rem; color: var(--text-muted); display: block; margin-top: 4px;">Hỗ trợ duy trì chức năng tâm sinh lý từ lúc sơ sinh đến khi cao tuổi để con người sống tự lập, đồng thời tập trung vào "sức khỏe tinh thần" (こころの健康づくり).</span>
                                        </p>
                                    </div>
                                </div>

                                <div style="height: 1px; background: rgba(255,255,255,0.05);"></div>

                                <!-- Direction 4 -->
                                <div style="display: flex; gap: 16px; align-items: flex-start;">
                                    <div style="min-width: 36px; height: 36px; border-radius: 50%; background: rgba(239,68,68,0.15); border: 2px solid #ef4444; display: flex; align-items: center; justify-content: center; color: #f87171; flex-shrink: 0;">
                                        <i class="fa-solid fa-handshake-angle" style="font-size: 1rem;"></i>
                                    </div>
                                    <div>
                                        <h5 style="color: #f87171; margin: 0 0 6px; font-size: 0.95rem; font-weight: 700; line-height: 1.3;">
                                            <span class="lang-ja">健康を支え、守るための社会環境の整備</span>
                                            <span class="lang-vi" style="font-size: 0.85rem; font-weight: 600; display: block; margin-top: 2px;">Xây dựng môi trường xã hội hỗ trợ và bảo vệ sức khỏe</span>
                                        </h5>
                                        <p style="margin: 0; line-height: 1.7;">
                                            <span class="lang-ja" style="font-size: 0.88rem; color: var(--text-primary);">行政機関のみならず、企業、民間団体等の積極的な参加協力を得て、社会全体が相互に支え合いながら国民の健康を守る環境を整備します。</span>
                                            <span class="lang-vi" style="font-size: 0.82rem; color: var(--text-muted); display: block; margin-top: 4px;">Huy động sự tham gia của các tổ chức hành chính, doanh nghiệp và cộng đồng để tạo ra một môi trường tương trợ lẫn nhau, hỗ trợ nâng cao sức khỏe cho người dân.</span>
                                        </p>
                                    </div>
                                </div>

                                <div style="height: 1px; background: rgba(255,255,255,0.05);"></div>

                                <!-- Direction 5 -->
                                <div style="display: flex; gap: 16px; align-items: flex-start;">
                                    <div style="min-width: 36px; height: 36px; border-radius: 50%; background: rgba(59,130,246,0.15); border: 2px solid #3b82f6; display: flex; align-items: center; justify-content: center; color: #93c5fd; flex-shrink: 0;">
                                        <i class="fa-solid fa-person-running" style="font-size: 1rem;"></i>
                                    </div>
                                    <div>
                                        <h5 style="color: #93c5fd; margin: 0 0 6px; font-size: 0.95rem; font-weight: 700; line-height: 1.3;">
                                            <span class="lang-ja">生活習慣及び社会環境の改善</span>
                                            <span class="lang-vi" style="font-size: 0.85rem; font-weight: 600; display: block; margin-top: 2px;">Cải thiện thói quen sinh hoạt và môi trường xã hội</span>
                                        </h5>
                                        <p style="margin: 0; line-height: 1.7;">
                                            <span class="lang-ja" style="font-size: 0.88rem; color: var(--text-primary);">栄養・食生活、身体活動・運動、休養、飲酒、喫煙及び歯・口腔の健康に関する生活習慣及び社会環境の改善と、具体的な健康増進活動を推進します。</span>
                                            <span class="lang-vi" style="font-size: 0.82rem; color: var(--text-muted); display: block; margin-top: 4px;">Thúc đẩy thay đổi các thói quen cụ thể như dinh dưỡng và ăn uống, hoạt động thể chất và vận động, nghỉ ngơi, uống rượu, hút thuốc và sức khỏe răng miệng.</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
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
