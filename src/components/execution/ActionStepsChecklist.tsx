import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ACTION_STEPS } from '../../data/proposalData';
import confetti from 'canvas-confetti';
import { CheckCircle2, Circle, Sparkles, Send, Award, ArrowRight, Flag } from 'lucide-react';

export const ActionStepsChecklist: React.FC = () => {
  const [completedSteps, setCompletedSteps] = useState<number[]>([]);

  const toggleStep = (stepNum: number) => {
    if (completedSteps.includes(stepNum)) {
      setCompletedSteps(completedSteps.filter(s => s !== stepNum));
    } else {
      const next = [...completedSteps, stepNum];
      setCompletedSteps(next);
      if (next.length === ACTION_STEPS.length) {
        confetti({
          particleCount: 120,
          spread: 70,
          origin: { y: 0.6 }
        });
      }
    }
  };

  return (
    <section id="action-steps" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="結論與推進"
          slideTag="Slide 20 / 20"
          title="結論與近期"
          gradientText="具體推進三步驟（Next Steps）"
          subtitle="目標：成為台灣第一家兼具「重防蝕技術、BIM 港灣數位雙生、上市 ESG 合規」的智慧海洋工程先鋒！"
        />

        {/* 3 Action Steps Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {ACTION_STEPS.map(act => {
            const isDone = completedSteps.includes(act.step);
            return (
              <div
                key={act.step}
                onClick={() => toggleStep(act.step)}
                className={`p-6 sm:p-8 rounded-3xl border backdrop-blur-2xl cursor-pointer transition-all duration-300 flex flex-col justify-between space-y-6 ${
                  isDone
                    ? 'bg-[#0A2438] border-esg-400 shadow-glow-esg'
                    : 'bg-[#080E21]/90 border-white/10 hover:border-ocean-400/40 hover:-translate-y-1'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-4">
                    <span className="px-3 py-1 rounded-full bg-ocean-500/20 text-ocean-300 text-xs font-mono font-bold">
                      步驟 0{act.step} ｜ {act.timeframe}
                    </span>
                    <button className="text-slate-400 hover:text-white">
                      {isDone ? (
                        <CheckCircle2 className="w-6 h-6 text-esg-400" />
                      ) : (
                        <Circle className="w-6 h-6 text-slate-500" />
                      )}
                    </button>
                  </div>

                  <h3 className="text-xl font-black text-white leading-tight">
                    {act.title}
                  </h3>

                  <div className="mt-3 text-xs font-mono text-ocean-300 font-bold">
                    負責主體：{act.owner}
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mt-3">
                    {act.description}
                  </p>
                </div>

                <div className="p-3.5 rounded-2xl bg-black/40 border border-white/5 space-y-1 text-xs font-mono">
                  <span className="text-[10px] text-slate-400 uppercase font-bold block">成果產出：</span>
                  <span className="text-esg-300 font-bold">{act.deliverable}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Grand CTA Banner */}
        <div className="rounded-3xl p-8 sm:p-12 bg-gradient-to-r from-[#0C1B3D] via-[#10274B] to-[#0A303A] border border-ocean-500/40 shadow-glow-ocean text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-esg-500/20 text-esg-300 border border-esg-500/30 text-xs font-mono font-bold">
            <Sparkles className="w-4 h-4" /> 啟動首批示範案
          </div>

          <h3 className="text-2xl sm:text-4xl font-black text-white leading-snug">
            攜手台蝕 × 中科大 × 環會協會
            <br />
            共同開創台灣海洋工程數位永續新紀元！
          </h3>

          <p className="text-xs sm:text-sm text-slate-300 max-w-2xl mx-auto leading-relaxed">
            立即敲定首批示範案：<strong className="text-white">「小塢先導位移監測 ＋ 海軍新庫房智慧加值」</strong>，以最低風險快速啟動，奠定長期長約定價權！
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-4">
            <a
              href="mailto:contact@csbs.kuo.cc.cd"
              className="px-8 py-4 rounded-2xl bg-gradient-to-r from-esg-500 to-ocean-500 text-slate-950 font-black text-sm hover:brightness-110 shadow-glow-esg hover:scale-105 transition-all flex items-center gap-2"
            >
              <Send className="w-4 h-4" />
              <span>發起閉門戰略演練會議</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
