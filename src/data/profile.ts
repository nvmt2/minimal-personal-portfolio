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
  linkedinHandle: 'minhtoi', // TODO: not in CV, confirm real LinkedIn handle
  role: 'Frontend Developer',
  statusText: 'Frontend Developer · 5+ years of experience',
  availability: 'Open for work & collaboration',
  heroHeadline: 'Building digital products with purpose.',
  introduction:
    'Web developer with 5+ years of experience building responsive web, mobile, and Windows desktop applications.',
  professionalSummary:
    'Experience across Finance, Studio Management, and Agricultural Management domains, working in Agile/Scrum teams on Azure DevOps with international teams from Japan, Korea, and the United States.',
  techTags: [
    'React.js',
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'C# / .NET',
    'SQL Server',
  ],
  portraitImage: `${import.meta.env.BASE_URL}images/portrait.jpg`,
};
