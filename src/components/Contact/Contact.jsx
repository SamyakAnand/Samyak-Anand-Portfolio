import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { FiMail, FiMapPin, FiMessageSquare, FiPhone, FiSend, FiUser } from "react-icons/fi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!publicKey) {
      console.error("❌ EmailJS PUBLIC KEY missing");
      return;
    }

    emailjs.init(publicKey);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    const serviceID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

    if (!serviceID || !templateID) {
      toast.error("EmailJS not configured on server!");
      setIsSubmitting(false);
      return;
    }

    emailjs
      .send(serviceID, templateID, formData)
      .then(() => {
        toast.success("Message sent successfully!");
        setFormData({ user_name: "", user_email: "", subject: "", message: "" });
      })
      .catch(() => toast.error("Failed to send message. Please try again."))
      .finally(() => setIsSubmitting(false));
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-16 md:py-24 px-4 md:px-[7vw] lg:px-[10vw] relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[10%] right-[10%] w-[400px] h-[400px] bg-purple-600/10 rounded-full blur-[100px] animate-blob"></div>
        <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[100px] animate-blob animation-delay-2000"></div>
      </div>

      <ToastContainer theme="dark" position="bottom-right" />

      {/* Section Title */}
      <motion.div
        className="text-center mb-16 relative z-10"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Get In <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Touch</span>
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto mt-4 rounded-full"></div>
        <p className="text-gray-300 mt-6 text-lg max-w-2xl mx-auto">
          Have a project in mind or want to discuss opportunities? I'd love to hear from you!
        </p>
      </motion.div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch w-full max-w-6xl relative z-10">
        {/* Contact Form */}
        <motion.div
          className="glass-card rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
              <FiSend className="w-6 h-6 text-purple-400" />
            </div>
            <h3 className="text-2xl font-bold text-white">Send Message</h3>
          </div>

          <form onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="user_name" className="block text-gray-400 mb-2 text-sm font-medium">Full Name</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiUser className="text-gray-500 group-focus-within:text-purple-500 transition-colors" />
                  </div>
                  <input
                    type="text"
                    name="user_name"
                    value={formData.user_name}
                    onChange={handleInputChange}
                    placeholder="John Doe"
                    className="w-full rounded-xl pl-11 px-4 py-3 bg-white/5 border border-white/10 focus:border-purple-500 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="user_email" className="block text-gray-400 mb-2 text-sm font-medium">Email Address</label>
                <div className="relative group">
                  <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                    <FiMail className="text-gray-500 group-focus-within:text-purple-500 transition-colors" />
                  </div>
                  <input
                    type="email"
                    name="user_email"
                    value={formData.user_email}
                    onChange={handleInputChange}
                    placeholder="john@example.com"
                    className="w-full rounded-xl pl-11 px-4 py-3 bg-white/5 border border-white/10 focus:border-purple-500 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                    required
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block text-gray-400 mb-2 text-sm font-medium">Subject</label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <FiMessageSquare className="text-gray-500 group-focus-within:text-purple-500 transition-colors" />
                </div>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="Project Inquiry"
                  className="w-full rounded-xl pl-11 px-4 py-3 bg-white/5 border border-white/10 focus:border-purple-500 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-gray-400 mb-2 text-sm font-medium">Your Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell me about your project..."
                rows="5"
                className="w-full rounded-xl px-4 py-3 bg-white/5 border border-white/10 focus:border-purple-500 focus:bg-white/10 transition-all duration-300 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 resize-none"
                required
              />
            </div>

            <motion.button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-4 px-6 rounded-xl font-bold text-white bg-purple-600 hover:bg-purple-700 shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isSubmitting ? (
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : (
                <>
                  <FiSend className="w-5 h-5" />
                  Send Message
                </>
              )}
            </motion.button>
          </form>
        </motion.div>

        {/* Contact Information */}
        <motion.div
          className="flex flex-col gap-6"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl flex-grow">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-purple-500/20 flex items-center justify-center border border-purple-500/30">
                <FiPhone className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-2xl font-bold text-white">Contact Info</h3>
            </div>

            <p className="text-gray-400 mb-6 leading-relaxed text-sm md:text-base">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <div className="space-y-4">
              <a
                href="mailto:samyak.g.anand@gmail.com"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FiMail className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs md:text-sm text-gray-400 mb-1">Mail me at</div>
                  <div className="font-semibold text-white group-hover:text-purple-400 transition-colors text-sm md:text-base">samyak.g.anand@gmail.com</div>
                </div>
              </a>

              <a
                href="tel:+919623719948"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FiPhone className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs md:text-sm text-gray-400 mb-1">Call me at</div>
                  <div className="font-semibold text-white group-hover:text-purple-400 transition-colors text-sm md:text-base">+91 9623719948</div>
                </div>
              </a>

              <a
                href="https://www.google.com/maps/search/?api=1&query=Hyderabad,+Telangana,+India"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-white/10 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <FiMapPin className="w-5 h-5 text-purple-400" />
                </div>
                <div>
                  <div className="text-xs md:text-sm text-gray-400 mb-1">Location</div>
                  <div className="font-semibold text-white group-hover:text-purple-400 transition-colors text-sm md:text-base">Hyderabad, Telangana, India</div>
                </div>
              </a>
            </div>
          </div>

          {/* Social Links Card */}
          <div className="glass-card rounded-3xl p-6 md:p-8 border border-white/10 shadow-2xl">
            <h4 className="text-lg font-bold text-white mb-6">Connect with me</h4>
            <div className="flex gap-4 justify-between sm:justify-start">
              <motion.a
                href="https://github.com/SamyakAnand"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-purple-600 hover:border-purple-600 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </motion.a>
              <motion.a
                href="https://www.linkedin.com/in/samyakanand/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0077b5] hover:border-[#0077b5] transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;