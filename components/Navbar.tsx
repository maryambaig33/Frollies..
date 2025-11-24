import React from 'react';
import { ViewState } from '../types';
import { IceCream, Sparkles, Menu as MenuIcon, ShoppingBag } from 'lucide-react';

interface NavbarProps {
  currentView: ViewState;
  setView: (view: ViewState) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, setView }) => {
  return (
    <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm border-b border-frollie-light/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div 
            className="flex items-center cursor-pointer group"
            onClick={() => setView(ViewState.HOME)}
          >
            <div className="bg-frollie-pink p-2 rounded-full text-white mr-2 group-hover:rotate-12 transition-transform duration-300">
              <IceCream size={24} />
            </div>
            <span className="font-bold text-2xl tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-frollie-pink to-purple-500">
              Frollies
            </span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8 items-center">
            <button 
              onClick={() => setView(ViewState.MENU)}
              className={`font-medium transition-colors hover:text-frollie-pink ${currentView === ViewState.MENU ? 'text-frollie-pink' : 'text-gray-600'}`}
            >
              Our Menu
            </button>
            <button 
              onClick={() => setView(ViewState.WIZARD)}
              className={`flex items-center space-x-1 font-medium px-4 py-2 rounded-full transition-all ${
                currentView === ViewState.WIZARD 
                  ? 'bg-frollie-pink text-white shadow-lg shadow-frollie-pink/30' 
                  : 'bg-frollie-light/30 text-frollie-pink hover:bg-frollie-light/50'
              }`}
            >
              <Sparkles size={18} />
              <span>Flavor Wizard</span>
            </button>
            <div className="relative p-2 text-gray-400 hover:text-frollie-pink cursor-pointer">
              <ShoppingBag size={24} />
              <span className="absolute top-0 right-0 h-4 w-4 bg-frollie-yellow text-white text-[10px] font-bold flex items-center justify-center rounded-full">0</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden text-gray-500">
            <MenuIcon size={24} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;