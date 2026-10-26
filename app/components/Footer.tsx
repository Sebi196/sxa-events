
export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-zinc-950 px-6 py-8 text-white md:px-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} SXA Events. Toate drepturile rezervate.
        </p>

        <a
          href="#contact"
          className="text-sm text-yellow-400 transition hover:text-yellow-300"
        >
          Cere o ofertă
        </a>
      </div>
    </footer>
  );
}
