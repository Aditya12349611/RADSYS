import React, { useEffect, useRef, useState } from 'react';

interface CADCanvasProps {
  mode?: 'hero' | 'about' | 'compact';
  interactive?: boolean;
}

export const CADCanvas: React.FC<CADCanvasProps> = ({ mode = 'hero', interactive = true }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [coords, setCoords] = useState({ x: '142.809', y: '-89.412', z: '304.115' });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };
    window.addEventListener('resize', handleResize);

    // 3D Wireframe Cube/Octahedron Nodes
    let angleX = 0.005;
    let angleY = 0.008;
    let mouseX = 0;
    let mouseY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = (e.clientX - rect.left - width / 2) * 0.001;
      mouseY = (e.clientY - rect.top - height / 2) * 0.001;
      setCoords({
        x: (e.clientX * 0.45).toFixed(3),
        y: (e.clientY * -0.32).toFixed(3),
        z: (Math.sin(Date.now() * 0.001) * 200).toFixed(3)
      });
    };

    if (interactive) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    // Geometry Vertices (Hyper-dimensional CAD Object)
    const size = mode === 'hero' ? 140 : 100;
    const vertices = [
      // Cube outer
      { x: -size, y: -size, z: -size },
      { x: size, y: -size, z: -size },
      { x: size, y: size, z: -size },
      { x: -size, y: size, z: -size },
      { x: -size, y: -size, z: size },
      { x: size, y: -size, z: size },
      { x: size, y: size, z: size },
      { x: -size, y: size, z: size },
      // Octahedron core
      { x: 0, y: -size * 1.4, z: 0 },
      { x: 0, y: size * 1.4, z: 0 },
      { x: -size * 1.4, y: 0, z: 0 },
      { x: size * 1.4, y: 0, z: 0 },
      { x: 0, y: 0, z: -size * 1.4 },
      { x: 0, y: 0, z: size * 1.4 },
    ];

    const edges = [
      // Cube edges
      [0, 1], [1, 2], [2, 3], [3, 0],
      [4, 5], [5, 6], [6, 7], [7, 4],
      [0, 4], [1, 5], [2, 6], [3, 7],
      // Octahedron edges
      [8, 10], [8, 11], [8, 12], [8, 13],
      [9, 10], [9, 11], [9, 12], [9, 13],
      [10, 12], [12, 11], [11, 13], [13, 10]
    ];

    let rotX = 0.4;
    let rotY = 0.6;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      rotX += angleX + mouseY * 0.1;
      rotY += angleY + mouseX * 0.1;

      const projected: { x: number; y: number }[] = [];
      const focalLength = 400;

      // Project vertices
      for (let i = 0; i < vertices.length; i++) {
        const v = vertices[i];

        // Rotation around X
        let y1 = v.y * Math.cos(rotX) - v.z * Math.sin(rotX);
        let z1 = v.y * Math.sin(rotX) + v.z * Math.cos(rotX);

        // Rotation around Y
        let x2 = v.x * Math.cos(rotY) + z1 * Math.sin(rotY);
        let z2 = -v.x * Math.sin(rotY) + z1 * Math.cos(rotY);

        const scale = focalLength / (focalLength + z2 + 300);
        const xProj = x2 * scale + width / 2;
        const yProj = y1 * scale + height / 2;

        projected.push({ x: xProj, y: yProj });
      }

      // Draw Grid Lines HUD
      ctx.strokeStyle = 'rgba(0, 102, 255, 0.08)';
      ctx.lineWidth = 1;
      const gridSize = 40;
      for (let x = 0; x < width; x += gridSize) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += gridSize) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }

      // Draw CAD Wireframe Edges
      ctx.strokeStyle = 'rgba(0, 102, 255, 0.75)';
      ctx.lineWidth = 1.5;

      edges.forEach(([p1, p2]) => {
        const pt1 = projected[p1];
        const pt2 = projected[p2];
        ctx.beginPath();
        ctx.moveTo(pt1.x, pt1.y);
        ctx.lineTo(pt2.x, pt2.y);
        ctx.stroke();
      });

      // Draw Vertices Nodes & Technical Callouts
      projected.forEach((p, idx) => {
        ctx.fillStyle = idx >= 8 ? '#0066FF' : '#0B0F14';
        ctx.beginPath();
        ctx.arc(p.x, p.y, idx >= 8 ? 3.5 : 2.5, 0, Math.PI * 2);
        ctx.fill();

        // Technical crosshairs on node 0 & node 8
        if (idx === 0 || idx === 8) {
          ctx.strokeStyle = 'rgba(0, 102, 255, 0.4)';
          ctx.beginPath();
          ctx.arc(p.x, p.y, 12, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // Draw Center HUD Circle
      const centerX = width / 2;
      const centerY = height / 2;
      ctx.strokeStyle = 'rgba(11, 15, 20, 0.15)';
      ctx.beginPath();
      ctx.arc(centerX, centerY, mode === 'hero' ? 180 : 130, 0, Math.PI * 2);
      ctx.stroke();

      // Technical Compass Ticks
      ctx.fillStyle = '#0066FF';
      ctx.font = '10px "Space Mono", monospace';
      ctx.fillText(`CAD_SYS_V4 // RADSYS`, 20, height - 20);
      ctx.fillText(`STATE: ACTIVE_VECTOR`, width - 180, height - 20);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      if (interactive) {
        window.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, [mode, interactive]);

  return (
    <div className="relative w-full h-full min-h-[360px] flex items-center justify-center overflow-hidden rounded-sm border border-slate-200 bg-slate-50/50 technical-grid">
      <canvas ref={canvasRef} className="w-full h-full block" />
      
      {/* Top Left HUD Telemetry Badge */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1.5 border border-slate-200 shadow-sm rounded-none text-[10px] font-mono tracking-wider text-slate-700 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-radsys-blue animate-pulse"></span>
        <span>SYS.KINEMATICS // X:{coords.x} Y:{coords.y} Z:{coords.z}</span>
      </div>

      {/* Bottom Right CAD Specs */}
      <div className="absolute bottom-4 right-4 bg-radsys-black/90 backdrop-blur-md px-3 py-1.5 border border-radsys-blue/30 text-white rounded-none text-[10px] font-mono tracking-wider hidden sm:flex items-center gap-3">
        <span className="text-radsys-blue">TOLERANCE: ±0.001mm</span>
        <span className="text-slate-400">|</span>
        <span>CAD ARCHITECTURE: PARAMETRIC</span>
      </div>
    </div>
  );
};
