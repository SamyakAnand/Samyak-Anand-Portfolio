import React, { useState, useEffect } from "react";
import { projects } from "../../constants";
import { FiExternalLink, FiChevronLeft, FiChevronRight, FiZap, FiGlobe, FiStar, FiCode } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const LiveProjectHighlights = () => {
  // Filter live projects (those with "Live Projects" in their category)
  const liveProjects = projects.filter(project => 
    project.category.includes("Live Projects")
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % liveProjects.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [liveProjects.length]);

  // Handle manual navigation
  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  // Navigation functions
  const goToPrev = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === 0 ? liveProjects.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex(prevIndex => 
      prevIndex === liveProjects.length - 1 ? 0 : prevIndex + 1
    );
  };

  if (liveProjects.length === 0) return null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden" id="live-projects">
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-10"
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div
          className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500 rounded-full filter blur-3xl opacity-10"
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        ></motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center items-center mb-4">
            <FiZap className="text-yellow-400 text-2xl mr-2 animate-pulse" />
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              Live Projects & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Startups</span>
            </h2>
          </div>
          <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Explore my deployed real-world websites and startup ventures
          </p>
        </motion.div>

        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-xl border border-gray-700/70 shadow-2xl hover:shadow-purple-500/20 transition-all duration-500"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          whileHover={{ 
            boxShadow: "0 25px 50px -12px rgba(139, 92, 246, 0.25)",
            y: -10
          }}
        >
          {/* Glowing border effect */}
          <div className="absolute inset-0 rounded-3xl border border-purple-500/30 shadow-[0_0_60px_10px_rgba(139,92,246,0.2)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          
          {/* Navigation Arrows */}
          <motion.button
            onClick={goToPrev}
            className="absolute left-6 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full p-4 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-purple-500/50 hover:scale-110"
            aria-label="Previous slide"
            whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(139, 92, 246, 0.4)" }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <FiChevronLeft size={28} />
          </motion.button>
          
          <motion.button
            onClick={goToNext}
            className="absolute right-6 top-1/2 transform -translate-y-1/2 z-10 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white rounded-full p-4 transition-all duration-300 backdrop-blur-sm shadow-lg hover:shadow-purple-500/50 hover:scale-110"
            aria-label="Next slide"
            whileHover={{ scale: 1.1, boxShadow: "0 10px 20px rgba(139, 92, 246, 0.4)" }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
          >
            <FiChevronRight size={28} />
          </motion.button>

          <div className="relative h-96 md:h-[500px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -150 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 flex flex-col md:flex-row"
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                {/* Image */}
                <motion.div
                  className="w-full md:w-2/5 h-1/2 md:h-full overflow-hidden relative group"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                >
                  <motion.img
                    src={liveProjects[currentIndex].image}
                    alt={liveProjects[currentIndex].title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-105"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent"></div>
                  {/* Glowing border effect */}
                  <div className="absolute inset-0 rounded-lg border-2 border-purple-500/30 shadow-[0_0_30px_5px_rgba(139,92,246,0.3)] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </motion.div>
                
                {/* Content */}
                <motion.div
                  className="w-full md:w-3/5 h-1/2 md:h-full p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-gray-900/95 to-gray-800/95 relative overflow-hidden"
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                >
                  {/* Animated background elements */}
                  <motion.div
                    className="absolute top-0 right-0 w-40 h-40 bg-purple-500 rounded-full filter blur-3xl opacity-20 animate-pulse"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.3, 0.2]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  ></motion.div>
                  <motion.div
                    className="absolute bottom-0 left-0 w-32 h-32 bg-pink-500 rounded-full filter blur-3xl opacity-20 animate-pulse"
                    animate={{
                      scale: [1, 1.3, 1],
                      opacity: [0.2, 0.4, 0.2]
                    }}
                    transition={{
                      duration: 5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1
                    }}
                    style={{ animationDelay: '1s' }}
                  ></motion.div>
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-pulse"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.1, 0.2, 0.1]
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 2
                    }}
                    style={{ animationDelay: '2s' }}
                  ></motion.div>
                  
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                  >
                    <motion.div
                      className="mb-6 flex flex-wrap gap-3"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: 0.3 }}
                    >
                      <span className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
                        <FiGlobe className="mr-2" /> {liveProjects[currentIndex].category.filter(cat => cat !== "Live Projects")[0] || "Website"}
                      </span>
                      {/* Show Coming Soon badge for projects that are not yet live */}
                      {liveProjects[currentIndex].comingSoon && (
                        <motion.span
                          className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-full bg-red-500 text-white animate-pulse shadow-lg"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.4 }}
                        >
                          <FiZap className="mr-2" /> Coming Soon
                        </motion.span>
                      )}
                    </motion.div>
                    
                    <motion.h3 
                      className="text-2xl md:text-3xl font-bold text-white mb-4"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 }}
                    >
                      {liveProjects[currentIndex].title}
                    </motion.h3>
                    
                    <motion.p 
                      className="text-gray-300 mb-6 text-base leading-relaxed"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 }}
                    >
                      {liveProjects[currentIndex].description}
                    </motion.p>
                    
                    <motion.div 
                      className="flex flex-wrap gap-3 mb-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.5 }}
                    >
                      {liveProjects[currentIndex].tags.slice(0, 4).map((tag, index) => (
                        <motion.span
                          key={index}
                          className="px-3 py-1.5 text-sm rounded-lg bg-gray-700/60 text-gray-200 backdrop-blur-sm border border-gray-600/50 hover:bg-purple-600/30 hover:text-white transition-all duration-300"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                          whileHover={{ scale: 1.1, backgroundColor: "rgba(139, 92, 246, 0.3)" }}
                        >
                          {tag}
                        </motion.span>
                      ))}
                    </motion.div>
                    
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.6 }}
                      className="flex flex-wrap gap-4"
                    >
                      {liveProjects[currentIndex].comingSoon ? (
                        <motion.div
                          className="flex items-center justify-center gap-3 w-full md:w-48 px-6 py-3 rounded-xl bg-gray-700 text-gray-400 font-semibold text-base cursor-not-allowed backdrop-blur-sm border border-gray-600/50"
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ duration: 0.3, delay: 0.7 }}
                        >
                          <FiStar size={20} />
                          <span>Coming Soon</span>
                        </motion.div>
                      ) : (
                        <>
                          <motion.a
                            href={liveProjects[currentIndex].webapp}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center justify-center gap-3 w-full md:w-48 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-purple-500/40 backdrop-blur-sm border border-purple-500/30"
                            whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(139, 92, 246, 0.6), 0 10px 15px -5px rgba(139, 92, 246, 0.4)" }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3, delay: 0.7 }}
                          >
                            <FiExternalLink size={20} />
                            <span>View Live</span>
                          </motion.a>
                          {liveProjects[currentIndex].github && liveProjects[currentIndex].github !== "#" && (
                            <motion.a
                              href={liveProjects[currentIndex].github}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center justify-center gap-3 w-full md:w-48 px-6 py-3 rounded-xl bg-gradient-to-r from-gray-700 to-gray-800 hover:from-gray-600 hover:to-gray-700 text-white font-semibold text-base transition-all duration-300 shadow-lg hover:shadow-gray-500/40 backdrop-blur-sm border border-gray-600/30"
                              whileHover={{ scale: 1.05, boxShadow: "0 15px 30px -5px rgba(107, 114, 128, 0.6), 0 10px 15px -5px rgba(107, 114, 128, 0.4)" }}
                              whileTap={{ scale: 0.95 }}
                              initial={{ opacity: 0, scale: 0.9 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ duration: 0.3, delay: 0.8 }}
                            >
                              <FiCode size={20} />
                              <span>Source Code</span>
                            </motion.a>
                          )}
                        </>
                      )}
                    </motion.div>
                  </motion.div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation Dots */}
          <motion.div
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            {liveProjects.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-4 h-4 rounded-full transition-all duration-500 ${
                  index === currentIndex ? "bg-gradient-to-r from-purple-500 to-pink-500 w-8 shadow-lg shadow-purple-500/50" : "bg-gray-600"
                }`}
                aria-label={`Go to slide ${index + 1}`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: 0.9 + index * 0.1 }}
              />
            ))}
          </motion.div>
        </motion.div>
        
        {/* Project Counter */}
        <motion.div 
          className="text-center mt-6 text-gray-400 text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Project <span className="text-purple-400 font-bold">{currentIndex + 1}</span> of <span className="text-purple-400 font-bold">{liveProjects.length}</span>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default LiveProjectHighlights;