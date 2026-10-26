
"use client";

import { useRouter } from "next/navigation";

type PackageCardProps = {
  id: string;
  name: string;
  price?: string;
  originalPrice: string;
  duration: string;
  featured: boolean;
  services: string[];
  gifts: string[];
  button: string;
};

export default function PackageCard({
  id,
  name,
  price,
  originalPrice,
  duration,
  featured,
  services,
  gifts,
  button,
}: PackageCardProps) {
  const router = useRouter();

  const handleClick = () => {
    if (id === "custom") {
      router.push("/custom");
    } else {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <article
      className={`relative flex h-full flex-col rounded-[28px] border p-7 transition duration-300 hover:-translate-y-2 ${
        featured
          ? "border-yellow-400 bg-gradient-to-b from-yellow-400/10 to-zinc-900 shadow-[0_0_40px_rgba(250,204,21,0.15)]"
          : "border-white/10 bg-[#0d0d0d] hover:border-yellow-400/60"
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-yellow-400 px-5 py-2 text-xs font-bold uppercase tracking-wide text-black">
          ⭐ Printre cele mai alese
        </div>
      )}

      <div className="mb-6 pt-2">
        <p className="mb-2 text-xs uppercase tracking-[3px] text-yellow-400">
          SXA Events
        </p>

        <h3 className="text-2xl font-medium text-white md:text-3xl">
          {name}
        </h3>

        <p className="mt-3 text-sm text-gray-400">
          ◷ {duration}
        </p>

        <div className="mt-5 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="text-lg text-gray-500 line-through decoration-red-400">
            {originalPrice}
          </span>

          {price && (
            <span className="text-4xl font-bold tracking-tight text-yellow-400">
              {price}
            </span>
          )}
        </div>

        <p className="mt-2 text-xs text-gray-500">
          Pachet special SXA Events
        </p>
      </div>

      <div className="mb-6 h-px w-full bg-white/10" />

      <div>
        <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
          Servicii incluse
        </h4>

        <ul className="flex flex-col gap-3">
          {services.map((service, index) => (
            <li
              key={`${id}-service-${index}`}
              className="flex items-start gap-3 text-sm leading-6 text-gray-300"
            >
              <span className="mt-0.5 shrink-0 text-yellow-400">
                ✓
              </span>
              <span>{service}</span>
            </li>
          ))}
        </ul>
      </div>

      {gifts.length > 0 && (
        <div className="mt-7 rounded-2xl border border-yellow-400/25 bg-yellow-400/5 p-4">
          <h4 className="mb-4 text-sm font-bold uppercase tracking-wider text-yellow-400">
            🎁 Cadouri incluse
          </h4>

          <ul className="flex flex-col gap-3">
            {gifts.map((gift, index) => (
              <li
                key={`${id}-gift-${index}`}
                className="text-sm leading-6 text-white"
              >
                {gift}
              </li>
            ))}
          </ul>
        </div>
      )}

      <button
        type="button"
        onClick={handleClick}
        className={`mt-auto w-full pt-8`}
      >
        <span
          className={`block w-full rounded-full px-5 py-4 text-center font-semibold transition duration-300 ${
            featured
              ? "bg-yellow-400 text-black hover:scale-[1.03] hover:bg-yellow-300"
              : "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
          }`}
        >
          {button}
          <span className="ml-2" aria-hidden="true">
            →
          </span>
        </span>
      </button>
    </article>
  );
}
