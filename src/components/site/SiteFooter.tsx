import { Link } from "@tanstack/react-router";
import { MapPin, Phone, Globe } from "lucide-react";
import { company } from "@/lib/site-data";
import { Logo } from "./SiteHeader";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-16 md:grid-cols-4 md:px-8">
        <div className="md:col-span-2">
          <Logo />
          <p className="mt-4 max-w-sm text-sm text-muted-foreground">{company.tagline}. Embedded engineering, IoT, AI & ML, robotics, smart automation and EV/BMS — engineered for the real world.</p>
          <p className="mt-6 font-display text-xs font-semibold tracking-[0.25em]">ENGINEER → BUILD → INTEGRATE → DELIVER</p>
        </div>
        <div>
          <p className="eyebrow mb-4">Company</p>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li><Link to="/about" className="hover:text-foreground">About</Link></li>
            <li><Link to="/manufacturing" className="hover:text-foreground">Manufacturing</Link></li>
            <li><Link to="/products" className="hover:text-foreground">Products</Link></li>
            <li><Link to="/projects" className="hover:text-foreground">Projects</Link></li>
            <li><Link to="/rnd" className="hover:text-foreground">R&D</Link></li>
            <li><Link to="/college-collaboration" className="hover:text-foreground">College Collaboration</Link></li>
          </ul>
        </div>
        <div>
          <p className="eyebrow mb-4">Reach Us</p>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" /><span><b className="text-foreground">Corporate:</b> {company.corporate}</span></li>
            <li className="flex gap-2"><MapPin className="mt-0.5 h-4 w-4 shrink-0 text-ember" /><span><b className="text-foreground">Branch:</b> {company.branch}</span></li>
            <li className="flex gap-2"><Phone className="h-4 w-4 text-ember" /><a href={`tel:${company.phone}`}>{company.phone}</a></li>
            <li className="flex gap-2"><Globe className="h-4 w-4 text-ember" /><a href={`https://${company.website}`}>{company.website}</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} {company.name}. All rights reserved.</div>
    </footer>
  );
}
