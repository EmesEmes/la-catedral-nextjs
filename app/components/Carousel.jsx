"use client"

import React, { useEffect, useRef, useState, useCallback } from "react";

/**
 * props:
 *  - images: [{ src, alt, artist, style }]
 *  - autoplayMs: number (opcional, default 5000)
 */
export default function Carousel({ images = [], autoplayMs = 5000 }) {
  const carouselRef = useRef(null); // contenedor que scrollea
  const trackRef = useRef(null);    // ul que contiene los li
  const timerRef = useRef(null);

  const [lightbox, setLightbox] = useState({ open: false, src: "", alt: "" });

  const getGapPx = useCallback(() => {
    const track = trackRef.current;
    if (!track) return 0;
    const styles = getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || styles.gap || "0") || 0;
    return gap;
  }, []);

  const getStepPx = useCallback(() => {
    const track = trackRef.current;
    const carousel = carouselRef.current;
    if (!track || !carousel) return 0;
    const first = track.children?.[0];
    if (!first) return carousel.clientWidth;
    const itemW = first.getBoundingClientRect().width;
    return itemW + getGapPx();
  }, [getGapPx]);

  const goToNext = useCallback(() => {
    const carousel = carouselRef.current;
    const track = trackRef.current;
    if (!carousel || !track) return;

    const step = getStepPx();
    const maxScrollLeft = track.scrollWidth - carousel.clientWidth;
    const nextLeft = carousel.scrollLeft + step;

    if (nextLeft >= maxScrollLeft - 2) {
      carousel.scrollTo({ left: 0, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: step, behavior: "smooth" });
    }
  }, [getStepPx]);

  const goToPrev = useCallback(() => {
    const carousel = carouselRef.current;
    const track = trackRef.current;
    if (!carousel || !track) return;

    const step = getStepPx();
    const prevLeft = carousel.scrollLeft - step;

    if (prevLeft <= 0) {
      const end = track.scrollWidth - carousel.clientWidth;
      carousel.scrollTo({ left: end, behavior: "smooth" });
    } else {
      carousel.scrollBy({ left: -step, behavior: "smooth" });
    }
  }, [getStepPx]);

  // autoplay simple
  const startAutoplay = useCallback(() => {
    stopAutoplay();
    timerRef.current = setInterval(goToNext, autoplayMs);
  }, [goToNext, autoplayMs]);

  const stopAutoplay = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = null;
  }, []);

  useEffect(() => {
    startAutoplay();
    const onResize = () => startAutoplay(); // resincroniza step en cambios de tamaño
    window.addEventListener("resize", onResize, { passive: true });
    return () => {
      stopAutoplay();
      window.removeEventListener("resize", onResize);
    };
  }, [startAutoplay, stopAutoplay]);

  // lightbox
  const openLightbox = useCallback((src, alt) => {
    stopAutoplay();
    setLightbox({ open: true, src, alt: alt || "Vista ampliada" });
    document.documentElement.classList.add("overflow-hidden"); // bloquea scroll
  }, [stopAutoplay]);

  const closeLightbox = useCallback(() => {
    setLightbox({ open: false, src: "", alt: "" });
    document.documentElement.classList.remove("overflow-hidden");
    startAutoplay();
  }, [startAutoplay]);

  // cerrar con Escape
  useEffect(() => {
    if (!lightbox.open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeLightbox();
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [lightbox.open, closeLightbox]);

  return (
    <section className="carousel-section z-20 p-10">
      <div className="relative w-full px-4 py-8 my-10">
        <h2 className="text-5xl mb-10 text-center text-white">
          ALGUNOS DE NUESTROS TRABAJOS FAVORITOS
        </h2>

        {/* Carrusel */}
        <div className="w-full ">
          <div
            ref={carouselRef}
            className="w-full overflow-hidden"
            onMouseEnter={stopAutoplay}
            onMouseLeave={startAutoplay}
          >
            <ul ref={trackRef} className="-ml-4 flex gap-4 snap-x snap-mandatory scroll-pl-4 scroll-smooth">
              {images.map((image, index) => (
                <li
                  key={index}
                  className="pl-4 basis-full sm:basis-1/2 lg:basis-1/3 snap-start flex-shrink-0"
                  aria-roledescription="slide"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 hover:scale-105 cursor-zoom-in"
                      loading={index < 3 ? "eager" : "lazy"}
                      decoding="async"
                      onClick={() => openLightbox(image.src, image.alt)}
                    />
                  </div>
                  <p className="text-white mt-4 text-2xl">{image.artist}</p>
                  <p className="text-white/90">{image.style}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Controles */}
        <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex space-x-4">
          <button
            onClick={goToPrev}
            className="p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors duration-200 shadow-md"
            aria-label="Slide anterior"
            type="button"
          >
            {/* chevron left */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"/>
            </svg>
          </button>
          <button
            onClick={goToNext}
            className="p-2 rounded-full bg-white/80 text-gray-800 hover:bg-white transition-colors duration-200 shadow-md"
            aria-label="Slide siguiente"
            type="button"
          >
            {/* chevron right */}
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Lightbox */}
      {lightbox.open && (
        <div
          className="fixed inset-0 z-[100] grid place-items-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox} // click fuera cierra
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/90 text-black hover:bg-white"
            aria-label="Cerrar"
            type="button"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>

          <img
            src={lightbox.src}
            alt={lightbox.alt}
            className="max-h-[85vh] max-w-[90vw] object-contain rounded-xl shadow-2xl"
            onClick={(e) => e.stopPropagation()} // evita cerrar si clicas sobre la imagen
          />
        </div>
      )}
    </section>
  );
}
