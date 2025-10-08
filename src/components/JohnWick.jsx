"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const JohnWick = () => {
  const containerRef = useRef(null);
  const carRef = useRef(null);

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (!containerRef.current || !carRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to(carRef.current, {
        left: "-20%",
        y: "50%",
        scale: 1.8,
        scrollTrigger: {
          trigger: containerRef.current,
          start: "50% 50%",
          end: "+=1800",
          scrub: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden"
    >
      <img
        src="/JohnWick.png"
        className="hidden md:block absolute top-0 left-0 w-full h-full object-cover"
        alt="John Wick"
      />

      <img
        src="/JohnWick-mobile2.png"
        className="block md:hidden absolute top-0 left-0 w-full h-full "
        alt="John Wick Mobile"
      />

      <img
        src="/car.png"
        ref={carRef}
        className="absolute bottom-[20%] right-0 z-10 w-[50vw] max-w-[250px] md:max-w-[400px] h-auto"
        alt="Car"
      />
    </div>
  );
};

export default JohnWick;
