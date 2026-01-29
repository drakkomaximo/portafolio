import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { companies } from '../data/experience';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

interface ExperienceCarouselProps {
  t: {
    experience: {
      title: string;
      subtitle: string;
      role: string;
      achievements: string;
      technologies: string;
      duration: string;
      downloadCV: string;
    };
  };
  currentLang: string;
}

const ExperienceCarousel: React.FC<ExperienceCarouselProps> = ({ t, currentLang }) => {
  return (
    <div className="max-w-7xl mx-auto px-20 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          {t.experience.title}
        </h2>
        <p className="text-xl" style={{color: 'var(--text-muted)'}}>
          {t.experience.subtitle}
        </p>
      </div>

      {/* Carrusel con Swiper */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={0}
          slidesPerView={1}
          navigation={{
            nextEl: '.swiper-button-next-custom',
            prevEl: '.swiper-button-prev-custom',
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-custom',
          }}
          autoplay={{
            delay: 4000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="experience-swiper"
        >
          {companies.map((company) => (
            <SwiperSlide key={company.id}>
              <div className="backdrop-blur-sm rounded-2xl p-6 mx-4 shadow-2xl min-h-[400px]" style={{background: 'var(--bg-tertiary)', border: '1px solid var(--border-primary)'}}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-full">
                  {/* Sección izquierda - Logo y info básica */}
                  <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
                    <a
                      href={company.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block group"
                    >
                      <div className="relative">
                        <img
                          src={company.logo}
                          alt={company.name}
                          className="w-20 h-20 object-contain rounded-xl filter grayscale group-hover:grayscale-0 transition-all duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-blue-400/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </a>
                    
                      <div className="space-y-2">
                        <h3 className="text-lg font-bold transition-colors duration-300" style={{color: 'var(--text-primary)'}}>
                          {company.name}
                        </h3>
                        
                        <div className="inline-flex items-center px-2 py-1 bg-blue-500/20 text-blue-400 rounded-full text-xs font-semibold">
                          {company.period}
                        </div>
                        
                        <div className="text-center lg:text-left">
                          <span className="text-xs" style={{color: 'var(--text-muted)'}}>{t.experience.role}:</span>
                          <p className="font-semibold text-sm" style={{color: 'var(--text-primary)'}}>
                            {typeof company.role === 'string' 
                              ? company.role 
                              : company.role[currentLang as 'es' | 'en'] || company.role.es || 'Developer'
                            }
                          </p>
                        </div>

                        {/* Tecnologías */}
                        {company.technologies && (
                          <div className="space-y-1">
                            <span className="text-xs" style={{color: 'var(--text-muted)'}}>{t.experience.technologies}:</span>
                            <div className="flex flex-wrap gap-1 justify-center lg:justify-start">
                              {company.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-1.5 py-0.5 text-xs rounded"
                                  style={{background: 'var(--bg-primary)', color: 'var(--text-secondary)', border: '1px solid var(--border-primary)'}}
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                  </div>

                  {/* Sección derecha - Descripción y logros */}
                  <div className="lg:col-span-8 space-y-3">
                    <div>
                      <p className="text-sm leading-relaxed mb-3" style={{color: 'var(--text-secondary)'}}>
                        {typeof company.description === 'string' 
                          ? company.description 
                          : company.description[currentLang as 'es' | 'en'] || company.description.es || 'Company description'
                        }
                      </p>
                    </div>

                    {/* Logros */}
                    <div className="flex-1">
                      <h4 className="text-base font-bold text-blue-400 mb-3">
                        {t.experience.achievements}
                      </h4>
                      <div className="grid grid-cols-1 gap-3">
                        {(company.achievements[currentLang as 'es' | 'en'] || company.achievements.es || []).map((achievement, achievementIndex) => (
                          <div
                            key={achievementIndex}
                            className="group relative backdrop-blur-sm rounded-lg p-3 transition-all duration-300 hover:transform hover:scale-[1.01] hover:shadow-lg"
                            style={{background: 'var(--bg-primary)', border: '1px solid var(--border-primary)'}}
                          >
                            <div className="flex items-center space-x-3">
                              <div className="flex-shrink-0">
                                <div className="w-6 h-6 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full flex items-center justify-center shadow-md">
                                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                                  </svg>
                                </div>
                              </div>
                              <div className="flex-1">
                                <p className="text-sm leading-relaxed transition-colors duration-300" style={{color: 'var(--text-secondary)'}}>
                                  {achievement}
                                </p>
                              </div>
                            </div>
                            
                            {/* Efecto de brillo en hover */}
                            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-400/5 to-purple-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botones de navegación personalizados - Fuera del área de contenido */}
        <button className="swiper-button-prev-custom absolute -left-16 top-1/2 transform -translate-y-1/2 bg-gray-800/90 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-xl backdrop-blur-sm z-10">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button className="swiper-button-next-custom absolute -right-16 top-1/2 transform -translate-y-1/2 bg-gray-800/90 hover:bg-gray-700 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-xl backdrop-blur-sm z-10">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Paginación personalizada */}
        <div className="swiper-pagination-custom flex justify-center mt-6 space-x-2"></div>
      </div>

      {/* Call to action */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center space-x-2 text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-lg">
            {t.experience.downloadCV}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCarousel;
