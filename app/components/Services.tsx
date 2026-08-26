"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Cabină Foto",
    description:
      "Transformăm fiecare moment într-o amintire pe care invitații o pot păstra pentru totdeauna.",
  },
  {
    title: "Cabină 360",
    description:
      "O experiență spectaculoasă, modernă și interactivă pentru invitații tăi.",
  },
  {
    title: "Photobook",
    description:
      "O colecție specială de amintiri pe care invitații o pot completa și păstra.",
  },
  {
    title: "QR Sharing",
    description:
      "Invitații pot primi și distribui rapid amintirile digitale de la eveniment.",
  },
  {
    title: "Invitații",
    description:
      "Invitații personalizate, create pentru stilul și povestea evenimentului vostru.",
  },
  {
    title: "Mărturii",
    description:
      "Detalii speciale și personalizate pe care invitații le pot lua acasă ca amintire.",
  },
  {
    title: "Arcadă de baloane",
    description:
      "Decor spectaculos cu baloane, personalizat în funcție de tematica evenimentului.",
  },
  {
    title: "Plicuri de dar",
    description:
      "Plicuri elegante și personalizate pentru evenimentul vostru.",
  },
  {
    title: "Meniuri",
    description:
      "Meniuri personalizate care completează perfect decorul și tematica evenimentului.",
  },
  {
    title: "Audio Guestbook",
    description:
      "Păstrează vocile și mesajele celor dragi într-o amintire specială.",
  },
  {
    title: "Candy Bar și torturi",
    description:
      "Un colț dulce, elegant și personalizat pentru un eveniment cu adevărat special.",
  },
  {
    title: "Fântână de ciocolată cu fructe",
    description:
      "Un desert spectaculos și delicios, perfect pentru a impresiona invitații.",
  },
  {
    title: "Pahare pentru miri și nași",
    description:
      "Pahare personalizate și elegante pentru cele mai importante momente.",
  },
  {
    title: "Cutii de dar",
    description:
      "Cutii elegante și personalizate pentru darurile oferite la eveniment.",
  },
  {
    title: "Mașină de baloane",
    description:
      "Un moment spectaculos și plin de energie, perfect pentru distracție și fotografii.",
  },
  {
    title: "Bar Mini Pancakes",
    description:
      "Mini pancakes proaspete și delicioase, pregătite pentru fiecare invitat.",
  },
  {
    title: "Panou pentru aranjarea oaspeților la mese",
    description:
      "Un panou elegant și personalizat care îi ajută pe invitați să își găsească locul.",
  },
  {
    title: "Șevalet „Bine ați venit”",
    description:
      "Un element decorativ elegant care întâmpină invitații încă de la intrare.",
  },
  {
    title: "Oglindă decor tip selfie",
    description:
      "Un element decorativ modern și interactiv, perfect pentru fotografii memorabile.",
  },
  {
    
  title: "Decor camera mirilor",
  description:
    "Transformăm camera mirilor într-un spațiu elegant și special, perfect pentru momente memorabile și fotografii de neuitat.",
  },
  {
    title: "Photo Corner nuntă personalizat",
    description:
      "Un colț foto spectaculos, creat special pentru stilul și povestea evenimentului vostru.",
  },
];

export default function Services() {
  return (
    <section
      id="servicii"
      className="relative overflow-hidden bg-[#080808] px-6 py-24 text-white scroll-mt-24 md:px-8"
    >
      {/* EFECTE DE FUNDAL */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-250px] top-[10%] h-[500px] w-[500px] rounded-full bg-pink-500/5 blur-[150px]" />

        <div className="absolute bottom-[10%] right-[-250px] h-[500px] w-[500px] rounded-full bg-yellow-400/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        {/* TITLU */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-4xl"
        >
          <p className="mb-5 text-xs uppercase tracking-[6px] text-yellow-400">
            Ce oferim
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Tot ce ai nevoie pentru un
            <br />

            <span className="italic text-yellow-400">
              eveniment memorabil.
            </span>
          </h2>

          <p className="mt-8 text-lg leading-8 text-gray-400">
            De la experiențe interactive și momente spectaculoase până la
            cele mai mici detalii, creăm un eveniment exact așa cum ți-l
            imaginezi.
          </p>
        </motion.div>

        {/* CARDURI SERVICII */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: Math.min(index * 0.04, 0.3),
              }}
              className="group relative min-h-[230px] overflow-hidden rounded-[28px] border border-white/10 bg-[#0d0d0d] p-8 transition-all duration-500 hover:-translate-y-2 hover:border-yellow-400/60 hover:bg-[#111] hover:shadow-[0_15px_50px_rgba(250,204,21,0.12)]"
            >
              {/* GLOW AURIU */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-40 w-40 rounded-full bg-yellow-400/0 blur-3xl transition-all duration-500 group-hover:bg-yellow-400/10" />

              {/* GLOW ROZ */}
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-40 w-40 rounded-full bg-pink-500/0 blur-3xl transition-all duration-500 group-hover:bg-pink-500/10" />

              {/* CONȚINUT */}
              <div className="relative z-10 flex h-full flex-col">
                {/* LINIE DECORATIVĂ */}
                <div className="mb-6 h-[2px] w-12 bg-gradient-to-r from-yellow-400 via-pink-400 to-transparent transition-all duration-500 group-hover:w-24" />

                {/* TITLU */}
                <h3 className="text-2xl font-light text-white transition-colors duration-300 group-hover:text-yellow-400">
                  {service.title}
                </h3>

                {/* DESCRIERE */}
                <p className="mt-4 leading-7 text-gray-400 transition-colors duration-300 group-hover:text-gray-300">
                  {service.description}
                </p>

                {/* BUTON */}
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({
                        behavior: "smooth",
                      })
                  }
                  className="mt-auto pt-6 text-left text-xs font-medium uppercase tracking-[3px] text-yellow-400 transition-all duration-300 hover:scale-105 hover:text-pink-400"
                >
                  Cere ofertă →
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}