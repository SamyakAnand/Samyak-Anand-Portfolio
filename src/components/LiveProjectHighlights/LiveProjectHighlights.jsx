import React, { useState, useEffect } from "react";
import { projects } from "../../constants";
import { FiExternalLink, FiChevronLeft, FiChevronRight, FiZap, FiGlobe, FiStar } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

const LiveProjectHighlights = () => {
  const liveProjects = projects.filter(project =>
    project.category.includes("Live Projects")
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % liveProjects.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [liveProjects.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

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
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/20 rounded-full blur-[100px] animate-blob" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-pink-500/20 rounded-full blur-[100px] animate-blob animation-delay-2000" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="max-w-7xl mx-auto relative z-10"
      >
        <div className="text-center mb-16">
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider mb-2">
            Real-world applications
          </p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Live Projects.
          </h2>
        </div>

        <div className="relative h-[600px] md:h-[500px] w-full glass-card rounded-2xl overflow-hidden border border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 flex flex-col md:flex-row"
            >
              {/* Image Section */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full relative group overflow-hidden bg-black-200">
                <motion.img
                  src={liveProjects[currentIndex].image}
                  alt={liveProjects[currentIndex].title}
                  className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  initial={{ scale: 1 }}
                  whileHover={{ scale: 1.05 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-transparent to-transparent opacity-60" />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-6 md:p-12 flex flex-col justify-center relative bg-primary/50 backdrop-blur-sm">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="flex flex-wrap gap-3 mb-6">
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
                      LIVE
                    </span>
                    <span className="px-3 py-1 text-xs font-bold rounded-full bg-tertiary text-secondary border border-white/10">
                      {liveProjects[currentIndex].category.filter(cat => cat !== "Live Projects")[0] || "Web App"}
                    </span>
                  </div>

                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    {liveProjects[currentIndex].title}
                  </h3>

                  <p className="text-secondary text-base leading-relaxed mb-8 line-clamp-3 md:line-clamp-none">
                    {liveProjects[currentIndex].description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {liveProjects[currentIndex].tags.slice(0, 4).map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs md:text-sm px-2 py-1 md:px-3 md:py-1.5 rounded-full bg-gradient-to-r from-purple-600/40 to-pink-600/40 text-white font-medium border border-[#a855f7]/50 backdrop-blur-sm shadow-sm whitespace-nowrap"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    {liveProjects[currentIndex].comingSoon ? (
                      <button className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl bg-gray-700 text-gray-400 cursor-not-allowed text-sm md:text-base">
                        <FiStar /> Coming Soon
                      </button>
                    ) : (
                      <a
                        href={liveProjects[currentIndex].webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm md:text-base"
                      >
                        <FiExternalLink /> Visit Site
                      </a>
                    )}
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-white hover:text-primary transition-all z-20 backdrop-blur-sm"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 text-white hover:bg-white hover:text-primary transition-all z-20 backdrop-blur-sm"
          >
            <FiChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
            {liveProjects.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "w-8 bg-white" : "bg-white/50"
                  }`}
              />
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default LiveProjectHighlights;