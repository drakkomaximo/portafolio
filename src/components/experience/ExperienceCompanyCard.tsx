import React from 'react';
import type { Company } from '../../data/experience';

interface ExperienceTexts {
  experience: {
    title: string;
    subtitle: string;
    role: string;
    achievements: string;
    technologies: string;
    duration: string;
    downloadCV: string;
  };
}

interface ExperienceCompanyCardProps {
  company: Company;
  t: ExperienceTexts;
  currentLang: string;
}

const ExperienceCompanyCard: React.FC<ExperienceCompanyCardProps> = ({ company, t, currentLang }) => {
  const localizedDescription =
    typeof company.description === 'string'
      ? company.description
      : company.description[currentLang as 'es' | 'en'] || company.description.es || '';

  const localizedAchievements =
    company.achievements[currentLang as 'es' | 'en'] || company.achievements.es || [];

  const visibleTechnologies = (company.technologies || []).slice(0, 5);
  const visibleAchievements = localizedAchievements.slice(0, 3);

  return (
    <div className="relative mx-2 md:mx-6">
      <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/30 via-purple-500/20 to-cyan-500/20 rounded-3xl blur-2xl opacity-60" />

      <div className="relative rounded-3xl px-6 md:px-10 py-8 md:py-10 backdrop-blur-xl shadow-[0_18px_60px_rgba(0,0,0,0.45)] border border-white/10 bg-gradient-to-br from-slate-900/90 via-slate-900/70 to-slate-900/40">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-4 flex flex-col justify-between space-y-6 border-b lg:border-b-0 lg:border-r border-white/5 pb-6 lg:pb-0 lg:pr-8">
            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-4">
              <a href={company.website} target="_blank" rel="noopener noreferrer" className="inline-block group">
                <div className="relative">
                  <div className="w-24 h-24 rounded-2xl bg-slate-900/70 border border-white/10 flex items-center justify-center overflow-hidden shadow-xl group-hover:shadow-blue-500/30 transition-all duration-300 group-hover:scale-[1.03]">
                    <img
                      src={company.logo}
                      alt={company.name}
                      className="w-16 h-16 object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500"
                    />
                  </div>
                  <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br from-blue-500/40 via-purple-500/40 to-transparent opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
                </div>
              </a>

              <div className="space-y-2">
                <h3 className="text-xl md:text-2xl font-bold tracking-tight" style={{ color: 'var(--text-primary)' }}>
                  {company.name}
                </h3>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/15 text-blue-300 border border-blue-500/40 shadow-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-cyan-400 animate-pulse" />
                  <span>{company.period}</span>
                </div>

                <div className="pt-1">
                  <span className="block text-xs uppercase tracking-wide mb-1" style={{ color: 'var(--text-muted)' }}>
                    {t.experience.role}
                  </span>
                  <p className="text-sm font-semibold" style={{ color: 'var(--text-primary)' }}>
                    {typeof company.role === 'string'
                      ? company.role
                      : company.role[currentLang as 'es' | 'en'] || company.role.es || 'Developer'}
                  </p>
                </div>
              </div>

              {company.technologies && (
                <div className="space-y-2 mt-2">
                  <span className="text-xs uppercase tracking-wide" style={{ color: 'var(--text-muted)' }}>
                    {t.experience.technologies}
                  </span>
                  <div className="flex flex-wrap gap-1.5 justify-center lg:justify-start">
                    {visibleTechnologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-0.5 text-[11px] rounded-full bg-slate-900/80 border border-slate-600/70 text-slate-200/90 shadow-[0_0_0_1px_rgba(15,23,42,0.9)]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="lg:col-span-8 flex flex-col gap-6">
            <div className="relative pl-0 lg:pl-4">
              <div className="absolute -left-4 top-1 hidden lg:block w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-[0_0_0_4px_rgba(59,130,246,0.25)]" />
              <p className="text-sm md:text-base leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                {localizedDescription}
              </p>
            </div>

            <div className="flex-1 flex flex-col gap-4 mt-2">
              <div className="flex items-center gap-2 mb-1">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/40">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </span>
                <h4 className="text-sm md:text-base font-semibold text-blue-200 tracking-wide">
                  {t.experience.achievements}
                </h4>
              </div>

              <div className="relative pl-4 md:pl-6">
                <div className="absolute left-1 md:left-2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/70 via-slate-700/60 to-transparent" />

                <div className="space-y-3">
                  {visibleAchievements.map((achievement, achievementIndex) => (
                    <div
                      key={achievementIndex}
                      className="relative group ml-4 md:ml-6 rounded-2xl border border-white/5 bg-slate-900/60 px-4 py-3 md:px-5 md:py-4 shadow-[0_10px_30px_rgba(15,23,42,0.6)] overflow-hidden transition-all duration-300 hover:border-blue-500/40 hover:shadow-[0_18px_45px_rgba(37,99,235,0.45)] hover:-translate-y-0.5"
                    >
                      <div className="absolute -left-5 top-4 w-2.5 h-2.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 shadow-[0_0_0_4px_rgba(15,23,42,1)]" />
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-transparent to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                      <p className="relative text-xs md:text-sm leading-relaxed" style={{ color: 'var(--text-secondary)' }}>
                        {achievement}
                      </p>
                    </div>
                  )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCompanyCard;
