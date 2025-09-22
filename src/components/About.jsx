import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

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
    "CSS"
  ],
  backend: [
    "Node.js",
    "Express.js",
    "MongoDB",
    "Prisma",
    "Firebase",
    "REST APIs"
  ],
  other: [
    "Git",
    "GitHub",
    "AI Integrations",
    "English (Conversational)",
    "Team Collaboration",
    "Problem Solving"
  ]
};

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 md:py-32 bg-[#faf9f6]"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          <div>
            <h2
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] font-semibold tracking-tight text-center text-[#2f2a1e] mb-16"
            >
              About Me
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 md:gap-16">
            <div ref={leftColumnRef}>
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-['Playfair_Display'] font-semibold mb-6 text-[#b07d62]">
                  Who I Am
                </h3>
                <div className="space-y-4">
                  {aboutPoints.map((point, index) => (
                    <p
                      key={index}
                      className="font-['Spectral'] text-[1.05rem] text-[#5a5443] leading-relaxed"
                    >
                      {point}
                    </p>
                  ))}
                </div>
              </div>
            </div>

            <div ref={rightColumnRef}>
              <div>
                <h3 className="text-xl md:text-2xl lg:text-3xl font-['Playfair_Display'] font-semibold mb-6 text-[#b07d62]">
                  Technical Skills
                </h3>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-mono uppercase tracking-wide font-medium mb-3 text-[#2f2a1e] text-[1.1rem]">
                      Frontend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.frontend.map((skill, index) => (
                        <span
                          key={index}
                          className="skill-tag px-3 py-1 bg-[#d4a373] text-white rounded-full text-sm md:text-[1rem] shadow"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-mono uppercase tracking-wide font-medium mb-3 text-[#2f2a1e] text-[1.1rem]">
                      Backend
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.backend.map((skill, index) => (
                        <span
                          key={index}
                          className="skill-tag px-3 py-1 bg-[#d4a373] text-white rounded-full text-sm md:text-[1rem] shadow"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-mono uppercase tracking-wide font-medium mb-3 text-[#2f2a1e] text-[1.1rem]">
                      Other
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {skills.other.map((skill, index) => (
                        <span
                          key={index}
                          className="skill-tag px-3 py-1 bg-[#d4a373] text-white rounded-full text-sm md:text-[1rem] shadow"
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
      </div>
    </section>
  );
};

export default About;
