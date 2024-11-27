import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Github, Linkedin } from 'lucide-react';
import emailjs from 'emailjs-com';

const Contact = () => {
  const [formData, setFormData] = useState({
    from_name: '',
    reply_to: '',
    message: ''
  });

  const [feedbackMessage, setFeedbackMessage] = useState(''); // New state for feedback

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_w7pwrze',
      'template_2gwvw4a',
      e.target,
      'wOEH6CAaD-41CwHkn'
    ).then((result) => {
        console.log('Email successfully sent!', result.text);
        setFormData({ from_name: '', reply_to: '', message: '' });
        setFeedbackMessage('Message sent successfully!'); // Set success message
    }).catch((error) => {
        console.error('Error sending email:', error);
        setFeedbackMessage('Failed to send the message. Please try again.'); // Set error message
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div id="contact" className="w-full min-h-screen p-8">
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text">Get In Touch</h2>
          <p className="text-gray-400 mt-4">Let's connect and discuss opportunities</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="from_name" className="block text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#112240] text-gray-300 border border-gray-700 focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="reply_to" className="block text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="reply_to"
                  name="reply_to"
                  value={formData.reply_to}
                  onChange={handleChange}
                  className="w-full p-3 rounded-lg bg-[#112240] text-gray-300 border border-gray-700 focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] outline-none transition-colors"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className="w-full p-3 rounded-lg bg-[#112240] text-gray-300 border border-gray-700 focus:border-[#64ffda] focus:ring-1 focus:ring-[#64ffda] outline-none transition-colors"
                  required
                />
              </div>

              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 rounded-lg bg-[#64ffda]/10 text-[#64ffda] hover:bg-[#64ffda]/20 transition-colors"
              >
                <Send className="h-5 w-5" />
                Send Message
              </button>

              {/* Feedback Message */}
              {feedbackMessage && (
                <p className={`mt-4 text-lg ${feedbackMessage.includes('successfully') ? 'text-green-500' : 'text-red-500'}`}>
                  {feedbackMessage}
                </p>
              )}
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center"
          >
            <div className="bg-[#112240] p-8 rounded-lg">
              <div className="flex items-center gap-4 mb-6">
                <div className="p-3 bg-[#64ffda]/10 rounded-lg">
                  <Mail className="h-6 w-6 text-[#64ffda]" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-100">Email Me</h3>
                  <p className="text-gray-400">Get in touch via email</p>
                </div>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:rahulsharmapro10@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-[#0a192f] hover:bg-[#64ffda]/5 transition-colors"
                >
                  <Mail className="h-6 w-6 text-[#64ffda]" />
                  <span className="text-gray-300">Email me at rahulsharmapro10@gmail.com</span>
                </a>

                <a
                  href="https://www.linkedin.com/in/rahul-sharma-188117253/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-[#0a192f] hover:bg-[#64ffda]/5 transition-colors"
                >
                  <Linkedin className="h-6 w-6 text-[#64ffda]" />
                  <span className="text-gray-300">Connect on LinkedIn</span>
                </a>

                <a
                  href="https://github.com/Rahul081203"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-[#0a192f] hover:bg-[#64ffda]/5 transition-colors"
                >
                  <Github className="h-6 w-6 text-[#64ffda]" />
                  <span className="text-gray-300">Follow on GitHub</span>
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
