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
        className="absolute top-0 left-0 h-screen w-screen object-cover"
        alt="John Wick"
      />

      <img
        src="/car.png"
        ref={carRef}
        className="absolute bottom-[30%] right-0 z-10 w-[400px] bg-transparent"
        alt="Car"
      />
    </div>
  );
};

export default JohnWick;
