import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import {
  FiActivity,
  FiBarChart2,
  FiCpu,
  FiExternalLink,
  FiFileText,
  FiGitBranch,
  FiGithub,
  FiSearch,
  FiX,
} from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import { projects } from "../../constants";

const categories = [
  "All",
  "AI Engineering",
  "Machine Learning",
  "Data Science",
  "Data Analytics",
  "Live Projects",
];

const visualStyles = {
  ai: {
    background: "from-violet-950 via-indigo-950 to-slate-950",
    icon: <FiCpu className="w-12 h-12 text-violet-200" />,
    label: "APPLIED AI",
  },
  code: {
    background: "from-slate-950 via-blue-950 to-indigo-950",
    icon: <FiGitBranch className="w-12 h-12 text-cyan-200" />,
    label: "CODE INTELLIGENCE",
  },
  ml: {
    background: "from-emerald-950 via-teal-950 to-slate-950",
    icon: <FiActivity className="w-12 h-12 text-emerald-200" />,
    label: "MACHINE LEARNING",
  },
  analytics: {
    background: "from-amber-950 via-orange-950 to-slate-950",
    icon: <FiBarChart2 className="w-12 h-12 text-amber-200" />,
    label: "DATA ANALYTICS",
  },
  default: {
    background: "from-slate-950 via-purple-950 to-slate-900",
    icon: <FiFileText className="w-12 h-12 text-purple-200" />,
    label: "PROJECT",
  },
};

const ProjectArtwork = ({ project, image, compact = false }) => {
  const visual = visualStyles[project.visual] || visualStyles.default;
  return (
    <div className={`relative w-full overflow-hidden rounded-2xl bg-gradient-to-br ${visual.background} ${compact ? "h-64 md:h-full min-h-[280px]" : "h-[230px]"}`}>
      {image && (
        <img
          src={image}
          alt={project.title}
          className="absolute inset-0 w-full h-full object-contain"
          onError={(event) => {
            event.currentTarget.style.display = "none";
            if (event.currentTarget.nextElementSibling) {
              event.currentTarget.nextElementSibling.style.opacity = "1";
            }
          }}
        />
      )}
      <div className={`absolute inset-0 flex flex-col items-center justify-center text-center p-6 transition-opacity duration-300 ${image ? "opacity-0" : "opacity-100"}`}>
        <div className="absolute inset-5 rounded-2xl border border-white/10" />
        <div className="absolute w-40 h-40 rounded-full border border-white/10 blur-[1px]" />
        <div className="relative z-10 w-20 h-20 rounded-3xl bg-white/10 border border-white/15 backdrop-blur-xl flex items-center justify-center shadow-2xl">
          {visual.icon}
        </div>
        <span className="relative z-10 mt-5 text-[10px] tracking-[0.28em] font-bold text-white/60">
          {project.eyebrow || visual.label}
        </span>
        <h3 className="relative z-10 mt-2 text-xl sm:text-2xl font-black text-white">
          {project.shortTitle || project.title}
        </h3>
        <span className="relative z-10 mt-3 text-[10px] tracking-[0.18em] text-white/45">
          SAM.EXE · PROJECT WORKSPACE
        </span>
      </div>
    </div>
  );
};

const ProjectCard = ({ index, project, image, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 35 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.45, delay: Math.min(index * 0.04, 0.24) }}
    role="button"
    tabIndex={0}
    aria-label={`Open ${project.title} case study`}
    onClick={() => onClick(project)}
    onKeyDown={(event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        onClick(project);
      }
    }}
    className="h-full outline-none"
  >
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      scale={1.015}
      transitionSpeed={450}
      className="h-full bg-tertiary p-4 sm:p-5 rounded-2xl cursor-pointer flex flex-col border border-white/10 dark:border-white/10 border-black/10 backdrop-blur-sm shadow-lg hover:shadow-2xl hover:border-purple-500/40 transition-all"
    >
      <div className="relative">
        <ProjectArtwork project={project} image={image} />
        <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-[9px] font-bold tracking-wider bg-black/60 text-white border border-white/15 backdrop-blur-md">
          {project.status?.toLowerCase().includes("demo") ? "PUBLIC DEMO" : project.status?.toUpperCase() || "PROJECT"}
        </div>
        <div className="absolute top-3 right-3 flex gap-2">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} source code`}
              title="Source code"
              onClick={(event) => event.stopPropagation()}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-black/70 text-white border border-white/15 hover:bg-purple-600 transition-colors"
            >
              <FiGithub size={16} />
            </a>
          )}
          {project.webapp && (
            <a
              href={project.webapp}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title} demo`}
              title="Open public demo"
              onClick={(event) => event.stopPropagation()}
              className="w-9 h-9 rounded-full flex items-center justify-center bg-black/70 text-white border border-white/15 hover:bg-purple-600 transition-colors"
            >
              <FiExternalLink size={16} />
            </a>
          )}
        </div>
      </div>

      <div className="mt-5 flex-grow">
        <h3 className="text-white-100 font-bold text-xl sm:text-2xl leading-tight">{project.title}</h3>
        <p className="mt-3 text-secondary text-sm leading-relaxed line-clamp-3">{project.description}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {(project.tags || []).slice(0, 4).map((tag) => (
          <span key={tag} className="text-[11px] px-2.5 py-1 rounded-full bg-white/5 text-secondary border border-white/10">
            {tag}
          </span>
        ))}
        {project.tags?.length > 4 && (
          <span className="text-[11px] px-2.5 py-1 rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
            +{project.tags.length - 4}
          </span>
        )}
      </div>
      <div className="mt-5 pt-3 border-t border-white/10 flex items-center justify-between text-xs">
        <span className="text-secondary">{project.status || "Project case study"}</span>
        <span className="text-purple-300 font-semibold">Explore details ↗</span>
      </div>
    </Tilt>
  </motion.div>
);

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentImageIndex, setCurrentImageIndex] = useState({});

  const filteredProjects = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    return projects.filter((project) => {
      const matchesCategory = activeCategory === "All" || project.category?.includes(activeCategory);
      const searchable = [
        project.title,
        project.description,
        ...(project.tags || []),
        ...(project.category || []),
      ].join(" ").toLowerCase();
      return matchesCategory && (!query || searchable.includes(query));
    });
  }, [activeCategory, searchQuery]);

  useEffect(() => {
    const intervals = {};
    filteredProjects.forEach((project) => {
      if (project.images && project.images.length > 1) {
        intervals[project.id] = setInterval(() => {
          setCurrentImageIndex((previous) => ({
            ...previous,
            [project.id]: ((previous[project.id] || 0) + 1) % project.images.length,
          }));
        }, 4000);
      }
    });
    return () => Object.values(intervals).forEach(clearInterval);
  }, [filteredProjects]);

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const getCurrentImage = (project) => {
    if (project.images?.length) {
      return project.images[currentImageIndex[project.id] || 0];
    }
    return project.image || "";
  };

  const categoryCount = (category) => category === "All"
    ? projects.length
    : projects.filter((project) => project.category?.includes(category)).length;

  return (
    <section id="work" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <motion.div initial={{ opacity: 0, y: -20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Selected engineering work</p>
        <h2 className="text-white-100 font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Projects.</h2>
        <p className="mt-4 text-secondary text-[16px] sm:text-[17px] max-w-3xl leading-relaxed">
          Explore applied AI, retrieval, machine learning, and business-intelligence projects. Open a case study for implementation details, or jump straight to the source code and public demos.
        </p>
      </motion.div>

      <div className="mt-8 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-md">
          <FiSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-secondary" />
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search projects, skills, or tools..."
            aria-label="Search portfolio projects"
            className="w-full rounded-full bg-tertiary border border-white/10 focus:border-purple-500/60 outline-none py-3 pl-11 pr-4 text-white placeholder:text-secondary/70"
          />
        </div>
        <p className="text-secondary text-sm tabular-nums">
          Showing <span className="text-white font-semibold">{filteredProjects.length}</span> of {projects.length} selected projects
        </p>
      </div>

      <div className="flex flex-wrap gap-2.5 mt-6 mb-9">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold border transition-all ${activeCategory === category
              ? "bg-purple-600 text-white border-purple-400 shadow-lg shadow-purple-900/30"
              : "bg-tertiary text-secondary border-white/10 hover:text-white hover:border-purple-500/50"}`}
          >
            {category} <span className="ml-1 opacity-70">{categoryCount(category)}</span>
          </button>
        ))}
      </div>

      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
          {filteredProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              index={index}
              project={project}
              image={getCurrentImage(project)}
              onClick={setSelectedProject}
            />
          ))}
        </div>
      ) : (
        <div className="rounded-2xl border border-dashed border-white/15 bg-tertiary/40 py-16 px-6 text-center">
          <FiSearch className="mx-auto text-3xl text-secondary mb-3" />
          <p className="text-white font-semibold">No matching projects</p>
          <p className="text-secondary text-sm mt-1">Try another keyword or switch the category filter.</p>
          <button onClick={() => { setSearchQuery(""); setActiveCategory("All"); }} className="mt-4 text-purple-300 font-semibold text-sm">Clear filters</button>
        </div>
      )}

      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 backdrop-blur-md p-3 sm:p-5"
            onClick={() => setSelectedProject(null)}
            role="presentation"
          >
            <motion.div
              initial={{ scale: 0.96, opacity: 0, y: 15 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 15 }}
              transition={{ duration: 0.2 }}
              className="bg-tertiary rounded-2xl max-w-5xl w-full max-h-[92vh] overflow-y-auto relative border border-white/10 shadow-2xl"
              onClick={(event) => event.stopPropagation()}
              role="dialog"
              aria-modal="true"
              aria-label={`${selectedProject.title} project details`}
            >
              <button
                type="button"
                onClick={() => setSelectedProject(null)}
                aria-label="Close project details"
                className="absolute top-3 right-3 z-20 text-white bg-black/60 hover:bg-purple-600 rounded-full p-2 transition-colors"
              >
                <FiX size={20} />
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-4 sm:p-6">
                  <ProjectArtwork project={selectedProject} image={getCurrentImage(selectedProject)} compact />
                  {selectedProject.images?.length > 1 && (
                    <div className="flex gap-2 mt-4 justify-center">
                      {selectedProject.images.map((_, index) => (
                        <button
                          key={index}
                          type="button"
                          aria-label={`Show project image ${index + 1}`}
                          onClick={() => setCurrentImageIndex((previous) => ({ ...previous, [selectedProject.id]: index }))}
                          className={`w-2.5 h-2.5 rounded-full ${index === (currentImageIndex[selectedProject.id] || 0) ? "bg-purple-400" : "bg-white/20"}`}
                        />
                      ))}
                    </div>
                  )}
                </div>

                <div className="p-5 sm:p-8 md:pl-2">
                  <span className="inline-flex px-3 py-1 rounded-full text-[10px] tracking-wider font-bold bg-purple-500/15 text-purple-300 border border-purple-500/20">
                    {selectedProject.status || "PROJECT CASE STUDY"}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black text-white mt-4 mb-4">{selectedProject.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {(selectedProject.tags || []).map((tag) => (
                      <span key={tag} className="text-xs px-3 py-1.5 rounded-full bg-white/5 text-secondary border border-white/10">{tag}</span>
                    ))}
                  </div>
                  <p className="text-secondary text-sm sm:text-base leading-relaxed whitespace-pre-line">{selectedProject.description}</p>
                  <div className="flex flex-wrap gap-3 mt-8">
                    {selectedProject.github && (
                      <a href={selectedProject.github} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-black/50 border border-white/10 text-white hover:border-purple-500/60 transition-colors">
                        <FiGithub /> Source Code
                      </a>
                    )}
                    {selectedProject.webapp && (
                      <a href={selectedProject.webapp} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold hover:opacity-90 transition-opacity">
                        <FiExternalLink /> Open Demo
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
