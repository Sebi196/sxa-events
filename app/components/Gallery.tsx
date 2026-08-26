"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const galleryImages = [
  {
    src: "/image/candybar.jpg",
    title: "Candy Bar",
    description: "Momente dulci pentru evenimente speciale.",
  },
  {
    src: "/image/mini-pancakes.jpg",
    title: "Mini-Pancakes",
    description:
      "Mini-pancakes proaspete și delicioase, pregătite pentru invitații tăi.",
  },
  {
    src: "/image/cabina-360.jpg",
    title: "Cabină 360",
    description:
      "Experiențe spectaculoase și amintiri memorabile pentru invitații tăi.",
  },
  {
    src: "/image/invitatii.jpg",
    title: "Invitații pentru nuntă",
    description:
      "Invitații personalizate pentru a face primul pas spre evenimentul vostru special.",
  },
  {
    src: "/image/sxa-events.jpg",
    title: "SXA Events",
    description:
      "Suntem alături de voi la fiecare pas, pentru ca fiecare detaliu să devină parte dintr-o zi pe care o veți păstra mereu în suflet.",
    featured: true,
  },
  {
    src: "/image/cabina-foto.jpg",
    title: "Cabină Foto",
    description:
      "Distracție, zâmbete și fotografii instant pentru fiecare invitat.",
  },
];

export default function Gallery() {
  return (
    <section
      id="galerie"
      className="relative overflow-hidden bg-[#080808] px-6 py-24 text-white md:px-8"
    >
      {/* EFECTE FUNDAL */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-250px] top-[20%] h-[500px] w-[500px] rounded-full bg-pink-500/5 blur-[150px]" />

        <div className="absolute bottom-[10%] right-[-250px] h-[500px] w-[500px] rounded-full bg-yellow-400/5 blur-[150px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px]">
        {/* TITLU */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 max-w-3xl"
        >
          <p className="mb-5 text-xs uppercase tracking-[6px] text-yellow-400">
            Galeria noastră
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Momente care
            <br />

            <span className="italic text-yellow-400">
              merită păstrate.
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-400">
            Descoperă serviciile și momentele speciale care transformă
            fiecare eveniment într-o experiență memorabilă.
          </p>
        </motion.div>

        {/* GALERIE */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              className={`group relative h-[450px] cursor-pointer overflow-hidden rounded-3xl border bg-zinc-900 transition-all duration-500 hover:-translate-y-2 ${
                image.featured
                  ? "border-yellow-400/40 hover:border-yellow-400 hover:shadow-[0_20px_60px_rgba(250,204,21,0.15)]"
                  : "border-white/10 hover:border-yellow-400/50"
              }`}
            >
              {/* POZA */}
              <Image
                src={image.src}
                alt={image.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />

              {/* GLOW SPECIAL */}
              {image.featured && (
                <div className="pointer-events-none absolute -right-20 -top-20 h-48 w-48 rounded-full bg-yellow-400/10 blur-3xl" />
              )}

              {/* TEXT */}
              <div className="absolute inset-x-0 bottom-0 translate-y-2 p-8 transition-transform duration-500 group-hover:translate-y-0">
                <p className="mb-3 text-xs uppercase tracking-[4px] text-yellow-400">
                  {image.featured ? "Cine suntem" : "SXA Events"}
                </p>

                <h3 className="text-2xl font-medium md:text-3xl">
                  {image.title}
                </h3>

                <p className="mt-3 leading-6 text-gray-300">
                  {image.description}
                </p>

                <div className="mt-5 h-[2px] w-12 bg-gradient-to-r from-yellow-400 via-pink-400 to-transparent transition-all duration-500 group-hover:w-24" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}