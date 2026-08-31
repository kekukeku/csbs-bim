import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { PARTNERS } from '../../data/proposalData';
import { Anchor, Building2, BookOpenCheck, CheckCircle2 } from 'lucide-react';

export const GoldenTrianglePartners: React.FC = () => {
  const partnerIcons = [Anchor, Building2, BookOpenCheck];

  return (
    <section id="partners" className="py-20 relative bg-[#070D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="合作矩陣"
          slideTag="三方聯合團隊"
          title="黃金三角聯合陣容與"
          gradientText="專業能量分工"
          subtitle="結合營造施作、BIM 數位模型與永續會計法規能量，打造全方位工程履約陣容。"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PARTNERS.map((partner, idx) => {
            const Icon = partnerIcons[idx];
            return (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-marine-900/70 border border-white/10 flex flex-col justify-between space-y-6"
              >
                <div>
                  <div className="flex items-center gap-3 pb-3 border-b border-white/5">
                    <div className="p-2.5 rounded-xl bg-marine-950/80 text-ocean-400 border border-white/5">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="text-xs font-mono text-ocean-400 font-medium block">
                        團隊角色 0{idx + 1}
                      </span>
                      <h3 className="text-base font-bold text-white leading-tight">
                        {partner.shortName}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-marine-300 font-medium mt-3">
                    {partner.role}
                  </p>

                  <div className="mt-4 space-y-3">
                    <div>
                      <span className="text-[11px] font-mono text-marine-400 uppercase font-medium block mb-1">
                        核心實績與能量：
                      </span>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {partner.strengths.slice(0, 3).map((st, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-ocean-400 font-bold">•</span>
                            <span>{st}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <span className="text-[11px] font-mono text-marine-400 uppercase font-medium block mb-1">
                        本案主要職責：
                      </span>
                      <ul className="space-y-1 text-xs text-slate-300">
                        {partner.responsibilities.slice(0, 3).map((resp, i) => (
                          <li key={i} className="flex items-start gap-1.5">
                            <span className="text-sage-400 font-bold">•</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-marine-950/80 border border-white/5 text-xs text-marine-300">
                  <strong className="text-white block font-mono text-[11px] mb-0.5">⚖️ 責任邊界：</strong>
                  {partner.legalBoundary}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
