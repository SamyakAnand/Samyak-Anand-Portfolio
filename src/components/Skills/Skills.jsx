import React from "react";
import { SkillsInfo } from "../../constants";
import { motion } from "framer-motion";

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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    hover: {
      y: -10,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 300
      }
    }
  };

  const skillVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.15,
      y: -5,
      rotate: 5,
      transition: {
        duration: 0.3,
        type: "spring",
        stiffness: 400
      }
    }
  };

  const categoryVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    },
    hover: {
      x: 10,
      transition: {
        duration: 0.3
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
      className="py-20 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-1/3 right-1/4 w-72 h-72 bg-cyan-500 rounded-full mix-blend-soft-light filter blur-3xl opacity-20 animate-pulse animation-delay-2000"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        ></motion.div>
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
          My <span className="text-[#8245ec]">Skills</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mb-6"></div>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
          Here are the technologies and tools I've mastered in my journey as a Data Scientist and ML Engineer
        </p>
      </motion.div>

      {/* Skill Categories */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
      >
        {updatedSkillsInfo.map((category, index) => (
          <motion.div
            key={category.title}
            variants={categoryVariants}
            whileHover="hover"
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 shadow-xl hover:border-[#8245ec] transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 group relative overflow-hidden"
            whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Glowing border effect */}
            <div className="absolute inset-0 rounded-2xl border border-transparent animate-border-pulse"></div>
            
            <div className="flex items-center justify-center mb-6">
              <h3 className="text-2xl font-bold text-white text-center group-hover:text-purple-400 transition-colors duration-300">
                {category.title}
              </h3>
              <div className="ml-2 w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.div
                  key={skill.name}
                  variants={skillVariants}
                  whileHover="hover"
                  className="flex flex-col items-center justify-center p-3 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700 hover:border-[#8245ec] transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20 relative overflow-hidden"
                  whileInView={{ opacity: 1, scale: 1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.05 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
                  <div className="w-16 h-16 mb-2 flex items-center justify-center relative z-10">
                    <motion.img
                      src={skill.logo}
                      alt={`${skill.name} logo`}
                      className={`w-12 h-12 object-contain filter drop-shadow-lg ${
                        skill.name === "Pandas" || skill.name === "NumPy" 
                          ? "invert brightness-0" 
                          : ""
                      }`}
                      style={{
                        filter: skill.name === "Pandas" || skill.name === "NumPy" 
                          ? "invert(1) brightness(2)" 
                          : "none"
                      }}
                      onError={(e) => {
                        // Fallback for images that fail to load
                        e.target.src = "https://skillicons.dev/icons?i=code&theme=dark";
                      }}
                      whileHover={{ 
                        scale: 1.2,
                        rotate: [0, 10, -10, 0],
                        transition: { duration: 0.5 }
                      }}
                      whileInView={{ opacity: 1, y: 0 }}
                      initial={{ opacity: 0, y: 20 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <motion.span 
                    className="text-xs text-gray-300 text-center relative z-10 leading-tight"
                    whileHover={{ 
                      color: "#a855f7",
                      fontWeight: "500"
                    }}
                    whileInView={{ opacity: 1 }}
                    initial={{ opacity: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.1 }}
                  >
                    {skill.name}
                  </motion.span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Skills Summary */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mt-16 text-center relative z-10"
      >
        <div className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-900/50 to-pink-900/50 border border-purple-700/50 backdrop-blur-sm">
          <div className="w-3 h-3 bg-purple-500 rounded-full mr-3 animate-bounce"></div>
          <p className="text-gray-300 text-lg">
            Continuously learning and expanding my skills to stay at the forefront of technology
          </p>
        </div>
      </motion.div>
    </section>
  );
};

export default Skills;