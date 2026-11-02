import React, { useState } from 'react';
import { Mail, Phone, Github, Linkedin, Send, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { PROFILE } from '../../data/profile';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    topic: 'Software Engineering Opportunity',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoSubject = encodeURIComponent(`[Contact] ${formData.topic} - from ${formData.name}`);
    const mailtoBody = encodeURIComponent(
      `Hello ${PROFILE.name},\n\nName: ${formData.name}\nEmail: ${formData.email}\nTopic: ${formData.topic}\n\nMessage:\n${formData.message}\n`
    );
    window.location.href = `mailto:${PROFILE.email}?subject=${mailtoSubject}&body=${mailtoBody}`;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 8000);
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="border-b border-[#E2E5EC] dark:border-[#303541] pb-6 space-y-2">
          <p className="text-xs font-semibold uppercase tracking-widest text-[#4F46E5] dark:text-[#818CF8] font-mono">
            03. Direct Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-[#171923] dark:text-[#F3F4F6]">
            Let&apos;s connect!
          </h2>
          <p className="text-sm sm:text-base text-[#606779] dark:text-[#A5AABA] max-w-xl">
            I&apos;m always open to discussing technology, collaboration, and new opportunities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Channels */}
          <div className="lg:col-span-5 space-y-4">
            <h3 className="text-lg font-bold text-[#171923] dark:text-[#F3F4F6]">
              Direct Channels
            </h3>
            <p className="text-sm text-[#606779] dark:text-[#A5AABA] leading-relaxed">
              Reach out directly via email, phone, or professional networks.
            </p>

            <div className="space-y-3 pt-2">
              {/* Email */}
              <a
                href={`mailto:${PROFILE.email}`}
                className="flex items-center justify-between p-3.5 rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] hover:border-[#4F46E5] dark:hover:border-[#818CF8] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#EEF2FF] dark:bg-[#24264A] text-[#4F46E5] dark:text-[#818CF8]">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#606779] dark:text-[#A5AABA] uppercase font-mono">Email</p>
                    <p className="text-sm font-semibold text-[#171923] dark:text-[#F3F4F6] font-mono">
                      {PROFILE.email}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#606779] group-hover:text-[#4F46E5] transition-colors" />
              </a>

              {/* Phone */}
              <a
                href={`tel:${PROFILE.phone}`}
                className="flex items-center justify-between p-3.5 rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] hover:border-[#4F46E5] dark:hover:border-[#818CF8] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#EEF2FF] dark:bg-[#24264A] text-[#4F46E5] dark:text-[#818CF8]">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#606779] dark:text-[#A5AABA] uppercase font-mono">Phone</p>
                    <p className="text-sm font-semibold text-[#171923] dark:text-[#F3F4F6] font-mono">
                      {PROFILE.phoneDisplay}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#606779] group-hover:text-[#4F46E5] transition-colors" />
              </a>

              {/* GitHub */}
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] hover:border-[#4F46E5] dark:hover:border-[#818CF8] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#EEF2FF] dark:bg-[#24264A] text-[#4F46E5] dark:text-[#818CF8]">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#606779] dark:text-[#A5AABA] uppercase font-mono">GitHub</p>
                    <p className="text-sm font-semibold text-[#171923] dark:text-[#F3F4F6]">
                      github.com/{PROFILE.githubHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#606779] group-hover:text-[#4F46E5] transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-between p-3.5 rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] hover:border-[#4F46E5] dark:hover:border-[#818CF8] transition-colors group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#EEF2FF] dark:bg-[#24264A] text-[#4F46E5] dark:text-[#818CF8]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-[11px] text-[#606779] dark:text-[#A5AABA] uppercase font-mono">LinkedIn</p>
                    <p className="text-sm font-semibold text-[#171923] dark:text-[#F3F4F6]">
                      linkedin.com/in/{PROFILE.linkedinHandle}
                    </p>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#606779] group-hover:text-[#4F46E5] transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Message Form */}
          <div className="lg:col-span-7 rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#FFFFFF] dark:bg-[#1B1E27] p-6 sm:p-8">
            <h3 className="text-lg font-bold text-[#171923] dark:text-[#F3F4F6] mb-1">
              Send a Message
            </h3>
            <p className="text-xs text-[#606779] dark:text-[#A5AABA] mb-6">
              Compose a note directly to {PROFILE.fullName} ({PROFILE.email}).
            </p>

            {submitted ? (
              <div className="p-6 rounded-md bg-[#EEF2FF] dark:bg-[#24264A] border border-[#4F46E5]/30 text-center space-y-2">
                <CheckCircle2 className="w-8 h-8 text-[#4F46E5] dark:text-[#818CF8] mx-auto" />
                <h4 className="text-sm font-bold text-[#171923] dark:text-[#F3F4F6]">
                  Message Prepared
                </h4>
                <p className="text-xs text-[#606779] dark:text-[#A5AABA]">
                  Your email client has been opened with your inquiry pre-filled.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="text-xs font-semibold uppercase tracking-wider text-[#606779] dark:text-[#A5AABA] font-mono">
                      Your Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Nguyen Van A"
                      className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#F7F8FA] dark:bg-[#111318] text-[#171923] dark:text-[#F3F4F6] focus:border-[#4F46E5] dark:focus:border-[#818CF8] focus:outline-none"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="text-xs font-semibold uppercase tracking-wider text-[#606779] dark:text-[#A5AABA] font-mono">
                      Your Email
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your.email@example.com"
                      className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#F7F8FA] dark:bg-[#111318] text-[#171923] dark:text-[#F3F4F6] focus:border-[#4F46E5] dark:focus:border-[#818CF8] focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-topic" className="text-xs font-semibold uppercase tracking-wider text-[#606779] dark:text-[#A5AABA] font-mono">
                    Topic of Interest
                  </label>
                  <select
                    id="contact-topic"
                    value={formData.topic}
                    onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#F7F8FA] dark:bg-[#111318] text-[#171923] dark:text-[#F3F4F6] focus:border-[#4F46E5] dark:focus:border-[#818CF8] focus:outline-none"
                  >
                    <option value="Software Engineering Opportunity">Software Engineering Opportunity</option>
                    <option value="Backend Development (.NET / FastAPI)">Backend Development (.NET / FastAPI)</option>
                    <option value="Frontend Development (React / Next.js)">Frontend Development (React / Next.js)</option>
                    <option value="General Collaboration">General Collaboration</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="contact-message" className="text-xs font-semibold uppercase tracking-wider text-[#606779] dark:text-[#A5AABA] font-mono">
                    Message
                  </label>
                  <textarea
                    id="contact-message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about what you are working on or an opportunity you would like to discuss..."
                    className="w-full px-3.5 py-2.5 text-sm rounded-md border border-[#E2E5EC] dark:border-[#303541] bg-[#F7F8FA] dark:bg-[#111318] text-[#171923] dark:text-[#F3F4F6] focus:border-[#4F46E5] dark:focus:border-[#818CF8] focus:outline-none resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3 px-4 rounded-md bg-[#4F46E5] hover:bg-[#4338CA] dark:bg-[#818CF8] dark:hover:bg-[#6366F1] text-white dark:text-[#111318] text-xs font-semibold uppercase tracking-wider transition-colors inline-flex items-center justify-center gap-2"
                >
                  <span>Transmit Note</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
