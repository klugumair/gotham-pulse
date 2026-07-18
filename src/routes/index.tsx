import { createFileRoute } from "@tanstack/react-router";
import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  IconBooks,
  IconPuzzle,
  IconMovie,
  IconMasksTheater,
  IconDeviceGamepad2,
  IconBrain,
  IconChevronDown,
} from "@tabler/icons-react";
import { BatSignal, BatMark } from "@/components/BatSignal";

const MagicRings = lazy(() => import("@/components/MagicRings"));

export const Route = createFileRoute("/")({
  component: Index,
});

const navLinks = [
  { label: "Library", href: "#library", active: true },
  { label: "Bat-Cave", href: "#bat-cave" },
  { label: "Cinema", href: "#cinema" },
  { label: "Rogues", href: "#rogues" },
  { label: "Game Zone", href: "#game-zone" },
  { label: "Arkham Profiler", href: "#profiler" },
];

const districts = [
  { name: "Gotham Library", desc: "Comics, arcs, and origin stories", Icon: IconBooks },
  { name: "Bat-Cave", desc: "Puzzles, riddles, and tactical games", Icon: IconPuzzle },
  { name: "Cinema Gotham", desc: "Every film and series in order", Icon: IconMovie },
  { name: "Rogues Gallery", desc: "Characters, profiles, and relationships", Icon: IconMasksTheater },
  { name: "Game Zone", desc: "The complete Batman game catalogue", Icon: IconDeviceGamepad2 },
  { name: "Arkham Profiler", desc: "AI-powered criminal intelligence", Icon: IconBrain, classified: true },
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "border-b border-white/5 bg-[#080810]/70 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 text-amber">
          <BatMark className="h-4 w-8" />
          <span className="font-display text-lg font-semibold tracking-widest">GCC</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`relative rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
                  l.active
                    ? "text-amber"
                    : "text-ink-muted hover:text-ink"
                }`}
              >
                {l.label}
                {l.active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-0.5 bg-amber" />
                )}
              </a>
            </li>
          ))}
        </ul>
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink-muted">
          <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-monitor align-middle" />
          Signal live
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="top" className="relative h-screen w-full overflow-hidden">
      {/* Magic rings WebGL mount */}
      <div id="magic-rings-mount" className="absolute inset-0">
        {mounted && (
          <Suspense fallback={null}>
            <MagicRings
              color="#e8b800"
              colorTwo="#8b0000"
              ringCount={8}
              speed={0.5}
              attenuation={9}
              baseRadius={0.22}
              radiusStep={0.08}
              opacity={0.9}
              noiseAmount={0.06}
              followMouse
              mouseInfluence={0.12}
              parallax={0.02}
            />
          </Suspense>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#080810]" />
      </div>

      {/* Vignette frame */}
      <div className="pointer-events-none absolute inset-0 border-x border-white/[0.03]" />

      {/* Corner ticks */}
      <div className="pointer-events-none absolute left-6 top-24 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted">
        <span className="text-amber">◤</span> Sector 07 — Uptown
      </div>
      <div className="pointer-events-none absolute right-6 top-24 font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted">
        41.8° N · 87.6° W <span className="text-amber">◥</span>
      </div>

      {/* Centered content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
          }}
          className="flex flex-col items-center"
        >
          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="font-mono text-[11px] uppercase tracking-[0.4em] text-amber animate-flicker"
          >
            GCPD classified network
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="mt-6 font-display text-6xl font-semibold tracking-tight text-ink text-amber-glow md:text-8xl"
          >
            Gotham City Central
          </motion.h1>

          <motion.div
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              show: { opacity: 1, scaleX: 1, transition: { duration: 0.8 } },
            }}
            className="mt-6 h-px w-40 origin-center bg-amber shadow-[0_0_20px_rgba(232,184,0,0.6)]"
          />

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="mt-6 max-w-md font-sans text-base text-ink-muted md:text-lg"
          >
            Every district. Every rogue. Every case.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              show: { opacity: 1, scale: 1, transition: { duration: 0.9 } },
            }}
            className="mt-12 text-amber"
            style={{ filter: "drop-shadow(0 0 24px rgba(232, 184, 0, 0.55))" }}
          >
            <BatSignal className="h-16 w-32 md:h-20 md:w-40" />
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll chevron */}
      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-ink-muted">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Descend</span>
        <IconChevronDown className="h-5 w-5 animate-bounce-soft text-amber" />
      </div>
    </section>
  );
}

function DistrictHub() {
  return (
    <section id="library" className="relative border-t border-white/5 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-end justify-between gap-8"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-ink-muted">
              Section 02 · Districts
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-amber md:text-5xl">
              Choose your district
            </h2>
          </div>
          <div className="hidden text-right font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted md:block">
            Six sectors online
            <br />
            <span className="text-monitor">Uplink stable</span>
          </div>
        </motion.div>

        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: 0.08 } },
          }}
          className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3"
        >
          {districts.map(({ name, desc, Icon, classified }) => {
            return (
              <motion.li
                key={name}
                variants={{
                  hidden: { opacity: 0, y: 24 },
                  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
                }}
                whileHover={{ y: -4 }}
                className={`group relative cursor-pointer border p-6 transition-colors duration-300 ${
                  classified
                    ? "border-white/5 bg-[#0e0e1a] hover:border-danger hover:shadow-[0_0_28px_-6px_rgba(139,0,0,0.75)]"
                    : "border-white/5 bg-[#0e0e1a] hover:border-amber hover:shadow-[0_0_28px_-6px_rgba(232,184,0,0.6)]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <Icon
                    className={`h-8 w-8 stroke-[1.5] ${
                      classified ? "text-danger" : "text-amber"
                    }`}
                  />
                  {classified && (
                    <span className="border border-danger px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.25em] text-danger">
                      Classified
                    </span>
                  )}
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-ink">
                  {name}
                </h3>
                <p className="mt-2 font-sans text-sm text-ink-muted">{desc}</p>
                <div className="mt-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted">
                  <span>
                    Sector · 0{districts.findIndex((d) => d.name === name) + 1}
                  </span>
                  <span
                    className={`transition-colors ${
                      classified ? "group-hover:text-danger" : "group-hover:text-amber"
                    }`}
                  >
                    Enter →
                  </span>
                </div>
                <div
                  className={`pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity duration-300 ${
                    classified ? "bg-danger" : "bg-amber"
                  } opacity-0 group-hover:opacity-100`}
                />
              </motion.li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 md:flex-row">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-amber">
          Gotham City Central — Fan project. Not affiliated with DC Comics or Warner Bros.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-ink-muted">
          Broadcast 24 · 7
        </p>
      </div>
    </footer>
  );
}

function Index() {
  return (
    <div className="gotham-root min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <DistrictHub />
      </main>
      <Footer />
    </div>
  );
}
