import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const FullScreenHeroNetwork: React.FC<{ className?: string }> = ({ className = '' }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let width = container.clientWidth || window.innerWidth;
    let height = container.clientHeight || window.innerHeight;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Scene & Camera Setup
    const scene = new THREE.Scene();
    scene.fog = new THREE.FogExp2(0x08080a, 0.0012);

    const camera = new THREE.PerspectiveCamera(52, width / height, 1, 3000);
    camera.position.set(0, 0, 480);

    // 2. WebGL Renderer
    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.35;
    container.appendChild(renderer.domElement);

    // 3. Subtle Ambient & Dynamic Illumination
    const ambientLight = new THREE.AmbientLight(0x160b29, 3.2);
    scene.add(ambientLight);

    const centralGlowLight = new THREE.PointLight(0xa855f7, 3.5, 900);
    centralGlowLight.position.set(0, 40, 50);
    scene.add(centralGlowLight);

    const secondaryGlowLight = new THREE.PointLight(0x7c3aed, 2.5, 800);
    secondaryGlowLight.position.set(200, -120, -100);
    scene.add(secondaryGlowLight);

    const cyanAccentLight = new THREE.PointLight(0x38bdf8, 1.8, 700);
    cyanAccentLight.position.set(-240, 140, -80);
    scene.add(cyanAccentLight);

    // 4. Generate 3D Network Nodes across Full Viewport
    const isMobile = width < 768;
    const nodeCount = isMobile ? 36 : 64;

    interface NetworkNode {
      position: THREE.Vector3;
      velocity: THREE.Vector3;
      radius: number;
      baseColor: number;
      glowColor: number;
      mesh: THREE.Mesh;
      glowMesh: THREE.Mesh;
      phase: number;
      pulseSpeed: number;
    }

    const nodes: NetworkNode[] = [];
    const sphereGeo = new THREE.SphereGeometry(1, 16, 16);
    const nodeGroup = new THREE.Group();

    // Node spatial bounds
    const spreadX = isMobile ? 320 : 620;
    const spreadY = isMobile ? 420 : 420;
    const spreadZ = 220;

    for (let i = 0; i < nodeCount; i++) {
      // Disperse nodes around center, perimeter, and depth
      const x = (Math.random() - 0.5) * spreadX * 2;
      const y = (Math.random() - 0.5) * spreadY * 1.8;
      const z = (Math.random() - 0.5) * spreadZ * 2;

      // Color variation: Electric Violet, Neon Purple, Soft Lavender, subtle Ice Cyan
      const randColor = Math.random();
      let baseColor = 0xa855f7;
      let glowColor = 0xc084fc;
      if (randColor > 0.75) {
        baseColor = 0x818cf8;
        glowColor = 0xa5b4fc;
      } else if (randColor > 0.55) {
        baseColor = 0x38bdf8;
        glowColor = 0x7dd3fc;
      } else if (randColor > 0.35) {
        baseColor = 0xe9d5ff;
        glowColor = 0xa855f7;
      }

      const radius = 2.0 + Math.random() * 2.8;

      // Inner solid sphere
      const mat = new THREE.MeshStandardMaterial({
        color: baseColor,
        roughness: 0.1,
        metalness: 0.9,
        emissive: baseColor,
        emissiveIntensity: 0.9,
      });
      const mesh = new THREE.Mesh(sphereGeo, mat);
      mesh.scale.set(radius, radius, radius);
      mesh.position.set(x, y, z);
      nodeGroup.add(mesh);

      // Outer glowing halo wireframe
      const glowMat = new THREE.MeshBasicMaterial({
        color: glowColor,
        transparent: true,
        opacity: 0.32,
        wireframe: true,
      });
      const glowMesh = new THREE.Mesh(sphereGeo, glowMat);
      glowMesh.scale.set(radius * 1.6, radius * 1.6, radius * 1.6);
      glowMesh.position.set(x, y, z);
      nodeGroup.add(glowMesh);

      nodes.push({
        position: new THREE.Vector3(x, y, z),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.25,
          (Math.random() - 0.5) * 0.25,
          (Math.random() - 0.5) * 0.18
        ),
        radius,
        baseColor,
        glowColor,
        mesh,
        glowMesh,
        phase: Math.random() * Math.PI * 2,
        pulseSpeed: 1.2 + Math.random() * 1.5,
      });
    }
    scene.add(nodeGroup);

    // 5. Interconnected Lines Between Proximal Nodes
    const maxDistance = isMobile ? 120 : 160;
    interface Connection {
      nodeA: NetworkNode;
      nodeB: NetworkNode;
      line: THREE.Line;
      material: THREE.LineBasicMaterial;
      curve: THREE.CatmullRomCurve3;
      baseOpacity: number;
    }

    const connections: Connection[] = [];
    const lineGroup = new THREE.Group();

    for (let i = 0; i < nodes.length; i++) {
      for (let j = i + 1; j < nodes.length; j++) {
        const dist = nodes[i].position.distanceTo(nodes[j].position);
        if (dist < maxDistance) {
          const p1 = nodes[i].position;
          const p2 = nodes[j].position;

          // Gentle arc in 3D
          const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
          mid.z += (Math.random() - 0.5) * 18;

          const curve = new THREE.CatmullRomCurve3([p1, mid, p2]);
          const points = curve.getPoints(16);
          const geo = new THREE.BufferGeometry().setFromPoints(points);

          const opacity = 0.12 + (1 - dist / maxDistance) * 0.26;
          const mat = new THREE.LineBasicMaterial({
            color: 0x9333ea,
            transparent: true,
            opacity: opacity,
            linewidth: 1,
          });

          const line = new THREE.Line(geo, mat);
          lineGroup.add(line);

          connections.push({
            nodeA: nodes[i],
            nodeB: nodes[j],
            line,
            material: mat,
            curve,
            baseOpacity: opacity,
          });
        }
      }
    }
    scene.add(lineGroup);

    // 6. Glowing Light Signals Traveling Across Connections
    interface PulsePacket {
      curve: THREE.CatmullRomCurve3;
      progress: number;
      speed: number;
      mesh: THREE.Mesh;
      color: number;
    }

    const pulsePackets: PulsePacket[] = [];
    const pulseGeo = new THREE.SphereGeometry(1.5, 12, 12);
    const pulseGroup = new THREE.Group();

    // Spawn ~40 active pulses traveling across the connections
    const targetPulses = Math.min(connections.length, isMobile ? 22 : 44);
    for (let i = 0; i < targetPulses; i++) {
      const conn = connections[Math.floor(Math.random() * connections.length)];
      if (!conn) continue;

      const pColor = Math.random() > 0.4 ? 0xc084fc : 0x7c3aed;
      const pMat = new THREE.MeshBasicMaterial({
        color: pColor,
        transparent: true,
        opacity: 0.95,
      });
      const pMesh = new THREE.Mesh(pulseGeo, pMat);
      pulseGroup.add(pMesh);

      pulsePackets.push({
        curve: conn.curve,
        progress: Math.random(),
        speed: 0.0035 + Math.random() * 0.0055,
        mesh: pMesh,
        color: pColor,
      });
    }
    scene.add(pulseGroup);

    // 7. Ambient Micro-Data Starfield Particles
    const starCount = isMobile ? 120 : 250;
    const starGeo = new THREE.BufferGeometry();
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);

    for (let i = 0; i < starCount * 3; i += 3) {
      starPositions[i] = (Math.random() - 0.5) * 1400;
      starPositions[i + 1] = (Math.random() - 0.5) * 900;
      starPositions[i + 2] = (Math.random() - 0.5) * 600;

      // Soft electric violet, white, and lavender
      starColors[i] = 0.7 + Math.random() * 0.3;
      starColors[i + 1] = 0.5 + Math.random() * 0.4;
      starColors[i + 2] = 0.95;
    }

    starGeo.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeo.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    const starMat = new THREE.PointsMaterial({
      size: 2.0,
      vertexColors: true,
      transparent: true,
      opacity: 0.45,
    });
    const starField = new THREE.Points(starGeo, starMat);
    scene.add(starField);

    // 8. Subtle Parallax Tracking
    let targetCamX = 0;
    let targetCamY = 0;

    const handleWindowMouseMove = (e: MouseEvent) => {
      const nx = (e.clientX / window.innerWidth) * 2 - 1;
      const ny = -(e.clientY / window.innerHeight) * 2 + 1;
      targetCamX = nx * 38;
      targetCamY = ny * 24;
    };

    window.addEventListener('mousemove', handleWindowMouseMove);

    // 9. Resize Handling
    const handleResize = () => {
      if (!container) return;
      width = container.clientWidth || window.innerWidth;
      height = container.clientHeight || window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
    };

    window.addEventListener('resize', handleResize);

    // 10. Animation Loop
    let animId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      const elapsed = clock.getElapsedTime();

      // Camera parallax interpolation
      if (!prefersReducedMotion) {
        camera.position.x += (targetCamX - camera.position.x) * 0.04;
        camera.position.y += (targetCamY - camera.position.y) * 0.04;
      }
      camera.lookAt(0, 0, 0);

      // Periodic light energy wave sweeping through 3D space
      const waveRadius = (elapsed * 75) % 800;
      centralGlowLight.position.x = Math.sin(elapsed * 0.6) * 120;
      centralGlowLight.position.y = 40 + Math.cos(elapsed * 0.8) * 40;

      // Update Node positions & gentle breathing
      nodes.forEach((node, idx) => {
        if (!prefersReducedMotion) {
          node.position.add(node.velocity);

          // Boundary bounce
          if (Math.abs(node.position.x) > spreadX) node.velocity.x *= -1;
          if (Math.abs(node.position.y) > spreadY) node.velocity.y *= -1;
          if (Math.abs(node.position.z) > spreadZ) node.velocity.z *= -1;

          node.mesh.position.copy(node.position);
          node.glowMesh.position.copy(node.position);
        }

        // Breathing scale
        const distToCenter = node.position.length();
        const waveHit = Math.abs(distToCenter - waveRadius) < 60;
        const pulse = Math.sin(elapsed * node.pulseSpeed + node.phase) * 0.18 + 1;
        const waveBoost = waveHit ? 1.4 : 1.0;
        const currentScale = node.radius * pulse * waveBoost;

        node.mesh.scale.set(currentScale, currentScale, currentScale);
        node.glowMesh.scale.set(currentScale * 1.6, currentScale * 1.6, currentScale * 1.6);

        node.glowMesh.rotation.x = elapsed * 0.3 + idx;
        node.glowMesh.rotation.y = elapsed * 0.2 + idx;

        // Wave highlight
        const glowMat = node.glowMesh.material as THREE.MeshBasicMaterial;
        glowMat.opacity = waveHit ? 0.6 : 0.28;
      });

      // Update lines based on moving nodes
      connections.forEach((conn) => {
        const p1 = conn.nodeA.position;
        const p2 = conn.nodeB.position;

        const positions = (conn.line.geometry as THREE.BufferGeometry).attributes.position;
        if (positions) {
          const mid = new THREE.Vector3().addVectors(p1, p2).multiplyScalar(0.5);
          conn.curve.points[0].copy(p1);
          conn.curve.points[1].copy(mid);
          conn.curve.points[2].copy(p2);

          const updatedPoints = conn.curve.getPoints(16);
          for (let pIdx = 0; pIdx < updatedPoints.length; pIdx++) {
            positions.setXYZ(pIdx, updatedPoints[pIdx].x, updatedPoints[pIdx].y, updatedPoints[pIdx].z);
          }
          positions.needsUpdate = true;
        }

        // Energy wave luminescence
        const midDist = p1.distanceTo(new THREE.Vector3(0, 0, 0));
        const waveIlluminated = Math.abs(midDist - waveRadius) < 70;
        conn.material.opacity = waveIlluminated ? 0.55 : conn.baseOpacity;
        conn.material.color.setHex(waveIlluminated ? 0xc084fc : 0x8b5cf6);
      });

      // Update traveling pulse signals
      pulsePackets.forEach((p) => {
        p.progress += p.speed;
        if (p.progress >= 1) {
          p.progress = 0;
          // Switch to another connection occasionally
          const nextConn = connections[Math.floor(Math.random() * connections.length)];
          if (nextConn) p.curve = nextConn.curve;
        }

        const pt = p.curve.getPoint(p.progress);
        p.mesh.position.copy(pt);

        // Signal glow scale
        const scale = (Math.sin(elapsed * 8 + p.progress * 12) * 0.35 + 1.2) * 1.3;
        p.mesh.scale.set(scale, scale, scale);
      });

      // Slow particle field drift
      starField.rotation.y = elapsed * 0.012;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('mousemove', handleWindowMouseMove);
      window.removeEventListener('resize', handleResize);
      if (renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none ${className}`}
      aria-hidden="true"
    />
  );
};
