"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Check,
  Sparkles,
  X,
  ChevronRight,
  Users,
} from "lucide-react";

type Currency = "lei" | "€";

type Option = {
  label: string;
  price?: number;
  currency?: Currency;
};

type Service = {
  name: string;
  subtitle: string;
  description?: string;
  price?: number;
  currency?: Currency;
  customPrice?: boolean;
  perPerson?: boolean;
  perPiece?: boolean;
  options?: Option[];
};

type SelectedService = {
  name: string;
  option?: string;
  price?: number;
  currency?: Currency;
  customPrice?: boolean;
  perPerson?: boolean;
  perPiece?: boolean;
  quantity?: number;
};

const services: Service[] = [
  {
    name: "Cabină Foto",
    subtitle: "EXPERIENȚĂ FOTO",
    description:
      "Amintiri instant, accesorii și momente pe care invitații le vor păstra.",
    options: [
      { label: "4 ore", price: 1300 },
      { label: "5 ore", price: 1450 },
      { label: "6 ore", price: 1600 },
      { label: "8 ore", price: 1800 },
    ],
  },
  {
    name: "Platformă 360",
    subtitle: "EXPERIENȚĂ 360°",
    description:
      "O experiență spectaculoasă și interactivă pentru invitații tăi.",
    options: [
      { label: "4 ore", price: 1100 },
      { label: "5 ore", price: 1200 },
      { label: "6 ore", price: 1600 },
      { label: "8 ore", price: 1800 },
    ],
  },
  {
    name: "Candy Bar",
    subtitle: "SWEET EXPERIENCE",
    description:
      "Un Candy Bar personalizat pentru evenimentul tău, calculat în funcție de numărul de invitați.",
    price: 8,
    currency: "€",
    perPerson: true,
  },
  {
    name: "Bar Mini-Pancakes",
    subtitle: "LIVE DESSERT BAR",
    description:
      "Mini-pancakes pregătite proaspăt pentru invitații evenimentului.",
    price: 6,
    currency: "€",
    perPerson: true,
  },
  {
    name: "Tort personalizat",
    subtitle: "SIGNATURE CAKE",
    description:
      "Creat special în funcție de design, dimensiune și dorințele voastre.",
    customPrice: true,
  },
  {
    name: "Invitații de nuntă",
    subtitle: "PAPETĂRIE",
    description: "Comandă minimă de 100 bucăți.",
    price: 7,
    perPiece: true,
    customPrice: true,
  },
  {
    name: "Mărturii",
    subtitle: "DETALII SPECIALE",
    description:
      "Cadouri personalizate pentru invitații tăi.",
    price: 9,
    perPiece: true,
    customPrice: true,
  },
  {
    name: "Arcadă de baloane",
    subtitle: "EVENT DECOR",
    description:
      "Decor spectaculos adaptat stilului evenimentului.",
    options: [
      { label: "Fără nume", price: 800 },
      { label: "Cu nume", price: 1000 },
    ],
  },
  {
    name: "Plicuri de dar",
    subtitle: "PAPETĂRIE",
    price: 5,
    perPiece: true,
    customPrice: true,
  },
  {
    name: "Meniuri personalizate",
    subtitle: "PAPETĂRIE",
    price: 5,
    perPiece: true,
    customPrice: true,
  },
  {
    name: "Audio Guestbook",
    subtitle: "AMINTIRI CU VOCE",
    price: 300,
  },
  {
    name: "Fântână de ciocolată",
    subtitle: "SWEET EXPERIENCE",
    description:
      "Un moment dulce și spectaculos pentru invitații evenimentului.",
    options: [
      {
        label: "Fântână mică · 60 frigărui · 2 kg ciocolată",
        price: 600,
      },
      {
        label: "Fântână 5 etaje · 120 frigărui · 4 kg ciocolată",
        price: 1200,
      },
    ],
  },
  {
    name: "Pahare pentru miri și nași",
    subtitle: "DETALII PERSONALIZATE",
    price: 100,
  },
  {
    name: "Cutie de dar",
    subtitle: "DETALII EVENIMENT",
    price: 100,
    customPrice: true,
  },
  {
    name: "Glow Sticks",
    subtitle: "PARTY MOMENT",
    price: 5,
    perPiece: true,
  },
  {
    name: "Mașină de baloane cu fum",
    subtitle: "SPECIAL EFFECT",
    price: 300,
    currency: "€",
    description:
      "Tot evenimentul · aproximativ 5–6 intrări spectaculoase.",
  },
  {
    name: "Panou aranjare invitați la mese",
    subtitle: "EVENT STATIONERY",
    price: 200,
  },
  {
    name: "Șevalet „Bine ați venit”",
    subtitle: "WELCOME MOMENT",
    price: 150,
  },
  {
    name: "Oglindă selfie personalizată",
    subtitle: "INTERACTIVE DECOR",
    price: 200,
  },
  {
    name: "Decor cameră",
    subtitle: "WEDDING MORNING",
    options: [
      {
        label: "Camera miresei",
        price: 500,
      },
      {
        label: "Camera mireasă + mire",
        price: 800,
      },
    ],
  },
  {
    name: "QR Sharing",
    subtitle: "DIGITAL EXPERIENCE",
    price: 200,
  },
  {
    name: "Photo Corner personalizat",
    subtitle: "PHOTO EXPERIENCE",
    price: 600,
  },
  {
    name: "Panou „These kids are getting married”",
    subtitle: "PHOTO MOMENT",
    price: 400,
  },
];

export default function CustomPackage() {
  const router = useRouter();

  const [selected, setSelected] = useState<Record<string, SelectedService>>(
    {}
  );

  const selectOption = (service: Service, option: Option) => {
    setSelected((current) => ({
      ...current,
      [service.name]: {
        name: service.name,
        option: option.label,
        price: option.price,
        currency: option.currency || service.currency || "lei",
        customPrice: service.customPrice,
      },
    }));
  };

  const toggleService = (service: Service) => {
    setSelected((current) => {
      const updated = { ...current };

      if (updated[service.name]) {
        delete updated[service.name];
      } else {
        updated[service.name] = {
          name: service.name,
          price: service.price,
          currency: service.currency || "lei",
          customPrice: service.customPrice,
          perPerson: service.perPerson,
          perPiece: service.perPiece,
          quantity:
            service.perPerson || service.perPiece ? 1 : undefined,
        };
      }

      return updated;
    });
  };

  const updateQuantity = (name: string, quantity: number) => {
    setSelected((current) => ({
      ...current,
      [name]: {
        ...current[name],
        quantity: Math.max(1, quantity || 1),
      },
    }));
  };

  const removeService = (name: string) => {
    setSelected((current) => {
      const updated = { ...current };
      delete updated[name];
      return updated;
    });
  };

  const selectedServices = Object.values(selected);

  const totals = useMemo(() => {
    return selectedServices.reduce(
      (acc, service) => {
        if (!service.price) return acc;

        const quantity =
          service.perPerson || service.perPiece
            ? service.quantity || 1
            : 1;

        const total = service.price * quantity;

        if (service.currency === "€") {
          acc.euro += total;
        } else {
          acc.lei += total;
        }

        return acc;
      },
      { lei: 0, euro: 0 }
    );
  }, [selectedServices]);

  const handleOffer = () => {
    if (selectedServices.length === 0) {
      alert("Alege cel puțin un serviciu pentru pachetul tău.");
      return;
    }

    const offerData = {
      selectedServices,
      totals,
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "sxa-custom-offer",
      JSON.stringify(offerData)
    );

    router.push("/oferta");
  };

  return (
    <main className="min-h-screen bg-[#080808] text-white">
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute -left-64 top-0 h-[600px] w-[600px] rounded-full bg-yellow-400/[0.04] blur-[160px]" />
        <div className="absolute -right-64 top-[30%] h-[700px] w-[700px] rounded-full bg-pink-500/[0.04] blur-[180px]" />
      </div>

      <div className="relative mx-auto max-w-[1500px] px-6 pb-32 pt-32 md:px-10">

        <button
          type="button"
          onClick={() => router.push("/#pachete")}
          className="group mb-14 inline-flex items-center gap-3 text-xs uppercase tracking-[4px] text-gray-500 transition hover:text-yellow-400"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition group-hover:border-yellow-400/50 group-hover:bg-yellow-400/10">
            <ArrowLeft className="h-4 w-4" />
          </span>

          Înapoi la pachete
        </button>

        <div className="max-w-4xl">
          <div className="mb-8 inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-yellow-400/[0.04] px-5 py-3">
            <Sparkles className="h-4 w-4 text-yellow-400" />

            <span className="text-[10px] uppercase tracking-[5px] text-yellow-400">
              SXA EVENTS · CUSTOM EXPERIENCE
            </span>
          </div>

          <h1 className="text-5xl font-light leading-[1.02] tracking-tight md:text-7xl">
            Creează un eveniment
            <br />

            <span className="italic text-yellow-400">
              exact ca în povestea ta.
            </span>
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
            Alege serviciile dorite, selectează variantele potrivite și
            personalizează fiecare detaliu al evenimentului.
          </p>
        </div>

        <div className="sticky top-5 z-40 mt-16 rounded-[30px] border border-white/10 bg-black/80 p-5 shadow-2xl backdrop-blur-2xl md:p-6">
          <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">

            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-yellow-400/30 bg-yellow-400/10 text-xl font-light text-yellow-400">
                {selectedServices.length}
              </div>

              <div>
                <p className="text-[10px] uppercase tracking-[4px] text-gray-500">
                  Pachetul tău
                </p>

                <p className="mt-1 text-lg font-light">
                  {selectedServices.length === 0
                    ? "Începe să alegi serviciile"
                    : `${selectedServices.length} servicii selectate`}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="text-right">
                <p className="text-[9px] uppercase tracking-[3px] text-gray-500">
                  Estimare
                </p>

                <p className="mt-1 text-lg text-yellow-400">
                  {totals.lei.toLocaleString("ro-RO")} lei
                  {totals.euro > 0 &&
                    ` + ${totals.euro.toLocaleString("ro-RO")} €`}
                </p>
              </div>

              <button
                type="button"
                onClick={handleOffer}
                className="rounded-full bg-yellow-400 px-6 py-4 text-sm font-semibold text-black transition hover:scale-105 hover:bg-pink-400"
              >
                Cere oferta
              </button>
            </div>

          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => {
            const isSelected = !!selected[service.name];

            return (
              <div
                key={service.name}
                className={`group relative overflow-hidden rounded-[32px] border p-8 transition-all duration-500 ${
                  isSelected
                    ? "border-yellow-400/70 bg-gradient-to-br from-yellow-400/[0.12] via-[#121212] to-[#0d0d0d] shadow-[0_0_50px_rgba(250,204,21,0.08)]"
                    : "border-white/10 bg-[#0d0d0d] hover:-translate-y-1 hover:border-yellow-400/40 hover:bg-[#101010]"
                }`}
              >
                <div className="relative">

                  <div className="flex items-start justify-between gap-6">
                    <div>
                      <p className="text-[9px] uppercase tracking-[4px] text-yellow-400/80">
                        {service.subtitle}
                      </p>

                      <h2 className="mt-4 text-2xl font-light">
                        {service.name}
                      </h2>
                    </div>

                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-full border ${
                        isSelected
                          ? "border-yellow-400 bg-yellow-400 text-black"
                          : "border-white/10 text-gray-500"
                      }`}
                    >
                      {isSelected ? (
                        <Check className="h-5 w-5" />
                      ) : (
                        <Sparkles className="h-4 w-4" />
                      )}
                    </div>
                  </div>

                  {service.description && (
                    <p className="mt-5 min-h-[48px] text-sm leading-6 text-gray-500">
                      {service.description}
                    </p>
                  )}

                  {service.options ? (
                    <div className="mt-8 grid grid-cols-1 gap-3">
                      {service.options.map((option) => {
                        const optionSelected =
                          selected[service.name]?.option === option.label;

                        return (
                          <button
                            type="button"
                            key={option.label}
                            onClick={() => selectOption(service, option)}
                            className={`rounded-2xl border p-4 text-left transition-all duration-300 ${
                              optionSelected
                                ? "border-yellow-400 bg-yellow-400 text-black"
                                : "border-white/10 bg-white/[0.02] hover:border-yellow-400/50"
                            }`}
                          >
                            <p className="text-sm font-medium">
                              {option.label}
                            </p>

                            <p
                              className={`mt-2 text-xs ${
                                optionSelected
                                  ? "text-black/70"
                                  : "text-yellow-400"
                              }`}
                            >
                              {option.price?.toLocaleString("ro-RO")}{" "}
                              {option.currency ||
                                service.currency ||
                                "lei"}
                            </p>
                          </button>
                        );
                      })}
                    </div>
                  ) : (
                    <>
                      <div className="mt-8">
                        <p className="text-[9px] uppercase tracking-[3px] text-gray-600">
                          Investiție
                        </p>

                        <p className="mt-2 text-2xl font-light text-yellow-400">
                          {service.customPrice && !service.price
                            ? "Preț personalizat"
                            : service.perPerson
                            ? `${service.price} ${service.currency} / persoană`
                            : service.perPiece
                            ? `De la ${service.price} ${
                                service.currency || "lei"
                              } / buc`
                            : `${service.price?.toLocaleString(
                                "ro-RO"
                              )} ${service.currency || "lei"}`}
                        </p>
                      </div>

                      <button
                        type="button"
                        onClick={() => toggleService(service)}
                        className={`mt-7 flex w-full items-center justify-center gap-3 rounded-full px-6 py-4 text-sm font-semibold transition-all duration-300 ${
                          isSelected
                            ? "bg-yellow-400 text-black hover:bg-pink-400"
                            : "border border-yellow-400/40 text-yellow-400 hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
                        }`}
                      >
                        {isSelected ? (
                          <>
                            <Check className="h-4 w-4" />
                            Selectat
                          </>
                        ) : (
                          <>
                            Adaugă în pachet
                            <ChevronRight className="h-4 w-4" />
                          </>
                        )}
                      </button>

                      {isSelected &&
                        (service.perPerson || service.perPiece) && (
                          <div className="mt-6 rounded-2xl border border-yellow-400/20 bg-black/20 p-5">
                            <div className="flex items-center gap-3">

                              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-yellow-400/10 text-yellow-400">
                                <Users className="h-4 w-4" />
                              </div>

                              <div className="flex-1">
                                <p className="text-xs uppercase tracking-[3px] text-gray-500">
                                  {service.perPerson
                                    ? "Număr persoane"
                                    : "Număr bucăți"}
                                </p>
                              </div>

                              <input
                                type="number"
                                min="1"
                                value={
                                  selected[service.name]?.quantity || 1
                                }
                                onChange={(e) =>
                                  updateQuantity(
                                    service.name,
                                    Number(e.target.value)
                                  )
                                }
                                className="w-20 rounded-xl border border-white/5 bg-white/5 px-3 py-3 text-center text-sm text-white outline-none focus:border-yellow-400"
                              />
                            </div>

                            <div className="mt-5 border-t border-white/10 pt-4">
                              <p className="text-xs text-gray-500">
                                {selected[service.name]?.quantity || 1}{" "}
                                {service.perPerson
                                  ? "persoane"
                                  : "bucăți"}{" "}
                                × {service.price}{" "}
                                {service.currency || "lei"}
                              </p>

                              <p className="mt-2 text-xl text-yellow-400">
                                Total:{" "}
                                {(
                                  (selected[service.name]?.quantity || 1) *
                                  (service.price || 0)
                                ).toLocaleString("ro-RO")}{" "}
                                {service.currency || "lei"}
                              </p>
                            </div>
                          </div>
                        )}
                    </>
                  )}

                  {service.options && isSelected && (
                    <button
                      type="button"
                      onClick={() => removeService(service.name)}
                      className="mt-5 flex items-center gap-2 text-xs uppercase tracking-[2px] text-gray-500 transition hover:text-pink-400"
                    >
                      <X className="h-3 w-3" />
                      Elimină alegerea
                    </button>
                  )}

                </div>
              </div>
            );
          })}
        </div>

        {selectedServices.length > 0 && (
          <section className="mt-20 rounded-[40px] border border-yellow-400/20 bg-gradient-to-br from-yellow-400/[0.08] via-[#111] to-[#0b0b0b] p-8 md:p-12">

            <p className="text-[10px] uppercase tracking-[5px] text-yellow-400">
              Selecția ta
            </p>

            <h2 className="mt-5 text-3xl font-light md:text-5xl">
              Pachetul tău
              <span className="italic text-yellow-400">
                {" "}personalizat.
              </span>
            </h2>

            <div className="mt-10 grid gap-3">
              {selectedServices.map((service) => {
                const quantity =
                  service.perPerson || service.perPiece
                    ? service.quantity || 1
                    : 1;

                const total = service.price
                  ? service.price * quantity
                  : null;

                return (
                  <div
                    key={service.name}
                    className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-black/20 p-5 md:flex-row md:items-center md:justify-between"
                  >
                    <div>
                      <p className="text-lg text-white">
                        {service.name}

                        {service.option && (
                          <span className="ml-2 text-yellow-400">
                            · {service.option}
                          </span>
                        )}
                      </p>

                      {(service.perPerson || service.perPiece) &&
                        service.price && (
                          <p className="mt-2 text-sm text-gray-500">
                            {quantity}{" "}
                            {service.perPerson
                              ? "persoane"
                              : "bucăți"}{" "}
                            × {service.price}{" "}
                            {service.currency || "lei"}
                          </p>
                        )}
                    </div>

                    <div className="flex items-center gap-5">
                      <p className="text-lg text-yellow-400">
                        {total
                          ? `${total.toLocaleString(
                              "ro-RO"
                            )} ${service.currency || "lei"}`
                          : "Preț personalizat"}
                      </p>

                      <button
                        type="button"
                        onClick={() => removeService(service.name)}
                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-gray-500 transition hover:border-pink-400 hover:text-pink-400"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-12 flex flex-col gap-6 border-t border-white/10 pt-8 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[4px] text-gray-500">
                  Estimare totală
                </p>

                <p className="mt-3 text-3xl font-light text-yellow-400">
                  {totals.lei.toLocaleString("ro-RO")} lei
                  {totals.euro > 0 &&
                    ` + ${totals.euro.toLocaleString("ro-RO")} €`}
                </p>

                <p className="mt-3 text-xs text-gray-500">
                  Serviciile cu preț personalizat vor fi calculate în oferta
                  finală.
                </p>
              </div>

              <button
                type="button"
                onClick={handleOffer}
                className="inline-flex items-center justify-center gap-3 rounded-full bg-yellow-400 px-9 py-5 font-semibold text-black transition-all duration-300 hover:scale-105 hover:bg-pink-400"
              >
                Continuă către ofertă
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

          </section>
        )}
      </div>
    </main>
  );
}