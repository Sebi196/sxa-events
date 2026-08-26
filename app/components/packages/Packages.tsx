"use client";

import { motion } from "framer-motion";
import PackageCard from "./PackageCard";
import { packages } from "./PackagesData";

export default function Packages() {
  return (
    <section
      id="pachete"
      className="bg-[#080808] px-6 py-24 text-white md:px-8"
    >
      <div className="mx-auto max-w-[1500px]">

        <div className="mb-16 max-w-3xl">
          <p className="mb-5 text-xs uppercase tracking-[6px] text-yellow-400">
            Pachetele noastre
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Alege experiența
            <br />

            <span className="italic text-yellow-400">
              perfectă pentru tine.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Am creat pachete flexibile pentru momente speciale, astfel încât
            fiecare eveniment să poată fi personalizat în funcție de dorințele
            și nevoile tale.
          </p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2 xl:grid-cols-4">
          {packages.map((pkg, index) => (
            <motion.div
              key={pkg.id}
              className="h-full"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
            >
              <PackageCard
                id={pkg.id}
                name={pkg.name}
                price={pkg.price}
                duration={pkg.duration}
                featured={pkg.featured}
                services={pkg.services}
                button={pkg.button}
              />
            </motion.div>
          ))}
        </div>

        <div className="mt-16 flex flex-col gap-8 rounded-3xl border border-yellow-400/20 bg-gradient-to-r from-yellow-400/10 to-transparent p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[4px] text-yellow-400">
              Evenimentul tău, stilul tău
            </p>

            <h3 className="text-2xl font-light md:text-3xl">
              Nu știi ce pachet ți se potrivește?
            </h3>

            <p className="mt-3 max-w-xl text-gray-400">
              Contactează-ne și discutăm împreună despre evenimentul tău.
              Putem personaliza serviciile în funcție de ceea ce îți dorești.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center whitespace-nowrap rounded-full bg-yellow-400 px-8 py-4 font-semibold text-black transition duration-300 hover:scale-105"
          >
            Cere o ofertă
          </a>
        </div>
      </div>
    </section>
  );
}