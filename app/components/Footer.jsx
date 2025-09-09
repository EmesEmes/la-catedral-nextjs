const Footer = () => {
  return (
    <footer className="max-w-[1200px] mx-auto p-6">
      <div className="flex items-center justify-between">
        <img src="/images/logo-blanco.png" alt="La Catedral Tattoo - logotipo" className="w-24" />

        <div className="flex gap-4">
          <a
            href="https://www.instagram.com/lacatedraltattoos/"
            aria-label="Instagram de La Catedral Tattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block text-sm hover:opacity-80 text-white focus:outline-none focus:ring-2 focus:ring-white/60 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={36}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
              <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
              <path d="M16.5 7.5v.01" />
            </svg>
          </a>
          <a
            href="https://www.facebook.com/LaCatedralTattooStudio"
            aria-label="Facebook de La Catedral Tattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block text-sm hover:opacity-80 text-white focus:outline-none focus:ring-2 focus:ring-white/60 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={36}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
            </svg>
          </a>
          <a
            href="https://wa.me/593978693128?text=¡Hola!%20Estoy%20visitando%20su%20sitio%20web%20y%20deseo%20más%20información" // <-- pon tu número con código de país
            aria-label="WhatsApp de La Catedral Tattoo"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block text-sm hover:opacity-80 text-white focus:outline-none focus:ring-2 focus:ring-white/60 rounded"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width={36}
              height={36}
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={1}
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
              focusable="false"
              className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
              <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
            </svg>
          </a>
        </div>
      </div>

      <div className="text-center mt-6">
        <p className="text-white/90">
          Desarrollado por:{" "}
          <a
            href="https://www.linkedin.com/in/emilio-del-hierro-368b66243/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline focus:outline-none focus:ring-2 focus:ring-white/60 rounded"
            aria-label="LinkedIn de Emilio del Hierro (abre en una nueva pestaña)"
          >
            Emilio del Hierro
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
