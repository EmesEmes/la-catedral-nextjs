"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

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
          src="/videos/sample.mp4"
          className="h-screen w-screen object-cover saturate-[400%] z-0"
          autoPlay
          muted
          loop
          playsInline
        ></video>

        <div className="overlay absolute inset-0 bg-black opacity-0 z-10"></div>

        <div className="absolute bottom-0 left-0 inset-x-0 flex justify-between p-6 hero-content text-4xl text-white z-20">
          <div className="hero-title">
            <h1 className="font-black leading-none">La Catedral Tattoo</h1>
          </div>
          <div className="hero-subtitle">
            <p className="font-medium">El mejor estudio de Quito</p>
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
                <a href="#servicios" className="hover:opacity-80">
                  Servicios
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
                href="#galeria"
                className="hidden md:inline-block text-sm hover:opacity-80 text-white"
              >
                Galería
              </a>
              <a
                href="#contacto"
                className="inline-flex items-center rounded-xl bg-white/90 text-black px-3 py-1.5 text-sm font-semibold hover:bg-white"
              >
                Agendar cita
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-black text-white grid place-items-center hero-section">
        <div className="max-w-[1200px] mx-auto">
          <img
            src="/images/logo-letras.webp"
            alt="Logo la catedral Tattoo"
            className="fade-out w-full"
            width={240}
            height={240}
          />
          <h1 className="text-3xl fade-out text-center my-10">La Catedral Tattoo</h1>
          <p className="text-center fade-out">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias
            dolores, esse repellendus magnam animi, dignissimos odio similique
            sint labore cupiditate non minus ad sequi recusandae dolore
            asperiores nulla quisquam nihil?
          </p>
        </div>
      </section>
    </>
  );
};

export default Hero;
