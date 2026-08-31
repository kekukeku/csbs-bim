import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowCard } from '../ui/GlowCard';
import { STAKEHOLDER_PERSONAS } from '../../data/proposalData';
import { Crown, Briefcase, HardHat, Sparkles, CheckCircle2, MessageSquare, ShieldAlert } from 'lucide-react';

export const StakeholderPitchGuides: React.FC = () => {
  const [activePersonaId, setActivePersonaId] = useState<string>(STAKEHOLDER_PERSONAS[0].id);

  const icons = {
    Crown: Crown,
    Briefcase: Briefcase,
    HardHat: HardHat
  };

  const activePersona = STAKEHOLDER_PERSONAS.find(p => p.id === activePersonaId) || STAKEHOLDER_PERSONAS[0];
  const ActiveIcon = icons[activePersona.avatarIcon as keyof typeof icons] || Crown;

  return (
    <section id="stakeholders" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="分層溝通術"
          slideTag="Slide 16 / 20"
          title="針對台船高層的"
          gradientText="提案策略與溝通要點"
          subtitle="台蝕與台營拜訪台船關鍵決策者（蔡董事長、蕭課長及現場班長）時，採用以下精準分層溝通話術，直擊核心痛點與破除顧慮！"
        />

        {/* 3 Persona Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
          {STAKEHOLDER_PERSONAS.map(p => {
            const Icon = icons[p.avatarIcon as keyof typeof icons] || Crown;
            const isSelected = p.id === activePersonaId;
            return (
              <button
                key={p.id}
                onClick={() => setActivePersonaId(p.id)}
                className={`p-5 rounded-3xl border text-left transition-all duration-300 flex items-center gap-4 ${
                  isSelected
                    ? 'bg-[#0E1E42] border-ocean-400 shadow-glow-ocean scale-105'
                    : 'bg-[#080E21]/80 border-white/10 hover:border-white/20'
                }`}
              >
                <div className={`p-3 rounded-2xl bg-gradient-to-tr ${p.color} text-slate-950 shrink-0 font-bold`}>
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-base font-bold text-white leading-snug">{p.title.split(' / ')[0]}</h4>
                  <p className="text-xs text-slate-400 mt-0.5 line-clamp-1">{p.title.split(' / ')[1]}</p>
                </div>
              </button>
            );
          })}
        </div>

        {/* Selected Persona Deep Dive Card */}
        <div className="rounded-3xl p-6 sm:p-10 bg-[#091129]/90 border border-ocean-500/30 backdrop-blur-2xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
          {/* Left: Persona Concerns & Fears (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3 pb-4 border-b border-white/10">
              <div className={`p-3 rounded-2xl bg-gradient-to-tr ${activePersona.color} text-slate-950`}>
                <ActiveIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-ocean-400">
                  對話對象角色畫像
                </span>
                <h3 className="text-xl font-black text-white">{activePersona.title}</h3>
              </div>
            </div>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-mono">
              {activePersona.roleDescription}
            </p>

            <div className="p-5 rounded-2xl bg-black/40 border border-white/5 space-y-3">
              <span className="text-xs font-mono text-amber-400 uppercase font-bold flex items-center gap-1.5">
                <ShieldAlert className="w-4 h-4" />
                對象核心關注重點（內心考量）：
              </span>
              <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
                {activePersona.coreConcerns.map((c, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-amber-400 font-bold">•</span>
                    <span>{c}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-purple-950/30 border border-purple-500/20 text-xs text-purple-200">
              <strong className="block mb-1 text-purple-300 font-mono">破除內心抗拒話術：</strong>
              {activePersona.counterFears}
            </div>
          </div>

          {/* Right: Golden Pitch Hook & Persuasive Details (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* The One-Liner Golden Hook */}
            <div className="p-6 rounded-2xl bg-gradient-to-r from-ocean-950/60 via-purple-950/60 to-esg-950/60 border border-ocean-500/40 shadow-glow-ocean space-y-3">
              <span className="text-xs font-mono font-bold text-ocean-300 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles className="w-4 h-4 text-esg-400" />
                精準提案說服一擊必殺話術（The Pitch Hook）：
              </span>
              <blockquote className="text-base sm:text-lg font-bold text-white leading-relaxed italic border-l-4 border-ocean-400 pl-4 py-1">
                {activePersona.pitchHook}
              </blockquote>
            </div>

            {/* Persuasive Concrete Points */}
            <div className="p-6 rounded-2xl bg-black/40 border border-white/10 space-y-3">
              <span className="text-xs font-mono font-bold text-esg-400 uppercase tracking-wider block">
                現場推演與深度說服要點：
              </span>
              <div className="space-y-3">
                {activePersona.persuasiveDetails.map((detail, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-3 p-3 rounded-xl bg-white/5 border border-white/5 text-xs sm:text-sm text-slate-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-esg-400 shrink-0 mt-0.5" />
                    <span>{detail}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
