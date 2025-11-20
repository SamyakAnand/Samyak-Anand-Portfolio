import React from "react";
import { SkillsInfo } from "../../constants";
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";

const Skills = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 260,
        damping: 20
      }
    }
  };

  // Updated skill data with new image URLs
  const updatedSkillsInfo = [
    {
      title: "Core Programming",
      skills: [
        { name: "Python", logo: "https://skillicons.dev/icons?i=python&theme=dark" },
        { name: "R", logo: "https://skillicons.dev/icons?i=r&theme=dark" },
        { name: "SQL", logo: "https://img.shields.io/badge/SQL-025E8C?style=for-the-badge&logo=databricks&logoColor=white" },
        { name: "Java", logo: "https://skillicons.dev/icons?i=java&theme=dark" },
        { name: "C", logo: "https://skillicons.dev/icons?i=c&theme=dark" },
        { name: "HTML", logo: "https://skillicons.dev/icons?i=html&theme=dark" },
        { name: "CSS", logo: "https://skillicons.dev/icons?i=css&theme=dark" },
      ],
    },
    {
      title: "Data Science & Analytics",
      skills: [
        { name: "Pandas", logo: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Pandas_logo.svg" },
        { name: "NumPy", logo: "https://upload.wikimedia.org/wikipedia/commons/3/31/NumPy_logo_2020.svg" },
        { name: "Matplotlib", logo: "https://matplotlib.org/stable/_images/sphx_glr_logos2_001.png" },
        { name: "Seaborn", logo: "https://seaborn.pydata.org/_images/logo-mark-lightbg.svg" },
        { name: "Tableau", logo: "https://raw.githubusercontent.com/gilbarbara/logos/master/logos/tableau.svg" },
        { name: "Power BI", logo: "https://raw.githubusercontent.com/microsoft/PowerBI-Icons/main/SVG/Power-BI.svg" },
        { name: "Excel", logo: "https://img.icons8.com/color/512/microsoft-excel-2019.png" },
      ],
    },
    {
      title: "Databases",
      skills: [
        { name: "MySQL", logo: "https://skillicons.dev/icons?i=mysql&theme=dark" },
        { name: "PostgreSQL", logo: "https://skillicons.dev/icons?i=postgres&theme=dark" },
        { name: "MongoDB", logo: "https://skillicons.dev/icons?i=mongodb&theme=dark" },
        { name: "MS SQL Server", logo: "https://www.svgrepo.com/show/303229/microsoft-sql-server-logo.svg" },
      ],
    },
    {
      title: "Machine Learning & AI",
      skills: [
        { name: "Scikit-learn", logo: "https://skillicons.dev/icons?i=sklearn&theme=dark" },
        { name: "TensorFlow", logo: "https://skillicons.dev/icons?i=tensorflow&theme=dark" },
        { name: "PyTorch", logo: "https://skillicons.dev/icons?i=pytorch&theme=dark" },
        { name: "Keras", logo: "https://upload.wikimedia.org/wikipedia/commons/a/ae/Keras_logo.svg" },
        { name: "NLTK", logo: "https://img.shields.io/badge/NLTK-026e00?style=for-the-badge&logo=python&logoColor=white" },
        { name: "spaCy", logo: "https://img.shields.io/badge/spaCy-09A3D5?style=for-the-badge&logo=python&logoColor=white" },
        { name: "Transformers", logo: "https://img.shields.io/badge/Transformers-HuggingFace-FFD21E?style=for-the-badge&logo=huggingface&logoColor=black" },
      ],
    },
    {
      title: "MLOps & Cloud",
      skills: [
        { name: "FastAPI", logo: "https://skillicons.dev/icons?i=fastapi&theme=dark" },
        { name: "Flask", logo: "https://skillicons.dev/icons?i=flask&theme=dark" },
        { name: "Docker", logo: "https://skillicons.dev/icons?i=docker&theme=dark" },
        { name: "Kubernetes", logo: "https://skillicons.dev/icons?i=kubernetes&theme=dark" },
        { name: "MLflow", logo: "https://img.shields.io/badge/MLflow-0194E2?style=for-the-badge&logo=mlflow&logoColor=white" },
        { name: "DVC", logo: "https://cdn.simpleicons.org/dvc/945DD6" },
        { name: "AWS", logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg" },
        { name: "GCP", logo: "https://www.vectorlogo.zone/logos/google_cloud/google_cloud-icon.svg" },
        { name: "Azure", logo: "https://www.vectorlogo.zone/logos/microsoft_azure/microsoft_azure-icon.svg" },
      ],
    },
    {
      title: "Developer Tools",
      skills: [
        { name: "Git", logo: "https://skillicons.dev/icons?i=git&theme=dark" },
        { name: "GitHub", logo: "https://skillicons.dev/icons?i=github&theme=dark" },
        { name: "VS Code", logo: "https://skillicons.dev/icons?i=vscode&theme=dark" },
        { name: "PyCharm", logo: "https://skillicons.dev/icons?i=pycharm&theme=dark" },
        { name: "Jupyter", logo: "https://img.shields.io/badge/Jupyter-F37626?style=for-the-badge&logo=jupyter&logoColor=white" },
        { name: "DAGsHub", logo: "https://img.shields.io/badge/DAGsHub-000000?style=for-the-badge&logo=github&logoColor=white" },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 px-[7vw] md:px-[7vw] lg:px-[15vw] font-sans relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] animate-blob"></div>
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] animate-blob animation-delay-2000"></div>
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
          My <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6 rounded-full"></div>
        <p className="text-gray-300 max-w-2xl mx-auto text-lg leading-relaxed">
          Here are the technologies and tools I've mastered in my journey as a Data Scientist and ML Engineer.
        </p>
      </motion.div>

      {/* Skill Categories */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
      >
        {updatedSkillsInfo.map((category, index) => (
          <Tilt
            key={category.title}
            tiltMaxAngleX={2}
            tiltMaxAngleY={2}
            glareEnable={false}
            scale={1.01}
            transitionSpeed={2500}
            className="h-full"
          >
            <motion.div
              variants={categoryVariants}
              className="glass-card h-full p-8 rounded-3xl border border-white/10 relative overflow-hidden group"
            >
              {/* Hover Gradient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="flex items-center mb-8 relative z-10">
                <div className="w-1 h-8 bg-gradient-to-b from-purple-500 to-pink-500 rounded-full mr-4"></div>
                <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                  {category.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-4 relative z-10">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    variants={skillVariants}
                    whileHover={{
                      scale: 1.1,
                      y: -5,
                      transition: { type: "spring", stiffness: 400, damping: 10 }
                    }}
                    className="flex flex-col items-center gap-2 group/skill"
                  >
                    <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center p-3 shadow-lg backdrop-blur-sm hover:bg-white/10 hover:border-purple-500/30 transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300"></div>
                      <img
                        src={skill.logo}
                        alt={`${skill.name} logo`}
                        className={`w-full h-full object-contain filter drop-shadow-md transition-transform duration-300 ${skill.name === "Pandas" || skill.name === "NumPy"
                            ? "invert brightness-0 group-hover/skill:brightness-200"
                            : ""
                          }`}
                        style={{
                          filter: skill.name === "Pandas" || skill.name === "NumPy"
                            ? "invert(1) brightness(2)"
                            : "none"
                        }}
                        onError={(e) => {
                          e.target.src = "https://skillicons.dev/icons?i=code&theme=dark";
                        }}
                      />
                    </div>
                    <span className="text-xs sm:text-sm text-gray-400 font-medium group-hover/skill:text-white transition-colors duration-300">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </Tilt>
        ))}
      </motion.div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-20 text-center relative z-10"
      >
        <div className="inline-flex items-center justify-center px-8 py-4 rounded-full glass-card border border-purple-500/30">
          <span className="relative flex h-3 w-3 mr-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-purple-500"></span>
          </span>
          <p className="text-gray-300 font-medium">
            Always learning and exploring new technologies
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;