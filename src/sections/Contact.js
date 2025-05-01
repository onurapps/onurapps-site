'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import SpaceBackground from '../components/SpaceBackground';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Form değişikliklerini yönetme
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Form gönderme
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Burada gerçek bir form gönderme işlemi olacak (API isteği vs.)
    // Şimdilik simüle edelim
    setTimeout(() => {
      setSubmitStatus('success');
      setIsSubmitting(false);
      // Form reset
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      // 3 saniye sonra mesajı kaldır
      setTimeout(() => {
        setSubmitStatus(null);
      }, 3000);
    }, 1500);
  };

  // Scroll efekti için
  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const rect = contactSection.getBoundingClientRect();
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

  return (
    <section 
      id="contact" 
      className="py-24 bg-[#080c14] relative overflow-hidden"
    >
      {/* Uzay temalı arka plan */}
      <SpaceBackground />

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-16 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">İletişim</h2>
          <div className="h-1 w-20 bg-gradient-to-r from-[#1ae885] to-transparent rounded-full mx-auto my-6"></div>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Projeleriniz için galaksiler arası bir yolculuğa çıkalım
          </p>
        </div>

        <div className={`grid md:grid-cols-2 gap-10 transition-all duration-1000 ease-out transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          {/* Sol Kısım - İletişim Bilgileri ve Sosyal Medya */}
          <div className="backdrop-blur-md bg-[#0e1621]/80 border border-[#1ae885]/10 rounded-2xl p-8 shadow-[0_0_25px_rgba(26,232,133,0.05)] relative overflow-hidden h-full flex flex-col">
            {/* Arka Plan Işımaları */}
            <div className="absolute w-32 h-32 rounded-full bg-[#1ae885]/5 -top-10 -right-10 blur-xl"></div>
            <div className="absolute w-32 h-32 rounded-full bg-[#0ea5e9]/5 bottom-10 -left-10 blur-xl"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6">Bana Ulaşın</h3>
            
            <div className="space-y-6 mb-auto">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#172637] border border-[#1ae885]/30 rounded-full flex items-center justify-center text-[#1ae885]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">E-posta</h4>
                  <a href="mailto:onurapps@gmail.com" className="text-gray-400 hover:text-[#1ae885] transition-colors">onurapps@gmail.com</a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 bg-[#172637] border border-[#1ae885]/30 rounded-full flex items-center justify-center text-[#1ae885]">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-white font-medium mb-1">Konum</h4>
                  <p className="text-gray-400">Zonguldak, Türkiye</p>
                </div>
              </div>
            </div>
            
            <div className="mt-auto pt-8">
              <h4 className="text-white font-medium mb-4">Sosyal Medya</h4>
              <div className="flex gap-3">
                <a 
                  href="https://twitter.com/onurapps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#172637] border border-[#1ae885]/30 rounded-full flex items-center justify-center text-gray-400 hover:text-[#1ae885] hover:border-[#1ae885]/50 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a 
                  href="https://github.com/onurapps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#172637] border border-[#1ae885]/30 rounded-full flex items-center justify-center text-gray-400 hover:text-[#1ae885] hover:border-[#1ae885]/50 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a 
                  href="https://linkedin.com/in/onurapps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#172637] border border-[#1ae885]/30 rounded-full flex items-center justify-center text-gray-400 hover:text-[#1ae885] hover:border-[#1ae885]/50 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                  </svg>
                </a>
                <a 
                  href="https://instagram.com/onurapps" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-[#172637] border border-[#1ae885]/30 rounded-full flex items-center justify-center text-gray-400 hover:text-[#1ae885] hover:border-[#1ae885]/50 transition-all"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Sağ Kısım - İletişim Formu */}
          <div className="backdrop-blur-md bg-[#0e1621]/80 border border-[#1ae885]/10 rounded-2xl p-8 shadow-[0_0_25px_rgba(26,232,133,0.05)] relative overflow-hidden h-full flex flex-col">
            {/* Arka Plan Işımaları */}
            <div className="absolute w-40 h-40 rounded-full bg-[#1ae885]/5 -top-20 -right-20 blur-xl"></div>
            <div className="absolute w-40 h-40 rounded-full bg-[#0ea5e9]/5 -bottom-20 -left-20 blur-xl"></div>
            
            <h3 className="text-2xl font-bold text-white mb-6">Mesaj Gönder</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10 flex flex-col h-full">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-gray-400 mb-2 text-sm">İsim</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#172637] border border-[#1ae885]/20 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1ae885]/50 focus:border-transparent transition-all"
                    placeholder="Adınız"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-400 mb-2 text-sm">E-posta</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#172637] border border-[#1ae885]/20 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1ae885]/50 focus:border-transparent transition-all"
                    placeholder="E-posta adresiniz"
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-gray-400 mb-2 text-sm">Konu</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full bg-[#172637] border border-[#1ae885]/20 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1ae885]/50 focus:border-transparent transition-all"
                  placeholder="Mesaj konusu"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2 text-sm">Mesaj</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="w-full bg-[#172637] border border-[#1ae885]/20 rounded-lg py-3 px-4 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1ae885]/50 focus:border-transparent transition-all resize-none flex-grow"
                  placeholder="Mesajınızı buraya yazın..."
                ></textarea>
              </div>
              
              <div className="mt-auto">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full relative overflow-hidden group py-3 px-6 rounded-lg bg-gradient-to-r from-[#1ae885] to-[#0ea5e9] text-[#080c14] font-medium transition-all duration-300 hover:shadow-[0_0_20px_rgba(26,232,133,0.4)] disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  <span className="relative z-10 flex items-center justify-center">
                    {isSubmitting ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#080c14]" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Gönderiliyor...
                      </>
                    ) : (
                      'Gönder'
                    )}
                  </span>
                  <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
                
                {submitStatus === 'success' && (
                  <div className="mt-4 p-3 bg-[#172637] rounded-lg border border-[#1ae885]/50 text-[#1ae885] text-center">
                    Mesajınız başarıyla gönderildi! En kısa sürede size dönüş yapacağım.
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 