'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SpaceBackground from '../components/SpaceBackground';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [hoverProject, setHoverProject] = useState(null);
  
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

  // Popup'ı açık/kapalı durumunu yönetmek için
  const toggleProjectDetails = (projectId, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    if (activeProject === projectId) {
      setActiveProject(null); // Eğer zaten açıksa kapat
    } else {
      setActiveProject(projectId); // Değilse aç
    }
  };

  // ESC tuşuyla popup'ı kapatmak için
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        setActiveProject(null);
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Overlay tıklamalarını ele almak için
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('overlay')) {
      setActiveProject(null);
    }
  };

  // Proje verileri
  const projects = [
    {
      id: 1,
      title: 'Kronos',
      description: 'Tarihi olayları kronolojik sıraya koyma mobil oyunu.',
      longDescription: 'Kronos, kullanıcıların tarihi olayları doğru kronolojik sıraya koyarak tarih bilgilerini test edebildiği interaktif bir mobil uygulamadır. Farklı zorluk seviyelerine ve kategorilere sahip, eğlenceli bir öğrenme deneyimi sunar.',
      features: [
        'Binlerce tarihi olay',
        'Zorluk seviyeleri',
        'Kategorilere ayrılmış içerik',
        'Gerçek zamanlı skor tablosu',
        'Öğrenme modu'
      ],
      tags: ['Flutter', 'Dart', 'Supabase', 'GetX'],
      image: '/projects/kronos.png',
      storeUrl: 'https://play.google.com/store/apps/details?id=com.onurapps.kronos',
      detailUrl: '/projects/kronos'
    },
    {
      id: 2,
      title: 'NefesAl',
      description: 'Sigarayı bırakmaya yardımcı mobil uygulama.',
      longDescription: 'NefesAl, sigara bırakma sürecinde kullanıcıları destekleyen, motivasyon ve takip özellikleri sunan kapsamlı bir mobil uygulamadır. Sağlık iyileşmelerini, tasarruf edilen parayı ve sigarasız geçen süreyi takip etmenizi sağlar.',
      features: [
        'Sağlık iyileşme takibi',
        'Tasarruf hesaplayıcı',
        'Sigara içme isteği yönetimi',
        'Günlük motivasyon',
        'Topluluk desteği'
      ],
      tags: ['Flutter', 'Dart', 'Firebase', 'Provider'],
      image: '/projects/nefesal.png',
      storeUrl: 'https://play.google.com/store/apps/details?id=com.onurapps.nefesai',
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
        <div className={`text-center mb-20 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projelerim</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#1ae885] to-transparent rounded-full mx-auto my-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Uzak galaksilerde keşfettiğim kodların ürünü olan projelerim
          </p>
        </div>

        {/* Projeler Grid - Tamamen Yeni Tasarım */}
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 mb-16 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {projects.map((project) => (
            <div 
              key={project.id}
              className="group relative"
              onMouseEnter={() => setHoverProject(project.id)}
              onMouseLeave={() => setHoverProject(null)}
            >
              {/* Ana Kart Konteyneri */}
              <div className="relative overflow-hidden rounded-2xl backdrop-blur-sm border border-[#1ae885]/10 bg-gradient-to-br from-[#0a1929]/80 to-[#0c1520]/90 shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-500 hover:shadow-[0_0_25px_rgba(26,232,133,0.2)] h-[380px]">
                
                {/* Görselin Yer Aldığı Kısım */}
                <div className="absolute inset-0 z-0">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover opacity-30 transition-all duration-700 group-hover:opacity-40 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a1929] via-[#0a1929]/90 to-transparent"></div>
                </div>
                
                {/* Parlama Efekti */}
                <div className="absolute -left-40 -top-40 w-80 h-80 bg-[#1ae885]/20 rounded-full blur-[100px] opacity-0 group-hover:opacity-70 transition-opacity duration-700"></div>
                
                {/* İçerik Konteyneri */}
                <div className="relative z-10 flex flex-col h-full p-8">
                  
                  {/* Başlık ve Açıklama */}
                  <div className="grow">
                    <h3 className="text-3xl font-bold text-white mb-3 tracking-tight transition-all duration-300 group-hover:text-[#1ae885]">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 mb-6 line-clamp-3">
                      {project.description}
                    </p>
                  </div>
                  
                  {/* Alt Kısım - Etiketler ve Butonlar */}
                  <div>
                    {/* Etiketler */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-xs px-3 py-1.5 rounded-full text-[#1ae885] border border-[#1ae885]/20 bg-[#0c1520]/80 backdrop-blur-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Butonlar */}
                    <div className="flex gap-4 relative z-30">
                      <a
                        href={project.storeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="relative overflow-hidden rounded-lg bg-gradient-to-r from-[#1ae885] to-[#0ea5e9] text-[#080c14] font-medium px-5 py-2.5 text-center inline-flex items-center justify-center transition-all shadow-md hover:shadow-[0_0_15px_rgba(26,232,133,0.4)] hover:scale-105 active:scale-95 duration-300 cursor-pointer pointer-events-auto"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M5,20.5A3.5,3.5 0 0,1 1.5,17A3.5,3.5 0 0,1 5,13.5A3.5,3.5 0 0,1 8.5,17A3.5,3.5 0 0,1 5,20.5M5,12A5,5 0 0,0 0,17A5,5 0 0,0 5,22A5,5 0 0,0 10,17A5,5 0 0,0 5,12M14.8,10H19.5L14.8,4.2V10M13.5,2V10A1,1 0 0,0 14.5,11H22V20A2,2 0 0,1 20,22H13.5V2Z"/>
                        </svg>
                        <span>Play Store</span>
                      </a>
                      <button
                        type="button"
                        onClick={(e) => toggleProjectDetails(project.id, e)}
                        className="relative overflow-hidden rounded-lg bg-[#172636] text-white font-medium px-5 py-2.5 text-center inline-flex items-center justify-center transition-all border border-[#1ae885]/30 shadow-md hover:bg-[#1e3247] hover:scale-105 active:scale-95 duration-300 cursor-pointer pointer-events-auto"
                      >
                        <svg className="w-5 h-5 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <span>Detaylar</span>
                      </button>
                    </div>
                  </div>
                </div>
                
                {/* Köşe Süslemeleri */}
                <div className="absolute top-0 right-0 w-40 h-40">
                  <div className="absolute top-0 right-0 w-20 h-1 bg-gradient-to-l from-[#1ae885] to-transparent"></div>
                  <div className="absolute top-0 right-0 h-20 w-1 bg-gradient-to-b from-[#1ae885] to-transparent"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-40 h-40">
                  <div className="absolute bottom-0 left-0 w-20 h-1 bg-gradient-to-r from-[#1ae885] to-transparent"></div>
                  <div className="absolute bottom-0 left-0 h-20 w-1 bg-gradient-to-t from-[#1ae885] to-transparent"></div>
                </div>
              </div>
              
              {/* Vurgulayıcı Arka Halka */}
              <div className={`absolute -inset-0.5 bg-gradient-to-r from-[#1ae885] to-[#0ea5e9] rounded-2xl blur opacity-0 group-hover:opacity-20 transition duration-1000 ${hoverProject === project.id ? 'animate-tilt' : ''}`}></div>
            </div>
          ))}
        </div>

        {/* Proje Detayları Pop-up */}
        {activeProject && (
          <div 
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 overlay backdrop-blur-sm"
            onClick={handleOverlayClick}
          >
            <div 
              className="relative bg-gradient-to-bl from-[#162435] via-[#0c1520] to-[#0a0f18] rounded-2xl border border-[#1ae885]/20 p-1 w-full max-w-3xl max-h-[90vh] overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Arka Plan Işıma */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#1ae885]/5 to-[#0ea5e9]/5 opacity-30 blur-xl rounded-xl"></div>
              
              {/* İçerik Konteyneri */}
              <div className="relative bg-[#0c1520]/90 rounded-2xl p-8 h-full overflow-auto z-10 max-h-[90vh]">
                {/* Kapat Butonu */}
                <button 
                  onClick={() => setActiveProject(null)}
                  className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors bg-black/30 rounded-full p-2 hover:bg-black/50 z-20"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
                
                {/* Proje Görseli */}
                <div className="w-full h-48 sm:h-64 lg:h-72 relative mb-6 rounded-xl overflow-hidden">
                  <Image 
                    src={projects.find(p => p.id === activeProject)?.image || ''}
                    alt={projects.find(p => p.id === activeProject)?.title || ''}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0c1520] to-transparent opacity-60"></div>
                </div>
                
                {/* Proje Başlığı */}
                <h2 className="text-4xl font-bold text-white mb-2 pr-8">
                  {projects.find(p => p.id === activeProject)?.title}
                </h2>
                
                <div className="h-1 w-20 bg-gradient-to-r from-[#1ae885] to-transparent rounded-full my-4"></div>
                
                {/* Uzun Açıklama */}
                <p className="text-gray-300 mb-8 text-lg">
                  {projects.find(p => p.id === activeProject)?.longDescription}
                </p>
                
                {/* Teknolojiler ve İndir - Yan Yana */}
                <div className="flex flex-col md:flex-row gap-8 mb-8">
                  {/* Teknolojiler - Sol Kolon */}
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-3">Teknolojiler</h3>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {projects.find(p => p.id === activeProject)?.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-sm px-3 py-1.5 rounded-full text-[#1ae885] border border-[#1ae885]/30 bg-[#1ae885]/5"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* İndir Butonu - Sağ Kolon */}
                  <div className="flex-1 flex flex-col justify-end">
                    <a
                      href={projects.find(p => p.id === activeProject)?.storeUrl || '#'}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="relative z-20 overflow-hidden px-6 py-3.5 rounded-lg bg-gradient-to-r from-[#1ae885] to-[#0ea5e9] text-[#080c14] font-medium text-center shadow-md hover:shadow-[0_0_20px_rgba(26,232,133,0.4)] transition-all duration-300 flex items-center justify-center gap-2 hover:scale-105 active:scale-95 cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                        <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-3 17v-10l9 5.146-9 4.854z"/>
                      </svg>
                      <span className="relative z-10">Google Play&apos;den İndir</span>
                    </a>
                  </div>
                </div>
                
                {/* Özellikler */}
                <h3 className="text-xl font-semibold text-white mb-3">Özellikler</h3>
                <ul className="mb-8 grid grid-cols-1 md:grid-cols-2 gap-3">
                  {projects.find(p => p.id === activeProject)?.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 bg-[#172636]/50 rounded-lg p-3 backdrop-blur-sm">
                      <span className="text-[#1ae885] mt-1">✓</span>
                      <span className="text-gray-200">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Daha Fazla Proje Butonu */}
        <div className="flex justify-center mt-8 sm:mt-16">
          <Link 
            href="#projelerim"
            className="group relative z-10 px-8 py-3 rounded-full overflow-hidden bg-transparent border border-[#1ae885]/30 text-white font-medium transition-all duration-500 hover:border-[#1ae885]/70 cursor-pointer"
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