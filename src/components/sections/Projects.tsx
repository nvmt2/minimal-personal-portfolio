import React, { useState } from 'react';
import { ExternalLink, Github, ArrowUpRight, X } from 'lucide-react';
import { PROJECTS, Project } from '../../data/projects';
import { useLanguage } from '../../context/LanguageContext';

export const Projects: React.FC = () => {
  const { lang, t } = useLanguage();
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const featured = PROJECTS.find((p) => p.isFeatured) || PROJECTS[0];
  const supporting = PROJECTS.filter((p) => p.id !== featured.id);

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-[#E2E5EC] dark:border-[#303541]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E2E5EC] dark:border-[#303541] pb-6">
          <div className="space-y-1.5">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5] dark:text-[#818CF8] font-mono">
              {t('projects.tag')}
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171923] dark:text-[#F3F4F6]">
              {t('projects.title')}
            </h2>
          </div>
          <p className="text-sm text-[#606779] dark:text-[#A5AABA] max-w-md">
            {lang === 'vi'
              ? 'Hệ thống phân tán, xử lý dữ liệu vi mô, API chuẩn mực và kiến trúc web hiện đại.'
              : 'Architectures spanning distributed telemetry, high-throughput systems, and resilient web applications.'}
          </p>
        </div>

        {/* Featured Project Showcase */}
        {featured && (
          <div className="rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              {/* Visual Preview */}
              <div
                className="lg:col-span-7 relative aspect-[16/9] lg:aspect-auto cursor-pointer group bg-black/5 dark:bg-black/30 overflow-hidden"
                onClick={() => setActiveModalProject(featured)}
              >
                {featured.image ? (
                  <img
                    src={featured.image}
                    alt={featured.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center font-mono text-sm text-[#606779]">
                    [Architecture Visualization]
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute bottom-4 left-4 text-xs font-mono text-white/90">
                  {lang === 'vi' ? 'Nhấp để xem chi tiết kiến trúc' : 'Click to inspect system architecture'}
                </div>
              </div>

              {/* Details Column */}
              <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#606779] dark:text-[#A5AABA] font-mono">
                    <span>{featured.year}</span>
                    <span>{featured.role}</span>
                  </div>

                  <h3
                    onClick={() => setActiveModalProject(featured)}
                    className="text-2xl font-bold text-[#171923] dark:text-[#F3F4F6] hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors cursor-pointer"
                  >
                    {featured.title}
                  </h3>

                  <p className="text-sm text-[#606779] dark:text-[#A5AABA] leading-relaxed">
                    {featured.description}
                  </p>

                  {/* Quantitative Metrics */}
                  {featured.metrics && (
                    <div className="grid grid-cols-3 gap-2 pt-2 border-y border-[#E2E5EC] dark:border-[#303541] py-3">
                      {featured.metrics.map((metric) => (
                        <div key={metric.label} className="space-y-0.5">
                          <p className="text-sm font-bold text-[#171923] dark:text-[#F3F4F6] font-mono tabular-nums">
                            {metric.value}
                          </p>
                          <p className="text-[11px] uppercase tracking-wider text-[#606779] dark:text-[#A5AABA]">
                            {metric.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  )}

                  {/* Unboxed Tech List */}
                  <div className="pt-2">
                    <p className="text-[11px] uppercase tracking-wider text-[#606779] dark:text-[#A5AABA] font-mono mb-1.5">
                      Stack
                    </p>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-[#171923] dark:text-[#F3F4F6]">
                      {featured.technologies.map((t, idx) => (
                        <React.Fragment key={t}>
                          <span>{t}</span>
                          {idx < featured.technologies.length - 1 && (
                            <span className="text-[#606779]/50" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-4 pt-2">
                  <button
                    type="button"
                    onClick={() => setActiveModalProject(featured)}
                    className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md bg-[#4F46E5] text-white hover:bg-[#4338CA] dark:bg-[#818CF8] dark:hover:bg-[#6366F1] dark:text-[#111318] transition-colors inline-flex items-center gap-1.5"
                  >
                    <span>{lang === 'vi' ? 'Xem kiến trúc' : 'Architecture Deep Dive'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-2 rounded-md border border-[#E2E5EC] dark:border-[#303541] text-[#171923] dark:text-[#F3F4F6] hover:border-[#4F46E5] dark:hover:border-[#818CF8] transition-colors"
                    aria-label="View source on GitHub"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Supporting Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {supporting.map((project) => (
            <div
              key={project.id}
              className="rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] p-6 flex flex-col justify-between hover:border-[#4F46E5]/60 dark:hover:border-[#818CF8]/60 transition-colors"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between text-xs text-[#606779] dark:text-[#A5AABA] font-mono">
                  <span>{project.year}</span>
                  <span>{project.role}</span>
                </div>

                <h3
                  onClick={() => setActiveModalProject(project)}
                  className="text-lg font-bold text-[#171923] dark:text-[#F3F4F6] hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors cursor-pointer"
                >
                  {project.title}
                </h3>

                <p className="text-xs sm:text-sm text-[#606779] dark:text-[#A5AABA] leading-relaxed">
                  {project.description}
                </p>

                {/* Tech List */}
                <div className="pt-2 text-xs text-[#171923] dark:text-[#F3F4F6] flex flex-wrap items-center gap-x-2 gap-y-1">
                  {project.technologies.map((tech, i) => (
                    <React.Fragment key={tech}>
                      <span>{tech}</span>
                      {i < project.technologies.length - 1 && (
                        <span className="text-[#606779]/50" aria-hidden="true">·</span>
                      )}
                    </React.Fragment>
                  ))}
                </div>
              </div>

              {/* Links */}
              <div className="flex items-center justify-between pt-6 mt-6 border-t border-[#E2E5EC] dark:border-[#303541]">
                <button
                  type="button"
                  onClick={() => setActiveModalProject(project)}
                  className="text-xs uppercase tracking-wider font-semibold text-[#4F46E5] dark:text-[#818CF8] hover:underline inline-flex items-center gap-1"
                >
                  <span>{lang === 'vi' ? 'Chi tiết' : 'Details'}</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
                <div className="flex items-center gap-2">
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 text-[#606779] hover:text-[#171923] dark:hover:text-[#F3F4F6] transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <Github className="w-4 h-4" />
                  </a>
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noreferrer"
                      className="p-1.5 text-[#606779] hover:text-[#171923] dark:hover:text-[#F3F4F6] transition-colors"
                      aria-label="Live Demo"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Inspection Modal */}
      {activeModalProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs"
          onClick={() => setActiveModalProject(null)}
        >
          <div
            className="w-full max-w-2xl rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4 border-b border-[#E2E5EC] dark:border-[#303541] pb-4">
              <div>
                <p className="text-xs font-mono text-[#4F46E5] dark:text-[#818CF8] uppercase tracking-wider">
                  {activeModalProject.year} · {activeModalProject.role}
                </p>
                <h3 className="text-2xl font-bold text-[#171923] dark:text-[#F3F4F6] mt-1">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setActiveModalProject(null)}
                aria-label="Close dialog"
                className="p-1.5 rounded-md border border-[#E2E5EC] dark:border-[#303541] hover:bg-[#F7F8FA] dark:hover:bg-[#111318] text-[#606779]"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {activeModalProject.image && (
              <div className="rounded border border-[#E2E5EC] dark:border-[#303541] overflow-hidden aspect-[16/9]">
                <img
                  src={activeModalProject.image}
                  alt={activeModalProject.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            <div className="space-y-4 text-sm text-[#606779] dark:text-[#A5AABA] leading-relaxed">
              <p className="font-medium text-[#171923] dark:text-[#F3F4F6]">
                {activeModalProject.headline}
              </p>
              <p>{activeModalProject.longDescription || activeModalProject.description}</p>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#E2E5EC] dark:border-[#303541]">
              <p className="text-xs uppercase font-mono tracking-wider text-[#606779] dark:text-[#A5AABA]">
                Technologies & Architecture
              </p>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.technologies.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded bg-[#F7F8FA] dark:bg-[#111318] border border-[#E2E5EC] dark:border-[#303541] text-[#171923] dark:text-[#F3F4F6] font-mono"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-4 border-t border-[#E2E5EC] dark:border-[#303541]">
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md border border-[#E2E5EC] dark:border-[#303541] text-[#171923] dark:text-[#F3F4F6] hover:border-[#4F46E5] inline-flex items-center gap-2"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              {activeModalProject.liveUrl && (
                <a
                  href={activeModalProject.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="px-4 py-2 text-xs font-semibold uppercase tracking-wider rounded-md bg-[#4F46E5] dark:bg-[#818CF8] text-white dark:text-[#111318] hover:opacity-90 inline-flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Preview</span>
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
