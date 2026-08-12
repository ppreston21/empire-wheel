import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Empire Wheel",
  description: "Learn to examine evidence, build claims, and do history.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <header className="relative z-10 border-b border-white/10">
          <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
            <Link href="/" className="font-serif text-xl tracking-[0.18em] text-[#e7d4a7]">EMPIRE WHEEL</Link>
            <nav aria-label="Main navigation" className="flex gap-7 text-xs font-semibold uppercase tracking-[0.18em] text-stone-400">
              <Link className="transition hover:text-stone-100" href="/">Wheel</Link>
              <Link className="transition hover:text-stone-100" href="/mesopotamia">Curriculum</Link>
            </nav>
          </div>
        </header>
        {children}
        <footer className="relative mx-auto max-w-7xl border-t border-white/10 px-6 py-8 text-xs tracking-wide text-stone-500 lg:px-10">
          Empire Wheel · Stop consuming history. Learn to do history.
        </footer>
      </body>
    </html>
  );
}
