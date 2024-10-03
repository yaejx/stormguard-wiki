import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollPosition = window.scrollY;
        heroRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      ref={heroRef}
      className="hero-section relative min-h-screen bg-cover bg-center flex items-center justify-center" 
      style={{backgroundImage: "url('/images/backgrounds/landing-page-hero-bg.webp')"}}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/80 to-gray-900"></div>
      <div className="z-10 text-center px-4 mt-16">
        <h2 className="text-5xl font-bold mb-4 fade-in-text">Welcome to the Stormborn</h2>
        <p className="text-xl mb-8 fade-in-text">Detailed strategies to master the empire</p>
        <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full transition duration-300 fade-in-text transform hover:scale-105">
          Start Your Journey
        </button>
      </div>
    </section>
  );
};

export default HeroSection;