import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { RISK_QNA } from '../../data/proposalData';
import { HelpCircle, ChevronDown, ChevronUp, CheckCircle2 } from 'lucide-react';

export const RiskQnAAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative bg-[#0A0F1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="實務疑慮解答"
          slideTag="風險防禦手冊"
          title="常見實務疑慮與"
          gradientText="專業應對策略 (Q&A)"
          subtitle="針對預算追加、感測器海洋鹽霧耐久度、及採購比價防禦策略的完整解答。"
        />

        <div className="max-w-4xl mx-auto space-y-3">
          {RISK_QNA.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen
                    ? 'bg-marine-900/90 border-ocean-500/30 shadow-card-clean'
                    : 'bg-marine-950/60 border-white/5 hover:border-white/10'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-6 h-6 rounded-lg bg-marine-800 text-ocean-400 text-xs font-mono font-bold flex items-center justify-center shrink-0">
                      Q{index + 1}
                    </span>
                    <h3 className="text-sm sm:text-base font-bold text-white leading-snug">
                      {item.question}
                    </h3>
                  </div>

                  <div className="p-1 rounded-lg bg-white/5 text-marine-400 shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 space-y-3 animate-fadeIn">
                    <div className="p-4 rounded-xl bg-marine-950/80 border border-white/5 text-xs sm:text-sm text-marine-300 leading-relaxed">
                      {item.answer}
                    </div>

                    <div className="p-3 rounded-lg bg-sage-950/40 border border-sage-800/40 text-xs text-sage-300 font-medium">
                      💡 核心要點：{item.highlight}
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
