import React from 'react';
import { useFadeIn } from '../hooks/useFadeIn';

const FadeInText = ({ children, className = '' }) => {
  const [ref, isVisible] = useFadeIn();

  return (
    <div
      ref={ref}
      className={`transition-opacity duration-1000 ${
        isVisible ? 'opacity-100' : 'opacity-0'
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default FadeInText;