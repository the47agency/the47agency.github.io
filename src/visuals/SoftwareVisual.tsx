import React, { useEffect, useRef, useState } from 'react';
import { Cpu, Database, Network, Shield, Layers, HardDrive } from 'lucide-react';

export const SoftwareVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activeLayer, setActiveLayer] = useState<'gateway' | 'core' | 'database'>('core');

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 540);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 340);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Circuit data pulses
    const pulses: Array<{
      x: number;
      y: number;
      targetX: number;
      targetY: number;
      progress: number;
      speed: number;
    }> = [];

    for (let i = 0; i < 24; i++) {
      pulses.push({
        x: 0,
        y: 0,
        targetX: 0,
        targetY: 0,
        progress: Math.random(),
        speed: 0.008 + Math.random() * 0.008,
      });
    }

    let time = 0;
    const render = () => {
      time += 0.03;
      ctx.clearRect(0, 0, width, height);

      const centerX = width * 0.5;
      const centerY = height * 0.5;
      const coreSize = Math.min(width, height) * 0.36;

      // Draw motherboard circuit grid lines
      ctx.strokeStyle = 'rgba(168, 85, 247, 0.07)';
      ctx.lineWidth = 1;
      const step = 28;
      for (let x = (time * 10) % step; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }

      // Circuit lines emanating from CPU chip
      const pins = 8;
      const pinOffset = coreSize * 0.5;

      // Top / Bottom / Left / Right buses
      const busLines = [
        // Left bus (API Gateway input)
        { x1: 20, y1: centerY - 30, x2: centerX - pinOffset, y2: centerY - 30 },
        { x1: 20, y1: centerY + 30, x2: centerX - pinOffset, y2: centerY + 30 },
        // Right bus (Storage & Queue)
        { x1: centerX + pinOffset, y1: centerY - 30, x2: width - 20, y2: centerY - 30 },
        { x1: centerX + pinOffset, y1: centerY + 30, x2: width - 20, y2: centerY + 30 },
        // Top bus (Security & Auth)
        { x1: centerX - 30, y1: 20, x2: centerX - 30, y2: centerY - pinOffset },
        { x1: centerX + 30, y1: 20, x2: centerX + 30, y2: centerY - pinOffset },
        // Bottom bus (Cache & Microservices)
        { x1: centerX - 30, y1: centerY + pinOffset, x2: centerX - 30, y2: height - 20 },
        { x1: centerX + 30, y1: centerY + pinOffset, x2: centerX + 30, y2: height - 20 },
      ];

      ctx.strokeStyle = 'rgba(168, 85, 247, 0.25)';
      ctx.lineWidth = 1.5;
      busLines.forEach((line) => {
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.stroke();
      });

      // Render traveling electrons/pulses on bus lines
      pulses.forEach((p, idx) => {
        p.progress += p.speed;
        if (p.progress >= 1) p.progress = 0;

        const line = busLines[idx % busLines.length];
        const px = line.x1 + (line.x2 - line.x1) * p.progress;
        const py = line.y1 + (line.y2 - line.y1) * p.progress;

        ctx.save();
        ctx.fillStyle = '#C084FC';
        ctx.shadowColor = '#A855F7';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Render Central CPU Processor Die
      ctx.save();
      const pulseGlow = Math.sin(time * 2) * 5;
      ctx.fillStyle = '#0E0B1A';
      ctx.strokeStyle = '#A855F7';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#9333EA';
      ctx.shadowBlur = 18 + pulseGlow;

      // Outer silicon carrier package
      const half = coreSize * 0.5;
      ctx.beginPath();
      ctx.roundRect(centerX - half, centerY - half, coreSize, coreSize, 12);
      ctx.fill();
      ctx.stroke();

      // Inner silicon core with metallic finish
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#17122A';
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
      ctx.lineWidth = 1;
      const innerSize = coreSize * 0.72;
      const innerHalf = innerSize * 0.5;
      ctx.beginPath();
      ctx.roundRect(centerX - innerHalf, centerY - innerHalf, innerSize, innerSize, 8);
      ctx.fill();
      ctx.stroke();

      // Processor Labeling
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '700 12px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('47 CORE', centerX, centerY - 8);

      ctx.fillStyle = '#A855F7';
      ctx.font = '600 10px "DM Sans", sans-serif';
      ctx.fillText('SYSTEM ENGINE', centerX, centerY + 10);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.45)';
      ctx.font = '500 9px "DM Sans", sans-serif';
      ctx.fillText('API / DATA LAYER', centerX, centerY + 24);

      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className={`relative rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] shadow-[0_0_25px_rgba(168,85,247,0.12)] p-4 sm:p-6 flex flex-col gap-4 ${className}`}>
      {/* Title & Status */}
      <div className="flex items-center justify-between">
        <span className="text-xs font-medium text-neutral-300">
          Connected System Architecture
        </span>
        <div className="flex items-center gap-1.5 text-xs text-neutral-400">
          <span className="w-2 h-2 rounded-full bg-purple-400" />
          <span>Modular Cloud Architecture</span>
        </div>
      </div>

      {/* CPU Canvas Animation */}
      <div className="h-[280px] sm:h-[320px] w-full relative overflow-hidden rounded-xl bg-black/40 ring-1 ring-white/5">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* System Tiers Grid */}
      <div className="grid grid-cols-3 gap-2 pt-2 text-xs">
        <button
          onClick={() => setActiveLayer('gateway')}
          className={`p-2.5 rounded-lg text-left transition-all cursor-pointer ${
            activeLayer === 'gateway'
              ? 'bg-purple-950/40 ring-1 ring-purple-500/40 text-white'
              : 'text-neutral-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <div className="flex items-center gap-1.5 text-purple-400 mb-0.5">
            <Network className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">Gateway</span>
          </div>
          <div className="text-xs font-semibold truncate">API Routing</div>
        </button>

        <button
          onClick={() => setActiveLayer('core')}
          className={`p-2.5 rounded-lg text-left transition-all cursor-pointer ${
            activeLayer === 'core'
              ? 'bg-purple-950/40 ring-1 ring-purple-500/40 text-white'
              : 'text-neutral-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <div className="flex items-center gap-1.5 text-indigo-400 mb-0.5">
            <Cpu className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">Logic</span>
          </div>
          <div className="text-xs font-semibold truncate">Domain Core</div>
        </button>

        <button
          onClick={() => setActiveLayer('database')}
          className={`p-2.5 rounded-lg text-left transition-all cursor-pointer ${
            activeLayer === 'database'
              ? 'bg-purple-950/40 ring-1 ring-purple-500/40 text-white'
              : 'text-neutral-400 hover:text-white hover:bg-white/5'
          }`}
        >
          <div className="flex items-center gap-1.5 text-cyan-400 mb-0.5">
            <Database className="w-3.5 h-3.5" />
            <span className="text-xs font-medium">Storage</span>
          </div>
          <div className="text-xs font-semibold truncate">Structured Data</div>
        </button>
      </div>
    </div>
  );
};
