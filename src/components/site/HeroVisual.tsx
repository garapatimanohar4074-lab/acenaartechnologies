import { useState } from "react";
import pcb from "@/assets/hero-pcb.jpg";

export function HeroVisual() {
  const [m, setM] = useState({ x: 0, y: 0 });
  return (
    <div className="relative" onMouseMove={(e) => {
      const r = e.currentTarget.getBoundingClientRect();
      setM({ x: (e.clientX - r.left) / r.width - 0.5, y: (e.clientY - r.top) / r.height - 0.5 });
    }} onMouseLeave={() => setM({ x: 0, y: 0 })}>
      <svg viewBox="0 0 400 320" className="absolute -inset-6 h-[calc(100%+3rem)] w-[calc(100%+3rem)]" aria-hidden>
        {[[20, 40, 140, 40, 140, 110], [380, 60, 300, 60, 300, 130], [30, 280, 160, 280, 160, 220], [370, 270, 260, 270, 260, 210]].map((p, i) => (
          <polyline key={i} points={`${p[0]},${p[1]} ${p[2]},${p[3]} ${p[4]},${p[5]}`} fill="none" stroke="var(--sky)" strokeOpacity="0.5" strokeWidth="1.2" strokeDasharray="4 4" className="animate-dash" />
        ))}
        {[[20, 40], [380, 60], [30, 280], [370, 270]].map(([x, y], i) => (
          <circle key={i} cx={x} cy={y} r="5" fill="var(--card)" stroke="var(--ember)" strokeWidth="2" />
        ))}
      </svg>
      <div className="relative transition-transform duration-300 ease-out" style={{ transform: `perspective(900px) rotateY(${m.x * 10}deg) rotateX(${-m.y * 10}deg)` }}>
        <img src={pcb} alt="Embedded PCB with ESP32 microcontroller and sensors" width={1280} height={1024} className="w-full rounded-3xl border border-border shadow-lift animate-floaty" />
      </div>
      <div className="absolute -left-4 bottom-8 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-soft backdrop-blur" style={{ transform: `translate(${m.x * -20}px, ${m.y * -20}px)` }}>
        <p className="eyebrow">Sensing → Control</p>
        <p className="font-display text-sm font-semibold">ESP32 · Sensors · Wi-Fi</p>
      </div>
      <div className="absolute -right-3 top-8 rounded-2xl border border-border bg-card/95 px-4 py-3 shadow-soft backdrop-blur" style={{ transform: `translate(${m.x * 20}px, ${m.y * 20}px)` }}>
        <p className="eyebrow text-ember">Intelligence</p>
        <p className="font-display text-sm font-semibold">AI & ML at the edge</p>
      </div>
    </div>
  );
}
