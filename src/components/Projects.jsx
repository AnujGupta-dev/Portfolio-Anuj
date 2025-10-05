"use client";
import { useEffect, useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "../lib/cn";

const Projects = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const projectRefs = useRef([]);

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

      projectRefs.current.forEach((ref, index) => {
        if (ref) {
          const isEven = index % 2 === 0;

          gsap.from(ref, {
            x: isEven ? -100 : 100,
            opacity: 0,
            duration: 1.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: ref,
              start: "top 75%",
              end: "bottom 25%",
              toggleActions: "play none none reverse",
            },
          });

          const image = ref.querySelector(".project-image");
          const content = ref.querySelector(".project-content");

          if (image && content) {
            ref.addEventListener("mouseenter", () => {
              gsap.to(image, { scale: 1.05, duration: 0.3, ease: "power2.out" });
              gsap.to(content, { y: -5, duration: 0.3, ease: "power2.out" });
            });

            ref.addEventListener("mouseleave", () => {
              gsap.to(image, { scale: 1, duration: 0.3, ease: "power2.out" });
              gsap.to(content, { y: 0, duration: 0.3, ease: "power2.out" });
            });
          }
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const projects = [
    {
      id: 1,
      title: "Spendly",
      description:
        "An AI-powered app that helps you track and manage expenses with smart insights and analytics, using intelligent scripts to scan and analyze your spending patterns.",
      image: "/spendly.png",
      technologies: ["Next.js", "Tailwind", "TypeScript", "Prisma ORM", "Supabase", "Clerk"],
      link: "https://wealth-git-main-anujguptas-projects.vercel.app/",
      gitlink: "https://github.com/AnujGupta-dev/Wealth",
    },
    {
      id: 2,
      title: "PrepMate AI",
      description:
        "An AI-powered interview preparation app that generates tailored questions and answers based on job descriptions.",
      image: "/ai-interview.png",
      technologies: ["React.js", "Tailwind", "TypeScript", "Firebase", "Clerk"],
      link: "https://ai-mock-interview-ebba4.web.app/",
      gitlink: "https://github.com/AnujGupta-dev/ai-interview-platform",
    },
    {
      id: 3,
      title: "Ghumkad Travels",
      description: "AI trip planner app that generates complete travel itineraries in seconds.",
      image: "/trip-planner.png",
      technologies: ["React.js", "Tailwind", "JavaScript", "MongoDB", "Node.js"],
      link: "https://ai-travel-planner-two-beta.vercel.app/",
      gitlink: "https://github.com/AnujGupta-dev/AI_Travel_Planner",
    },
  ];

  return (
    <section ref={sectionRef} id="projects" className="py-20 md:py-32 bg-black text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <div>
            <h2
              ref={titleRef}
              className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-center mb-16"
            >
              Projects
            </h2>
          </div>

          <div className="grid gap-8 md:gap-12">
            {projects.map((project, index) => (
              <div
                key={project.id}
                ref={(el) => (projectRefs.current[index] = el)}
                className="rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-300"
              >
                <div
                  className={cn(
                    "grid md:grid-cols-2 gap-0",
                    index % 2 === 1 && "md:grid-flow-col-dense"
                  )}
                >
                  <div
                    className={cn(
                      "project-image aspect-video md:aspect-square flex items-center",
                      index % 2 === 1 && "md:col-start-2"
                    )}
                  >
                    <img src={project.image} alt={project.title} className="w-full h-auto p-3" />
                  </div>

                  <div
                    className={cn(
                      "project-content p-8 md:p-12 flex flex-col justify-center",
                      index % 2 === 1 && "md:col-start-1"
                    )}
                  >
                    <h3 className="text-2xl md:text-3xl font-semibold mb-4 text-box">
                      {project.title}
                    </h3>
                    <p className="mb-6 leading-relaxed text-[1.05rem]">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-box text-white rounded-full font-mono text-sm shadow"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-box text-white rounded-md hover:bg-[#8c5c4a] transition-colors"
                      >
                        <ExternalLink size={16} />
                        Live Demo
                      </a>
                      <a
                        href={project.gitlink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 border border-box text-box rounded-md hover:bg-[#f3ede5] transition-colors"
                      >
                        <Github size={16} />
                        View Code
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
