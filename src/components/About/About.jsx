import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Tilt from 'react-parallax-tilt';
import ReactTypingEffect from 'react-typing-effect';

const About = () => {
  // Profile image paths - using only the two specified images from public directory
  const profileImages = [
    '/images/profile1.png',
    '/images/profile2.png',
  ];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [imageError, setImageError] = useState(false);

  // Auto-slide effect for profile images
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, [profileImages.length]);

  // Fallback resume URL with better error handling
  const resumeUrl = import.meta.env.VITE_RESUME_DOWNLOAD_URL || '#';

  // Check if images exist and handle loading errors
  const handleImageError = (e) => {
    console.log("Image failed to load:", e.target.src);
    setImageError(true);
    // Try to load the first image as fallback
    if (e.target.src.includes('profile2.png')) {
      e.target.src = '/images/profile1.png';
    } else {
      // If both images fail, use a data URL for a simple placeholder
      e.target.src = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAwIiBoZWlnaHQ9IjIwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjZGRkIi8+PHRleHQgeD0iNTAlIiB5PSI1MCUiIGZvbnQtZmFtaWx5PSJBcmlhbCIgZm9udC1zaXplPSIxOCIgZmlsbD0iIzk5OSIgdGV4dC1hbmNob3I9Im1pZGRsZSIgZHk9Ii4zZW0iPkltYWdlIE5vdCBGb3VuZDwvdGV4dD48L3N2Zz4=';
    }
  };

  return (
    <section
      id="about"
      className="py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 relative overflow-hidden pb-10"
    >
      {/* Stars Background */}
      <div className="absolute inset-0 z-0">
        {/* Static stars */}
        <div className="absolute inset-0">
          {[...Array(100)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 3}px`,
                height: `${Math.random() * 3}px`,
                opacity: Math.random() * 0.8 + 0.2,
              }}
            />
          ))}
        </div>

        {/* Twinkling stars */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute rounded-full bg-white"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                width: `${Math.random() * 2 + 1}px`,
                height: `${Math.random() * 2 + 1}px`,
              }}
              animate={{
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.2, 0.8],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center relative z-10">
        {/* Left Side */}
        <motion.div
          className="md:w-1/2 text-center md:text-left mt-8 md:mt-0"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.9 }}
        >
          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mb-4 text-[#8245ec] leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.9 }}
          >
            <div className="mb-2">
              <span className="text-gray-800 dark:text-white text-lg sm:text-xl md:text-2xl">Hi, I am</span>
            </div>
            <div className="mb-2">
              <motion.span
                className="text-4xl sm:text-5xl md:text-6xl font-bold bg-gradient-to-r from-purple-400 via-purple-600 to-purple-800 bg-clip-text text-transparent inline-block whitespace-nowrap"
                initial={{ opacity: 0, scale: 0.8, y: 20 }}
                animate={{
                  opacity: 1,
                  scale: 1,
                  y: 0
                }}
                transition={{
                  duration: 0.8,
                  delay: 0.7
                }}
                whileHover={{
                  scale: 1.05,
                  textShadow: "0 0 20px rgba(130, 69, 236, 0.8)"
                }}
              >
                <motion.span
                  animate={{
                    y: [0, -5, 0],
                    textShadow: [
                      "0 0 5px rgba(130, 69, 236, 0.5)",
                      "0 0 20px rgba(130, 69, 236, 0.8)",
                      "0 0 5px rgba(130, 69, 236, 0.5)"
                    ]
                  }}
                  transition={{
                    y: {
                      duration: 3,
                      repeat: Infinity,
                      repeatType: "reverse",
                      ease: "easeInOut",
                      delay: 0.8
                    },
                    textShadow: {
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.8
                    }
                  }}
                >
                  {Array.from("Samyak Anand").map((letter, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.5,
                        delay: 0.9 + index * 0.1
                      }}
                      className="inline-block"
                    >
                      {letter}
                    </motion.span>
                  ))}
                </motion.span>
              </motion.span>
            </div>
            <div className="mt-4">
              <span className="text-gray-800 dark:text-white text-lg sm:text-xl md:text-2xl">I am a </span>
              <ReactTypingEffect
                text={['Data Scientist', 'Data Analyst', 'ML Engineer', 'AI Engineer', 'Developer', 'Gen AI Engineer', 'Coder']}
                speed={100}
                eraseSpeed={50}
                typingDelay={500}
                eraseDelay={2000}
                cursorRenderer={(cursor) => (
                  <span className="text-[#8245ec] text-lg sm:text-xl md:text-2xl">{cursor}</span>
                )}
                className="text-lg sm:text-xl md:text-2xl"
              />
            </div>
          </motion.h3>

          {/* About Me Paragraph */}
          <motion.p
            className="text-base sm:text-lg md:text-lg text-secondary mb-10 mt-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 1.1 }}
          >
            Certified Data Scientist & ML Engineer skilled in data analysis, predictive modeling, and MLOps. Expertise in Python, SQL, machine learning, and cloud deployment. Experienced in data preprocessing, statistical analysis, and feature engineering for AI solutions. Developed end-to-end ML pipelines using MLFlow, Docker, and FastAPI to drive business impact.
          </motion.p>

          {/* Resume Button */}
          <motion.a
            href={resumeUrl}
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
              onError={handleImageError}
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;