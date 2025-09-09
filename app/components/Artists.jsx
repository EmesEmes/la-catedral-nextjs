"use client";

import { useEffect, useState, useCallback } from "react";
import SectionTitle from "./SectionTitle";

// === Datos de ejemplo (ajusta rutas y artistas) ===
const ARTISTS = [
  {
    slug: "marlon",
    name: "Marlon",
    cover: "/images/artist/marlon/marlon2.webp",
    hover: "/images/artist/marlon/marlon1.webp",
    works: [
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 1 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 1 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 2 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 3 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 4 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 4 - Marlon" },
    ],
  },
  {
    slug: "kb",
    name: "KB",
    cover: "/images/artist/marlon/marlon2.webp",
    hover: "/images/artist/marlon/marlon1.webp",
    works: [
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 1 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 2 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 3 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 4 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 5 - Marlon" },
    ],
  },
  {
    slug: "sebas",
    name: "Sebas",
    cover: "/images/artist/marlon/marlon2.webp",
    hover: "/images/artist/marlon/marlon1.webp",
    works: [
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 1 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 2 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 3 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 4 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 5 - Marlon" },
    ],
  },
  {
    slug: "kami",
    name: "Kamila",
    cover: "/images/artist/marlon/marlon2.webp",
    hover: "/images/artist/marlon/marlon1.webp",
    works: [
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 1 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 2 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 3 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 4 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 5 - Marlon" },
    ],
  },
  {
    slug: "kimbi",
    name: "Kinbi",
    cover: "/images/artist/marlon/marlon2.webp",
    hover: "/images/artist/marlon/marlon1.webp",
    works: [
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 1 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 2 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 3 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 4 - Marlon" },
      { src: "/images/tattoos/1.webp", alt: "Tatuaje 5 - Marlon" },
    ],
  },
];

export default function Artists() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const openModal = useCallback((artist) => {
    setSelected(artist);
    setOpen(true);
    document.documentElement.classList.add("overflow-hidden");
  }, []);

  const closeModal = useCallback(() => {
    setOpen(false);
    setSelected(null);
    document.documentElement.classList.remove("overflow-hidden");
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && closeModal();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, closeModal]);

  return (
    <section className="relative">
      <SectionTitle
        title="Artistas de La Catedral"
        subtitle="Talento, pasión y estilo plasmados en cada tatuaje."
      />

      {/* GRID de artistas */}
      <div className="grid p-6 gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {ARTISTS.map((artist) => (
          <button
            key={artist.slug}
            type="button"
            onClick={() => openModal(artist)}
            className="group relative w-full aspect-[3/4] overflow-hidden rounded-lg outline-none ring-0 focus-visible:ring-2 focus-visible:ring-white/60"
            aria-label={`Ver trabajos de ${artist.name}`}
          >
            {/* Fondo con hover swap */}
            <div
              className="absolute inset-0 bg-center bg-cover transition-transform duration-300 group-hover:scale-105"
              style={{ backgroundImage: `url(${artist.cover})` }}
            />
            <div
              className="absolute inset-0 bg-center bg-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{ backgroundImage: `url(${artist.hover})` }}
            />

            {/* Nombre */}
            <h2 className="absolute left-1/2 bottom-6 -translate-x-1/2 text-white text-3xl sm:text-4xl lg:text-5xl font-black drop-shadow-md">
              {artist.name}
            </h2>

            {/* Overlay sutil para legibilidad */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </button>
        ))}
      </div>

      {/* MODAL sin scroll interno y con imágenes de misma altura */}
      {open && selected && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-sm grid place-items-center p-4"
          role="dialog"
          aria-modal="true"
          aria-label={`Trabajos de ${selected.name}`}
          onClick={closeModal}
        >
          {/* Panel: 90vh total */}
          <div
            className="relative w-full max-w-6xl h-[90vh] rounded-xl bg-black/40 overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header (no sticky) */}
            <div className="flex items-center justify-between px-4 sm:px-6 py-4">
              <div>
                <h3 className="text-white text-2xl sm:text-3xl font-bold">
                  {selected.name}
                </h3>
                <p className="text-white/70">Trabajos destacados</p>
              </div>
              <button
                onClick={closeModal}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black hover:bg-white transition"
                aria-label="Cerrar"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* 
              Contenedor del grid:
              - Altura EXACTA disponible: 90vh menos header (~96px) y paddings.
              - Sin overflow: NO hay scroll interno.
              - Definimos filas fijas para que cada celda tenga la MISMA altura.
                - En mobile: 2 columnas x 3 filas (hasta 6 imágenes) -> misma altura.
                - En ≥sm:     3 columnas x 2 filas (hasta 6 imágenes) -> misma altura.
                - Puedes ajustar cols/rows según cuántas imágenes quieras mostrar por vista.
            */}
            <div className="px-4 sm:px-6 pb-6 h-[calc(90vh-96px)]">
              <ul
                className="
                  grid gap-4 h-full
                  grid-cols-2 grid-rows-3
                  sm:grid-cols-3 sm:grid-rows-2
                "
              >
                {selected.works.slice(0, 6).map((w, i) => (
                  <li key={i} className="relative">
                    {/* Cada celda ocupa toda la altura de su fila -> todas iguales */}
                    <div className="relative h-full w-full overflow-hidden rounded-xl">
                      <img
                        src={w.src}
                        alt={w.alt}
                        className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
                        loading={i < 3 ? "eager" : "lazy"}
                        decoding="async"
                      />
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* 
              Nota:
              - `slice(0, 6)` asegura que no excedas el layout (2x3 / 3x2) sin scroll.
              - Si quieres mostrar 5 exactas, igual se verán uniformes ocupando las mismas celdas.
              - Para mostrar más sin scroll, puedes pasar a:
                lg:grid-cols-4 lg:grid-rows-2 (8 imágenes),
                o reducir padding/gap.
            */}
          </div>
        </div>
      )}
    </section>
  );
}
