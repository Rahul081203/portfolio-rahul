import React, { useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ParticlesBackground from './components/ParticlesBackground';

const App = () => {
  useEffect(() => {
    const smooth = document.querySelectorAll('a[href^="#"]');
    smooth.forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });
  }, []);

  return (
    <Router>
      <div className="bg-[#0a192f] text-gray-300 min-h-screen">
        <ParticlesBackground />
        <Navbar />
        <Hero />
        <About />
        <Education />
        <Experience />
        <Projects />
        <Contact />
      </div>
    </Router>
  );
};

export default App;
