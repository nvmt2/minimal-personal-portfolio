import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { STORIES } from '../../data/stories';
import { JOURNEYS } from '../../data/journeys';

export const BeyondCoding: React.FC = () => {
  const featuredStory = STORIES[0];
  const featuredJourney = JOURNEYS[0];

  return (
    <section id="beyond-coding" className="py-20 md:py-28 border-b border-[#E2E5EC] dark:border-[#303541]">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E2E5EC] dark:border-[#303541] pb-6">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5] dark:text-[#818CF8] font-mono">
              03. Identity
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171923] dark:text-[#F3F4F6]">
              Beyond Coding
            </h2>
          </div>
          <p className="text-sm text-[#606779] dark:text-[#A5AABA] max-w-md">
            The person beyond the screen. Exploring the reflections that shape perspective and the physical journeys that test endurance.
          </p>
        </div>

        {/* Exactly TWO Content Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
          {/* Category A: Life Stories */}
          <div className="rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] overflow-hidden flex flex-col justify-between group">
            <div>
              {/* Editorial Cover Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                <img
                  src={featuredStory.coverImage}
                  alt={featuredStory.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 text-xs font-mono text-white/90 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded">
                  ESSAYS &amp; REFLECTIONS
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#171923] dark:text-[#F3F4F6] group-hover:text-[#4F46E5] dark:group-hover:text-[#818CF8] transition-colors">
                    Life Stories.
                  </h3>
                  <p className="text-sm font-medium text-[#171923] dark:text-[#F3F4F6]">
                    &ldquo;Life is a collection of stories, experiences, and moments that shape who we are.&rdquo;
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#606779] dark:text-[#A5AABA] leading-relaxed">
                  Personal essays, reflections on software craftsmanship, stillness, and life between coastal quiet and urban acceleration.
                </p>

                {/* Latest piece preview */}
                <div className="pt-2 text-xs text-[#606779] dark:text-[#A5AABA] font-mono flex items-center gap-2">
                  <span>Latest: &ldquo;{featuredStory.title}&rdquo;</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredStory.readTime}</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 sm:p-8 pt-0">
              <Link
                to="/life-stories"
                className="w-full py-3 px-4 rounded-md border border-[#E2E5EC] dark:border-[#303541] text-xs font-semibold uppercase tracking-wider text-[#171923] dark:text-[#F3F4F6] hover:bg-[#4F46E5] hover:text-white dark:hover:bg-[#818CF8] dark:hover:text-[#111318] hover:border-transparent transition-colors flex items-center justify-between"
              >
                <span>Explore Stories</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Category B: Travel With Me */}
          <div className="rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] overflow-hidden flex flex-col justify-between group">
            <div>
              {/* Large Travel Photography */}
              <div className="relative aspect-[16/10] overflow-hidden bg-black/10">
                <img
                  src={featuredJourney.coverImage}
                  alt={featuredJourney.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 left-4 text-xs font-mono text-white/90 bg-black/40 backdrop-blur-xs px-2.5 py-1 rounded">
                  EXPEDITIONS &amp; ROUTES
                </div>
              </div>

              {/* Text Area */}
              <div className="p-6 sm:p-8 space-y-4">
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold text-[#171923] dark:text-[#F3F4F6] group-hover:text-[#4F46E5] dark:group-hover:text-[#818CF8] transition-colors">
                    Travel With Me.
                  </h3>
                  <p className="text-sm font-medium text-[#171923] dark:text-[#F3F4F6]">
                    &ldquo;Some journeys are too beautiful to keep to yourself. Let&apos;s explore them together.&rdquo;
                  </p>
                </div>

                <p className="text-xs sm:text-sm text-[#606779] dark:text-[#A5AABA] leading-relaxed">
                  Personal travel experiences, high mountain passes, and coastal wilderness. An open invitation for fellow adventurers to connect about traveling together.
                </p>

                {/* Featured journey preview */}
                <div className="pt-2 text-xs text-[#606779] dark:text-[#A5AABA] font-mono flex items-center gap-2">
                  <span>Featured: {featuredJourney.destination}</span>
                  <span aria-hidden="true">·</span>
                  <span>{featuredJourney.duration}</span>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="p-6 sm:p-8 pt-0">
              <Link
                to="/travel-with-me"
                className="w-full py-3 px-4 rounded-md border border-[#E2E5EC] dark:border-[#303541] text-xs font-semibold uppercase tracking-wider text-[#171923] dark:text-[#F3F4F6] hover:bg-[#4F46E5] hover:text-white dark:hover:bg-[#818CF8] dark:hover:text-[#111318] hover:border-transparent transition-colors flex items-center justify-between"
              >
                <span>Explore Journeys</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
