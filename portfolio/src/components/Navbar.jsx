import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  const handleNav = () => setNav(!nav);

  return (
    <div className={`fixed w-full h-20 z-50 ${
      shadow ? 'bg-[#0a192f]/90 backdrop-blur-sm shadow-xl' : 'bg-[#0a192f]'
    } transition-all duration-300`}>
      <div className="flex justify-between items-center w-full h-full px-6 2xl:px-16">
      <img src={`${process.env.PUBLIC_URL}/logo.jpeg`} alt="Portfolio Logo" className="h-16 w-16 object-contain" />


        <div>
          <ul className="hidden md:flex">
            {['home', 'about', 'education', 'experience', 'projects', 'contact'].map((item) => (
              <li key={item} className="ml-10 hover:text-[#64ffda] transition-colors duration-300">
                <a href={`#${item}`} className="capitalize">{item}</a>
              </li>
            ))}
          </ul>
          
          {/* Mobile Button */}
          <div onClick={handleNav} className="md:hidden cursor-pointer">
            <Menu className="h-6 w-6" />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`${
        nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''
      }`}>
        <div className={`${
          nav
            ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#0a192f] p-10 ease-in duration-500'
            : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }`}>
          <div>
            <div className="flex w-full items-center justify-between">
            <img src={`${process.env.PUBLIC_URL}/logo.jpeg`} alt="Portfolio Logo" className="h-16 w-16 object-contain" />

              <div onClick={handleNav} className="rounded-full p-3 cursor-pointer">
                <X className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              {['home', 'about', 'education', 'experience', 'projects', 'contact'].map((item) => (
                <li key={item} onClick={() => setNav(false)} className="py-4 hover:text-[#64ffda] transition-colors duration-300">
                  <a href={`#${item}`} className="capitalize">{item}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
