import React from 'react';
import { ChevronUp } from 'lucide-react';

const ScrollToTop = ({ show }) => (
  <button 
    className={`fixed bottom-8 right-8 bg-blue-600 text-white p-2 rounded-full transition-all duration-300 z-50 ${
      show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16 pointer-events-none'
    }`}
    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    aria-label="Scroll to top"
  >
    <ChevronUp size={24} />
  </button>
);

export default ScrollToTop;
