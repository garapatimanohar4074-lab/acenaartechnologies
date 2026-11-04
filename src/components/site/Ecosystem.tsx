import { useState } from "react";
import { domains } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export function Ecosystem() {
  const [active, setActive] = useState(0);
  const d = domains[active]!;
  const R = 40;
  const pts = domains.map((_, i) => {
    const a = (i / domains.length) * Math.PI * 2 - Math.PI / 2;
    return { x: 50 + R * Math.cos(a), y: 50 + R * Math.sin(a) };
  });
  return (
    <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_1fr]">
      <div className="relative mx-auto aspect-square w-full max-w-[540px]">
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          {pts.map((p, i) => (
            <line key={i} x1="50" y1="50" x2={p.x} y2={p.y}
              stroke={i === active ? "var(--ember)" : "var(--sky)"} strokeOpacity={i === active ? 0.9 : 0.35}
              strokeWidth={i === active ? 0.5 : 0.3} strokeDasharray="1.5 1.5" className="animate-dash" />
          ))}
          <circle cx="50" cy="50" r={R} fill="none" stroke="var(--border)" strokeWidth="0.25" />
        </svg>
        <div className="absolute left-1/2 top-1/2 grid h-28 w-28 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-primary text-center text-primary-foreground shadow-lift md:h-32 md:w-32">
          <span className="font-display text-sm font-semibold leading-tight">AcenAAr<br /><span className="text-[10px] tracking-[0.2em] opacity-70">TECHNOLOGIES</span></span>
        </div>
        {domains.map((dm, i) => (
          <button key={dm.key} onMouseEnter={() => setActive(i)} onFocus={() => setActive(i)} onClick={() => setActive(i)}
            style={{ left: `${pts[i]!.x}%`, top: `${pts[i]!.y}%` }}
            className={cn("absolute -translate-x-1/2 -translate-y-1/2 rounded-full border bg-card px-3 py-2 text-[11px] font-semibold shadow-soft transition-all duration-300 md:text-xs",
              i === active ? "scale-110 border-ember text-foreground" : "border-border text-muted-foreground hover:text-foreground")}>
            {dm.name}
          </button>
        ))}
      </div>
      <div className="overflow-hidden rounded-3xl border border-border bg-card shadow-soft">
        <img key={d.key} src={d.img} alt={d.name} loading="lazy" width={1024} height={1024} className="aspect-[16/10] w-full object-cover animate-in fade-in duration-500" />
        <div className="p-7">
          <p className="eyebrow">Technology Domain</p>
          <h3 className="mt-2 text-2xl font-semibold">{d.name}</h3>
          <p className="mt-2 text-muted-foreground">{d.desc}</p>
        </div>
      </div>
    </div>
  );
}
