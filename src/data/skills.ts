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
    category: 'Frontend',
    icon: 'frontend',
    skills: [
      'React.js',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'HTML5 / CSS3 / SCSS',
      'Tailwind CSS',
      'Material-UI',
      'Bootstrap',
      'Redux',
      'Context API',
      'Axios / SWR',
      'Jest',
      'React Testing Library',
      'Vite',
      'Webpack',
      'KeystoneJS',
    ],
  },
  {
    category: 'Backend',
    icon: 'backend',
    skills: ['C#', '.NET', 'WPF', 'RESTful APIs', 'Firebase'],
  },
  {
    category: 'Database',
    icon: 'database',
    skills: ['SQL Server', 'MongoDB', 'Database design'],
  },
  {
    category: 'DevOps & Tools',
    icon: 'tools',
    skills: ['Git (GitHub, GitLab)', 'Azure DevOps', 'CI/CD basics', 'Docker (basic)', 'Vercel', 'pnpm / npm / Yarn', 'Figma', 'Canva'],
  },
];

export const TIMELINE_ITEMS: TimelineItem[] = [
  {
    period: '05/2022 — Present',
    type: 'work',
    role: 'Full-Stack Web Developer',
    roleVi: 'Lập trình viên Full-Stack Web',
    organization: 'AgilityIO (Product company)',
    organizationVi: 'AgilityIO (Công ty sản phẩm)',
    summary:
      'Developed back-end web skills while contributing to scalable and maintainable system architecture.',
    summaryVi:
      'Phát triển kỹ năng back-end web, đóng góp vào kiến trúc hệ thống có khả năng mở rộng và dễ bảo trì.',
    highlights: [
      'Maintained, optimized, and enhanced performance and stability of financial reporting applications.',
      'Collaborated directly with clients to analyze requirements, break down tasks, and design and implement studio management systems.',
      'Worked closely with cross-functional teams to ensure timely delivery and alignment with business requirements.',
    ],
    highlightsVi: [
      'Bảo trì, tối ưu hiệu năng và độ ổn định của các ứng dụng báo cáo tài chính.',
      'Làm việc trực tiếp với khách hàng để phân tích yêu cầu, chia nhỏ công việc, thiết kế và triển khai hệ thống quản lý studio.',
      'Phối hợp chặt chẽ với các nhóm chức năng để giao hàng đúng hạn và đúng yêu cầu nghiệp vụ.',
    ],
  },
  {
    period: '12/2020 — 03/2022',
    type: 'work',
    role: 'Front-end Web Developer',
    roleVi: 'Lập trình viên Front-end Web',
    organization: 'Enjoyworks (Outsourcing company)',
    organizationVi: 'Enjoyworks (Công ty outsource)',
    summary:
      'Worked on React-based web applications for Korean government projects, delivering user-focused and maintainable front-end solutions.',
    summaryVi:
      'Phát triển các ứng dụng web React cho các dự án chính phủ Hàn Quốc, mang lại giao diện thân thiện và dễ bảo trì.',
    highlights: [
      'Contributed to the Auction Pictures platform (k-artmarket.kr), supporting online art auction presentation and management features.',
      'Developed features for the Agricultural Management platform (agrion.kr), enabling efficient data management and operational workflows.',
      'Participated in the development and enhancement of an internal work management system to improve team productivity and process tracking.',
    ],
    highlightsVi: [
      'Đóng góp vào nền tảng đấu giá tranh (k-artmarket.kr), hỗ trợ trình bày và quản lý đấu giá nghệ thuật trực tuyến.',
      'Phát triển tính năng cho nền tảng Quản lý Nông nghiệp (agrion.kr), giúp quản lý dữ liệu và vận hành hiệu quả.',
      'Tham gia phát triển và cải tiến hệ thống quản lý công việc nội bộ nhằm nâng cao năng suất và theo dõi quy trình.',
    ],
  },
  {
    period: '01/2020 — 10/2020',
    type: 'work',
    role: 'Front-End Developer (Internship)',
    roleVi: 'Lập trình viên Front-End (Thực tập)',
    organization: 'Napa Global (Japanese outsourcing company)',
    organizationVi: 'Napa Global (Công ty outsource Nhật Bản)',
    summary:
      'Web development internship focused on front-end tasks.',
    summaryVi: 'Thực tập phát triển web, tập trung vào các công việc front-end.',
    highlights: [
      'Assisted in developing and maintaining user interface components for web applications.',
      'Collaborated with senior developers to implement designs, fix bugs, and improve usability.',
    ],
    highlightsVi: [
      'Hỗ trợ phát triển và duy trì các component giao diện cho ứng dụng web.',
      'Phối hợp với các lập trình viên senior để triển khai thiết kế, sửa lỗi và cải thiện trải nghiệm sử dụng.',
    ],
  },
];