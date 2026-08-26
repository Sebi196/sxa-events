import {
  Phone,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="border-t border-yellow-400/20 bg-black text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-16 md:px-8">

        {/* PARTEA PRINCIPALĂ */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* BRAND */}
          <div>
            <p className="mb-4 text-xs uppercase tracking-[6px] text-yellow-400">
              Premium Event Experience
            </p>

            <h2 className="text-4xl font-bold">
              Events by
              <span className="block italic text-yellow-400">
                SXA
              </span>
            </h2>

            <p className="mt-6 leading-7 text-gray-400">
              Transformăm momentele speciale în experiențe și amintiri
              de neuitat.
            </p>

            {/* SOCIAL MEDIA */}
            <div className="mt-8 flex gap-4">

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/sxaevents/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect
                    x="2"
                    y="2"
                    width="20"
                    height="20"
                    rx="5"
                    ry="5"
                  />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="1"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* FACEBOOK */}
              <a
                href="#"
                aria-label="Facebook"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v8h4v-8h3.2l.8-4H13V9c0-.7.3-1 1-1z" />
                </svg>
              </a>

              {/* WHATSAPP */}
              <a
                href="https://wa.me/40771116479"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 text-white transition hover:border-yellow-400 hover:bg-yellow-400 hover:text-black"
              >
                <svg
                  width="21"
                  height="21"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 11.5a8.4 8.4 0 0 1-8.5 8.5 8.4 8.4 0 0 1-4.1-1.1L4 20l1.2-4.2a8.4 8.4 0 0 1-1.1-4.1A8.4 8.4 0 1 1 21 11.5z" />
                  <path d="M8.5 8.5c.2-.4.4-.4.7-.4h.5c.2 0 .4.1.5.4l.7 1.6c.1.2.1.4-.1.6l-.5.6c.6 1.1 1.5 2 2.6 2.6l.6-.5c.2-.2.4-.2.6-.1l1.6.7c.3.1.4.3.4.5v.5c0 .3 0 .5-.4.7-.4.2-1.1.4-1.7.2-1-.3-2.3-1-3.5-2.2-1.2-1.2-1.9-2.5-2.2-3.5-.2-.6 0-1.3.2-1.7z" />
                </svg>
              </a>

            </div>
          </div>

          {/* NAVIGARE */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Navigare
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <a
                href="#"
                className="flex items-center gap-2 transition hover:text-yellow-400"
              >
                <ArrowUpRight size={15} />
                Acasă
              </a>

              <a
                href="#pachete"
                className="flex items-center gap-2 transition hover:text-yellow-400"
              >
                <ArrowUpRight size={15} />
                Pachete
              </a>

              <a
                href="#servicii"
                className="flex items-center gap-2 transition hover:text-yellow-400"
              >
                <ArrowUpRight size={15} />
                Servicii
              </a>

              <a
                href="#galerie"
                className="flex items-center gap-2 transition hover:text-yellow-400"
              >
                <ArrowUpRight size={15} />
                Galerie
              </a>

              <a
                href="#contact"
                className="flex items-center gap-2 transition hover:text-yellow-400"
              >
                <ArrowUpRight size={15} />
                Contact
              </a>

            </div>
          </div>

          {/* SERVICII */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Serviciile noastre
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">
              <span>Cabină Foto</span>
              <span>Platformă 360</span>
              <span>Candy Bar</span>
              <span>Mini-Pancakes Bar</span>
              <span>Fântână de ciocolată</span>
              <span>Decoruri premium</span>
            </div>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="mb-6 text-lg font-semibold">
              Contact rapid
            </h3>

            <div className="flex flex-col gap-6 text-gray-400">

              {/* TELEFOANE */}
              <div className="flex items-start gap-4">
                <Phone
                  size={21}
                  className="mt-1 shrink-0 text-yellow-400"
                />

                <div>
                  <p className="mb-1 text-sm text-gray-500">
                    Numere de telefon
                  </p>

                  <a
                    href="tel:0771116479"
                    className="block transition hover:text-yellow-400"
                  >
                    0771 116 479
                  </a>

                  <a
                    href="tel:0733235323"
                    className="block transition hover:text-yellow-400"
                  >
                    0733 235 323
                  </a>
                </div>
              </div>

              {/* INSTAGRAM */}
              <a
                href="https://www.instagram.com/sxaevents/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-4 transition hover:text-yellow-400"
              >
                <div className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center text-yellow-400">
                  <svg
                    width="21"
                    height="21"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect
                      x="2"
                      y="2"
                      width="20"
                      height="20"
                      rx="5"
                      ry="5"
                    />
                    <circle cx="12" cy="12" r="4" />
                    <circle
                      cx="17.5"
                      cy="6.5"
                      r="1"
                      fill="currentColor"
                    />
                  </svg>
                </div>

                <div>
                  <p className="mb-1 text-sm text-gray-500">
                    Instagram
                  </p>

                  <span>@sxaevents</span>
                </div>
              </a>

              {/* EMAIL */}
              <a
                href="mailto:sxaevents@yahoo.com"
                className="flex items-start gap-4 transition hover:text-yellow-400"
              >
                <Mail
                  size={21}
                  className="mt-1 shrink-0 text-yellow-400"
                />

                <div>
                  <p className="mb-1 text-sm text-gray-500">
                    Email
                  </p>

                  <span>sxaevents@yahoo.com</span>
                </div>
              </a>

              {/* LOCAȚIE */}
              <div className="flex items-start gap-4">
                <MapPin
                  size={21}
                  className="mt-1 shrink-0 text-yellow-400"
                />

                <div>
                  <p className="mb-1 text-sm text-gray-500">
                    Zonă
                  </p>

                  <span>București și împrejurimi</span>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-7 md:flex-row">

          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} SXA Events. Toate drepturile rezervate.
          </p>

          <p className="text-sm text-yellow-400">
            SXA Events
          </p>

        </div>
      </div>
    </footer>
  );
}