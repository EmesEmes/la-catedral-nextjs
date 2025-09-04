"use client";

import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function FirstVideo() {
  const videoRef = useRef(null);

  useGSAP(() => {
    const v = videoRef.current;
    console.log("videoRef inside useGSAP:", v); // 👉 aquí ya no es null

    gsap.set(".first-vd-wrapper", { marginTop: "-50vh", opacity: 0 });

    const tl = gsap.timeline({
      defaults: { ease: "none" },
      scrollTrigger: {
        trigger: ".first-vd-wrapper",
        start: "top top",
        end: "+=200%",        // ✅
        scrub: true,
        pin: true,
        invalidateOnRefresh: true,
        // markers: true,
      },
    });

    // posiciona con el 3er argumento en vez de delay
    tl.to(".carousel-section", { opacity: 0, ease: "power1.inOut" }, 0.5)
      .to(".first-vd-wrapper", { opacity: 1, duration: 0.6, ease: "power1.inOut" }, 0.5);

    if (!v) return;
    v.pause();

    const attach = () => {
      try { v.currentTime = 0; } catch {}
      // anima TODO el video a lo largo del timeline (duración relativa = 1)
      tl.to(v, { currentTime: v.duration, duration: 3, ease: "power1.inOut" }, 0);
      tl.scrollTrigger?.refresh(); // re-mapea el scroll al nuevo TL
    };

    if (v.readyState >= 1 && v.duration) {
      attach();
    } else {
      v.addEventListener("loadedmetadata", attach, { once: true });
      v.addEventListener("loadeddata", attach, { once: true });
      v.addEventListener("canplay", attach, { once: true });
    }
  });

  return (
    <section className="first-vd-wrapper">
      <div className="h-dvh">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="/videos/test3.mov"
          className="first-vd w-full h-full object-cover"
        />
      </div>
    </section>
  );
}
