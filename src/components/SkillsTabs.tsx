import React, { useState } from 'react';
import type { SkillsData } from '../data/skills';

interface SkillsTabsProps {
  skillsData: SkillsData;
}

const SkillsTabs: React.FC<SkillsTabsProps> = ({ skillsData }) => {
  // Función para generar la URL del icono
  const getIconUrl = (iconPath: string) => 
    `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${iconPath}.svg`;
  const [activeTab, setActiveTab] = useState<string>('all');

  const allSkills = Object.values(skillsData).flat();

  const tabs = [
    { 
      key: 'all', 
      label: 'All',
      icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    { 
      key: 'frontend', 
      label: 'Frontend',
      icon: 'M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    { 
      key: 'backend', 
      label: 'Backend',
      icon: 'M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2'
    },
    { 
      key: 'mobile', 
      label: 'Mobile',
      icon: 'M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z'
    },
    { 
      key: 'database', 
      label: 'Database',
      icon: 'M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4'
    },
    { 
      key: 'blockchain', 
      label: 'Blockchain',
      icon: 'M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1'
    },
    { 
      key: 'tools', 
      label: 'Tools',
      icon: 'M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z'
    }
  ];

  const getCurrentSkills = () => {
    if (activeTab === 'all') {
      return allSkills;
    }
    return skillsData[activeTab as keyof SkillsData] || [];
  };

  return (
    <div className="skills-tabs">
      {/* Tabs Navigation */}
      <div className="flex flex-wrap justify-center gap-3 mb-12">
        {tabs.map((tab, index) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`group flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-500 transform hover:scale-105 ${
              activeTab === tab.key
                ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-xl shadow-blue-500/25 scale-105'
                : 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 hover:text-white border border-gray-700 hover:border-gray-600'
            }`}
            style={{
              animationDelay: `${index * 100}ms`,
              animation: 'fadeInUp 0.6s ease-out forwards'
            }}
          >
            <svg 
              className={`w-5 h-5 transition-all duration-300 ${
                activeTab === tab.key ? 'animate-pulse' : 'group-hover:scale-110'
              }`} 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tab.icon} />
            </svg>
            <span className="transition-all duration-300">{tab.label}</span>
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="tab-content">
        <div className="grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-11 gap-6">
          {getCurrentSkills().map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="group relative flex items-center justify-center"
              style={{
                animationDelay: `${index * 30}ms`,
                animation: 'fadeInUp 0.6s ease-out forwards'
              }}
            >
              {/* Icono */}
              <div className="w-16 h-16 flex items-center justify-center transition-all duration-300 group-hover:scale-125 group-hover:rotate-6">
                <div className="relative">
                  {/* Fondo sutil para contraste */}
                  <div className="absolute inset-0 bg-white/10 rounded-lg blur-sm group-hover:bg-white/20 transition-all duration-300"></div>
                  
                  {/* Icono con filtros para mejor contraste */}
                  <img
                    src={getIconUrl(skill.icon)}
                    alt={skill.name}
                    className="relative w-12 h-12 transition-all duration-300 group-hover:drop-shadow-2xl"
                    style={{
                      filter: 'brightness(1.15) contrast(1.3) saturate(1.2) drop-shadow(0 2px 4px rgba(0,0,0,0.3))',
                    }}
                  />
                  
                  {/* Borde sutil en hover */}
                  <div className="absolute inset-0 rounded-lg border-2 border-transparent group-hover:border-blue-400/30 transition-all duration-300"></div>
                </div>
              </div>
              
              {/* Tooltip con el nombre */}
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-1 bg-gray-900 text-white text-xs font-medium rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-10 shadow-lg">
                {skill.name}
                {/* Flecha del tooltip */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gray-900"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillsTabs;
