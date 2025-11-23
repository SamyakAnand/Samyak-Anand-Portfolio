import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { FaCertificate, FaChartLine, FaCloud, FaDatabase, FaJava, FaPython } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight, FiExternalLink, FiX } from "react-icons/fi";
import { SiKaggle, SiPytorch, SiScikitlearn, SiTensorflow } from "react-icons/si";
import { certifications } from "../../constants";

// Function to get appropriate icon based on certification platform or content
const getCertificationIcon = (cert) => {
  if (cert.logo) {
    return (
      <div className="w-16 h-16 flex items-center justify-center">
        <img
          src={cert.logo}
          alt={cert.platform || cert.issuer}
          className="max-w-full max-h-full object-contain"
        />
      </div>
    );
  }

  if (cert.platform && cert.platform.toLowerCase().includes("kaggle")) {
    return <SiKaggle className="text-blue-500" size={64} />;
  }

  if (cert.platform && cert.platform.toLowerCase().includes("naresh")) {
    return <FaCertificate className="text-purple-500" size={64} />;
  }

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

  return <FaCertificate className="text-purple-500" size={64} />;
};

const Certification = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const sectionRef = useRef(null);

  // Touch handling state
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;
    if (isLeftSwipe) nextCertifications();
    if (isRightSwipe) prevCertifications();
  };

  // Navigation logic with looping
  const nextCertifications = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % certifications.length);
  };

  const prevCertifications = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + certifications.length) % certifications.length);
  };

  // Auto-play
  useEffect(() => {
    const interval = setInterval(() => {
      nextCertifications();
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Get visible certifications (3 cards)
  const getVisibleCertifications = () => {
    const items = [];
    for (let i = 0; i < 3; i++) {
      const index = (currentIndex + i) % certifications.length;
      items.push(certifications[index]);
    }
    return items;
  };

  const visibleCertifications = getVisibleCertifications();

  // Modal navigation
  const goToPrevCertification = () => {
    if (selectedCertification) {
      const currentIndexInArray = certifications.findIndex(cert => cert.id === selectedCertification.id);
      const prevIndex = (currentIndexInArray - 1 + certifications.length) % certifications.length;
      setSelectedCertification(certifications[prevIndex]);
    }
  };

  const goToNextCertification = () => {
    if (selectedCertification) {
      const currentIndexInArray = certifications.findIndex(cert => cert.id === selectedCertification.id);
      const nextIndex = (currentIndexInArray + 1) % certifications.length;
      setSelectedCertification(certifications[nextIndex]);
    }
  };

  const handleOpenModal = (cert) => setSelectedCertification(cert);
  const handleCloseModal = () => setSelectedCertification(null);

  // Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 100 : -100,
      opacity: 0,
    }),
  };

  return (
    <section
      ref={sectionRef}
      id="certification"
      className="py-24 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans relative overflow-hidden"
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Title */}
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white-100 mb-4">CERTIFICATIONS</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-secondary mt-6 text-lg max-w-3xl mx-auto">
          Industry-recognized certifications that validate my expertise and commitment to continuous learning in data science and machine learning.
        </p>
      </motion.div>

      {/* Navigation buttons */}
      <div className="flex justify-center items-center mb-8 gap-6">
        <button
          onClick={prevCertifications}
          className="p-3 rounded-full text-purple-500 hover:bg-purple-500/20 bg-tertiary transition-all duration-300 hover:scale-110"
          aria-label="Previous"
        >
          <FiChevronLeft size={24} />
        </button>

        <div className="flex gap-2">
          {certifications.map((_, idx) => (
            <div
              key={idx}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === currentIndex ? 'bg-purple-500 w-6' : 'bg-white/20'}`}
            />
          ))}
        </div>

        <button
          onClick={nextCertifications}
          className="p-3 rounded-full text-purple-500 hover:bg-purple-500/20 bg-tertiary transition-all duration-300 hover:scale-110"
          aria-label="Next"
        >
          <FiChevronRight size={24} />
        </button>
      </div>

      {/* Cards Container */}
      <div className="relative min-h-[500px]">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence initial={false} mode="popLayout" custom={direction}>
            {visibleCertifications.map((cert, index) => (
              <motion.div
                key={`${cert.id}-${index}`} // Unique key for animation
                layout
                initial={{ opacity: 0, scale: 0.8, x: direction * 50 }}
                animate={{ opacity: 1, scale: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.8, x: direction * -50 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                onClick={() => handleOpenModal(cert)}
                className="border border-white/10 dark:border-white/10 border-black/10 bg-tertiary/80 backdrop-blur-md rounded-2xl shadow-xl cursor-pointer hover:shadow-2xl hover:shadow-purple-500/20 hover:-translate-y-2 transition-all duration-300 p-6 group h-full flex flex-col"
              >
                <div className="flex justify-center items-center mb-6">
                  <div className="relative">
                    {getCertificationIcon(cert)}
                    <div className="absolute inset-0 rounded-full blur-xl opacity-30 animate-pulse group-hover:opacity-60 transition-opacity"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white-100 mb-3 text-center line-clamp-2 h-14">
                  {cert.title}
                </h3>
                <p className="text-secondary mb-5 text-center text-sm line-clamp-3 flex-grow">
                  {cert.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {cert.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="bg-purple-100 dark:bg-purple-900/50 text-xs font-semibold text-purple-700 dark:text-purple-300 rounded-full px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                  {cert.tags.length > 3 && (
                    <span className="bg-purple-100 dark:bg-purple-900/50 text-xs font-semibold text-purple-700 dark:text-purple-300 rounded-full px-3 py-1">
                      +{cert.tags.length - 3}
                    </span>
                  )}
                </div>
                <div className="text-center mt-auto">
                  <span className="text-purple-400 text-sm font-medium group-hover:text-purple-300 transition-colors">
                    View Details
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedCertification && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-lg p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              className="bg-tertiary rounded-2xl shadow-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto border border-white/10 dark:border-white/10 border-black/10 relative"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={handleCloseModal}
                className="absolute top-4 right-4 text-secondary hover:text-white-100 z-10 bg-primary/50 rounded-full p-2 transition-colors hover:bg-primary"
              >
                <FiX size={24} />
              </button>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => { e.stopPropagation(); goToPrevCertification(); }}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-primary/50 text-secondary hover:text-white-100 transition-colors hover:bg-primary hidden md:block"
              >
                <FiChevronLeft size={24} />
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); goToNextCertification(); }}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 p-3 rounded-full bg-primary/50 text-secondary hover:text-white-100 transition-colors hover:bg-primary hidden md:block"
              >
                <FiChevronRight size={24} />
              </button>

              <div className="flex flex-col items-center p-8">
                <div className="relative mb-6">
                  {getCertificationIcon(selectedCertification)}
                  <div className="absolute inset-0 rounded-full blur-xl opacity-30 animate-pulse"></div>
                </div>

                <div className="text-center w-full max-w-2xl">
                  <h3 className="text-3xl font-bold text-white-100 mb-2">
                    {selectedCertification.title}
                  </h3>

                  <div className="flex justify-center items-center mb-6">
                    <span className="bg-purple-100 dark:bg-purple-900/50 text-purple-700 dark:text-purple-300 px-4 py-1.5 rounded-full text-sm font-medium">
                      {selectedCertification.platform || "Certification Platform"}
                    </span>
                  </div>

                  <div className="flex flex-wrap justify-center gap-2 mb-8">
                    {selectedCertification.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="bg-purple-100 dark:bg-purple-900/50 text-sm font-semibold text-purple-700 dark:text-purple-300 rounded-full px-3 py-1.5"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="bg-primary/30 rounded-xl p-6 mb-8 text-left border border-white/5">
                    <h4 className="text-lg font-semibold text-white-100 mb-3">What I Learned</h4>
                    <p className="text-secondary mb-4 whitespace-pre-line leading-relaxed">{selectedCertification.description}</p>

                    {selectedCertification.details && (
                      <>
                        <h4 className="text-lg font-semibold text-white-100 mb-3 mt-6">Details</h4>
                        <p className="text-secondary whitespace-pre-line leading-relaxed">{selectedCertification.details}</p>
                      </>
                    )}
                  </div>

                  {selectedCertification.credential && (
                    <a
                      href={selectedCertification.credential}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-500 hover:from-purple-700 hover:to-pink-600 text-white px-8 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:-translate-y-1"
                    >
                      View Certificate
                      <FiExternalLink size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certification;