import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { RISK_QNA } from '../../data/proposalData';
import { HelpCircle, ChevronDown, ChevronUp, Sparkles, CheckCircle2, ShieldCheck } from 'lucide-react';

export const RiskQnAAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 relative bg-gradient-to-b from-transparent via-[#091128]/60 to-transparent">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="疑慮與風險應對"
          slideTag="Slide 19 / 20"
          title="常見疑慮與應對："
          gradientText="專業解法 Q&A"
          subtitle="針對採購追加預算、惡劣鹽霧水下感測器耐用度與台船傳統比價砍價三大實務挑戰，提出具備完全說服力之解套方案！"
        />

        <div className="space-y-4">
          {RISK_QNA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`rounded-3xl border backdrop-blur-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'bg-[#0E1E42]/90 border-ocean-400 shadow-glow-ocean'
                    : 'bg-[#080E21]/80 border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggleIndex(idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="w-8 h-8 rounded-xl bg-ocean-500/20 text-ocean-300 font-black font-mono flex items-center justify-center text-sm shrink-0 border border-ocean-500/30">
                      Q{idx + 1}
                    </span>
                    <span className="text-base sm:text-lg font-bold text-white leading-snug">
                      {item.question}
                    </span>
                  </div>
                  <div className="p-2 rounded-xl bg-white/5 text-slate-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-2 border-t border-white/10 space-y-4 animate-fadeIn">
                    <div className="p-4 rounded-2xl bg-black/40 border border-white/5 text-xs sm:text-sm text-slate-300 leading-relaxed">
                      <strong className="text-white block mb-1">聯合團隊專業解答：</strong>
                      {item.answer}
                    </div>

                    <div className="p-4 rounded-2xl bg-esg-950/40 border border-esg-500/30 text-xs sm:text-sm text-esg-200 flex items-start gap-2.5 font-medium">
                      <Sparkles className="w-4 h-4 text-esg-400 shrink-0 mt-0.5" />
                      <div>
                        <strong className="text-white block font-mono text-xs">破局核心亮點：</strong>
                        {item.highlight}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
