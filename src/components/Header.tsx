
import React from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-blue-600">E-Faxina</h1>
            <p className="ml-3 text-gray-600 hidden sm:block">Diarista online, sem complicação</p>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <button 
              onClick={() => scrollToSection('agendar')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Agendar Faxina
            </button>
            <button 
              onClick={() => scrollToSection('diarista')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Seja uma Diarista
            </button>
            <button 
              onClick={() => scrollToSection('sobre')}
              className="text-gray-700 hover:text-blue-600 transition-colors font-medium"
            >
              Sobre
            </button>
          </nav>

          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 mt-4">
            <nav className="flex flex-col space-y-2 pt-4">
              <button 
                onClick={() => scrollToSection('agendar')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left py-2"
              >
                Agendar Faxina
              </button>
              <button 
                onClick={() => scrollToSection('diarista')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left py-2"
              >
                Seja uma Diarista
              </button>
              <button 
                onClick={() => scrollToSection('sobre')}
                className="text-gray-700 hover:text-blue-600 transition-colors font-medium text-left py-2"
              >
                Sobre
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
