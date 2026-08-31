import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Scale, GitBranch, Target, FileText, CheckCircle2, ShieldCheck, Crown, HardHat, Sparkles } from 'lucide-react';
import { 
  CORE_CHAPTERS, 
  PARTNERS, 
  ENGINEERING_TARGETS, 
  MICROGRID_DATA, 
  ESG_IFRS_DATA, 
  CARBON_LIFECYCLE_STAGES, 
  QUANTIFIED_ROI, 
  STAKEHOLDER_PERSONAS, 
  ROADMAP_PHASES, 
  ACTION_STEPS, 
  COMMITMENT_TIERS,
  DECISION_GATES,
  CHANGE_GOVERNANCE_TYPES,
  OBJECTIVE_KPIS,
  FIVE_PRECONDITIONS,
  PROPOSAL_META 
} from '../../data/proposalData';

interface PresentationModeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PresentationModeModal: React.FC<PresentationModeModalProps> = ({
  isOpen,
  onClose
}) => {
  const [currentSlide, setCurrentSlide] = useState(1);
  const totalSlides = 10;

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight' || e.key === ' ' || e.key === 'PageDown') {
        setCurrentSlide(prev => Math.min(totalSlides, prev + 1));
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        setCurrentSlide(prev => Math.max(1, prev - 1));
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const nextSlide = () => setCurrentSlide(prev => Math.min(totalSlides, prev + 1));
  const prevSlide = () => setCurrentSlide(prev => Math.max(1, prev - 1));

  const renderSlideContent = () => {
    switch (currentSlide) {
      case 1:
        return (
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-8 animate-fadeIn">
            <span className="px-3 py-1 rounded-md bg-ocean-950 text-ocean-300 text-xs font-mono font-medium tracking-wider mb-6 border border-ocean-800/60">
              {PROPOSAL_META.version}
            </span>
            <h1 className="text-3xl sm:text-5xl font-bold text-white leading-tight">
              以 <span className="gradient-text-ocean font-extrabold">BIM 數位雙生</span> 與{' '}
              <span className="gradient-text-esg font-extrabold">ESG 永續治理</span>
              <br />賦能台船港灣工程升級
            </h1>
            <p className="mt-4 text-base text-marine-300 font-mono">
              {PROPOSAL_META.subtitle}
            </p>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl text-left text-xs">
              <div className="p-4 rounded-xl bg-marine-900/60 border border-white/10 space-y-1">
                <span className="text-ocean-400 font-mono block">提案聯合團隊</span>
                <span className="font-semibold text-white">台灣環境管理會計協會 × 中國科技大學建築設計院</span>
              </div>
              <div className="p-4 rounded-xl bg-marine-900/60 border border-white/10 space-y-1">
                <span className="text-sage-400 font-mono block">提報對象夥伴</span>
                <span className="font-semibold text-white">台船防蝕科技（台蝕） / 台船營造（台營）</span>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 02 / {totalSlides}</span>
              <h2 className="text-2xl font-bold text-white">四大核心主軸戰略全景</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {CORE_CHAPTERS.map(ch => (
                <div key={ch.num} className="p-5 rounded-2xl bg-marine-900/60 border border-white/10 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-lg font-bold font-mono text-ocean-400 block mb-1">{ch.num}</span>
                    <h3 className="text-sm font-bold text-white mb-1.5">{ch.title}</h3>
                    <p className="text-xs text-marine-400 leading-relaxed">{ch.theme}</p>
                  </div>
                  <div className="p-2.5 rounded-xl bg-marine-950/80 border border-white/5 text-xs text-sage-300 font-medium">
                    🎯 {ch.strategy}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 03 / {totalSlides}</span>
              <h2 className="text-2xl font-bold text-white">戰略轉型：工程修繕預算升級為「ESG 資本投資」</h2>
              <p className="text-xs text-marine-400 mt-1">不是替台船被動花錢修補，而是建立可列入固定資產的數位雙生韌性資產。</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              <div className="p-6 rounded-2xl bg-marine-900/40 border border-white/5 space-y-3">
                <span className="text-xs font-mono text-marine-400 uppercase block">傳統思維 (Traditional)</span>
                <h3 className="text-base font-bold text-white">被動修繕純工班削價模式</h3>
                <ul className="space-y-2 text-xs text-marine-300">
                  <li>❌ 易被總廠採購比價砍價，陷入低毛利代工</li>
                  <li>❌ 被視為沉沒維護費用（Expense），無財務正當性</li>
                  <li>❌ 保固到期即結束，無法形成長期運維服務長約</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-marine-900/90 border border-ocean-500/30 space-y-3 shadow-card-clean">
                <span className="text-xs font-mono text-ocean-400 uppercase block">加值轉型 (Transformation)</span>
                <h3 className="text-base font-bold text-white">BIM 數位雙生 ＋ IFRS S1/S2 資本化溢價</h3>
                <ul className="space-y-2 text-xs text-slate-200">
                  <li>✔ 精算氣候實體風險停工損失，爭取重大資本支出（CAPEX）</li>
                  <li>✔ 四道 Gate 階段獨立計價，0 件未核定變更杜絕糾紛</li>
                  <li>✔ 移交數位雙生模型與水下電位清冊，鎖定長期維運長約</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 4:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 04 / {totalSlides}</span>
              <h2 className="text-2xl font-bold text-white">三層承諾原則與明確法律責任邊界</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PARTNERS.map((p, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-marine-900/60 border border-white/10 space-y-3 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-ocean-400 block">{p.role}</span>
                    <h3 className="text-base font-bold text-white mt-1">{p.shortName}</h3>
                    <div className="mt-2 space-y-1 text-xs text-marine-300">
                      {p.strengths.map((st, i) => (
                        <p key={i}>• {st}</p>
                      ))}
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-marine-950/80 border border-white/5 text-xs text-marine-300">
                    <strong className="block text-white mb-0.5">⚖️ 法律責任邊界：</strong>
                    {p.legalBoundary}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-5">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 05 / {totalSlides}</span>
              <h2 className="text-2xl font-bold text-white">主軸 A：四道決策 Gate 與客觀管理指標</h2>
              <p className="text-xs text-marine-400 mt-0.5">未簽認不盲目施工，0 件未核定變更，各 Gate 作為獨立計價放行依據。</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5 mb-4">
              {DECISION_GATES.map((g, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-marine-900/60 border border-white/10 space-y-2">
                  <span className="text-lg font-mono font-bold text-ocean-400">{g.gateId}</span>
                  <h3 className="text-xs font-bold text-white">{g.name}</h3>
                  <p className="text-[11px] text-marine-400">{g.triggerCondition}</p>
                  <div className="p-2 rounded bg-sage-950/40 text-[10px] text-sage-300 font-medium">
                    {g.billingMilestone}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-3.5 rounded-xl bg-marine-950/80 border border-white/5 grid grid-cols-3 gap-2 text-center text-xs">
              <div><span className="text-ocean-400 font-mono font-bold">48h</span> 內重大問題回應</div>
              <div><span className="text-sage-400 font-mono font-bold">≥ 90%</span> 衝突結案率</div>
              <div><span className="text-sand-300 font-mono font-bold">0 件</span> 未核定變更施工</div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-5">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 06 / {totalSlides}</span>
              <h2 className="text-2xl font-bold text-white">四大工程標的科學機理與淨空檢核</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {ENGINEERING_TARGETS.map(t => (
                <div key={t.id} className="p-4 rounded-xl bg-marine-900/60 border border-white/10 space-y-2">
                  <span className="text-xs font-bold text-white block">{t.title.split('：')[1]}</span>
                  <p className="text-xs text-ocean-300 font-mono">{t.subtitle}</p>
                  <p className="text-[11px] text-marine-300 leading-relaxed">{t.scientificMechanism}</p>
                  <div className="p-2 rounded bg-marine-950/80 text-[11px] text-sand-300 border border-white/5">
                    <strong>商業解法：</strong>{t.commercialReality}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 7:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-5">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 07 / {totalSlides}</span>
              <h2 className="text-2xl font-bold text-white">協會核心優勢：IFRS S1/S2 與財務模型</h2>
              <p className="text-xs text-sage-300 mt-0.5">台灣環境管理會計協會協助台船將工程防蝕轉化為金管會合規報告底稿。</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ESG_IFRS_DATA.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-marine-900/60 border border-white/10 space-y-3">
                  <span className="text-xs font-mono text-sage-400 font-semibold uppercase">{item.standard}</span>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <div className="p-3 rounded-xl bg-marine-950/80 border border-white/5 text-xs text-marine-300">
                    <strong className="text-sand-300 block mb-1">準則強制揭露：</strong>
                    {item.requirements}
                  </div>
                  <div className="p-3.5 rounded-xl bg-sage-950/40 border border-sage-800/40 text-xs text-sage-300">
                    <strong className="text-sage-400 block mb-1">協會輸出合規底稿：</strong>
                    {item.cemaOutput}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 8:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-5">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 08 / {totalSlides}</span>
              <h2 className="text-2xl font-bold text-white">全生命週期碳帳本與 ISO 14064 / 14067</h2>
              <p className="text-xs text-marine-400 mt-0.5">隨標單產出可追溯 EPD 與施工能耗清冊，邊界清楚不越俎代庖。</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CARBON_LIFECYCLE_STAGES.map((st, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-marine-900/60 border border-white/10 space-y-3">
                  <span className="text-xs font-mono text-ocean-400 font-semibold">{st.stage} ｜ {st.isoStandard}</span>
                  <h3 className="text-sm font-bold text-white">{st.title}</h3>
                  <div className="p-2.5 rounded-lg bg-marine-950/80 text-xs text-marine-300">
                    <strong className="text-slate-200 block mb-0.5">產出：</strong>
                    {st.carbonOutputs[0]}
                  </div>
                  <div className="p-2.5 rounded-lg bg-marine-950/80 border border-white/5 text-[11px] text-marine-400">
                    <strong>邊界：</strong>{st.boundaryClarification}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 9:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-5">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 09 / {totalSlides}</span>
              <h2 className="text-2xl font-bold text-white">決策與執行層溝通話術 ＋ 5 大前提</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {STAKEHOLDER_PERSONAS.map(p => (
                <div key={p.id} className="p-5 rounded-2xl bg-marine-900/60 border border-white/10 space-y-3">
                  <h3 className="text-sm font-bold text-white">{p.title}</h3>
                  <div className="p-3 rounded-xl bg-marine-950/80 border border-white/5 text-xs text-marine-300">
                    <strong className="text-sand-300 block mb-0.5">核心關注：</strong>
                    {p.coreConcerns[0]}
                  </div>
                  <div className="p-3 rounded-xl bg-sage-950/40 border border-sage-800/40 text-xs text-sage-300">
                    <strong className="text-sage-400 block mb-0.5">提案說服話術：</strong>
                    {p.pitchHook}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 10:
        return (
          <div className="max-w-5xl mx-auto py-6 text-center space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 10 / {totalSlides}</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">結論與近期具體推進三步驟</h2>
              <p className="text-sm text-sage-300 font-semibold mt-1.5">
                成為台灣第一家兼具「重防蝕技術、BIM 港灣數位雙生、上市 ESG 合規」的智慧海洋工程先鋒。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {ACTION_STEPS.map(act => (
                <div key={act.step} className="p-5 rounded-2xl bg-marine-900/60 border border-white/10 space-y-2.5">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-ocean-950 text-ocean-300 border border-ocean-800/60">
                    步驟 0{act.step} ｜ {act.timeframe}
                  </span>
                  <h3 className="text-sm font-bold text-white">{act.title}</h3>
                  <p className="text-xs text-marine-300 leading-relaxed">{act.description}</p>
                  <div className="p-2 rounded-xl bg-sage-950/40 text-xs text-sage-300 font-mono">
                    成果：{act.deliverable}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-4 sm:p-6 animate-fadeIn">
      <div className="relative w-full max-w-5xl h-[88vh] bg-[#0A0F1D] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-3.5 border-b border-white/10 bg-marine-950/80">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded bg-ocean-950 text-ocean-300 border border-ocean-800/60">
              SLIDE {String(currentSlide).padStart(2, '0')} / {totalSlides}
            </span>
            <span className="text-xs text-marine-400 hidden sm:inline-block truncate max-w-md">
              {PROPOSAL_META.title}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-marine-300 hover:text-white transition-all"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Slide Content Area */}
        <div className="flex-1 p-6 sm:p-8 overflow-y-auto flex items-center justify-center">
          {renderSlideContent()}
        </div>

        {/* Bottom Navigation Controls */}
        <div className="flex items-center justify-between px-6 py-3.5 border-t border-white/10 bg-marine-950/80">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
              currentSlide === 1
                ? 'bg-white/5 text-marine-700 cursor-not-allowed'
                : 'bg-marine-800 text-slate-200 hover:bg-marine-700'
            }`}
          >
            <ChevronLeft className="w-3.5 h-3.5" /> 上一頁
          </button>

          {/* Slide dots */}
          <div className="flex items-center gap-1.5 overflow-x-auto py-1">
            {Array.from({ length: totalSlides }, (_, i) => i + 1).map(num => (
              <button
                key={num}
                onClick={() => setCurrentSlide(num)}
                className={`w-2 h-2 rounded-full transition-all ${
                  currentSlide === num
                    ? 'w-5 bg-ocean-400'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                title={`第 ${num} 頁`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold font-mono transition-all ${
              currentSlide === totalSlides
                ? 'bg-white/5 text-marine-700 cursor-not-allowed'
                : 'bg-ocean-600 text-white hover:bg-ocean-500 shadow-card-clean'
            }`}
          >
            下一頁 <ChevronRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
