import React from 'react';
import {
  ArrowDown,
  Calendar,
  User,
  MapPin,
  Phone,
  Mail,
  Github,
  Linkedin,
  ArrowUpRight,
  Server,
  Layout,
  Database,
  Terminal,
} from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { TECHNICAL_EXPERTISE } from '../../data/skills';
import { useLanguage } from '../../context/LanguageContext';

const categoryIcons: Record<string, React.ReactNode> = {
  Backend: <Server className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8]" />,
  Frontend: <Layout className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8]" />,
  Database: <Database className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8]" />,
  'DevOps & Tools': <Terminal className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8]" />,
};

export const Hero: React.FC = () => {
  const { lang, t } = useLanguage();

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-10 md:pt-14 pb-16 md:pb-20 border-b border-[#E2E5EC] dark:border-[#303541]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Top Grid: Profile, Bio, Basic Info & Portrait */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
          {/* Left Column: Personal Profile & Bio */}
          <div className="lg:col-span-7 space-y-6">
            {/* Main Name & Headline */}
            <div className="space-y-1.5">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#171923] dark:text-[#F3F4F6]">
                {PROFILE.fullName}
              </h1>
              <p className="text-lg sm:text-xl font-medium text-[#4F46E5] dark:text-[#818CF8]">
                {t('hero.headline')}
              </p>
            </div>

            {/* Merged About Section (Gộp phần About lên đầu trang) */}
            <div className="space-y-2 text-sm sm:text-base text-[#606779] dark:text-[#A5AABA] leading-relaxed">
              <p>{t('hero.aboutBio1')}</p>
              <p>{t('hero.aboutBio2')}</p>
            </div>

            {/* Basic Information Block (Bỏ tiêu đề "Thông tin cơ bản", trực tiếp hiển thị grid sạch) */}
            <div className="rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] p-5 space-y-3.5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm">
                {/* Full Name */}
                <div className="flex items-center gap-2.5 text-[#171923] dark:text-[#F3F4F6]">
                  <User className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8] shrink-0" />
                  <span className="font-semibold">{PROFILE.fullName}</span>
                </div>

                {/* Date of Birth */}
                <div className="flex items-center gap-2.5 text-[#171923] dark:text-[#F3F4F6]">
                  <Calendar className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8] shrink-0" />
                  <span className="font-mono">{PROFILE.dateOfBirth}</span>
                </div>

                {/* Gender */}
                <div className="flex items-center gap-2.5 text-[#171923] dark:text-[#F3F4F6]">
                  <span className="w-4 text-center font-mono text-[#4F46E5] dark:text-[#818CF8] font-bold">♂</span>
                  <span>{lang === 'vi' ? 'Nam' : PROFILE.gender}</span>
                </div>

                {/* Location */}
                <div className="flex items-center gap-2.5 text-[#171923] dark:text-[#F3F4F6]">
                  <MapPin className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8] shrink-0" />
                  <span>{lang === 'vi' ? 'TP. Đà Nẵng, Việt Nam' : PROFILE.location}</span>
                </div>

                {/* Phone */}
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8] shrink-0" />
                  <a
                    href={`tel:${PROFILE.phone}`}
                    className="font-mono text-[#171923] dark:text-[#F3F4F6] hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors"
                  >
                    {PROFILE.phoneDisplay}
                  </a>
                </div>

                {/* Email */}
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8] shrink-0" />
                  <a
                    href={`mailto:${PROFILE.email}`}
                    className="font-mono text-[#171923] dark:text-[#F3F4F6] hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors truncate"
                  >
                    {PROFILE.email}
                  </a>
                </div>
              </div>

              {/* GitHub & LinkedIn Links */}
              <div className="pt-3 border-t border-[#E2E5EC] dark:border-[#303541] flex flex-wrap items-center gap-4 text-xs font-medium">
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#171923] dark:text-[#F3F4F6] hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors"
                >
                  <Github className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8]" />
                  <span>github.com/{PROFILE.githubHandle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#606779]" />
                </a>

                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#171923] dark:text-[#F3F4F6] hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors"
                >
                  <Linkedin className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8]" />
                  <span>linkedin.com/in/{PROFILE.linkedinHandle}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#606779]" />
                </a>
              </div>
            </div>

            {/* Single Primary Action: View Projects (Bỏ button Technical skill) */}
            <div className="pt-1">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider rounded-md bg-[#4F46E5] hover:bg-[#4338CA] dark:bg-[#818CF8] dark:hover:bg-[#6366F1] text-white dark:text-[#111318] transition-colors inline-flex items-center gap-2"
              >
                <span>{t('hero.viewProjects')}</span>
                <ArrowDown className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Personal Portrait with Minimal Frame */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="relative group max-w-sm mx-auto lg:max-w-none w-full">
              {/* Minimal geometric corners */}
              <div
                className="absolute -top-2.5 -right-2.5 w-16 h-16 border-t-2 border-r-2 border-[#4F46E5] dark:border-[#818CF8] pointer-events-none"
                aria-hidden="true"
              />
              <div
                className="absolute -bottom-2.5 -left-2.5 w-16 h-16 border-b-2 border-l-2 border-[#4F46E5] dark:border-[#818CF8] pointer-events-none"
                aria-hidden="true"
              />

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] aspect-[3/4]">
                <img
                  src={PROFILE.portraitImage}
                  alt={`Portrait of ${PROFILE.fullName}`}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale-[10%] group-hover:grayscale-0 transition-all duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />

                {/* Image Caption Metadata */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs text-white/90 font-mono">
                  <span>{PROFILE.fullName.toUpperCase()}</span>
                  <span>DA NANG, VN</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Expertise Block (Đưa Technical Expertise lên thay thế Primary Stack) */}
        <div id="technical-expertise" className="pt-6 border-t border-[#E2E5EC] dark:border-[#303541] space-y-5">
          <div className="flex items-center justify-between">
            <h2 className="text-lg sm:text-xl font-bold tracking-tight text-[#171923] dark:text-[#F3F4F6] flex items-center gap-2">
              <span className="w-1.5 h-4 bg-[#4F46E5] dark:bg-[#818CF8] rounded-xs" />
              <span>{t('hero.techExpertise')}</span>
            </h2>
            <span className="text-xs text-[#606779] dark:text-[#A5AABA] font-mono">
              Core Technologies
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {TECHNICAL_EXPERTISE.map((domain) => (
              <div
                key={domain.category}
                className="rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] p-4 space-y-3 hover:border-[#4F46E5]/60 dark:hover:border-[#818CF8]/60 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <div className="p-1.5 rounded bg-[#EEF2FF] dark:bg-[#24264A]">
                    {categoryIcons[domain.category] || (
                      <Server className="w-4 h-4 text-[#4F46E5] dark:text-[#818CF8]" />
                    )}
                  </div>
                  <h3 className="text-sm font-bold text-[#171923] dark:text-[#F3F4F6]">
                    {domain.category}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-1.5 pt-1">
                  {domain.skills.map((skill) => (
                    <span
                      key={skill}
                      className="text-xs px-2 py-0.5 rounded bg-[#F7F8FA] dark:bg-[#111318] border border-[#E2E5EC] dark:border-[#303541] text-[#171923] dark:text-[#F3F4F6] font-medium"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
