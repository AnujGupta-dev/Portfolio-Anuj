import { useEffect, useRef } from "react";
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
            gsap.to(button, { scale: 1.05, duration: 0.2, ease: "power2.out" });
          });
          button.addEventListener("mouseleave", () => {
            gsap.to(button, { scale: 1, duration: 0.2, ease: "power2.out" });
          });
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2
            ref={titleRef}
            className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-8"
          >
            Let&apos;s Work Together
          </h2>

          <div ref={contentRef}>
            <p className="text-xl md:text-2xl mb-4">
              Ready to take your digital presence to the next level?
            </p>
            <p className="text-lg md:text-xl mb-12">
              Reach out to me today and let&apos;s discuss how I can help you achieve your goals.
            </p>
          </div>

          <div ref={buttonsRef}>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
              <a
                href="mailto:anujguptaaj123@gmail.com"
                className="inline-flex items-center gap-3 px-6 py-3 bg-box text-white rounded-lg hover:bg-grey transition-colors"
              >
                <Mail size={20} />
                Get In Touch
              </a>

              <div className="flex gap-4">
                <a
                  href="https://github.com/AnujGupta-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-box text-white rounded-lg hover:bg-grey transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github size={20} />
                </a>
                <a
                  href="https://www.linkedin.com/in/anuj-gupta-b930a0264"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-box text-white rounded-lg hover:bg-grey transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </div>

          <p className="text-sm font-mono text-center">
            © 2025 Anuj Gupta — All Rights Reserved
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
