import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { FiBook, FiBriefcase } from "react-icons/fi";
import Tilt from "react-parallax-tilt";
import { education, experiences } from "../../constants";

const ExperienceEducation = () => {
  const [activeTab, setActiveTab] = useState("experience");

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
    exit: { opacity: 0 },
  };

  const cardVariants = {
    hidden: (index) => ({
      opacity: 0,
      x: index % 2 === 0 ? -50 : 50, // Slide in from sides
      y: 20,
    }),
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 50,
        damping: 15,
      },
    },
  };

  return (
    <section
      id="experience-education"
      className="py-16 px-4 md:px-[7vw] lg:px-[15vw] font-sans relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12 relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white-100 mb-4">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Journey</span>
        </h2>
        <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-4 rounded-full"></div>
        <p className="text-secondary max-w-2xl mx-auto text-lg leading-relaxed">
          A timeline of my professional experience and educational background.
        </p>
      </motion.div>

      {/* Tab Filter */}
      <div className="flex justify-center mb-16 relative z-10">
        <div className="glass-card p-1 rounded-full flex relative bg-white/50 dark:bg-white/5 backdrop-blur-md border border-white/20 dark:border-white/10 shadow-lg">
          <div
            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-300 ease-out shadow-md ${activeTab === "experience" ? "left-1" : "left-[calc(50%+4px)]"
              }`}
          ></div>
          <button
            onClick={() => setActiveTab("experience")}
            className={`relative z-10 px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2 ${activeTab === "experience" ? "text-white" : "text-secondary hover:text-primary"
              }`}
          >
            <FiBriefcase className="text-lg" /> Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`relative z-10 px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2 ${activeTab === "education" ? "text-white" : "text-secondary hover:text-primary"
              }`}
          >
            <FiBook className="text-lg" /> Education
          </button>
        </div>
      </div>

      {/* Timeline Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="relative z-10 max-w-4xl mx-auto"
        >
          {/* Vertical Line */}
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "100%" }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-transparent md:-translate-x-1/2"
          ></motion.div>

          {(activeTab === "experience" ? experiences : education)?.map((item, index) => {
            return (
              <motion.div
                key={`${activeTab}-${item.id}`}
                custom={index}
                variants={cardVariants}
                className={`relative flex items-start mb-12 md:mb-20 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-tertiary shadow-[0_0_10px_rgba(168,85,247,0.5)] transform -translate-x-1/2 md:-translate-x-1/2 mt-6 z-20"></div>

                {/* Content Card */}
                <div className={`w-full md:w-[calc(50%-40px)] pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"
                  }`}>
                  <Tilt
                    tiltMaxAngleX={5}
                    tiltMaxAngleY={5}
                    scale={1.02}
                    transitionSpeed={450}
                    className="bg-white dark:bg-tertiary/30 backdrop-blur-md p-6 rounded-2xl border border-gray-200 dark:border-white/10 shadow-xl hover:shadow-2xl dark:shadow-none transition-all duration-300 group relative overflow-hidden"
                  >
                    {/* Hover Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                    <div className={`relative z-10 flex flex-col ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                      {/* Logo positioned before title */}
                      <div className="flex justify-center md:justify-start mb-4">
                        <div className="w-16 h-16 rounded-xl bg-gray-50 dark:bg-white/5 p-2 border border-gray-100 dark:border-white/10 flex items-center justify-center shadow-sm">
                          <img
                            src={item.img}
                            alt={item.company || item.school}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              e.target.src = "https://via.placeholder.com/64?text=Logo";
                            }}
                          />
                        </div>
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 dark:text-white-100 group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                        {item.role || item.degree}
                      </h3>
                      <h4 className="text-lg text-gray-700 dark:text-white-100 font-medium mt-1">
                        {item.company || item.school}
                      </h4>
                      <span className="inline-block px-3 py-1 mt-2 text-xs font-medium text-purple-600 dark:text-purple-300 bg-purple-100 dark:bg-purple-500/10 rounded-full border border-purple-200 dark:border-purple-500/20">
                        {item.date}
                      </span>

                      <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                        {item.desc}
                      </p>

                      <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                        {item.skills?.map((skill, i) => (
                          <span key={i} className="text-xs text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-white/5 px-2 py-1 rounded border border-gray-200 dark:border-white/5">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Tilt>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ExperienceEducation;