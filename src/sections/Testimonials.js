'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import SpaceBackground from '../components/SpaceBackground';

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Fade-in animasyonu için
  useEffect(() => {
    const handleScroll = () => {
      const testimonialSection = document.getElementById('testimonials');
      if (testimonialSection) {
        const rect = testimonialSection.getBoundingClientRect();
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

  const testimonials = [
    {
      name: "Ayşe Yılmaz",
      role: "CEO, Tech Ventures",
      text: "Onur ile çalışmak muhteşemdi. Projeyi zamanında teslim etti ve tamamen beklentilerimizi karşıladı.",
      rating: 5,
    },
    {
      name: "Mehmet Kaya",
      role: "Kurucu, Dijital Medya",
      text: "Web sitemize yaptığı güncellemeler sayesinde dönüşüm oranımız %40 arttı.",
      rating: 5,
    },
    {
      name: "Zeynep Demir",
      role: "Pazarlama Direktörü",
      text: "Karmaşık teknik ihtiyaçlarımızı anlaşılır bir dille ele alması ve çözümler getirmesi değerliydi.",
      rating: 4,
    },
  ];

  return (
    <section 
      id="testimonials" 
      className="py-24 bg-[#080c14] relative overflow-hidden"
    >
      {/* Uzay temalı arka plan */}
      <SpaceBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Neler Diyorlar?</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#1ae885] to-transparent rounded-full mx-auto my-6"></div>
        </div>

        <div className={`grid md:grid-cols-3 gap-8 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="group bg-gradient-to-b from-[#0e1621]/80 to-[#172636]/50 backdrop-blur-sm p-6 rounded-xl border border-[#1ae885]/5 hover:border-[#1ae885]/20 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_25px_-15px_rgba(26,232,133,0.3)]"
            >
              {/* Yıldız Değerlendirmesi - Üstte */}
              <div className="flex mb-4">
                {Array.from({ length: 5 }).map((_, i) => (
                  <svg 
                    key={i}
                    className={`w-4 h-4 ${i < item.rating ? 'text-[#1ae885]' : 'text-gray-700'}`}
                    xmlns="http://www.w3.org/2000/svg" 
                    viewBox="0 0 20 20" 
                    fill="currentColor"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              {/* Yorum Metni */}
              <p className="text-gray-300 mb-6 relative">
                {item.text}
              </p>
              
              {/* Çizgi Ayırıcı */}
              <div className="h-px w-full bg-gradient-to-r from-[#1ae885]/20 to-transparent mb-4"></div>
              
              {/* Kullanıcı Bilgisi */}
              <div className="flex items-center">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#1ae885]/30 to-[#0ea5e9]/30 flex items-center justify-center text-white font-medium mr-3">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white text-sm font-medium">{item.name}</h4>
                  <p className="text-gray-400 text-xs">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 