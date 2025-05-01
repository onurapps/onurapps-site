'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SpaceBackground from '../components/SpaceBackground';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  
  // Scroll efekti için
  useEffect(() => {
    setIsVisible(true);
    
    const handleScroll = () => {
      const projectsSection = document.getElementById('projects');
      if (projectsSection) {
        const rect = projectsSection.getBoundingClientRect();
        const isInView = rect.top < window.innerHeight * 0.75;
        setIsVisible(isInView);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // İlk yükleme kontrolü

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Proje verileri
  const projects = [
    {
      id: 1,
      title: 'Kronos',
      description: 'Tarihi olayları kronolojik sıraya koyma mobil oyunu.',
      tags: ['Flutter', 'Dart', 'Supabase', 'GetX'],
      image: '/projects/kronos.png',
      demoUrl: 'https://play.google.com/store/apps/details?id=com.onurdevs.kronos',
      detailUrl: '/projects/kronos'
    },
    {
      id: 2,
      title: 'NefesAl',
      description: 'Sigarayı bırakmaya yardımcı mobil uygulama.',
      tags: ['Flutter', 'Dart', 'Firebase', 'Provider'],
      image: '/projects/nefesal.png',
      demoUrl: 'https://play.google.com/store/apps/details?id=com.onurdevs.nefesai',
      detailUrl: '/projects/nefesal'
    }
  ];

  return (
    <section 
      id="projects" 
      className="py-24 bg-[#080c14] relative overflow-hidden"
    >
      {/* Uzay temalı arka plan */}
      <SpaceBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projelerim</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#1ae885] to-transparent rounded-full mx-auto my-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Uzak galaksilerde keşfettiğim kodların ürünü olan projelerim
          </p>
        </div>

        {/* Projeler Grid - Yeni 3D Kart Tasarımı */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-16 mb-16 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {projects.map((project) => (
            <div 
              key={project.id}
              className="perspective-1000 relative h-[500px] sm:h-[500px] md:h-[480px] lg:h-[450px] group cursor-pointer mb-10 sm:mb-8 md:mb-6 lg:mb-0"
            >
              {/* 3D Kart */}
              <div className="relative w-full h-full transform-style-3d rotate-y-0 group-hover:rotate-y-12 transition-transform duration-700">
                {/* Kart Ön Yüzü */}
                <div className="absolute inset-0 backface-hidden w-full h-full">
                  {/* Arka Plan Işımalar */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-[#1ae885] to-[#0ea5e9] opacity-20 blur-xl rounded-xl transform scale-95 group-hover:scale-105 transition-all duration-500"></div>
                  
                  {/* Ana Kart */}
                  <div className="relative bg-gradient-to-bl from-[#162435] via-[#0c1520] to-[#0a0f18] shadow-[0_0_40px_rgba(26,232,133,0.15)] rounded-xl border border-[#1ae885]/10 p-0.5 h-full w-full overflow-hidden z-10">
                    {/* Görsel Bölümü */}
                    <div className="relative h-[50%] md:h-[55%] overflow-hidden rounded-t-xl">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover object-top transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0c1520] to-transparent opacity-60"></div>
                      
                      {/* Flare Effect */}
                      <div className="absolute inset-0 bg-gradient-to-tr from-[#1ae885]/0 via-[#1ae885]/5 to-[#0ea5e9]/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                    </div>
                    
                    {/* İçerik Bölümü */}
                    <div className="p-6 h-[50%] md:h-[45%] flex flex-col justify-between relative">
                      {/* Arka Plan Parıltılar */}
                      <div className="absolute w-20 h-20 rounded-full bg-[#1ae885]/5 -top-10 -right-10 blur-xl"></div>
                      <div className="absolute w-20 h-20 rounded-full bg-[#0ea5e9]/5 bottom-5 -left-10 blur-xl"></div>
                      
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 tracking-tight group-hover:text-[#1ae885] transition-colors duration-300">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        
                        <div className="flex flex-wrap gap-2">
                          {project.tags.map((tag, index) => (
                            <span
                              key={index}
                              className="text-xs px-2.5 py-1 rounded-full text-[#1ae885] border border-[#1ae885]/20 bg-[#1ae885]/5"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="flex gap-3 mt-4 sm:mt-6">
                        <Link
                          href={project.demoUrl}
                          target="_blank"
                          className="relative overflow-hidden px-4 py-2 rounded-lg bg-gradient-to-r from-[#1ae885] to-[#0ea5e9] text-[#080c14] font-medium flex-1 text-center group-hover:shadow-[0_0_20px_rgba(26,232,133,0.4)] transition-all duration-300"
                        >
                          <span className="relative z-10 flex items-center justify-center">
                            <svg className="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
                              <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.433-.29.7 0 .267.109.519.29.7.181.181.433.29.7.29.267 0 .519-.109.7-.29L15.567 12 5.009 1.424c-.181-.181-.434-.29-.7-.29-.267 0-.519.109-.7.29-.181.181-.29.434-.29.7 0 .267.109.519.29.7z"/>
                            </svg>
                            Görüntüle
                          </span>
                          <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                        </Link>
                        <Link
                          href={project.detailUrl}
                          className="relative px-4 py-2 rounded-lg border border-[#1ae885]/30 text-[#1ae885] flex items-center justify-center group-hover:border-[#1ae885]/60 transition-all duration-300"
                        >
                          <span className="relative z-10">Detaylar</span>
                        </Link>
                      </div>
                    </div>
                    
                    {/* Işık Refleks Efekti */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#1ae885]/5 to-transparent transform translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1500"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Gölge Efekti */}
              <div className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-[90%] h-[10px] bg-[#1ae885]/20 blur-xl rounded-full opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Daha Fazla Proje Butonu */}
        <div className="flex justify-center mt-8 sm:mt-16">
          <Link 
            href="#projelerim"
            className="group relative z-10 px-8 py-3 rounded-full overflow-hidden bg-transparent border border-[#1ae885]/30 text-white font-medium transition-all duration-500 hover:border-[#1ae885]/70"
          >
            <span className="relative z-10 group-hover:text-black transition-colors duration-500">Tüm Projeleri Gör</span>
            <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left bg-gradient-to-r from-[#1ae885] to-[#0ea5e9]"></div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Projects; 