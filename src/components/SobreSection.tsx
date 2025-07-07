
import React from 'react';
import { Shield, CheckCircle, AlertCircle, Users } from 'lucide-react';

const SobreSection = () => {
  return (
    <section id="sobre" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Sobre a E-Faxina
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Entenda como funcionamos e por que somos a melhor opção para você
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Como Funciona
            </h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Users className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>A E-Faxina é uma intermediadora de serviços</strong> que conecta clientes às melhores diaristas da região.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <Shield className="h-6 w-6 text-green-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>O pagamento antecipado de 40%</strong> garante compromisso e segurança para todas as partes envolvidas.
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <CheckCircle className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>A faxina é paga diretamente à diarista</strong> no dia do serviço (60% restante do valor).
                </p>
              </div>
              
              <div className="flex items-start space-x-3">
                <AlertCircle className="h-6 w-6 text-orange-600 mt-1 flex-shrink-0" />
                <p className="text-gray-700">
                  <strong>Se a diarista não comparecer</strong>, o valor antecipado é integralmente devolvido ao cliente.
                </p>
              </div>
            </div>
          </div>

          <div className="bg-blue-50 rounded-2xl p-8">
            <h4 className="text-xl font-bold text-blue-900 mb-4">
              💡 Por que o Pagamento Antecipado?
            </h4>
            <div className="space-y-3 text-blue-800">
              <p>✅ <strong>20% para a empresa:</strong> Taxa de intermediação e suporte</p>
              <p>✅ <strong>20% para a diarista:</strong> Auxílio para transporte e compromisso</p>
              <p>✅ <strong>Segurança total:</strong> Garantia de reembolso caso não compareça</p>
              <p>✅ <strong>Compromisso mútuo:</strong> Reduz cancelamentos de última hora</p>
            </div>
          </div>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Nossos Compromissos
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="h-8 w-8 text-blue-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Contrato Obrigatório</h4>
              <p className="text-gray-600 text-sm">
                Todas as diaristas assinam contrato de prestação de serviços, protegendo você e garantindo qualidade.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Profissionais Verificadas</h4>
              <p className="text-gray-600 text-sm">
                Todas as candidatas passam por processo de seleção, verificação de documentos e referências.
              </p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h4 className="font-semibold text-gray-900 mb-2">Suporte Completo</h4>
              <p className="text-gray-600 text-sm">
                Nossa equipe está sempre disponível para esclarecer dúvidas e resolver qualquer situação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SobreSection;
