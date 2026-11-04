import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, ArrowLeft } from "lucide-react";
import { Section, cta, ImgCard } from "@/components/site/primitives";
import { products } from "@/lib/site-data";

export const Route = createFileRoute("/products/$slug")({
  loader: ({ params }) => {
    const product = products.find((p) => p.slug === params.slug);
    if (!product) throw notFound();
    return { product };
  },
  head: ({ loaderData }) => ({
    meta: loaderData
      ? [
          { title: `${loaderData.product.name} — AcenAAr Technologies` },
          { name: "description", content: loaderData.product.short },
          { property: "og:title", content: loaderData.product.name },
          { property: "og:description", content: loaderData.product.short },
        ]
      : [{ title: "Product not found" }, { name: "robots", content: "noindex" }],
  }),
  notFoundComponent: () => (
    <Section className="pt-40 text-center"><h1 className="text-3xl font-semibold">Product not found</h1><Link to="/products" className={cta() + " mt-6"}>All products</Link></Section>
  ),
  component: ProductPage,
});

function ProductPage() {
  const { product: p } = Route.useLoaderData();
  const related = products.filter((x) => x.slug !== p.slug).slice(0, 3);
  return (
    <>
      <Section className="bg-hero pt-32 md:pt-40">
        <Link to="/products" className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="h-4 w-4" /> All products</Link>
        <div className="grid items-start gap-12 lg:grid-cols-2">
          <img src={p.img} alt={p.name} width={1024} height={1024} className="w-full rounded-3xl border border-border object-cover shadow-lift" />
          <div>
            <p className="eyebrow">{p.category}</p>
            <h1 className="mt-3 text-4xl font-semibold md:text-5xl">{p.name}</h1>
            <p className="mt-5 text-lg text-muted-foreground">{p.overview}</p>
            <h2 className="mt-8 text-lg font-semibold">Key features</h2>
            <ul className="mt-3 space-y-2">{p.features.map((f) => <li key={f} className="flex gap-2 text-sm"><Check className="mt-0.5 h-4 w-4 shrink-0 text-ember" />{f}</li>)}</ul>
            <h2 className="mt-8 text-lg font-semibold">Technology</h2>
            <div className="mt-3 flex flex-wrap gap-2">{p.tech.map((t) => <span key={t} className="rounded-full bg-secondary px-3 py-1 text-sm">{t}</span>)}</div>
            <h2 className="mt-8 text-lg font-semibold">Applications</h2>
            <p className="mt-2 text-sm text-muted-foreground">{p.applications.join(" · ")}</p>
            <Link to="/contact" className={cta({ variant: "ember" }) + " mt-10"}>Request Quote</Link>
          </div>
        </div>
      </Section>
      <Section>
        <h2 className="mb-8 text-2xl font-semibold">Related solutions</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {related.map((r) => (
            <Link key={r.slug} to="/products/$slug" params={{ slug: r.slug }}><ImgCard img={r.img} title={r.name} tag={r.category} /></Link>
          ))}
        </div>
      </Section>
    </>
  );
}
