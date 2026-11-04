import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { MapPin, Phone, Globe, CheckCircle2 } from "lucide-react";
import { Section, cta } from "@/components/site/primitives";
import { company } from "@/lib/site-data";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact AcenAAr Technologies — Let's Build What Comes Next" },
      { name: "description", content: "Product enquiries, ready solutions, R&D collaboration and college partnerships. Kurnool & Visakhapatnam, Andhra Pradesh." },
      { property: "og:title", content: "Contact AcenAAr Technologies" },
      { property: "og:description", content: "Let's build what comes next." },
    ],
  }),
  component: Contact,
});

const types = ["Product Enquiry", "Ready Solution", "Manufacturing / Product Engineering", "R&D Collaboration", "College Partnership", "Institutional Apprenticeship", "Technology Training", "Custom Engineering Requirement", "General Enquiry"];
const field = "w-full rounded-xl border border-input bg-card px-4 py-3 text-sm outline-none transition focus:border-sky focus:ring-2 focus:ring-ring/20";

function Contact() {
  const [sent, setSent] = useState(false);
  return (
    <Section className="bg-hero pt-32 md:pt-40">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr]">
        <div>
          <p className="eyebrow">Contact</p>
          <h1 className="mt-3 text-4xl font-semibold md:text-6xl">Let's build what comes next</h1>
          <p className="mt-5 text-lg text-muted-foreground">Tell us about your product, solution, R&D or institutional requirement.</p>
          <div className="mt-10 space-y-4">
            {[
              { i: MapPin, l: "Corporate Office", v: company.corporate },
              { i: MapPin, l: "Branch Office", v: company.branch },
              { i: Phone, l: "Phone", v: company.phone, href: `tel:${company.phone}` },
              { i: Globe, l: "Website", v: company.website, href: `https://${company.website}` },
            ].map((c) => (
              <div key={c.l} className="flex gap-4 rounded-2xl border border-border bg-card p-5 shadow-soft">
                <c.i className="h-5 w-5 text-ember" />
                <div><p className="text-xs text-muted-foreground">{c.l}</p>{c.href ? <a href={c.href} className="font-medium hover:text-sky">{c.v}</a> : <p className="font-medium">{c.v}</p>}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="rounded-3xl border border-border bg-card p-7 shadow-lift md:p-10">
          {sent ? (
            <div className="py-16 text-center">
              <CheckCircle2 className="mx-auto h-12 w-12 text-ember" />
              <h2 className="mt-4 text-2xl font-semibold">Thank you!</h2>
              <p className="mt-2 text-muted-foreground">For a quick response, please call {company.phone}.</p>
            </div>
          ) : (
            <form className="grid gap-4 sm:grid-cols-2" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
              <input required maxLength={100} placeholder="Name" className={field} />
              <input maxLength={150} placeholder="Organization / College" className={field} />
              <input maxLength={100} placeholder="Designation" className={field} />
              <input required type="email" maxLength={255} placeholder="Email" className={field} />
              <input type="tel" maxLength={20} placeholder="Phone" className={field} />
              <select required defaultValue="" className={field}>
                <option value="" disabled>Requirement Type</option>
                {types.map((t) => <option key={t}>{t}</option>)}
              </select>
              <input maxLength={100} placeholder="Department" className={field + " sm:col-span-2"} />
              <textarea required maxLength={2000} rows={5} placeholder="Message" className={field + " sm:col-span-2"} />
              <div className="flex flex-wrap gap-3 sm:col-span-2">
                <button type="submit" className={cta()}>Send Enquiry</button>
                <a href={`tel:${company.phone}`} className={cta({ variant: "outline" })}>Request a Quote</a>
              </div>
            </form>
          )}
        </div>
      </div>
    </Section>
  );
}
