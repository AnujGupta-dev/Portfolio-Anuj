import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = ({ className }) => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.set(imageRef.current, { scale: 1.1 });

      gsap.to(imageRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      const tl = gsap.timeline({ delay: 0.5 });

      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      }).from(
        subtitleRef.current?.children || [],
        {
          y: 50,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        "-=0.6"
      );

      gsap.to(titleRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut",
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden bg-[#faf9f6]"
    >
      <img
        ref={imageRef}
        src="/bg.png"
        alt="background"
        className="absolute inset-0 w-full min-h-screen object-cover opacity-20 "
      />


      <div className="container mx-auto px-4 md:px-6 py-20 md:py-32 relative z-10 max-w-4xl">
        <div className="max-w-3xl mx-auto text-center">
          <h1
            ref={titleRef}
            className="text-4xl md:text-5xl lg:text-6xl font-['Playfair_Display'] font-semibold tracking-tight text-[#2f2a1e] leading-tight mb-6"
          >
            Anuj Gupta
          </h1>

          <div ref={subtitleRef}>
            <p className="text-xl md:text-2xl text-[#5a5443] mb-4 font-['Spectral'] font-medium">
              Full Stack Web Developer
            </p>
            <p className="text-lg md:text-xl text-[#5a5443] mb-4 font-['Spectral']">
              Transforming concepts into seamless User Experiences
            </p>
            <p className="text-lg md:text-xl text-[#5a5443] mb-8 font-['Spectral']">
              Dynamic Web Magic with Next.js & ....
            </p>
          </div>
        </div>
      </div>
    </section>

  );
};

export default Hero;
