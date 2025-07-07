
import React from 'react';
import { Sparkles, Clock, Shield } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            E-Faxina
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
            Diarista online, sem complicação
          </p>
          <p className="text-lg text-gray-700 mb-12 max-w-2xl mx-auto">
            Conectamos você às melhores diaristas da sua região com segurança, praticidade e qualidade garantidas.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <button 
              onClick={() => scrollToSection('agendar')}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Agendar Faxina
            </button>
            <button 
              onClick={() => scrollToSection('diarista')}
              className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-600 hover:text-white transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              Seja uma Diarista
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Sparkles className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Qualidade Garantida</h3>
              <p className="text-gray-600">Diaristas selecionadas e avaliadas para garantir o melhor serviço.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Clock className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Flexibilidade</h3>
              <p className="text-gray-600">Escolha o horário e tipo de faxina que melhor se adapta à sua agenda.</p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Shield className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Segurança</h3>
              <p className="text-gray-600">Pagamento antecipado e contrato que protege todas as partes envolvidas.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
