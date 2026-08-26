"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <section
      id="acasa"
      className="relative min-h-screen overflow-hidden bg-[#080808] text-white"
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(236,72,153,0.14),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(250,204,21,0.12),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(236,72,153,0.08),transparent_40%)]" />

        <div className="absolute -left-[150px] -top-[150px] h-[500px] w-[500px] rounded-full bg-pink-500/10 blur-[120px]" />

        <div className="absolute right-[-100px] top-[100px] h-[450px] w-[450px] rounded-full bg-yellow-400/10 blur-[120px]" />
      </div>

      {/* DECORATIVE LINES */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute left-[10%] top-0 h-full w-px bg-gradient-to-b from-transparent via-yellow-400/40 to-transparent" />

        <div className="absolute right-[15%] top-0 h-full w-px bg-gradient-to-b from-transparent via-pink-400/30 to-transparent" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 flex min-h-screen items-center px-6 pb-20 pt-28 md:px-10 lg:px-16">
        <div className="mx-auto w-full max-w-[1500px]">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            {/* LEFT */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="mb-8 inline-flex items-center gap-3 rounded-full border border-yellow-400/30 bg-yellow-400/5 px-5 py-3"
              >
                <Sparkles className="h-4 w-4 text-yellow-400" />

                <span className="text-xs uppercase tracking-[4px] text-yellow-400">
                  SXA Events
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="text-5xl font-light leading-[1.05] sm:text-6xl md:text-7xl lg:text-[86px]"
              >
                Transformăm
                <br />

                <span className="italic text-yellow-400">
                  momentele
                </span>

                <br />

                în amintiri.
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.25 }}
                className="mt-8 max-w-xl text-base leading-8 text-gray-400 md:text-lg"
              >
                Creăm experiențe memorabile pentru nunți, petreceri și
                evenimente speciale. De la cabine foto și experiențe 360,
                până la Candy Bar, Mini-Pancakes și invitații personalizate.
              </motion.p>

              {/* BUTTONS */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.4 }}
                className="mt-10 flex flex-col gap-4 sm:flex-row"
              >
                <button
                  onClick={() => scrollToSection("servicii")}
                  className="group relative overflow-hidden rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_35px_rgba(250,204,21,0.35)]"
                >
                  <span className="relative z-10">
                    Descoperă serviciile
                  </span>

                  <div className="absolute inset-0 translate-y-full bg-pink-400 transition-transform duration-300 group-hover:translate-y-0" />
                </button>

                <button
                  onClick={() => scrollToSection("contact")}
                  className="rounded-full border border-white/20 bg-white/5 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:border-pink-400 hover:bg-pink-400/10"
                >
                  Cere o ofertă
                </button>
              </motion.div>
            </div>

            {/* RIGHT SIDE */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="relative hidden min-h-[600px] lg:block"
            >
              {/* MAIN CARD */}
              <div className="group absolute inset-0 overflow-hidden rounded-[40px] border border-white/20 bg-[#111] shadow-2xl">

                {/* POZA CU MIRII */}
                <img
                  src="/image/sxa-events.jpg"
                  alt="SXA Events - Nuntă"
                  className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                />

                {/* OVERLAY PESTE POZĂ */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10" />

                {/* ACCENT AURIU + ROZ */}
                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 via-transparent to-yellow-400/10" />

                {/* TEXT */}
                <div className="absolute inset-x-0 bottom-0 p-10 md:p-14">
                  <p className="text-sm uppercase tracking-[8px] text-white/70">
                    Make it
                  </p>

                  <h2 className="mt-4 text-5xl font-light italic text-yellow-400 md:text-6xl">
                    unforgettable
                  </h2>

                  <div className="mt-6 h-px w-32 bg-gradient-to-r from-yellow-400 via-pink-400 to-transparent" />
                </div>
              </div>

              {/* FLOATING ELEMENTS */}
              <div className="absolute -right-6 top-16 h-24 w-24 rounded-full border border-pink-400/40 bg-pink-400/10 blur-[1px]" />

              <div className="absolute -bottom-6 -left-6 h-32 w-32 rounded-full border border-yellow-400/30 bg-yellow-400/5" />
            </motion.div>
          </div>
        </div>
      </div>

      {/* SCROLL */}
      <motion.button
        onClick={() => scrollToSection("servicii")}
        animate={{ y: [0, 8, 0] }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
        }}
        className="absolute bottom-8 left-1/2 z-20 flex -translate-x-1/2 flex-col items-center gap-2 text-gray-500 transition hover:text-yellow-400"
      >
        <span className="text-[10px] uppercase tracking-[4px]">
          Scroll
        </span>

        <ArrowDown className="h-5 w-5" />
      </motion.button>
    </section>
  );
}