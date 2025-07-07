
import React from 'react';
import { MessageSquare, Instagram, Shield, FileText } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">E-Faxina</h3>
            <p className="text-gray-400 mb-4">
              Diarista online, sem complicação
            </p>
            <p className="text-sm text-gray-500">
              CNPJ: 12.345.678/0001-90
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <a 
                href="https://wa.me/5561993846714" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <MessageSquare className="h-4 w-4 mr-2" />
                WhatsApp
              </a>
              <a 
                href="https://instagram.com/efaxina" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center text-gray-400 hover:text-white transition-colors"
              >
                <Instagram className="h-4 w-4 mr-2" />
                @efaxina
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <div className="space-y-3">
              <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <Shield className="h-4 w-4 mr-2" />
                Política de Privacidade
              </a>
              <a href="#" className="flex items-center text-gray-400 hover:text-white transition-colors">
                <FileText className="h-4 w-4 mr-2" />
                Termos de Uso
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="text-center">
            <p className="text-sm text-gray-500 mb-2">
              A E-Faxina apenas intermedeia serviços prestados por profissionais autônomos.
            </p>
            <p className="text-sm text-gray-600">
              © 2024 E-Faxina. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
