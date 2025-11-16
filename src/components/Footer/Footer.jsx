import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaYoutube, FaGithub, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  // Smooth scroll function
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Navigation items list
  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "experience-education", label: "Background" },
    { id: "work", label: "Projects" },
    { id: "certification", label: "Certifications" },
    { id: "contact", label: "Contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-r from-[#0d081f] to-[#1a0b2e] mt-16 border-t border-purple-700/50 backdrop-blur-lg">
      <div className="container mx-auto py-10 px-[7vw] md:px-[7vw] lg:px-[10vw]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Samyak Anand
              </span>
            </h2>
            <p className="text-gray-400 mb-6 max-w-md">
              Data Scientist & ML Engineer crafting intelligent solutions that drive business impact through data-driven insights and cutting-edge AI technologies.
            </p>
            
            {/* Contact Info */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                <FaEnvelope className="text-purple-500 text-sm" />
              </div>
              <a href="mailto:samyak.g.anand@gmail.com" className="text-gray-400 hover:text-purple-500 transition-colors">
                samyak.g.anand@gmail.com
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                <FaLinkedin className="text-purple-500 text-sm" />
              </div>
              <span className="text-gray-400">Hyderabad, Telangana, India</span>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Quick Links</h3>
            <nav className="grid grid-cols-2 gap-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="text-gray-400 hover:text-purple-500 text-sm font-medium transition-colors duration-300 text-left py-2 px-3 rounded-lg hover:bg-white/5"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>

          {/* Social & Newsletter */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-lg font-semibold text-white mb-6">Connect With Me</h3>
            
            {/* Social Icons */}
            <div className="flex flex-wrap gap-4 mb-8">
              {[
                { icon: <FaGithub />, link: "https://github.com/SamyakAnand", label: "GitHub" },
                { icon: <FaLinkedin />, link: "http://www.linkedin.com/in/samyakanand-8aa77020b", label: "LinkedIn" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/samyak_anand17/", label: "Instagram" },
                { icon: <FaFacebook />, link: "https://www.facebook.com/samyak.anand.9", label: "Facebook" },
              ].map((item, index) => (
                <a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-12 h-12 rounded-full bg-gray-800/50 flex items-center justify-center text-gray-400 hover:text-purple-500 transition-all duration-300 hover:bg-purple-500/10 hover:scale-110 border border-gray-700"
                >
                  {item.icon}
                </a>
              ))}
            </div>
            
            {/* CTA */}
            <div className="bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 rounded-2xl border border-purple-500/20">
              <h4 className="text-md font-semibold text-purple-500 mb-2">Let's Work Together</h4>
              <p className="text-gray-400 text-sm mb-4">
                Have a project in mind? Let's discuss how I can help bring your ideas to life.
              </p>
              <button 
                onClick={() => handleScroll("contact")}
                className="w-full relative overflow-hidden rounded-lg px-4 py-2.5 font-medium transition-all duration-300 transform hover:scale-105 group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-lg"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-lg"></div>
                <div className="absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 rounded-lg opacity-0 group-hover:opacity-30 transition-all duration-500 animate-pulse"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-lg animate-ping"></div>
                </div>
                <span className="relative z-10 text-white flex items-center justify-center gap-2">
                  Get In Touch
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </span>
                <div className="absolute inset-0 rounded-lg border border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-500 rounded-lg blur opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/50 my-8"></div>

        {/* Copyright & Legal */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-500 text-sm">
            © {currentYear} Samyak Anand. All rights reserved.
          </p>
          
          <div className="flex gap-6 mt-4 md:mt-0">
            <button className="text-gray-500 hover:text-purple-500 text-sm transition-colors">
              Privacy Policy
            </button>
            <button className="text-gray-500 hover:text-purple-500 text-sm transition-colors">
              Terms of Service
            </button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;