import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Hero = ({ className }) => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { y: 20 },
        { y: -20, repeat: -1, yoyo: true, duration: 1, ease: "power1.inOut" }
      );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-screen items-center overflow-hidden bg-black text-white"
    >
      <div className="relative z-10 mx-auto max-w-4xl container px-4 md:px-6 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1
            ref={titleRef}
            className="mb-6 text-4xl font-semibold tracking-tight leading-tight md:text-5xl lg:text-6xl"
          >
            Anuj Gupta
          </h1>

          <div>
            <p className="mb-4 text-xl font-medium md:text-2xl">
              Full Stack Web Developer
            </p>
            <p className="mb-4 text-lg md:text-xl">
              Transforming concepts into seamless user experiences
            </p>
            <p className="mb-8 text-lg md:text-xl">
              Dynamic Web Magic with Next.js & more
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
