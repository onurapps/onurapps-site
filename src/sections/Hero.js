'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logoImage from '../images/logo.png';
import SpaceBackground from '../components/SpaceBackground';

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [text, setText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    'Seni görmek ne güzel şey..',
    'Keşfetmeye hazır mısın?'
  ];
  
  const typingSpeed = 100; // ms
  const pauseBetweenTexts = 1000; // ms
  
  // Daktilo efekti için
  useEffect(() => {
    let typingTimer;
    let currentCharIndex = 0;
    let currentText = texts[currentTextIndex];
    
    const typeNextChar = () => {
      if (currentCharIndex < currentText.length) {
        setText(currentText.substring(0, currentCharIndex + 1));
        currentCharIndex++;
        typingTimer = setTimeout(typeNextChar, typingSpeed);
      } else {
        // Yazma işlemi tamamlandı
        if (currentTextIndex < texts.length - 1) {
          // Bir sonraki metne geçmek için bekleme
          setTimeout(() => {
            setText('');
            currentCharIndex = 0;
            setCurrentTextIndex(prevIndex => prevIndex + 1);
            typingTimer = setTimeout(typeNextChar, typingSpeed);
          }, pauseBetweenTexts);
        } else {
          // Tüm metinler tamamlandı
          setIsTypingComplete(true);
        }
      }
    };
    
    // Yazma işlemini başlat
    typingTimer = setTimeout(typeNextChar, typingSpeed);
    
    return () => {
      clearTimeout(typingTimer);
    };
  }, [currentTextIndex, texts]);

  // Fade-in animasyonu için
  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center py-16 overflow-hidden bg-[#080c14]">
      {/* Uzay temalı arka plan */}
      <SpaceBackground />

      <div className="container mx-auto px-6 z-10 text-center max-w-3xl">
        {/* Main content */}
        <h1 className={`font-playfair text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          {/* Profil Resmi - Dairesel - Welcome yazısının üzerinde */}
          <div className="mb-8 mx-auto relative flex items-center justify-center">
            {/* LED Işık Efekti - Dış Halka */}
            <div className="absolute w-36 h-36 rounded-full border border-green-400/30 animate-[spin_8s_linear_infinite]">
              <div className="absolute w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_2px_rgba(52,211,153,0.7)] -top-1 left-1/2 -translate-x-1/2"></div>
            </div>
            
            {/* LED Işık Efekti - İç Halka */}
            <div className="absolute w-32 h-32 rounded-full border border-blue-400/20 animate-[spin_5s_linear_infinite_reverse]">
              <div className="absolute w-1.5 h-1.5 bg-blue-400 rounded-full shadow-[0_0_8px_2px_rgba(96,165,250,0.7)] -top-0.5 left-1/2 -translate-x-1/2"></div>
            </div>
            
            {/* Ana Logo Konteyneri */}
            <div className="w-28 h-28 rounded-full overflow-hidden bg-[#1a2536] border border-gray-700/50 p-0.5 mx-auto z-10 shadow-[0_0_15px_rgba(26,232,133,0.3)]">
              <Image 
                src={logoImage} 
                alt="Logo" 
                width={112} 
                height={112} 
                className="rounded-full object-cover w-full h-full"
              />
            </div>
          </div>
          
          Merhaba!
          <span className="block mt-1 h-[2.5em] sm:h-[1.5em] min-h-[60px] text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            {text}
            <span className="inline-block w-[2px] h-[1em] bg-white ml-1 animate-pulse"></span>
          </span>
        </h1>
        
        <div className={`font-inter mx-auto transition-opacity duration-700 delay-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
          <p className="text-gray-400 text-sm md:text-base mb-6 font-inter tracking-normal leading-relaxed">
            Ben Onur Keskin, bağımsız bir yazılım geliştiriciyim.
            <br />
            Web tasarımı, mobil uygulama geliştirme ve kullanıcı deneyimi oyun alanım.
          </p>
          
          {/* Available for opportunities - İlgi metin altına taşındı */}
          <div className="inline-flex items-center gap-2 mb-10 bg-[#003311]/60 py-2 px-4 rounded-full text-sm text-green-400 max-w-fit mx-auto backdrop-blur-sm font-medium">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
            </span>
            Freelance işlere açığım
          </div>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="#contact"
              className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
            >
              👋 İletişime Geç
            </a>
            <a
              href="#template"
              className="bg-[#172636] hover:bg-[#1e2f3d] text-white px-8 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-2"
            >
              Portfolyo İndir <span className="mt-0.5 ml-1">↗</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 