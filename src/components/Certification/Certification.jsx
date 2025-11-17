import React, { useState, useEffect, useRef } from "react";
import { certifications } from "../../constants";
import { FaCertificate, FaPython, FaJava, FaChartLine, FaDatabase, FaCloud } from "react-icons/fa";
import { FiX, FiExternalLink, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { SiKaggle, SiScikitlearn, SiTensorflow, SiPytorch } from "react-icons/si";
import { motion } from "framer-motion";

// Function to get appropriate icon based on certification platform or content
const getCertificationIcon = (cert) => {
  // Check platform first
  if (cert.platform && cert.platform.toLowerCase().includes("kaggle")) {
    return <SiKaggle className="text-blue-500" size={64} />;
  }
  
  if (cert.platform && cert.platform.toLowerCase().includes("naresh")) {
    return <FaCertificate className="text-purple-500" size={64} />;
  }
  
  // Check tags and title for specific technologies
  const tagsAndTitle = [...(cert.tags || []), cert.title].join(" ").toLowerCase();
  
  if (tagsAndTitle.includes("python") || tagsAndTitle.includes("pandas") || tagsAndTitle.includes("numpy")) {
    return <FaPython className="text-yellow-500" size={64} />;
  }
  
  if (tagsAndTitle.includes("java")) {
    return <FaJava className="text-red-500" size={64} />;
  }
  
  if (tagsAndTitle.includes("data visualization") || tagsAndTitle.includes("chart") || tagsAndTitle.includes("plotly")) {
    return <FaChartLine className="text-green-500" size={64} />;
  }
  
  if (tagsAndTitle.includes("database") || tagsAndTitle.includes("sql") || tagsAndTitle.includes("mysql")) {
    return <FaDatabase className="text-blue-400" size={64} />;
  }
  
  if (tagsAndTitle.includes("cloud") || tagsAndTitle.includes("aws") || tagsAndTitle.includes("gcp") || tagsAndTitle.includes("azure")) {
    return <FaCloud className="text-cyan-400" size={64} />;
  }
  
  if (tagsAndTitle.includes("machine learning") || tagsAndTitle.includes("scikit") || tagsAndTitle.includes("sklearn")) {
    return <SiScikitlearn className="text-orange-500" size={64} />;
  }
  
  if (tagsAndTitle.includes("tensorflow")) {
    return <SiTensorflow className="text-orange-600" size={64} />;
  }
  
  if (tagsAndTitle.includes("pytorch")) {
    return <SiPytorch className="text-red-600" size={64} />;
  }
  
  // Default icon
  return <FaCertificate className="text-purple-500" size={64} />;
};

const Certification = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [animate, setAnimate] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef(null);

  // Trigger animation when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) {
          setAnimate(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Show only 3 certificates at a time
  const visibleCertifications = certifications.slice(currentIndex, currentIndex + 3);
  
  // Handle navigation
  const nextCertifications = () => {
    if (currentIndex + 3 < certifications.length) {
      setCurrentIndex(currentIndex + 1);
    }
  };
  
  const prevCertifications = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  // Handle modal navigation
  const goToPrevCertification = () => {
    if (selectedCertification) {
      const currentIndexInArray = certifications.findIndex(cert => cert.id === selectedCertification.id);
      if (currentIndexInArray > 0) {
        setSelectedCertification(certifications[currentIndexInArray - 1]);
      }
    }
  };

  const goToNextCertification = () => {
    if (selectedCertification) {
      const currentIndexInArray = certifications.findIndex(cert => cert.id === selectedCertification.id);
      if (currentIndexInArray < certifications.length - 1) {
        setSelectedCertification(certifications[currentIndexInArray + 1]);
      }
    }
  };

  const handleOpenModal = (cert) => setSelectedCertification(cert);
  const handleCloseModal = () => setSelectedCertification(null);

  return (
    <section
      ref={sectionRef}
      id="certification"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans relative"
    >
      {/* Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 dark:text-white light:text-[var(--text-primary)]">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full dark:bg-gradient-to-r dark:from-purple-500 dark:to-pink-500 light:bg-gradient-to-r light:from-[var(--accent-secondary)] light:to-[var(--accent-primary)]"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto dark:text-gray-400 light:text-[var(--text-tertiary)]">
          Industry-recognized certifications that validate my expertise and commitment to continuous learning in data science and machine learning.
        </p>
      </motion.div>

      {/* Navigation buttons */}
      <motion.div
        className="flex justify-center items-center mb-6 gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <button 
          onClick={prevCertifications}
          disabled={currentIndex === 0}
          className={`p-3 rounded-full ${currentIndex === 0 ? 'text-gray-600 cursor-not-allowed bg-gray-800/50' : 'text-purple-500 hover:bg-purple-500/20 bg-gray-800/50'}`}
        >
          <FiChevronLeft size={24} />
        </button>
        
        <div className="text-gray-400 text-sm dark:text-gray-400 light:text-[var(--text-tertiary)]">
          {currentIndex + 1} - {Math.min(currentIndex + 3, certifications.length)} of {certifications.length}
        </div>
        
        <button 
          onClick={nextCertifications}
          disabled={currentIndex + 3 >= certifications.length}
          className={`p-3 rounded-full ${currentIndex + 3 >= certifications.length ? 'text-gray-600 cursor-not-allowed bg-gray-800/50' : 'text-purple-500 hover:bg-purple-500/20 bg-gray-800/50'}`}
        >
          <FiChevronRight size={24} />
        </button>
      </motion.div>

      {/* Container with enhanced styling */}
      <div className="relative p-6 rounded-3xl shadow-2xl border border-gray-700 bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-md shadow-[0_0_30px_2px_rgba(130,69,236,0.2)]">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {visibleCertifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              onClick={() => handleOpenModal(cert)}
              style={{
                transform: animate ? "scale(1)" : "scale(0.9)",
                opacity: animate ? 1 : 0,
                transition: `all 0.8s ease ${index * 0.1}s`,
              }}
              className="border border-gray-700 bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-md rounded-2xl shadow-xl cursor-pointer hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300 p-6 group"
              whileHover={{ y: -10, boxShadow: "0 20px 25px -5px rgba(139, 92, 246, 0.3), 0 10px 10px -5px rgba(139, 92, 246, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              initial={{ opacity: 0, scale: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="flex justify-center items-center mb-6">
                <div className="relative">
                  {getCertificationIcon(cert)}
                  <div className="absolute inset-0 rounded-full blur-xl opacity-30 animate-pulse"></div>
                </div>
              </div>
              <motion.h3 
                className="text-2xl font-bold text-white mb-3 text-center dark:text-white light:text-[var(--text-primary)]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                {cert.title}
              </motion.h3>
              <motion.p 
                className="text-gray-400 mb-5 text-center text-sm line-clamp-3 dark:text-gray-400 light:text-[var(--text-tertiary)]"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                {cert.description}
              </motion.p>
              <div className="flex flex-wrap justify-center gap-2 mb-4">
                {cert.tags.slice(0, 3).map((tag, i) => (
                  <motion.span
                    key={i}
                    className="bg-purple-900/50 text-xs font-semibold text-purple-300 rounded-full px-3 py-1"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {tag}
                  </motion.span>
                ))}
                {cert.tags.length > 3 && (
                  <span className="bg-purple-900/50 text-xs font-semibold text-purple-300 rounded-full px-3 py-1">
                    +{cert.tags.length - 3} more
                  </span>
                )}
              </div>
              <div className="text-center">
                <span className="text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors dark:text-purple-400 light:text-[var(--accent-primary)]">
                  View Details
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selectedCertification && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4"
          onClick={handleCloseModal}
        >
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-gray-700 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={handleCloseModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-white z-10 bg-gray-800/50 rounded-full p-2 transition-colors hover:bg-gray-700"
            >
              <FiX size={24} />
            </button>
            
            {/* Navigation Arrows */}
            <button
              onClick={goToPrevCertification}
              disabled={certifications.findIndex(cert => cert.id === selectedCertification.id) === 0}
              className={`absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-800/50 text-gray-400 hover:text-white transition-colors ${certifications.findIndex(cert => cert.id === selectedCertification.id) === 0 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-700'}`}
            >
              <FiChevronLeft size={24} />
            </button>
            
            <button
              onClick={goToNextCertification}
              disabled={certifications.findIndex(cert => cert.id === selectedCertification.id) === certifications.length - 1}
              className={`absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-gray-800/50 text-gray-400 hover:text-white transition-colors ${certifications.findIndex(cert => cert.id === selectedCertification.id) === certifications.length - 1 ? 'cursor-not-allowed opacity-50' : 'hover:bg-gray-700'}`}
            >
              <FiChevronRight size={24} />
            </button>
            
            <div className="flex flex-col items-center p-6">
              <div className="relative mb-6">
                {getCertificationIcon(selectedCertification)}
                <div className="absolute inset-0 rounded-full blur-xl opacity-30 animate-pulse"></div>
              </div>
              
              <div className="text-center w-full">
                <motion.h3 
                  className="text-3xl font-bold text-white mb-2 dark:text-white light:text-[var(--text-primary)]"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {selectedCertification.title}
                </motion.h3>
                
                {/* Platform/Issuer Information */}
                <motion.div
                  className="flex justify-center items-center mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                >
                  <span className="bg-purple-900/50 text-purple-300 px-3 py-1 rounded-full text-sm dark:bg-purple-900/50 dark:text-purple-300 light:bg-[var(--card-bg)] light:text-[var(--accent-primary)]">
                    {selectedCertification.platform || "Certification Platform"}
                  </span>
                </motion.div>
                
                <motion.div
                  className="flex flex-wrap justify-center gap-2 mb-6"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.2 }}
                >
                  {selectedCertification.tags.map((tag, i) => (
                    <motion.span
                      key={i}
                      className="bg-purple-900/50 text-sm font-semibold text-purple-300 rounded-full px-3 py-1.5"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.3, delay: 0.3 + i * 0.05 }}
                    >
                      {tag}
                    </motion.span>
                  ))}
                </motion.div>
                
                <motion.div
                  className="bg-gray-800/50 rounded-xl p-6 mb-6 text-left"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.4 }}
                >
                  <h4 className="text-lg font-semibold text-white mb-3">What I Learned</h4>
                  <p className="text-gray-300 mb-4 whitespace-pre-line">{selectedCertification.description}</p>
                  
                  {selectedCertification.details && (
                    <>
                      <h4 className="text-lg font-semibold text-white mb-3 mt-6">Details</h4>
                      <p className="text-gray-300 whitespace-pre-line">{selectedCertification.details}</p>
                    </>
                  )}
                </motion.div>
                
                {selectedCertification.certificate && (
                  <motion.a
                    href={selectedCertification.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Certificate
                    <FiExternalLink size={18} />
                  </motion.a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}

      {/* Styles */}
      <style jsx>{`
        @keyframes fadeSlideIn {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default Certification;