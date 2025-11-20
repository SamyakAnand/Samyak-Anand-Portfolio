import React from "react";
import { FaFacebook, FaLinkedin, FaInstagram, FaGithub, FaEnvelope } from "react-icons/fa";
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
    <footer className="relative mt-20 border-t border-white/10 bg-[#050816] overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute -top-[50%] -left-[20%] w-[800px] h-[800px] bg-purple-600/5 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-[50%] -right-[20%] w-[800px] h-[800px] bg-blue-600/5 rounded-full blur-[120px]"></div>
      </div>

      <div className="container mx-auto py-16 px-[7vw] md:px-[7vw] lg:px-[10vw] relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <motion.div 
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-3xl font-bold text-white mb-6 flex items-center"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <span className="bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
                Samyak Anand
              </span>
            </motion.h2>
            <motion.p 
              className="text-gray-400 mb-8 max-w-md leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              Data Scientist & ML Engineer crafting intelligent solutions that drive business impact through data-driven insights and cutting-edge AI technologies.
            </motion.p>
            
            {/* Contact Info */}
            <div className="space-y-4">
              <motion.div
                className="flex items-center gap-3 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                  <FaEnvelope className="text-gray-400 group-hover:text-purple-500 transition-colors" />
                </div>
                <a href="mailto:samyak.g.anand@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                  samyak.g.anand@gmail.com
                </a>
              </motion.div>
              
              <motion.div
                className="flex items-center gap-3 group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500/20 transition-colors duration-300">
                  <FaLinkedin className="text-gray-400 group-hover:text-purple-500 transition-colors" />
                </div>
                <span className="text-gray-400 group-hover:text-white transition-colors">Hyderabad, Telangana, India</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <motion.div 
            className="md:col-span-1 md:pl-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h3 
              className="text-xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Quick Links
            </motion.h3>
            <nav className="grid grid-cols-1 gap-4">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.id}
                  onClick={() => handleScroll(item.id)}
                  className="text-gray-400 hover:text-purple-500 text-base font-medium transition-all duration-300 text-left flex items-center gap-2 group"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                >
                  <span className="w-2 h-2 rounded-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                  <span className="group-hover:translate-x-1 transition-transform duration-300">{item.label}</span>
                </motion.button>
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
            <motion.h3 
              className="text-xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Connect With Me
            </motion.h3>
            
            {/* Social Icons */}
            <motion.div
              className="flex flex-wrap gap-4 mb-10"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {[
                { icon: <FaGithub />, link: "https://github.com/SamyakAnand", label: "GitHub" },
                { icon: <FaLinkedin />, link: "http://www.linkedin.com/in/samyakanand-8aa77020b", label: "LinkedIn" },
                { icon: <FaInstagram />, link: "https://www.instagram.com/samyak_anand17/", label: "Instagram" },
                { icon: <FaFacebook />, link: "https://www.facebook.com/samyak.anand.9", label: "Facebook" },
              ].map((item, index) => (
                <motion.a
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.label}
                  className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/30 border border-white/5"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.a>
              ))}
            </motion.div>
            
            {/* CTA */}
            <motion.div
              className="glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-pink-600/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <motion.h4 
                className="text-lg font-bold text-white mb-2 relative z-10"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
              >
                Let's Work Together
              </motion.h4>
              <motion.p 
                className="text-gray-400 text-sm mb-6 relative z-10"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
              >
                Have a project in mind? Let's discuss how I can help bring your ideas to life.
              </motion.p>
              <motion.button 
                onClick={() => handleScroll("contact")}
                className="w-full py-3 px-4 rounded-xl font-bold text-white bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40 transition-all duration-300 relative z-10"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Divider */}
        <motion.div
          className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        ></motion.div>

        {/* Copyright & Legal */}
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.p 
            className="text-gray-500 text-sm text-center md:text-left"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
          >
            © {currentYear} Samyak Anand. All rights reserved.
          </motion.p>
          
          <motion.div
            className="flex gap-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.2 }}
          >
            <a href="#" className="text-gray-500 hover:text-purple-500 text-sm transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-purple-500 text-sm transition-colors">
              Terms of Service
            </a>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;