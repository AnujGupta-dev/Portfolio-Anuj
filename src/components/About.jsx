import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const About = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const leftColumnRef = useRef(null);
  const rightColumnRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
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

      gsap.from(leftColumnRef.current, {
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: leftColumnRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(rightColumnRef.current, {
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: rightColumnRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse",
        },
      });

      const skillTags = rightColumnRef.current?.querySelectorAll(".skill-tag");
      if (skillTags) {
        gsap.from(skillTags, {
          scale: 0,
          opacity: 0,
          duration: 0.5,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: rightColumnRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const aboutPoints = [
    "Tech enthusiast with a passion for development.",
    "I prioritize client collaboration, fostering open communication.",
    "I'm very flexible with time zone communications.",
    "Currently building an AI Voice learning app SAAS product.",
  ];

  const skills = {
    frontend: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
    backend: ["Node.js", "Express.js", "MongoDB", "Prisma", "Firebase", "REST APIs"],
    other: [
      "Git",
      "GitHub",
      "AI Integrations",
      "English (Conversational)",
      "Team Collaboration",
      "Problem Solving",
    ],
  };

  return (
    <section ref={sectionRef} id="about" className="py-20 md:py-32 bg-red text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mx-auto max-w-4xl">
          <h2
            ref={titleRef}
            className="mb-16 text-center text-3xl font-semibold tracking-tight md:text-4xl lg:text-5xl"
          >
            About Me
          </h2>

          <div className="grid gap-12 md:grid-cols-2 md:gap-16">
            <div ref={leftColumnRef}>
              <h3 className="mb-6 text-xl font-semibold md:text-2xl lg:text-3xl">
                Who I Am
              </h3>
              <div className="space-y-4">
                {aboutPoints.map((point, index) => (
                  <p key={index} className="text-[1.05rem] leading-relaxed">
                    {point}
                  </p>
                ))}
              </div>
            </div>

            <div ref={rightColumnRef}>
              <h3 className="mb-6 text-xl font-semibold md:text-2xl lg:text-3xl">
                Technical Skills
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="mb-3 text-[1.1rem] font-mono uppercase tracking-wide font-medium">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.frontend.map((skill, index) => (
                      <span
                        key={index}
                        className="skill-tag rounded-full bg-box px-3 py-1 text-sm md:text-[1rem] shadow"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 text-[1.1rem] font-mono uppercase tracking-wide font-medium">
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.backend.map((skill, index) => (
                      <span
                        key={index}
                        className="skill-tag rounded-full bg-box px-3 py-1 text-sm md:text-[1rem] shadow"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="mb-3 text-[1.1rem] font-mono uppercase tracking-wide font-medium">
                    Other
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.other.map((skill, index) => (
                      <span
                        key={index}
                        className="skill-tag rounded-full bg-box px-3 py-1 text-sm md:text-[1rem] shadow"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
