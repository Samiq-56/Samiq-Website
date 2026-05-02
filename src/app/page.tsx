'use client';

import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import ScrollyCanvas from '@/components/ScrollyCanvas';
import Overlay from '@/components/Overlay';
import TagScroll from '@/components/TagScroll';
import AboutMeSplit from '@/components/AboutMeSplit';
import ServicesGrid from '@/components/ServicesGrid';
import JourneyTimeline from '@/components/JourneyTimeline';
import Courses from '@/components/Courses';
import Footer from '@/components/Footer';

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);

  return (
    <main
      id="top"
      className="bg-slate-50 min-h-screen w-full font-sans text-slate-800 selection:bg-blue-500 selection:text-white"
    >
      <Navbar />

      {/* Cinematic Hero — single shared scroll container */}
      <div ref={heroRef} className="relative w-full" style={{ height: '600vh' }}>
        <ScrollyCanvas heroRef={heroRef} />
        <Overlay heroRef={heroRef} />
      </div>

      {/* Content Sections */}
      <div className="relative z-20 bg-slate-50">
        <TagScroll />
        <div id="about"><AboutMeSplit /></div>
        <div id="services"><ServicesGrid /></div>
        <div id="timeline"><JourneyTimeline /></div>
        <div id="courses"><Courses /></div>
        <div id="contact"><Footer /></div>
      </div>
    </main>
  );
}
