import { useTranslations } from "use-intl";
import SectionTitle from "./SectionTitle";

export default function StylesFlex() {
  const t = useTranslations('styles')
  const imgs = [
    {src: "/images/tattoos/styles/oriental.webp", name: `${t('oriental')}`},
    {src: "/images/tattoos/styles/realismo.webp", name: `${t('realism')}`},
    {src: "/images/tattoos/styles/neotradi.webp", name: `${t('neotradi')}`},
    {src: "/images/tattoos/styles/anime.webp", name: `${t('anime')}`},
    {src: "/images/tattoos/styles/grey.webp", name: `${t('blackGrey')}`},
    {src: "/images/tattoos/styles/fineline.webp", name: `${t('fineline')}`},
    {src: "/images/tattoos/styles/blackwork.webp", name: `${t('blackWork')}`},
  ];

  return (
    <section className="w-full my-20" id="styles">
      <SectionTitle title="Estilos" subtitle="ALgunos de los estilos" />
      {/* Móvil: fila con scroll horizontal */}
      <div className="flex gap-3 overflow-x-auto lg:hidden snap-x snap-mandatory px-3">
        {imgs.map((src, i) => (
          <div
            key={i}
            className="snap-start shrink-0 w-2/3 xs:w-1/2 sm:w-1/3 aspect-[2/3] bg-center bg-cover rounded-lg"
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
      </div>

      {/* Desktop: 7 columnas a todo ancho */}
      <div className="hidden lg:grid grid-cols-7 w-full px-3">
        {imgs.map((src, i) => (
          <div
            key={i}
            className="h-[80vh] w-auto bg-center bg-cover rounded-lg relative grayscale-100 hover:grayscale-0 transition-all duration-300"
            style={{ backgroundImage: `url(${src.src})` }}
          >
            <p className="absolute bottom-1/2 left-1/2 -translate-x-1/2 rotate-270 text-6xl uppercase">{src.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
