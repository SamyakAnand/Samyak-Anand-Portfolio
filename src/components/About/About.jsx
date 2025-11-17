import React, { useState, useEffect } from 'react';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';

const About = () => {
  // Profile image paths - using only the two specified images from public directory
  const profileImages = [
    '/images/profile1.png',
    '/images/profile2.png',
  ];
  
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Auto-slide effect for profile images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [profileImages.length]);

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32"
    >
      <div className="flex flex-col-reverse md:flex-row justify-between items-center">
        {/* Left Side */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Greeting */}
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            Hi, I am
          </motion.h1>
          {/* Name */}
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            Samyak Anand
          </motion.h2>
          
          {/* Skills Heading with Typing Effect */}
          <motion.h3 
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={['Data Scientist', 'Data Analyst', 'ML Engineer', 'Developer']}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
            />
          </motion.h3>
          
          {/* About Me Paragraph */}
          <motion.p 
            className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
          Certified Data Scientist & ML Engineer skilled in data analysis, predictive modeling, and MLOps. Expertise in Python, SQL, machine learning, and cloud deployment. Experienced in data preprocessing, statistical analysis, and feature engineering for AI solutions. Developed end-to-end ML pipelines using MLFlow, Docker, and FastAPI to drive business impact.
          </motion.p>
          
          {/* Resume Button */}
          <motion.a
            href={import.meta.env.VITE_RESUME_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            whileHover={{ scale: 1.05, boxShadow: "0 0 30px #8245ec" }}
            whileTap={{ scale: 0.95 }}
          >
            DOWNLOAD CV
          </motion.a>
          
        </motion.div>
        
        {/* Right Side - Profile Image Slider */}
        <div className="md:w-1/2 flex justify-center md:justify-end">
          <Tilt
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-[30rem] md:h-[30rem] border-4 border-purple-700 rounded-full overflow-hidden"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <img
              key={currentImageIndex}
              src={profileImages[currentImageIndex]}
              alt="Samyak Anand"
              className="w-full h-full rounded-full object-contain drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]"
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;