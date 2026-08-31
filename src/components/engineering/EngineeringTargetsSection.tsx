import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { GlowCard } from '../ui/GlowCard';
import { ENGINEERING_TARGETS } from '../../data/proposalData';
import { Shipyard3DSimulator } from './Shipyard3DSimulator';
import { Anchor, ShieldAlert, Cpu, CheckCircle2, AlertTriangle, ArrowRight, Gauge, Radio, Microscope, Ruler, Clock } from 'lucide-react';

export const EngineeringTargetsSection: React.FC = () => {
  const [activeTargetId, setActiveTargetId] = useState<string>(ENGINEERING_TARGETS[0].id);

  const activeTarget = ENGINEERING_TARGETS.find(t => t.id === activeTargetId) || ENGINEERING_TARGETS[0];

  return (
    <section id="engineering" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="六大升級亮點 02 & 04"
          slideTag="科學數據精修與空窗期施工"
          title="標的工程數位實施方案："
          gradientText="大/小船塢、海軍庫房與碼頭延壽"
          subtitle="基於科學事實修正劣化機理（大塢水位變動帶腐蝕、庫房 1,158 坪、碼頭使用 35~55 年），提出直面大塢「停塢即停營收」的輕量快拆分段工法與四大關鍵淨空檢核！"
        />

        {/* Embedded Live 3D Digital Twin Sandbox */}
        <div className="mb-16">
          <Shipyard3DSimulator />
        </div>

        {/* 4 Targets Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {ENGINEERING_TARGETS.map((target, idx) => (
            <button
              key={target.id}
              onClick={() => setActiveTargetId(target.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all duration-300 flex items-center gap-2.5 ${
                activeTargetId === target.id
                  ? 'bg-gradient-to-r from-ocean-500 to-digital-500 text-white shadow-glow-ocean scale-105'
                  : 'bg-[#0A1128] text-slate-400 hover:text-white border border-white/10 hover:border-white/20'
              }`}
            >
              <span className="font-mono text-[10px] px-2 py-0.5 rounded bg-black/40">
                標的 0{idx + 1}
              </span>
              <span>{target.title.split('：')[1]}</span>
            </button>
          ))}
        </div>

        {/* Active Target Detailed Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start animate-fadeIn">
          {/* Left Column: Target Specs, Scientific Mechanism & Commercial Reality (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            {/* Target Header Card */}
            <div className="p-6 rounded-3xl bg-[#0C152E]/90 border border-ocean-500/30 backdrop-blur-xl space-y-4">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-ocean-400">
                工程標的規格綜覽
              </span>
              <h3 className="text-2xl font-black text-white leading-tight">
                {activeTarget.title}
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-mono">
                {activeTarget.subtitle}
              </p>

              {/* Specs Table */}
              <div className="grid grid-cols-2 gap-2.5 pt-2">
                {activeTarget.specs.map((spec, i) => (
                  <div key={i} className="p-3 rounded-xl bg-black/40 border border-white/5">
                    <span className="text-[10px] font-mono text-slate-400 uppercase block">
                      {spec.label}
                    </span>
                    <span className="text-xs font-bold text-white mt-0.5 block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scientific Mechanism Card */}
            <div className="p-6 rounded-3xl bg-cyan-950/20 border border-cyan-500/30 backdrop-blur-xl space-y-3">
              <h4 className="text-sm font-bold text-cyan-300 uppercase font-mono flex items-center gap-2">
                <Microscope className="w-4 h-4 text-cyan-400" />
                科學劣化機理與事實依據
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
                {activeTarget.scientificMechanism}
              </p>
            </div>

            {/* Commercial Reality Card */}
            <div className="p-6 rounded-3xl bg-amber-950/20 border border-amber-500/30 backdrop-blur-xl space-y-3">
              <h4 className="text-sm font-bold text-amber-300 uppercase font-mono flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                直面商業現實解法
              </h4>
              <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-medium">
                {activeTarget.commercialReality}
              </p>
            </div>
          </div>

          {/* Right Column: Solutions, Clearance Checks & Sensor Specs (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            {/* Solutions Accordion / List */}
            <div className="p-6 rounded-3xl bg-[#0C152E]/90 border border-esg-500/30 backdrop-blur-xl space-y-5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-esg-400 flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                實施方案與台蝕切入點
              </span>

              <div className="space-y-3.5">
                {activeTarget.solutions.map((sol, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-black/40 border border-white/5 space-y-2 hover:border-esg-500/30 transition-all"
                  >
                    <h5 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                      <span className="w-6 h-6 rounded-lg bg-esg-500/20 text-esg-300 text-xs font-mono font-bold flex items-center justify-center">
                        {i + 1}
                      </span>
                      {sol.title}
                    </h5>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed pl-8">
                      {sol.description}
                    </p>
                    <div className="ml-8 p-2.5 rounded-lg bg-esg-950/30 text-xs text-esg-300 font-medium">
                      🎯 預期效益：{sol.benefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Depth Clearance Checks (淨空檢核) */}
            <div className="p-6 rounded-3xl bg-purple-950/20 border border-purple-500/30 backdrop-blur-xl space-y-3">
              <h4 className="text-sm font-bold text-purple-300 uppercase font-mono flex items-center gap-2">
                <Ruler className="w-4 h-4 text-purple-400" />
                三維 BIM 關鍵空間與淨空檢核項目（Clearance Checks）
              </h4>
              <div className="space-y-2">
                {activeTarget.clearanceChecks.map((chk, i) => (
                  <div key={i} className="flex items-start gap-2.5 p-2.5 rounded-xl bg-black/40 border border-white/5 text-xs text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
                    <span>{chk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sensor Array Specs */}
            <div className="p-6 rounded-3xl bg-slate-900/80 border border-white/10 backdrop-blur-xl space-y-4">
              <h4 className="text-sm font-bold text-ocean-400 uppercase font-mono flex items-center gap-2">
                <Radio className="w-4 h-4 text-ocean-400" />
                專屬感測器節點配置（Sensor Specifications）
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {activeTarget.sensorTypes.map((sensor, idx) => (
                  <div key={idx} className="p-3.5 rounded-xl bg-black/40 border border-white/5 space-y-1.5">
                    <span className="text-xs font-bold text-white block">{sensor.name}</span>
                    <span className="text-[10px] font-mono text-ocean-300 block">{sensor.location}</span>
                    <p className="text-[11px] text-slate-400 leading-tight">{sensor.purpose}</p>
                    <span className="text-[10px] font-mono text-amber-400 block pt-1 border-t border-white/5">
                      閾值：{sensor.alertThreshold}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CSBS Execution Package Callout */}
            <div className="p-5 rounded-2xl bg-gradient-to-r from-ocean-950/40 via-digital-950/40 to-esg-950/40 border border-ocean-500/30 flex items-center gap-4">
              <div className="p-3 rounded-xl bg-ocean-500/20 text-ocean-300 shrink-0">
                <Anchor className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-ocean-300 uppercase block">
                  台蝕 ＋ 台營 聯合工程統包
                </span>
                <p className="text-xs sm:text-sm text-slate-200 font-medium mt-0.5">
                  {activeTarget.csbsRole}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
