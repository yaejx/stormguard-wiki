import React from 'react';
import { Search, Menu } from 'lucide-react';

const Header = () => (
  <header className="bg-gray-900/80 py-4 px-6 flex justify-between items-center w-full z-20 fixed top-0 left-0 right-0">
    <h1 className="text-2xl font-bold">Stormguard Wiki</h1>
    <div className="flex items-center space-x-32">
      <nav className="hidden md:flex space-x-6">
        {['Home', 'Tools', 'Articles', 'About'].map((item) => (
          <a 
            key={item}
            href={`/${item.toLowerCase()}`} 
            className="hover:text-blue-400 transition-colors duration-300 relative group"
          >
            {item}
            <span className="absolute left-0 right-0 bottom-0 h-0.5 bg-blue-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
          </a>
        ))}
      </nav>
      <div className="flex items-center space-x-4">
        <Search className="w-5 h-5 cursor-pointer hover:text-blue-400 transition-colors duration-300" />
        <Menu className="w-5 h-5 cursor-pointer md:hidden hover:text-blue-400 transition-colors duration-300" />
      </div>
    </div>
  </header>
);

export default Header;
