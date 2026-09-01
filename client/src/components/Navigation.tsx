import { Link, useRoute } from "wouter";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "Home" },
  { href: "/financial-advisor", label: "Financial Advisor" },
];

export default function Navigation() {
  return (
    <header className="border-b border-border bg-card">
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4">
        <Link href="/" className="text-lg font-semibold text-primary">
          Ubuntu Legacy Community Care
        </Link>
        <ul className="flex gap-6">
          {links.map(link => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </ul>
      </nav>
    </header>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  const [isActive] = useRoute(href);
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "text-sm font-medium text-muted-foreground transition-colors hover:text-primary",
          isActive && "text-primary"
        )}
      >
        {label}
      </Link>
    </li>
  );
}
