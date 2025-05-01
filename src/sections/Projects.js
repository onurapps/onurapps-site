'use client';

import { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import SpaceBackground from '../components/SpaceBackground';

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProject, setActiveProject] = useState(null);
  const [hoverProject, setHoverProject] = useState(null);
  const detailsRef = useRef(null);
  
  // Scroll efekti için
  useEffect(() => {
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
    setIsVisible(true);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Detayları göster/gizle
  const showProjectDetails = (projectId, e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setActiveProject(projectId);
    document.body.style.overflow = 'hidden'; // Arka planı kaydırmayı engelle
  };
  
  // Detayları kapat
  const hideProjectDetails = (e) => {
    if (e) {
      e.preventDefault();
      e.stopPropagation();
    }
    setActiveProject(null);
    document.body.style.overflow = ''; // Arka plan kaydırmayı tekrar etkinleştir
  };

  // Overlay'e tıklandığında kapat
  const handleOverlayClick = (e) => {
    if (e.target.classList.contains('project-overlay')) {
      hideProjectDetails(e);
    }
  };

  // ESC tuşuyla detayları kapat
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') {
        hideProjectDetails();
      }
    };
    
    window.addEventListener('keydown', handleEsc);
    
    return () => {
      window.removeEventListener('keydown', handleEsc);
    };
  }, []);

  // Detaylar açıldığında animasyon için
  useEffect(() => {
    if (activeProject && detailsRef.current) {
      detailsRef.current.classList.add('animate-scale-up');
      
      const timer = setTimeout(() => {
        if (detailsRef.current) {
          detailsRef.current.classList.remove('animate-scale-up');
        }
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [activeProject]);

  // Proje verileri
  const projects = [
    {
      id: 1,
      title: 'Kronos',
      description: 'Tarihi olayların kronolojik sırasını bulma oyunu.',
      longDescription: 'Kronos, tarihi olayları doğru kronolojik sıraya koyarak bilginizi test edebildiğiniz eğitici bir mobil uygulamadır. Binlerce tarihi olay, farklı kategoriler ve zorluk seviyeleriyle tarih bilginizi eğlenceli bir şekilde geliştirebilirsiniz.',
      features: [
        'Binlerce tarihsel olay',
        'Çeşitli zorluk seviyeleri',
        'Kategori tabanlı oyun modları',
        'Global skor tablosu',
        'Öğrenme ve test modları'
      ],
      tags: ['Flutter', 'Dart', 'Supabase', 'GetX'],
      image: '/projects/kronos.png',
      storeUrl: 'https://play.google.com/store/apps/details?id=com.onurapps.kronos',
      detailUrl: '/projects/kronos',
      screenshots: [
        '/projects/kronos/screenshot1.png',
        '/projects/kronos/screenshot2.png',
        '/projects/kronos/screenshot3.png'
      ]
    },
    {
      id: 2,
      title: 'NefesAl',
      description: 'Sigara bırakma yolculuğunuzda size destek olan uygulama.',
      longDescription: 'NefesAl, sigara bağımlılığından kurtulmak isteyenler için tasarlanmış kapsamlı bir mobil uygulamadır. Sağlık iyileşmelerinizi, tasarruf ettiğiniz parayı ve sigara içmeden geçen süreyi izleyerek motivasyonunuzu artırır.',
      features: [
        'Sağlık iyileşme takibi',
        'Finansal tasarruf hesaplayıcı',
        'Sigara isteği kontrol araçları',
        'Özelleştirilebilir hedefler',
        'Günlük motivasyon bildirimleri'
      ],
      tags: ['Flutter', 'Dart', 'Firebase', 'Provider'],
      image: '/projects/nefesal.png',
      storeUrl: 'https://play.google.com/store/apps/details?id=com.onurapps.nefesai',
      detailUrl: '/projects/nefesal',
      screenshots: [
        '/projects/nefesal/screenshot1.png',
        '/projects/nefesal/screenshot2.png',
        '/projects/nefesal/screenshot3.png'
      ]
    }
  ];

  // Ayrıca Tailwind animasyonlarını tanımla (tailwind.config.js'e eklenecek)
  // Bu kısım sadece referans için burada, Tailwind config dosyasına eklenmeli
  /*
  // tailwind.config.js
  extend: {
    keyframes: {
      scaleUp: {
        '0%': { transform: 'scale(0.9)', opacity: 0 },
        '100%': { transform: 'scale(1)', opacity: 1 },
      }
    },
    animation: {
      'scale-up': 'scaleUp 0.3s ease-out',
    },
  }
  */

  return (
    <section 
      id="projects" 
      className="relative py-28 bg-[#080c14] overflow-hidden"
    >
      {/* Uzay arka planı */}
      <SpaceBackground />
      
      <div className="container mx-auto px-4 relative z-10">
        {/* Başlık */}
        <div className={`text-center mb-20 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Projelerim</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#1ae885] to-transparent rounded-full mx-auto my-6"></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-lg">
            Evrenin derinliklerinden ilham alarak geliştirdiğim dijital gezegenleri keşfedin
          </p>
        </div>

        {/* Proje Kartları - Tamamen Modernize Edildi */}
        <div className={`grid grid-cols-1 md:grid-cols-2 gap-12 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative perspective-1000"
              onMouseEnter={() => setHoverProject(project.id)}
              onMouseLeave={() => setHoverProject(null)}
            >
              {/* Arka Plan Işıma Efekti */}
              <div className="absolute -inset-6 bg-[#1ae885]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-all duration-1000"></div>
              
              {/* Kenar Işıması */}
              <div className="absolute -inset-0.5 bg-gradient-to-br from-[#1ae885] via-[#0ea5e9] to-purple-600 rounded-2xl opacity-0 group-hover:opacity-40 blur-md transition-all duration-700"></div>
              
              {/* Ana Kart - Modern Glassmorphism */}
              <div className="relative h-[450px] rounded-2xl transform transition-all duration-500 group-hover:translate-y-[-8px] group-hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] border border-white/5 bg-gradient-to-b from-slate-900/90 to-[#070b14]/95 backdrop-blur-xl z-10 overflow-hidden">
                {/* İç Parlaklık Efektleri */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-[#1ae885]/10 rounded-full blur-[80px] opacity-30 group-hover:opacity-60 transition-all duration-700"></div>
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-[#0ea5e9]/10 rounded-full blur-[80px] opacity-30 group-hover:opacity-60 transition-all duration-700"></div>
                
                {/* Görsel Kısmı */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover transform transition-all duration-700 scale-110 group-hover:scale-[1.15] filter brightness-90 group-hover:brightness-110"
                  />
                  
                  {/* Görsel Overlay Katmanları */}
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-[#080f1a] opacity-90"></div>
                  <div className="absolute inset-0 bg-gradient-to-br from-[#1ae885]/5 to-[#0ea5e9]/5 mix-blend-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
                  
                  {/* Proje Başlığı - Modern Animasyonlu */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <div className="overflow-hidden">
                      <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight transform translate-y-0 group-hover:translate-y-0 transition-all duration-500">
                        <span className="bg-clip-text group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-[#1ae885] group-hover:to-[#0ea5e9] transition-all duration-500">
                          {project.title}
                        </span>
                      </h3>
                    </div>
                  </div>
                </div>
                
                {/* İçerik Kısmı */}
                <div className="p-6 pt-4 flex flex-col h-[186px]">
                  {/* Açıklama */}
                  <p className="text-gray-300 mb-5 line-clamp-2 flex-grow">
                    {project.description}
                  </p>
                  
                  {/* Teknoloji Etiketleri - Modern Tasarım */}
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="text-xs px-3 py-1 rounded-full bg-slate-800/50 text-[#1ae885] border border-[#1ae885]/10 backdrop-blur-md transition-all duration-300 hover:bg-[#1ae885]/10 hover:border-[#1ae885]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Butonlar - Modern Tasarım */}
                  <div className="flex gap-3 mt-auto">
                    {/* Detaylar Butonu */}
                    <button
                      onClick={(e) => showProjectDetails(project.id, e)}
                      className="flex-1 relative overflow-hidden rounded-xl h-12 flex items-center justify-center group/btn"
                    >
                      <span className="absolute inset-0 bg-[#0a1525]/80 border border-white/5 rounded-xl group-hover/btn:border-[#0ea5e9]/30 transition-all duration-300"></span>
                      <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[#0ea5e9]/10 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-1000"></span>
                      <span className="relative font-medium text-white group-hover/btn:text-[#0ea5e9] transition-colors duration-300 flex items-center">
                        <svg className="w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Detaylar
                      </span>
                    </button>
                    
                    {/* İndir Butonu - Modern */}
                    <a
                      href={project.storeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        window.open(project.storeUrl, '_blank', 'noopener,noreferrer');
                      }}
                      className="flex-1 relative overflow-hidden rounded-xl h-12 flex items-center justify-center group/btn"
                    >
                      <span className="absolute inset-0 bg-gradient-to-r from-[#1ae885] to-[#0ea5e9] opacity-90 group-hover/btn:opacity-100 transition-all duration-300"></span>
                      <span className="absolute inset-x-0 bottom-0 h-1 bg-white/20 -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-700 ease-in-out"></span>
                      <span className="relative font-medium text-[#080c14] group-hover/btn:scale-[1.03] transition-transform duration-300">
                        İndir
                      </span>
                    </a>
                  </div>
                </div>
                
                {/* Köşe Işımaları - İnce Detaylar */}
                <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden opacity-40 pointer-events-none">
                  <div className="absolute top-3 right-0 w-12 h-[1px] bg-gradient-to-l from-[#1ae885] to-transparent transform origin-right group-hover:scale-x-150 transition-transform duration-700"></div>
                  <div className="absolute top-0 right-3 h-12 w-[1px] bg-gradient-to-b from-[#1ae885] to-transparent transform origin-top group-hover:scale-y-150 transition-transform duration-700"></div>
                </div>
                <div className="absolute bottom-0 left-0 w-20 h-20 overflow-hidden opacity-40 pointer-events-none">
                  <div className="absolute bottom-3 left-0 w-12 h-[1px] bg-gradient-to-r from-[#1ae885] to-transparent transform origin-left group-hover:scale-x-150 transition-transform duration-700"></div>
                  <div className="absolute bottom-0 left-3 h-12 w-[1px] bg-gradient-to-t from-[#1ae885] to-transparent transform origin-bottom group-hover:scale-y-150 transition-transform duration-700"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* "Tüm Projeler" Butonu - Modern Tasarım */}
        <div className="flex justify-center mt-20">
          <Link 
            href="/projeler"
            className="relative group overflow-hidden rounded-full flex items-center px-10 py-4 transition-all duration-500 hover:shadow-[0_0_30px_rgba(26,232,133,0.3)]"
          >
            <span className="absolute inset-0 border border-white/10 rounded-full bg-[#0a1525]/50 backdrop-blur-lg group-hover:bg-[#1ae885] transition-all duration-500"></span>
            <span className="absolute inset-0 rounded-full bg-gradient-to-r from-[#1ae885] to-[#0ea5e9] opacity-0 group-hover:opacity-100 transition-opacity duration-700"></span>
            <span className="absolute inset-x-0 bottom-0 h-[1px] bg-[#1ae885]/40 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center"></span>
            <span className="relative font-medium text-white group-hover:text-[#080c14] transition-colors duration-500 flex items-center">
              <span>Tüm Projeleri Gör</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2 transform group-hover:translate-x-1.5 transition-transform duration-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </Link>
        </div>
      </div>

      {/* Proje Detayları Modal - Mevcut kodun aynısı */}
      {activeProject && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm project-overlay"
          onClick={handleOverlayClick}
        >
          <div 
            ref={detailsRef}
            className="relative bg-gradient-to-b from-[#0f1e2d] to-[#080c14] rounded-3xl border border-[#1ae885]/20 p-1 w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-[0_0_50px_rgba(26,232,133,0.15)]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal içeriği */}
            <div className="relative rounded-3xl p-6 md:p-8 h-full overflow-auto max-h-[90vh] bg-[#0c1520]/95">
              {/* Kapat Butonu */}
              <button 
                onClick={hideProjectDetails}
                className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black/30 text-gray-300 hover:text-white hover:bg-black/50 transition-all duration-300"
                aria-label="Kapat"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Başlık */}
              <div className="flex items-start mb-6">
                <div className="flex-grow pr-10">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">
                    {projects.find(p => p.id === activeProject)?.title}
                  </h2>
                  <div className="h-1 w-20 bg-gradient-to-r from-[#1ae885] to-transparent rounded-full my-4"></div>
                </div>
              </div>

              {/* Ana İçerik */}
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
                {/* Sol Sütun - Bilgiler (3 birim) */}
                <div className="lg:col-span-3 space-y-8">
                  {/* Açıklama */}
                  <div>
                    <p className="text-gray-200 text-lg leading-relaxed mb-6">
                      {projects.find(p => p.id === activeProject)?.longDescription}
                    </p>
                  </div>

                  {/* Özellikler */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-[#1ae885]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z" />
                      </svg>
                      Özellikler
                    </h3>
                    <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {projects.find(p => p.id === activeProject)?.features.map((feature, index) => (
                        <li key={index} className="flex items-start p-3 rounded-lg bg-[#172636]/40 backdrop-blur-sm">
                          <span className="text-[#1ae885] mr-2">✓</span>
                          <span className="text-gray-200">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Teknolojiler */}
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                      <svg className="w-5 h-5 mr-2 text-[#1ae885]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M6.76,4.84L1.96,6.69L12,11.91L22.04,6.69L17.24,4.84L12,7.29L6.76,4.84M1,15.91L1,8.27L9.09,12V19.64L1,15.91M15.91,19.64L15.91,12L24,8.27V15.91L15.91,19.64Z" />
                      </svg>
                      Teknolojiler
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {projects.find(p => p.id === activeProject)?.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="text-sm px-4 py-2 rounded-full bg-[#1ae885]/10 text-[#1ae885] border border-[#1ae885]/30"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Sağ Sütun - Görsel ve İndir (2 birim) */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Proje Görseli */}
                  <div className="relative w-full aspect-[3/5] rounded-xl overflow-hidden border border-[#1ae885]/20">
                    <Image 
                      src={projects.find(p => p.id === activeProject)?.image || ''}
                      alt={projects.find(p => p.id === activeProject)?.title || ''}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080c14] to-transparent opacity-50"></div>
                  </div>

                  {/* İndirme Butonu */}
                  <a
                    href={projects.find(p => p.id === activeProject)?.storeUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={(e) => {
                      e.stopPropagation();
                      const url = projects.find(p => p.id === activeProject)?.storeUrl || '#';
                      if (url !== '#') {
                        window.open(url, '_blank', 'noopener,noreferrer');
                      }
                    }}
                    className="relative group w-full overflow-hidden rounded-xl py-4 flex items-center justify-center shadow-lg hover:shadow-[0_0_25px_rgba(26,232,133,0.25)] transition-all duration-300"
                  >
                    {/* Buton arka planı */}
                    <span className="absolute inset-0 bg-gradient-to-r from-[#1ae885] to-[#0ea5e9] opacity-90 group-hover:opacity-100 transition-opacity duration-300"></span>
                    
                    {/* Parlama efekti */}
                    <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></span>
                    
                    {/* İkon ve metin */}
                    <span className="relative flex items-center gap-3 text-[#080c14] font-medium group-hover:scale-105 transition-transform duration-300">
                      <span className="text-base">Google Play'den İndir</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects; 