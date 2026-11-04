import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, Heading, Flow, CtaBand, cta } from "@/components/site/primitives";
import { images, programs } from "@/lib/site-data";

export const Route = createFileRoute("/college-collaboration")({
  head: () => ({
    meta: [
      { title: "College R&D Collaboration & Apprenticeship — AcenAAr Technologies" },
      { name: "description", content: "Institutional R&D collaboration and apprenticeship programs for colleges in embedded systems, IoT, AI/ML, robotics and more." },
      { property: "og:title", content: "College R&D Collaboration — AcenAAr" },
      { property: "og:description", content: "College → AcenAAr → Industry-relevant technology experience." },
    ],
  }),
  component: College,
});

const areas = ["R&D initiatives", "Embedded systems", "IoT", "AI/ML", "Robotics", "Automation", "Interdisciplinary projects", "Technology labs", "Prototyping", "Engineering development", "Institutional technology programs"];

function College() {
  return (
    <>
      <PageHero eyebrow="For Principals, HODs & R&D Cells" img={images.college} title={<>College <span className="text-gradient">R&D Collaboration</span></>}
        sub="An institutional partnership model for engineering departments, innovation cells and R&D teams.">
        <Link to="/contact" className={cta()}>Start a College R&D Collaboration</Link>
      </PageHero>
      <Section>
        <Heading eyebrow="Collaboration Areas" title="What we build together" />
        <div className="flex flex-wrap gap-3">{areas.map((a) => <span key={a} className="rounded-xl border border-border bg-card px-4 py-3 font-medium shadow-soft">{a}</span>)}</div>
      </Section>
      <Section className="bg-muted/40">
        <Heading eyebrow="Institutional Apprenticeship" title="Apprenticeship Programs for Colleges" sub="A structured collaboration between your institution and AcenAAr — not an individual course purchase." />
        <Flow steps={["COLLEGE PARTNERSHIP", "PROGRAM PLANNING", "TECHNOLOGY TRACK", "HANDS-ON ENGINEERING", "PROJECTS", "INDUSTRY-RELEVANT EXPERIENCE"]} />
        <Link to="/contact" className={cta({ variant: "ember" }) + " mt-10"}>Request Institutional Program</Link>
      </Section>
      <Section>
        <Heading eyebrow="Technology Learning & Hands-on Programs" title="Short-term & long-term tracks" sub="Available across academic groups as part of institutional programs." />
        <div className="grid gap-5 md:grid-cols-2">
          {programs.map((g) => (
            <div key={g.group} className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <h3 className="font-semibold">{g.group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">{g.items.map((i) => <span key={i} className="rounded-full bg-secondary px-3 py-1 text-sm">{i}</span>)}</div>
            </div>
          ))}
        </div>
      </Section>
      <CtaBand title="Partner with AcenAAr for your institution." sub="Let's plan an R&D or apprenticeship program." primary="Start a Collaboration" />
    </>
  );
}
