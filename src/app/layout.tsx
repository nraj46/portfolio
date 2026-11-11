import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PROFILE } from "@/data";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Nagaraju Chinthalacheruvu — Senior Frontend Engineer | AI Engineer",
  description:
    "Senior Frontend Engineer at Intuit building production AI features: LLM integrations, RAG pipelines, AI agents and MCP tools in React, TypeScript and Python. 11 live apps.",
};

const NAV = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
];

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col bg-slate-950 text-slate-100">
        <header className="border-b border-slate-800 bg-slate-950/80 sticky top-0 z-20 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center gap-4 px-4 py-3">
            <a href="#about" className="flex items-center gap-2 font-semibold tracking-tight">
              <span className="grid h-8 w-8 place-items-center rounded-lg bg-cyan-500/15 text-cyan-400 font-bold">
                N
              </span>
              <span className="hidden sm:inline">
                Nagaraju <span className="text-cyan-400">Chinthalacheruvu</span>
              </span>
              <span className="sm:hidden">
                N<span className="text-cyan-400">C</span>
              </span>
            </a>
            <nav className="ml-auto flex items-center gap-1 text-sm">
              {NAV.map((n) => (
                <a
                  key={n.href}
                  href={n.href}
                  className="hidden rounded-md px-3 py-1.5 text-slate-300 hover:bg-slate-800 hover:text-white md:inline-block"
                >
                  {n.label}
                </a>
              ))}
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="ml-1 rounded-md bg-cyan-500 px-3 py-1.5 font-medium text-slate-950 hover:bg-cyan-400"
              >
                GitHub
              </a>
            </nav>
          </div>
        </header>
        <main className="mx-auto w-full max-w-6xl flex-1 px-4">{children}</main>
        <footer id="contact" className="border-t border-slate-800 bg-slate-900/40">
          <div className="mx-auto max-w-6xl px-4 py-10">
            <h2 className="text-xl font-semibold tracking-tight">Get in touch</h2>
            <p className="mt-2 max-w-xl text-sm text-slate-400">
              Open to senior frontend / AI engineering roles and select freelance projects.
              The fastest way to reach me is email.
            </p>
            <div className="mt-5 flex flex-wrap gap-3 text-sm">
              <a
                href={`mailto:${PROFILE.email}`}
                className="rounded-md bg-cyan-500 px-4 py-2 font-medium text-slate-950 hover:bg-cyan-400"
              >
                ✉️ {PROFILE.email}
              </a>
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-800"
              >
                GitHub — nraj46
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-slate-700 px-4 py-2 text-slate-200 hover:bg-slate-800"
              >
                LinkedIn — in/nagr
              </a>
            </div>
            <p className="mt-8 text-xs text-slate-500">
              © 2026 Nagaraju Chinthalacheruvu · {PROFILE.location} ·
              Built with Next.js, TypeScript and Tailwind CSS.
            </p>
          </div>
        </footer>
      </body>
    </html>
  );
}
