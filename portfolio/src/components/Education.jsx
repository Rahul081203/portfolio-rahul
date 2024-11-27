import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';

const EducationCard = ({ title, institution, year, details, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
    className="bg-[#112240] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 mb-6"
  >
    <div className="flex items-start gap-4">
      <div className="p-3 bg-[#64ffda]/10 rounded-lg">
        <GraduationCap className="h-6 w-6 text-[#64ffda]" />
      </div>
      <div>
        <h3 className="text-xl font-bold text-gray-100">{title}</h3>
        <p className="text-[#64ffda]">{institution}</p>
        <p className="text-gray-400">{year}</p>
        <ul className="mt-2 list-disc list-inside text-gray-300 space-y-1">
          {details.map((detail, index) => (
            <li key={index}>{detail}</li>
          ))}
        </ul>
      </div>
    </div>
  </motion.div>
);

const Education = () => {
  const educationData = [
    {
      title: "B.Tech in Computer Science Engineering",
      institution: "Amity University, Noida",
      year: "2021 - 2025",
      details: [
        "Specialized in AI and Machine Learning",
        "Research focus on Quantum Computing applications",
        "Participated in various hackathons"
      ]
    }
  ];

  const achievements = [
    "Authored research paper on Quantum ML Applications",
    "Authored research paper on Advanced AI Topics such as Denoising images using DDPMs and custom models",
    "Participated in Smart India Hackathon 2023",
    "Contributed to various AI/ML projects",
    "AWS Braket Badge",
    "Advanced Certification in Quantum Computing (IBM Quantum)",
    "Machine Learning Specialization (Coursera)"
  ];

  return (
    <div id="education" className="w-full min-h-screen p-8">
      <div className="max-w-[1240px] mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl font-bold gradient-text">Education</h2>
          <p className="text-gray-400 mt-4">My academic journey and certifications</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {educationData.map((edu, index) => (
            <EducationCard key={index} {...edu} delay={index * 0.2} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 bg-[#112240] p-6 rounded-lg"
        >
          <div className="flex items-center gap-4 mb-4">
            <Award className="h-6 w-6 text-[#64ffda]" />
            <h3 className="text-xl font-bold text-gray-100">Achievements</h3>
          </div>
          <ul className="space-y-2 text-gray-300">
            {achievements.map((achievement, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="h-2 w-2 bg-[#64ffda] rounded-full"></span>
                {achievement}
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default Education;
