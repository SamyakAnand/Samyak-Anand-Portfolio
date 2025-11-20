import React, { useState } from "react";
import { experiences, education } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";
import { FiBriefcase, FiBook } from "react-icons/fi";

const ExperienceEducation = () => {
  const [activeTab, setActiveTab] = useState("experience");

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section
      id="experience-education"
      className="py-20 px-4 md:px-[7vw] lg:px-[15vw] font-sans relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
      </div>

      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16 relative z-10"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Journey</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          A timeline of my professional experience and educational background.
        </p>
      </motion.div>

      {/* Tab Filter */}
      <div className="flex justify-center mb-16 relative z-10">
        <div className="glass-card p-1 rounded-full flex relative">
          <div
            className={`absolute top-1 bottom-1 w-[calc(50%-4px)] bg-gradient-to-r from-purple-600 to-pink-600 rounded-full transition-all duration-300 ease-out ${activeTab === "experience" ? "left-1" : "left-[calc(50%+4px)]"
              }`}
          ></div>
          <button
            onClick={() => setActiveTab("experience")}
            className={`relative z-10 px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2 ${activeTab === "experience" ? "text-white" : "text-gray-400 hover:text-white"
              }`}
          >
            <FiBriefcase className="text-lg" /> Experience
          </button>
          <button
            onClick={() => setActiveTab("education")}
            className={`relative z-10 px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300 flex items-center gap-2 ${activeTab === "education" ? "text-white" : "text-gray-400 hover:text-white"
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
          exit={{ opacity: 0, y: 20 }}
          className="relative z-10 max-w-4xl mx-auto"
        >
          {/* Vertical Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500/50 via-pink-500/50 to-transparent md:-translate-x-1/2"></div>

          {(activeTab === "experience" ? experiences : education).map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className={`relative flex items-start mb-12 md:mb-20 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900 shadow-[0_0_10px_rgba(168,85,247,0.5)] transform -translate-x-1/2 md:-translate-x-1/2 mt-6 z-20"></div>

              {/* Content Card */}
              <div className={`w-full md:w-[calc(50%-40px)] pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-10 md:text-right" : "md:pl-10 md:text-left"
                }`}>
                <div className="glass-card p-6 rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10 group">
                  <div className={`flex flex-col ${index % 2 === 0 ? "md:items-end" : "md:items-start"}`}>
                    <div className="w-16 h-16 mb-4 rounded-xl bg-white/5 p-2 border border-white/10 flex items-center justify-center">
                      <img
                        src={item.img}
                        alt={item.company || item.school}
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          e.target.src = "https://via.placeholder.com/64?text=Logo";
                        }}
                      />
                    </div>

                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {item.role || item.degree}
                    </h3>
                    <h4 className="text-lg text-gray-300 font-medium mt-1">
                      {item.company || item.school}
                    </h4>
                    <span className="inline-block px-3 py-1 mt-2 text-xs font-medium text-purple-300 bg-purple-500/10 rounded-full border border-purple-500/20">
                      {item.date}
                    </span>

                    <p className="mt-4 text-gray-400 text-sm leading-relaxed">
                      {item.desc}
                    </p>

                    <div className={`flex flex-wrap gap-2 mt-4 ${index % 2 === 0 ? "md:justify-end" : "md:justify-start"}`}>
                      {item.skills.map((skill, i) => (
                        <span key={i} className="text-xs text-gray-500 bg-white/5 px-2 py-1 rounded border border-white/5">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
};

export default ExperienceEducation;