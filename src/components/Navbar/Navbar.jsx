import React, { useState, useEffect, useMemo } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");
  const [isScrolled, setIsScrolled] = useState(false);

  const menuItems = useMemo(() => [
    { id: "about",         label: "About" },
    { id: "skills",        label: "Skills" },
    { id: "experience-education", label: "Background" },
    { id: "services",      label: "Services" },
    { id: "work",          label: "Projects" },
    { id: "certification", label: "Certifications" },
    { id: "contact",       label: "Contact" }
  ], []);

  useEffect(() => {
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10);
      for (let item of menuItems) {
        const section = document.getElementById(item.id);
        if (section) {
          const { top, bottom } = section.getBoundingClientRect();
          if (top <= 150 && bottom > 150) {
            setActiveSection(item.id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [menuItems]);

  const handleClick = (id) => {
    setActiveSection(id);
    setIsOpen(false);
    
    // Special handling for Projects link to go to live projects first
    if (id === "work") {
      // First scroll to the live projects section
      const liveProjectsSection = document.getElementById("live-projects");
      if (liveProjectsSection) {
        liveProjectsSection.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }
    
    // Default behavior for other sections
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Mobile Menu Icon Only */}
      <div className="md:hidden fixed top-4 right-4 z-[100]">
        {isOpen ? (
          <FiX className="text-3xl text-[#a855f7] cursor-pointer transition-transform duration-200 hover:rotate-90" onClick={() => setIsOpen(false)} />
        ) : (
          <FiMenu className="text-3xl text-[#a855f7] cursor-pointer transition-transform duration-200 hover:rotate-90" onClick={() => setIsOpen(true)} />
        )}
      </div>

      {/* Desktop Navbar */}
      <nav className={`
        hidden md:block
        fixed top-0 left-0 right-0 z-[100]
        px-4 md:px-[7vw] lg:px-[10vw]
        transition-all duration-300 ease-in-out
        ${isScrolled
          ? "py-2"
          : "py-4"}
      `}>
        <div 
          className={`rounded-full px-6 py-4 md:px-8 ${isScrolled ? '' : ''} w-full bg-[#1a0b2e] bg-opacity-80 backdrop-blur-lg border border-gray-700/50 shadow-xl`}
        >
          <div className="flex justify-between items-center text-white w-full">
            <div className="w-8 h-8" />

            {/* Desktop Menu */}
            <ul className="hidden md:flex space-x-8 text-gray-300 flex-grow justify-center">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`
                    relative cursor-pointer transition-colors duration-300
                    group whitespace-nowrap
                    ${activeSection === item.id
                      ? "text-[#a855f7] aura-glow font-bold"
                      : "hover:text-[#a855f7]"}
                  `}
                >
                  <button onClick={() => handleClick(item.id)}>
                    {item.label}
                  </button>
                  <span className={`
                    absolute bottom-[-4px] left-0 w-0 h-0.5 bg-gradient-to-r from-[#8245ec] to-[#a855f7] 
                    transition-all duration-300 ease-out rounded-full
                    ${activeSection === item.id ? "w-full" : "group-hover:w-full"}
                  `} />
                </li>
              ))}
            </ul>

            {/* Social Icons */}
            <div className="hidden md:flex space-x-4 text-gray-300 ml-auto">
              <a href="https://github.com/SamyakAnand" target="_blank" rel="noopener noreferrer" className="hover:text-[#a855f7] transition-transform duration-300 hover:scale-110">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/samyakanand/" target="_blank" rel="noopener noreferrer" className="hover:text-[#a855f7] transition-transform duration-300 hover:scale-110">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden fixed top-0 left-0 w-full h-full bg-[#050414] bg-opacity-95 backdrop-blur-xl z-[99] flex flex-col">
          <div className="flex justify-end p-4">
            <FiX className="text-3xl text-[#a855f7] cursor-pointer transition-transform duration-200 hover:rotate-90" onClick={() => setIsOpen(false)} />
          </div>
          <div className="flex flex-col items-center justify-center flex-grow">
            <ul className="flex flex-col items-center space-y-6 py-4 text-gray-300">
              {menuItems.map((item) => (
                <li 
                  key={item.id} 
                  className={`
                    cursor-pointer transition-all duration-300 px-6 py-3 rounded-lg text-center text-xl
                    ${activeSection === item.id 
                      ? "text-[#a855f7] aura-glow font-bold" 
                      : "hover:text-white"}
                  `}
                >
                  <button onClick={() => handleClick(item.id)} className="w-full">
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
            <div className="border-t border-gray-700 pt-6 flex justify-center space-x-8 text-gray-300 mt-8">
              <a href="https://github.com/SamyakAnand" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform duration-300 hover:scale-110">
                <FaGithub size={28} />
              </a>
              <a href="https://www.linkedin.com/in/samyakanand/" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-transform duration-300 hover:scale-110">
                <FaLinkedin size={28} />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Extra Styles */}
      <style>{`
        @keyframes navFadeIn {
          0% { opacity: 0; transform: translateY(-100%); }
          100% { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeInDown {
          0% { opacity: 0; transform: translateY(-20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-nav-fade-in {
          animation: navFadeIn 0.7s ease-out forwards;
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.3s ease-out forwards;
        }
        .aura-glow {
          text-shadow:
            0 0 6px rgba(168,85,247,0.7),
            0 0 12px rgba(168,85,247,0.4),
            0 0 20px rgba(130,69,236,0.3);
        }
      `}</style>
    </>
  );
};

export default Navbar;