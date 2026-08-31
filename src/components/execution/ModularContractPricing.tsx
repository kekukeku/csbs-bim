import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { CONTRACT_PRICING_MODULES } from '../../data/proposalData';
import { FileText, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';

export const ModularContractPricing: React.FC = () => {
  return (
    <section id="pricing" className="py-20 relative bg-[#0A0F1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="商務架構"
          slideTag="模組化計價與分包"
          title="模組化契約與"
          gradientText="彈性計價架構"
          subtitle="採「工程主約 ＋ 技術分包」架構，主標依工程單價計價，數位治理服務拆分為四道 Gate 階段獨立編列，避免採購核銷爭議。"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-5xl mx-auto">
          {CONTRACT_PRICING_MODULES.map((item, idx) => (
            <div
              key={idx}
              className="p-6 rounded-2xl bg-marine-900/70 border border-white/10 space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-2.5 border-b border-white/5">
                  <span className="text-xs font-mono font-medium text-ocean-400">
                    模組 0{idx + 1}
                  </span>
                  <span className="text-xs font-mono font-semibold text-sand-300">
                    {item.price}
                  </span>
                </div>

                <h4 className="text-sm font-bold text-white mt-2 leading-snug">
                  {item.module}
                </h4>

                <p className="text-xs text-marine-300 leading-relaxed mt-2">
                  {item.scope}
                </p>
              </div>

              <div className="p-2.5 rounded-lg bg-sage-950/40 border border-sage-800/40 text-xs text-sage-300 font-medium">
                🎯 商業效益：{item.benefit}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
