import React from 'react';
import AnimatedBackground from './AnimatedBackground';
import FadeInText from './FadeInText';

const FeaturedContent = ({ content }) => (
  <section className="bg-gray-900 py-12 px-6 relative overflow-hidden">
    <div className="absolute inset-0 overflow-hidden">
      <AnimatedBackground className="opacity-50" />
    </div>
    <FadeInText>
      <h3 className="text-3xl font-bold mb-6 text-center relative z-10">Featured Content</h3>
    </FadeInText>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
      {content.map((item, index) => (
        <div key={index} className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105">
          <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
          <div className="p-6">
            <FadeInText>
              <h4 className="font-bold text-xl mb-2">{item.title}</h4>
            </FadeInText>
            <FadeInText>
              <p className="text-gray-400">{item.description}</p>
            </FadeInText>
            <FadeInText>
              <a href="#" className="inline-block mt-4 text-blue-400 hover:text-blue-300 hover:underline transition-colors duration-300">Read More</a>
            </FadeInText>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default FeaturedContent;