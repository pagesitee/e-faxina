
import React, { useState } from 'react';
import { User, MapPin, Phone, FileText, Calendar, CreditCard } from 'lucide-react';

const DiaristaSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    idade: '',
    bairro: '',
    experiencia: '',
    whatsapp: '',
    cpf: '',
    rg: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.nome || !formData.idade || !formData.bairro || !formData.whatsapp || !formData.cpf || !formData.rg) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }

    setIsSubmitting(true);

    // Simulate email sending (in real implementation, you would use EmailJS or similar service)
    try {
      // Format email content
      const emailContent = `
Nova Candidata para Diarista - E-Faxina

DADOS PESSOAIS:
Nome: ${formData.nome}
Idade: ${formData.idade} anos
Bairro/Cidade: ${formData.bairro}
WhatsApp: ${formData.whatsapp}
CPF: ${formData.cpf}
RG: ${formData.rg}

EXPERIÊNCIA:
${formData.experiencia || 'Não informado'}

---
Enviado através do site E-Faxina
Data: ${new Date().toLocaleString('pt-BR')}
      `;

      console.log('Email seria enviado para: barbosafellipee@gmail.com');
      console.log('Conteúdo:', emailContent);
      
      // Simulate delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setShowSuccess(true);
      setFormData({
        nome: '',
        idade: '',
        bairro: '',
        experiencia: '',
        whatsapp: '',
        cpf: '',
        rg: ''
      });
    } catch (error) {
      alert('Erro ao enviar cadastro. Tente novamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (showSuccess) {
    return (
      <section id="diarista" className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-3xl font-bold text-green-800 mb-4">
              Cadastro enviado com sucesso!
            </h2>
            <p className="text-lg text-green-700 mb-8">
              Em breve entraremos em contato via WhatsApp para finalizar seu cadastro e enviar o contrato.
            </p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Fazer Novo Cadastro
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="diarista" className="py-16 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Seja uma Diarista
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Ao se cadastrar, entraremos em contato via WhatsApp para preencher seus dados e enviar o contrato de prestação de serviços. 
            Esse contrato garante sua segurança e nosso compromisso com o cliente.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
                  <User className="inline h-4 w-4 mr-1" />
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Seu nome completo"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="idade" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Idade *
                </label>
                <input
                  type="number"
                  id="idade"
                  name="idade"
                  value={formData.idade}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Sua idade"
                  min="18"
                  max="100"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="bairro" className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Bairro e Cidade *
                </label>
                <input
                  type="text"
                  id="bairro"
                  name="bairro"
                  value={formData.bairro}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Ex: Asa Norte, Brasília-DF"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="whatsapp" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Phone className="inline h-4 w-4 mr-1" />
                  WhatsApp *
                </label>
                <input
                  type="tel"
                  id="whatsapp"
                  name="whatsapp"
                  value={formData.whatsapp}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="(61) 99999-9999"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cpf" className="block text-sm font-semibold text-gray-700 mb-2">
                  <CreditCard className="inline h-4 w-4 mr-1" />
                  CPF *
                </label>
                <input
                  type="text"
                  id="cpf"
                  name="cpf"
                  value={formData.cpf}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="000.000.000-00"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="rg" className="block text-sm font-semibold text-gray-700 mb-2">
                  <FileText className="inline h-4 w-4 mr-1" />
                  RG *
                </label>
                <input
                  type="text"
                  id="rg"
                  name="rg"
                  value={formData.rg}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="0000000"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="experiencia" className="block text-sm font-semibold text-gray-700 mb-2">
                Experiência
              </label>
              <textarea
                id="experiencia"
                name="experiencia"
                value={formData.experiencia}
                onChange={handleInputChange}
                rows={4}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Conte-nos sobre sua experiência com limpeza e faxina..."
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
            >
              {isSubmitting ? 'Enviando...' : 'Enviar Cadastro'}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default DiaristaSection;
