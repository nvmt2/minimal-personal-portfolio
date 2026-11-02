import React, { createContext, useContext, useEffect, useState } from 'react';

export type Language = 'vi' | 'en';

interface LanguageContextType {
  lang: Language;
  toggleLang: () => void;
  setLang: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  vi: {
    'nav.home': 'Trang chủ',
    'nav.projects': 'Dự án',
    'nav.timeline': 'Kinh nghiệm & Học vấn',
    'nav.stories': 'Life Stories',
    'nav.travel': 'Travel With Me',
    'nav.contact': 'Liên hệ',
    'nav.connect': 'Kết nối',
    'hero.role': 'Lập trình viên Frontend',
    'hero.location': 'TP. Đà Nẵng, Việt Nam',
    'hero.status': 'Lập trình viên Frontend · Hơn 5 năm kinh nghiệm',
    'hero.availability': 'Sẵn sàng cho công việc & hợp tác',
    'hero.headline': 'Xây dựng sản phẩm số với mục tiêu rõ ràng.',
    'hero.aboutTitle': 'Về Nguyễn Văn Minh Tới',
    'hero.aboutBio1': 'Hiện đang sống và làm việc tại TP. Đà Nẵng, Việt Nam. Hơn 5 năm kinh nghiệm phát triển ứng dụng web responsive, ứng dụng di động và ứng dụng desktop Windows, với React.js, Next.js, TypeScript và C# / .NET. Từng làm việc trong các lĩnh vực Tài chính, Quản lý Studio và Quản lý Nông nghiệp.',
    'hero.aboutBio2': 'Quen làm việc theo Agile/Scrum trên Azure DevOps, cùng các nhóm quốc tế tại Nhật Bản, Hàn Quốc và Hoa Kỳ.',
    'hero.viewProjects': 'Xem dự án',
    'hero.techExpertise': 'Chuyên môn Kỹ thuật',
    'hero.backend': 'Backend',
    'hero.frontend': 'Frontend',
    'hero.database': 'Cơ sở dữ liệu',
    'hero.devops': 'DevOps & Công cụ',
    'timeline.tag': '02. Lộ trình',
    'timeline.title': 'Kinh nghiệm & Học vấn',
    'timeline.subtitle': 'Quá trình làm việc thực tế và nền tảng học vấn chuyên ngành.',
    'timeline.work': 'Kinh nghiệm làm việc',
    'timeline.education': 'Học vấn & Đào tạo',
    'projects.tag': '01. Portfolio',
    'projects.title': 'Dự án Tiêu biểu',
    'contact.tag': '03. Kết nối',
    'contact.title': 'Liên hệ hợp tác',
    'contact.subtitle': 'Tôi luôn sẵn sàng trao đổi về công nghệ, các cơ hội việc làm và dự án mới.',
    'contact.send': 'Gửi tin nhắn',
  },
  en: {
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.timeline': 'Experience & Education',
    'nav.stories': 'Life Stories',
    'nav.travel': 'Travel With Me',
    'nav.contact': 'Contact',
    'nav.connect': "Let's Connect",
    'hero.role': 'Frontend Developer',
    'hero.location': 'Da Nang city, Vietnam',
    'hero.status': 'Frontend Developer · 5+ years of experience',
    'hero.availability': 'Open for work & collaboration',
    'hero.headline': 'Building digital products with purpose.',
    'hero.aboutTitle': 'About Nguyen Van Minh Toi',
    'hero.aboutBio1': 'Based in Da Nang city, Vietnam. 5+ years of experience building responsive web, mobile, and Windows desktop applications with React.js, Next.js, TypeScript, and C# / .NET. Worked across Finance, Studio Management, and Agricultural Management domains.',
    'hero.aboutBio2': 'Comfortable in Agile/Scrum teams on Azure DevOps, collaborating with international teams from Japan, Korea, and the United States.',
    'hero.viewProjects': 'View Projects',
    'hero.techExpertise': 'Technical Expertise',
    'hero.backend': 'Backend',
    'hero.frontend': 'Frontend',
    'hero.database': 'Database',
    'hero.devops': 'DevOps & Tools',
    'timeline.tag': '02. Journey',
    'timeline.title': 'Experience & Education',
    'timeline.subtitle': 'Professional background, industry experience, and academic milestones.',
    'timeline.work': 'Work Experience',
    'timeline.education': 'Academic Education',
    'projects.tag': '01. Portfolio',
    'projects.title': 'Selected Projects',
    'contact.tag': '03. Direct Contact',
    'contact.title': "Let's connect!",
    'contact.subtitle': "I'm always open to discussing technology, collaboration, and new opportunities.",
    'contact.send': 'Transmit Note',
  },
};

const LanguageContext = createContext<LanguageContextType>({
  lang: 'vi',
  toggleLang: () => {},
  setLang: () => {},
  t: (key: string) => key,
});

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [lang, setLang] = useState<Language>(() => {
    if (typeof window !== 'undefined') {
      const stored = localStorage.getItem('toi-portfolio-lang');
      if (stored === 'vi' || stored === 'en') return stored;
    }
    return 'vi';
  });

  useEffect(() => {
    localStorage.setItem('toi-portfolio-lang', lang);
  }, [lang]);

  const toggleLang = () => {
    setLang((prev) => (prev === 'vi' ? 'en' : 'vi'));
  };

  const t = (key: string): string => {
    return translations[lang]?.[key] || translations.en?.[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, toggleLang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
