"use client"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "./components/Hero";
import Carousel from "./components/Carousel";
import FirstVideo from "./components/FirstVideo";
import Map from "./components/Map";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Styles from "./components/Styles";
import Artists from "./components/Artists";
import MovingBand from "./components/MovingBand";
import StylesFlex from "./components/StylesFlex";
import Cta from "./components/Cta";
import Piercings from "./components/Piercings";
import Reviews from "./components/Reviews";
import FAQAccordion from "./components/FAQAccordion";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const images = [
  { src: "/images/tattoos/1.webp", alt: "tatuaje 1", artist: "Marlon", style: "Neotradicioanl" },
  { src: "/images/tattoos/1.webp", alt: "tatuaje 1", artist: "KB", style: "Oriental" },
  { src: "/images/tattoos/1.webp", alt: "tatuaje 1", artist: "Kamila", style: "Comic" },
  { src: "/images/tattoos/1.webp", alt: "tatuaje 1", artist: "Sebas", style: "Realismo" },
  { src: "/images/tattoos/1.webp", alt: "tatuaje 1", artist: "Martín", style: "Grises" },
];
  return (
    <>
      <Hero />
      <StylesFlex />
      <Cta title="¿Aún no estas seguro de tu estilo?" content="Ponte en contacto con nosotros"/>
      <Carousel images={images} />
      <Artists />
      <Styles />
      <Reviews />
      <Cta title="Nos mantenemos en contacto" content="Nuestros artistas tienn el compromiso de seguir en contacto con nuestros clientes para aseguarnos de una excelente cicatrización"/>
      <FAQAccordion />
      <Map />
      <Footer />
    </>
  ); 
}

