import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { BIM_PLATFORM_FEATURES } from '../../data/proposalData';
import { Boxes, Smartphone, BellRing, ClipboardCheck, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const BimWebPlatform: React.FC = () => {
  const featureIcons = [Boxes, ClipboardCheck, BellRing];

  return (
    <section id="tech-platform" className="py-20 relative bg-[#0A0F1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="數位雙生平臺"
          slideTag="中科大技術研發"
          title="BIM 輕量化 Web 平臺："
          gradientText="現況基線 ＋ 淨空檢核 ＋ 48h 問題單"
          subtitle="無需安裝複雜軟體，透過一般瀏覽器或手機平板即可檢視 3D 港灣模型，即時聯動 Sensor 數據與工單回報。"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {BIM_PLATFORM_FEATURES.map((feature, idx) => {
            const Icon = featureIcons[idx];
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-marine-900/70 border border-white/10 flex flex-col justify-between space-y-5"
              >
                <div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/5">
                    <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-medium bg-ocean-950/80 text-ocean-300 border border-ocean-800/50">
                      {feature.badge}
                    </span>
                    <Icon className="w-5 h-5 text-ocean-400" />
                  </div>

                  <h3 className="text-base font-bold text-white mt-3 leading-snug">
                    {feature.title}
                  </h3>

                  <p className="text-xs text-marine-300 leading-relaxed mt-2">
                    {feature.desc}
                  </p>
                </div>

                <div className="p-3 rounded-xl bg-sage-950/40 border border-sage-800/40 text-xs text-sage-300">
                  <strong className="text-slate-200 block font-mono text-[11px] mb-0.5">現場效益：</strong>
                  {feature.benefit}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
