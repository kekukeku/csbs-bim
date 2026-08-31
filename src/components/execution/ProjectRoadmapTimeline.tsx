import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ROADMAP_PHASES } from '../../data/proposalData';
import { Calendar, CheckCircle2, ArrowRight } from 'lucide-react';

export const ProjectRoadmapTimeline: React.FC = () => {
  return (
    <section id="roadmap" className="py-20 relative bg-[#070D1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="推動期程"
          slideTag="五階段推進甘特圖"
          title="專案推進時程與"
          gradientText="關鍵里程碑 (Roadmap)"
          subtitle="期程自 115 年第 4 季前置準備起算，嚴格對應 G01~G04 決策 Gate，確保各階段成果驗收放行後再推進！"
        />

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {ROADMAP_PHASES.map((phase, idx) => (
            <div
              key={idx}
              className="p-5 rounded-2xl bg-marine-900/70 border border-white/10 flex flex-col justify-between space-y-4"
            >
              <div>
                <span className="text-[11px] font-mono text-ocean-400 font-semibold block mb-1">
                  {phase.phase.split('（')[0]}
                </span>
                <span className="text-xs font-mono text-marine-400 block mb-2">
                  {phase.phase.includes('（') ? `（${phase.phase.split('（')[1]}` : ''}
                </span>

                <h4 className="text-xs font-bold text-white leading-snug mb-3">
                  {phase.duration}
                </h4>

                <div className="space-y-2 text-xs">
                  <span className="text-[10px] font-mono text-marine-400 uppercase font-medium block">
                    主要工作：
                  </span>
                  <ul className="space-y-1 text-marine-300">
                    {phase.keyActions.slice(0, 3).map((act, i) => (
                      <li key={i} className="flex items-start gap-1.5 leading-snug">
                        <span className="text-ocean-400 font-bold">•</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="p-2.5 rounded-lg bg-sage-950/40 border border-sage-800/40 text-[11px] text-sage-300 font-medium">
                🏁 交付：{phase.deliverables[0]}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
