import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero, Section, Heading, Flow, ImgCard, cta, CtaBand } from "@/components/site/primitives";
import { images, products, type Category } from "@/lib/site-data";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products/")({
  head: () => ({
    meta: [
      { title: "Products — IoT Trainer Kit, AI & ML Boards, BMS, Robotics | AcenAAr" },
      { name: "description", content: "Product catalogue: IoT Trainer Kit, AI & ML IoT Trainer Kit, EV/BMS technology and the Autonomous Robotic Personal Assistant." },
      { property: "og:title", content: "AcenAAr Products" },
      { property: "og:description", content: "Engineering products for IoT, embedded, AI & ML, robotics and EV/BMS." },
    ],
  }),
  component: Products,
});

const filters: ("All" | Category)[] = ["All", "IoT", "Embedded", "AI & ML", "Robotics", "EV/BMS"];

function Products() {
  const [f, setF] = useState<(typeof filters)[number]>("All");
  const list = f === "All" ? products : products.filter((p) => p.category === f);
  return (
    <>
      <PageHero eyebrow="Products" img={images.iotKit} title={<>Technology products, <span className="text-gradient">ready to deploy</span></>}
        sub="Trainer kits, AI & ML boards, EV/BMS technology and robotics — engineered in-house." />
      <Section>
        <div className="mb-10 flex flex-wrap gap-2">
          {filters.map((x) => (
            <button key={x} onClick={() => setF(x)} className={cn("rounded-full border px-4 py-2 text-sm font-medium transition", f === x ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card hover:border-sky")}>{x}</button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ImgCard key={p.slug} img={p.img} title={p.name} tag={p.category}>
              <p className="mt-2 text-sm text-muted-foreground">{p.short}</p>
              <div className="mt-5 flex gap-2">
                <Link to="/products/$slug" params={{ slug: p.slug }} className={cta({ variant: "outline", size: "sm" })}>View Product</Link>
                <Link to="/contact" className={cta({ size: "sm" })}>Request Quote</Link>
              </div>
            </ImgCard>
          ))}
        </div>
      </Section>
      <Section className="bg-muted/40">
        <div className="grid gap-10 lg:grid-cols-3">
          <div><Heading eyebrow="AI & ML" title="Hands-on intelligent systems" sub="AI, Machine Learning and Deep Learning working on real-time sensor data." /><Flow steps={["SENSING", "LEARNING", "INFERENCE", "ACTION"]} /></div>
          <div><Heading eyebrow="Robotics & Automation" title="Robotics, by the equation" sub="Autonomous systems with embedded control in connected environments." /><Flow steps={["SENSING", "INTELLIGENCE", "CONTROL", "MECHANICS"]} /></div>
          <div><Heading eyebrow="EV & BMS" title="Electric Vehicle & Battery Management" sub="Cell voltage, current and temperature monitoring; protection; SOC/SOH; balancing." /><Flow steps={["PACK", "MONITOR", "PROTECT", "BALANCE", "OPTIMISE", "INTEGRATE"]} /></div>
        </div>
      </Section>
      <CtaBand title="Need pricing or a demo?" sub="We'll share details for your requirement." primary="Request a Quote" />
    </>
  );
}
