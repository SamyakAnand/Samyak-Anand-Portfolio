import React, { useState } from "react";
import { experiences, education } from "../../constants";
import { motion } from "framer-motion";

const ExperienceEducation = () => {
  const [activeTab, setActiveTab] = useState("experience");

  // Animation variants
  const tabVariants = {
    inactive: { 
      backgroundColor: "rgba(255, 255, 255, 0.05)",
      color: "#9CA3AF",
      scale: 1
    },
    active: { 
      backgroundColor: "#8245ec",
      color: "#FFFFFF",
      scale: 1.05,
      boxShadow: "0 0 20px rgba(130, 69, 236, 0.5)"
    }
  };

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.3 } }
  };

  return (
    <section
      id="experience-education"
      className="py-16 px-4 md:px-[7vw] lg:px-[16vw] font-sans"
    >
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 dark:text-white light:text-[var(--text-primary)]">
          My <span className="text-[#8245ec] dark:text-[#8245ec] light:text-[var(--accent-primary)]">Journey</span>
        </h2>
        <div className="w-16 h-1 bg-[#8245ec] mx-auto mb-4 dark:bg-[#8245ec] light:bg-[var(--accent-primary)]"></div>
        <p className="text-gray-400 max-w-xl mx-auto text-base sm:text-lg dark:text-gray-400 light:text-[var(--text-tertiary)]">
          Explore my professional experience and educational background
        </p>
      </motion.div>

      {/* Tab Filter with Enhanced Design */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex justify-center mb-10"
      >
        <div className="relative inline-flex p-1 bg-gray-800/50 backdrop-blur-sm rounded-xl border border-gray-700 shadow-lg w-full max-w-md">
          {/* Animated background for active tab */}
          {activeTab === "experience" ? (
            <motion.div
              className="absolute top-1 left-1 h-[calc(100%-0.5rem)] w-[48%] rounded-lg bg-[#8245ec]"
              layoutId="tabIndicator"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          ) : (
            <motion.div
              className="absolute top-1 right-1 h-[calc(100%-0.5rem)] w-[48%] rounded-lg bg-[#8245ec]"
              layoutId="tabIndicator"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          
          <motion.button
            onClick={() => setActiveTab("experience")}
            className={`relative z-10 px-4 py-3 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-bold transition-all duration-300 w-1/2 ${
              activeTab === "experience" 
                ? "text-white shadow-lg dark:text-white light:text-[var(--text-primary)]" 
                : "text-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-white light:text-[var(--text-tertiary)] light:hover:text-[var(--text-primary)]"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Experience
          </motion.button>
          
          <motion.button
            onClick={() => setActiveTab("education")}
            className={`relative z-10 px-4 py-3 sm:px-6 sm:py-3 rounded-lg text-sm sm:text-base font-bold transition-all duration-300 w-1/2 ${
              activeTab === "education" 
                ? "text-white shadow-lg dark:text-white light:text-[var(--text-primary)]" 
                : "text-gray-400 hover:text-white dark:text-gray-400 dark:hover:text-white light:text-[var(--text-tertiary)] light:hover:text-[var(--text-primary)]"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Education
          </motion.button>
        </div>
      </motion.div>

      {/* Content based on active tab with animations */}
      <motion.div
        key={activeTab}
        variants={contentVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="transition-all duration-300"
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {activeTab === "experience" ? (
          // Experience Content - Journey Tree Style
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-4 sm:left-6 top-0 w-1 bg-gradient-to-b from-[#8245ec] via-purple-400 to-[#8245ec] h-full rounded-full"></div>

              {experiences.map((exp, index) => (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex mb-10"
                >
                  {/* Timeline circle */}
                  <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#8245ec] border-4 border-gray-900 flex items-center justify-center z-10 mt-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                  </div>

                  {/* Card - Mobile friendly */}
                  <div className="ml-4 sm:ml-6 w-full">
                    <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md shadow-lg">
                      {/* Top row - stacked on mobile */}
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0">
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0"
                          whileInView={{ opacity: 1, scale: 1 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <img
                            src={exp.img}
                            alt={exp.company}
                            className="w-full h-full object-contain p-2"
                          />
                        </motion.div>
                        <div className="text-center sm:text-left sm:ml-4">
                          <motion.h3 
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-[var(--text-primary)]"
                          >
                            {exp.role}
                          </motion.h3>
                          <motion.h4 
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-base sm:text-lg text-[#8245ec] mt-1 dark:text-[#8245ec] light:text-[var(--accent-primary)]"
                          >
                            {exp.company}
                          </motion.h4>
                          <motion.p 
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm sm:text-base text-gray-400 mt-1 dark:text-gray-400 light:text-[var(--text-tertiary)]"
                          >
                            {exp.date}
                          </motion.p>
                        </div>
                      </div>

                      {/* Description */}
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-4 text-gray-300 text-sm sm:text-base dark:text-gray-300 light:text-[var(--text-secondary)]"
                      >
                        {exp.desc}
                      </motion.p>

                      {/* Skills */}
                      <motion.div 
                        className="mt-4 flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        {exp.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs sm:text-sm rounded-full border border-purple-700/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ) : (
          // Education Content - Journey Tree Style
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <div className="relative">
              {/* Timeline */}
              <div className="absolute left-4 sm:left-6 top-0 w-1 bg-gradient-to-b from-[#8245ec] via-purple-400 to-[#8245ec] h-full rounded-full"></div>

              {education.map((edu, index) => (
                <motion.div
                  key={edu.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                  className="flex mb-10"
                >
                  {/* Timeline circle */}
                  <div className="flex-shrink-0 w-8 h-8 sm:w-12 sm:h-12 rounded-full bg-[#8245ec] border-4 border-gray-900 flex items-center justify-center z-10 mt-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full"></div>
                  </div>

                  {/* Card - Mobile friendly */}
                  <div className="ml-4 sm:ml-6 w-full">
                    <div className="p-4 sm:p-6 rounded-xl sm:rounded-2xl border border-gray-700 bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-md shadow-lg">
                      {/* Top row - stacked on mobile */}
                      <div className="flex flex-col sm:flex-row sm:items-center space-y-3 sm:space-y-0">
                        <motion.div 
                          whileHover={{ scale: 1.05 }}
                          className="w-16 h-16 sm:w-20 sm:h-20 bg-white rounded-lg sm:rounded-xl overflow-hidden flex-shrink-0"
                          whileInView={{ opacity: 1, scale: 1 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3, delay: 0.1 }}
                        >
                          <img
                            src={edu.img}
                            alt={edu.school}
                            className="w-full h-full object-contain p-2"
                          />
                        </motion.div>
                        <div className="text-center sm:text-left sm:ml-4">
                          <motion.h3 
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-lg sm:text-xl font-bold text-white dark:text-white light:text-[var(--text-primary)]"
                          >
                            {edu.degree}
                          </motion.h3>
                          <motion.h4 
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-base sm:text-lg text-[#8245ec] mt-1 dark:text-[#8245ec] light:text-[var(--accent-primary)]"
                          >
                            {edu.school}
                          </motion.h4>
                          <motion.p 
                            initial={{ x: -10, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            whileInView={{ x: 0, opacity: 1 }}
                            viewport={{ once: true }}
                            className="text-sm sm:text-base text-gray-400 mt-1 dark:text-gray-400 light:text-[var(--text-tertiary)]"
                          >
                            {edu.date}
                          </motion.p>
                        </div>
                      </div>

                      {/* Description */}
                      <motion.p 
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.5 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        className="mt-4 text-gray-300 text-sm sm:text-base dark:text-gray-300 light:text-[var(--text-secondary)]"
                      >
                        {edu.desc}
                      </motion.p>

                      {/* Skills */}
                      <motion.div 
                        className="mt-4 flex flex-wrap gap-2"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                      >
                        {edu.skills.map((skill, skillIndex) => (
                          <span 
                            key={skillIndex}
                            className="px-3 py-1 bg-purple-900/50 text-purple-300 text-xs sm:text-sm rounded-full border border-purple-700/50"
                          >
                            {skill}
                          </span>
                        ))}
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default ExperienceEducation;