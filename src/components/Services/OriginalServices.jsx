import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { 
  FaChartBar, 
  FaRobot, 
  FaBrain, 
  FaCloudUploadAlt, 
  FaMagic, 
  FaLaptopCode
} from "react-icons/fa";

const serviceData = [
  {
    icon: <FaChartBar className="text-3xl" />,
    title: "Data Analytics & Visualization",
    tagline: "Transforming raw data into actionable insights.",
    description:
      "I help businesses uncover hidden patterns and trends through advanced analytics and interactive dashboards using Power BI, Tableau, and Python libraries.",
    fullDescription: "Data Analytics & Visualization services transform complex datasets into clear, actionable insights that drive business decisions. Using tools like Power BI, Tableau, and Python libraries (Pandas, Matplotlib, Seaborn), I create interactive dashboards and reports that tell compelling data stories. My approach combines statistical analysis with intuitive visualization design to help stakeholders understand key metrics, identify opportunities, and track performance. Whether you need executive dashboards for strategic oversight or operational reports for day-to-day management, I deliver solutions that make data accessible and meaningful. My services include data cleaning and preprocessing, statistical modeling, trend analysis, and the creation of custom visualizations that highlight the most important insights for your business.",
    color: "from-blue-500 to-cyan-500",
    glow: "shadow-blue-500/50"
  },
  {
    icon: <FaRobot className="text-3xl" />,
    title: "Data Science & Machine Learning",
    tagline: "Building intelligent models that predict and optimize.",
    description:
      "From predictive analytics to classification models, I create ML solutions that solve real business problems using Python, Scikit-learn, and TensorFlow.",
    fullDescription: "Data Science & Machine Learning services leverage advanced algorithms to extract value from your data and solve complex business challenges. I specialize in developing predictive models, classification systems, and clustering solutions that drive measurable results. Using Python and frameworks like Scikit-learn, TensorFlow, and PyTorch, I build models for customer segmentation, demand forecasting, risk assessment, and recommendation systems. My approach combines domain expertise with technical excellence to ensure models are not only accurate but also interpretable and aligned with business objectives. I handle the entire ML pipeline from data preprocessing and feature engineering to model training, validation, and deployment. Whether you're looking to optimize pricing, reduce churn, or improve operational efficiency, I create tailored solutions that deliver real business impact.",
    color: "from-purple-500 to-indigo-500",
    glow: "shadow-purple-500/50"
  },
  {
    icon: <FaBrain className="text-3xl" />,
    title: "Deep Learning & NLP",
    tagline: "Advanced AI for complex pattern recognition and language understanding.",
    description:
      "Specialized neural networks for computer vision, natural language processing, and sequence modeling to tackle sophisticated AI challenges.",
    fullDescription: "Deep Learning & NLP services harness the power of neural networks to solve complex problems in computer vision, natural language processing, and sequential data analysis. I develop custom deep learning models using TensorFlow and PyTorch for applications like image recognition, object detection, sentiment analysis, and language generation. My NLP expertise includes text classification, named entity recognition, topic modeling, and chatbot development using transformers and state-of-the-art architectures. For computer vision, I build models for quality control, medical imaging analysis, and content moderation. My approach combines cutting-edge research with practical implementation to create solutions that push the boundaries of what's possible with AI. Whether you need to extract insights from unstructured text, analyze visual content, or process sequential data, I provide advanced AI solutions that deliver exceptional results.",
    color: "from-pink-500 to-rose-500",
    glow: "shadow-pink-500/50"
  },
  {
    icon: <FaCloudUploadAlt className="text-3xl" />,
    title: "MLOps & Model Deployment",
    tagline: "Taking AI models from experiment to enterprise-scale production.",
    description:
      "End-to-end MLOps solutions including model containerization, CI/CD pipelines, and monitoring using Docker, Kubernetes, and FastAPI.",
    fullDescription: "MLOps & Model Deployment services bridge the gap between machine learning experimentation and production implementation. I design and implement robust MLOps pipelines that ensure models are deployed reliably, monitored effectively, and maintained efficiently. Using Docker for containerization, Kubernetes for orchestration, and FastAPI for API development, I create scalable deployment solutions that integrate seamlessly with your existing infrastructure. My services include model versioning, experiment tracking with MLflow, automated testing, CI/CD pipeline setup, and real-time monitoring for model performance and data drift. I also implement A/B testing frameworks, rollback mechanisms, and security measures to ensure your AI systems are production-ready. Whether you're deploying a single model or managing an entire ML ecosystem, I provide the infrastructure and processes needed to operationalize your AI initiatives at scale.",
    color: "from-cyan-500 to-blue-500",
    glow: "shadow-cyan-500/50"
  },
  {
    icon: <FaMagic className="text-3xl" />,
    title: "Generative AI & AI Automation",
    tagline: "Creating intelligent systems that generate content and automate workflows.",
    description:
      "Generative AI solutions for content creation, code generation, and intelligent automation tools that enhance productivity and creativity.",
    fullDescription: "Generative AI & AI Automation services unlock new possibilities for content creation, workflow optimization, and intelligent automation. I develop generative models using state-of-the-art techniques like GANs, transformers, and diffusion models to create text, images, code, and multimedia content. My automation solutions include intelligent chatbots, document processing systems, and workflow automation tools that reduce manual effort and improve efficiency. Using platforms like LangChain and Hugging Face, I build custom generative AI applications tailored to your specific needs. Whether you're looking to accelerate content creation, automate repetitive tasks, or enhance user experiences with AI-powered features, I provide innovative solutions that boost productivity and creativity. My services also include prompt engineering, fine-tuning of pre-trained models, and integration of generative AI capabilities into existing applications.",
    color: "from-green-500 to-emerald-500",
    glow: "shadow-green-500/50"
  },
  {
    icon: <FaLaptopCode className="text-3xl" />,
    title: "Web Development & AI Integration",
    tagline: "Building modern web applications enhanced with AI capabilities.",
    description:
      "Full-stack web development with seamless AI integration using React, Node.js, FastAPI, and cloud technologies for intelligent user experiences.",
    fullDescription: "Web Development & AI Integration services combine modern web development practices with cutting-edge AI capabilities to create intelligent, interactive applications. I build responsive, scalable web applications using React, Vue.js, and Angular for the frontend, paired with Node.js, FastAPI, and Python for the backend. My AI integration expertise includes implementing recommendation systems, chatbots, personalization engines, and real-time analytics within web applications. I ensure seamless user experiences by embedding AI functionality naturally into the interface while maintaining high performance and reliability. My services cover the entire development lifecycle from UI/UX design and architecture planning to implementation, testing, and deployment. Whether you need a dashboard for AI model outputs, a customer-facing AI application, or an internal tool enhanced with intelligent features, I deliver web solutions that showcase the power of AI through intuitive, engaging interfaces.",
    color: "from-orange-500 to-amber-500",
    glow: "shadow-orange-500/50"
  },
];

const Services = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [animatedCards, setAnimatedCards] = useState([]);

  // Generate random starting positions for each card
  useEffect(() => {
    const generateRandomPosition = () => {
      const side = Math.floor(Math.random() * 4); // 0: top, 1: right, 2: bottom, 3: left
      const distance = 300 + Math.random() * 300; // Random distance between 300-600px
      
      switch (side) {
        case 0: // top
          return { x: (Math.random() - 0.5) * window.innerWidth, y: -distance };
        case 1: // right
          return { x: window.innerWidth + distance, y: (Math.random() - 0.5) * window.innerHeight };
        case 2: // bottom
          return { x: (Math.random() - 0.5) * window.innerWidth, y: window.innerHeight + distance };
        case 3: // left
          return { x: -distance, y: (Math.random() - 0.5) * window.innerHeight };
        default:
          return { x: 0, y: 0 };
      }
    };

    // Create array with random starting positions for each card
    const initialPositions = serviceData.map((_, index) => ({
      id: index,
      ...generateRandomPosition(),
      delay: Math.random() * 0.5 // Random delay between 0-0.5s
    }));
    
    setAnimatedCards(initialPositions);
  }, []);

  return (
    <section id="services" className="py-24 px-[7vw] md:px-[7vw] lg:px-[10vw] font-sans relative overflow-hidden">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Services</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
          End-to-end AI and data science solutions tailored to your business needs
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceData.map((service, index) => {
          const cardAnimation = animatedCards.find(card => card.id === index) || { x: 0, y: 0, delay: 0 };
          
          return (
            <motion.div
              key={index}
              initial={{ 
                opacity: 0, 
                x: cardAnimation.x, 
                y: cardAnimation.y,
                scale: 0.8
              }}
              animate={{ 
                opacity: 1, 
                x: 0, 
                y: 0,
                scale: 1
              }}
              transition={{ 
                type: "spring",
                stiffness: 100,
                damping: 15,
                mass: 1,
                delay: cardAnimation.delay
              }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSelectedService(service)}
              className={`bg-gradient-to-br ${service.color} rounded-2xl p-6 flex flex-col items-center text-center cursor-pointer hover:shadow-[0_0_30px_rgba(130,69,236,0.6)] transition-all duration-300 group relative overflow-hidden`}
            >
              {/* Shine effect on hover */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-150%] transition-transform duration-1000"></div>
              </div>
              
              <div className="text-white mb-4 relative z-10">{service.icon}</div>
              <h3 className="text-xl font-bold text-white mb-2 relative z-10">{service.title}</h3>
              <p className="text-white/90 text-sm mb-3 relative z-10">{service.tagline}</p>
              <p className="text-white/80 text-sm relative z-10">{service.description}</p>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Section */}
      <motion.div 
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        <p className="text-gray-300 text-lg mb-6">💡 Have an idea or project in mind? Let's build something amazing together.</p>
        <motion.a
          href="#contact"
          className="inline-block bg-gradient-to-r from-purple-600 to-pink-500 text-white font-semibold py-3 px-8 rounded-full hover:from-purple-700 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Let's Talk
        </motion.a>
      </motion.div>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 backdrop-blur-sm">
          <motion.div 
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-gray-700"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            <div className={`bg-gradient-to-r ${selectedService.color} p-6 rounded-t-2xl`}>
              <div className="flex justify-between items-start">
                <div>
                  <div className="text-white mb-2">{selectedService.icon}</div>
                  <h3 className="text-2xl font-bold text-white">{selectedService.title}</h3>
                  <p className="text-white/90 mt-1">{selectedService.tagline}</p>
                </div>
                <button 
                  onClick={() => setSelectedService(null)}
                  className="text-white/80 hover:text-white text-2xl"
                >
                  ✕
                </button>
              </div>
            </div>
            
            <div className="p-6">
              <p className="text-gray-300 mb-4">{selectedService.fullDescription}</p>
              
              <div className="mt-6">
                <h4 className="text-lg font-semibold text-white mb-3">Key Benefits:</h4>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-gray-300">Tailored solutions for your specific business needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-gray-300">Cutting-edge technologies and methodologies</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-gray-300">End-to-end implementation and support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-green-400 mr-2">✓</span>
                    <span className="text-gray-300">Measurable ROI and business impact</span>
                  </li>
                </ul>
              </div>
              
              <div className="mt-8 flex justify-center">
                <a
                  href="#contact"
                  onClick={() => setSelectedService(null)}
                  className={`inline-block bg-gradient-to-r ${selectedService.color} text-white font-semibold py-3 px-8 rounded-full hover:opacity-90 transition-all duration-300 shadow-lg`}
                >
                  Get This Service
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Services;