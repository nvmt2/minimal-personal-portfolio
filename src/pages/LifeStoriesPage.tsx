import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Compass, Clock, Calendar } from 'lucide-react';
import { STORIES } from '../data/stories';

export const LifeStoriesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const featured = STORIES.find((s) => s.isFeatured) || STORIES[0];
  const collection = STORIES.filter((s) => s.slug !== featured.slug);

  return (
    <div className="w-full py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* 1. Page Heading */}
        <div className="border-b border-[#E2E5EC] dark:border-[#303541] pb-8 space-y-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5] dark:text-[#818CF8] font-mono">
            Editorial Journal
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171923] dark:text-[#F3F4F6]">
            Life Stories.
          </h1>
          <p className="text-base sm:text-lg text-[#606779] dark:text-[#A5AABA] max-w-2xl leading-relaxed">
            Essays on software craftsmanship, the pursuit of stillness, and personal observations on how geography, solitude, and patience shape creative work.
          </p>
        </div>

        {/* 2. Featured Story */}
        {featured && (
          <div className="rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <Link
                to={`/life-stories/${featured.slug}`}
                className="lg:col-span-7 relative aspect-[16/10] lg:aspect-auto overflow-hidden bg-black/10 block"
              >
                <img
                  src={featured.coverImage}
                  alt={featured.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 text-xs font-mono text-white/90 bg-black/50 backdrop-blur-xs px-2.5 py-1 rounded">
                  FEATURED ESSAY
                </div>
              </Link>

              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  {/* Clean unboxed metadata with typographic separators */}
                  <div className="flex items-center gap-2 text-xs text-[#606779] dark:text-[#A5AABA] font-mono">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-3.5 h-3.5" />
                      <span>{featured.publishedDate}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featured.readTime}</span>
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171923] dark:text-[#F3F4F6] group-hover:text-[#4F46E5] dark:group-hover:text-[#818CF8] transition-colors">
                    <Link to={`/life-stories/${featured.slug}`}>
                      {featured.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-[#606779] dark:text-[#A5AABA] leading-relaxed">
                    {featured.excerpt}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E2E5EC] dark:border-[#303541]">
                  <Link
                    to={`/life-stories/${featured.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#4F46E5] hover:bg-[#4338CA] dark:bg-[#818CF8] dark:hover:bg-[#6366F1] text-white dark:text-[#111318] text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <span>Read Story</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. Story Collection Grid */}
        <div className="space-y-8">
          <div className="border-b border-[#E2E5EC] dark:border-[#303541] pb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#171923] dark:text-[#F3F4F6]">
              All Reflections &amp; Essays
            </h3>
            <span className="text-xs text-[#606779] dark:text-[#A5AABA] font-mono">
              {STORIES.length} Published Pieces
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {collection.map((story) => (
              <article
                key={story.slug}
                className="rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] overflow-hidden flex flex-col justify-between group hover:border-[#4F46E5]/60 dark:hover:border-[#818CF8]/60 transition-colors"
              >
                <div>
                  <Link
                    to={`/life-stories/${story.slug}`}
                    className="relative aspect-[16/10] overflow-hidden bg-black/10 block"
                  >
                    <img
                      src={story.coverImage}
                      alt={story.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40" />
                  </Link>

                  <div className="p-6 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#606779] dark:text-[#A5AABA] font-mono">
                      <span>{story.publishedDate}</span>
                      <span aria-hidden="true">·</span>
                      <span>{story.readTime}</span>
                    </div>

                    <h4 className="text-xl font-bold text-[#171923] dark:text-[#F3F4F6] group-hover:text-[#4F46E5] dark:group-hover:text-[#818CF8] transition-colors leading-snug">
                      <Link to={`/life-stories/${story.slug}`}>
                        {story.title}
                      </Link>
                    </h4>

                    <p className="text-xs sm:text-sm text-[#606779] dark:text-[#A5AABA] leading-relaxed line-clamp-3">
                      {story.excerpt}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0">
                  <Link
                    to={`/life-stories/${story.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#4F46E5] dark:text-[#818CF8] hover:underline"
                  >
                    <span>Read Article</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 4. Closing Section: Personal Message & Link to Travel With Me */}
        <div className="rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#F7F8FA] dark:bg-[#1B1E27] p-8 md:p-12 text-center space-y-6">
          <div className="max-w-xl mx-auto space-y-3">
            <h3 className="text-2xl font-bold text-[#171923] dark:text-[#F3F4F6]">
              Words on paper, footsteps on trails.
            </h3>
            <p className="text-sm text-[#606779] dark:text-[#A5AABA] leading-relaxed">
              When thoughts on craft find their limit, the road takes over. Discover the mountain passes, remote coastlines, and open itineraries where these reflections were born.
            </p>
          </div>

          <div className="pt-2">
            <Link
              to="/travel-with-me"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#4F46E5] hover:bg-[#4338CA] dark:bg-[#818CF8] dark:hover:bg-[#6366F1] text-white dark:text-[#111318] text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Compass className="w-4 h-4" />
              <span>Explore Travel With Me</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
