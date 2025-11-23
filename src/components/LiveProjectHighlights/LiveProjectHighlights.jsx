import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiStar } from "react-icons/fi";
import { projects } from "../../constants";

const LiveProjectHighlights = () => {
  const liveProjects = projects.filter(project =>
    project.category && project.category.includes("Live Projects")
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

  // Function to get current image for a project
  const getCurrentImage = (project) => {
    if (project.images && project.images.length > 0) {
      return project.images[0]; // Use first image if multiple images exist
    }
    return project.image || ''; // Return image or empty string if not defined
  };

  if (liveProjects.length === 0) return null;

  const currentProject = liveProjects[currentIndex];
  const projectImage = getCurrentImage(currentProject);

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
          <h2 className="text-white-100 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Live Projects.
          </h2>
        </div>

        <div className="relative h-[500px] md:h-[400px] w-full bg-tertiary/80 dark:bg-tertiary/30 backdrop-blur-md rounded-2xl overflow-hidden border border-white/30 dark:border-white/30 border-black/30 dark:border-black/30 shadow-xl">
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
                {projectImage && (
                  <motion.img
                    src={projectImage}
                    alt={currentProject.title}
                    className="w-full h-full object-contain transition-transform duration-700 group-hover:scale-110"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.05 }}
                    onError={(e) => {
                      e.target.style.display = 'none';
                    }}
                  />
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black-100 via-transparent to-transparent opacity-60" />
              </div>

              {/* Content Section */}
              <div className="w-full md:w-1/2 h-1/2 md:h-full p-3 md:p-12 flex flex-col justify-center relative bg-primary/70 dark:bg-primary/50 backdrop-blur-sm border-t md:border-t-0 md:border-l border-white/20 dark:border-white/20 border-black/20 dark:border-black/20">
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="flex flex-col h-full"
                >
                  <div className="flex-shrink-0">
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="px-2 py-1 text-[10px] font-bold rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg">
                        LIVE
                      </span>
                      <span className="px-2 py-1 text-[10px] font-bold rounded-full bg-tertiary text-secondary border border-white/10 dark:border-white/10 border-black/10">
                        {currentProject.category && currentProject.category.filter(cat => cat !== "Live Projects")[0] || "Web App"}
                      </span>
                    </div>

                    <h3 className="text-xl md:text-3xl font-bold text-white-100 mb-2 md:mb-3">
                      {currentProject.title}
                    </h3>

                    <p className="text-secondary text-xs md:text-sm leading-relaxed mb-3 md:mb-4 line-clamp-2 md:line-clamp-none">
                      {currentProject.description}
                    </p>
                  </div>

                  <div className="flex-shrink-0 mb-3 md:mb-4">
                    <div className="flex flex-wrap gap-1 md:gap-2 mb-3 md:mb-4">
                      {currentProject.tags && currentProject.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs md:text-sm px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-gradient-to-r from-purple-600/40 to-pink-600/40 text-white font-medium border border-[#a855f7]/50 backdrop-blur-sm shadow-sm whitespace-nowrap"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex-shrink-0 mt-auto pt-2">
                    <div className="flex flex-wrap gap-2 justify-center">
                      {currentProject.comingSoon ? (
                        <button className="flex items-center justify-center gap-1 md:gap-2 px-2 py-1.5 md:px-4 md:py-2.5 rounded-lg bg-gray-700 text-gray-400 cursor-not-allowed text-[10px] md:text-sm font-medium min-w-[80px] md:min-w-[120px] w-full sm:w-auto">
                          <FiStar className="text-[10px] md:text-sm flex-shrink-0" />
                          <span className="truncate">Coming Soon</span>
                        </button>
                      ) : (
                        <a
                          href={currentProject.webapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-1 md:gap-2 px-3 py-2 md:px-4 md:py-2.5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 text-xs md:text-sm min-w-fit w-auto"
                        >
                          <FiExternalLink className="text-xs md:text-sm flex-shrink-0" />
                          <span className="whitespace-nowrap">Visit Site</span>
                        </a>
                      )}
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button
            onClick={goToPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-white-100 text-white hover:text-primary transition-all z-20 backdrop-blur-sm"
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-3 rounded-full bg-black/50 hover:bg-white-100 text-white hover:text-primary transition-all z-20 backdrop-blur-sm"
          >
            <FiChevronRight size={24} />
          </button>

        </div>

        {/* Dots */}
        <div className="flex justify-center mt-6 gap-2">
          {liveProjects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${index === currentIndex ? "w-8 bg-white-100" : "w-2 bg-white-100/50 hover:bg-white-100/80"
                }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default LiveProjectHighlights;