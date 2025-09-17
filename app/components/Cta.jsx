const Cta = ({title, content}) => {
  return (
    <div className="flex flex-col items-center bg-[url(/images/tattoos/1.webp)] p-10 object-cover">
      <p className="text-4xl text-center">{title}</p>
      <p className="text-2xl text-center mb-20 max-w-[800px]">
        {content}
      </p>
      <a
        href="https://wa.me/593978693128?text=¡Hola!%20Estoy%20visitando%20su%20sitio%20web%20y%20deseo%20más%20información"
        className="inline-flex items-center rounded-xl bg-white/90 text-black px-3 py-1.5 text-sm font-semibold hover:bg-white"
        target="_blank"
      >
        Agendar cita
        <span className="ml-2 mx-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1}
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-brand-whatsapp"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
            <path d="M9 10a.5 .5 0 0 0 1 0v-1a.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a.5 .5 0 0 0 0 -1h-1a.5 .5 0 0 0 0 1" />
          </svg>
        </span>
      </a>
    </div>
  );
};

export default Cta;
