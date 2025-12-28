import { Link, useLocation } from "wouter";
import { Leaf, Users, FileText, Phone, Scale } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const [location] = useLocation();

  const navItems = [
    { label: "Communities Around You", href: "/communities", icon: Users },
    { label: "Latest Laws and Articles", href: "/laws", icon: FileText },
    { label: "Offline Helpline Systems", href: "/helpline", icon: Phone },
    { label: "Current MSPs", href: "/msps", icon: Scale },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border/40">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 group">
            <div className="bg-primary/10 p-2 rounded-full group-hover:bg-primary/20 transition-colors">
              <Leaf className="h-6 w-6 text-primary" />
            </div>
            <span className="font-serif text-xl font-bold text-foreground tracking-tight">KisanSetu</span>
          </a>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a 
                className={cn(
                  "text-sm font-medium transition-colors hover:text-primary flex items-center gap-2",
                  location === item.href ? "text-primary font-semibold" : "text-muted-foreground"
                )}
              >
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Placeholder (Hidden for now to keep it clean) */}
        <div className="md:hidden">
          <button className="p-2 text-muted-foreground hover:text-foreground">
            <span className="sr-only">Menu</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
}
