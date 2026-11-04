import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero, Section, Heading, Flow, CtaBand, cta, ImgCard } from "@/components/site/primitives";
import { images, products } from "@/lib/site-data";

export const Route = createFileRoute("/manufacturing")({
  head: () => ({
    meta: [
      { title: "Manufacturing & Product Engineering — AcenAAr Technologies" },
      { name: "description", content: "From engineering concept to deployable product: design, hardware, embedded software, prototyping and validation." },
      { property: "og:title", content: "Manufacturing & Product Engineering — AcenAAr" },
      { property: "og:description", content: "Ideate → Design → Engineer → Prototype → Validate → Deliver." },
    ],
  }),
  component: Manufacturing,
});

const caps = ["Product Design", "Hardware Development", "Embedded Software", "Hardware + Software Integration", "Prototyping", "Validation", "Product Engineering", "Manufacturability", "Scalability", "Deployment"];

function Manufacturing() {
  return (
    <>
      <PageHero eyebrow="Manufacturing" img={images.manufacturing} title={<>From engineering concept to <span className="text-gradient">deployable product</span></>}
        sub="We design, engineer and integrate hardware and software into products ready for real-world use.">
        <Link to="/contact" className={cta()}>Request a Solution</Link>
      </PageHero>
      <Section>
        <Heading eyebrow="Product Development Pipeline" title="Six stages, one accountable team" />
        <Flow steps={["IDEATE", "DESIGN", "ENGINEER", "PROTOTYPE", "VALIDATE", "DELIVER"]} />
        <div className="mt-12 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
          {caps.map((c, i) => (
            <div key={c} className="rounded-2xl border border-border bg-card p-5 shadow-soft">
              <span className="font-display text-xs text-ember">{String(i + 1).padStart(2, "0")}</span>
              <p className="mt-2 font-semibold">{c}</p>
            </div>
          ))}
        </div>
      </Section>
      <Section className="bg-muted/40">
        <Heading eyebrow="What We Sell" title="Products & technology systems" />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <ImgCard key={p.slug} img={p.img} title={p.name} tag={p.category}>
              <p className="mt-2 text-sm text-muted-foreground">{p.short}</p>
              <ul className="mt-3 space-y-1 text-xs text-muted-foreground">{p.features.slice(0, 3).map((f) => <li key={f}>• {f}</li>)}</ul>
              <div className="mt-5 flex gap-2">
                <Link to="/products/$slug" params={{ slug: p.slug }} className={cta({ variant: "outline", size: "sm" })}>View</Link>
                <Link to="/contact" className={cta({ size: "sm" })}>Request Quote</Link>
              </div>
            </ImgCard>
          ))}
        </div>
      </Section>
      <CtaBand title="Have a product idea?" sub="Let's take it from concept to deployment." primary="Discuss Your Requirement" />
    </>
  );
}
