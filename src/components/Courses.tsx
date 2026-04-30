'use client';

import { motion } from 'framer-motion';

const courses = [
  {
    title: 'Google Veo 3.1 Complete Mastery: From Text to Cinema',
    badge: 'Bestseller',
    desc: 'Generate cinematic AI video from a single prompt.',
    url: 'https://www.udemy.com/course/google-veo-complete-mastery-from-text-to-cinema/?referralCode=C8E267B2F6C642B37946',
  },
  {
    title: 'HeyGen + ElevenLabs: Create Viral AI Videos & Voiceovers',
    badge: 'Most Popular',
    desc: 'Avatar videos and lifelike voiceovers without a studio.',
    url: 'https://www.udemy.com/course/heygen-elevenlabs-create-viral-ai-videos-voiceovers/?referralCode=9B7744312C61C887D963',
  },
  {
    title: 'UI/UX Design With Figma: 5+ Real World Projects',
    badge: 'Highest Rated',
    desc: 'Wireframes to pixel-perfect prototypes in Figma.',
    url: 'https://www.udemy.com/course/uiux-design-with-figma-5-real-world-projects2022/?referralCode=162A0121145B10617735',
  },
  {
    title: 'Mastering ChatGPT Prompt Engineering: Beginner to Advanced',
    badge: 'Highest Rated',
    desc: 'Prompt patterns that actually move the needle.',
    url: 'https://www.udemy.com/course/mastering-chatgpt-prompt-engineering-beginner-to-advanced/?referralCode=A9C87B6CB177C58EF463',
  },
  {
    title: 'Master Notion: Build Your All-in-One Productivity System',
    badge: 'Highest Rated',
    desc: 'A second brain that runs your work and life.',
    url: 'https://www.udemy.com/course/master-notion-build-your-all-in-one-productivity-system/?referralCode=B40F9D016BA8B8A77A92',
  },
  {
    title: 'Canva Masterclass For Social Media And Content Creation',
    badge: 'Bestseller',
    desc: 'Pro-level branded content with zero design background.',
    url: 'https://www.udemy.com/course/canva-masterclass-for-social-media-and-content-creation/?referralCode=66F992F39A96477E14B5',
  },
];

export default function Courses() {
  return (
    <section className="bg-[#0d0d0d] py-[80px] lg:py-[120px] px-8 md:px-16 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-16 text-center">
          <h3
            className="text-3xl md:text-5xl text-white mb-4"
            style={{ fontWeight: 700, letterSpacing: '-0.03em' }}
          >
            Courses
          </h3>
          <p className="text-lg md:text-xl text-[#999999] max-w-2xl mx-auto">
            Learn from me — anytime, anywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, idx) => (
            <motion.a
              key={idx}
              href={course.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className="group block glass-card rounded-3xl p-8"
            >
              <span className="inline-block text-xs font-bold tracking-widest text-[#ff6b35] uppercase mb-4">
                {course.badge}
              </span>
              <h4 className="text-xl font-bold text-white mb-3 leading-snug">
                {course.title}
              </h4>
              <p className="text-[#999999] leading-relaxed mb-6">{course.desc}</p>
              <span className="text-sm font-semibold text-white group-hover:text-[#ff6b35] transition-colors">
                Enroll on Udemy →
              </span>
            </motion.a>
          ))}
        </div>

        <div className="mt-12 text-center">
          <a
            href="https://www.udemy.com/user/chetan-pujari-3/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 rounded-full pill-cta font-bold tracking-tight"
          >
            Explore All 21+ Courses →
          </a>
        </div>
      </div>
    </section>
  );
}
