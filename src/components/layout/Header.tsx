import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Sun, Moon, Menu, X, ArrowUpRight, Languages } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

export const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLang, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    if (href.startsWith('/#')) {
      const hash = href.substring(2);
      if (location.pathname === '/') {
        const el = document.getElementById(hash);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/');
        setTimeout(() => {
          const el = document.getElementById(hash);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
          }
        }, 100);
      }
    } else {
      navigate(href);
    }
  };

  const navLinks = [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.projects'), href: '/#projects' },
    { label: t('nav.timeline'), href: '/#timeline' },
    { label: t('nav.stories'), href: '/life-stories' },
    { label: t('nav.travel'), href: '/travel-with-me' },
    { label: t('nav.contact'), href: '/#contact' },
  ];

  const isCurrentRoute = (href: string) => {
    if (href === '/' && location.pathname === '/' && !location.hash) return true;
    if (href.startsWith('/life-stories') && location.pathname.startsWith('/life-stories')) return true;
    if (href.startsWith('/travel-with-me') && location.pathname.startsWith('/travel-with-me')) return true;
    return false;
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-[#F7F8FA]/90 dark:bg-[#111318]/90 backdrop-blur-md border-b border-[#E2E5EC] dark:border-[#303541] transition-colors duration-200">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-6">
        {/* Zone 1: Brand Wordmark: "TOI NGUYEN" (yêu cầu 3) */}
        <Link
          to="/"
          className="text-base font-bold tracking-wider text-[#171923] dark:text-[#F3F4F6] hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors whitespace-nowrap shrink-0"
        >
          TOI NGUYEN
        </Link>

        {/* Zone 2: Single-Line Nav Links */}
        <nav className="hidden lg:flex items-center gap-6 text-sm font-medium">
          {navLinks.map((link) => {
            const active = isCurrentRoute(link.href);
            return (
              <button
                key={link.label}
                type="button"
                onClick={() => handleNavClick(link.href)}
                className={`transition-colors whitespace-nowrap shrink-0 relative py-1 text-xs uppercase tracking-wider ${
                  active
                    ? 'text-[#4F46E5] dark:text-[#818CF8] font-semibold'
                    : 'text-[#606779] dark:text-[#A5AABA] hover:text-[#171923] dark:hover:text-[#F3F4F6]'
                }`}
              >
                {link.label}
                {active && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-[#4F46E5] dark:bg-[#818CF8]" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Language Toggle, Theme Toggle & Primary Action */}
        <div className="flex items-center gap-2.5 shrink-0">
          {/* Language Switcher (VI / EN) */}
          <button
            type="button"
            onClick={toggleLang}
            title={lang === 'vi' ? 'Switch to English' : 'Chuyển sang Tiếng Việt'}
            aria-label="Toggle language"
            className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] text-xs font-semibold uppercase tracking-wider text-[#171923] dark:text-[#F3F4F6] hover:border-[#4F46E5] dark:hover:border-[#818CF8] transition-colors"
          >
            <Languages className="w-3.5 h-3.5 text-[#4F46E5] dark:text-[#818CF8]" />
            <span>{lang === 'vi' ? '🇻🇳 VI' : '🇬🇧 EN'}</span>
          </button>

          {/* Theme Switcher */}
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
            className="p-2 rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] text-[#171923] dark:text-[#F3F4F6] hover:border-[#4F46E5] dark:hover:border-[#818CF8] transition-colors focus:outline-none"
          >
            {theme === 'light' ? (
              <Moon className="w-4 h-4 text-[#606779]" />
            ) : (
              <Sun className="w-4 h-4 text-[#818CF8]" />
            )}
          </button>

          {/* Connect button */}
          <button
            type="button"
            onClick={() => handleNavClick('/#contact')}
            className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-md bg-[#4F46E5] hover:bg-[#4338CA] dark:bg-[#818CF8] dark:hover:bg-[#6366F1] text-white dark:text-[#111318] transition-colors whitespace-nowrap shrink-0"
          >
            <span>{t('nav.connect')}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>

          {/* Mobile menu toggle */}
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle mobile menu"
            className="lg:hidden p-2 rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] text-[#171923] dark:text-[#F3F4F6]"
          >
            {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] px-6 py-5 space-y-3">
          {navLinks.map((link) => (
            <button
              key={link.label}
              type="button"
              onClick={() => handleNavClick(link.href)}
              className="block w-full text-left py-2 text-sm uppercase tracking-wider font-medium text-[#171923] dark:text-[#F3F4F6] hover:text-[#4F46E5] dark:hover:text-[#818CF8] border-b border-[#E2E5EC]/50 dark:border-[#303541]/50 last:border-none"
            >
              {link.label}
            </button>
          ))}
          <div className="pt-2 flex items-center justify-between gap-3">
            <button
              type="button"
              onClick={toggleLang}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold uppercase rounded-md border border-[#E2E5EC] dark:border-[#303541]"
            >
              <Languages className="w-3.5 h-3.5" />
              <span>{lang === 'vi' ? 'Tiếng Việt (VI)' : 'English (EN)'}</span>
            </button>
            <button
              type="button"
              onClick={() => handleNavClick('/#contact')}
              className="flex-1 flex items-center justify-center gap-1.5 py-2 text-xs font-semibold uppercase rounded-md bg-[#4F46E5] text-white dark:bg-[#818CF8] dark:text-[#111318]"
            >
              <span>{t('nav.connect')}</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
