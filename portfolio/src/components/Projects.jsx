import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const ProjectCard = ({ title, description, technologies, imagePath, github, external, delay }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-[#112240] rounded-lg overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden h-48">
        <img
          src={`${process.env.PUBLIC_URL}${imagePath}`}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className={`absolute inset-0 bg-[#64ffda]/10 backdrop-blur-sm transition-opacity duration-500 ${
          isHovered ? 'opacity-100' : 'opacity-0'
        }`} />
      </div>

      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-100 mb-2">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="text-sm px-3 py-1 rounded-full bg-[#64ffda]/10 text-[#64ffda]"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {github && (
            <a
              href={github}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#64ffda] transition-colors"
            >
              <Github className="h-5 w-5" />
            </a>
          )}
          {external && (
            <a
              href={external}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 hover:text-[#64ffda] transition-colors"
            >
              <ExternalLink className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Quantum Portfolio Optimizer",
      description: "Advanced quantum computing algorithm for optimizing investment portfolios using IBM Qiskit and AWS Braket.",
      technologies: ["IBM Qiskit", "AWS Braket", "Python", "Quantum Algorithms"],
      imagePath: "/quantum.jpg",
      external: null
    },
    {
      title: "AI-Powered Facial Recognition System",
      description: "Deep learning-based facial recognition system with real-time processing capabilities.",
      technologies: ["Python", "TensorFlow", "OpenCV", "Deep Learning"],
      imagePath: "/face.jpeg",
      external: null
    },
    {
      title: "CubeSat Control System",
      description: "Attitude Determination and Control System (ADCS) for 3U CubeSat mission.",
      technologies: ["C++", "Arduino", "Embedded Systems", "Control Systems"],
      imagePath: "/cubesat.jpeg",
      external: null
    },
    {
      title: "Retrieval-Augmented Generation (RAG) with LangChain",
      description: "Developed a RAG system leveraging Langchain for content generation, incorporating advanced NLP techniques.",
      technologies: ["LangChain", "NLP", "Python"],
      imagePath: "/rag.jpg",
      external: null
    },
    {
      title: "Image Captioning System",
      description: "Automated image caption generation using CNNs and RNNs, improving accessibility and content understanding.",
      technologies: ["CNN", "RNN", "Deep Learning"],
      imagePath: "/image_captioning.jpg",
      external: null
    },
    {
      title: "Real-Time Sign Language Translation",
      description: "Built a sign language translator using Mediapipe and OpenCV for real-time communication.",
      technologies: ["Python", "Mediapipe", "OpenCV", "TensorFlow"],
      imagePath: "/sign_language.jpg",
      external: null
    },
    {
      title: "Smart Parking Management App",
      description: "Flutter app for automatic parking management using computer vision for license plate recognition.",
      technologies: ["Flutter", "Dart", "Computer Vision", "Firebase"],
      imagePath: "/smart_parking.jpg",
      external: null
    },
    {
      title: "Voice-Controlled Virtual Assistant",
      description: "Voice-controlled assistant using speech recognition and Ollama with high command interpretation accuracy.",
      technologies: ["Speech Recognition", "Ollama", "pyttsx3"],
      imagePath: "/virtual_assistant.jpg",
      external: null
    },
    {
      title: "E-commerce Recommendation System",
      description: "Personalized recommendation engine using collaborative filtering to enhance user engagement and sales.",
      technologies: ["Machine Learning", "Python"],
      imagePath: "/recommendation_system.jpg",
      external: null
    },
    {
      title: "E-commerce Platform",
      description: "Designed a scalable e-commerce application with React, Node.js, Express, and MongoDB, featuring user authentication, product catalog, and order management.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      imagePath: "/ecommerce.jpeg", // Make sure to add the actual image file to the public folder
      external: null
    },
    {
      title: "Social Media App",
      description: "Built a social media application featuring user profiles, posts, likes, and comments using the MERN stack, achieving optimized database queries and front-end performance.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      imagePath: "/social.jpeg", // Make sure to add the actual image file to the public folder
      external: null
    }
  ];

  return (
    <div id="projects" className="w-full min-h-screen p-8">
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text">Projects</h2>
          <p className="text-gray-400 mt-4">Some of my recent work</p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              {...project}
              delay={index * 0.2}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
