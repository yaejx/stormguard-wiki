// src/components/AnimatedBackground.js
import React, { useMemo } from 'react';

const Particle = React.memo(({ style }) => (
  <div className="absolute bg-blue-400 rounded-full opacity-10" style={style} />
));

const AnimatedBackground = React.memo(({ className = "" }) => {
  const particles = useMemo(() => 
    [...Array(20)].map((_, i) => ({
      key: i,
      style: {
        width: `${Math.random() * 20 + 5}px`,
        height: `${Math.random() * 20 + 5}px`,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        animation: `float ${Math.random() * 10 + 5}s linear infinite`
      }
    })),
    []
  );

  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      {particles.map(particle => (
        <Particle key={particle.key} style={particle.style} />
      ))}
    </div>
  );
});

export default AnimatedBackground;