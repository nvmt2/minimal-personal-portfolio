export interface SkillCategory {
  category: string;
  icon: 'backend' | 'frontend' | 'database' | 'tools';
  skills: string[];
}

export interface TimelineItem {
  period: string;
  type: 'work' | 'education';
  role: string;
  roleVi: string;
  organization: string;
  organizationVi: string;
  location?: string;
  summary: string;
  summaryVi: string;
  highlights?: string[];
  highlightsVi?: string[];
}

export const TECHNICAL_EXPERTISE: SkillCategory[] = [
  {
    category: 'Backend',
    icon: 'backend',
    skills: ['C#', '.NET', 'FastAPI', 'Node.js', 'RESTful APIs'],
  },
  {
    category: 'Frontend',
    icon: 'frontend',
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML / CSS'],
  },
  {
    category: 'Database',
    icon: 'database',
    skills: ['PostgreSQL', 'SQL Server', 'Redis', 'MySQL', 'MongoDB'],
  },
  {
    category: 'DevOps & Tools',
    icon: 'tools',
    skills: ['Docker', 'Git & GitHub', 'Linux', 'CI/CD', 'Postman'],
  },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    period: '2023 — Present',
    type: 'work',
    role: 'Software Engineer',
    roleVi: 'Kỹ sư Phần mềm',
    organization: 'ASNET / Software Development',
    organizationVi: 'ASNET / Phát triển Phần mềm',
    location: 'Da Nang, Vietnam',
    summary: 'Developing backend microservices and modern web applications with .NET, FastAPI, and React.',
    summaryVi: 'Nghiên cứu và phát triển hệ thống microservices backend cùng ứng dụng web hiện đại với .NET, FastAPI và React.',
    highlights: [
      'Engineered scalable RESTful API endpoints and background processing jobs.',
      'Collaborated on responsive frontend components using React and TypeScript.',
    ],
    highlightsVi: [
      'Xây dựng các API RESTful hiệu năng cao và các tác vụ xử lý ngầm (background jobs).',
      'Phát triển các component giao diện người dùng tối ưu với React và TypeScript.',
    ],
  },
  {
    period: '2021 — 2023',
    type: 'work',
    role: 'Full-Stack Developer',
    roleVi: 'Lập trình viên Full-Stack',
    organization: 'Technology Solutions Studio',
    organizationVi: 'Studio Giải pháp Công nghệ',
    location: 'Da Nang, Vietnam',
    summary: 'Built client portals, API integrations, and database schemas with modern TypeScript and C#/.NET.',
    summaryVi: 'Xây dựng cổng thông tin khách hàng, tích hợp API bên thứ ba và thiết kế cấu trúc database với TypeScript và C#/.NET.',
    highlights: [
      'Designed and optimized PostgreSQL database models and query performance.',
      'Delivered end-to-end features from database to frontend UI.',
    ],
    highlightsVi: [
      'Thiết kế và tối ưu hóa truy vấn cơ sở dữ liệu PostgreSQL.',
      'Triển khai các tính năng hoàn chỉnh từ tầng database đến giao diện frontend.',
    ],
  },
  {
    period: '2017 — 2021',
    type: 'education',
    role: 'Bachelor of Information Technology / Software Engineering',
    roleVi: 'Cử nhân Công nghệ Thông tin / Kỹ thuật Phần mềm',
    organization: 'University in Da Nang',
    organizationVi: 'Trường Đại học tại Đà Nẵng',
    location: 'Da Nang, Vietnam',
    summary: 'Graduated with a solid foundation in Software Engineering, Data Structures & Algorithms, Object-Oriented Programming, and Database Systems.',
    summaryVi: 'Tốt nghiệp chuyên ngành Kỹ thuật Phần mềm. Đạt nền tảng vững chắc về Cấu trúc dữ liệu & Giải thuật, Lập trình hướng đối tượng (OOP), Cơ sở dữ liệu và Kiến trúc hệ thống.',
    highlights: [
      'Thesis / Capstone: Multi-tier web platform with modern API architecture.',
      'Active participant in software engineering clubs and coding competitions.',
    ],
    highlightsVi: [
      'Đồ án tốt nghiệp: Xây dựng nền tảng web đa tầng với kiến trúc API hiện đại.',
      'Tham gia tích cực các hoạt động học thuật và câu lạc bộ lập trình phần mềm.',
    ],
  },
];
