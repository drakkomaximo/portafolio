import React from 'react';

const CoffeeChat: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 mb-16">
      <div className="grid lg:grid-cols-3 gap-8 items-center">
        
        {/* Left Side - Location */}
        <div className="flex justify-center lg:justify-end">
          <div className="w-full max-w-sm p-6 bg-gray-800/50 rounded-2xl border border-gray-700 text-center">
            <div className="w-16 h-16 bg-blue-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-white text-xl mb-3">Ubicación</h4>
            <p className="text-gray-300 text-lg mb-2">Bogotá, Colombia</p>
            <p className="text-gray-400 text-sm">🌍 Disponible para trabajo remoto</p>
          </div>
        </div>
        
        {/* Center - Image with Hover Message */}
        <div className="relative flex items-center justify-center">
          <a
            href="https://calendly.com/andres-villanueva-tabares/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="group cursor-pointer flex flex-col items-center"
          >
            <img
              src="/cafe.png"
              alt="Personaje con café y tecnologías"
              className="w-full max-w-xs mx-auto group-hover:scale-110 group-hover:drop-shadow-2xl transition-all duration-500"
            />
            
            {/* Message Below Image - Hidden by default, appears on hover */}
            <p className="mt-4 text-lg md:text-xl font-bold bg-gradient-to-r from-amber-400 via-orange-500 to-red-500 bg-clip-text text-transparent group-hover:from-amber-300 group-hover:via-orange-400 group-hover:to-red-400 transition-all duration-300 text-center drop-shadow-lg opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
              Tomémonos un café y seamos amigos
            </p>
          </a>
        </div>
        
        {/* Right Side - Availability */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-full max-w-sm p-6 bg-gray-800/50 rounded-2xl border border-gray-700 text-center">
            <div className="w-16 h-16 bg-green-500/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h4 className="font-bold text-white text-xl mb-3">Disponibilidad</h4>
            <p className="text-gray-300 text-lg mb-2">Abierto a nuevas oportunidades</p>
            <p className="text-gray-400 text-sm">🚀 Listo para proyectos desafiantes</p>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default CoffeeChat;