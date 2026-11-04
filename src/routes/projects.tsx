import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, ImgCard, CtaBand } from "@/components/site/primitives";
import { images } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/projects")({
  head: () => ({
    meta: [
      { title: "Engineering Projects — AcenAAr Technologies" },
      { name: "description", content: "Engineering project portfolio across embedded, IoT, AI & ML, robotics, automation and EV/BMS." },
      { property: "og:title", content: "Engineering Projects — AcenAAr" },
      { property: "og:description", content: "Problem, solution and technology behind our engineering work." },
    ],
  }),
  component: Projects,
});

const cats = ["All", "Embedded", "IoT", "AI & ML", "Robotics", "Automation", "EV/BMS", "Custom Engineering"];
// Editable placeholders — replace with real project details.
const projects = [
  { cat: "IoT", name: "IoT Monitoring Project", img: images.iot, stack: "ESP32 · Sensors · Wi-Fi" },
  { cat: "AI & ML", name: "Sensor Intelligence Project", img: images.ai, stack: "AI · ML · Sensors" },
  { cat: "Robotics", name: "Autonomous Robotic Personal Assistant", img: images.robotAssistant, stack: "Robotics · Embedded · AI" },
  { cat: "EV/BMS", name: "Battery Management Project", img: images.evBms, stack: "BMS · Embedded control" },
  { cat: "Embedded", name: "Embedded Controller Project", img: images.pcb, stack: "Arduino · ESP32" },
  { cat: "Automation", name: "Smart Automation Project", img: images.robotics, stack: "Embedded control · Motors" },
];

function Projects() {
  const [c, setC] = useState("All");
  const list = c === "All" ? projects : projects.filter((p) => p.cat === c);
  return (
    <>
      <PageHero eyebrow="Projects" img={images.robotics} title={<>Engineering <span className="text-gradient">Projects</span></>} sub="A portfolio of applied engineering across our technology domains." />
      <Section>
        <div className="mb-10 flex flex-wrap gap-2">
          {cats.map((x) => <button key={x} onClick={() => setC(x)} className={cn("rounded-full border px-4 py-2 text-sm font-medium transition", c === x ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-sky")}>{x}</button>)}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ImgCard key={p.name} img={p.img} title={p.name} tag={p.cat}>
              <dl className="mt-4 space-y-1.5 text-sm">
                <div className="flex gap-2"><dt className="w-24 text-muted-foreground">Problem</dt><dd className="italic text-muted-foreground">Details coming soon</dd></div>
                <div className="flex gap-2"><dt className="w-24 text-muted-foreground">Solution</dt><dd className="italic text-muted-foreground">Details coming soon</dd></div>
                <div className="flex gap-2"><dt className="w-24 text-muted-foreground">Stack</dt><dd>{p.stack}</dd></div>
              </dl>
            </ImgCard>
          ))}
          {list.length === 0 && <p className="text-muted-foreground">Projects in this category will be published soon.</p>}
        </div>
      </Section>
      <CtaBand title="Have a project in mind?" sub="Tell us the problem — we'll engineer the solution." primary="Discuss Your Requirement" />
    </>
  );
}
