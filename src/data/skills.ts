export interface Skill {
  name: string;
  icon: string;
}

export interface SkillsData {
  frontend: Skill[];
  backend: Skill[];
  mobile: Skill[];
  database: Skill[];
  blockchain: Skill[];
  tools: Skill[];
}

export const skillsData: SkillsData = {
  frontend: [
    { name: 'React', icon: 'react/react-original' },
    { name: 'Next.js', icon: 'nextjs/nextjs-original' },
    { name: 'Astro', icon: 'astro/astro-original' },
    { name: 'Svelte', icon: 'svelte/svelte-original' },
    { name: 'TypeScript', icon: 'typescript/typescript-original' },
    { name: 'JavaScript', icon: 'javascript/javascript-original' },
    { name: 'HTML5', icon: 'html5/html5-original' },
    { name: 'CSS3', icon: 'css3/css3-original' },
    { name: 'Sass', icon: 'sass/sass-original' },
    { name: 'Material UI', icon: 'materialui/materialui-original' },
    { name: 'Redux Toolkit', icon: 'redux/redux-original' },
    { name: 'Zustand', icon: 'zustand/zustand-original' },
    { name: 'Webpack', icon: 'webpack/webpack-original' },
    { name: 'Vue.js', icon: 'vuejs/vuejs-original' },
    { name: 'Tailwind', icon: 'tailwindcss/tailwindcss-original' },
    { name: 'jQuery', icon: 'jquery/jquery-original' }
  ],
  backend: [
    { name: 'Node.js', icon: 'nodejs/nodejs-original' },
    { name: 'GraphQL', icon: 'graphql/graphql-plain' },
    { name: 'Prisma', icon: 'prisma/prisma-original' },
    { name: 'Express', icon: 'express/express-original' },
    { name: 'NestJS', icon: 'nestjs/nestjs-original' },
    { name: 'FastAPI', icon: 'fastapi/fastapi-original' },
    { name: 'Ruby', icon: 'ruby/ruby-original' },
    { name: 'Ruby on Rails', icon: 'rails/rails-original-wordmark' },
    { name: 'Python', icon: 'python/python-original' },
  ],
  mobile: [
    { name: 'React Native', icon: 'react/react-original' },
    { name: 'Flutter', icon: 'flutter/flutter-original' },
    { name: 'Dart', icon: 'dart/dart-original' }
  ],
  database: [
    { name: 'MongoDB', icon: 'mongodb/mongodb-original' },
    { name: 'MySQL', icon: 'mysql/mysql-original' },
    { name: 'PostgreSQL', icon: 'postgresql/postgresql-original' },
    { name: 'Supabase', icon: 'supabase/supabase-original' },
    { name: 'Firebase', icon: 'firebase/firebase-original' },
    { name: 'SQLite', icon: 'sqlite/sqlite-original' },
  ],
  blockchain: [
    { name: 'Solidity', icon: 'solidity/solidity-original' },
    { name: 'Cairo', icon: 'cairo/cairo-original' }
  ],
  tools: [
    { name: 'Git', icon: 'git/git-original' },
    { name: 'AWS', icon: 'amazonwebservices/amazonwebservices-original-wordmark' },
    { name: 'Salesforce', icon: 'salesforce/salesforce-original' },
    { name: 'Figma', icon: 'figma/figma-original' },
    { name: 'Visual Studio Code', icon: 'visualstudio/visualstudio-original' },
    { name: 'Postman', icon: 'postman/postman-original' },
    { name: 'Docker', icon: 'docker/docker-original' },
    { name: 'Kubernetes', icon: 'kubernetes/kubernetes-original' },
    { name: 'Jenkins', icon: 'jenkins/jenkins-original' },
    { name: 'GitHub', icon: 'github/github-original' },
    { name: 'GitLab', icon: 'gitlab/gitlab-original' },
  ]
};
