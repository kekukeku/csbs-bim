import React, { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Maximize2, Minimize2, Play, Pause, Layers, BookOpen } from 'lucide-react';
import { CORE_CHAPTERS, DOUBLE_DILEMMAS, CSBS_BOTTLENECKS, PARTNERS, ENGINEERING_TARGETS, MICROGRID_DATA, BIM_PLATFORM_FEATURES, ESG_IFRS_DATA, CARBON_LIFECYCLE_STAGES, QUANTIFIED_ROI, STAKEHOLDER_PERSONAS, CONTRACT_PRICING_MODULES, ROADMAP_PHASES, RISK_QNA, ACTION_STEPS, PROPOSAL_META } from '../../data/proposalData';

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

  // Keyboard navigation
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

  // Render content dynamically based on current slide (1 ~ 20)
  const renderSlideContent = () => {
    switch (currentSlide) {
      case 1:
        return (
          <div className="flex flex-col items-center justify-center text-center max-w-4xl mx-auto py-12">
            <span className="px-4 py-1 rounded-full bg-ocean-500/20 text-ocean-300 text-xs font-mono font-bold tracking-widest uppercase mb-6 border border-ocean-500/30">
              Joint Strategic Proposal 2026
            </span>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-white leading-tight">
              以 <span className="gradient-text-ocean">BIM 數位雙生</span> 與{' '}
              <span className="gradient-text-esg">ESG 永續治理</span>
              <br />賦能台船港灣工程升級
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-slate-300 max-w-2xl leading-relaxed">
              翻轉傳統削價競爭，建立防蝕延壽、三色即時預警與 IFRS S1/S2 資本支出確信體系
            </p>
            <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl text-left">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-ocean-400 font-mono block">提案聯合團隊</span>
                <span className="text-sm font-bold text-white">中華民國環境管理會計協會 × 中國科技大學建築設計院</span>
              </div>
              <div className="p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xs text-esg-400 font-mono block">對象夥伴</span>
                <span className="text-sm font-bold text-white">台船防蝕科技股份有限公司（台蝕） / 台船營造（台營）</span>
              </div>
            </div>
          </div>
        );

      case 2:
        return (
          <div className="max-w-5xl mx-auto py-8">
            <div className="text-center mb-8">
              <span className="text-xs font-mono text-ocean-400 font-bold uppercase tracking-wider">Slide 02 / 20</span>
              <h2 className="text-3xl font-extrabold text-white">核心架構（五大部戰略推進）</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {CORE_CHAPTERS.map(ch => (
                <div key={ch.num} className="p-5 rounded-2xl bg-white/5 border border-white/10 flex flex-col justify-between">
                  <div>
                    <span className="text-2xl font-black font-mono text-ocean-400 block mb-2">{ch.num}</span>
                    <h3 className="text-base font-bold text-white mb-2">{ch.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-4">{ch.theme}</p>
                  </div>
                  <div className="p-2.5 rounded-lg bg-white/5 text-xs text-esg-300 font-medium">
                    🎯 {ch.strategy}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 3:
        return (
          <div className="max-w-5xl mx-auto py-8">
            <div className="text-center mb-8">
              <span className="text-xs font-mono text-ocean-400 font-bold uppercase tracking-wider">Slide 03 / 20</span>
              <h2 className="text-3xl font-extrabold text-white">台船的雙重困境與核心痛點</h2>
              <p className="text-sm text-slate-400 mt-1">實體港灣設施嚴重老化 × 資本市場 ESG / IFRS 合規監管雙重夾擊</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {DOUBLE_DILEMMAS.map((d, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    {d.category}
                  </h3>
                  <div className="space-y-3">
                    {d.items.map((it, i) => (
                      <div key={i} className="p-3.5 rounded-xl bg-black/30 border border-white/5">
                        <h4 className="text-sm font-bold text-slate-200">{it.title}</h4>
                        <p className="text-xs text-slate-400 mt-1 leading-relaxed">{it.desc}</p>
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
          <div className="max-w-5xl mx-auto py-8">
            <div className="text-center mb-8">
              <span className="text-xs font-mono text-ocean-400 font-bold uppercase tracking-wider">Slide 04 / 20</span>
              <h2 className="text-3xl font-extrabold text-white">台蝕目前的挑戰：傳統工程分包的瓶頸</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {CSBS_BOTTLENECKS.map((b, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <div className="flex items-center justify-between">
                    <h3 className="text-base font-bold text-white">{b.title}</h3>
                    <span className="text-xs font-mono text-rose-400">瓶頸 #{idx + 1}</span>
                  </div>
                  <div className="p-3 rounded-xl bg-rose-950/20 border border-rose-500/20 text-xs text-rose-200">
                    <span className="font-bold">現況：</span>{b.status}
                  </div>
                  <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/20 text-xs text-amber-200">
                    <span className="font-bold">衝擊：</span>{b.impact}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 5:
        return (
          <div className="max-w-5xl mx-auto py-8">
            <div className="text-center mb-8">
              <span className="text-xs font-mono text-ocean-400 font-bold uppercase tracking-wider">Slide 05 / 20</span>
              <h2 className="text-3xl font-extrabold text-white">戰略解法：工程預算升級為「ESG資本投資」</h2>
              <p className="text-sm text-slate-300 mt-1">不是幫台船修繕，而是創造「符合金管會規範的韌性永續資產」</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-rose-500/30 space-y-4">
                <span className="text-xs font-mono text-rose-400 font-bold uppercase block">傳統工程思維 (Traditional)</span>
                <h3 className="text-xl font-bold text-white">塢壁填縫、鋼筋防蝕、更換浪板</h3>
                <ul className="space-y-2 text-sm text-rose-300">
                  <li>❌ 易被總廠採購比價砍價</li>
                  <li>❌ 被視為沉沒維護成本（Expense）</li>
                  <li>❌ 無法列入 ESG 績效與資本支出</li>
                </ul>
              </div>
              <div className="p-6 rounded-2xl bg-slate-900/80 border border-esg-500/40 space-y-4 shadow-glow-esg">
                <span className="text-xs font-mono text-esg-400 font-bold uppercase block">加值策略：BIM + ESG (Transformation)</span>
                <h3 className="text-xl font-bold text-white">數位雙生防災監測 ＋ S1/S2 合規帳本</h3>
                <ul className="space-y-2 text-sm text-esg-300">
                  <li>✔ 董事會層級專款支持（CAPEX）</li>
                  <li>✔ 換算氣候財務風險，避免千萬級停工損失</li>
                  <li>✔ 鎖定台蝕長期運維服務與專利塗料</li>
                </ul>
              </div>
            </div>
          </div>
        );

      case 6:
        return (
          <div className="max-w-5xl mx-auto py-8">
            <div className="text-center mb-8">
              <span className="text-xs font-mono text-ocean-400 font-bold uppercase tracking-wider">Slide 06 / 20</span>
              <h2 className="text-3xl font-extrabold text-white">三方聯合陣容：互補賦能架構</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {PARTNERS.map((p, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono text-ocean-400 font-bold block">{p.role}</span>
                    <h3 className="text-lg font-bold text-white mt-1">{p.shortName}</h3>
                    <div className="mt-3 space-y-2">
                      <span className="text-xs font-mono text-slate-400 block">核心強項：</span>
                      <ul className="text-xs text-slate-300 space-y-1">
                        {p.strengths.slice(0, 3).map((st, i) => (
                          <li key={i}>• {st}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  <div className="p-3 rounded-xl bg-white/5 text-xs text-ocean-300">
                    <span className="font-bold block text-white mb-1">負責任務：</span>
                    {p.responsibilities[0]}
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
          <div className="max-w-5xl mx-auto py-8">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-ocean-400 font-bold uppercase tracking-wider">
                Slide 0{currentSlide} / 20
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-white">{target.title}</h2>
              <p className="text-sm text-ocean-300 mt-1">{target.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <h3 className="text-sm font-bold text-ocean-400 uppercase font-mono">標的現況與規格</h3>
                {target.specs.map((sp, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-black/30 text-xs">
                    <span className="text-slate-400 block">{sp.label}</span>
                    <span className="font-bold text-white">{sp.value}</span>
                  </div>
                ))}
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <h3 className="text-sm font-bold text-amber-400 uppercase font-mono">現場痛點與危機</h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  {target.painPoints.map((pt, idx) => (
                    <li key={idx} className="p-2 rounded bg-amber-950/20 border border-amber-500/20">
                      ⚠ {pt}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                <h3 className="text-sm font-bold text-esg-400 uppercase font-mono">實施方案與台蝕切入點</h3>
                <ul className="space-y-2 text-xs text-slate-300">
                  {target.solutions.map((sol, idx) => (
                    <li key={idx} className="p-2 rounded bg-esg-950/20 border border-esg-500/20">
                      <span className="font-bold text-esg-300 block">{sol.title}</span>
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
          <div className="max-w-5xl mx-auto py-8">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-ocean-400 font-bold uppercase tracking-wider">Slide 11 / 20</span>
              <h2 className="text-3xl font-extrabold text-white">{MICROGRID_DATA.title}</h2>
              <p className="text-sm text-esg-300 mt-1">{MICROGRID_DATA.subtitle}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {MICROGRID_DATA.solutions.map((sol, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                  <span className="text-xs font-mono text-ocean-400 font-bold">解方 #{idx + 1}</span>
                  <h3 className="text-lg font-bold text-white">{sol.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{sol.desc}</p>
                  <div className="p-3 rounded-xl bg-esg-950/30 border border-esg-500/30 text-xs text-esg-300">
                    {sol.security || sol.roi || sol.capacity}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 12:
        return (
          <div className="max-w-5xl mx-auto py-8">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-ocean-400 font-bold uppercase tracking-wider">Slide 12 / 20</span>
              <h2 className="text-3xl font-extrabold text-white">中國科大 BIM 系統平臺：實體功能與視覺化</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {BIM_PLATFORM_FEATURES.map((feat, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                  <span className="text-xs font-mono text-ocean-400 font-bold uppercase">{feat.badge}</span>
                  <h3 className="text-lg font-bold text-white">{feat.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed whitespace-pre-line">{feat.desc}</p>
                  <div className="p-3 rounded-xl bg-white/5 text-xs text-esg-300 font-semibold">
                    ⭐ 現場效益：{feat.benefit}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 13:
        return (
          <div className="max-w-5xl mx-auto py-8">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-ocean-400 font-bold uppercase tracking-wider">Slide 13 / 20</span>
              <h2 className="text-3xl font-extrabold text-white">環會協會 ESG 優勢：IFRS S1/S2 與財務連結</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {ESG_IFRS_DATA.map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                  <span className="text-xs font-mono text-esg-400 font-bold uppercase">{item.standard}</span>
                  <h3 className="text-xl font-bold text-white">{item.title}</h3>
                  <div className="p-3.5 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300">
                    <span className="font-bold text-slate-200 block mb-1">準則要求：</span>
                    {item.requirements}
                  </div>
                  <div className="p-3.5 rounded-xl bg-esg-950/30 border border-esg-500/30 text-xs text-esg-200">
                    <span className="font-bold text-esg-300 block mb-1">協會具體輸出：</span>
                    {item.cemaOutput}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 14:
        return (
          <div className="max-w-5xl mx-auto py-8">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-ocean-400 font-bold uppercase tracking-wider">Slide 14 / 20</span>
              <h2 className="text-3xl font-extrabold text-white">從施工到運維的碳帳本與碳足跡計算</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CARBON_LIFECYCLE_STAGES.map((st, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                  <span className="text-xs font-mono text-ocean-400 font-bold">{st.stage} ｜ {st.isoStandard}</span>
                  <h3 className="text-base font-bold text-white">{st.title}</h3>
                  <div className="space-y-2 text-xs text-slate-300">
                    <span className="font-bold text-slate-400 block">數據採集：</span>
                    {st.dataInputs.map((inp, i) => (
                      <p key={i}>• {inp}</p>
                    ))}
                  </div>
                  <div className="p-3 rounded-xl bg-esg-950/30 border border-esg-500/20 text-xs text-esg-300">
                    <span className="font-bold block mb-1 text-white">會計產出：</span>
                    {st.carbonOutputs[0]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 15:
        return (
          <div className="max-w-5xl mx-auto py-8">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-ocean-400 font-bold uppercase tracking-wider">Slide 15 / 20</span>
              <h2 className="text-3xl font-extrabold text-white">重大效益量化：為台船創造的真實價值</h2>
              <p className="text-sm text-slate-300 mt-1">「投入 1 元，收穫多重實質利益」之投報藍圖</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {QUANTIFIED_ROI.map((roi, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 text-center space-y-3">
                  <span className="text-4xl font-black gradient-text-ocean block">{roi.metric}</span>
                  <h3 className="text-base font-bold text-white">{roi.label}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{roi.desc}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 16:
        return (
          <div className="max-w-5xl mx-auto py-8">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-ocean-400 font-bold uppercase tracking-wider">Slide 16 / 20</span>
              <h2 className="text-3xl font-extrabold text-white">針對台船高層的提案策略與溝通要點</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {STAKEHOLDER_PERSONAS.map(p => (
                <div key={p.id} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                  <h3 className="text-base font-bold text-white">{p.title}</h3>
                  <div className="p-3 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-300">
                    <span className="font-bold text-ocean-400 block mb-1">核心關注：</span>
                    {p.coreConcerns[0]}
                  </div>
                  <div className="p-3.5 rounded-xl bg-esg-950/30 border border-esg-500/30 text-xs text-esg-200 font-medium">
                    <span className="font-bold text-white block mb-1">精準提案說服話術：</span>
                    {p.pitchHook}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 17:
        return (
          <div className="max-w-5xl mx-auto py-8">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-ocean-400 font-bold uppercase tracking-wider">Slide 17 / 20</span>
              <h2 className="text-3xl font-extrabold text-white">合約架構與彈性報價模式</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {CONTRACT_PRICING_MODULES.map((m, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-4">
                  <span className="text-xs font-mono text-ocean-400 font-bold">計價模組 #{idx + 1}</span>
                  <h3 className="text-base font-bold text-white">{m.module}</h3>
                  <div className="p-3 rounded-xl bg-white/5 text-sm font-mono font-bold text-esg-300">
                    {m.price}
                  </div>
                  <p className="text-xs text-slate-400">{m.scope}</p>
                </div>
              ))}
            </div>
          </div>
        );

      case 18:
        return (
          <div className="max-w-5xl mx-auto py-8">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-ocean-400 font-bold uppercase tracking-wider">Slide 18 / 20</span>
              <h2 className="text-3xl font-extrabold text-white">專案推進時程與里程碑（Roadmap）</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {ROADMAP_PHASES.map((ph, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <span className="text-xs font-mono text-ocean-400 font-bold block">{ph.phase}</span>
                  <h3 className="text-sm font-bold text-white">{ph.duration}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{ph.title}</p>
                  <div className="p-2.5 rounded-lg bg-esg-950/20 text-xs text-esg-300 font-medium">
                    🏁 {ph.deliverables[0]}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 19:
        return (
          <div className="max-w-5xl mx-auto py-8">
            <div className="text-center mb-6">
              <span className="text-xs font-mono text-ocean-400 font-bold uppercase tracking-wider">Slide 19 / 20</span>
              <h2 className="text-3xl font-extrabold text-white">疑慮和風險應對（Q&A）</h2>
            </div>
            <div className="space-y-4">
              {RISK_QNA.map((q, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                  <h3 className="text-sm font-bold text-amber-300">Q{idx + 1}：{q.question}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{q.answer}</p>
                  <div className="text-xs text-esg-300 font-medium pt-1">
                    💡 破局策略：{q.highlight}
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 20:
        return (
          <div className="max-w-5xl mx-auto py-8 text-center space-y-8">
            <div>
              <span className="text-xs font-mono text-ocean-400 font-bold uppercase tracking-wider">Slide 20 / 20</span>
              <h2 className="text-3xl sm:text-4xl font-black text-white mt-1">結論與近期具體推進三步驟</h2>
              <p className="text-base text-esg-300 font-bold mt-2">
                成為台灣第一家兼具「重防蝕技術、BIM 港灣數位雙生、上市 ESG 合規」的智慧海洋工程先鋒！
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              {ACTION_STEPS.map(act => (
                <div key={act.step} className="p-6 rounded-2xl bg-white/5 border border-white/10 space-y-3">
                  <span className="px-3 py-1 rounded-full bg-ocean-500/20 text-ocean-300 text-xs font-mono font-bold">
                    步驟 {act.step} ｜ {act.timeframe}
                  </span>
                  <h3 className="text-base font-bold text-white">{act.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{act.description}</p>
                  <div className="p-2.5 rounded-lg bg-esg-950/30 text-xs text-esg-300 font-mono">
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-2xl p-4 sm:p-6 animate-fadeIn">
      {/* Modal Container */}
      <div className="relative w-full max-w-6xl h-[90vh] bg-[#070C1B] rounded-3xl border border-ocean-500/30 shadow-2xl flex flex-col overflow-hidden">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#090F22]">
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono font-bold px-3 py-1 rounded-full bg-ocean-500/20 text-ocean-300 border border-ocean-500/30">
              SLIDE {String(currentSlide).padStart(2, '0')} / {totalSlides}
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline-block truncate max-w-md">
              {PROPOSAL_META.title}
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-white/5 hover:bg-white/10 text-slate-300 hover:text-white transition-all"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Slide Content Area */}
        <div className="flex-1 p-6 sm:p-10 overflow-y-auto flex items-center justify-center">
          {renderSlideContent()}
        </div>

        {/* Bottom Navigation Controls */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-white/10 bg-[#090F22]">
          <button
            onClick={prevSlide}
            disabled={currentSlide === 1}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
              currentSlide === 1
                ? 'bg-white/5 text-slate-600 cursor-not-allowed'
                : 'bg-white/10 text-white hover:bg-white/20'
            }`}
          >
            <ChevronLeft className="w-4 h-4" /> 上一頁 (Prev)
          </button>

          {/* Slide dots or index */}
          <div className="flex items-center gap-1.5 overflow-x-auto max-w-[50%] py-1">
            {Array.from({ length: totalSlides }, (_, i) => i + 1).map(num => (
              <button
                key={num}
                onClick={() => setCurrentSlide(num)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${
                  currentSlide === num
                    ? 'w-6 bg-ocean-400'
                    : 'bg-white/20 hover:bg-white/40'
                }`}
                title={`跳至第 ${num} 頁`}
              />
            ))}
          </div>

          <button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold font-mono transition-all ${
              currentSlide === totalSlides
                ? 'bg-white/5 text-slate-600 cursor-not-allowed'
                : 'bg-gradient-to-r from-esg-500 to-ocean-500 text-slate-950 hover:brightness-110 shadow-glow-ocean'
            }`}
          >
            下一頁 (Next) <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
