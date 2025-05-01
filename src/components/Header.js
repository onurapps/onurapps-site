'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`fixed w-full z-50 flex justify-center items-center ${scrolled ? 'pt-2' : 'pt-4'} px-4 transition-all duration-300`}>
      {/* Desktop Menu - Oval Shape */}
      <nav className={`hidden md:flex bg-[#0e1621]/80 backdrop-blur-sm rounded-full px-8 ${scrolled ? 'py-2' : 'py-3'} shadow-lg border border-[#1ae885]/10 transition-all duration-300`}>
        <Link href="/" className="text-gray-300 hover:text-[#1ae885] mx-4 transition-colors font-medium">
          Anasayfa
        </Link>
        <Link href="#about" className="text-gray-300 hover:text-[#1ae885] mx-4 transition-colors font-medium">
          Hakkımda
        </Link>
        <Link href="#projects" className="text-gray-300 hover:text-[#1ae885] mx-4 transition-colors font-medium">
          Projelerim
        </Link>
        <Link href="#testimonials" className="text-gray-300 hover:text-[#1ae885] mx-4 transition-colors font-medium">
          Referanslar
        </Link>
        <Link href="#contact" className="text-gray-300 hover:text-[#1ae885] mx-4 transition-colors font-medium">
          İletişim
        </Link>
      </nav>

      {/* Mobile Menu Button */}
      <div className="md:hidden flex w-full justify-end">
        <button 
          className={`bg-[#0e1621]/80 backdrop-blur-sm rounded-full p-3 text-white shadow-lg border border-[#1ae885]/10 transition-all duration-300 ${isOpen ? 'border-[#1ae885]/30' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-6 w-6" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            {isOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12" 
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16" 
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 right-4 bg-[#0e1621]/95 backdrop-blur-sm rounded-2xl p-4 shadow-xl w-[200px] border border-[#1ae885]/20">
          <nav className="flex flex-col space-y-3">
            <Link 
              href="/" 
              className="text-gray-300 hover:text-[#1ae885] p-2 transition-colors font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Anasayfa
            </Link>
            <Link 
              href="#about" 
              className="text-gray-300 hover:text-[#1ae885] p-2 transition-colors font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Hakkımda
            </Link>
            <Link 
              href="#projects" 
              className="text-gray-300 hover:text-[#1ae885] p-2 transition-colors font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Projelerim
            </Link>
            <Link 
              href="#testimonials" 
              className="text-gray-300 hover:text-[#1ae885] p-2 transition-colors font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              Referanslar
            </Link>
            <Link 
              href="#contact" 
              className="text-gray-300 hover:text-[#1ae885] p-2 transition-colors font-medium text-center"
              onClick={() => setIsOpen(false)}
            >
              İletişim
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header; 