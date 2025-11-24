import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Menu from './components/Menu';
import FlavorWizard from './components/FlavorWizard';
import { ViewState } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<ViewState>(ViewState.HOME);

  const renderView = () => {
    switch (currentView) {
      case ViewState.HOME:
        return (
          <>
            <Hero setView={setCurrentView} />
            <Menu />
          </>
        );
      case ViewState.MENU:
        return <Menu />;
      case ViewState.WIZARD:
        return <FlavorWizard />;
      default:
        return <Hero setView={setCurrentView} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-sans">
      <Navbar currentView={currentView} setView={setCurrentView} />
      <main className="flex-grow">
        {renderView()}
      </main>
      <footer className="bg-frollie-dark text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="col-span-1 md:col-span-2">
              <h3 className="text-2xl font-bold text-frollie-pink mb-4">Frollies</h3>
              <p className="text-gray-400 max-w-sm">
                Reimagining the dessert experience with AI-powered flavors and sustainable ingredients.
              </p>
            </div>
            <div>
              <h4 className="font-bold mb-4">Links</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentView(ViewState.HOME)}>Home</li>
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentView(ViewState.MENU)}>Menu</li>
                <li className="hover:text-white cursor-pointer" onClick={() => setCurrentView(ViewState.WIZARD)}>Wizard</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-4">Contact</h4>
              <ul className="space-y-2 text-gray-400">
                <li>hello@frollies.com</li>
                <li>1-800-YUM-FROYO</li>
                <li>123 Scoop Street</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500 text-sm">
            © 2024 Frollies Reimagined. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;