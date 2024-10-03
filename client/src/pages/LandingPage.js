// src/pages/LandingPage.js
import React, { useState, useEffect } from 'react';
import AnimatedBackground from '../components/AnimatedBackground';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedContent from '../components/FeaturedContent';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

const featuredContent = [
    {
        title: 'The Ultimate Progression Guide',
        description: 'New to the game? Start strong by maximizing early gains and avoiding common pitfalls to set yourself up for longterm sucess.',
        image: '/images/content/architect-image-card.webp'
    },
    {
        title: 'You, the Event Connoisseur',
        description: 'Dominate the competition and learn how to place high by utilizing some of the best-kept secrets to earn the rewards you deserve.',
        image: '/images/content/shapeshifter-image-card.webp'
    },
    {
        title: 'The Lost Art of PvP',
        description: 'Reignite the forgotten expressions of excellence in battle by championing combat fundamentals to conquer any foe.',
        image: '/images/content/dragon-battle-image-card.webp'
    },
    {
        title: 'Equivocal Equipment',
        description: 'Master the hand of the forge by fine-tuning your equipment with the ideal substats and bonuses.',
        image: '/images/content/outer-realms-image-card.webp'
    },
    {
        title: 'Resource Management',
        description: 'What do I prioritize? How do I avoid wasting valuable material? Learn these tips to ensure you\'re always prepared for critical moments.',
        image: '/images/content/anniversary-image-card.webp'
    }
];

const LandingPage = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans relative">
      <AnimatedBackground className="opacity-50" />
      <Header />
      <HeroSection />
      <FeaturedContent content={featuredContent} />
      <Footer />
      <ScrollToTop show={showScrollTop} />
    </div>
  );
};

export default LandingPage;