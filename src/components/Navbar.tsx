import { Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Documentation", href: "#documentation" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <div className="flex items-center gap-1.5 text-foreground font-semibold text-sm">
        <Monitor className="w-4 h-4" />
        AliveCheck.io
      </div>

      <div className="hidden md:flex items-center gap-0.5 rounded-full px-1.5 py-0.5">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.href}
            onClick={(e) => handleClick(e, link.href)}
            className="px-3 py-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors rounded-full"
          >
            {link.label}
          </a>
        ))}
      </div>

      <Button variant="default" size="sm" className="rounded-full font-semibold text-xs">
        Get Started
      </Button>
    </nav>
  );
};

export default Navbar;
