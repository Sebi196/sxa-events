"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Acasă", href: "#acasa", id: "acasa" },
  { name: "Pachete", href: "#pachete", id: "pachete" },
  { name: "Servicii", href: "#servicii", id: "servicii" },
  { name: "Galerie", href: "#galerie", id: "galerie" },
  { name: "Contact", href: "#contact", id: "contact" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("acasa");
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const scrollPosition = window.scrollY + 220;

      navLinks.forEach((link) => {
        const section = document.getElementById(link.id);

        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;

          if (
            scrollPosition >= top &&
            scrollPosition < top + height
          ) {
            setActiveSection(link.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (id: string) => {
    setMobileOpen(false);

    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <header
      className={`fixed left-0 top-0 z-50 w-full border-b transition-all duration-500 ${
        scrolled
          ? "border-yellow-400/20 bg-black/95 shadow-[0_10px_40px_rgba(0,0,0,0.4)] backdrop-blur-xl"
          : "border-white/10 bg-black/75 backdrop-blur-md"
      }`}
    >
      <nav
        className={`mx-auto flex max-w-[1500px] items-center justify-between px-4 transition-all duration-500 sm:px-6 md:px-12 ${
          scrolled ? "py-3 md:py-4" : "py-4 md:py-6"
        }`}
      >
        {/* LOGO + SXA EVENTS */}
        <button
          onClick={() => handleClick("acasa")}
          className="group flex shrink-0 items-center gap-3 text-left transition-all duration-300 hover:scale-105 sm:gap-4"
        >
          {/* LOGO ROTUND */}
          <div
            className={`relative shrink-0 overflow-hidden rounded-full border-2 border-yellow-400 shadow-[0_0_25px_rgba(250,204,21,0.35)] transition-all duration-500 ${
              scrolled
                ? "h-14 w-14 md:h-16 md:w-16"
                : "h-16 w-16 md:h-20 md:w-20"
            }`}
          >
            <Image
              src="/image/logo-sxa.png"
              alt="SXA Events Logo"
              fill
              priority
              sizes="(max-width: 768px) 64px, 80px"
              className="object-cover"
            />
          </div>

          {/* TEXT */}
          <div className="leading-none">
            <div
              className={`whitespace-nowrap font-semibold tracking-[0.12em] text-white transition-all duration-500 ${
                scrolled
                  ? "text-xl md:text-3xl"
                  : "text-2xl md:text-4xl"
              }`}
            >
              SXA
            </div>

            <div
              className={`whitespace-nowrap font-semibold tracking-[0.3em] text-yellow-400 transition-all duration-500 group-hover:text-pink-400 ${
                scrolled
                  ? "mt-1 text-[10px] md:text-sm"
                  : "mt-1.5 text-xs md:text-base"
              }`}
            >
              EVENTS
            </div>
          </div>
        </button>

        {/* MENIU DESKTOP */}
        <div className="hidden items-center gap-8 xl:flex">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`relative inline-block cursor-pointer text-base font-medium transition-all duration-300 hover:scale-110 ${
                activeSection === link.id
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
            >
              {link.name}

              <span
                className={`absolute -bottom-2 left-0 h-[2px] rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 transition-all duration-300 ${
                  activeSection === link.id
                    ? "w-full"
                    : "w-0"
                }`}
              />
            </button>
          ))}
        </div>

        {/* CONTACT DESKTOP */}
        <button
          onClick={() => handleClick("contact")}
          className="hidden rounded-full border border-yellow-400 px-7 py-3 text-base font-semibold text-yellow-400 transition-all duration-300 hover:scale-105 hover:border-pink-400 hover:bg-gradient-to-r hover:from-yellow-400 hover:to-pink-400 hover:text-black hover:shadow-[0_0_35px_rgba(250,204,21,0.45)] xl:inline-flex"
        >
          Contactează-ne
        </button>

        {/* BUTON MENIU MOBIL / TABLETĂ */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-white/5 text-white transition-all duration-300 hover:scale-105 hover:border-yellow-400 hover:text-yellow-400 xl:hidden"
          aria-label="Deschide meniul"
        >
          {mobileOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* MENIU MOBIL */}
      <div
        className={`overflow-hidden border-t border-white/10 bg-black/95 transition-all duration-500 xl:hidden ${
          mobileOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col px-6 py-6">
          {navLinks.map((link, index) => (
            <button
              key={link.id}
              onClick={() => handleClick(link.id)}
              className={`border-b border-white/10 py-4 text-left text-lg transition-all duration-300 hover:pl-3 ${
                activeSection === link.id
                  ? "text-yellow-400"
                  : "text-gray-300 hover:text-yellow-400"
              }`}
              style={{
                transitionDelay: mobileOpen
                  ? `${index * 50}ms`
                  : "0ms",
              }}
            >
              {link.name}
            </button>
          ))}

          <button
            onClick={() => handleClick("contact")}
            className="mt-6 rounded-full bg-gradient-to-r from-yellow-400 to-pink-400 px-8 py-4 font-semibold text-black transition-all duration-300 hover:scale-105"
          >
            Contactează-ne
          </button>
        </div>
      </div>
    </header>
  );
}