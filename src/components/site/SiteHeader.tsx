import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { cta } from "./primitives";

const nav = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/manufacturing", label: "Manufacturing" },
  { to: "/products", label: "Products" },
  { to: "/projects", label: "Projects" },
  { to: "/rnd", label: "R&D" },
  { to: "/college-collaboration", label: "College Collaboration" },
  { to: "/contact", label: "Contact" },
] as const;

export function Logo() {
  return (
    <Link to="/" className="flex items-center gap-2.5">
      <span className="flex h-9 w-9 items-center justify-center whitespace-nowrap rounded-xl bg-primary font-display text-sm font-bold text-primary-foreground">
        A<span className="text-ember">A</span>
      </span>
      <span className="leading-tight">
        <span className="block font-display text-base font-semibold">AcenAAr</span>
        <span className="block text-[10px] tracking-[0.2em] text-muted-foreground">TECHNOLOGIES</span>
      </span>
    </Link>
  );
}

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 12);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);

  return (
    <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-300", scrolled || open ? "border-b border-border bg-background/90 shadow-soft backdrop-blur" : "bg-transparent")}>
      <div className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-5 py-3 md:px-8">
        <Logo />
        <nav className="hidden items-center gap-1 xl:flex">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} activeOptions={{ exact: n.to === "/" }}
              className="relative rounded-full px-3 py-2 text-[13px] font-medium text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground data-[status=active]:after:absolute data-[status=active]:after:inset-x-3 data-[status=active]:after:-bottom-0.5 data-[status=active]:after:h-0.5 data-[status=active]:after:rounded-full data-[status=active]:after:bg-ember">
              {n.label}
            </Link>
          ))}
        </nav>
        <div className="hidden xl:block">
          <Link to="/contact" className={cta({ variant: "primary", size: "sm" })}>Partner With Us</Link>
        </div>
        <button aria-label="Menu" onClick={() => setOpen(!open)} className="rounded-lg border border-border p-2 xl:hidden">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      {open && (
        <nav className="border-t border-border bg-background px-5 pb-6 xl:hidden">
          {nav.map((n) => (
            <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: n.to === "/" }}
              className="block border-b border-border py-3.5 font-medium text-muted-foreground data-[status=active]:text-ember">
              {n.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className={cn(cta(), "mt-5 w-full")}>Partner With Us</Link>
        </nav>
      )}
    </header>
  );
}
