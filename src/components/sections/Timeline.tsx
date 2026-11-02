import React, { useState } from 'react';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { TIMELINE_ITEMS, TimelineItem } from '../../data/skills';
import { useLanguage } from '../../context/LanguageContext';

export const Timeline: React.FC = () => {
  const { lang, t } = useLanguage();
  const [filter, setFilter] = useState<'all' | 'work' | 'education'>('all');

  const filteredItems = TIMELINE_ITEMS.filter((item) => {
    if (filter === 'all') return true;
    return item.type === filter;
  });

  return (
    <section id="timeline" className="py-16 md:py-24 border-b border-[#E2E5EC] dark:border-[#303541]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E2E5EC] dark:border-[#303541] pb-6">
          <div className="space-y-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5] dark:text-[#818CF8] font-mono">
              {t('timeline.tag')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171923] dark:text-[#F3F4F6]">
              {t('timeline.title')}
            </h2>
          </div>

          {/* Filter segment controls */}
          <div className="flex items-center gap-1.5 p-1 rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] text-xs font-medium">
            <button
              type="button"
              onClick={() => setFilter('all')}
              className={`px-3 py-1.5 rounded transition-colors ${
                filter === 'all'
                  ? 'bg-[#4F46E5] text-white dark:bg-[#818CF8] dark:text-[#111318]'
                  : 'text-[#606779] dark:text-[#A5AABA] hover:text-[#171923] dark:hover:text-[#F3F4F6]'
              }`}
            >
              {lang === 'vi' ? 'Tất cả' : 'All'}
            </button>
            <button
              type="button"
              onClick={() => setFilter('work')}
              className={`px-3 py-1.5 rounded transition-colors ${
                filter === 'work'
                  ? 'bg-[#4F46E5] text-white dark:bg-[#818CF8] dark:text-[#111318]'
                  : 'text-[#606779] dark:text-[#A5AABA] hover:text-[#171923] dark:hover:text-[#F3F4F6]'
              }`}
            >
              {t('timeline.work')}
            </button>
            <button
              type="button"
              onClick={() => setFilter('education')}
              className={`px-3 py-1.5 rounded transition-colors ${
                filter === 'education'
                  ? 'bg-[#4F46E5] text-white dark:bg-[#818CF8] dark:text-[#111318]'
                  : 'text-[#606779] dark:text-[#A5AABA] hover:text-[#171923] dark:hover:text-[#F3F4F6]'
              }`}
            >
              {t('timeline.education')}
            </button>
          </div>
        </div>

        {/* Timeline Stream */}
        <div className="relative border-l-2 border-[#E2E5EC] dark:border-[#303541] ml-3 sm:ml-4 pl-6 sm:pl-8 space-y-10">
          {filteredItems.map((item, index) => {
            const isEducation = item.type === 'education';
            const role = lang === 'vi' ? item.roleVi : item.role;
            const organization = lang === 'vi' ? item.organizationVi : item.organization;
            const summary = lang === 'vi' ? item.summaryVi : item.summary;
            const highlights = lang === 'vi' ? item.highlightsVi : item.highlights;

            return (
              <div key={index} className="relative group">
                {/* Node Icon on Timeline Axis */}
                <div
                  className={`absolute -left-[35px] sm:-left-[43px] top-1 w-8 h-8 rounded-full border-2 border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] flex items-center justify-center transition-colors group-hover:border-[#4F46E5] dark:group-hover:border-[#818CF8] ${
                    isEducation
                      ? 'text-[#059669] dark:text-[#34D399]'
                      : 'text-[#4F46E5] dark:text-[#818CF8]'
                  }`}
                >
                  {isEducation ? (
                    <GraduationCap className="w-4 h-4" />
                  ) : (
                    <Briefcase className="w-4 h-4" />
                  )}
                </div>

                {/* Timeline Card */}
                <div className="rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] p-5 sm:p-6 space-y-3.5 hover:border-[#4F46E5]/60 dark:hover:border-[#818CF8]/60 transition-colors">
                  {/* Card Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1.5 border-b border-[#E2E5EC] dark:border-[#303541] pb-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <span
                          className={`text-[11px] font-mono uppercase tracking-wider font-semibold px-2 py-0.5 rounded ${
                            isEducation
                              ? 'bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-800'
                              : 'bg-indigo-50 dark:bg-indigo-950/60 text-indigo-700 dark:text-indigo-300 border border-indigo-200 dark:border-indigo-800'
                          }`}
                        >
                          {isEducation ? t('timeline.education') : t('timeline.work')}
                        </span>
                        <span className="text-xs font-mono text-[#606779] dark:text-[#A5AABA] flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5" />
                          <span>{item.period}</span>
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-[#171923] dark:text-[#F3F4F6] mt-1.5">
                        {role}
                      </h3>
                    </div>

                    <div className="text-xs sm:text-sm font-semibold text-[#4F46E5] dark:text-[#818CF8] flex items-center gap-1.5">
                      <span>{organization}</span>
                      {item.location && (
                        <span className="text-[#606779] dark:text-[#A5AABA] font-normal flex items-center gap-0.5">
                          <MapPin className="w-3 h-3" />
                          <span>{item.location}</span>
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Summary */}
                  <p className="text-xs sm:text-sm text-[#606779] dark:text-[#A5AABA] leading-relaxed">
                    {summary}
                  </p>

                  {/* Highlights */}
                  {highlights && highlights.length > 0 && (
                    <ul className="space-y-1.5 pt-1 text-xs text-[#171923] dark:text-[#F3F4F6]">
                      {highlights.map((hl, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span
                            className={
                              isEducation
                                ? 'text-emerald-600 dark:text-emerald-400'
                                : 'text-[#4F46E5] dark:text-[#818CF8]'
                            }
                            aria-hidden="true"
                          >
                            ·
                          </span>
                          <span>{hl}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
