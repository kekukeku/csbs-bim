import React from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ROADMAP_PHASES } from '../../data/proposalData';
import { Calendar, CheckCircle2, Flag, ArrowRight, Sparkles } from 'lucide-react';

export const ProjectRoadmapTimeline: React.FC = () => {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="專案推動時程"
          slideTag="Slide 18 / 20"
          title="專案推進時程與里程碑："
          gradientText="四階段 Roadmap"
          subtitle="分階段推進，讓台船在短時間內看到成效，降低初期決策門檻，逐步擴大為全廠區港灣數位雙生！"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {ROADMAP_PHASES.map((phase, idx) => (
            <div
              key={idx}
              className="p-6 rounded-3xl bg-[#091129]/90 border border-white/10 backdrop-blur-2xl flex flex-col justify-between space-y-6 hover:border-ocean-400/40 transition-all duration-300 relative group"
            >
              <div>
                {/* Phase Number Badge */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10 mb-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-mono font-bold border ${phase.badgeColor}`}>
                    {phase.phase}
                  </span>
                  <span className="text-xs font-mono text-slate-500 font-bold">0{idx + 1}</span>
                </div>

                <h3 className="text-lg font-bold text-white mb-2 leading-tight">
                  {phase.duration}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed mb-4">
                  {phase.title}
                </p>

                {/* Key Actions */}
                <div className="space-y-2 pt-2 border-t border-white/5">
                  <span className="text-[11px] font-mono font-bold text-slate-400 uppercase block">
                    關鍵工作重點：
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-300">
                    {phase.keyActions.map((act, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-ocean-400 font-bold">•</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Deliverables */}
              <div className="p-3.5 rounded-2xl bg-black/40 border border-esg-500/20 text-xs text-esg-300 space-y-1">
                <span className="text-[10px] font-mono text-esg-400 uppercase font-bold flex items-center gap-1">
                  <Flag className="w-3 h-3" /> 里程碑成果產出：
                </span>
                <p className="font-semibold text-slate-100">{phase.deliverables[0]}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
