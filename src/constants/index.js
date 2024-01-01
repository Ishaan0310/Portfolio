import {
  frontend,
  backend,
  ux,
  
  javascript,
  
  html,
  css,
  reactjs,
  
  nodejs,
  git,
  figma,
  
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  coverhunt,
  dcc,
  kelhel,
  microverse,
} from '../assets';

export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
 
];

const technologies = [
  {
    name: 'HTML',
    icon: html,
  },
  {
    name: 'CSS',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  
  {
    name: 'React JS',
    icon: reactjs,
  },
  
  {
    name: 'Node JS',
    icon: nodejs,
  },
  
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  
];

const experiences = [
  {
    title: 'Full-Stack Intern',
    company_name: 'EAIESB Software Solutions',
    icon: coverhunt,
    iconBg: '#333333',
    date: '30th May 2022 - 22nd July 2022',
  },
  {
    title: 'Website Coordinator',
    company_name: 'EIS Conference',
    icon: microverse,
    iconBg: '#333333',
    date: 'Feb 2023 - May 2023',
  },
  
];

const projects = [
  {
    id: 'project-1',
    name: 'Google-Keep',
    description: 'A replica of Google keep',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Firebase',
        color: 'green-text-gradient',
      },
      
    ],
    image: komikult,
    repo: 'https://github.com/shaqdeff/KomiKult',
    
  },
  {
    id: 'project-2',
    name: 'E-Insta',
    description:
      'Collaboratively developed a DataBlocks website replica with enhanced data analysis features using FastAPI, Spring, and React JS, allowing reading/writing of JSON, CSV, XML, and XLSX files with conversion capabilities.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'Fastapi',
        color: 'green-text-gradient',
      },
      {
        name: 'Spring-tool',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/shaqdeff/Leaderboard',
    
  },
  
  
];

export { services, technologies, experiences, projects };
