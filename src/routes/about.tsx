import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, Award, Sparkles } from "lucide-react";
import { PageHero, Section, Heading, Flow, CtaBand } from "@/components/site/primitives";
import { images, company } from "@/lib/site-data";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About AcenAAr Technologies — Product Engineering & Industry 4.0" },
      { name: "description", content: "A technology innovation and product engineering company focused on Industry 4.0 and embedded engineering." },
      { property: "og:title", content: "About AcenAAr Technologies" },
      { property: "og:description", content: "Vision, mission and approach of AcenAAr Technologies." },
    ],
  }),
  component: About,
});

const doing = ["Design", "Development", "Engineering", "Training", "Technology Consulting", "Integrated Solutions"];

function About() {
  return (
    <>
      <PageHero eyebrow="About Us" img={images.rnd} title={<>Innovating today for a <span className="text-gradient">better tomorrow</span></>}
        sub="AcenAAr Technologies Private Limited is a technology innovation and product engineering company focused on Industry 4.0 and embedded engineering — building intelligent products for real-world applications." />
      <Section>
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <Heading eyebrow="Who We Are" title="Engineers of practical technology" />
            <p className="text-muted-foreground leading-relaxed">We bring together innovation, engineering and technology across embedded systems, IoT, AI & ML, robotics, smart automation and EV/BMS. Our work turns ideas into intelligent products and integrated solutions — and we share that capability with colleges and institutions through R&D collaboration and apprenticeship programs.</p>
          </div>
          <div>
            <Heading eyebrow="What We Do" title="Capabilities" />
            <div className="grid grid-cols-2 gap-3">
              {doing.map((d) => <div key={d} className="rounded-xl border border-border bg-card p-4 font-medium shadow-soft">{d}</div>)}
            </div>
          </div>
        </div>
      </Section>
      <Section className="bg-muted/40">
        <Heading eyebrow="Our Approach" title="A disciplined engineering cycle" />
        <Flow steps={["IDEATE", "ENGINEER", "VALIDATE", "DELIVER"]} />
      </Section>
      <Section>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-hero p-10">
            <p className="eyebrow">Vision</p>
            <p className="mt-4 font-display text-3xl font-semibold leading-snug">“{company.vision}”</p>
            <Flow steps={["DESIGN", "ENGINEER", "DELIVER"]} className="mt-8" />
          </div>
          <div className="rounded-3xl border border-border bg-blush-soft p-10">
            <p className="eyebrow text-ember">Mission</p>
            <p className="mt-4 font-display text-3xl font-semibold leading-snug">“{company.mission}”</p>
          </div>
        </div>
        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {[{ t: "Integrity", i: ShieldCheck }, { t: "Quality", i: Award }, { t: "Excellence", i: Sparkles }].map((v) => (
            <div key={v.t} className="rounded-2xl border border-border bg-card p-8 text-center shadow-soft transition hover:-translate-y-1 hover:shadow-lift">
              <v.i className="mx-auto h-8 w-8 text-ember" /><h3 className="mt-4 text-xl font-semibold">{v.t}</h3>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand title="Work with an engineering partner." sub="Tell us what you want to build." primary="Partner With Us" />
    </>
  );
}
