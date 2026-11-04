import { createFileRoute } from "@tanstack/react-router";
import { Plus, Equal } from "lucide-react";
import { PageHero, Section, Heading, Flow, CtaBand } from "@/components/site/primitives";
import { images } from "@/lib/site-data";

export const Route = createFileRoute("/rnd")({
  head: () => ({
    meta: [
      { title: "Research & Development — AcenAAr Technologies" },
      { name: "description", content: "Engineering ideas into practical technology: embedded R&D, prototyping, validation and our Center of Excellence." },
      { property: "og:title", content: "Research & Development — AcenAAr" },
      { property: "og:description", content: "Ideate → Architect → Build → Validate → Deliver." },
    ],
  }),
  component: Rnd,
});

const combos = [
  { t: "CSE + ECE", parts: ["AI", "Machine Learning", "Sensors", "Embedded Systems"], r: "Intelligent Connected Systems" },
  { t: "ECE + Mechanical", parts: ["Embedded Control", "Sensors", "Motors", "Mechanical Design"], r: "Robotics & Automation" },
  { t: "CSE + ECE + Mechanical", parts: ["AI/ML", "Embedded Systems", "Computer Intelligence", "Mechanical Engineering", "Robotics"], r: "Integrated Intelligent Machines" },
];

function Equation({ parts, result }: { parts: string[]; result: string }) {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {parts.map((p, i) => (
        <span key={p} className="flex items-center gap-2">
          <span className="rounded-lg border border-border bg-card px-3 py-1.5 text-sm">{p}</span>
          {i < parts.length - 1 && <Plus className="h-3.5 w-3.5 text-sky" />}
        </span>
      ))}
      <Equal className="h-4 w-4 text-ember" />
      <span className="rounded-lg bg-primary px-3 py-1.5 text-sm font-semibold text-primary-foreground">{result}</span>
    </div>
  );
}

function Rnd() {
  return (
    <>
      <PageHero eyebrow="Research & Development" img={images.rnd} title={<>Engineering ideas into <span className="text-gradient">practical technology</span></>}
        sub="Product development, embedded R&D, hardware/software integration, prototyping, validation and concurrent engineering projects." />
      <Section>
        <Heading eyebrow="R&D Workflow" title="How ideas become technology" />
        <Flow steps={["IDEATE", "ARCHITECT", "BUILD", "VALIDATE", "DELIVER"]} />
      </Section>
      <Section className="bg-muted/40">
        <Heading eyebrow="Center of Excellence" title="A product-development engine" />
        <Equation parts={["Multiple Concurrent Projects", "Engineering Expertise", "Offsite Project Engagement", "Continuous Product Development"]} result="Real-World Engineering Solutions" />
      </Section>
      <Section>
        <Heading eyebrow="Key Differentiator" title="Multi-Disciplinary Technology Collaboration" sub="We bring computer science, electronics and mechanical engineering together." />
        <div className="space-y-5">
          {combos.map((c) => (
            <div key={c.t} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <p className="mb-4 font-display text-sm font-semibold tracking-widest text-ember">{c.t}</p>
              <Equation parts={c.parts} result={c.r} />
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-sky-soft/60">
        <Heading eyebrow="Technology Innovation Alliance" title="One point of contact for integrated solutions" sub="Where multiple complementary capabilities are required, AcenAAr coordinates the engineering end-to-end." />
        <Flow steps={["CUSTOMER NEED", "ACENAAR ENGINEERING", "COMPLEMENTARY PARTNERS", "INTEGRATED SOLUTION"]} />
        <div className="mt-8 flex flex-wrap gap-2">
          {["Single Point of Contact", "Complementary Expertise", "Faster Collaboration", "Scalable Solutions", "Integrated Engineering"].map((b) => <span key={b} className="rounded-full bg-card px-4 py-2 text-sm shadow-soft">{b}</span>)}
        </div>
      </Section>
      <CtaBand title="Bring us your R&D challenge." sub="From architecture to validated prototype." primary="Partner With Us" />
    </>
  );
}
