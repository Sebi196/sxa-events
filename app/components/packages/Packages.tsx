
"use client";

import { motion } from "framer-motion";
import PackageCard from "./PackageCard";
import { packages } from "./PackagesData";

export default function Packages() {
  return (
    <section
      id="pachete"
      className="bg-[#080808] px-4 py-14 text-white sm:px-6 sm:py-20 md:px-8 md:py-24"
    >
      <div className="mx-auto max-w-[1500px]">
        {/* TITLU */}
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14 md:mb-16">
          <p className="mb-4 text-[10px] uppercase tracking-[3px] text-yellow-400 sm:mb-5 sm:text-xs sm:tracking-[6px]">
            Pachete exclusive SXA Events
          </p>

          <h2 className="text-3xl font-light leading-tight sm:text-4xl md:text-6xl">
            Evenimente speciale.
            <br />
            <span className="italic text-yellow-400">
              Pachete pe măsură.
            </span>
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:mt-6 sm:text-base sm:leading-7 md:text-lg md:leading-8">
            Am pregătit pachete avantajoase pentru nunți, botezuri
            și aniversări, cu servicii atent alese și cadouri
            speciale incluse. Alege experiența potrivită evenimentului tău.
          </p>
        </div>

        {/* PACHETE */}
        <div className="grid grid-cols-1 items-stretch gap-5 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className="h-full min-w-0"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.45,
                delay: (index % 3) * 0.1,
              }}
            >
              <PackageCard
                id={pkg.id}
                name={pkg.name}
                price={pkg.price}
                originalPrice={pkg.originalPrice}
                duration={pkg.duration}
                featured={pkg.featured}
                services={pkg.services}
                gifts={pkg.gifts}
                button={pkg.button}
              />
            </motion.div>
          ))}
        </div>

        {/* AVANTAJUL PACHETELOR */}
        <div className="mt-10 rounded-2xl border border-yellow-400/20 bg-gradient-to-br from-yellow-400/10 via-zinc-950 to-black p-5 text-center sm:mt-14 sm:rounded-3xl sm:p-8 md:mt-16 md:p-12">
          <p className="mb-3 text-[10px] uppercase tracking-[2px] text-yellow-400 sm:mb-4 sm:text-xs sm:tracking-[4px]">
            Mai multe servicii. Mai multe amintiri.
          </p>

          <h3 className="text-2xl font-light leading-tight sm:text-3xl md:text-4xl">
            Alege un pachet și bucură-te de
            <span className="italic text-yellow-400">
              {" "}surprizele incluse.
            </span>
          </h3>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-gray-400 sm:mt-5 sm:text-base sm:leading-7">
            Pachetele noastre reunesc servicii atent selectate și
            beneficii speciale, pentru ca tu să te bucuri de eveniment
            fără griji. Descoperă oferta potrivită și economisește
            față de alegerea serviciilor individuale.
          </p>
        </div>

        {/* PERSONALIZARE CUSTOM */}
        <div
          id="custom"
          className="mt-6 flex min-w-0 flex-col gap-6 rounded-2xl border border-white/10 bg-[#101010] p-5 sm:mt-8 sm:gap-8 sm:rounded-3xl sm:p-8 md:mt-10 md:flex-row md:items-center md:justify-between md:p-12"
        >
          <div className="max-w-2xl">
            <p className="mb-3 text-[10px] uppercase tracking-[2px] text-yellow-400 sm:text-xs sm:tracking-[4px]">
              Tu alegi. Noi personalizăm.
            </p>

            <h3 className="text-2xl font-light leading-tight sm:text-3xl md:text-4xl">
              Vrei ceva creat special pentru tine?
            </h3>

            <p className="mt-3 text-sm leading-6 text-gray-400 sm:mt-4 sm:text-base sm:leading-7">
              Configurează-ți propriul pachet! Alege serviciile
              preferate, combină opțiunile disponibile și creează
              experiența perfectă pentru evenimentul tău.
            </p>
          </div>

          <a
            href="/custom"
            className="inline-flex w-full shrink-0 items-center justify-center rounded-full bg-yellow-400 px-5 py-3 text-center text-sm font-semibold text-black transition duration-300 hover:scale-105 hover:bg-yellow-300 sm:w-auto sm:px-8 sm:py-4 sm:text-base"
          >
            Configurează pachetul tău
            <span className="ml-2" aria-hidden="true">
              →
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
