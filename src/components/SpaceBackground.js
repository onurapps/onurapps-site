import React from 'react';

const SpaceBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Büyük daireler - Konsantrik çemberler */}
      <div className="absolute w-[900px] h-[900px] rounded-full border border-gray-800/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-[700px] h-[700px] rounded-full border border-gray-800/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute w-[500px] h-[500px] rounded-full border border-gray-800/20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
      
      {/* Dört köşeli parıltı yıldızlar - Sol taraf */}
      <div className="absolute top-[15%] left-[10%] w-4 h-4">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0L9.2 6.8L16 8L9.2 9.2L8 16L6.8 9.2L0 8L6.8 6.8L8 0Z" fill="#1ae885" />
        </svg>
      </div>
      
      <div className="absolute bottom-[25%] left-[8%] w-5 h-5">
        <svg width="20" height="20" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0L9.2 6.8L16 8L9.2 9.2L8 16L6.8 9.2L0 8L6.8 6.8L8 0Z" fill="#1ae885" opacity="0.6" />
        </svg>
      </div>
      
      {/* Dört köşeli parıltı yıldızlar - Sağ taraf */}
      <div className="absolute top-[10%] right-[20%] w-2 h-2">
        <svg width="8" height="8" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0L9.2 6.8L16 8L9.2 9.2L8 16L6.8 9.2L0 8L6.8 6.8L8 0Z" fill="#52e893" />
        </svg>
      </div>
      
      <div className="absolute bottom-[15%] right-[5%] w-16 h-16">
        <svg width="64" height="64" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 0L9.2 6.8L16 8L9.2 9.2L8 16L6.8 9.2L0 8L6.8 6.8L8 0Z" fill="#1ae885" />
        </svg>
      </div>
      
      {/* Gezegen benzeri arka plan daireleri */}
      <div className="absolute w-[500px] h-[500px] rounded-full border border-[#1ae885]/5 top-[20%] right-[-250px]"></div>
      <div className="absolute w-[400px] h-[400px] rounded-full border border-[#1ae885]/5 bottom-[-100px] left-[-150px]"></div>
      
      {/* Uzay tozları - küçük noktalar */}
      <div className="absolute inset-0 bg-[url('/images/stardust.png')] opacity-20"></div>
    </div>
  );
};

export default SpaceBackground; 