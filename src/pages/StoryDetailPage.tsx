import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Clock, Calendar, Share2, Check, ArrowUpRight } from 'lucide-react';
import { STORIES } from '../data/stories';

export const StoryDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const story = STORIES.find((s) => s.slug === slug);

  if (!story) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 py-24 text-center space-y-6">
        <h2 className="text-3xl font-bold text-[#171923] dark:text-[#F3F4F6]">
          Story not found
        </h2>
        <p className="text-sm text-[#606779] dark:text-[#A5AABA]">
          The essay you are looking for does not exist or has been moved.
        </p>
        <Link
          to="/life-stories"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#4F46E5] text-white text-xs uppercase font-semibold tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Life Stories</span>
        </Link>
      </div>
    );
  }

  const relatedStories = STORIES.filter((s) => s.slug !== story.slug).slice(0, 2);

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  return (
    <article className="w-full py-10 md:py-16">
      <div className="max-w-[840px] mx-auto px-4 sm:px-6 space-y-12">
        {/* Navigation back */}
        <div className="flex items-center justify-between border-b border-[#E2E5EC] dark:border-[#303541] pb-6">
          <Link
            to="/life-stories"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#606779] dark:text-[#A5AABA] hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Life Stories</span>
          </Link>

          <button
            type="button"
            onClick={handleCopyLink}
            className="inline-flex items-center gap-1.5 text-xs text-[#606779] dark:text-[#A5AABA] hover:text-[#171923] dark:hover:text-[#F3F4F6] transition-colors"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-500" />
                <span>Link Copied</span>
              </>
            ) : (
              <>
                <Share2 className="w-3.5 h-3.5" />
                <span>Share Essay</span>
              </>
            )}
          </button>
        </div>

        {/* Story Header */}
        <header className="space-y-6">
          {/* Metadata */}
          <div className="flex items-center gap-2 text-xs font-mono text-[#606779] dark:text-[#A5AABA]">
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5" />
              <span>{story.publishedDate}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" />
              <span>{story.readTime}</span>
            </span>
            <span aria-hidden="true">·</span>
            <span className="uppercase text-[#4F46E5] dark:text-[#818CF8] font-semibold">{story.category}</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171923] dark:text-[#F3F4F6] leading-[1.15] text-balance">
            {story.title}
          </h1>

          <p className="text-lg sm:text-xl text-[#606779] dark:text-[#A5AABA] leading-relaxed font-medium">
            {story.subtitle}
          </p>
        </header>

        {/* Cover Image Container */}
        <div className="rounded-md border border-[#E2E5EC] dark:border-[#303541] overflow-hidden aspect-[16/9] bg-black/10">
          <img
            src={story.coverImage}
            alt={story.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Article Content: Editorial Prose */}
        <div className="space-y-8 text-base sm:text-lg text-[#171923]/90 dark:text-[#F3F4F6]/90 leading-[1.8] font-normal">
          {story.content.map((section, idx) => (
            <section key={idx} className="space-y-6">
              {section.heading && (
                <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171923] dark:text-[#F3F4F6] pt-6 border-t border-[#E2E5EC] dark:border-[#303541]">
                  {section.heading}
                </h2>
              )}

              {section.paragraphs.map((para, pIdx) => (
                <p key={pIdx} className="leading-relaxed">
                  {para}
                </p>
              ))}

              {section.quote && (
                <blockquote className="my-8 p-6 rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] space-y-2">
                  <p className="text-lg sm:text-xl font-medium italic text-[#171923] dark:text-[#F3F4F6] leading-snug">
                    &ldquo;{section.quote}&rdquo;
                  </p>
                  {section.quoteAuthor && (
                    <cite className="block text-xs uppercase tracking-wider text-[#606779] dark:text-[#A5AABA] font-mono not-italic">
                      — {section.quoteAuthor}
                    </cite>
                  )}
                </blockquote>
              )}
            </section>
          ))}
        </div>

        {/* Author signoff */}
        <div className="pt-10 border-t border-[#E2E5EC] dark:border-[#303541] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <p className="text-sm font-bold text-[#171923] dark:text-[#F3F4F6]">Toi Nguyen</p>
            <p className="text-xs text-[#606779] dark:text-[#A5AABA]">Frontend Developer &amp; Essayist</p>
          </div>
          <Link
            to="/travel-with-me"
            className="text-xs font-semibold uppercase tracking-wider text-[#4F46E5] dark:text-[#818CF8] hover:underline inline-flex items-center gap-1"
          >
            <span>Read Next: Travel Experiences</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Related Stories */}
        {relatedStories.length > 0 && (
          <div className="pt-12 border-t border-[#E2E5EC] dark:border-[#303541] space-y-6">
            <h3 className="text-xl font-bold text-[#171923] dark:text-[#F3F4F6]">
              More From Life Stories
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedStories.map((rel) => (
                <div
                  key={rel.slug}
                  onClick={() => navigate(`/life-stories/${rel.slug}`)}
                  className="rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] p-5 space-y-3 cursor-pointer group hover:border-[#4F46E5] dark:hover:border-[#818CF8] transition-colors"
                >
                  <div className="flex items-center gap-2 text-xs text-[#606779] dark:text-[#A5AABA] font-mono">
                    <span>{rel.publishedDate}</span>
                    <span aria-hidden="true">·</span>
                    <span>{rel.readTime}</span>
                  </div>
                  <h4 className="text-base font-bold text-[#171923] dark:text-[#F3F4F6] group-hover:text-[#4F46E5] dark:group-hover:text-[#818CF8] transition-colors">
                    {rel.title}
                  </h4>
                  <p className="text-xs text-[#606779] dark:text-[#A5AABA] line-clamp-2">
                    {rel.excerpt}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </article>
  );
};
