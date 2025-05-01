'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import SpaceBackground from '../components/SpaceBackground';

const About = () => {
  const [activeTab, setActiveTab] = useState('skills');
  const [isVisible, setIsVisible] = useState(false);

  // Fade-in animasyonu için
  useEffect(() => {
    setIsVisible(true);
    
    // Scroll event listener ile görünüm kontrolü
    const handleScroll = () => {
      const aboutSection = document.getElementById('about');
      if (aboutSection) {
        const rect = aboutSection.getBoundingClientRect();
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

  const skills = [
    { name: 'Flutter', level: 85, color: 'from-[#1ae885] to-[#0ea5e9]' },
    { name: 'JavaScript', level: 30, color: 'from-[#1ae885] to-[#0ea5e9]' },
    { name: 'React', level: 40, color: 'from-[#1ae885] to-[#0ea5e9]' },
    { name: 'Next.js', level: 60, color: 'from-[#1ae885] to-[#0ea5e9]' },
    { name: 'Tailwind CSS', level: 90, color: 'from-[#1ae885] to-[#0ea5e9]' },
    { name: 'UI/UX Design', level: 95, color: 'from-[#1ae885] to-[#0ea5e9]' },
    { name: 'SQL', level: 60, color: 'from-[#1ae885] to-[#0ea5e9]' },
  ];

  const experiences = [
    {
      title: 'Stajyer',
      company: 'Tatmetal Çelik Sanayi ve Ticaret A.Ş.',
      period: '2023',
      description: 'Konteynerizasyon yönetimi. Docker kullanımı.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      title: 'Freelancer',
      company: 'Fiverr.com',
      period: '2021 - 2025',
      description: 'Freelancer olarak çeşitli projelerde çalıştım.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      )
    },
  ];

  const educations = [
    {
      degree: 'Bilgisayar Teknolojileri, Ön Lisans',
      school: 'Bülent Ecevit Üniversitesi',
      year: '2021',
      description: 'Web teknolojileri ve kullanıcı arayüzü tasarımı konusunda uzmanlaşma.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
        </svg>
      )
    },
    {
      degree: 'Bilgisayar Bölümü, Lise',
      school: 'Kdz.Ereğli Meslek Lisesi',
      year: '2014',
      description: 'Donanım kurulumu ve temel eğitim.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10.496 2.132a1 1 0 00-.992 0l-7 4A1 1 0 003 8v7a1 1 0 100 2h14a1 1 0 100-2V8a1 1 0 00.496-1.868l-7-4zM6 9a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1zm3 1a1 1 0 012 0v3a1 1 0 11-2 0v-3zm5-1a1 1 0 00-1 1v3a1 1 0 102 0v-3a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>
      )
    }
  ];

  return (
    <section 
      id="about" 
      className="py-24 bg-[#080c14] relative overflow-hidden"
    >
      {/* Uzay temalı arka plan */}
      <SpaceBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Hakkımda</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#1ae885] to-transparent rounded-full mx-auto my-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Galaksinin en uzak köşelerinden sizin için kod yazan bir yazılım geliştiricisiyim.
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-12 gap-10 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Sol taraf - Bilgiler */}
          <div className="lg:col-span-5 space-y-6">
            {/* Bilgi kartı */}
            <div className="backdrop-blur-md bg-[#0e1621]/80 border border-[#1ae885]/10 rounded-2xl p-6 shadow-[0_0_15px_rgba(26,232,133,0.1)]">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-1.5 h-12 bg-[#1ae885] rounded-full"></div>
                <h3 className="text-2xl font-bold text-white">Ben Kimim?</h3>
              </div>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                Dijital uzayda 5+ yıllık deneyimle yolculuk yapan bir yazılım kâşifiyim. Web teknolojileri ve kullanıcı deneyimi yıldız sistemlerimde yeni dünyalar keşfederek, performanslı web uygulamaları inşa ediyorum.
              </p>
              
              <p className="text-gray-400 mb-4 leading-relaxed">
                React, Next.js, Tailwind CSS ve Flutter gibi modern teknolojiler, uzay gemimde kullandığım en güçlü motorlar.
              </p>
              
              <p className="text-gray-400 leading-relaxed">
                Bilginin sonsuz evreninde sürekli öğrenerek, teknolojik galaksimizin en son keşiflerini yakından takip ediyorum.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#1ae885] rounded-full"></div>
                    <span className="text-gray-300 text-sm font-medium">Ad:</span>
                  </div>
                  <p className="text-white pl-3">Onur Keskin</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#1ae885] rounded-full"></div>
                    <span className="text-gray-300 text-sm font-medium">Konum:</span>
                  </div>
                  <p className="text-white pl-3">Zonguldak, Türkiye</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#1ae885] rounded-full"></div>
                    <span className="text-gray-300 text-sm font-medium">E-posta:</span>
                  </div>
                  <p className="text-white pl-3">onurapps@gmail.com</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-1 h-1 bg-[#1ae885] rounded-full"></div>
                    <span className="text-gray-300 text-sm font-medium">Durum:</span>
                  </div>
                  <p className="text-[#1ae885] pl-3">Proje Kabul Ediyorum</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4 mt-10">
                <a
                  href="#contact"
                  className="group relative px-6 py-3 rounded-full overflow-hidden bg-[#0e1621] border border-[#1ae885]/30 text-white font-medium transition-all duration-300"
                >
                  <span className="relative z-10">İletişime Geç</span>
                  <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-[#1ae885] to-[#0ea5e9]"></div>
                </a>
                
                <a
                  href="/cv.pdf"
                  download
                  className="group relative px-6 py-3 rounded-full overflow-hidden border border-[#1ae885]/30 text-[#1ae885] font-medium transition-all duration-300"
                >
                  <span className="relative z-10 group-hover:text-white transition-colors duration-300">Özgeçmiş</span>
                  <div className="absolute inset-0 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left bg-gradient-to-r from-[#1ae885] to-[#0ea5e9]"></div>
                </a>
              </div>
            </div>
          </div>

          {/* Sağ taraf - Sekmeler */}
          <div className="lg:col-span-7">
            {/* Sekme Butonları */}
            <div className="flex mb-6 space-x-2 overflow-x-auto hide-scrollbar">
              {['skills', 'experience', 'education'].map((tab) => (
                <button
                  key={tab}
                  className={`px-4 py-2.5 font-medium text-sm transition-all duration-300 rounded-full flex items-center gap-2 whitespace-nowrap ${
                    activeTab === tab
                      ? 'bg-gradient-to-r from-[#1ae885] to-[#0ea5e9] text-[#080c14]'
                      : 'bg-[#0e1621] text-gray-400 hover:text-white border border-[#1ae885]/10'
                  }`}
                  onClick={() => setActiveTab(tab)}
                >
                  {tab === 'skills' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {tab === 'experience' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                  {tab === 'education' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path d="M12 14l9-5-9-5-9 5 9 5z" />
                      <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                    </svg>
                  )}
                  <span>
                    {tab === 'skills' ? 'Beceriler' : tab === 'experience' ? 'Deneyim' : 'Eğitim'}
                  </span>
                </button>
              ))}
            </div>

            {/* Sekme İçerikleri */}
            <div className="backdrop-blur-md bg-[#0e1621]/80 border border-[#1ae885]/10 rounded-2xl p-6 shadow-[0_0_15px_rgba(26,232,133,0.1)]">
              {/* Beceriler Sekmesi */}
              {activeTab === 'skills' && (
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <div key={index} className="group">
                      <div className="flex justify-between mb-2">
                        <div className="flex items-center gap-2">
                          <span className="text-sm font-medium text-white">
                            {skill.name}
                          </span>
                        </div>
                        <span className={`text-sm font-medium text-white px-2 py-0.5 rounded-full bg-gradient-to-r ${skill.color}`}>
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-[#172637] rounded-full h-1.5 overflow-hidden">
                        <div
                          className={`h-1.5 rounded-full bg-gradient-to-r ${skill.color} transition-all duration-700 ease-out relative`}
                          style={{ width: `${isVisible ? skill.level : 0}%` }}
                        >
                          <div className="absolute right-0 top-0 h-1.5 w-1 bg-white blur-[2px]"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Deneyim Sekmesi */}
              {activeTab === 'experience' && (
                <div className="space-y-8 relative">
                  {/* Zaman çizgisi çizgisi */}
                  <div className="absolute left-3.5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#1ae885] to-[#0ea5e9] opacity-30"></div>
                  
                  {experiences.map((exp, index) => (
                    <div 
                      key={index} 
                      className="relative pl-10 transform transition-all duration-300 hover:translate-x-1"
                    >
                      {/* İkon */}
                      <div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-[#172637] border border-[#1ae885]/30 flex items-center justify-center shadow-[0_0_10px_rgba(26,232,133,0.2)] z-10">
                        <div className="w-2 h-2 rounded-full bg-[#1ae885]"></div>
                      </div>
                      
                      {/* İçerik */}
                      <div className="bg-[#172637]/80 rounded-lg p-4 border border-[#1ae885]/10">
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                          <h4 className="text-white font-medium">{exp.title}</h4>
                          <span className="text-xs bg-[#080c14] text-[#1ae885] px-2 py-1 rounded-full">
                            {exp.period}
                          </span>
                        </div>
                        <div className="text-sm text-gray-400 mb-2">{exp.company}</div>
                        <p className="text-sm text-gray-300">{exp.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Eğitim Sekmesi */}
              {activeTab === 'education' && (
                <div className="space-y-8 relative">
                  {/* Zaman çizgisi çizgisi */}
                  <div className="absolute left-3.5 top-3 bottom-3 w-0.5 bg-gradient-to-b from-[#1ae885] to-[#0ea5e9] opacity-30"></div>
                  
                  {educations.map((edu, index) => (
                    <div 
                      key={index} 
                      className="relative pl-10 transform transition-all duration-300 hover:translate-x-1"
                    >
                      {/* İkon */}
                      <div className="absolute left-0 top-0 w-7 h-7 rounded-full bg-[#172637] border border-[#1ae885]/30 flex items-center justify-center shadow-[0_0_10px_rgba(26,232,133,0.2)] z-10">
                        <div className="w-2 h-2 rounded-full bg-[#1ae885]"></div>
                      </div>
                      
                      {/* İçerik */}
                      <div className="bg-[#172637]/80 rounded-lg p-4 border border-[#1ae885]/10">
                        <div className="flex flex-wrap justify-between items-start gap-2 mb-2">
                          <h4 className="text-white font-medium">{edu.degree}</h4>
                          <span className="text-xs bg-[#080c14] text-[#1ae885] px-2 py-1 rounded-full">
                            {edu.year}
                          </span>
                        </div>
                        <div className="text-sm text-gray-400 mb-2">{edu.school}</div>
                        <p className="text-sm text-gray-300">{edu.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;