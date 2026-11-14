import React, { useEffect, useRef } from 'react';

export const HeroWireframe47: React.FC<{ className?: string }> = ({ className = '' }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 800);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 480);

    const handleResize = () => {
      if (!canvas || !canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
      buildMesh();
    };
    window.addEventListener('resize', handleResize);

    // Mouse parallax tracking
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const mx = (e.clientX - rect.left) / rect.width - 0.5;
      const my = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotY = mx * 0.35;
      targetRotX = -my * 0.25;
    };
    window.addEventListener('mousemove', handleMouseMove);

    // Node & Edge structures for the wireframe mesh
    interface MeshNode {
      x0: number;
      y0: number;
      z0: number;
      x: number;
      y: number;
      z: number;
      baseColor: string;
      glowColor: string;
      size: number;
      pulseOffset: number;
      isGlitching?: boolean;
    }

    interface MeshEdge {
      a: number;
      b: number;
      color: string;
      opacity: number;
    }

    interface TravelingSignal {
      edgeIdx: number;
      progress: number;
      speed: number;
      color: string;
    }

    const nodes: MeshNode[] = [];
    const edges: MeshEdge[] = [];
    const signals: TravelingSignal[] = [];

    // Polygon definition for "4" and "7"
    // Viewport normalized centered coordinate system: -490 to +490 width, -335 to +335 height
    const polygon4Diagonal: [number, number][] = [
      [-50, -335],
      [-50, -175],
      [-330, +105],
      [-490, +105],
    ];

    const polygon4Stem: [number, number][] = [
      [-20, -335],
      [+40, -335],
      [+40, -175],
      [-20, -175],
    ];

    const polygon4Facet: [number, number][] = [
      [-20, -175],
      [+40, -175],
      [+40, +185],
      [-130, +335],
      [-130, -65],
    ];

    const polygon7: [number, number][] = [
      [+70, -335],
      [+490, -335],
      [0, +335],
      [+160, +335],
      [+330, -175],
      [+70, -175],
    ];

    // Point in polygon test
    const pointInPolygon = (pt: [number, number], poly: [number, number][]): boolean => {
      let inside = false;
      for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
        const xi = poly[i][0], yi = poly[i][1];
        const xj = poly[j][0], yj = poly[j][1];
        const intersect =
          yi > pt[1] !== yj > pt[1] &&
          pt[0] < ((xj - xi) * (pt[1] - yi)) / (yj - yi) + xi;
        if (intersect) inside = !inside;
      }
      return inside;
    };

    // Subdivide polygon edges into boundary nodes
    const samplePolygonEdges = (
      poly: [number, number][],
      step: number,
      baseColor: string,
      glowColor: string
    ) => {
      for (let i = 0; i < poly.length; i++) {
        const p1 = poly[i];
        const p2 = poly[(i + 1) % poly.length];
        const dx = p2[0] - p1[0];
        const dy = p2[1] - p1[1];
        const dist = Math.hypot(dx, dy);
        const count = Math.max(1, Math.round(dist / step));
        for (let k = 0; k < count; k++) {
          const t = k / count;
          nodes.push({
            x0: p1[0] + dx * t,
            y0: p1[1] + dy * t,
            z0: (Math.random() - 0.5) * 35,
            x: 0,
            y: 0,
            z: 0,
            baseColor,
            glowColor,
            size: 2.4 + Math.random() * 1.6,
            pulseOffset: Math.random() * Math.PI * 2,
          });
        }
      }
    };

    // Sample interior lattice nodes
    const sampleInteriorLattice = (
      poly: [number, number][],
      bbox: [number, number, number, number],
      spacing: number,
      baseColor: string,
      glowColor: string
    ) => {
      const [minX, minY, maxX, maxY] = bbox;
      for (let x = minX + spacing * 0.5; x < maxX; x += spacing) {
        for (let y = minY + spacing * 0.5; y < maxY; y += spacing) {
          const jitterX = x + (Math.random() - 0.5) * spacing * 0.45;
          const jitterY = y + (Math.random() - 0.5) * spacing * 0.45;
          if (pointInPolygon([jitterX, jitterY], poly)) {
            nodes.push({
              x0: jitterX,
              y0: jitterY,
              z0: (Math.random() - 0.5) * 45,
              x: 0,
              y: 0,
              z: 0,
              baseColor,
              glowColor,
              size: 2.0 + Math.random() * 1.5,
              pulseOffset: Math.random() * Math.PI * 2,
            });
          }
        }
      }
    };

    const buildMesh = () => {
      nodes.length = 0;
      edges.length = 0;
      signals.length = 0;

      // 1. Build Number 4 Diagonal Bar (White / Silver Wireframe)
      samplePolygonEdges(polygon4Diagonal, 32, '#E2E8F0', '#A855F7');
      sampleInteriorLattice(polygon4Diagonal, [-490, -335, -50, +105], 36, '#E2E8F0', '#C084FC');

      // 2. Build Number 4 Stem Top (White Wireframe)
      samplePolygonEdges(polygon4Stem, 30, '#FFFFFF', '#A855F7');
      sampleInteriorLattice(polygon4Stem, [-20, -335, +40, -175], 32, '#FFFFFF', '#C084FC');

      // 3. Build Number 4 Signature Purple Facet (Electric Violet & Neon Purple Wireframe)
      samplePolygonEdges(polygon4Facet, 28, '#C084FC', '#8B5CF6');
      sampleInteriorLattice(polygon4Facet, [-130, -175, +40, +335], 32, '#A855F7', '#7C3AED');

      // 4. Build Number 7 (Bright White with Violet Accents)
      samplePolygonEdges(polygon7, 32, '#FFFFFF', '#A855F7');
      sampleInteriorLattice(polygon7, [0, -335, +490, +335], 38, '#F1F5F9', '#C084FC');

      // 5. Connect Nearest Neighbors (Lattice Wireframe)
      const maxConnectDist = 65;
      for (let i = 0; i < nodes.length; i++) {
        let connections = 0;
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x0 - nodes[j].x0;
          const dy = nodes[i].y0 - nodes[j].y0;
          const dist = Math.hypot(dx, dy);

          if (dist < maxConnectDist) {
            // Avoid connecting across the gap between 4 and 7
            const crossGap =
              (nodes[i].x0 < 50 && nodes[j].x0 > 60) ||
              (nodes[j].x0 < 50 && nodes[i].x0 > 60);

            if (!crossGap) {
              const isPurple =
                nodes[i].baseColor === '#A855F7' ||
                nodes[i].baseColor === '#C084FC' ||
                nodes[j].baseColor === '#A855F7';
              edges.push({
                a: i,
                b: j,
                color: isPurple ? '#A855F7' : '#FFFFFF',
                opacity: isPurple ? 0.45 : 0.28,
              });
              connections++;
              if (connections >= 5) break;
            }
          }
        }
      }

      // 6. Spawn Traveling Signal Pulses on Edges
      const signalCount = Math.min(60, Math.floor(edges.length * 0.2));
      for (let k = 0; k < signalCount; k++) {
        signals.push({
          edgeIdx: Math.floor(Math.random() * edges.length),
          progress: Math.random(),
          speed: 0.008 + Math.random() * 0.015,
          color: Math.random() > 0.4 ? '#E9D5FF' : '#A855F7',
        });
      }
    };

    buildMesh();

    // Glitch controller state
    let time = 0;
    let isGlitching = false;
    let glitchDuration = 0;
    let glitchShiftX = 0;
    let glitchShiftY = 0;
    let nextGlitchTime = 2.5 + Math.random() * 3.0;

    const render = () => {
      time += 0.016;

      // Smooth camera interpolation
      currentRotX += (targetRotX - currentRotX) * 0.06;
      currentRotY += (targetRotY - currentRotY) * 0.06;

      // Periodic restrained digital glitch trigger
      if (time >= nextGlitchTime && !isGlitching) {
        isGlitching = true;
        glitchDuration = 0.12 + Math.random() * 0.08;
        glitchShiftX = (Math.random() - 0.5) * 8;
        glitchShiftY = (Math.random() - 0.5) * 3;
      }

      if (isGlitching) {
        glitchDuration -= 0.016;
        if (glitchDuration <= 0) {
          isGlitching = false;
          glitchShiftX = 0;
          glitchShiftY = 0;
          nextGlitchTime = time + 3.0 + Math.random() * 3.5;
        }
      }

      ctx.clearRect(0, 0, width, height);

      // Scale factor dynamically adjusted to canvas width
      // Base mesh is 980x670
      const scale = Math.min(width / 1100, height / 580) * 0.95;
      const centerX = width * 0.5 + (isGlitching ? glitchShiftX : 0);
      const floatY = Math.sin(time * 1.8) * 8;
      const centerY = height * 0.5 + floatY + (isGlitching ? glitchShiftY : 0);

      // Subtle Purple Radial Lighting behind the 47 mesh
      const bgGlow = ctx.createRadialGradient(
        centerX,
        centerY,
        20,
        centerX,
        centerY,
        340 * scale
      );
      bgGlow.addColorStop(0, 'rgba(124, 58, 237, 0.28)');
      bgGlow.addColorStop(0.45, 'rgba(168, 85, 247, 0.12)');
      bgGlow.addColorStop(0.8, 'rgba(88, 28, 135, 0.04)');
      bgGlow.addColorStop(1, 'rgba(8, 8, 10, 0)');

      ctx.save();
      ctx.fillStyle = bgGlow;
      ctx.beginPath();
      ctx.arc(centerX, centerY, 360 * scale, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Project 3D nodes into 2D screen space
      const cosY = Math.cos(currentRotY);
      const sinY = Math.sin(currentRotY);
      const cosX = Math.cos(currentRotX);
      const sinX = Math.sin(currentRotX);

      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        // Rotate around Y axis
        const x1 = n.x0 * cosY + n.z0 * sinY;
        const z1 = -n.x0 * sinY + n.z0 * cosY;

        // Rotate around X axis
        const y2 = n.y0 * cosX - z1 * sinX;
        const z2 = n.y0 * sinX + z1 * cosX;

        // Perspective projection
        const fov = 1100;
        const p = fov / (fov + z2);

        n.x = centerX + x1 * scale * p;
        n.y = centerY + y2 * scale * p;
        n.z = z2;
      }

      // Draw Wireframe Lines (Edges)
      ctx.lineWidth = 1.2;
      for (let i = 0; i < edges.length; i++) {
        const edge = edges[i];
        const n1 = nodes[edge.a];
        const n2 = nodes[edge.b];

        if (!n1 || !n2) continue;

        ctx.strokeStyle = edge.color;
        ctx.globalAlpha = isGlitching && Math.random() > 0.85 ? 0.8 : edge.opacity;
        ctx.beginPath();
        ctx.moveTo(n1.x, n1.y);
        ctx.lineTo(n2.x, n2.y);
        ctx.stroke();
      }
      ctx.globalAlpha = 1;

      // Draw Traveling Light Signals across edges
      for (let s = 0; s < signals.length; s++) {
        const sig = signals[s];
        sig.progress += sig.speed;
        if (sig.progress >= 1) {
          sig.progress = 0;
          sig.edgeIdx = Math.floor(Math.random() * edges.length);
        }

        const edge = edges[sig.edgeIdx];
        if (!edge) continue;
        const n1 = nodes[edge.a];
        const n2 = nodes[edge.b];
        if (!n1 || !n2) continue;

        const sx = n1.x + (n2.x - n1.x) * sig.progress;
        const sy = n1.y + (n2.y - n1.y) * sig.progress;

        ctx.save();
        ctx.fillStyle = sig.color;
        ctx.shadowColor = sig.color;
        ctx.shadowBlur = 8;
        ctx.beginPath();
        ctx.arc(sx, sy, 2.0, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Draw Network Nodes
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        const pulse = Math.sin(time * 3 + n.pulseOffset) * 0.4 + 0.6;
        const isFacet = n.baseColor === '#A855F7' || n.baseColor === '#C084FC';

        ctx.save();
        ctx.fillStyle = n.baseColor;
        ctx.shadowColor = isFacet ? '#C084FC' : '#A855F7';
        ctx.shadowBlur = isFacet ? 7 : 4;
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.size * pulse, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      // Restrained digital glitch artifact: subtle horizontal micro-scanline slice
      if (isGlitching) {
        ctx.save();
        const sliceY = centerY - 150 + Math.random() * 300;
        const sliceH = 8 + Math.random() * 16;
        ctx.fillStyle = 'rgba(168, 85, 247, 0.15)';
        ctx.fillRect(centerX - 350 * scale, sliceY, 700 * scale, sliceH);
        ctx.restore();
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className={`relative w-full flex items-center justify-center select-none ${className}`}>
      <div className="w-full max-w-4xl h-[340px] sm:h-[400px] md:h-[460px] lg:h-[500px] relative">
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>
    </div>
  );
};
