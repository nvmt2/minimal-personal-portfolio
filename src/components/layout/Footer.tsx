import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { PROFILE } from '../../data/profile';
import { useLanguage } from '../../context/LanguageContext';

export const Footer: React.FC = () => {
  const { lang, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14">
        {/* Navigation & Direct Links Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 pb-10 border-b border-[#E2E5EC] dark:border-[#303541]">
          {/* Brand & Wordmark */}
          <div className="md:col-span-5 space-y-2">
            <Link to="/" className="text-base font-bold tracking-wider text-[#171923] dark:text-[#F3F4F6]">
              TOI NGUYEN
            </Link>
            <p className="text-xs text-[#606779] dark:text-[#A5AABA] max-w-sm leading-relaxed">
              Frontend Developer with 5+ years of experience building responsive React / Next.js web applications, with C# / .NET backend experience.
            </p>
          </div>

          {/* Quick Nav: Portfolio & Journey */}
          <div className="md:col-span-4 space-y-2.5">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#171923] dark:text-[#F3F4F6] font-mono">
              {lang === 'vi' ? 'Điều hướng' : 'Navigation'}
            </p>
            <ul className="grid grid-cols-2 gap-2 text-xs text-[#606779] dark:text-[#A5AABA]">
              <li>
                <a href="/#projects" className="hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors">
                  {t('nav.projects')}
                </a>
              </li>
              <li>
                <a href="/#timeline" className="hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors">
                  {t('nav.timeline')}
                </a>
              </li>
              <li>
                <Link to="/life-stories" className="hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors">
                  Life Stories
                </Link>
              </li>
              <li>
                <Link to="/travel-with-me" className="hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors">
                  Travel With Me
                </Link>
              </li>
            </ul>
          </div>

          {/* Socials & Connect */}
          <div className="md:col-span-3 space-y-2.5">
            <p className="text-xs uppercase tracking-wider font-semibold text-[#171923] dark:text-[#F3F4F6] font-mono">
              Connect
            </p>
            <div className="flex flex-col space-y-2 text-xs text-[#606779] dark:text-[#A5AABA]">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors"
              >
                <Github className="w-3.5 h-3.5 text-[#4F46E5] dark:text-[#818CF8]" />
                <span>github.com/{PROFILE.githubHandle}</span>
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors"
              >
                <Linkedin className="w-3.5 h-3.5 text-[#4F46E5] dark:text-[#818CF8]" />
                <span>linkedin.com/in/{PROFILE.linkedinHandle}</span>
              </a>
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2 hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors"
              >
                <Mail className="w-3.5 h-3.5 text-[#4F46E5] dark:text-[#818CF8]" />
                <span>{PROFILE.email}</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#606779] dark:text-[#A5AABA]">
          <p>© {new Date().getFullYear()} {PROFILE.fullName}. All rights reserved.</p>

          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 hover:text-[#171923] dark:hover:text-[#F3F4F6] transition-colors"
          >
            <span>{lang === 'vi' ? 'Lên đầu trang' : 'Back to top'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
