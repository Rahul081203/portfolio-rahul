import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';

const ExperienceCard = ({ role, company, duration, location, details, delay }) => (
  <motion.div
    initial={{ opacity: 0, x: -50 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="relative pl-8 pb-8"
  >
    <div className="absolute left-0 top-0 h-full w-px bg-[#64ffda]/20">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 h-4 w-4 rounded-full bg-[#64ffda]"></div>
    </div>
    
    <div className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
      <div className="flex items-center gap-2 mb-2">
        <Briefcase className="h-5 w-5 text-[#64ffda]" />
        <h3 className="text-xl font-bold text-gray-100">{role}</h3>
      </div>
      
      <div className="flex items-center gap-2 text-gray-400 mb-4">
        <Calendar className="h-4 w-4" />
        <span>{duration}</span>
        <span className="px-2">•</span>
        <span>{company}, {location}</span>
      </div>
      
      <ul className="space-y-2">
        {details.map((detail, index) => (
          <li key={index} className="flex items-start gap-2 text-gray-300">
            <ChevronRight className="h-5 w-5 text-[#64ffda] shrink-0 mt-1" />
            <span>{detail}</span>
          </li>
        ))}
      </ul>
    </div>
  </motion.div>
);

const Experience = () => {
  const experiences = [
    {
      role: "Quantum Computing and AI Intern",
      company: "Tech Mahindra",
      duration: "May 2024 - Jul 2024",
      location: "Noida, India",
      details: [
        "Developed advanced quantum computing techniques for portfolio optimization, significantly enhancing efficiency and accuracy.",
        "Contributed to meta-virtual reality AI by developing interactive facial features, leading to more engaging VR interactions."
      ]
    },
    {
      role: "Data Science Intern",
      company: "Coders Cave",
      duration: "Sep 2023 - Oct 2023",
      location: "New Delhi",
      details: [
        "Built and deployed predictive machine learning models for customer behavior analysis, optimizing marketing strategies and increasing user engagement."
      ]
    },
    {
      role: "Software Team Lead",
      company: "Amity Institute of Space Science and Technology",
      duration: "Mar 2023 - Dec 2023",
      location: "Noida, India",
      details: [
        "Led the development of the Attitude Determination and Control System (ADCS) for a 3U CubeSat.",
        "Ensured precision in orientation and stability essential for mission success."
      ]
    }
  ];

  return (
    <div id="experience" className="w-full min-h-screen p-8">
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text">Experience</h2>
          <p className="text-gray-400 mt-4">My professional journey and internships</p>
        </motion.div>

        <div className="relative">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} delay={index * 0.2} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
