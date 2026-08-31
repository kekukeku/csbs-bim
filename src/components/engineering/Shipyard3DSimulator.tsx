import React, { useState, useEffect, useRef } from 'react';
import { Shield, AlertTriangle, CheckCircle2, Activity, Play, RotateCcw, Cpu, Layers, Radio } from 'lucide-react';

interface SensorNode {
  id: string;
  name: string;
  location: string;
  type: string;
  x: number;
  y: number;
  status: 'normal' | 'warning' | 'danger';
  value: string;
  unit: string;
  normalRange: string;
  threshold: string;
  detail: string;
}

const INITIAL_SENSORS: SensorNode[] = [
  {
    id: 's1',
    name: '大塢光纖傾斜儀 (Tiltmeter-01)',
    location: '大塢 950m 碼頭掏空側 (450m 斷面)',
    type: '結構沉陷監測',
    x: 280,
    y: 190,
    status: 'normal',
    value: '0.012',
    unit: 'deg',
    normalRange: '< 0.03 deg',
    threshold: '> 0.05 deg',
    detail: '監測大塢南側碼頭重載吊車行駛引發之基底剪力與微小沉降，光纖連續採樣。'
  },
  {
    id: 's2',
    name: '大塢壁裂位移計 (Displacement-03)',
    location: '大塢 401~950m 未防滲段塢壁',
    type: '裂縫張開量監測',
    x: 480,
    y: 220,
    status: 'normal',
    value: '0.08',
    unit: 'mm',
    normalRange: '< 0.15 mm',
    threshold: '> 0.30 mm',
    detail: '高精度差動變壓微米級位移計，量測混凝土歷史貫穿裂縫在進出塢水壓交替下的動態張合。'
  },
  {
    id: 's3',
    name: '小塢動態應變片 (StrainGauge-02)',
    location: '小塢 275m 靠泊防舷材後壁',
    type: '船舶靠泊碰撞衝擊',
    x: 680,
    y: 290,
    status: 'normal',
    value: '142',
    unit: 'με',
    normalRange: '< 250 με',
    threshold: '> 350 με',
    detail: '量測修船靠泊瞬間剪應力與微震動，連續累積疲勞衰減模型。'
  },
  {
    id: 's4',
    name: '小塢水下鋼筋電位計 (Half-cell-01)',
    location: '小塢 8米常時浸水處 (深水底板)',
    type: '海水鹽害腐蝕電位',
    x: 750,
    y: 350,
    status: 'normal',
    value: '-185',
    unit: 'mV (CSE)',
    normalRange: '> -200 mV',
    threshold: '< -350 mV',
    detail: '監測海水氯離子侵蝕鈍化膜活性，在混凝土鋼筋鏽蝕膨脹提前 1~2 年預警。'
  },
  {
    id: 's5',
    name: '海軍新庫房溫濕能管 (SmartHVAC-01)',
    location: '海軍機敏庫房 2F 潛艦設備區',
    type: '溫濕度與智慧用電',
    x: 320,
    y: 390,
    status: 'normal',
    value: '22.4°C / 48%',
    unit: 'RH',
    normalRange: '20~24°C / <55%',
    threshold: '> 60% RH',
    detail: '智慧多溫濕度分區控制，串接屋頂太陽能微電網自發自用。'
  },
  {
    id: 's6',
    name: '3號碼頭水下陽極監測 (Cathodic-04)',
    location: '3號碼頭水下鋼板樁潮差區',
    type: '陰極保護連續電位',
    x: 540,
    y: 110,
    status: 'normal',
    value: '-940',
    unit: 'mV (Ag/AgCl)',
    normalRange: '-850 ~ -1100 mV',
    threshold: '未達 -800 mV',
    detail: '水下陽極板消耗連續自動監測，免除傳統半年一次人工潛水量測盲區。'
  }
];

export const Shipyard3DSimulator: React.FC = () => {
  const [sensors, setSensors] = useState<SensorNode[]>(INITIAL_SENSORS);
  const [selectedSensor, setSelectedSensor] = useState<SensorNode>(INITIAL_SENSORS[0]);
  const [simMode, setSimMode] = useState<'normal' | 'warning' | 'danger'>('normal');
  const [waveformData, setWaveformData] = useState<number[]>(Array.from({ length: 24 }, () => Math.random() * 20 + 40));
  const [logMessages, setLogMessages] = useState<string[]>([
    '[09:00:00] BIM 數位雙生港灣感知網路已連線（6 處核心監控節點正常）',
    '[09:00:05] 大塢光纖傾斜儀連線平穩：0.012 deg（正常閾值 <0.03 deg）',
    '[09:00:10] 小塢 8m 水下腐蝕電位正常：-185 mV (CSE)'
  ]);

  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Trigger Simulation Modes
  const handleSimulate = (mode: 'normal' | 'warning' | 'danger') => {
    setSimMode(mode);
    const now = new Date().toLocaleTimeString();

    if (mode === 'normal') {
      setSensors(INITIAL_SENSORS);
      setSelectedSensor(INITIAL_SENSORS[0]);
      setLogMessages(prev => [
        `[${now}] 【系統復原】所有感測器節點已回復常態安全範圍（綠燈正常運行）`,
        ...prev.slice(0, 5)
      ]);
    } else if (mode === 'warning') {
      const updated = sensors.map(s => {
        if (s.id === 's1') return { ...s, status: 'warning' as const, value: '0.042' };
        if (s.id === 's3') return { ...s, status: 'warning' as const, value: '298' };
        return { ...s, status: 'normal' as const };
      });
      setSensors(updated);
      setSelectedSensor(updated[0]);
      setLogMessages(prev => [
        `[${now}] 【黃燈初級預警】大塢 450m 碼頭傾斜達 0.042 deg！已自動發送 LINE/SMS 通報工務主管與現場巡檢班長查核`,
        `[${now}] 【黃燈初級預警】小塢靠泊瞬間應變 298 με，接近安全上限`,
        ...prev.slice(0, 4)
      ]);
    } else if (mode === 'danger') {
      const updated = sensors.map(s => {
        if (s.id === 's1') return { ...s, status: 'danger' as const, value: '0.068' };
        if (s.id === 's2') return { ...s, status: 'danger' as const, value: '0.45' };
        if (s.id === 's4') return { ...s, status: 'warning' as const, value: '-380' };
        return s;
      });
      setSensors(updated);
      setSelectedSensor(updated[0]);
      setLogMessages(prev => [
        `[${now}] 🚨【紅燈超標緊急警報】大塢碼頭傾斜 0.068 deg 且壁裂張開達 0.45 mm！觸發重大沉陷掏空警報！`,
        `[${now}] 🚨【自動聯防】已同步啟動台船工安處緊急通報、推播工單至台蝕/中科大 BIM 決策中心，建議暫停 80 噸重型吊車通行！`,
        ...prev.slice(0, 3)
      ]);
    }
  };

  // Update waveform continuously
  useEffect(() => {
    const interval = setInterval(() => {
      setWaveformData(prev => {
        let base = 40;
        let jitter = 15;
        if (simMode === 'warning') {
          base = 65;
          jitter = 25;
        } else if (simMode === 'danger') {
          base = 85;
          jitter = 30;
        }
        const nextVal = Math.min(100, Math.max(10, Math.round(base + (Math.random() - 0.5) * jitter)));
        return [...prev.slice(1), nextVal];
      });
    }, 600);
    return () => clearInterval(interval);
  }, [simMode]);

  // Canvas drawing for Isometric Shipyard Twin
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let tick = 0;

    const render = () => {
      tick++;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const w = canvas.width;
      const h = canvas.height;

      // Background grid lines
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.04)';
      ctx.lineWidth = 1;
      for (let x = 0; x < w; x += 40) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, h);
        ctx.stroke();
      }
      for (let y = 0; y < h; y += 40) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(w, y);
        ctx.stroke();
      }

      // Sea / Basin representation
      const seaGrad = ctx.createLinearGradient(0, 0, w, h);
      seaGrad.addColorStop(0, 'rgba(6, 30, 60, 0.6)');
      seaGrad.addColorStop(1, 'rgba(2, 18, 38, 0.9)');
      ctx.fillStyle = seaGrad;
      ctx.fillRect(0, 0, w, h);

      // Large Dry Dock (950m x 92m) Isometric polygon
      ctx.save();
      ctx.fillStyle = '#0E1D3B';
      ctx.strokeStyle = 'rgba(0, 240, 255, 0.4)';
      ctx.lineWidth = 2;

      // Draw Dock Floor
      ctx.beginPath();
      ctx.moveTo(160, 160);
      ctx.lineTo(580, 160);
      ctx.lineTo(520, 260);
      ctx.lineTo(100, 260);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Dock Walls (Depth)
      ctx.fillStyle = '#091326';
      ctx.beginPath();
      ctx.moveTo(100, 260);
      ctx.lineTo(520, 260);
      ctx.lineTo(520, 280);
      ctx.lineTo(100, 280);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // Label: 950m Large Dock
      ctx.fillStyle = 'rgba(0, 240, 255, 0.8)';
      ctx.font = 'bold 12px "JetBrains Mono", monospace';
      ctx.fillText('CSBC 950m 大型船塢 (0~950m 分段建模)', 170, 150);

      // Small Dock (275m x 45m)
      ctx.fillStyle = '#102242';
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.5)';
      ctx.beginPath();
      ctx.moveTo(640, 260);
      ctx.lineTo(840, 260);
      ctx.lineTo(800, 360);
      ctx.lineTo(600, 360);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = 'rgba(245, 158, 11, 0.8)';
      ctx.fillText('275m 小型修船塢 (8m深水區)', 630, 250);

      // Navy Warehouse (RC 3F + Green PV Roof)
      ctx.fillStyle = '#112C38';
      ctx.strokeStyle = 'rgba(0, 255, 135, 0.6)';
      ctx.beginPath();
      ctx.moveTo(220, 340);
      ctx.lineTo(400, 340);
      ctx.lineTo(370, 440);
      ctx.lineTo(190, 440);
      ctx.closePath();
      ctx.fill();
      ctx.stroke();

      // PV Solar cells on roof
      ctx.fillStyle = 'rgba(0, 255, 135, 0.2)';
      for (let i = 0; i < 4; i++) {
        ctx.fillRect(230 + i * 35, 360, 25, 50);
      }
      ctx.fillStyle = 'rgba(0, 255, 135, 0.9)';
      ctx.fillText('海軍新增庫房 (1,158坪 + 微電網太陽能)', 200, 330);

      // Wharf 1~4 (Cathodic Protection Line)
      ctx.strokeStyle = 'rgba(139, 92, 246, 0.6)';
      ctx.setLineDash([6, 4]);
      ctx.beginPath();
      ctx.moveTo(80, 100);
      ctx.lineTo(840, 100);
      ctx.stroke();
      ctx.setLineDash([]);
      ctx.fillStyle = 'rgba(139, 92, 246, 0.9)';
      ctx.fillText('1 ~ 4 號碼頭 (水下陽極電位連續監測段)', 90, 90);

      // Draw Sensor Pins with pulsing animation
      sensors.forEach(s => {
        const isSelected = selectedSensor.id === s.id;
        const pulse = Math.sin(tick * 0.08) * 4;

        let pinColor = '#00F0FF';
        let glowColor = 'rgba(0, 240, 255, 0.4)';
        if (s.status === 'warning') {
          pinColor = '#FFB800';
          glowColor = 'rgba(255, 184, 0, 0.6)';
        } else if (s.status === 'danger') {
          pinColor = '#FF0055';
          glowColor = 'rgba(255, 0, 85, 0.8)';
        }

        // Outer glowing pulse
        ctx.beginPath();
        ctx.arc(s.x, s.y, 10 + pulse, 0, Math.PI * 2);
        ctx.fillStyle = glowColor;
        ctx.fill();

        // Inner Circle
        ctx.beginPath();
        ctx.arc(s.x, s.y, isSelected ? 8 : 6, 0, Math.PI * 2);
        ctx.fillStyle = pinColor;
        ctx.fill();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = isSelected ? 2.5 : 1.5;
        ctx.stroke();

        // Tag label
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '10px "Noto Sans TC", sans-serif';
        ctx.fillText(s.name.split(' ')[0], s.x - 20, s.y - 14);
      });

      ctx.restore();
      animationFrameId = requestAnimationFrame(render);
    };

    render();
    return () => cancelAnimationFrame(animationFrameId);
  }, [sensors, selectedSensor]);

  // Handle canvas click to select sensor
  const handleCanvasClick = (e: React.MouseEvent<HTMLCanvasElement>) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    const scaleX = canvas.width / rect.width;
    const scaleY = canvas.height / rect.height;
    const clickX = (e.clientX - rect.left) * scaleX;
    const clickY = (e.clientY - rect.top) * scaleY;

    // Find closest sensor within 30px
    const clicked = sensors.find(s => {
      const dist = Math.hypot(s.x - clickX, s.y - clickY);
      return dist <= 30;
    });

    if (clicked) {
      setSelectedSensor(clicked);
    }
  };

  return (
    <div className="rounded-2xl bg-marine-900/80 border border-white/10 p-6 shadow-subtle backdrop-blur-md">
      {/* Header & Simulation Mode Controls */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-5 border-b border-white/5">
        <div>
          <div className="flex items-center gap-2 mb-1.5">
            <span className="flex h-2.5 w-2.5 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-ocean-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-ocean-500"></span>
            </span>
            <span className="text-[11px] font-mono text-ocean-400 font-semibold uppercase tracking-wider">
              BIM 數位雙生現場模擬
            </span>
          </div>
          <h3 className="text-lg sm:text-xl font-bold text-white flex items-center gap-2">
            <Activity className="w-5 h-5 text-ocean-400" />
            台船港灣數位雙生 × 現場 Sensor 即時模擬平臺
          </h3>
          <p className="text-xs text-marine-300 mt-0.5">
            點擊下方節點或切換「綠/黃/紅」三色預警演算法，體驗 3D Web 輕量化監測與自動化通報流程
          </p>
        </div>

        {/* Simulation Triggers */}
        <div className="flex flex-wrap items-center gap-2 bg-marine-950/80 p-1.5 rounded-xl border border-white/5">
          <span className="text-[11px] text-marine-400 font-mono px-1.5">狀態演練：</span>
          <button
            onClick={() => handleSimulate('normal')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              simMode === 'normal'
                ? 'bg-sage-600 text-white shadow-card-clean'
                : 'text-marine-400 hover:text-white'
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5" /> 綠燈（常態正常）
          </button>
          <button
            onClick={() => handleSimulate('warning')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              simMode === 'warning'
                ? 'bg-amber-600 text-white shadow-card-clean'
                : 'text-marine-400 hover:text-white'
            }`}
          >
            <AlertTriangle className="w-3.5 h-3.5" /> 黃燈（初級預警）
          </button>
          <button
            onClick={() => handleSimulate('danger')}
            className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
              simMode === 'danger'
                ? 'bg-rose-600 text-white shadow-card-clean'
                : 'text-marine-400 hover:text-white'
            }`}
          >
            <Shield className="w-3.5 h-3.5" /> 紅燈（超標警報）
          </button>
        </div>
      </div>

      {/* Main Sandbox Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
        {/* Left: 3D Isometric Canvas */}
        <div className="lg:col-span-8 relative rounded-2xl overflow-hidden bg-[#070C1B] border border-white/10 flex flex-col">
          <div className="absolute top-3 left-3 z-10 flex items-center gap-2 bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs text-slate-300 font-mono">
            <Layers className="w-3.5 h-3.5 text-ocean-400" />
            點擊點位可切換檢視節點
          </div>

          <div className="w-full aspect-[16/10] min-h-[340px] relative">
            <canvas
              ref={canvasRef}
              width={900}
              height={520}
              onClick={handleCanvasClick}
              className="w-full h-full cursor-pointer object-cover"
            />
          </div>

          {/* Quick node selector buttons */}
          <div className="p-3 bg-slate-900/90 border-t border-white/10 flex flex-wrap gap-2">
            {sensors.map(s => (
              <button
                key={s.id}
                onClick={() => setSelectedSensor(s)}
                className={`px-2.5 py-1 rounded-md text-xs font-mono transition-all flex items-center gap-1.5 ${
                  selectedSensor.id === s.id
                    ? 'bg-ocean-500/20 text-ocean-300 border border-ocean-500/50'
                    : 'bg-white/5 text-slate-400 hover:text-white'
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    s.status === 'normal'
                      ? 'bg-esg-400'
                      : s.status === 'warning'
                      ? 'bg-sun-400 animate-ping'
                      : 'bg-fire-500 animate-ping'
                  }`}
                />
                {s.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Right: Sensor Real-time Telemetry & Detail Card */}
        <div className="lg:col-span-4 flex flex-col gap-3">
          {/* Selected Sensor Telemetry */}
          <div className="rounded-xl p-4 border bg-marine-950/80 border-white/10 backdrop-blur-md space-y-3">
            <div className="flex items-center justify-between">
              <span
                className={`px-2 py-0.5 rounded text-[11px] font-bold font-mono tracking-wide ${
                  selectedSensor.status === 'normal'
                    ? 'bg-sage-950/80 text-sage-300 border border-sage-800/60'
                    : selectedSensor.status === 'warning'
                    ? 'bg-amber-950/80 text-amber-300 border border-amber-800/60'
                    : 'bg-rose-950/80 text-rose-300 border border-rose-800/60'
                }`}
              >
                狀態：{selectedSensor.status === 'normal' ? '正常' : selectedSensor.status === 'warning' ? '初級預警' : '超標警報'}
              </span>
              <span className="text-[11px] font-mono text-marine-400 flex items-center gap-1">
                <Radio className="w-3 h-3 text-ocean-400" /> 連線正常
              </span>
            </div>

            <h4 className="text-sm font-bold text-white leading-snug">{selectedSensor.name}</h4>
            <p className="text-xs text-marine-400 font-mono">{selectedSensor.location}</p>

            {/* Big Readout */}
            <div className="p-3 rounded-lg bg-marine-900/60 border border-white/5 flex items-baseline justify-between">
              <div>
                <span className="text-[10px] text-marine-400 uppercase font-mono block">即時量測數值</span>
                <span className="text-2xl font-bold font-mono text-white tracking-tight">
                  {selectedSensor.value}
                </span>
                <span className="text-xs text-ocean-400 ml-1 font-mono">{selectedSensor.unit}</span>
              </div>
              <div className="text-right">
                <span className="text-[10px] text-marine-400 uppercase font-mono block">警報閾值</span>
                <span className="text-xs font-mono text-sand-300">{selectedSensor.threshold}</span>
              </div>
            </div>

            {/* Real-time mini sparkline */}
            <div>
              <div className="flex items-center justify-between text-[10px] text-marine-400 font-mono mb-1">
                <span>即時應力/位移連續曲線</span>
                <span>採樣率: 10 Hz</span>
              </div>
              <div className="h-10 flex items-end gap-0.5 bg-marine-900/40 p-1 rounded border border-white/5">
                {waveformData.map((val, idx) => (
                  <div
                    key={idx}
                    style={{ height: `${val}%` }}
                    className={`flex-1 rounded-sm transition-all duration-300 ${
                      selectedSensor.status === 'normal'
                        ? 'bg-sage-500/70'
                        : selectedSensor.status === 'warning'
                        ? 'bg-amber-500/80'
                        : 'bg-rose-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            <p className="text-xs text-marine-300 leading-relaxed bg-marine-900/40 p-2.5 rounded-lg border border-white/5">
              {selectedSensor.detail}
            </p>
          </div>

          {/* Real-time System Event Log */}
          <div className="rounded-xl p-3.5 bg-marine-950/80 border border-white/10 flex-1 flex flex-col">
            <div className="flex items-center justify-between pb-2 mb-2 border-b border-white/5">
              <span className="text-[11px] font-mono text-marine-400 font-semibold uppercase flex items-center gap-1.5">
                <Cpu className="w-3.5 h-3.5 text-ocean-400" />
                預警與工單聯動日誌
              </span>
              <span className="text-[10px] font-mono text-ocean-400">
                即時推播中
              </span>
            </div>
            <div className="space-y-1.5 overflow-y-auto max-h-[120px] text-xs font-mono pr-1">
              {logMessages.map((msg, idx) => (
                <div
                  key={idx}
                  className={`p-1.5 rounded text-[11px] leading-snug border ${
                    msg.includes('🚨')
                      ? 'bg-rose-950/40 border-rose-800/40 text-rose-200'
                      : msg.includes('黃燈')
                      ? 'bg-amber-950/40 border-amber-800/40 text-amber-200'
                      : 'bg-marine-900/40 border-white/5 text-marine-300'
                  }`}
                >
                  {msg}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
