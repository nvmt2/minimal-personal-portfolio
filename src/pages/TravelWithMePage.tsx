import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Calendar, Clock, ArrowUpRight, Compass, Send } from 'lucide-react';
import { JOURNEYS } from '../data/journeys';
import { PROFILE } from '../data/profile';

export const TravelWithMePage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const featured = JOURNEYS.find((j) => j.isFeatured) || JOURNEYS[0];
  const collection = JOURNEYS.filter((j) => j.slug !== featured.slug);

  return (
    <div className="w-full py-12 md:py-20">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-24">
        {/* 1. Hero */}
        <div className="border-b border-[#E2E5EC] dark:border-[#303541] pb-12 space-y-6">
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5] dark:text-[#818CF8] font-mono">
              Personal Travel Experiences &amp; Shared Adventures
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#171923] dark:text-[#F3F4F6]">
              Travel With Me.
            </h1>
            <p className="text-lg sm:text-xl text-[#606779] dark:text-[#A5AABA] max-w-2xl leading-relaxed">
              Places I&apos;ve been, journeys we can share.
            </p>
          </div>

          {/* Large Scenic Travel Hero Image */}
          <div className="relative rounded-md border border-[#E2E5EC] dark:border-[#303541] overflow-hidden aspect-[21/9] sm:aspect-[16/7] bg-black/10">
            <img
              src={`${import.meta.env.BASE_URL}images/travel_mountain_pass_1793609549351.jpg`}
              alt="Mountain Pass Road Expedition"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-2 text-white">
              <div>
                <p className="text-xs uppercase font-mono tracking-wider text-white/80">
                  Expedition Logs · Southeast Asia &amp; Beyond
                </p>
                <p className="text-lg sm:text-xl font-bold">
                  Curated itineraries from personal expeditions
                </p>
              </div>
              <div className="text-xs font-mono text-white/70">
                NO BOOKING ENGINES · PURE ADVENTURE
              </div>
            </div>
          </div>
        </div>

        {/* 2. Featured Journey */}
        {featured && (
          <div className="rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] overflow-hidden group">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
              <Link
                to={`/travel-with-me/${featured.slug}`}
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
                  FEATURED JOURNEY
                </div>
              </Link>

              <div className="lg:col-span-5 p-6 sm:p-10 flex flex-col justify-between space-y-6">
                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-xs text-[#606779] dark:text-[#A5AABA] font-mono">
                    <span className="flex items-center gap-1 text-[#4F46E5] dark:text-[#818CF8]">
                      <MapPin className="w-3.5 h-3.5" />
                      <span>{featured.destination}</span>
                    </span>
                    <span aria-hidden="true">·</span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      <span>{featured.duration}</span>
                    </span>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-[#171923] dark:text-[#F3F4F6] group-hover:text-[#4F46E5] dark:group-hover:text-[#818CF8] transition-colors">
                    <Link to={`/travel-with-me/${featured.slug}`}>
                      {featured.title}
                    </Link>
                  </h2>

                  <p className="text-sm sm:text-base text-[#606779] dark:text-[#A5AABA] leading-relaxed">
                    {featured.shortDescription}
                  </p>

                  <div className="pt-2 text-xs text-[#606779] dark:text-[#A5AABA] space-y-1 font-mono">
                    <p><span className="text-[#171923] dark:text-[#F3F4F6] font-semibold">Travel Style:</span> {featured.travelStyle}</p>
                    <p><span className="text-[#171923] dark:text-[#F3F4F6] font-semibold">Best Season:</span> {featured.season}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-[#E2E5EC] dark:border-[#303541]">
                  <Link
                    to={`/travel-with-me/${featured.slug}`}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#4F46E5] hover:bg-[#4338CA] dark:bg-[#818CF8] dark:hover:bg-[#6366F1] text-white dark:text-[#111318] text-xs font-semibold uppercase tracking-wider transition-colors"
                  >
                    <span>Explore Journey</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3. Journey Collection */}
        <div className="space-y-8">
          <div className="border-b border-[#E2E5EC] dark:border-[#303541] pb-4 flex items-center justify-between">
            <h3 className="text-lg font-bold text-[#171923] dark:text-[#F3F4F6]">
              All Documented Journeys
            </h3>
            <span className="text-xs text-[#606779] dark:text-[#A5AABA] font-mono">
              {JOURNEYS.length} Documented Routes
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {collection.map((journey) => (
              <article
                key={journey.slug}
                className="rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] overflow-hidden flex flex-col justify-between group hover:border-[#4F46E5]/60 dark:hover:border-[#818CF8]/60 transition-colors"
              >
                <div>
                  <Link
                    to={`/travel-with-me/${journey.slug}`}
                    className="relative aspect-[16/10] overflow-hidden bg-black/10 block"
                  >
                    <img
                      src={journey.coverImage}
                      alt={journey.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-40" />
                    <div className="absolute top-4 left-4 text-xs font-mono text-white/90 bg-black/50 backdrop-blur-xs px-2 py-0.5 rounded flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{journey.region}</span>
                    </div>
                  </Link>

                  <div className="p-6 sm:p-8 space-y-3">
                    <div className="flex items-center gap-2 text-xs text-[#606779] dark:text-[#A5AABA] font-mono">
                      <span>{journey.destination}</span>
                      <span aria-hidden="true">·</span>
                      <span>{journey.duration}</span>
                    </div>

                    <h4 className="text-xl font-bold text-[#171923] dark:text-[#F3F4F6] group-hover:text-[#4F46E5] dark:group-hover:text-[#818CF8] transition-colors leading-snug">
                      <Link to={`/travel-with-me/${journey.slug}`}>
                        {journey.title}
                      </Link>
                    </h4>

                    <p className="text-xs sm:text-sm text-[#606779] dark:text-[#A5AABA] leading-relaxed">
                      {journey.shortDescription}
                    </p>
                  </div>
                </div>

                <div className="p-6 sm:p-8 pt-0 flex items-center justify-between border-t border-[#E2E5EC] dark:border-[#303541] mt-4">
                  <span className="text-xs text-[#606779] dark:text-[#A5AABA] font-mono">
                    {journey.itinerary.length} Day Itinerary
                  </span>
                  <Link
                    to={`/travel-with-me/${journey.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider text-[#4F46E5] dark:text-[#818CF8] hover:underline"
                  >
                    <span>Explore Route</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* 4. Travel Invitation */}
        <div className="rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#F7F8FA] dark:bg-[#1B1E27] p-8 md:p-12 space-y-6">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5] dark:text-[#818CF8] font-mono">
              Shared Explorations
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold text-[#171923] dark:text-[#F3F4F6]">
              Some journeys are better when shared.
            </h3>
            <p className="text-sm sm:text-base text-[#606779] dark:text-[#A5AABA] leading-relaxed">
              I believe the most meaningful travel happens away from tour groups and generic checklists. If you are planning an expedition to Northern Vietnam, the central coast, or have an adventure in mind that you&apos;d like to plan together, let&apos;s connect.
            </p>
          </div>

          <div className="pt-2 flex flex-wrap items-center gap-4">
            <a
              href={`mailto:${PROFILE.email}?subject=${encodeURIComponent("Let's Plan a Trip Together")}&body=${encodeURIComponent("Hi Toi,\n\nI was browsing your Travel With Me journeys and loved your itinerary for...\n")}`}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-[#4F46E5] hover:bg-[#4338CA] dark:bg-[#818CF8] dark:hover:bg-[#6366F1] text-white dark:text-[#111318] text-xs font-semibold uppercase tracking-wider transition-colors"
            >
              <Send className="w-4 h-4" />
              <span>Let&apos;s Plan a Trip</span>
            </a>
            <Link
              to="/#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] text-xs font-semibold uppercase tracking-wider text-[#171923] dark:text-[#F3F4F6] hover:border-[#4F46E5] transition-colors"
            >
              <span>General Inquiries</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
