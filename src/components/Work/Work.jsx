import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiExternalLink, FiGithub, FiX } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import { projects } from "../../constants";

const categories = [
  "All",
  "Data Science",
  "Data Analysis",
  "Machine Learning",
  "NLP",
  "Deep Learning",
  "Live Projects"
];

const ProjectCard = ({ index, project, onClick }) => {
  // Function to get current image for a project
  const getCurrentImage = (project) => {
    if (project.images && project.images.length > 0) {
      return project.images[0]; // Use first image if multiple images exist
    }
    return project.image || ''; // Return image or empty string if not defined
  };

  const projectImage = getCurrentImage(project);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => onClick(project)}
    >
      <Tilt
        tiltMaxAngleX={10}
        tiltMaxAngleY={10}
        scale={1.02}
        transitionSpeed={450}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full cursor-pointer h-full flex flex-col border border-white/20 dark:border-white/20 border-black/20 dark:bg-tertiary/80 backdrop-blur-sm shadow-lg hover:shadow-xl transition-all"
      >
        <div className="relative w-full h-[230px]">
          {projectImage && (
            <img
              src={projectImage}
              alt={project.title}
              className="w-full h-full object-contain rounded-2xl"
              onError={(e) => {
                e.target.style.display = 'none';
              }}
            />
          )}
          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            {/* Show GitHub button only for non-live projects */}
            {project.github && project.github !== "#" && project.category && !project.category.includes("Live Projects") && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.github, "_blank");
                }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer hover:scale-110 transition-transform"
              >
                <FiGithub className="w-1/2 h-1/2 text-white" />
              </div>
            )}

            {/* Show Live Demo button only for live projects */}
            {project.webapp && project.webapp !== "#" && project.category && project.category.includes("Live Projects") && (
              <div
                onClick={(e) => {
                  e.stopPropagation();
                  window.open(project.webapp, "_blank");
                }}
                className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer ml-2 hover:scale-110 transition-transform"
              >
                <FiExternalLink className="w-1/2 h-1/2 text-white" />
              </div>
            )}
          </div>
        </div>

        <div className="mt-5 flex-grow">
          <h3 className="text-white-100 font-bold text-[24px]">{project.title}</h3>
          <p className="mt-2 text-secondary text-[14px] line-clamp-3">{project.description}</p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {project.tags && project.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-xs md:text-sm px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-gradient-to-r from-purple-600/60 to-pink-600/60 text-white font-medium border border-[#a855f7]/50 backdrop-blur-sm shadow-sm whitespace-nowrap"
            >
              {tag}
            </span>
          ))}
          {project.tags && project.tags.length > 3 && (
            <span className="text-xs md:text-sm px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-tertiary/80 dark:bg-tertiary/30 text-secondary border border-white/20 dark:border-white/20 border-black/20 font-medium whitespace-nowrap backdrop-blur-sm">
              +{project.tags.length - 3}
            </span>
          )}
        </div>
      </Tilt>
    </motion.div>
  );
};

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const filteredProjects = activeCategory === "All"
    ? projects
    : activeCategory === "Live Projects"
      ? projects.filter(project => project.category && project.category.includes("Live Projects"))
      : projects.filter(project => project.category && project.category.includes(activeCategory) && !project.category.includes("Live Projects"));

  // Image rotation logic
  useEffect(() => {
    const intervals = {};
    filteredProjects.forEach(project => {
      if (project.images && project.images.length > 1) {
        intervals[project.id] = setInterval(() => {
          setCurrentImageIndex(prev => ({
            ...prev,
            [project.id]: ((prev[project.id] || 0) + 1) % project.images.length
          }));
        }, 3000);
      }
    });
    return () => Object.values(intervals).forEach(clearInterval);
  }, [filteredProjects]);

  const getCurrentImage = (project) => {
    if (project.images && project.images.length > 0) {
      return project.images[currentImageIndex[project.id] || 0];
    }
    return project.image || '';
  };

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My work</p>
        <h2 className="text-white-100 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
      </motion.div>

      <div className="w-full flex mb-10 mt-5">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          Following projects showcases my skills and experience through real-world examples of my work.
          Each project is briefly described with links to code repositories and live demos in it.
          It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-[14px] font-medium transition-all ${activeCategory === category
              ? "bg-primary text-white-100 border border-white-100"
              : "bg-tertiary text-secondary hover:text-white-100 hover:bg-primary"
              }`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {filteredProjects.map((project, index) => (
          <ProjectCard
            key={project.id}
            index={index}
            project={{ ...project, image: getCurrentImage(project) }}
            onClick={setSelectedProject}
          />
        ))}
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-tertiary p-8 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto relative border border-white/10 dark:border-white/10 border-black/10"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-secondary hover:text-white-100 p-2"
              >
                <FiX size={24} />
              </button>

              <div className="flex flex-col md:flex-row gap-8">
                <div className="w-full md:w-1/2">
                  <img
                    src={getCurrentImage(selectedProject)}
                    alt={selectedProject.title}
                    className="w-full h-auto rounded-xl object-contain"
                  />
                  {selectedProject.images && selectedProject.images.length > 1 && (
                    <div className="flex gap-2 mt-4 justify-center">
                      {selectedProject.images.map((_, idx) => (
                        <div
                          key={idx}
                          className={`w-2 h-2 rounded-full ${idx === (currentImageIndex[selectedProject.id] || 0) ? "bg-white-100" : "bg-white-100/20"
                            }`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="w-full md:w-1/2">
                  <h3 className="text-3xl font-bold text-white-100 mb-4">{selectedProject.title}</h3>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {selectedProject.tags && selectedProject.tags.map((tag) => (
                      <span key={tag} className="text-xs md:text-sm px-2.5 py-1 md:px-3 md:py-1.5 rounded-full bg-gradient-to-r from-purple-600/60 to-pink-600/60 text-white font-medium border border-[#a855f7]/50 backdrop-blur-sm shadow-sm whitespace-nowrap">
                        {tag}
                      </span>
                    ))}
                  </div>

                  <p className="text-secondary text-[16px] leading-[26px] mb-8">
                    {selectedProject.description}
                  </p>

                  <div className="flex gap-4">
                    {selectedProject.github && selectedProject.github !== "#" && selectedProject.category && !selectedProject.category.includes("Live Projects") && (
                      <a
                        href={selectedProject.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-black-200 text-white-100 hover:bg-black-100 transition-colors"
                      >
                        <FiGithub /> GitHub
                      </a>
                    )}
                    {/* Show Live Demo button only for live projects */}
                    {selectedProject.webapp && selectedProject.webapp !== "#" && selectedProject.category && selectedProject.category.includes("Live Projects") && (
                      <a
                        href={selectedProject.webapp}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:opacity-90 transition-opacity"
                      >
                        <FiExternalLink /> Live Demo
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;