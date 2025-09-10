"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import MovingBand from "./MovingBand";
import Stadistics from "./Stadistics";

gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  useGSAP(() => {
    gsap.set("#nav-fixed", { autoAlpha: 0, y: -8 });
    gsap.set(".hero-title, .hero-subtitle", { opacity: 0, y: 8 });

    const tl1 = gsap.timeline({
      delay: 0.5,
    });

    tl1
      .to(".hero-title", {
        duration: 0.5,
        ease: "power1.inOut",
        opacity: 1,
        y: 0,
      })
      .to(
        ".hero-subtitle",
        {
          duration: 0.5,
          ease: "power1.inOut",
          opacity: 1,
          y: 0,
        },
        "+=0,3"
      );

    const heroTL = gsap.timeline({
      defaults: { duration: 1, ease: "none" },
      scrollTrigger: {
        trigger: ".hero-section",
        start: "top top",
        end: "+100%",
        scrub: true,
        pin: true,
      },
    });

    heroTL
      .to(".overlay", { opacity: 1 }, 0)
      .to(
        ".hero-content",
        { autoAlpha: 0, y: -20, ease: "power1.out", duration: 0.25 },
        0.1
      )
      .call(showNavOnce, [], 0.8);
  });
  let navShown = false;
  const showNavOnce = () => {
    if (navShown) return;
    navShown = true;
    const nav = document.getElementById("nav-fixed");
    if (nav) nav.style.pointerEvents = "auto"; // vuelve clickeable
    gsap.to("#nav-fixed", {
      autoAlpha: 1,
      y: 0,
      duration: 0.4,
      ease: "power2.out",
    });
  };
  return (
    <>
      <section
        id="hero"
        className="relative hero-section h-screen overflow-hidden m-0"
      >
        <video
          src="/videos/test.mp4"
          className="h-screen w-screen object-cover  z-0"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        <div className="overlay absolute inset-0 bg-black opacity-0 z-10"></div>

        <div className="absolute inset-0 flex flex-col items-center justify-center transform p-12 hero-content text-4xl text-white z-20">
          <div className="hero-title flex flex-col items-center">
            <img src="/images/logo.png" alt="" className="w-[800px] opacity-70 "/>
            <p className="my-10">Quito | Ecuador</p>
            <a
              href="https://wa.me/593978693128?text=¡Hola!%20Estoy%20visitando%20su%20sitio%20web%20y%20deseo%20más%20información"
              target="_blank"
              className="bg-black p-4 rounded-lg border-white border-2 text-lg hover:bg-sky-700 transition duration-[0.5s] max-w-44"
            >
              Agendar cita
            </a>
          </div>
        </div>
      </section>

      <nav
        id="nav-fixed"
        className="fixed top-0 left-0 right-0 z-[70] opacity-0 -translate-y-3 pointer-events-none transition-all duration-300"
        aria-label="Principal"
      >
        <div className="mx-auto max-w-6xl px-4">
          <div className="h-16 flex items-center justify-between rounded-b-2xl border-b border-white/10 bg-black/60 backdrop-blur px-4">
            <ul className="hidden md:flex items-center gap-6 text-sm font-medium text-white">
              <li>
                <a href="#gallery" className="hover:opacity-80">
                  Galeria
                </a>
              </li>
              <li>
                <a href="#artistas" className="hover:opacity-80">
                  Artistas
                </a>
              </li>
            </ul>

            <a href="/" aria-label="Inicio">
              <img
                src="/images/logo-blanco.png"
                alt="La Catedral Tattoo"
                className="h-8 w-auto"
              />
            </a>

            <div className="flex items-center gap-3">
              <a
                href="https://www.instagram.com/lacatedraltattoos/"
                className="hidden md:inline-block text-sm hover:opacity-80 text-white"
                target="_blank"
              >
                <span>
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                  </svg>
                </span>
              </a>
              <a
                href="https://www.instagram.com/lacatedraltattoos/"
                className="hidden md:inline-block text-sm hover:opacity-80 text-white"
                target="_blank"
              >
                <span>
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
                    className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" />
                    <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M16.5 7.5v.01" />
                  </svg>
                </span>
              </a>
              <a
                href="https://wa.me/593978693128?text=¡Hola!%20Estoy%20visitando%20su%20sitio%20web%20y%20deseo%20más%20información"
                className="inline-flex items-center rounded-xl bg-white/90 text-black px-3 py-1.5 text-sm font-semibold hover:bg-white"
                target="_blank"
              >
                Agendar cita
                <span className="ml-2">
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
          </div>
        </div>
      </nav>
      <MovingBand />
      <section className="bg-black text-white grid place-items-center hero-section">
        <div className="max-w-[1200px] mx-auto mt-20">
          
          <p className="text-6xl fade-out text-center mb-10 font-grotesk">
            Bienvenidos
          </p>
          <h1 className="text-center text-4xl mb-20">
            La catedral Tattoo Studio
          </h1>
          <p className="text-center fade-out max-w-[600px] mx-auto">
            Un espacio donde el arte trasciende el lienzo para hacerse eterno en
            la piel. Nuestro estudio nace con la visión de convertir cada
            tatuaje en una experiencia única: un ritual creativo en el que tus
            ideas, emociones y estilo personal se transforman en obras de arte.
          </p>
        </div>
        <Stadistics />
      </section>
    </>
  );
};

export default Hero;
