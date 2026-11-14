import React, { useEffect, useRef, useState } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  color: string;
  glow: string;
  alpha: number;
}

interface Node {
  id: string;
  label: string;
  sublabel: string;
  x: number;
  y: number;
  targetX: number;
  targetY: number;
  radius: number;
  color: string;
  type: 'marketing' | 'software' | 'ai' | 'hub';
}

export const HeroNexusAnimation: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [activePillar, setActivePillar] = useState<'all' | 'marketing' | 'software' | 'ai'>('all');
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      initNodes();
    };

    window.addEventListener('resize', handleResize);

    // Dynamic Nodes representing the 47 Agency Trinity
    let nodes: Node[] = [];
    const initNodes = () => {
      const cx = width / 2;
      const cy = height / 2;
      const spreadX = Math.min(width * 0.32, 280);
      const spreadY = Math.min(height * 0.3, 140);

      nodes = [
        {
          id: 'hub',
          label: '47 CORE',
          sublabel: 'Growth Engine',
          x: cx,
          y: cy,
          targetX: cx,
          targetY: cy,
          radius: 28,
          color: '#C084FC',
          type: 'hub',
        },
        {
          id: 'marketing',
          label: 'PERFORMANCE',
          sublabel: 'Paid Media & CAPI',
          x: cx - spreadX,
          y: cy - spreadY * 0.6,
          targetX: cx - spreadX,
          targetY: cy - spreadY * 0.6,
          radius: 20,
          color: '#A855F7',
          type: 'marketing',
        },
        {
          id: 'software',
          label: 'ENGINEERING',
          sublabel: 'Custom Architecture',
          x: cx + spreadX,
          y: cy - spreadY * 0.6,
          targetX: cx + spreadX,
          targetY: cy - spreadY * 0.6,
          radius: 20,
          color: '#818CF8',
          type: 'software',
        },
        {
          id: 'ai',
          label: 'AI SYSTEMS',
          sublabel: 'Autonomous Workflows',
          x: cx,
          y: cy + spreadY * 1.1,
          targetX: cx,
          targetY: cy + spreadY * 1.1,
          radius: 20,
          color: '#38BDF8',
          type: 'ai',
        },
      ];
    };

    initNodes();

    // Floating background particles
    const particleCount = 45;
    const particles: Particle[] = [];
    const palette = ['#7C3AED', '#9333EA', '#A855F7', '#C084FC', '#6366F1'];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.6,
        vy: (Math.random() - 0.5) * 0.6,
        radius: Math.random() * 2.2 + 1,
        color: palette[Math.floor(Math.random() * palette.length)],
        glow: '#A855F7',
        alpha: Math.random() * 0.6 + 0.2,
      });
    }

    // Packet signals traveling between nodes
    interface Packet {
      fromIndex: number;
      toIndex: number;
      progress: number;
      speed: number;
      color: string;
      size: number;
    }

    const packets: Packet[] = [];
    const connectionPairs = [
      [1, 0], // Marketing -> Core
      [0, 2], // Core -> Software
      [0, 3], // Core -> AI
      [2, 3], // Software -> AI
      [3, 1], // AI -> Marketing
      [2, 1], // Software -> Marketing
    ];

    for (let i = 0; i < 9; i++) {
      const pair = connectionPairs[Math.floor(Math.random() * connectionPairs.length)];
      packets.push({
        fromIndex: pair[0],
        toIndex: pair[1],
        progress: Math.random(),
        speed: 0.006 + Math.random() * 0.009,
        color: Math.random() > 0.5 ? '#E9D5FF' : '#A855F7',
        size: Math.random() * 2.5 + 2,
      });
    }

    let time = 0;
    let mouseX = width / 2;
    let mouseY = height / 2;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    canvas.addEventListener('mousemove', handleMouseMove);

    // Main render loop
    const render = () => {
      time += 0.02;
      ctx.clearRect(0, 0, width, height);

      // 1. Draw subtle geometric connection grid
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.035)';
      ctx.lineWidth = 1;
      const step = 40;
      for (let x = 0; x < width; x += step) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += step) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // 2. Draw & update ambient particles
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;
        if (p.y < 0) p.y = height;
        if (p.y > height) p.y = 0;

        ctx.save();
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha * (0.8 + 0.2 * Math.sin(time + p.x));
        ctx.shadowColor = p.glow;
        ctx.shadowBlur = 6;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // 3. Draw inter-node circuit lines
      connectionPairs.forEach(([from, to]) => {
        const n1 = nodes[from];
        const n2 = nodes[to];
        if (!n1 || !n2) return;

        const isHighlighted =
          activePillar === 'all' ||
          n1.type === activePillar ||
          n2.type === activePillar ||
          n1.type === 'hub';

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);

        if (isHighlighted) {
          ctx.strokeStyle = 'rgba(168, 85, 247, 0.35)';
          ctx.lineWidth = 1.8;
          ctx.shadowColor = '#8B5CF6';
          ctx.shadowBlur = 8;
        } else {
          ctx.strokeStyle = 'rgba(255, 255, 255, 0.08)';
          ctx.lineWidth = 1;
        }
        ctx.stroke();
        ctx.restore();
      });

      // 4. Update & draw moving data packets
      packets.forEach((pkt) => {
        pkt.progress += pkt.speed;
        if (pkt.progress >= 1) {
          pkt.progress = 0;
          const nextPair = connectionPairs[Math.floor(Math.random() * connectionPairs.length)];
          pkt.fromIndex = nextPair[0];
          pkt.toIndex = nextPair[1];
        }

        const from = nodes[pkt.fromIndex];
        const to = nodes[pkt.toIndex];
        if (!from || !to) return;

        const px = from.x + (to.x - from.x) * pkt.progress;
        const py = from.y + (to.y - from.y) * pkt.progress;

        ctx.save();
        ctx.fillStyle = pkt.color;
        ctx.shadowColor = '#C084FC';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.arc(px, py, pkt.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // 5. Draw Orbiting Energy Rings around Core Hub
      const hub = nodes[0];
      if (hub) {
        ctx.save();
        ctx.strokeStyle = 'rgba(192, 132, 252, 0.22)';
        ctx.lineWidth = 1.2;
        ctx.setLineDash([4, 8]);
        ctx.beginPath();
        ctx.arc(hub.x, hub.y, hub.radius + 18 + Math.sin(time * 2) * 2, 0, Math.PI * 2);
        ctx.stroke();

        ctx.strokeStyle = 'rgba(124, 58, 237, 0.18)';
        ctx.beginPath();
        ctx.arc(hub.x, hub.y, hub.radius + 36 + Math.cos(time * 1.5) * 3, 0, Math.PI * 2);
        ctx.stroke();
        ctx.restore();
      }

      // 6. Draw Nodes with labels
      nodes.forEach((n) => {
        // Floating motion
        const floatOffset = Math.sin(time * 2 + (n.type === 'hub' ? 0 : n.x)) * 3;
        const drawY = n.y + floatOffset;

        // Subtle mouse interaction
        const dx = mouseX - n.x;
        const dy = mouseY - drawY;
        const dist = Math.sqrt(dx * dy + dy * dy);
        const hoverBoost = dist < 80 ? 4 : 0;

        ctx.save();

        // Outer glow
        const glowRad = n.radius + 8 + hoverBoost;
        const radialGradient = ctx.createRadialGradient(n.x, drawY, n.radius * 0.4, n.x, drawY, glowRad * 1.8);
        radialGradient.addColorStop(0, n.color);
        radialGradient.addColorStop(0.5, 'rgba(124, 58, 237, 0.25)');
        radialGradient.addColorStop(1, 'transparent');

        ctx.fillStyle = radialGradient;
        ctx.beginPath();
        ctx.arc(n.x, drawY, glowRad * 1.8, 0, Math.PI * 2);
        ctx.fill();

        // Node circle
        ctx.fillStyle = '#0F0E17';
        ctx.strokeStyle = n.color;
        ctx.lineWidth = n.type === 'hub' ? 2.5 : 1.8;
        ctx.beginPath();
        ctx.arc(n.x, drawY, n.radius + hoverBoost, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();

        // Inner core
        ctx.fillStyle = n.color;
        ctx.shadowColor = n.color;
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(n.x, drawY, n.type === 'hub' ? 8 : 5, 0, Math.PI * 2);
        ctx.fill();

        // Text labels
        ctx.shadowBlur = 0;
        ctx.fillStyle = '#FFFFFF';
        ctx.font = '600 11px "Plus Jakarta Sans", sans-serif';
        ctx.textAlign = 'center';
        ctx.fillText(n.label, n.x, drawY + n.radius + 18);

        ctx.fillStyle = 'rgba(255, 255, 255, 0.55)';
        ctx.font = '400 9px "Plus Jakarta Sans", sans-serif';
        ctx.fillText(n.sublabel, n.x, drawY + n.radius + 30);

        ctx.restore();
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, [activePillar]);

  return (
    <div
      className={`relative w-full h-[420px] md:h-[500px] rounded-2xl overflow-hidden border border-white/10 bg-[#09080e] ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <canvas ref={canvasRef} className="w-full h-full block cursor-crosshair" />

      {/* Interactive Pillar Selector Overlay */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between pointer-events-none">
        <div className="flex items-center gap-2 pointer-events-auto bg-black/60 backdrop-blur-md px-3 py-1.5 rounded-lg border border-white/10 text-xs">
          <span className="text-neutral-400 font-medium">Telemetry Mode:</span>
          <button
            onClick={() => setActivePillar('all')}
            className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors ${
              activePillar === 'all' ? 'bg-purple-600 text-white' : 'text-neutral-300 hover:text-white'
            }`}
          >
            Unified Trinity
          </button>
          <button
            onClick={() => setActivePillar('marketing')}
            className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors ${
              activePillar === 'marketing' ? 'bg-purple-600 text-white' : 'text-neutral-300 hover:text-white'
            }`}
          >
            Marketing
          </button>
          <button
            onClick={() => setActivePillar('software')}
            className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors ${
              activePillar === 'software' ? 'bg-purple-600 text-white' : 'text-neutral-300 hover:text-white'
            }`}
          >
            Engineering
          </button>
          <button
            onClick={() => setActivePillar('ai')}
            className={`px-2 py-0.5 rounded text-[11px] font-semibold transition-colors ${
              activePillar === 'ai' ? 'bg-purple-600 text-white' : 'text-neutral-300 hover:text-white'
            }`}
          >
            AI Systems
          </button>
        </div>

        <div className="hidden sm:flex items-center gap-2 px-3 py-1 rounded bg-black/50 border border-white/5 text-[11px] text-neutral-400">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
          <span>Interactive Node Mesh · Move cursor to inspect</span>
        </div>
      </div>

      {/* Sub-label metadata */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-[11px] text-neutral-400 pointer-events-none">
        <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/5">
          <span>Attribution Signals · Microservice Mesh · Cognitive Pipelines</span>
        </div>
        <div className="bg-black/60 backdrop-blur-md px-3 py-1 rounded border border-white/5">
          <span>Active Nodes: 4 · Packet Flow: Continuous</span>
        </div>
      </div>
    </div>
  );
};
