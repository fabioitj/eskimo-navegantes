import React from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaInstagram, FaMapMarkerAlt, FaClock } from 'react-icons/fa';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

function App() {
  return (
    <div className="min-h-screen bg-white relative">
      {/* Floating Location Button */}
      <a
        href="https://maps.app.goo.gl/Z6hDDXFNzWz4HJJZ8"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#E30613] text-white w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:transform hover:scale-110 transition-all duration-300"
      >
        <FaMapMarkerAlt size={24} />
      </a>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: 'url("fachada.png")',
            filter: 'blur(8px)',
            transform: 'scale(1.1)'
          }}
        />
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <motion.div 
          className="z-10 text-center px-4"
          initial="hidden"
          animate="visible"
          variants={fadeIn}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Refresque seu dia com a melhor experiência em sorvetes! 🍦✨
          </h1>
          <a 
            href="https://wa.me/5547992611819" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-[#FFD700] text-[#E30613] px-8 py-4 rounded-full font-bold text-lg hover:transform hover:scale-105 transition-all duration-300"
          >
            <FaWhatsapp className="inline mr-2" />
            Fale Conosco no WhatsApp
          </a>
        </motion.div>
      </section>

      {/* About Section */}
      <motion.section 
        className="section-padding bg-white"
        initial="hidden"
        whileInView="visible"
        variants={fadeIn}
        viewport={{ once: true }}
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading">Sobre Nós</h2>
          <p className="subheading">
            A Eskimó Sorvetes Navegantes é uma franquia da renomada Eskimó Sorvetes, 
            trazendo uma grande variedade de picolés e sorvetes para refrescar e adoçar o seu dia. 
            Localizada no coração de Navegantes, oferecemos um ambiente aconchegante e produtos 
            de qualidade para toda a família!
          </p>
        </div>
      </motion.section>

      {/* Flavors Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="heading text-center">Nossos Sabores</h2>
          <p className="subheading text-center">
            Temos opções para todos os gostos! Desde os clássicos até combinações especiais 
            que vão surpreender você.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Picolés Tradicionais', emoji: '🍭' },
              { title: 'Sorvetes Artesanais', emoji: '🍨' },
              { title: 'Linha Premium', emoji: '🏆' },
              { title: 'Opções Zero Lactose', emoji: '🥛' },
            ].map((item, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-lg text-center"
                initial="hidden"
                whileInView="visible"
                variants={fadeIn}
                viewport={{ once: true }}
                custom={index}
              >
                <div className="text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="section-padding bg-gradient-to-b from-white to-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="heading text-center text-4xl md:text-5xl mb-12">
            Venha nos Visitar! 🏪
          </h2>
          <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12">
            <div className="flex flex-col items-center space-y-6">
              <div className="flex items-center text-2xl md:text-3xl font-semibold text-[#E30613]">
                <FaMapMarkerAlt className="text-4xl md:text-5xl mr-4" />
                Nosso Endereço
              </div>
              <p className="text-xl md:text-2xl text-center font-medium">
                R. Anibal Gaya, 938 - Centro
                <br />
                Navegantes - SC, 88370-506
              </p>
              <div className="w-full border-t border-gray-200 my-6"></div>
              <div className="flex items-center text-xl md:text-2xl font-medium text-gray-800">
                <FaClock className="text-3xl md:text-4xl text-[#E30613] mr-4" />
                Segunda a Domingo: 10h - 19h
              </div>
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <a 
                  href="https://maps.app.goo.gl/Z6hDDXFNzWz4HJJZ8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#E30613] text-white px-8 py-4 rounded-full font-bold text-lg hover:transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <FaMapMarkerAlt className="mr-2" />
                  Como Chegar
                </a>
                <a 
                  href="https://wa.me/5547992611819"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-[#25D366] text-white px-8 py-4 rounded-full font-bold text-lg hover:transform hover:scale-105 transition-all duration-300 flex items-center justify-center"
                >
                  <FaWhatsapp className="mr-2" />
                  Chamar no WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading">Entre em Contato</h2>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8">
            <a 
              href="https://wa.me/5547992611819"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center"
            >
              <FaWhatsapp className="mr-2" />
              (47) 99261-1819
            </a>
            <a 
              href="https://www.instagram.com/eskimo.navegantes/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary flex items-center"
            >
              <FaInstagram className="mr-2" />
              @eskimo.navegantes
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#E30613] text-white py-8">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="text-xl font-semibold mb-4">
            Eskimó Sorvetes Navegantes - O sabor que você ama! 🍦❤️
          </p>
          <div className="flex justify-center space-x-6">
            <a 
              href="https://wa.me/5547992611819"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD700] transition-colors"
            >
              <FaWhatsapp size={24} />
            </a>
            <a 
              href="https://www.instagram.com/eskimo.navegantes/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#FFD700] transition-colors"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;