import React, { useEffect, useRef, useState } from 'react';
import { Bot, FileText, CheckCircle2, ShieldCheck, Zap } from 'lucide-react';

export const AiVisual: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [selectedCase, setSelectedCase] = useState<'docs' | 'assistants' | 'automation'>('docs');

  const cases = {
    docs: {
      title: 'Commercial Document & Invoice Ingestion',
      description: 'Parses contracts, invoices, and purchase orders directly into ERP systems with verifiable audit trails',
      nodesCount: 28,
    },
    assistants: {
      title: 'Bilingual AI Customer Assistants',
      description: 'Autonomous customer resolution for order tracking and account inquiries across web and messaging channels',
      nodesCount: 36,
    },
    automation: {
      title: 'Business Process Automation',
      description: 'Automates inventory validation, data reconciliation, and recurring operational tasks across systems',
      nodesCount: 32,
    },
  };

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
      initBrainNodes();
    };
    window.addEventListener('resize', handleResize);

    // Neural Network Brain Nodes in 2 hemispheres
    interface BrainNode {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      radius: number;
      connections: number[];
      phase: number;
    }

    const nodes: BrainNode[] = [];

    const initBrainNodes = () => {
      nodes.length = 0;
      const centerX = width * 0.5;
      const centerY = height * 0.48;
      const count = cases[selectedCase].nodesCount;

      for (let i = 0; i < count; i++) {
        // Brain shape parametric distribution: two lobes
        const lobe = i % 2 === 0 ? -1 : 1;
        const u = Math.random() * Math.PI;
        const v = Math.random() * Math.PI;
        const rX = 70 + Math.random() * 50;
        const rY = 55 + Math.random() * 45;

        const nx = centerX + lobe * (35 + Math.sin(u) * rX);
        const ny = centerY + Math.cos(v) * rY + (Math.random() - 0.5) * 20;

        nodes.push({
          x: nx,
          y: ny,
          baseX: nx,
          baseY: ny,
          radius: 2 + Math.random() * 2.5,
          connections: [],
          phase: Math.random() * Math.PI * 2,
        });
      }

      // Connect nearest neighbors
      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].baseX - nodes[j].baseX;
          const dy = nodes[i].baseY - nodes[j].baseY;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 65) {
            nodes[i].connections.push(j);
          }
        }
      }
    };

    initBrainNodes();

    // Synaptic pulses
    interface SynapsePulse {
      from: number;
      to: number;
      progress: number;
      speed: number;
    }

    const pulses: SynapsePulse[] = [];
    for (let i = 0; i < 20; i++) {
      pulses.push({
        from: 0,
        to: 1,
        progress: Math.random(),
        speed: 0.01 + Math.random() * 0.012,
      });
    }

    const pickPulseConnection = (p: SynapsePulse) => {
      const fromIdx = Math.floor(Math.random() * nodes.length);
      const fromNode = nodes[fromIdx];
      if (fromNode && fromNode.connections.length > 0) {
        const toIdx = fromNode.connections[Math.floor(Math.random() * fromNode.connections.length)];
        p.from = fromIdx;
        p.to = toIdx;
      }
    };

    pulses.forEach(pickPulseConnection);

    let time = 0;
    const render = () => {
      time += 0.025;
      ctx.clearRect(0, 0, width, height);

      // Node subtle breathing movement
      nodes.forEach((n) => {
        n.x = n.baseX + Math.sin(time + n.phase) * 3;
        n.y = n.baseY + Math.cos(time + n.phase) * 3;
      });

      // Draw neural synaptic connections
      ctx.save();
      for (let i = 0; i < nodes.length; i++) {
        const n1 = nodes[i];
        n1.connections.forEach((cIdx) => {
          const n2 = nodes[cIdx];
          if (!n2) return;
          ctx.beginPath();
          ctx.moveTo(n1.x, n1.y);
          ctx.lineTo(n2.x, n2.y);
          ctx.strokeStyle = 'rgba(168, 85, 247, 0.16)';
          ctx.lineWidth = 1;
          ctx.stroke();
        });
      }
      ctx.restore();

      // Render traveling synaptic pulses
      pulses.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          pickPulseConnection(p);
        }

        const n1 = nodes[p.from];
        const n2 = nodes[p.to];
        if (!n1 || !n2) return;

        const px = n1.x + (n2.x - n1.x) * p.progress;
        const py = n1.y + (n2.y - n1.y) * p.progress;

        ctx.save();
        ctx.fillStyle = '#E9D5FF';
        ctx.shadowColor = '#A855F7';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.arc(px, py, 2.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Render neural nodes
      nodes.forEach((n) => {
        ctx.save();
        ctx.fillStyle = '#A855F7';
        ctx.shadowColor = '#9333EA';
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.radius, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      });

      // Central Cognitive Core Indicator
      const centerX = width * 0.5;
      const centerY = height * 0.48;
      ctx.save();
      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
      ctx.font = '700 11px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('COGNITIVE BRAIN', centerX, centerY + 80);
      ctx.fillStyle = '#A855F7';
      ctx.font = '500 9px "DM Sans", sans-serif';
      ctx.fillText('WORKFLOW SIGNAL PIPELINE', centerX, centerY + 94);
      ctx.restore();

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
    };
  }, [selectedCase]);

  return (
    <div className={`relative rounded-2xl ring-1 ring-purple-500/20 bg-[#0B0A12] shadow-[0_0_25px_rgba(168,85,247,0.12)] p-4 sm:p-6 flex flex-col gap-4 ${className}`}>
      {/* Visual Header */}
      <div className="flex flex-wrap items-center justify-between gap-2">
        <span className="text-xs font-medium text-neutral-300">
          AI Processing Architecture
        </span>
        <div className="flex flex-wrap gap-1.5">
          <button
            onClick={() => setSelectedCase('docs')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
              selectedCase === 'docs'
                ? 'bg-purple-600/30 text-white ring-1 ring-purple-500/50'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Document Ingestion
          </button>
          <button
            onClick={() => setSelectedCase('assistants')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
              selectedCase === 'assistants'
                ? 'bg-purple-600/30 text-white ring-1 ring-purple-500/50'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            AI Assistants
          </button>
          <button
            onClick={() => setSelectedCase('automation')}
            className={`px-2.5 py-1 rounded-md text-[11px] font-medium transition-all cursor-pointer ${
              selectedCase === 'automation'
                ? 'bg-purple-600/30 text-white ring-1 ring-purple-500/50'
                : 'text-neutral-400 hover:text-white hover:bg-white/5'
            }`}
          >
            Process Automation
          </button>
        </div>
      </div>

      {/* Neural Canvas Animation */}
      <div className="h-[280px] sm:h-[320px] w-full relative overflow-hidden rounded-xl bg-black/40 ring-1 ring-white/5">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Realistic Business Use Case Summary */}
      <div className="flex items-start gap-3 p-3.5 rounded-xl bg-purple-950/20 ring-1 ring-purple-500/20 text-xs">
        <Bot className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
        <div>
          <div className="font-semibold text-white">{cases[selectedCase].title}</div>
          <p className="text-neutral-300 text-xs mt-0.5 leading-relaxed">{cases[selectedCase].description}</p>
        </div>
      </div>
    </div>
  );
};
