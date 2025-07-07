
import React, { useState } from 'react';
import { Calendar, Clock, MapPin, MessageSquare } from 'lucide-react';

const AgendarSection = () => {
  const [formData, setFormData] = useState({
    nome: '',
    endereco: '',
    tipoFaxina: '4h',
    data: '',
    horario: '',
    preferencias: ''
  });

  const precos = {
    '4h': 150,
    '8h': 220
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const formatWhatsAppMessage = () => {
    const preco = precos[formData.tipoFaxina as keyof typeof precos];
    const pagamentoAntecipado = Math.round(preco * 0.4);
    
    const message = `*🧹 AGENDAMENTO DE FAXINA - E-FAXINA*

*Nome:* ${formData.nome}
*Endereço:* ${formData.endereco}
*Tipo de Faxina:* ${formData.tipoFaxina} (R$ ${preco})
*Data:* ${formData.data}
*Horário:* ${formData.horario}
*Preferências:* ${formData.preferencias || 'Nenhuma especificada'}

*💰 Valor Total:* R$ ${preco}
*💳 Pagamento Antecipado (40%):* R$ ${pagamentoAntecipado}
*💵 Pagamento no Local:* R$ ${preco - pagamentoAntecipado}

Gostaria de confirmar este agendamento!`;

    return encodeURIComponent(message);
  };

  const handleWhatsAppClick = () => {
    if (!formData.nome || !formData.endereco || !formData.data || !formData.horario) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
    
    const whatsappUrl = `https://wa.me/5561993846714?text=${formatWhatsAppMessage()}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="agendar" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Agendar Faxina
          </h2>
          <p className="text-lg text-gray-600">
            Preencha os dados abaixo e finalize via WhatsApp
          </p>
        </div>

        <div className="bg-gray-50 rounded-2xl p-8 shadow-lg">
          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="nome" className="block text-sm font-semibold text-gray-700 mb-2">
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
                <label htmlFor="endereco" className="block text-sm font-semibold text-gray-700 mb-2">
                  <MapPin className="inline h-4 w-4 mr-1" />
                  Endereço Completo *
                </label>
                <input
                  type="text"
                  id="endereco"
                  name="endereco"
                  value={formData.endereco}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  placeholder="Rua, número, bairro, cidade"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="tipoFaxina" className="block text-sm font-semibold text-gray-700 mb-2">
                  Tipo de Faxina *
                </label>
                <select
                  id="tipoFaxina"
                  name="tipoFaxina"
                  value={formData.tipoFaxina}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                >
                  <option value="4h">4 horas - R$ 150</option>
                  <option value="8h">8 horas - R$ 220</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="data" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Calendar className="inline h-4 w-4 mr-1" />
                  Data *
                </label>
                <input
                  type="date"
                  id="data"
                  name="data"
                  value={formData.data}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="horario" className="block text-sm font-semibold text-gray-700 mb-2">
                  <Clock className="inline h-4 w-4 mr-1" />
                  Horário *
                </label>
                <input
                  type="time"
                  id="horario"
                  name="horario"
                  value={formData.horario}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  required
                />
              </div>
            </div>

            <div>
              <label htmlFor="preferencias" className="block text-sm font-semibold text-gray-700 mb-2">
                <MessageSquare className="inline h-4 w-4 mr-1" />
                Preferências (opcional)
              </label>
              <textarea
                id="preferencias"
                name="preferencias"
                value={formData.preferencias}
                onChange={handleInputChange}
                rows={3}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                placeholder="Ex: Focar na cozinha e banheiros, não mexer nos quartos das crianças..."
              />
            </div>

            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <p className="text-sm text-yellow-800">
                <strong>⚠️ Importante:</strong> Para confirmar a reserva, é necessário o pagamento antecipado de 40% do valor. 
                Sendo 20% destinado à empresa e 20% à diarista para auxiliar no transporte. 
                Caso a faxina não ocorra, esse valor será integralmente devolvido.
              </p>
            </div>

            <button
              type="button"
              onClick={handleWhatsAppClick}
              className="w-full bg-green-600 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-700 transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
            >
              📱 Agendar via WhatsApp
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AgendarSection;
