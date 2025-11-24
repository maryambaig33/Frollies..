import React from 'react';
import { ViewState } from '../types';
import { ArrowRight, Star } from 'lucide-react';

interface HeroProps {
  setView: (view: ViewState) => void;
}

const Hero: React.FC<HeroProps> = ({ setView }) => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-white to-frollie-light/20 pb-16 pt-8 sm:pb-24 sm:pt-16">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-8 z-10">
            <div className="inline-flex items-center px-3 py-1 rounded-full bg-frollie-yellow/20 text-orange-600 text-sm font-semibold border border-frollie-yellow/30">
              <Star size={14} className="mr-1 fill-orange-500" /> Voted #1 Dessert Spot 2024
            </div>
            
            <h1 className="text-5xl sm:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
              Happiness Served <br />
              <span className="text-frollie-pink">Swirled & Cold.</span>
            </h1>
            
            <p className="text-lg text-gray-600 max-w-lg">
              Experience the magic of handcrafted frozen yogurt, fresh smoothies, and toppings that defy gravity. Reimagined for the bold.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setView(ViewState.MENU)}
                className="px-8 py-4 bg-frollie-dark text-white rounded-xl font-bold hover:bg-black transition-all shadow-lg hover:shadow-xl flex items-center justify-center"
              >
                Order Now
              </button>
              <button 
                onClick={() => setView(ViewState.WIZARD)}
                className="px-8 py-4 bg-white text-frollie-pink border-2 border-frollie-pink rounded-xl font-bold hover:bg-frollie-pink hover:text-white transition-all shadow-sm flex items-center justify-center group"
              >
                AI Flavor Match <ArrowRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          <div className="relative lg:h-[500px] flex items-center justify-center">
             {/* Decorative Blobs */}
             <div className="absolute top-0 right-10 w-64 h-64 bg-frollie-yellow/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
             <div className="absolute top-0 left-10 w-64 h-64 bg-frollie-pink/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
             <div className="absolute -bottom-8 left-20 w-64 h-64 bg-frollie-teal/30 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
             
             {/* Main Image */}
             <div className="relative transform hover:scale-105 transition-duration-500 duration-500 hover:rotate-2">
                <img 
                  src="https://picsum.photos/600/600?random=101" 
                  alt="Delicious Froyo" 
                  className="rounded-3xl shadow-2xl object-cover h-[400px] w-[400px] border-4 border-white"
                />
                
                {/* Floating Card */}
                <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 max-w-[200px]">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold text-xs">GF</div>
                    <span className="text-sm font-bold text-gray-800">Fresh Kiwi Twist</span>
                  </div>
                  <div className="text-xs text-gray-500">Trending flavor of the week!</div>
                </div>
             </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;