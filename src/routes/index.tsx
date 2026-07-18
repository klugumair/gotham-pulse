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
  IconSearch,
  IconBolt,
} from "@tabler/icons-react";
import CircularGallery from "@/components/CircularGallery";

const MagicRings = lazy(() => import("@/components/MagicRings"));

export const Route = createFileRoute("/")({
  component: Index,
});

const navLinks = [
  { label: "Library", href: "#library", active: true },
  { label: "Bat-cave", href: "#bat-cave" },
  { label: "Cinema", href: "#cinema" },
  { label: "Rogues", href: "#rogues" },
  { label: "Game zone", href: "#game-zone" },
  { label: "Profiler", href: "#profiler" },
];

const districts = [
  { name: "Gotham Library", desc: "Comics, arcs, and origin stories", Icon: IconBooks },
  { name: "Bat-cave", desc: "Puzzles, riddles, and tactical games", Icon: IconPuzzle },
  { name: "Cinema Gotham", desc: "Every film and series in order", Icon: IconMovie },
  { name: "Rogues Gallery", desc: "Characters, profiles, and relationships", Icon: IconMasksTheater },
  { name: "Game Zone", desc: "The complete Batman game catalogue", Icon: IconDeviceGamepad2 },
  {
    name: "Arkham Profiler",
    desc: "AI-powered criminal intelligence",
    Icon: IconBrain,
    classified: true,
  },
];

const galleryItems = [
  { image: "/images/homepage/download.jpg", text: "The Batman" },
  { image: "/images/homepage/download_(3).jpg", text: "Gotham nights" },
  { image: "/images/homepage/selina_kyle__catwoman_.jpg", text: "Selina Kyle" },
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
          ? "border-b border-[#2A2A2A] bg-[#0A0A0A]/85 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <a href="#top" className="flex items-center gap-2 text-[#C0392B]">
          <img src="/images/batman-logo.png" alt="Batman" className="nav-bat-logo" />
          <span className="font-display text-lg font-semibold tracking-widest">GCC</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                className={`relative rounded-sm px-3 py-2 font-mono text-xs uppercase tracking-[0.18em] transition-colors ${
                  l.active ? "text-[#C0392B]" : "text-[#6B6B6B] hover:text-[#E8E8E8]"
                }`}
              >
                {l.label}
                {l.active && (
                  <span className="absolute inset-x-3 -bottom-0.5 h-px bg-[#C0392B]" />
                )}
              </a>
            </li>
          ))}
        </ul>
        <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-[#6B6B6B]">
          <span className="mr-2 inline-block h-1.5 w-1.5 animate-pulse-dot rounded-full bg-[#C0392B] align-middle" />
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
      {/* Rain overlay */}
      <div className="rain-overlay" />

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
            className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#C0392B] animate-flicker"
          >
            GCPD classified network
          </motion.p>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 24 },
              show: { opacity: 1, y: 0, transition: { duration: 0.8 } },
            }}
            className="mt-6 font-display text-6xl font-semibold tracking-tight text-[#E8E8E8] text-dim-glow md:text-8xl"
          >
            Gotham City Central
          </motion.h1>

          <motion.div
            variants={{
              hidden: { opacity: 0, scaleX: 0 },
              show: { opacity: 1, scaleX: 1, transition: { duration: 0.8 } },
            }}
            className="mt-6 h-px w-40 origin-center bg-[#8B1A1A] shadow-[0_0_20px_rgba(139,26,26,0.6)]"
          />

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 12 },
              show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="mt-6 max-w-md font-sans text-base text-[#6B6B6B] md:text-lg"
          >
            Every district. Every rogue. Every case.
          </motion.p>

          <motion.div
            variants={{
              hidden: { opacity: 0, scale: 0.85 },
              show: { opacity: 1, scale: 1, transition: { duration: 0.9 } },
            }}
          >
            <img src="/images/batman-logo.png" alt="Batman" className="hero-bat-logo" />
          </motion.div>
        </motion.div>
      </div>

      {/* Corner ticks */}
      <div className="pointer-events-none absolute left-6 top-24 font-mono text-[10px] uppercase tracking-[0.3em] text-[#6B6B6B]">
        <span className="text-[#C0392B]">◤</span> Sector 07 — Uptown
      </div>
      <div className="pointer-events-none absolute right-6 top-24 font-mono text-[10px] uppercase tracking-[0.3em] text-[#6B6B6B]">
        41.8° N · 87.6° W <span className="text-[#C0392B]">◥</span>
      </div>

      {/* Scroll chevron */}
      <div className="absolute inset-x-0 bottom-8 flex flex-col items-center gap-2 text-[#6B6B6B]">
        <span className="font-mono text-[10px] uppercase tracking-[0.3em]">Descend</span>
        <IconChevronDown className="h-5 w-5 animate-bounce-soft text-[#C0392B]" />
      </div>
    </section>
  );
}

function DistrictHub() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  return (
    <section id="library" className="relative overflow-hidden border-t border-[#2A2A2A]">
      {/* Magic rings full-bleed background */}
      <div className="absolute inset-0 z-0 opacity-70">
        {mounted && (
          <Suspense fallback={null}>
            <MagicRings
              color="#8B1A1A"
              colorTwo="#0A0A0A"
              ringCount={9}
              speed={0.35}
              attenuation={7}
              baseRadius={0.2}
              radiusStep={0.07}
              opacity={0.85}
              noiseAmount={0.05}
              followMouse
              mouseInfluence={0.1}
              parallax={0.02}
            />
          </Suspense>
        )}
      </div>

      {/* Image on one side */}
      <div className="pointer-events-none absolute right-0 top-0 z-[1] hidden h-full w-1/3 overflow-hidden md:block">
        <img
          src="/images/homepage/download.jpg"
          alt="Gotham at night"
          className="h-full w-full object-cover opacity-40"
          style={{ maskImage: "linear-gradient(to left, black, transparent)", WebkitMaskImage: "linear-gradient(to left, black, transparent)" }}
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-14 flex items-end justify-between gap-8"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#6B6B6B]">
              Section 02 · Districts
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#E8E8E8] md:text-5xl">
              Choose your district
            </h2>
          </div>
          <div className="hidden text-right font-mono text-[10px] uppercase tracking-[0.3em] text-[#6B6B6B] md:block">
            Six sectors online
            <br />
            <span className="text-[#C0392B]">Uplink stable</span>
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
                className={`group relative cursor-pointer border p-6 backdrop-blur-sm transition-colors duration-300 ${
                  classified
                    ? "border-[#2A2A2A] bg-[#111111]/80 hover:border-[#C0392B] hover:shadow-[0_0_28px_-6px_rgba(192,57,43,0.75)]"
                    : "border-[#2A2A2A] bg-[#111111]/80 hover:border-[#8B1A1A] hover:shadow-[0_0_28px_-6px_rgba(139,26,26,0.6)]"
                }`}
              >
                <div className="flex items-start justify-between">
                  <Icon
                    className={`h-8 w-8 stroke-[1.5] ${classified ? "text-[#C0392B]" : "text-[#8B1A1A]"}`}
                  />
                  {classified && (
                    <span className="border border-[#C0392B] px-2 py-0.5 font-mono text-[9px] uppercase tracking-[0.25em] text-[#C0392B]">
                      Classified
                    </span>
                  )}
                </div>
                <h3 className="mt-8 font-display text-2xl font-semibold tracking-tight text-[#E8E8E8]">
                  {name}
                </h3>
                <p className="mt-2 font-sans text-sm text-[#6B6B6B]">{desc}</p>
                <div className="mt-8 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-[#6B6B6B]">
                  <span>Sector · 0{districts.findIndex((d) => d.name === name) + 1}</span>
                  <span
                    className={`transition-colors ${
                      classified ? "group-hover:text-[#C0392B]" : "group-hover:text-[#8B1A1A]"
                    }`}
                  >
                    Enter →
                  </span>
                </div>
                <div
                  className={`pointer-events-none absolute inset-x-0 bottom-0 h-px transition-opacity duration-300 ${
                    classified ? "bg-[#C0392B]" : "bg-[#8B1A1A]"
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

function CaseFilesSection() {
  return (
    <section id="case-files" className="relative border-t border-[#2A2A2A] py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-10 flex flex-col gap-3 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-[#6B6B6B]">
              Section 03 · Case files
            </p>
            <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-[#E8E8E8] md:text-5xl">
              The evidence locker
            </h2>
            <p className="mt-3 max-w-lg font-sans text-sm text-[#6B6B6B]">
              Drag, scroll, or use the arrow keys to move through the catalog. Every frame is a
              piece of the city.
            </p>
          </div>
          <div className="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3em] text-[#6B6B6B]">
            <IconSearch className="h-4 w-4 text-[#8B1A1A]" />
            <span>Scroll to navigate</span>
            <IconBolt className="h-4 w-4 text-[#C0392B]" />
          </div>
        </motion.div>
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div style={{ height: "600px", position: "relative" }} className="rounded-lg border border-[#2A2A2A] bg-[#0A0A0A]">
          <CircularGallery
            items={galleryItems}
            bend={3}
            textColor="#C0392B"
            borderRadius={0.04}
            scrollEase={0.05}
            scrollSpeed={2}
            fontUrl="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;700&display=swap"
            font="bold 26px Space Grotesk"
          />
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-[#2A2A2A] py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 md:flex-row">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-[#8B1A1A]">
          Gotham City Central — Fan project. Not affiliated with DC Comics or Warner Bros.
        </p>
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-[#6B6B6B]">
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
        <CaseFilesSection />
      </main>
      <Footer />
    </div>
  );
}
