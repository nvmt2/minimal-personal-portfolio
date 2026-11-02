export interface Project {
  id: string;
  title: string;
  headline: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  isFeatured?: boolean;
  image?: string;
  metrics?: { label: string; value: string }[];
  githubUrl?: string;
  liveUrl?: string;
  year: string;
  role: string;
}

export const PROJECTS: Project[] = [
  {
    id: 'agilityio-studio-management',
    title: 'Studio Management System',
    headline: 'Studio management and financial reporting applications at AgilityIO',
    description:
      'Worked directly with clients to analyze requirements, break down tasks, and design and implement a studio management system, while maintaining and optimizing financial reporting applications.',
    longDescription:
      'At AgilityIO I collaborate with clients and cross-functional teams to turn business requirements into delivered features, and I keep the financial reporting applications performant and stable. The work spans the full stack, strengthening back-end skills and contributing to a scalable, maintainable system architecture.',
    technologies: ['C# / .NET', 'SQL Server', 'Azure DevOps'],
    isFeatured: true,
    year: '2022 — Present',
    role: 'Full-Stack Web Developer',
  },
  {
    id: 'k-artmarket',
    title: 'K-Art Market Auction Platform',
    headline: 'Online art auction platform for Korean government projects',
    description:
      'Contributed to the Auction Pictures platform, supporting online art auction presentation and management features with React.',
    technologies: ['React.js'],
    liveUrl: 'https://k-artmarket.kr',
    year: '2020 — 2022',
    role: 'Front-end Web Developer',
  },
  {
    id: 'agrion',
    title: 'Agrion Agricultural Management',
    headline: 'Agricultural management platform for efficient data and operations',
    description:
      'Developed features for the Agricultural Management platform, enabling efficient data management and operational workflows.',
    technologies: ['React.js'],
    liveUrl: 'https://agrion.kr',
    year: '2020 — 2022',
    role: 'Front-end Web Developer',
  },
  {
    id: 'internal-work-management',
    title: 'Internal Work Management System',
    headline: 'Internal tool for team productivity and process tracking',
    description:
      'Participated in the development and enhancement of an internal work management system to improve team productivity and process tracking.',
    technologies: ['React.js'],
    year: '2020 — 2022',
    role: 'Front-end Web Developer',
  },
];
