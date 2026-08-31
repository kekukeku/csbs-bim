import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { STAKEHOLDER_PERSONAS } from '../../data/proposalData';
import { Crown, Briefcase, HardHat, CheckCircle2, MessageSquareQuote, ShieldAlert } from 'lucide-react';

export const StakeholderPitchGuides: React.FC = () => {
  const [activePersonaId, setActivePersonaId] = useState<string>(STAKEHOLDER_PERSONAS[0].id);

  const personaIcons: Record<string, any> = {
    Crown,
    Briefcase,
    HardHat
  };

  const activePersona = STAKEHOLDER_PERSONAS.find(p => p.id === activePersonaId) || STAKEHOLDER_PERSONAS[0];
  const Icon = personaIcons[activePersona.avatarIcon] || Crown;

  return (
    <section id="stakeholders" className="py-20 relative bg-[#0A0F1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="提案溝通術"
          slideTag="利害關係人分層說服"
          title="針對台船各層級的"
          gradientText="分層提案溝通術"
          subtitle="針對董事長、採購工務主管與現場工安班長的不同痛點，量身打造一擊必殺的說服話術與心魔破除指南！"
        />

        {/* 3 Persona Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          {STAKEHOLDER_PERSONAS.map((p, idx) => {
            const PIcon = personaIcons[p.avatarIcon] || Crown;
            const isSelected = activePersonaId === p.id;
            return (
              <button
                key={p.id}
                onClick={() => setActivePersonaId(p.id)}
                className={`p-5 rounded-2xl border text-left transition-all duration-200 flex items-center gap-3.5 ${
                  isSelected
                    ? 'bg-marine-900 border-ocean-500/50 shadow-card-clean'
                    : 'bg-marine-950/60 border-white/5 hover:border-white/10'
                }`}
              >
                <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-ocean-950 text-ocean-300 border border-ocean-800/60' : 'bg-marine-900 text-marine-400'}`}>
                  <PIcon className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-white leading-snug">
                    {p.title.split(' / ')[0]}
                  </h4>
                  <span className="text-xs text-marine-400 line-clamp-1">
                    {p.title.split(' / ')[1] || p.title}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Active Persona Pitch Guide Panel */}
        <div className="rounded-2xl p-6 sm:p-8 bg-marine-900/80 border border-white/10 space-y-6 animate-fadeIn">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/5">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-marine-950 text-ocean-400 border border-white/5">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{activePersona.title}</h3>
                <p className="text-xs text-marine-300 mt-0.5">{activePersona.roleDescription}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Left: Concerns & Counter Fears */}
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-marine-950/60 border border-white/5 space-y-2">
                <span className="text-[11px] font-mono text-sand-300 font-semibold block uppercase">
                  🎯 該角色核心關注與痛點：
                </span>
                <ul className="space-y-1.5 text-xs text-marine-300">
                  {activePersona.coreConcerns.map((concern, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-ocean-400 font-bold">•</span>
                      <span>{concern}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-marine-950/60 border border-white/5 space-y-1.5">
                <span className="text-[11px] font-mono text-ocean-300 font-semibold block uppercase">
                  🛡️ 心魔化解策略：
                </span>
                <p className="text-xs text-marine-300 leading-relaxed">
                  {activePersona.counterFears}
                </p>
              </div>
            </div>

            {/* Right: Pitch Hook & Persuasive Details */}
            <div className="space-y-4 flex flex-col justify-between">
              <div className="p-5 rounded-xl bg-marine-950/80 border border-ocean-500/20 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-ocean-400 font-medium">
                  <MessageSquareQuote className="w-4 h-4" />
                  一擊必殺精準說服話術
                </div>
                <p className="text-sm text-slate-100 font-medium leading-relaxed italic">
                  {activePersona.pitchHook}
                </p>
              </div>

              <div className="p-4 rounded-xl bg-sage-950/40 border border-sage-800/40 space-y-2">
                <span className="text-[11px] font-mono text-sage-300 font-semibold block uppercase">
                  ✨ 說服支撐要點：
                </span>
                <ul className="space-y-1 text-xs text-sage-200">
                  {activePersona.persuasiveDetails.map((det, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-sage-400 shrink-0 mt-0.5" />
                      <span>{det}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
