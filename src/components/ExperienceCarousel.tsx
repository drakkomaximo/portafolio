import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import type { Company } from '../data/experience';
import ExperienceHeader from './experience/ExperienceHeader';
import ExperienceCompanyCard from './experience/ExperienceCompanyCard';

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
  companies: Company[];
}

const ExperienceCarousel: React.FC<ExperienceCarouselProps> = ({ t, currentLang, companies }) => {
  return (
    <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-16 py-16">
      <ExperienceHeader title={t.experience.title} subtitle={t.experience.subtitle} />

      {/* Carrusel con Swiper */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={32}
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
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          className="experience-swiper"
        >
          {companies.map((company) => (
            <SwiperSlide key={company.id}>
              <ExperienceCompanyCard company={company} t={t} currentLang={currentLang} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Botones de navegación personalizados - laterales */}
        <button className="swiper-button-prev-custom hidden md:flex absolute -left-10 lg:-left-16 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-xl backdrop-blur-md border border-white/10">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button className="swiper-button-next-custom hidden md:flex absolute -right-10 lg:-right-16 top-1/2 -translate-y-1/2 bg-slate-900/80 hover:bg-slate-800 text-white p-3 rounded-full transition-all duration-300 hover:scale-110 shadow-xl backdrop-blur-md border border-white/10">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Paginación personalizada */}
        <div className="swiper-pagination-custom flex justify-center mt-6 space-x-2" />
      </div>

      {/* Call to action */}
      <div className="text-center mt-12">
        <div className="inline-flex items-center space-x-2 text-gray-400/90 bg-slate-900/60 px-4 py-2 rounded-full border border-white/10 backdrop-blur-md shadow-lg">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
          <p className="text-sm md:text-base">
            {t.experience.downloadCV}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCarousel;
