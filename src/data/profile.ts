export interface ProfileData {
  brand: string;
  fullName: string;
  name: string;
  dateOfBirth: string;
  gender: string;
  location: string;
  phone: string;
  phoneDisplay: string;
  email: string;
  github: string;
  githubHandle: string;
  linkedin: string;
  linkedinHandle: string;
  role: string;
  statusText: string;
  availability: string;
  heroHeadline: string;
  introduction: string;
  professionalSummary: string;
  techTags: string[];
  portraitImage: string;
}

export const PROFILE: ProfileData = {
  brand: 'MINH TOI',
  fullName: 'Nguyen Van Minh Toi',
  name: 'Nguyen Van Minh Toi',
  dateOfBirth: '02/07/1999',
  gender: 'Male',
  location: 'Da Nang city, Vietnam',
  phone: '+84902257132',
  phoneDisplay: '+84 902 257 132',
  email: 'minhtoi2799@gmail.com',
  github: 'https://github.com/minhtoi2799',
  githubHandle: 'minhtoi2799',
  linkedin: 'https://linkedin.com/in/minhtoi',
  linkedinHandle: 'minhtoi',
  role: 'Software Engineer',
  statusText: 'Software Engineer · Available for opportunities',
  availability: 'Open for work & collaboration',
  heroHeadline: 'Building digital products with purpose.',
  introduction: 'Software Engineer with expertise in modern Backend and Frontend development.',
  professionalSummary:
    'Focused on developing reliable, clean, and high-performance applications with C#, .NET, FastAPI, React, Next.js, and TypeScript.',
  techTags: [
    'C# / .NET',
    'FastAPI',
    'React',
    'Next.js',
    'TypeScript',
    'PostgreSQL',
  ],
  portraitImage: `${import.meta.env.BASE_URL}images/portrait_developer_1793609546397.jpg`,
};
