import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import ReactTypingEffect from 'react-typing-effect';

const About = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Profile image paths - using only the two specified images
  const profileImages = [
    "/images/profile1.png",
    "/images/profile2.png",
  ];

  // Change image every 4 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [profileImages.length]);

  return (
    <section
      id="about"
      className="py-8 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-8 md:mt-12 lg:mt-16 relative"
    >
      {/* Blur Blob Behind Name */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden -z-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-10 left-1/2 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>
      
      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-8 md:gap-12">
        {/* Left Side with Animations */}
        <motion.div 
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0 relative z-10"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Hi, I am
          </motion.h1>
          <motion.h2 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Samyak Anand
          </motion.h2>
          
          {/* Skills Heading with Typing Effect */}
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <span className="text-white">I am a </span>
            <ReactTypingEffect
              text={[
                'Data Scientist',
                'Data Analyst',
                'ML Engineer',
                'AI Engineer',
                'Developer',
                'Gen AI Engineer',
                'Coder',
              ]}
              speed={100}
              eraseSpeed={50}
              typingDelay={500}
              eraseDelay={2000}
              cursorRenderer={(cursor) => (
                <span className="text-[#8245ec]">{cursor}</span>
              )}
              className="inline-block text-[#8245ec]"
            />
          </motion.h3>
          
          {/* About Me Paragraph */}
          <motion.p 
            className="text-base sm:text-lg md:text-lg text-gray-400 mb-10 mt-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            A Data Scientist & ML Engineer with internship experience at Evoastra Ventures and Gilbert Research Center. I've worked on ML workflows, CARS24 analytics, AI resume parsing, and clinical ML pipelines with drift detection and API deployment. I hold a B.Tech in Computer Science & Engineering and a Diploma in Computer Science, and I specialize in predictive modeling, NLP, and building scalable AI solutions.
          </motion.p>
          
          {/* Resume Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.0 }}
          >
            <a
              href={import.meta.env.VITE_RESUME_DOWNLOAD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white py-3 px-8 rounded-full mt-5 text-lg font-bold transition duration-300 transform hover:scale-105"
              style={{
                background: 'linear-gradient(90deg, #8245ec, #a855f7)',
                boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
              }}
            >
              DOWNLOAD CV
            </a>
          </motion.div>
        </motion.div>
        
        {/* Right Side - Profile Image Slider */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <Tilt
            className="w-80 h-80 sm:w-96 sm:h-96 md:w-[32rem] md:h-[32rem] rounded-full"
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            scale={1.05}
            transitionSpeed={1000}
            gyroscope={true}
          >
            <div className="relative w-full h-full rounded-full overflow-hidden">
              {/* Pure Purple glow effect inside the circle */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/40 to-purple-800/40 animate-pulse"></div>
              {profileImages.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`Samyak Anand - ${index + 1}`}
                  className={`absolute inset-0 w-full h-full object-contain transition-opacity duration-1000 rounded-full ${
                    index === currentImageIndex ? 'opacity-100' : 'opacity-0'
                  }`}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.parentElement.innerHTML = '<div class="absolute inset-0 bg-gradient-to-br from-purple-900 to-pink-900 rounded-full flex items-center justify-center"><span class="text-white text-4xl font-bold">SA</span></div>';
                  }}
                />
              ))}
              {/* Blur effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent rounded-full"></div>
            </div>
            
            {/* Purple Glow Effect Around Profile Card */}
            <div className="absolute inset-0 rounded-full border-4 border-purple-500 shadow-2xl shadow-purple-500/50"></div>
            <div className="absolute inset-0 rounded-full animate-pulse border-2 border-purple-300 shadow-2xl shadow-purple-300/30"></div>
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;