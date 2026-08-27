"use client";

import { useState } from "react";
import { Phone, Send, CalendarDays, Users } from "lucide-react";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

export default function Contact() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [guests, setGuests] = useState("");
  const [details, setDetails] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Trimite conversia către Google Ads
    if (typeof window !== "undefined" && window.gtag) {
      window.gtag("event", "conversion", {
        send_to: "AW-1814357249/97YCKiM6ucEOGenMxE",
        value: 1.0,
        currency: "RON",
      });
    }

    const message = `Salut! Aș dori să solicit o ofertă pentru un eveniment SXA Events.

👤 Nume: ${name}
📞 Telefon: ${phone}
🎉 Tip eveniment: ${eventType}
📅 Data evenimentului: ${eventDate}
👥 Număr invitați: ${guests}

📝 Detalii:
${details}`;

    const whatsappNumber = "40771116479";

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(whatsappUrl, "_blank");
  }

  return (
    <section
      id="contact"
      className="scroll-mt-24 bg-zinc-950 px-6 py-24 text-white md:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-16 lg:grid-cols-2">

          <div>
            <p className="mb-5 text-xs uppercase tracking-[6px] text-yellow-400">
              HAI SĂ VORBIM
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Evenimentul tău
              <br />
              <span className="italic text-yellow-400">
                începe aici.
              </span>
            </h2>

            <p className="mt-8 max-w-lg leading-7 text-gray-400">
              Completează formularul și spune-ne câteva detalii despre
              evenimentul tău. Îți vom pregăti o ofertă personalizată.
            </p>

            <div className="mt-10 space-y-6">

              <a
                href="tel:0771116479"
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-400/30 text-yellow-400 transition group-hover:bg-yellow-400 group-hover:text-black">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-500">
                    Numere de telefon
                  </p>

                  <p className="transition group-hover:text-yellow-400">
                    0771 116 479 / 0733 235 323
                  </p>
                </div>
              </a>

              <a
                href="https://www.instagram.com/sxaevents/"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full border border-yellow-400/30 text-yellow-400 transition group-hover:bg-yellow-400 group-hover:text-black">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="18" cy="6" r="1" fill="currentColor" />
                  </svg>
                </div>

                <div>
                  <p className="text-sm text-gray-500">Instagram</p>
                  <p className="font-medium text-white transition group-hover:text-yellow-400">
                    @sxaevents
                  </p>
                </div>
              </a>

              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-yellow-400/30 text-yellow-400">
                  <Phone size={20} />
                </div>

                <div>
                  <p className="mb-1 text-sm text-gray-500">WhatsApp</p>

                  <div className="flex flex-col gap-1">
                    <a
                      href="https://wa.me/40771116479"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white transition hover:text-yellow-400"
                    >
                      0771 116 479
                    </a>

                    <a
                      href="https://wa.me/40733235323"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-white transition hover:text-yellow-400"
                    >
                      0733 235 323
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[30px] border border-white/10 bg-black p-8 md:p-10"
          >
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-400/10 text-yellow-400">
                <Send size={18} />
              </div>

              <h3 className="text-2xl">Cere o ofertă</h3>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <input
                type="text"
                placeholder="Numele tău"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 outline-none transition focus:border-yellow-400"
              />

              <input
                type="tel"
                placeholder="Număr de telefon"
                required
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 outline-none transition focus:border-yellow-400"
              />
            </div>

            <select
              required
              value={eventType}
              onChange={(e) => setEventType(e.target.value)}
              className="mt-5 w-full rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 text-gray-300 outline-none transition focus:border-yellow-400"
            >
              <option value="">Alege tipul evenimentului</option>
              <option value="Nuntă">Nuntă</option>
              <option value="Botez">Botez</option>
              <option value="Majorat">Majorat</option>
              <option value="Aniversare">Aniversare</option>
              <option value="Eveniment corporate">
                Eveniment corporate
              </option>
              <option value="Alt eveniment">Alt eveniment</option>
            </select>

            <div className="mt-5 grid gap-5 md:grid-cols-2">
              <div className="relative">
                <CalendarDays
                  size={18}
                  className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-yellow-400"
                />

                <input
                  type="date"
                  required
                  value={eventDate}
                  onChange={(e) => setEventDate(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-zinc-900 py-4 pl-12 pr-5 text-gray-300 outline-none transition focus:border-yellow-400"
                />
              </div>

              <div className="relative">
                <Users
                  size={18}
                  className="pointer-events-none absolute left-5 top-1/2 -translate-y-1/2 text-yellow-400"
                />

                <input
                  type="number"
                  placeholder="Număr invitați"
                  required
                  min="1"
                  value={guests}
                  onChange={(e) => setGuests(e.target.value)}
                  className="w-full rounded-xl border border-white/10 py-4 pl-12 pr-5 outline-none transition focus:border-yellow-400"
                />
              </div>
            </div>

            <textarea
              placeholder="Spune-ne câteva detalii despre eveniment..."
              rows={5}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="mt-5 w-full resize-none rounded-xl border border-white/10 bg-zinc-900 px-5 py-4 outline-none transition focus:border-yellow-400"
            />

            <button
              type="submit"
              className="mt-6 flex w-full items-center justify-center gap-3 rounded-full bg-yellow-400 py-4 font-semibold text-black transition duration-300 hover:scale-[1.02]"
            >
              Trimite cererea pe WhatsApp
              <Send size={19} />
            </button>

            <p className="mt-5 text-center text-xs text-gray-500">
              Vei fi redirecționat către WhatsApp pentru a trimite cererea.
            </p>
          </form>

        </div>
      </div>
    </section>
  );
}