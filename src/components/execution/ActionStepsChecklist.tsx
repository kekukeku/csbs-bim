import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ACTION_STEPS } from '../../data/proposalData';
import { CheckCircle2, Circle, ArrowRight, Sparkles, Send } from 'lucide-react';
import confetti from 'canvas-confetti';

export const ActionStepsChecklist: React.FC = () => {
  const [checkedSteps, setCheckedSteps] = useState<Record<number, boolean>>({
    1: true,
    2: false,
    3: false
  });

  const toggleStep = (stepNum: number) => {
    const nextState = {
      ...checkedSteps,
      [stepNum]: !checkedSteps[stepNum]
    };
    setCheckedSteps(nextState);

    // Trigger subtle confetti if all steps checked
    if (Object.values(nextState).every(Boolean)) {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#38BDF8', '#0284C7', '#10B981']
      });
    }
  };

  return (
    <section id="action-steps" className="py-20 relative bg-[#070D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="結論與行動"
          slideTag="近期三大推進步驟"
          title="推動港灣工程升級："
          gradientText="近期具體推進三步驟"
          subtitle="低風險啟動，以「五大前提釐清 ➔ 閉門戰略演練 ➔ 正式提報董事會」三步走，爭取首批示範案！"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-12">
          {ACTION_STEPS.map((step) => {
            const isChecked = checkedSteps[step.step];
            return (
              <div
                key={step.step}
                onClick={() => toggleStep(step.step)}
                className={`p-6 rounded-2xl border cursor-pointer transition-all duration-200 flex flex-col justify-between space-y-5 ${
                  isChecked
                    ? 'bg-marine-900/90 border-sage-500/50 shadow-card-clean'
                    : 'bg-marine-950/60 border-white/5 hover:border-white/10'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="text-xs font-mono font-medium text-ocean-400">
                      步驟 0{step.step} ｜ {step.timeframe}
                    </span>
                    <button className="text-slate-400 hover:text-white">
                      {isChecked ? (
                        <CheckCircle2 className="w-5 h-5 text-sage-400" />
                      ) : (
                        <Circle className="w-5 h-5 text-marine-600" />
                      )}
                    </button>
                  </div>

                  <h4 className="text-base font-bold text-white mt-3 leading-snug">
                    {step.title}
                  </h4>

                  <div className="mt-2 text-xs font-mono text-sand-300">
                    主責：{step.owner}
                  </div>

                  <p className="text-xs text-marine-300 leading-relaxed mt-2">
                    {step.description}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-marine-950/80 border border-white/5 text-xs text-sage-300 font-mono">
                  成果：{step.deliverable}
                </div>
              </div>
            );
          })}
        </div>

        {/* Action Completion Status Card */}
        <div className="rounded-2xl p-6 sm:p-8 bg-marine-900/80 border border-white/10 max-w-3xl mx-auto text-center space-y-4">
          <h3 className="text-lg font-bold text-white">
            攜手成為台灣第一家兼具「重防蝕 ＋ BIM 數位雙生 ＋ 上市 ESG 治理」的港灣工程先鋒！
          </h3>
          <p className="text-xs sm:text-sm text-marine-300 max-w-xl mx-auto leading-relaxed">
            我們已完成全套展示模型與簡報素材，隨時可配合台蝕團隊啟動五大前提協調與閉門戰略演練。
          </p>
          <div className="pt-2">
            <a
              href="mailto:contact@csbs.kkuo.cc.cd"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold bg-ocean-600 hover:bg-ocean-500 text-white shadow-card-clean transition-all"
            >
              <Send className="w-4 h-4" />
              <span>聯繫聯合團隊啟動首期協調</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
