import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Approach = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const phaseRefs = useRef([]);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Phases animation
      phaseRefs.current.forEach((ref, index) => {
        if (ref) {
          const circle = ref.querySelector(".phase-circle");
          const content = ref.querySelector(".phase-content");

          gsap.from(circle, {
            scale: 0,
            opacity: 0,
            duration: 0.8,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: ref,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse",
            },
          });

          gsap.from(content, {
            x: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2,
            scrollTrigger: {
              trigger: ref,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse",
            },
          });

          gsap.to(circle, {
            scale: 1.1,
            duration: 2,
            repeat: -1,
            yoyo: true,
            ease: "power2.inOut",
            delay: index * 0.3,
          });
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const phases = [
    {
      phase: "Phase 1",
      title: "Planning & Strategy",
      description:
        "We'll collaborate to map out your website's goals, target audience, and key functionalities. We'll discuss things like site structure, navigation, and content requirements.",
    },
    {
      phase: "Phase 2",
      title: "Development & Progress Update",
      description:
        "Once we agree on the plan, I cue my lofi playlist and dive into coding. From initial sketches to polished code, I keep you updated every step of the way.",
    },
    {
      phase: "Phase 3",
      title: "Development & Launch",
      description:
        "This is where the magic happens! Based on the approved design, I'll translate everything into functional code, building your website from the ground up.",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 md:py-32 bg-[#faf9f6]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] font-semibold tracking-tight text-center text-[#2f2a1e] mb-16"
          >
            My Approach
          </h2>

          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                ref={(el) => (phaseRefs.current[index] = el)}
                className="flex flex-col md:flex-row gap-6 md:gap-8"
              >
                <div className="flex-shrink-0">
                  <div className="phase-circle w-16 h-16 md:w-20 md:h-20 bg-[#d4a373] text-white rounded-full flex items-center justify-center shadow-lg">
                    <span className="text-lg md:text-xl font-bold font-mono">
                      {index + 1}
                    </span>
                  </div>
                </div>

                <div className="phase-content flex-1">
                  <div className="text-sm font-medium text-[#b07d62] mb-2 font-mono uppercase tracking-wide">
                    {phase.phase}
                  </div>
                  <h3 className="text-xl md:text-2xl font-['Playfair_Display'] font-semibold text-[#2f2a1e] mb-4">
                    {phase.title}
                  </h3>
                  <p className="font-['Spectral'] text-[1.05rem] leading-relaxed text-[#5a5443]">
                    {phase.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Approach;
