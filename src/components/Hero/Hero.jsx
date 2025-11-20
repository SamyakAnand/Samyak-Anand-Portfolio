import React from "react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";

const Hero = () => {
    const profileImages = [
        '/images/profile1.png',
        '/images/profile2.png',
    ];

    const [currentImageIndex, setCurrentImageIndex] = React.useState(0);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % profileImages.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    const resumeUrl = import.meta.env.VITE_RESUME_DOWNLOAD_URL || '#';

    return (
        <section className="relative w-full h-screen mx-auto bg-primary overflow-hidden" id="hero">
            {/* Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-purple-900/20 blur-[100px] animate-blob" />
                <div className="absolute top-[20%] right-[-10%] w-[30%] h-[30%] rounded-full bg-indigo-900/20 blur-[100px] animate-blob animation-delay-2000" />
                <div className="absolute bottom-[-10%] left-[20%] w-[35%] h-[35%] rounded-full bg-blue-900/20 blur-[100px] animate-blob animation-delay-4000" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col-reverse md:flex-row items-center justify-center md:justify-between gap-10 pt-20">

                {/* Text Content */}
                <div className="flex-1 text-center md:text-left">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4">
                            Hi, I'm <span className="text-[#915eff]">Samyak</span>
                        </h1>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-300 mb-6 h-[50px]">
                            I am a{' '}
                            <span className="text-[#915eff]">
                                <Typewriter
                                    words={['Data Scientist', 'ML Engineer', 'Data Analyst', 'Developer']}
                                    loop={0}
                                    cursor
                                    cursorStyle='|'
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>
                        </h2>
                        <p className="text-gray-400 text-lg max-w-xl mx-auto md:mx-0 mb-10 leading-relaxed">
                            Transforming complex data into actionable insights and building intelligent systems that drive innovation.
                        </p>

                        <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                            <a
                                href="#contact"
                                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#915eff] to-[#ff0080] text-white font-bold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300"
                            >
                                Hire Me
                            </a>
                            <a
                                href={resumeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-8 py-3 rounded-full border-2 border-[#915eff] text-[#915eff] font-bold text-lg hover:bg-[#915eff] hover:text-white transition-all duration-300"
                            >
                                Download CV
                            </a>
                        </div>
                    </motion.div>
                </div>

                {/* Image/Visual */}
                <div className="flex-1 flex justify-center items-center relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.5 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px]"
                    >
                        {/* Glowing Circle Background */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#915eff] to-[#ff0080] blur-[20px] opacity-30 animate-pulse-slow" />

                        <Tilt
                            className="w-full h-full rounded-full overflow-hidden border-4 border-[#915eff]/30 relative z-10 glass-card"
                            tiltMaxAngleX={10}
                            tiltMaxAngleY={10}
                            perspective={1000}
                        >
                            <img
                                src={profileImages[currentImageIndex]}
                                alt="Samyak Anand"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                    e.target.src = 'https://via.placeholder.com/400x400?text=Samyak+Anand';
                                }}
                            />
                        </Tilt>
                    </motion.div>
                </div>
            </div>

            {/* Scroll Down Indicator */}
            <div className="absolute bottom-10 w-full flex justify-center items-center z-20">
                <a href="#about">
                    <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
                        <motion.div
                            animate={{
                                y: [0, 24, 0],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                repeatType: "loop",
                            }}
                            className="w-3 h-3 rounded-full bg-secondary mb-1"
                        />
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Hero;
