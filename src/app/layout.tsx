import "@/styles/globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Omar Hawas — Software Developer",
  description: "JS-first developer. Next.js, React, Node, Prisma.",
  metadataBase: new URL("https://your-domain.com"),
  openGraph: {
    title: "Omar Hawas — Software Developer",
    description: "Projects, resume, and contact.",
    url: "/",
    siteName: "Omar Hawas",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Omar Hawas — Software Developer",
    description: "Projects, resume, and contact.",
  },
};


export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>
        <header className="border-b border-border">
          <nav className="container flex items-center justify-between py-4">
            <Link href="/" className="font-semibold tracking-tight">Omar Hawas</Link>
            <ul className="flex gap-6 text-sm text-sub">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/projects">Projects</Link></li>
              <li><Link href="/resume">Resume</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </nav>
        </header>
        <main className="container py-12">{children}</main>
        <footer className="border-t border-border">
          <div className="container py-10 text-sm text-sub">
            © {new Date().getFullYear()} Omar Hawas
          </div>
        </footer>
      </body>
    </html>
  );
}
