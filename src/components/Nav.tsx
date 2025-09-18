"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/resume", label: "Resume" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();
  return (
    <nav className="flex gap-6 text-sm text-sub">
      {links.map(l => {
        const active = pathname === l.href;
        return (
          <Link
            key={l.href}
            href={l.href}
            className={active ? "text-white underline underline-offset-4" : ""}
          >
            {l.label}
          </Link>
        );
      })}
    </nav>
  );
}
