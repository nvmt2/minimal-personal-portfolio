import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  MapPin,
  Clock,
  Compass,
  Calendar,
  Send,
  ChevronDown,
  ChevronUp,
  Camera,
  Share2,
  Check,
  CheckCircle2,
} from 'lucide-react';
import { JOURNEYS } from '../data/journeys';
import { PROFILE } from '../data/profile';

export const JourneyDetailPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);
  const [expandedDay, setExpandedDay] = useState<number | null>(1);
  const [customNote, setCustomNote] = useState('');
  const [senderName, setSenderName] = useState('');
  const [inquirySent, setInquirySent] = useState(false);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const journey = JOURNEYS.find((j) => j.slug === slug);

  if (!journey) {
    return (
      <div className="max-w-[1200px] mx-auto px-4 py-24 text-center space-y-6">
        <h2 className="text-3xl font-bold text-[#171923] dark:text-[#F3F4F6]">
          Journey Not Found
        </h2>
        <p className="text-sm text-[#606779] dark:text-[#A5AABA]">
          The travel route you are searching for does not exist.
        </p>
        <Link
          to="/travel-with-me"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md bg-[#4F46E5] text-white text-xs uppercase font-semibold tracking-wider"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Travel With Me</span>
        </Link>
      </div>
    );
  }

  const handleCopyLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
    }
  };

  const handleSendTripInquiry = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`Let's Plan a Trip: ${journey.title}`);
    const mailtoBody = encodeURIComponent(
      `Hello Toi,\n\nName: ${senderName || 'Fellow Traveler'}\nJourney of Interest: ${journey.title} (${journey.destination})\n\nMessage:\n${customNote || 'I was inspired by your documented journey and would love to connect about experiencing something similar or planning an adventure together.'}\n`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setInquirySent(true);
    setTimeout(() => setInquirySent(false), 8000);
  };

  const mailtoDirectUrl = `mailto:${PROFILE.email}?subject=${encodeURIComponent(
    `Let's Plan a Trip: ${journey.title}`
  )}&body=${encodeURIComponent(
    `Hi Toi,\n\nI was reading your journey "${journey.title}" (${journey.destination}) on your portfolio.\n\nI would love to connect and plan a similar adventure together!\n`
  )}`;

  return (
    <div className="w-full py-10 md:py-16">
      <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-8 space-y-16 md:space-y-20">
        {/* Navigation Bar */}
        <div className="flex items-center justify-between border-b border-[#E2E5EC] dark:border-[#303541] pb-6">
          <Link
            to="/travel-with-me"
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#606779] dark:text-[#A5AABA] hover:text-[#4F46E5] dark:hover:text-[#818CF8] transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>All Journeys</span>
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
                <span>Share Route</span>
              </>
            )}
          </button>
        </div>

        {/* Section A: Journey Introduction */}
        <section className="space-y-6">
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-3 text-xs font-mono text-[#606779] dark:text-[#A5AABA]">
              <span className="flex items-center gap-1 text-[#4F46E5] dark:text-[#818CF8] font-semibold">
                <MapPin className="w-3.5 h-3.5" />
                <span>{journey.destination}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Clock className="w-3.5 h-3.5" />
                <span>{journey.duration}</span>
              </span>
              <span aria-hidden="true">·</span>
              <span className="flex items-center gap-1">
                <Compass className="w-3.5 h-3.5" />
                <span>{journey.travelStyle}</span>
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-[#171923] dark:text-[#F3F4F6] leading-[1.12]">
              {journey.title}
            </h1>

            <p className="text-lg sm:text-xl text-[#606779] dark:text-[#A5AABA] leading-relaxed">
              {journey.shortDescription}
            </p>
          </div>

          {/* Cover image */}
          <div className="rounded-md border border-[#E2E5EC] dark:border-[#303541] overflow-hidden aspect-[16/9] bg-black/10">
            <img
              src={journey.coverImage}
              alt={journey.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Section B: The Story */}
        <section className="space-y-8 border-t border-[#E2E5EC] dark:border-[#303541] pt-12">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5] dark:text-[#818CF8] font-mono">
              Field Chronicle
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171923] dark:text-[#F3F4F6]">
              The Story
            </h2>
          </div>

          <div className="space-y-6 text-base sm:text-lg text-[#171923]/90 dark:text-[#F3F4F6]/90 leading-[1.8]">
            <p>{journey.story.overview}</p>

            <div className="rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] p-6 space-y-2 my-6">
              <h3 className="text-xs font-mono uppercase tracking-wider text-[#606779] dark:text-[#A5AABA] font-bold">
                Why I Chose This Route
              </h3>
              <p className="text-sm sm:text-base text-[#171923] dark:text-[#F3F4F6] leading-relaxed italic">
                &ldquo;{journey.story.whyChosen}&rdquo;
              </p>
            </div>

            <div className="space-y-3 pt-4">
              <h3 className="text-xl font-bold text-[#171923] dark:text-[#F3F4F6]">
                Memorable Experiences
              </h3>
              <ul className="space-y-3 text-base text-[#606779] dark:text-[#A5AABA]">
                {journey.story.memorableMoments.map((moment, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="font-mono text-[#4F46E5] dark:text-[#818CF8] font-bold text-sm">
                      0{idx + 1}.
                    </span>
                    <span className="leading-relaxed">{moment}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="pt-4 space-y-2">
              <h3 className="text-xl font-bold text-[#171923] dark:text-[#F3F4F6]">
                Personal Observations
              </h3>
              <p className="text-base text-[#606779] dark:text-[#A5AABA] leading-relaxed">
                {journey.story.observations}
              </p>
            </div>
          </div>
        </section>

        {/* Section C: Journey Highlights & Gallery */}
        <section className="space-y-8 border-t border-[#E2E5EC] dark:border-[#303541] pt-12">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5] dark:text-[#818CF8] font-mono">
              Curated Landmarks
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#171923] dark:text-[#F3F4F6]">
              Journey Highlights
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {journey.highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] p-5 space-y-2 flex flex-col justify-between"
              >
                <div className="space-y-1.5">
                  <div className="text-[11px] font-mono uppercase tracking-wider text-[#4F46E5] dark:text-[#818CF8] font-semibold">
                    {h.tag}
                  </div>
                  <h3 className="text-base font-bold text-[#171923] dark:text-[#F3F4F6]">
                    {h.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#606779] dark:text-[#A5AABA] leading-relaxed">
                    {h.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Photo Gallery */}
          {journey.galleryImages.length > 0 && (
            <div className="pt-6 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-[#606779] dark:text-[#A5AABA]">
                <Camera className="w-4 h-4" />
                <span>Expedition Visual Archive</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {journey.galleryImages.map((img, i) => (
                  <div
                    key={i}
                    className="group rounded-md border border-[#E2E5EC] dark:border-[#303541] overflow-hidden bg-black/10"
                  >
                    <div className="aspect-[4/3] overflow-hidden">
                      <img
                        src={img.url}
                        alt={img.caption}
                        referrerPolicy="no-referrer"
                        className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-500"
                      />
                    </div>
                    <p className="p-3 text-xs text-[#606779] dark:text-[#A5AABA] bg-[#FFFFFF] dark:bg-[#1B1E27] border-t border-[#E2E5EC] dark:border-[#303541]">
                      {img.caption}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* Section D: Itinerary */}
        <section className="space-y-6 border-t border-[#E2E5EC] dark:border-[#303541] pt-12">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5] dark:text-[#818CF8] font-mono">
                Day-by-Day Breakdown
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#171923] dark:text-[#F3F4F6]">
                Itinerary
              </h2>
            </div>
            <p className="text-xs text-[#606779] dark:text-[#A5AABA] font-mono">
              Click any stage to expand travel notes
            </p>
          </div>

          <div className="space-y-3">
            {journey.itinerary.map((day) => {
              const isExpanded = expandedDay === day.day;
              return (
                <div
                  key={day.day}
                  className="rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] overflow-hidden transition-colors"
                >
                  <button
                    type="button"
                    onClick={() => setExpandedDay(isExpanded ? null : day.day)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 hover:bg-[#F7F8FA] dark:hover:bg-[#111318] transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 rounded border border-[#E2E5EC] dark:border-[#303541] flex items-center justify-center font-mono font-bold text-xs text-[#4F46E5] dark:text-[#818CF8] shrink-0">
                        D0{day.day}
                      </span>
                      <div>
                        <h3 className="text-base font-bold text-[#171923] dark:text-[#F3F4F6]">
                          {day.title}
                        </h3>
                        <p className="text-xs text-[#606779] dark:text-[#A5AABA] font-mono">
                          {day.location}
                        </p>
                      </div>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-[#606779]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-[#606779]" />
                    )}
                  </button>

                  {isExpanded && (
                    <div className="px-5 pb-5 pt-2 border-t border-[#E2E5EC] dark:border-[#303541] space-y-4 bg-[#F7F8FA]/50 dark:bg-[#111318]/50">
                      <div className="space-y-2">
                        <p className="text-xs font-semibold uppercase tracking-wider text-[#606779] dark:text-[#A5AABA] font-mono">
                          Planned Activities
                        </p>
                        <ul className="space-y-1.5 text-xs sm:text-sm text-[#171923] dark:text-[#F3F4F6]">
                          {day.activities.map((act, idx) => (
                            <li key={idx} className="flex items-start gap-2">
                              <span className="text-[#4F46E5] dark:text-[#818CF8]" aria-hidden="true">·</span>
                              <span>{act}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="rounded border border-[#E2E5EC] dark:border-[#303541] p-3 text-xs text-[#606779] dark:text-[#A5AABA] bg-[#FFFFFF] dark:bg-[#1B1E27]">
                        <span className="font-semibold text-[#171923] dark:text-[#F3F4F6]">Travel Note:</span> {day.travelNotes}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* Section E: Travel With Me CTA */}
        <section className="rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] p-8 md:p-12 space-y-8">
          <div className="max-w-2xl space-y-3">
            <p className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5] dark:text-[#818CF8] font-mono">
              Shared Journey Invitation
            </p>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-[#171923] dark:text-[#F3F4F6]">
              Would you like to experience this journey?
            </h2>
            <p className="text-sm sm:text-base text-[#606779] dark:text-[#A5AABA] leading-relaxed">
              If this journey inspires you, I&apos;d love to help you experience something similar. Let&apos;s plan an adventure together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start pt-2">
            {/* Direct One-Click Email CTA */}
            <div className="lg:col-span-5 space-y-4">
              <a
                href={mailtoDirectUrl}
                className="w-full py-3.5 px-6 rounded-md bg-[#4F46E5] hover:bg-[#4338CA] dark:bg-[#818CF8] dark:hover:bg-[#6366F1] text-white dark:text-[#111318] text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4" />
                <span>Let&apos;s Plan a Trip</span>
              </a>
              <p className="text-xs text-[#606779] dark:text-[#A5AABA] leading-relaxed font-mono">
                Opens your email client with the subject:
                <br />
                <span className="text-[#171923] dark:text-[#F3F4F6]">
                  &ldquo;Let&apos;s Plan a Trip: {journey.title}&rdquo;
                </span>
              </p>
            </div>

            {/* Quick Trip Inquiry Note Composer */}
            <div className="lg:col-span-7 rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#F7F8FA] dark:bg-[#111318] p-5 sm:p-6 space-y-4">
              <p className="text-xs font-bold uppercase tracking-wider text-[#171923] dark:text-[#F3F4F6] font-mono">
                Or Customize Your Travel Note
              </p>

              {inquirySent ? (
                <div className="p-4 rounded bg-[#EEF2FF] dark:bg-[#24264A] text-center space-y-1">
                  <CheckCircle2 className="w-5 h-5 text-[#4F46E5] dark:text-[#818CF8] mx-auto" />
                  <p className="text-xs font-semibold text-[#171923] dark:text-[#F3F4F6]">
                    Email draft created
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSendTripInquiry} className="space-y-3">
                  <input
                    type="text"
                    value={senderName}
                    onChange={(e) => setSenderName(e.target.value)}
                    placeholder="Your Name (e.g. Alex)"
                    className="w-full px-3 py-2 text-xs rounded border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] text-[#171923] dark:text-[#F3F4F6] focus:border-[#4F46E5] focus:outline-none"
                  />
                  <textarea
                    rows={3}
                    value={customNote}
                    onChange={(e) => setCustomNote(e.target.value)}
                    placeholder={`Tell me what aspects of ${journey.destination} interest you (timing, pace, trekking)...`}
                    className="w-full px-3 py-2 text-xs rounded border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] text-[#171923] dark:text-[#F3F4F6] focus:border-[#4F46E5] focus:outline-none resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 rounded border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] hover:border-[#4F46E5] text-[#171923] dark:text-[#F3F4F6] text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-1.5"
                  >
                    <span>Send Custom Trip Note</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
