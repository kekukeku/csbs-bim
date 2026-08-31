import React, { useState } from 'react';
import { SectionHeading } from '../ui/SectionHeading';
import { ENGINEERING_TARGETS } from '../../data/proposalData';
import { Shipyard3DSimulator } from './Shipyard3DSimulator';
import { Anchor, ShieldAlert, Cpu, CheckCircle2, Microscope, Ruler, Clock, Radio } from 'lucide-react';

export const EngineeringTargetsSection: React.FC = () => {
  const [activeTargetId, setActiveTargetId] = useState<string>(ENGINEERING_TARGETS[0].id);
  const activeTarget = ENGINEERING_TARGETS.find(t => t.id === activeTargetId) || ENGINEERING_TARGETS[0];

  return (
    <section id="engineering" className="py-20 relative bg-[#0A0F1D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="標的工程"
          slideTag="科學數據與實施方案"
          title="標的工程數位實施方案："
          gradientText="大/小船塢、海軍庫房與碼頭延壽"
          subtitle="基於科學事實修正劣化機理（大塢水位變動帶腐蝕、庫房 1,158 坪、碼頭使用 35~55 年），提出直面大塢「停塢即停營收」的輕量快拆分段工法與四大關鍵淨空檢核！"
        />

        {/* Embedded Live 3D Digital Twin Sandbox */}
        <div className="mb-12">
          <Shipyard3DSimulator />
        </div>

        {/* 4 Targets Clean Tab Navigation */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
          {ENGINEERING_TARGETS.map((target, idx) => (
            <button
              key={target.id}
              onClick={() => setActiveTargetId(target.id)}
              className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 flex items-center gap-2 ${
                activeTargetId === target.id
                  ? 'bg-ocean-600 text-white shadow-card-clean'
                  : 'bg-marine-900/80 text-marine-400 hover:text-white border border-white/5'
              }`}
            >
              <span className="font-mono text-[10px] px-1.5 py-0.5 rounded bg-black/40">
                0{idx + 1}
              </span>
              <span>{target.title.split('：')[1]}</span>
            </button>
          ))}
        </div>

        {/* Active Target Detailed Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start animate-fadeIn">
          {/* Left Column: Target Specs, Scientific Mechanism & Commercial Reality (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            {/* Target Header Card */}
            <div className="p-6 rounded-2xl bg-marine-900/80 border border-white/10 space-y-3">
              <span className="text-xs font-mono font-medium text-ocean-400">
                工程標的規格綜覽
              </span>
              <h3 className="text-xl font-bold text-white leading-tight">
                {activeTarget.title}
              </h3>
              <p className="text-xs text-marine-300 font-mono">
                {activeTarget.subtitle}
              </p>

              {/* Specs Table */}
              <div className="grid grid-cols-2 gap-2 pt-2">
                {activeTarget.specs.map((spec, i) => (
                  <div key={i} className="p-2.5 rounded-lg bg-marine-950/80 border border-white/5">
                    <span className="text-[10px] font-mono text-marine-400 uppercase block">
                      {spec.label}
                    </span>
                    <span className="text-xs font-semibold text-white mt-0.5 block">
                      {spec.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Scientific Mechanism Card */}
            <div className="p-5 rounded-2xl bg-marine-900/60 border border-white/10 space-y-2">
              <h4 className="text-xs font-bold text-ocean-300 uppercase font-mono flex items-center gap-1.5">
                <Microscope className="w-4 h-4 text-ocean-400" />
                科學劣化機理與事實依據
              </h4>
              <p className="text-xs text-marine-300 leading-relaxed">
                {activeTarget.scientificMechanism}
              </p>
            </div>

            {/* Commercial Reality Card */}
            <div className="p-5 rounded-2xl bg-marine-900/60 border border-white/10 space-y-2">
              <h4 className="text-xs font-bold text-sand-300 uppercase font-mono flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-sand-400" />
                直面商業現實解法
              </h4>
              <p className="text-xs text-slate-200 leading-relaxed font-medium">
                {activeTarget.commercialReality}
              </p>
            </div>
          </div>

          {/* Right Column: Solutions, Clearance Checks & Sensor Specs (7 cols) */}
          <div className="lg:col-span-7 space-y-4">
            {/* Solutions List */}
            <div className="p-6 rounded-2xl bg-marine-900/80 border border-white/10 space-y-4">
              <span className="text-xs font-mono font-medium text-sage-400 flex items-center gap-1.5">
                <Cpu className="w-4 h-4" />
                實施方案與台蝕切入點
              </span>

              <div className="space-y-3">
                {activeTarget.solutions.map((sol, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-marine-950/60 border border-white/5 space-y-1.5"
                  >
                    <h5 className="text-xs sm:text-sm font-semibold text-white flex items-center gap-2">
                      <span className="w-5 h-5 rounded bg-sage-950 text-sage-300 text-[10px] font-mono font-bold flex items-center justify-center border border-sage-800">
                        {i + 1}
                      </span>
                      {sol.title}
                    </h5>
                    <p className="text-xs text-marine-300 leading-relaxed pl-7">
                      {sol.description}
                    </p>
                    <div className="ml-7 p-2 rounded bg-sage-950/40 text-xs text-sage-300 font-medium">
                      🎯 預期效益：{sol.benefit}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Depth Clearance Checks (淨空檢核) */}
            <div className="p-5 rounded-2xl bg-marine-900/60 border border-white/10 space-y-2.5">
              <h4 className="text-xs font-bold text-ocean-300 uppercase font-mono flex items-center gap-1.5">
                <Ruler className="w-4 h-4 text-ocean-400" />
                三維 BIM 關鍵空間與淨空檢核項目（Clearance Checks）
              </h4>
              <div className="space-y-1.5">
                {activeTarget.clearanceChecks.map((chk, i) => (
                  <div key={i} className="flex items-start gap-2 p-2 rounded-lg bg-marine-950/80 border border-white/5 text-xs text-slate-200">
                    <CheckCircle2 className="w-3.5 h-3.5 text-ocean-400 shrink-0 mt-0.5" />
                    <span>{chk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Sensor Specs */}
            <div className="p-5 rounded-2xl bg-marine-900/60 border border-white/10 space-y-3">
              <h4 className="text-xs font-bold text-marine-300 uppercase font-mono flex items-center gap-1.5">
                <Radio className="w-4 h-4 text-ocean-400" />
                專屬感測器節點配置（Sensor Specifications）
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                {activeTarget.sensorTypes.map((sensor, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-marine-950/80 border border-white/5 space-y-1">
                    <span className="text-xs font-semibold text-white block">{sensor.name}</span>
                    <span className="text-[10px] font-mono text-ocean-400 block">{sensor.location}</span>
                    <p className="text-[11px] text-marine-400 leading-tight">{sensor.purpose}</p>
                    <span className="text-[10px] font-mono text-sand-300 block pt-1 border-t border-white/5">
                      閾值：{sensor.alertThreshold}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* CSBS Execution Package */}
            <div className="p-4 rounded-xl bg-marine-950/80 border border-white/10 flex items-center gap-3.5">
              <div className="p-2 rounded-lg bg-ocean-950 text-ocean-400 shrink-0 border border-ocean-800/50">
                <Anchor className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-medium text-ocean-400 uppercase block">
                  台蝕 ＋ 台營 聯合工程統包
                </span>
                <p className="text-xs text-slate-200 font-medium mt-0.5">
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
