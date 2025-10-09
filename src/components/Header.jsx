import { useState, useEffect } from "react";
import { cn } from "../lib/cn";
import { Menu, X } from "lucide-react";
import ResumeModal from "./ResumeModal";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 80, behavior: "smooth" });
      }
    }
  };

  const navItems = [
    { name: "Home", action: () => scrollToSection("home") },
    { name: "Resume", action: () => setIsResumeModalOpen(true) },
    { name: "About", action: () => scrollToSection("about") },
    { name: "Projects", action: () => scrollToSection("projects") },
    { name: "Contact", action: () => scrollToSection("contact") },
  ];

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 py-5 transition-all duration-300 bg-black border-b-4 border-gray-400 text-white"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
        <a
          href="#home"
          className="text-xl font-medium tracking-tight transition-opacity hover:opacity-80 cursor-pointer"
        >
          Anuj Gupta
        </a>

        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              className="text-sm font-medium transition-colors hover:text-black cursor-pointer"
              onClick={item.action}
            >
              {item.name}
            </button>
          ))}
        </div>

        <button
          className="md:hidden flex w-6 h-5 flex-col justify-between cursor-pointer z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {!isMobileMenuOpen ? <Menu /> : <X className="text-black" />}
        </button>
      </div>

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      <div
        className={cn(
          "fixed inset-0 z-40 flex flex-col pt-24 px-6 bg-white text-black transition-transform duration-500 ease-in-out transform md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className="absolute top-5 right-5 p-2 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="block w-6 h-0.5 bg-white rotate-45 translate-y-0.5" />
          <span className="block w-6 h-0.5 bg-white -rotate-45" />
        </button>

        <nav className="flex flex-col space-y-6 text-lg">
          {navItems.map((item) => (
            <button
              key={item.name}
              className="text-left transition-colors hover:text-red cursor-pointer"
              onClick={() => {
                item.action();
                setIsMobileMenuOpen(false);
              }}
            >
              {item.name}
            </button>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
