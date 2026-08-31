import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Scale, GitBranch, Target, FileText, CheckCircle2, AlertTriangle, ShieldCheck } from 'lucide-react';
import { 
  CORE_CHAPTERS, 
  DOUBLE_DILEMMAS, 
  CSBS_BOTTLENECKS, 
  PARTNERS, 
  ENGINEERING_TARGETS, 
  MICROGRID_DATA, 
  BIM_PLATFORM_FEATURES, 
  ESG_IFRS_DATA, 
  CARBON_LIFECYCLE_STAGES, 
  QUANTIFIED_ROI, 
  STAKEHOLDER_PERSONAS, 
  ROADMAP_PHASES, 
  RISK_QNA, 
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
  const totalSlides = 20;

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
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-10 animate-fadeIn">
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
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl text-left text-xs">
              <div className="p-4 rounded-xl bg-marine-900/60 border border-white/10 space-y-1">
                <span className="text-ocean-400 font-mono block">提案聯合團隊</span>
                <span className="font-semibold text-white">台灣環境管理會計協會 × 中國科技大學建築設計院</span>
              </div>
              <div className="p-4 rounded-xl bg-marine-900/60 border border-white/10 space-y-1">
                <span className="text-sage-400 font-mono block">對象夥伴</span>
                <span className="font-semibold text-white">台船防蝕科技股份有限公司（台蝕） / 台船營造（台營）</span>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 02 / 20</span>
              <h2 className="text-2xl font-bold text-white">核心架構（五大部戰略推進全景）</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3.5">
              {CORE_CHAPTERS.map(ch => (
                <div key={ch.num} className="p-4 rounded-xl bg-marine-900/60 border border-white/10 flex flex-col justify-between space-y-3">
                  <div>
                    <span className="text-lg font-bold font-mono text-ocean-400 block mb-1">{ch.num}</span>
                    <h3 className="text-xs font-bold text-white mb-1">{ch.title}</h3>
                    <p className="text-[11px] text-marine-400 leading-snug">{ch.theme}</p>
                  </div>
                  <div className="p-2 rounded bg-marine-950/80 text-[11px] text-sage-300 font-medium">
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
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 03 / 20</span>
              <h2 className="text-2xl font-bold text-white">台船的雙重困境（基於科學事實）</h2>
              <p className="text-xs text-marine-400 mt-0.5">實體港灣設施乾濕交替帶老化 × 資本市場 ESG / IFRS 合規監管</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {DOUBLE_DILEMMAS.map((d, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-marine-900/60 border border-white/10 space-y-3">
                  <h3 className="text-sm font-bold text-white flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-ocean-400" />
                    {d.category}
                  </h3>
                  <div className="space-y-2">
                    {d.items.map((it, i) => (
                      <div key={i} className="p-3 rounded-lg bg-marine-950/80 border border-white/5">
                        <h4 className="text-xs font-semibold text-slate-200">{it.title}</h4>
                        <p className="text-[11px] text-marine-400 mt-0.5 leading-relaxed">{it.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 4:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 04 / 20</span>
              <h2 className="text-2xl font-bold text-white">台蝕目前的挑戰：傳統工程分包的瓶頸</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {CSBS_BOTTLENECKS.map((b, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-marine-900/60 border border-white/10 space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xs font-bold text-white">{b.title}</h3>
                    <span className="text-[11px] font-mono text-marine-400">瓶頸 0{idx + 1}</span>
                  </div>
                  <div className="p-2.5 rounded-lg bg-marine-950/80 text-[11px] text-marine-300">
                    <strong className="text-sand-300 block mb-0.5">現況困境：</strong>{b.status}
                  </div>
                  <div className="p-2.5 rounded-lg bg-sage-950/40 border border-sage-800/40 text-[11px] text-sage-300">
                    <strong className="text-sage-400 block mb-0.5">突破解法：</strong>{b.solution}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 05 / 20</span>
              <h2 className="text-2xl font-bold text-white">戰略解法：工程預算升級為「ESG資本投資」</h2>
              <p className="text-xs text-marine-400 mt-0.5">不是幫台船修繕，而是創造「符合金管會規範的韌性永續資產」</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-5 rounded-xl bg-marine-900/40 border border-white/5 space-y-3">
                <span className="text-[11px] font-mono text-marine-400 uppercase block">傳統思維 (Traditional)</span>
                <h3 className="text-base font-bold text-white">傳統修繕純工班削價模式</h3>
                <ul className="space-y-1.5 text-xs text-marine-300">
                  <li>❌ 易被總廠採購比價砍價</li>
                  <li>❌ 被視為沉沒維護費用（Expense）</li>
                  <li>❌ 無法列入 ESG 績效與資本支出</li>
                </ul>
              </div>
              <div className="p-5 rounded-xl bg-marine-900/90 border border-ocean-500/30 space-y-3 shadow-card-clean">
                <span className="text-[11px] font-mono text-ocean-400 uppercase block">加值策略 (Transformation)</span>
                <h3 className="text-base font-bold text-white">數位雙生防災監測 ＋ S1/S2 合規帳本</h3>
                <ul className="space-y-1.5 text-xs text-slate-200">
                  <li>✔ 爭取董事會層級專款（CAPEX 資本化）</li>
                  <li>✔ 精算氣候財務風險，避免千萬級停工損失</li>
                  <li>✔ 鎖定台蝕長期運維服務與專利塗料</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 06 / 20</span>
              <h2 className="text-2xl font-bold text-white">三方聯合陣容與明確法律責任邊界</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {PARTNERS.map((p, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-marine-900/60 border border-white/10 space-y-3 flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-mono text-ocean-400 block">{p.role}</span>
                    <h3 className="text-sm font-bold text-white mt-0.5">{p.shortName}</h3>
                    <div className="mt-2 space-y-1 text-xs text-marine-300">
                      {p.strengths.slice(0, 2).map((st, i) => (
                        <p key={i}>• {st}</p>
                      ))}
                    </div>
                  </div>
                  <div className="p-2.5 rounded-lg bg-marine-950/80 border border-white/5 text-[11px] text-marine-300">
                    <strong className="block text-white mb-0.5">⚖️ 法律責任邊界：</strong>
                    {p.legalBoundary}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 7:
      case 8:
      case 9:
      case 10: {
        const target = ENGINEERING_TARGETS[currentSlide - 7];
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-5">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">
                Slide 0{currentSlide} / 20
              </span>
              <h2 className="text-xl sm:text-2xl font-bold text-white">{target.title}</h2>
              <p className="text-xs text-marine-300 mt-0.5 font-mono">{target.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-marine-900/60 border border-white/10 space-y-2">
                <h3 className="text-xs font-bold text-ocean-400 uppercase font-mono">科學機理與現況</h3>
                <p className="text-xs text-marine-300 leading-relaxed">{target.scientificMechanism}</p>
                <div className="p-2.5 rounded bg-marine-950/80 text-xs text-sand-300 border border-white/5">
                  <strong>商業解法：</strong>{target.commercialReality}
                </div>
              </div>
              <div className="p-4 rounded-xl bg-marine-900/60 border border-white/10 space-y-2">
                <h3 className="text-xs font-bold text-ocean-300 uppercase font-mono">淨空衝突檢核 (Clearance)</h3>
                <ul className="space-y-1.5 text-xs text-marine-300">
                  {target.clearanceChecks.map((chk, idx) => (
                    <li key={idx} className="p-1.5 rounded bg-marine-950/60 border border-white/5">
                      ✔ {chk}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-4 rounded-xl bg-marine-900/60 border border-white/10 space-y-2">
                <h3 className="text-xs font-bold text-sage-400 uppercase font-mono">實施方案與切入點</h3>
                <ul className="space-y-1.5 text-xs text-marine-300">
                  {target.solutions.map((sol, idx) => (
                    <li key={idx} className="p-1.5 rounded bg-sage-950/30 border border-sage-800/40">
                      <span className="font-semibold text-sage-300 block">{sol.title}</span>
                      {sol.benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      }

      case 11:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-5">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 11 / 20</span>
              <h2 className="text-2xl font-bold text-white">{MICROGRID_DATA.title}</h2>
              <p className="text-xs text-sand-300 mt-0.5">{MICROGRID_DATA.subtitle}</p>
            </div>
            <div className="mb-4 p-3.5 rounded-xl bg-marine-900/80 border border-white/10 text-xs text-marine-300">
              {MICROGRID_DATA.boundaryNotice}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {MICROGRID_DATA.solutions.map((sol, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-marine-900/60 border border-white/10 space-y-3">
                  <span className="text-xs font-mono text-ocean-400 font-semibold">解方 0{idx + 1}</span>
                  <h3 className="text-sm font-bold text-white">{sol.title}</h3>
                  <p className="text-xs text-marine-300 leading-relaxed">{sol.desc}</p>
                  <div className="p-2.5 rounded bg-marine-950/80 border border-white/5 text-[11px] text-sage-300">
                    {sol.security || sol.roi || sol.capacity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 12:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-5">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 12 / 20</span>
              <h2 className="text-2xl font-bold text-white">BIM 輕量化 Web 平臺：功能與視覺化</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {BIM_PLATFORM_FEATURES.map((feat, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-marine-900/60 border border-white/10 space-y-3">
                  <span className="text-[11px] font-mono text-ocean-400 font-semibold uppercase">{feat.badge}</span>
                  <h3 className="text-sm font-bold text-white">{feat.title}</h3>
                  <p className="text-xs text-marine-300 leading-relaxed">{feat.desc}</p>
                  <div className="p-2.5 rounded bg-sage-950/40 border border-sage-800/40 text-[11px] text-sage-300 font-medium">
                    ⭐ 現場效益：{feat.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 13:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-5">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 13 / 20</span>
              <h2 className="text-2xl font-bold text-white">環會協會 ESG 優勢：IFRS S1/S2 與財務連結</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {ESG_IFRS_DATA.map((item, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-marine-900/60 border border-white/10 space-y-3">
                  <span className="text-xs font-mono text-sage-400 font-semibold uppercase">{item.standard}</span>
                  <h3 className="text-base font-bold text-white">{item.title}</h3>
                  <div className="p-3 rounded-lg bg-marine-950/80 border border-white/5 text-xs text-marine-300">
                    <strong className="text-sand-300 block mb-0.5">準則要求：</strong>
                    {item.requirements}
                  </div>
                  <div className="p-3 rounded-lg bg-sage-950/40 border border-sage-800/40 text-xs text-sage-300">
                    <strong className="text-sage-400 block mb-0.5">協會輸出底稿：</strong>
                    {item.cemaOutput}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 14:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-5">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 14 / 20</span>
              <h2 className="text-2xl font-bold text-white">從施工到運維的碳帳本與邊界澄清</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {CARBON_LIFECYCLE_STAGES.map((st, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-marine-900/60 border border-white/10 space-y-3">
                  <span className="text-xs font-mono text-ocean-400 font-semibold">{st.stage} ｜ {st.isoStandard}</span>
                  <h3 className="text-sm font-bold text-white">{st.title}</h3>
                  <div className="p-2.5 rounded bg-marine-950/80 text-xs text-marine-300">
                    <strong className="text-slate-200 block mb-0.5">產出：</strong>
                    {st.carbonOutputs[0]}
                  </div>
                  <div className="p-2.5 rounded bg-marine-950/80 border border-white/5 text-[11px] text-marine-400">
                    <strong>邊界澄清：</strong>{st.boundaryClarification}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 15:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-5">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 15 / 20</span>
              <h2 className="text-2xl font-bold text-white">重大效益量化與客觀管理指標 KPI</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {QUANTIFIED_ROI.map((roi, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-marine-900/60 border border-white/10 text-center space-y-2">
                  <span className="text-3xl font-bold font-mono text-ocean-400 block">{roi.metric}</span>
                  <h3 className="text-sm font-bold text-white">{roi.label}</h3>
                  <p className="text-xs text-marine-400 leading-relaxed">{roi.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 16:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-5">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 16 / 20</span>
              <h2 className="text-2xl font-bold text-white">針對決策與執行層的提案溝通要點</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {STAKEHOLDER_PERSONAS.map(p => (
                <div key={p.id} className="p-6 rounded-2xl bg-marine-900/60 border border-white/10 space-y-4">
                  <h3 className="text-base font-bold text-white">{p.title}</h3>
                  <div className="p-3 rounded-xl bg-marine-950/80 border border-white/5 text-xs text-marine-300">
                    <strong className="text-sand-300 block mb-1">核心關注：</strong>
                    {p.coreConcerns[0]}
                  </div>
                  <div className="p-3.5 rounded-xl bg-sage-950/40 border border-sage-800/40 text-xs text-sage-300">
                    <strong className="text-sage-400 block mb-1">提案說服話術：</strong>
                    {p.pitchHook}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 17:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-5">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 17 / 20</span>
              <h2 className="text-2xl font-bold text-white">主軸 A：四道決策 Gate 與四類變更治理</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
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
          </div>
        );

      case 18:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-5">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 18 / 20</span>
              <h2 className="text-2xl font-bold text-white">專案推進時程與里程碑 (Roadmap)</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
              {ROADMAP_PHASES.map((ph, idx) => (
                <div key={idx} className="p-3.5 rounded-xl bg-marine-900/60 border border-white/10 space-y-1.5">
                  <span className="text-[10px] font-mono text-ocean-400 font-semibold block">{ph.phase.split('（')[0]}</span>
                  <h3 className="text-xs font-bold text-white">{ph.duration}</h3>
                  <p className="text-[11px] text-marine-400 leading-snug">{ph.title}</p>
                  <div className="p-1.5 rounded bg-sage-950/40 text-[10px] text-sage-300 font-medium">
                    🏁 {ph.deliverables[0]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 19:
        return (
          <div className="max-w-5xl mx-auto py-6 animate-fadeIn">
            <div className="text-center mb-5">
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 19 / 20</span>
              <h2 className="text-2xl font-bold text-white">五大前提條件與常見疑慮應對 (Q&A)</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2.5">
                <span className="text-xs font-mono font-semibold text-ocean-400 uppercase">五大業主優先釐清前提</span>
                {FIVE_PRECONDITIONS.slice(0, 3).map((pre, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-marine-950/80 border border-white/5 text-xs text-marine-300">
                    <strong className="text-sand-300 block mb-0.5">{pre.title}</strong>
                    <p>{pre.impactOnScope}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-2.5">
                <span className="text-xs font-mono font-semibold text-sage-400 uppercase">常見疑慮應對</span>
                {RISK_QNA.map((q, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-marine-950/80 border border-white/5 text-xs text-marine-300">
                    <strong className="text-white block mb-0.5">Q{idx + 1}：{q.question}</strong>
                    <p className="text-sage-300">💡 {q.highlight}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 20:
        return (
          <div className="max-w-5xl mx-auto py-6 text-center space-y-6 animate-fadeIn">
            <div>
              <span className="text-xs font-mono text-ocean-400 font-medium uppercase">Slide 20 / 20</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mt-1">結論與近期具體推進三步驟</h2>
              <p className="text-sm text-sage-300 font-semibold mt-1.5">
                成為台灣第一家兼具「重防蝕技術、BIM 港灣數位雙生、上市 ESG 合規」的智慧海洋工程先鋒。
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
              {ACTION_STEPS.map(act => (
                <div key={act.step} className="p-5 rounded-xl bg-marine-900/60 border border-white/10 space-y-2.5">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono font-medium bg-ocean-950 text-ocean-300 border border-ocean-800/60">
                    步驟 0{act.step} ｜ {act.timeframe}
                  </span>
                  <h3 className="text-sm font-bold text-white">{act.title}</h3>
                  <p className="text-xs text-marine-300 leading-relaxed">{act.description}</p>
                  <div className="p-2 rounded bg-sage-950/40 text-xs text-sage-300 font-mono">
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
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl h-[90vh] bg-[#0A0F1D] rounded-2xl border border-white/10 shadow-2xl flex flex-col overflow-hidden">
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
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-[50%] py-1">
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
