import { motion } from "framer-motion";
import { SkillsInfo } from "../../constants";

const Skills = () => {
  return (
    <section id="skills" className="py-20 relative">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0 pointer-events-none">
        <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[120px] animate-blob" />
        <div className="absolute bottom-[20%] right-[10%] w-[250px] h-[250px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[120px] animate-blob animation-delay-2000" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-12">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <p className="text-secondary text-[18px] uppercase tracking-wider">
            My Technical Proficiency
          </p>
          <h2 className="text-gray-900 dark:text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
            Skills.
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col gap-12">
          {SkillsInfo?.map((category, index) => (
            <div key={index} className="flex flex-col gap-6">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white pl-4 border-l-4 border-purple-500">
                {category.title}
              </h3>
              <div className="flex flex-wrap justify-center gap-4 sm:gap-6 md:gap-8">
                {category.skills?.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="glass-card p-4 rounded-2xl flex flex-col items-center justify-center gap-4 border border-gray-200 dark:border-white/10 hover:border-purple-500/50 transition-all duration-300 group w-32 sm:w-36 md:w-40"
                  >
                    <div className={`flex items-center justify-center transition-colors duration-300 ${skill.logo.includes("shields.io") ? "w-auto h-auto rounded-none bg-transparent" : "w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-gray-100 dark:bg-primary/50 group-hover:bg-purple-500/20"}`}>
                      <img
                        src={skill.logo}
                        alt={skill.name}
                        className={`${skill.logo.includes("shields.io") ? "h-8 w-auto object-contain" : "w-8 h-8 sm:w-10 sm:h-10 object-contain transition-transform duration-300 group-hover:scale-110"}`}
                        loading="lazy"
                      />
                    </div>
                    <p className="text-secondary font-medium text-xs sm:text-sm group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-300 text-center">
                      {skill.name}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center"
        >
          <p className="text-secondary text-lg">
            Always learning and exploring new technologies to solve real-world problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;