import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Cpu, Radio, Brain, Bot, BatteryCharging, Wrench, Layers, Target, Zap, Globe2, Boxes, Hand } from "lucide-react";
import { HeroVisual } from "@/components/site/HeroVisual";
import { Ecosystem } from "@/components/site/Ecosystem";
import { cta, Section, Heading, Flow, ImgCard, CtaBand } from "@/components/site/primitives";
import { services, images, company } from "@/lib/site-data";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AcenAAr Technologies — Engineering Intelligent Solutions" },
      { name: "description", content: "Embedded engineering, IoT, AI & ML, robotics, smart automation and EV/BMS technologies for practical products and integrated solutions." },
      { property: "og:title", content: "AcenAAr Technologies — Engineering Intelligent Solutions" },
      { property: "og:description", content: "Engineer → Build → Integrate → Deliver. Industry 4.0 product engineering from Andhra Pradesh, India." },
    ],
  }),
  component: Home,
});

const icons = [Wrench, Cpu, Radio, Brain, Bot, BatteryCharging];

const solutions = [
  { t: "IoT Solutions", p: "Unmonitored assets", s: "Connected sensor monitoring" },
  { t: "Embedded Solutions", p: "Need for dedicated control", s: "Custom microcontroller systems" },
  { t: "Smart Automation", p: "Manual, repetitive processes", s: "Automated control systems" },
  { t: "Robotics Solutions", p: "Tasks needing autonomy", s: "Autonomous robotic platforms" },
  { t: "AI/ML Integrated", p: "Data without decisions", s: "Real-time sensor intelligence" },
  { t: "EV/BMS Solutions", p: "Battery safety & life", s: "Monitoring, protection & balancing" },
];

const stack = [
  { l: "Sensing", i: ["Ultrasonic", "PIR", "DHT", "IR", "LDR", "Keypad", "Air quality"] },
  { l: "Control", i: ["Arduino", "ESP32", "Raspberry Pi"] },
  { l: "Connectivity", i: ["Wi-Fi", "Bluetooth", "Web / Cloud"] },
  { l: "Actuation", i: ["Servo", "Relay", "Buzzer", "Motors"] },
  { l: "Intelligence", i: ["AI", "Machine Learning", "Deep Learning"] },
  { l: "Application", i: ["IoT", "Robotics", "Automation", "EV/BMS"] },
];

const why = [
  { t: "Embedded Engineering", i: Cpu, d: "Hardware and firmware expertise at the core of everything we build." },
  { t: "Industry 4.0 Focus", i: Zap, d: "Connected, intelligent and automated systems for modern industry." },
  { t: "Product Engineering", i: Layers, d: "Taking ideas from concept toward deployable products." },
  { t: "Multi-Technology Integration", i: Boxes, d: "IoT, AI, robotics and EV technologies brought together." },
  { t: "Real-World Applications", i: Globe2, d: "Practical engineering that addresses real challenges." },
  { t: "Hands-on Engineering", i: Hand, d: "Build-first approach with real hardware and prototypes." },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-hero pt-32 pb-24 md:pt-40">
        <div className="absolute inset-0 circuit-grid [mask-image:radial-gradient(ellipse_at_center,black,transparent_75%)]" />
        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-5 md:px-8 lg:grid-cols-2">
          <div>
            <span className="inline-flex rounded-full border border-border bg-card px-4 py-1.5 font-display text-[10px] font-semibold tracking-[0.2em] text-muted-foreground shadow-soft md:text-xs">
              INDUSTRY 4.0 • EMBEDDED ENGINEERING • PRODUCT INNOVATION
            </span>
            <h1 className="mt-6 text-5xl font-semibold leading-[1.02] md:text-7xl">
              Engineering <span className="text-gradient">Intelligent Solutions</span> for the Real World
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
              AcenAAr Technologies combines embedded engineering, IoT, AI & ML, robotics, smart automation and EV/BMS technologies to develop practical products, integrated solutions and engineering capabilities.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link to="/products" className={cta()}>Explore Solutions <ArrowRight className="h-4 w-4" /></Link>
              <Link to="/contact" className={cta({ variant: "outline" })}>Partner With Us</Link>
            </div>
            <p className="mt-10 font-display text-xs font-semibold tracking-[0.3em] text-muted-foreground">ENGINEER → BUILD → INTEGRATE → DELIVER</p>
          </div>
          <HeroVisual />
        </div>
      </section>

      <Section>
        <Heading eyebrow="Our Technology Ecosystem" title="Seven domains. One integrated engineering team." sub="Hover any node to explore how each technology connects back to AcenAAr." />
        <Ecosystem />
      </Section>

      <Section className="bg-muted/40">
        <Heading eyebrow="What We Do" title="From embedded hardware to intelligent systems" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => {
            const Icon = icons[i]!;
            return (
              <ImgCard key={s.n} img={s.img} title={s.title} tag={s.n}>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <div className="mt-4 flex flex-wrap gap-1.5">
                  {s.tech.map((t) => <span key={t} className="rounded-full bg-secondary px-2.5 py-1 text-[11px] font-medium">{t}</span>)}
                </div>
                <p className="mt-3 text-xs text-muted-foreground"><b className="text-foreground">Applications:</b> {s.apps.join(", ")}</p>
                <div className="mt-5 flex items-center justify-between">
                  <Icon className="h-5 w-5 text-ember" />
                  <Link to="/products" className={cta({ variant: "ghost" })}>Explore <ArrowRight className="h-4 w-4" /></Link>
                </div>
              </ImgCard>
            );
          })}
        </div>
      </Section>

      <Section>
        <Heading eyebrow="Ready-to-Deploy" title="Ready-to-Deploy Technology Solutions" sub="Practical engineering, not theory. Every solution moves from a real problem to a working application." />
        <Flow steps={["PROBLEM", "ENGINEERING", "TECHNOLOGY", "SOLUTION", "APPLICATION"]} className="mb-10" />
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {solutions.map((s) => (
            <div key={s.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft transition hover:border-sky">
              <h3 className="text-lg font-semibold">{s.t}</h3>
              <div className="mt-4 space-y-2 text-sm">
                <p className="flex gap-2"><span className="w-20 shrink-0 text-muted-foreground">Problem</span><span>{s.p}</span></p>
                <p className="flex gap-2"><span className="w-20 shrink-0 text-muted-foreground">Solution</span><span className="font-medium">{s.s}</span></p>
              </div>
            </div>
          ))}
          <div className="flex flex-col justify-between rounded-2xl bg-blush-soft p-6">
            <div><Target className="h-6 w-6 text-ember" /><h3 className="mt-3 text-lg font-semibold">Custom Engineering</h3><p className="mt-1 text-sm text-muted-foreground">Have a unique challenge? We engineer to fit.</p></div>
            <Link to="/contact" className={cta({ variant: "ember", size: "sm" }) + " mt-5 self-start"}>Discuss Your Requirement</Link>
          </div>
        </div>
      </Section>

      <Section className="bg-sky-soft/60">
        <Heading eyebrow="Our Technology Stack" title="Layered from sensor to application" />
        <div className="space-y-3">
          {stack.map((s, i) => (
            <div key={s.l} className="group grid items-center gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft transition hover:translate-x-1 md:grid-cols-[180px_1fr]">
              <p className="font-display text-sm font-semibold tracking-widest"><span className="mr-2 text-ember">0{i + 1}</span>{s.l.toUpperCase()}</p>
              <div className="flex flex-wrap gap-2">{s.i.map((t) => <span key={t} className="rounded-lg border border-border px-3 py-1.5 text-sm">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img src={images.college} alt="College engineering laboratory" loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full rounded-3xl object-cover shadow-lift" />
          <div>
            <Heading eyebrow="Industry-Academia" title="College R&D Collaboration & Institutional Apprenticeship" sub="We partner with colleges on R&D initiatives, technology labs, interdisciplinary projects and institutional apprenticeship programs." />
            <Flow steps={["COLLEGE", "ACENAAR", "INDUSTRY-RELEVANT EXPERIENCE"]} />
            <Link to="/college-collaboration" className={cta() + " mt-8"}>Start a Collaboration <ArrowRight className="h-4 w-4" /></Link>
          </div>
        </div>
      </Section>

      <Section className="bg-muted/40">
        <Heading eyebrow="Why AcenAAr" title="Why Partner With AcenAAr?" />
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {why.map((w, i) => (
            <div key={w.t} className="rounded-2xl border border-border bg-card p-7 shadow-soft">
              <div className="flex items-center justify-between"><w.i className="h-6 w-6 text-sky" /><span className="font-display text-3xl font-semibold text-border">0{i + 1}</span></div>
              <h3 className="mt-5 text-lg font-semibold">{w.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{w.d}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-hero border border-border p-10"><p className="eyebrow">Vision</p><p className="mt-4 font-display text-2xl font-semibold leading-snug md:text-3xl">“{company.vision}”</p></div>
          <div className="rounded-3xl border border-border bg-blush-soft p-10"><p className="eyebrow text-ember">Mission</p><p className="mt-4 font-display text-2xl font-semibold leading-snug md:text-3xl">“{company.mission}”</p></div>
        </div>
      </Section>

      <CtaBand title="Let's build what comes next." sub="Products, ready solutions, R&D or institutional partnerships — talk to our engineering team." primary="Partner With Us" />
    </>
  );
}
