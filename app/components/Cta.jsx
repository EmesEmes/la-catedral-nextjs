import { useTranslations } from "use-intl";

const Cta = ({ title, content, hasButton, img }) => {
  const t = useTranslations("cta1");

  return (
    <section
      className="
        relative grid place-items-center text-center
        px-6 py-16
        min-h-[60svh] md:min-h-[80svh]
        bg-center bg-cover bg-no-repeat
        text-white
      "
      style={{ backgroundImage: `url('${img}')` }}
      role="img"
      aria-label={title}
    >
      {/* Overlay para contraste del texto */}
      <div
        className="absolute inset-0 bg-black/40"
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[800px]">
        <p className="text-4xl">{title}</p>
        <p className="text-2xl my-10">{content}</p>

        {hasButton && (
          <a
            href="https://wa.me/593978693128?text=¡Hola!%20Estoy%20visitando%20su%20sitio%20web%20y%20deseo%20más%20información"
            className="inline-flex items-center rounded-xl bg-white/90 text-black px-3 p-4 text-sm font-semibold hover:bg-white "
            target="_blank"
          >
            {t("button")}
            <span className="ml-2 mx-auto">
              {/* …icono… */}
            </span>
          </a>
        )}
      </div>
    </section>
  );
};

export default Cta;
