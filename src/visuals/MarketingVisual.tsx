import React, { useEffect, useRef, useState } from 'react';

interface AdPlatform {
  id: string;
  name: string;
  color: string;
  iconType: 'meta' | 'google' | 'tiktok' | 'snapchat' | 'linkedin';
  tag: string;
}

export const MarketingVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activePlatform, setActivePlatform] = useState<string>('meta');

  const platforms: AdPlatform[] = [
    { id: 'meta', name: 'Meta Ads', color: '#0668E1', iconType: 'meta', tag: 'Facebook & Instagram' },
    { id: 'google', name: 'Google Ads', color: '#4285F4', iconType: 'google', tag: 'Search & YouTube' },
    { id: 'tiktok', name: 'TikTok Ads', color: '#FE2C55', iconType: 'tiktok', tag: 'Short-Form Video' },
    { id: 'snapchat', name: 'Snapchat Ads', color: '#FFFC00', iconType: 'snapchat', tag: 'Direct Response' },
    { id: 'linkedin', name: 'LinkedIn Ads', color: '#0A66C2', iconType: 'linkedin', tag: 'B2B Targeting' },
  ];

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 640);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 400);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // Particle flow
    const particles: Array<{
      platIdx: number;
      progress: number;
      speed: number;
      size: number;
    }> = [];

    for (let i = 0; i < 35; i++) {
      particles.push({
        platIdx: Math.floor(Math.random() * platforms.length),
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.006,
        size: 2 + Math.random() * 2,
      });
    }

    let time = 0;
    const render = () => {
      time += 0.025;
      ctx.clearRect(0, 0, width, height);

      const hubX = width * 0.76;
      const hubY = height * 0.5;
      const leftX = width * 0.22;
      const count = platforms.length;
      const gapY = (height * 0.72) / (count - 1);
      const startY = height * 0.14;

      // Draw flowing connection curves
      platforms.forEach((p, idx) => {
        const py = startY + idx * gapY;
        const isSelected = activePlatform === p.id;

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(leftX, py);
        ctx.bezierCurveTo(leftX + (hubX - leftX) * 0.45, py, hubX - (hubX - leftX) * 0.45, hubY, hubX, hubY);
        ctx.strokeStyle = isSelected
          ? 'rgba(168, 85, 247, 0.85)'
          : 'rgba(255, 255, 255, 0.08)';
        ctx.lineWidth = isSelected ? 2.5 : 1.2;
        if (isSelected) {
          ctx.shadowColor = '#A855F7';
          ctx.shadowBlur = 12;
        }
        ctx.stroke();
        ctx.restore();
      });

      // Render traveling light pulses
      particles.forEach((pt) => {
        pt.progress += pt.speed;
        if (pt.progress >= 1) {
          pt.progress = 0;
          pt.platIdx = Math.floor(Math.random() * platforms.length);
        }

        const py = startY + pt.platIdx * gapY;
        const t = pt.progress;
        const cx1 = leftX + (hubX - leftX) * 0.45;
        const cy1 = py;
        const cx2 = hubX - (hubX - leftX) * 0.45;
        const cy2 = hubY;

        const bx =
          Math.pow(1 - t, 3) * leftX +
          3 * Math.pow(1 - t, 2) * t * cx1 +
          3 * (1 - t) * Math.pow(t, 2) * cx2 +
          Math.pow(t, 3) * hubX;
        const by =
          Math.pow(1 - t, 3) * py +
          3 * Math.pow(1 - t, 2) * t * cy1 +
          3 * (1 - t) * Math.pow(t, 2) * cy2 +
          Math.pow(t, 3) * hubY;

        ctx.save();
        ctx.fillStyle = '#C084FC';
        ctx.shadowColor = '#A855F7';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(bx, by, pt.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Render Central Convergence Core
      ctx.save();
      const pulse = Math.sin(time * 2.5) * 4;
      ctx.fillStyle = '#130F24';
      ctx.strokeStyle = '#A855F7';
      ctx.lineWidth = 2;
      ctx.shadowColor = '#9333EA';
      ctx.shadowBlur = 20;
      ctx.beginPath();
      ctx.arc(hubX, hubY, 44 + pulse * 0.4, 0, Math.PI * 2);
      ctx.fill();
      ctx.stroke();

      ctx.shadowBlur = 0;
      ctx.fillStyle = '#FFFFFF';
      ctx.font = '700 12px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('CONVERSION', hubX, hubY - 5);
      ctx.fillStyle = '#A855F7';
      ctx.font = '600 10px "DM Sans", sans-serif';
      ctx.fillText('ENGINE', hubX, hubY + 12);
      ctx.restore();

      // Render Platform Source Nodes
      platforms.forEach((p, idx) => {
        const py = startY + idx * gapY;
        const isSelected = activePlatform === p.id;

        ctx.save();
        ctx.fillStyle = isSelected ? '#1E1638' : '#0E0C17';
        ctx.strokeStyle = isSelected ? '#A855F7' : 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = isSelected ? 2 : 1;
        if (isSelected) {
          ctx.shadowColor = '#A855F7';
          ctx.shadowBlur = 10;
        }
        ctx.beginPath();
        ctx.arc(leftX, py, 18, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Brand center pip
        ctx.fillStyle = p.color;
        ctx.shadowColor = p.color;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(leftX, py, 6, 0, Math.PI * 2);
        ctx.fill();

        // Platform Label
        ctx.shadowBlur = 0;
        ctx.fillStyle = isSelected ? '#FFFFFF' : '#D1D5DB';
        ctx.font = '600 12px "Plus Jakarta Sans", sans-serif';
        ctx.textAlign = 'right';
        ctx.fillText(p.name, leftX - 28, py + 4);

        ctx.restore();
      });

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [activePlatform]);

  return (
    <div className={`relative rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] shadow-[0_0_25px_rgba(168,85,247,0.12)] p-4 sm:p-6 flex flex-col gap-4 ${className}`}>
      {/* Interactive Platform Tabs */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-medium text-neutral-300">
          Multi-Channel Distribution
        </span>
        <div className="flex flex-wrap gap-1.5">
          {platforms.map((p) => (
            <button
              key={p.id}
              onClick={() => setActivePlatform(p.id)}
              className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
                activePlatform === p.id
                  ? 'bg-purple-600/30 text-white ring-1 ring-purple-500/50'
                  : 'text-neutral-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {p.name}
            </button>
          ))}
        </div>
      </div>

      {/* Visual Canvas */}
      <div className="h-[320px] sm:h-[360px] w-full relative">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Clean Footnote */}
      <div className="flex items-center justify-between text-xs text-neutral-400 pt-2">
        <span>Active Channel Focus: <strong className="text-white">{platforms.find((p) => p.id === activePlatform)?.name}</strong></span>
        <span className="text-purple-300 text-xs">{platforms.find((p) => p.id === activePlatform)?.tag}</span>
      </div>
    </div>
  );
};
