"use client";

import { useRouter } from "next/navigation";

type PackageCardProps = {
  id: string;
  name: string;
  price?: string;
  duration: string;
  featured: boolean;
  services: string[];
  button: string;
};

export default function PackageCard({
  id,
  name,
  price,
  duration,
  featured,
  services,
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
    <div
      className={`relative flex h-full flex-col rounded-[28px] border p-8 transition duration-300 hover:-translate-y-2 ${
        featured
          ? "border-yellow-400 bg-zinc-900 shadow-[0_0_40px_rgba(250,204,21,0.12)]"
          : "border-white/10 bg-[#0d0d0d] hover:border-yellow-400/60"
      }`}
    >
      {featured && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-yellow-400 px-5 py-2 text-xs font-semibold text-black">
          CEL MAI COMPLET
        </div>
      )}

      <div className="mb-8">
        <h3 className="text-2xl font-medium text-white">
          {name}
        </h3>

        <div className="mt-4">
          {price && (
            <span className="text-4xl font-semibold text-yellow-400">
              {price}
            </span>
          )}

          <p
            className={`text-sm text-gray-400 ${
              price ? "mt-2" : "mt-4"
            }`}
          >
            {duration}
          </p>
        </div>
      </div>

      <div className="mb-8 h-px w-full bg-white/10" />

      <ul className="flex flex-col gap-4">
        {services.map((service, index) => (
          <li
            key={index}
            className={`flex items-start gap-3 text-sm leading-6 ${
              service.toUpperCase().includes("CADOU")
                ? "font-medium text-yellow-400"
                : "text-gray-300"
            }`}
          >
            <span
              className={`mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full ${
                service.includes("CADOU")
                  ? "bg-yellow-400 shadow-[0_0_10px_rgba(250,204,21,0.8)]"
                  : "bg-yellow-400"
              }`}
            />

            <span>{service}</span>
          </li>
        ))}
      </ul>

      <button
        type="button"
        onClick={handleClick}
        className="mt-auto w-full pt-8"
      >
        <span
          className={`block w-full rounded-full px-6 py-4 text-center font-semibold transition duration-300 ${
            featured
              ? "bg-yellow-400 text-black hover:scale-[1.03]"
              : "border border-yellow-400 text-yellow-400 hover:bg-yellow-400 hover:text-black"
          }`}
        >
          {button}
        </span>
      </button>
    </div>
  );
}