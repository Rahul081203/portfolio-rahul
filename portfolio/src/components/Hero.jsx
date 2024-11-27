import React, { useEffect, useState } from 'react';
import { Github, Linkedin } from 'lucide-react';
import ParticlesBackground from './ParticlesBackground';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
  }, []);

  return (
    <div id="home" className="w-full h-screen text-center relative">
      <div className="absolute inset-0 z-0">
        {/* Particle Background */}
        <ParticlesBackground />
      </div>
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center relative z-10">
        <div className={`transition-all duration-1000 delay-300 transform ${
          visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <p className="uppercase text-sm tracking-widest text-gray-400">
            Building Tomorrow’s Innovations
          </p>
          <h1 className="py-4 text-gray-100 text-5xl">
            Hello, I’m <span className="gradient-text font-bold">Rahul Sharma</span>
          </h1>
          <h2 className="py-2 text-gray-300 text-2xl">
            AI & Machine Learning Enthusiast
          </h2>
          <p className="py-4 text-gray-400 max-w-[70%] m-auto">
            Crafting intelligent solutions through Artificial Intelligence, Quantum Computing, and innovative software development.
          </p>
          
          <div className="flex items-center justify-center gap-6 mt-8">
            <a
              href="https://www.linkedin.com/in/rahul-sharma-188117253/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-3 cursor-pointer hover:scale-110 hover:text-[#0066FFFF] transition-all duration-300"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/Rahul081203"
              target="_blank"
              rel="noreferrer"
              className="rounded-full p-3 cursor-pointer hover:scale-110 hover:text-[#B8B8B8FF] transition-all duration-300"
            >
              <Github className="h-6 w-6" />
            </a>
          </div>

          <a
            href={`${process.env.PUBLIC_URL}/resume.pdf`}
            download
            className="mt-8 inline-block px-6 py-3 text-lg bg-[#0a192f] text-[#64ffda] border border-[#64ffda] rounded-full hover:bg-[#1e3a60] hover:text-[#ffffff] transition-all duration-300"
          >
  Download Resume
</a>

        </div>
      </div>
    </div>
  );
};

export default Hero;
