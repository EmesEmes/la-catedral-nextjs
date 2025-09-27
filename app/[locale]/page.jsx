"use client"

import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import Hero from "../components/Hero";
import Map from "../components/Map";
import Footer from "../components/Footer";
import StylesFlex from "../components/StylesFlex";
import Cta from "../components/Cta";
import Piercings from "../components/Piercings";
import Reviews from "../components/Reviews";
import FAQAccordion from "../components/FAQAccordion";
import { useTranslations } from "use-intl";
// import Artists from "../components/Artists";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const images = [
  { src: "/images/piercings/3.webp", alt: "piercings 1"},
  { src: "/images/piercings/2.webp", alt: "piercings 2"},
  { src: "/images/piercings/1.webp", alt: "piercings 3"}
];
const t = useTranslations('cta1')
const t2 = useTranslations('cta2')
  return (
    <>
      <Hero />
      <StylesFlex />
      <Cta title={t('title')} content={t('subtitle')} hasButton={true} img={"/images/estudio.webp"}/>
      <Piercings images={images} />
      {/* <Artists /> */}
      <Reviews />
      <Cta title={t2('title')} content={t2('subtitle')} hasButton={false} img={"/images/estudio2.webp"}/>
      <FAQAccordion />
      <Map />
      <Footer />
    </>
  ); 
}

