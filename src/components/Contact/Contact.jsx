import React, { useRef, useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FiMail, FiUser, FiMessageSquare, FiSend, FiMapPin, FiPhone } from "react-icons/fi";
import { motion } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    user_email: "",
    user_name: "",
    subject: "",
    message: ""
  });

  useEffect(() => {
    setShowForm(true);
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.user_name || !formData.user_email || !formData.message) {
      toast.error("Please fill in all required fields", {
        position: "top-right",
        autoClose: 3000,
        theme: "dark",
      });
      return;
    }

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset();
          setFormData({
            user_email: "",
            user_name: "",
            subject: "",
            message: ""
          });
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            theme: "dark",
          });
        }
      );
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[7vw] md:px-[7vw] lg:px-[10vw]"
    >
      <ToastContainer />

      {/* Section Title */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">GET IN TOUCH</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-400 mt-6 text-lg max-w-3xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you! 
          Fill out the form below and I'll get back to you as soon as possible.
        </p>
      </div>

      <div className="mt-12 grid md:grid-cols-2 gap-8 items-stretch w-full max-w-5xl">
        {/* Enhanced Contact Form */}
        <motion.div 
          className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700 shadow-2xl"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
              <FiSend className="w-5 h-5 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-purple-500">Send a Message</h3>
          </div>
          
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            {/* Name Field */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
            >
              <label className="block text-sm font-medium text-purple-500 mb-2">
                Full Name *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  <FiUser size={20} />
                </div>
                <input
                  name="user_name"
                  value={formData.user_name}
                  onChange={handleInputChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl pl-10 px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-gray-700 transition-all duration-300 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:border-purple-500 shadow-lg shadow-purple-500/20"
                  required
                />
                {formData.user_name && (
                  <motion.div 
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <label className="block text-sm font-medium text-purple-500 mb-2">
                Email Address *
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  <FiMail size={20} />
                </div>
                <input
                  name="user_email"
                  value={formData.user_email}
                  onChange={handleInputChange}
                  placeholder="your.email@example.com"
                  type="email"
                  className="w-full rounded-xl pl-10 px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-gray-700 transition-all duration-300 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:border-purple-500 shadow-lg shadow-purple-500/20"
                  required
                />
                {formData.user_email && formData.user_email.includes('@') && (
                  <motion.div 
                    className="absolute right-3 top-1/2 -translate-y-1/2"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </motion.div>
                )}
              </div>
            </motion.div>

            {/* Subject Field */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
            >
              <label className="block text-sm font-medium text-purple-500 mb-2">
                Subject
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-500">
                  <FiMessageSquare size={20} />
                </div>
                <input
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What is this regarding?"
                  className="w-full rounded-xl pl-10 px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-gray-700 transition-all duration-300 text-white placeholder-white/60 focus:outline-none focus:ring-0 focus:border-purple-500 shadow-lg shadow-purple-500/20"
                />
              </div>
            </motion.div>

            {/* Message Field */}
            <motion.div 
              className="relative"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.6 }}
            >
              <label className="block text-sm font-medium text-purple-500 mb-2">
                Message *
              </label>
              <div className="relative">
                <div className="absolute top-4 left-0 pl-3 flex items-start pointer-events-none text-gray-500">
                  <FiMessageSquare size={20} />
                </div>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell me about your requirements, questions, or feedback..."
                  rows="6"
                  className="w-full rounded-xl pl-10 px-4 py-3 bg-white/10 backdrop-blur-sm border-2 border-gray-700 transition-all duration-300 text-white placeholder-white/60 resize-none focus:outline-none focus:ring-0 focus:border-purple-500 shadow-lg shadow-purple-500/20"
                  required
                />
                {formData.message && formData.message.length > 10 && (
                  <motion.div 
                    className="absolute right-3 top-3"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.2 }}
                  >
                    <svg className="w-5 h-5 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </motion.div>
                )}
              </div>
              <div className="mt-1 text-xs text-gray-500">
                {formData.message.length}/500 characters
              </div>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={!formData.user_name || !formData.user_email || !formData.message}
              className="w-full relative overflow-hidden rounded-xl px-6 py-4 font-bold text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.7 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-600 opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-xl"></div>
              <div className="absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500 rounded-xl opacity-0 group-hover:opacity-30 transition-all duration-500 animate-pulse"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300 rounded-xl animate-ping"></div>
              </div>
              <span className="relative z-10 flex items-center justify-center gap-2">
                <FiSend className="w-5 h-5" />
                <span>Send Message</span>
              </span>
              <div className="absolute inset-0 rounded-xl border-2 border-white/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-500 rounded-xl blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300 animate-pulse"></div>
              {!formData.user_name || !formData.user_email || !formData.message ? (
                <span className="text-xs ml-2">(Please fill all required fields)</span>
              ) : null}
            </motion.button>
          </form>
        </motion.div>

        {/* Enhanced Contact Details */}
        <motion.div 
          className="bg-gradient-to-br from-gray-900/80 to-gray-800/50 backdrop-blur-md rounded-3xl p-8 border border-gray-700 shadow-2xl"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center">
              <FiPhone className="w-5 h-5 text-purple-500" />
            </div>
            <h3 className="text-xl font-bold text-purple-500">Reach Me</h3>
          </div>
          
          <p className="text-sm text-white/70 mb-6">
            I usually respond within 24 hours. Feel free to reach out through any of these channels.
          </p>

          <div className="space-y-4 mb-8">
            <motion.a
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              href="mailto:samyak.g.anand@gmail.com"
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center shadow-lg">
                <FiMail className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-purple-500">Email Me</div>
                <div className="text-sm text-white/60 group-hover:text-purple-500 transition-colors">
                  samyak.g.anand@gmail.com
                </div>
              </div>
            </motion.a>
            
            <motion.a
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              href="tel:+919623719948"
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center shadow-lg">
                <FiPhone className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-purple-500">Call Me</div>
                <div className="text-sm text-white/60 group-hover:text-purple-500 transition-colors">
                  +91 9623719948
                </div>
              </div>
            </motion.a>
            
            <motion.a
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-white/10 transition-all duration-300 group"
              target="_blank"
              rel="noopener noreferrer"
              href="https://www.google.com/maps/search/?api=1&query=Hyderabad,+Telangana,+India"
              whileHover={{ x: 5 }}
            >
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center shadow-lg">
                <FiMapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-semibold text-purple-500">Location</div>
                <div className="text-sm text-white/60 group-hover:text-purple-500 transition-colors">
                  Hyderabad, Telangana, India
                </div>
              </div>
            </motion.a>
          </div>

          <motion.div 
            className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-full bg-purple-500 flex items-center justify-center shadow-lg flex-shrink-0">
                <FiUser className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-purple-500 mb-2">Let's Connect</div>
                <p className="text-sm text-white/70 leading-relaxed">
                  I'm always open to discussing new opportunities, creative projects, or just having a chat about technology and innovation.
                </p>
              </div>
            </div>
          </motion.div>
          
          {/* Social Links */}
          <div className="mt-8">
            <p className="text-gray-400 mb-4 text-center">Connect with me on</p>
            <div className="flex justify-center gap-6">
              <a 
                href="https://github.com/SamyakAnand" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
              >
                <div className="bg-gray-800/50 p-3 rounded-full border border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </div>
              </a>
              <a 
                href="https://www.linkedin.com/in/samyakanand/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-500 transition-colors duration-300"
              >
                <div className="bg-gray-800/50 p-3 rounded-full border border-gray-700 hover:border-purple-500 hover:shadow-lg hover:shadow-purple-500/30 transition-all duration-300">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;