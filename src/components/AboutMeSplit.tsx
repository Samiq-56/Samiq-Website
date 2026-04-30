'use client';

import { animate, useInView, useMotionValue, useTransform, motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

function Counter({ from, to, suffix, label }: { from: number; to: number; suffix: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const count = useMotionValue(from);
  const rounded = useTransform(count, Math.round);

  useEffect(() => {
    if (isInView) {
      const controls = animate(count, to, { duration: 2, ease: "easeOut" });
      return controls.stop;
    }
  }, [isInView, count, to]);

  return (
    <div ref={ref} className="flex flex-col mb-8">
      <div className="flex items-baseline gap-1">
        <motion.span className="text-5xl md:text-6xl font-black text-[#ff6b35]">
          {rounded}
        </motion.span>
        <span className="text-4xl md:text-5xl font-black text-[#ff6b35]">{suffix}</span>
      </div>
      <span className="text-sm md:text-base font-semibold tracking-wider text-[#999999] uppercase mt-2">
        {label}
      </span>
    </div>
  );
}

export default function AboutMeSplit() {
  return (
    <section className="bg-[#0d0d0d] py-[80px] lg:py-[120px] px-8 md:px-16">
      <div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* Left Side: Stats (40%) */}
        <div className="lg:w-[40%] flex flex-col justify-center">
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-x-8">
            <Counter from={0} to={400} suffix="K+" label="Students Worldwide" />
            <Counter from={0} to={21} suffix="+" label="Platforms" />
            <Counter from={0} to={190} suffix="+" label="Countries" />
            <Counter from={0} to={6} suffix="+" label="Years Teaching" />
          </div>
        </div>

        {/* Right Side: Story (60%) */}
        <div className="lg:w-[60%] flex flex-col justify-center">
          <h3 className="text-3xl md:text-5xl font-bold text-[#ffffff] mb-8 tracking-tight">
            From Curious Kid to 400K+ Students
          </h3>
          <div className="space-y-6 text-[#999999] text-lg md:text-xl leading-relaxed">
            <p>
              I never planned to become an educator. I was a curious kid from Pune who loved figuring out how things work — apps, websites, AI tools. I graduated from Sinhgad College of Engineering, but the real education happened outside the classroom.
            </p>
            <p>
              In 2020, I uploaded my first course on Udemy with zero audience and zero budget. Today, 400,000+ students from 190+ countries have taken my courses across 21+ platforms including Udemy, Skillshare, Coursera, O&apos;Reilly, Packt, and more.
            </p>
            <p>
              I also conduct AI workshops at top NITs — including NIT Surat (SVNIT MINDBEND). My mission is simple: break down complex technologies into real-world skills you can actually use.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
