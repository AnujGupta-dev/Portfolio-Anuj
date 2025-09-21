import React, { useEffect, useRef } from "react";
import { Mail, Github, Linkedin } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const contentRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.from(titleRef.current, {
        y: 50,
        opacity: 0,
        duration: 1.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      gsap.from(contentRef.current, {
        y: 30,
        opacity: 0,
        duration: 1,
        ease: "power3.out",
        delay: 0.3,
        scrollTrigger: {
          trigger: contentRef.current,
          start: "top 75%",
          end: "bottom 25%",
          toggleActions: "play none none reverse",
        },
      });

      const buttons = buttonsRef.current?.children;
      if (buttons) {
        gsap.from(buttons, {
          y: 20,
          opacity: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.6,
          scrollTrigger: {
            trigger: buttonsRef.current,
            start: "top 75%",
            end: "bottom 25%",
            toggleActions: "play none none reverse",
          },
        });

        Array.from(buttons).forEach((button) => {
          button.addEventListener("mouseenter", () => {
            gsap.to(button, {
              scale: 1.05,
              duration: 0.2,
              ease: "power2.out",
            });
          });

          button.addEventListener("mouseleave", () => {
            gsap.to(button, {
              scale: 1,
              duration: 0.2,
              ease: "power2.out",
            });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-32 bg-[#faf9f6]">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div>
            <h2
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-5xl font-['Playfair_Display'] font-semibold tracking-tight text-[#2f2a1e] mb-8"
            >
              Let&apos;s Work Together
            </h2>
          </div>

          <div ref={contentRef}>
            <p className="font-['Spectral'] text-xl md:text-2xl text-[#5a5443] mb-4">
              Ready to take your digital presence to the next level?
            </p>
            <p className="font-['Spectral'] text-lg md:text-xl text-[#5a5443] mb-12">
              Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
            </p>
          </div>

          <div ref={buttonsRef}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="mailto:anujguptaaj123@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-3 bg-[#b07d62] text-white rounded-lg hover:bg-[#8c5c4a] transition-colors font-['Spectral']"
              >
                <Mail size={20} />
                Get In Touch
              </a>

              <div className="flex gap-4">
                <a
                  href="https://github.com/AnujGupta-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#b07d62] text-[#b07d62] rounded-lg hover:bg-[#f3ede5] transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anuj-gupta-b930a0264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-[#b07d62] text-[#b07d62] rounded-lg hover:bg-[#f3ede5] transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="text-center">
              <p className="font-mono text-sm text-[#5a5443]">
                © 2025 Anuj Gupta — All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
