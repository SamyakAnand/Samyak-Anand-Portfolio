import React, { useState, useEffect, useRef } from "react";
import { projects } from "../../constants";
import { FiX, FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const categories = [
  "All",
  "Data Science",
  "Data Analysis",
  "Machine Learning",
  "NLP",
  "Deep Learning",
  "Live Projects"
];

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [animate, setAnimate] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState({}); // Track current image index for each project
  const sectionRef = useRef(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) =>
          project.category.includes(activeCategory)
        );

  // Observe section in view to trigger animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Set up automatic image rotation for projects with multiple images
  useEffect(() => {
    const intervals = {};
    
    filteredProjects.forEach(project => {
      if (project.images && project.images.length > 1) {
        intervals[project.id] = setInterval(() => {
          setCurrentImageIndex(prev => ({
            ...prev,
            [project.id]: ((prev[project.id] || 0) + 1) % project.images.length
          }));
        }, 3000); // Change image every 3 seconds
      }
    });
    
    return () => {
      Object.values(intervals).forEach(interval => clearInterval(interval));
    };
  }, [filteredProjects]);

  const handleOpenModal = (project) => setSelectedProject(project);
  const handleCloseModal = () => setSelectedProject(null);

  // Function to get the current image for a project
  const getCurrentImage = (project) => {
    if (project.images && project.images.length > 0) {
      const index = currentImageIndex[project.id] || 0;
      return project.images[index];
    }
    return project.image;
  };

  return (
    <section
      ref={sectionRef}
      id="work"
      className="py-24 pb-24 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans relative"
    >
      {/* Section Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">PROJECTS</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
          A showcase of innovative projects demonstrating my expertise in data science, machine learning, and analytics. 
          Each project solves real-world problems with cutting-edge technologies.
        </p>
      </motion.div>

      {/* Category Filter */}
      <motion.div
        className="flex flex-wrap justify-center gap-3 mb-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 transform hover:scale-105 ${
              activeCategory === category
                ? "bg-gradient-to-r from-purple-600 to-pink-500 text-white shadow-lg shadow-purple-500/30"
                : "bg-gray-800/50 text-gray-300 border border-gray-700 hover:bg-purple-700 hover:text-white hover:shadow-lg hover:shadow-purple-500/20"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {category}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <div className="relative">
        <div className="overflow-y-auto max-h-[700px] custom-scrollbar pr-2">
          <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                onClick={() => handleOpenModal(project)}
                style={{
                  transform: animate
                    ? "translateY(0)"
                    : "translateY(40px)",
                  opacity: animate ? 1 : 0,
                  transition: `all 0.8s ease ${index * 0.1}s`
                }}
                className="border border-gray-700 bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300 group"
                whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3), 0 10px 10px -5px rgba(139, 92, 246, 0.2)" }}
                whileTap={{ scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0 }}
                initial={{ opacity: 0, y: 50 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="relative overflow-hidden">
                  <motion.img
                    src={getCurrentImage(project)}
                    alt={project.title}
                    className="w-full h-48 object-cover rounded-t-2xl transition-transform duration-500 group-hover:scale-110"
                    whileHover={{ scale: 1.05 }}
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-80"></div>
                  {/* Show indicator dots for projects with multiple images */}
                  {project.images && project.images.length > 1 && (
                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                      {project.images.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full ${
                            idx === (currentImageIndex[project.id] || 0)
                              ? "bg-white"
                              : "bg-white/50"
                          }`}
                        ></div>
                      ))}
                    </div>
                  )}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-400 mb-4 text-sm line-clamp-3">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.category.map((cat, i) => (
                      <motion.span
                        key={`cat-${cat}-${i}`}
                        className="inline-block bg-purple-900/50 text-xs font-semibold text-purple-300 rounded-full px-3 py-1"
                        whileHover={{ scale: 1.1 }}
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        {cat}
                      </motion.span>
                    ))}
                  </div>
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.tags.slice(0, 4).map((tag, i) => (
                      <motion.span
                        key={`tag-${tag}-${i}`}
                        className="inline-block bg-[#251f38] text-xs text-purple-400 rounded-full px-2 py-1"
                        whileHover={{ scale: 1.1 }}
                        whileInView={{ opacity: 1 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="inline-block bg-[#251f38] text-xs text-purple-400 rounded-full px-2 py-1">
                        +{project.tags.length - 4} more
                      </span>
                    )}
                  </div>
                  <div className="flex justify-between items-center mt-4">
                    <span className="text-purple-400 text-sm font-medium">View Details</span>
                  </div>
                  {/* Show Coming Soon badge for projects that are not yet live */}
                  {project.comingSoon && (
                    <div className="absolute top-4 left-4">
                      <span className="bg-red-500 text-white text-xs font-semibold px-2 py-1 rounded-full">
                        Coming Soon
                      </span>
                    </div>
                  )}

                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4"
          style={{
            animation: "fadeSlideIn 0.5s ease forwards"
          }}
        >
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-700 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-gray-800/50 rounded-full p-2 transition-colors"
            >
              <FiX size={24} />
            </button>
            
            <div className="flex flex-col">
              {/* Top - Image */}
              <div className="w-full">
                <div className="h-64 lg:h-96 relative">
                  {selectedProject.images && selectedProject.images.length > 1 ? (
                    // Swiper for projects with multiple images
                    <div className="relative w-full h-full">
                      {selectedProject.images.map((image, idx) => (
                        <motion.div
                          key={idx}
                          className={`absolute inset-0 transition-opacity duration-500 ${
                            idx === (currentImageIndex[selectedProject.id] || 0)
                              ? "opacity-100"
                              : "opacity-0"
                          }`}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: idx === (currentImageIndex[selectedProject.id] || 0) ? 1 : 0 }}
                          transition={{ duration: 0.5 }}
                        >
                          <img
                            src={image}
                            alt={`${selectedProject.title} ${idx + 1}`}
                            className="w-full h-full object-contain"
                          />
                        </motion.div>
                      ))}
                      {/* Navigation dots */}
                      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                        {selectedProject.images.map((_, idx) => (
                          <button
                            key={idx}
                            onClick={() => setCurrentImageIndex(prev => ({
                              ...prev,
                              [selectedProject.id]: idx
                            }))}
                            className={`w-3 h-3 rounded-full ${
                              idx === (currentImageIndex[selectedProject.id] || 0)
                                ? "bg-white"
                                : "bg-white/50"
                            }`}
                          ></button>
                        ))}
                      </div>
                      {/* Navigation arrows */}
                      <button
                        onClick={() => setCurrentImageIndex(prev => ({
                          ...prev,
                          [selectedProject.id]: ((prev[selectedProject.id] || 0) - 1 + selectedProject.images.length) % selectedProject.images.length
                        }))}
                        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors"
                      >
                        &lt;
                      </button>
                      <button
                        onClick={() => setCurrentImageIndex(prev => ({
                          ...prev,
                          [selectedProject.id]: ((prev[selectedProject.id] || 0) + 1) % selectedProject.images.length
                        }))}
                        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white bg-black/30 rounded-full p-2 hover:bg-black/50 transition-colors"
                      >
                        &gt;
                      </button>
                    </div>
                  ) : (
                    // Single image for projects with one image
                    <motion.img
                      src={selectedProject.image || selectedProject.images[0]}
                      alt={selectedProject.title}
                      className="w-full h-full object-contain"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
                </div>
              </div>
              
              {/* Bottom - Content */}
              <div className="p-6 lg:p-8">
                <div className="mb-6">
                  <motion.h3 
                    className="text-3xl font-bold text-white mb-2"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {selectedProject.title}
                  </motion.h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {selectedProject.category.map((cat, i) => (
                      <motion.span
                        key={`modal-cat-${cat}-${i}`}
                        className="inline-block bg-purple-900/50 text-sm font-semibold text-purple-300 rounded-full px-3 py-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        {cat}
                      </motion.span>
                    ))}
                  </div>
                </div>
                
                <motion.p 
                  className="text-gray-300 mb-6 leading-relaxed"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {selectedProject.description}
                </motion.p>
                
                <motion.div
                  className="mb-8"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.3 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag, i) => (
                      <motion.span
                        key={`modal-tag-${tag}-${i}`}
                        className="inline-block bg-[#251f38] text-sm font-medium text-purple-400 rounded-full px-3 py-1.5"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: 0.4 + i * 0.05 }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div
                  className="flex justify-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  {/* Show Live link if available */}
                  {selectedProject.webapp && selectedProject.webapp !== "#" && (
                    <a 
                      href={selectedProject.webapp} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
                    >
                      <FiExternalLink size={20} />
                      Live Project
                    </a>
                  )}
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Styles */}
      <style>{`
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #8b5cf6 #1f2937;
        }
        .custom-scrollbar::-webkit-scrollbar {
          width: 8px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #1f2937;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background-color: #8b5cf6;
          border-radius: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background-color: #a78bfa;
        }
        @keyframes fadeSlideIn {
          0% { opacity: 0; transform: translateY(40px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Work;