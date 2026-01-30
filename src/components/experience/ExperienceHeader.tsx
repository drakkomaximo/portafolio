import React from 'react';

interface ExperienceHeaderProps {
  title: string;
  subtitle: string;
}

const ExperienceHeader: React.FC<ExperienceHeaderProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-14 relative">
      <div className="absolute inset-x-0 -top-10 -z-10 flex justify-center">
        <div className="w-72 h-72 bg-gradient-to-br from-blue-500/20 via-purple-500/10 to-transparent rounded-full blur-3xl" />
      </div>

      <h2 className="text-3xl md:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
        {title}
      </h2>
      <p className="text-base md:text-lg max-w-3xl mx-auto" style={{ color: 'var(--text-muted)' }}>
        {subtitle}
      </p>
    </div>
  );
};

export default ExperienceHeader;
