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
    'hero.role': 'Kỹ sư Phần mềm',
    'hero.location': 'TP. Đà Nẵng, Việt Nam',
    'hero.status': 'Kỹ sư Phần mềm · Sẵn sàng cho cơ hội mới',
    'hero.availability': 'Sẵn sàng cho công việc & hợp tác',
    'hero.headline': 'Xây dựng sản phẩm số với mục tiêu rõ ràng.',
    'hero.aboutTitle': 'Về Nguyễn Văn Minh Tới',
    'hero.aboutBio1': 'Hiện đang sống và làm việc tại TP. Đà Nẵng, Việt Nam. Đam mê kỹ thuật phần mềm, chuyên sâu xây dựng các dịch vụ Backend vững chắc với C# / .NET và FastAPI, kết hợp cùng giao diện người dùng hiện đại, phản hồi nhanh trên nền tảng React và Next.js.',
    'hero.aboutBio2': 'Luôn chú trọng vào tính rõ ràng của mã nguồn, tối ưu hiệu năng hệ thống, API chuẩn mực và khả năng bảo trì lâu dài.',
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
    'hero.role': 'Software Engineer',
    'hero.location': 'Da Nang city, Vietnam',
    'hero.status': 'Software Engineer · Open for opportunities',
    'hero.availability': 'Open for work & collaboration',
    'hero.headline': 'Building digital products with purpose.',
    'hero.aboutTitle': 'About Nguyen Van Minh Toi',
    'hero.aboutBio1': 'Based in Da Nang city, Vietnam. Passionate about software engineering, building solid backend services with C# / .NET and FastAPI, paired with modern, responsive frontends using React and Next.js.',
    'hero.aboutBio2': 'Focused on code readability, performance optimization, reliable APIs, and maintainable systems.',
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
