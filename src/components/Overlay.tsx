'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { RefObject } from 'react';

interface Props {
  heroRef: RefObject<HTMLDivElement>;
}

const taglines = [
  { text: 'I teach AI to 400K+ students', emoji: '🤖' },
  { text: 'I build modern websites', emoji: '⚡' },
  { text: 'I design UI/UX in Figma', emoji: '🎨' },
  { text: 'I help businesses grow with AI', emoji: '🚀' },
];

export default function Overlay({ heroRef }: Props) {
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end end'],
  });

  // Phase 1 — Ghost watermark "Chetan Pujari." (visible 0.00–0.18, fade 0.18–0.22)
  const opacity1 = useTransform(scrollYProgress, [0, 0.18, 0.22], [1, 1, 0]);
  // Hard-hide the watermark once it's faded — prevents any sub-pixel residual rendering past scroll 0.22.
  const visibility1 = useTransform(opacity1, (v) => (v < 0.01 ? 'hidden' : 'visible'));

  // Phase 2 — Name block (in 0.22–0.30, hold to 0.36, out 0.36–0.40)
  const opacity2 = useTransform(scrollYProgress, [0.22, 0.3, 0.36, 0.4], [0, 1, 1, 0]);

  // Phase 3 — "AI Educator & Creative Developer." (in 0.40–0.46, hold to 0.50, out 0.50–0.54)
  const opacity3 = useTransform(scrollYProgress, [0.4, 0.46, 0.5, 0.54], [0, 1, 1, 0]);

  // Phase 3.5 — Four cycling taglines, each with its own fade in/out + slide-in
  // Total range 0.54 → 0.86 (32% of scroll), each tagline gets 0.08
  const tagline1Opacity = useTransform(scrollYProgress, [0.54, 0.57, 0.6, 0.62], [0, 1, 1, 0]);
  const tagline1X = useTransform(scrollYProgress, [0.54, 0.57], [-30, 0]);

  const tagline2Opacity = useTransform(scrollYProgress, [0.62, 0.65, 0.68, 0.7], [0, 1, 1, 0]);
  const tagline2X = useTransform(scrollYProgress, [0.62, 0.65], [-30, 0]);

  const tagline3Opacity = useTransform(scrollYProgress, [0.7, 0.73, 0.76, 0.78], [0, 1, 1, 0]);
  const tagline3X = useTransform(scrollYProgress, [0.7, 0.73], [-30, 0]);

  const tagline4Opacity = useTransform(scrollYProgress, [0.78, 0.81, 0.84, 0.86], [0, 1, 1, 0]);
  const tagline4X = useTransform(scrollYProgress, [0.78, 0.81], [-30, 0]);

  const taglineOpacities = [tagline1Opacity, tagline2Opacity, tagline3Opacity, tagline4Opacity];
  const taglineXs = [tagline1X, tagline2X, tagline3X, tagline4X];

  // Phase 4 — Final headline (in 0.86–0.92, hold to end)
  const opacity4 = useTransform(scrollYProgress, [0.86, 0.92, 1.0], [0, 1, 1]);

  // Common positioning class — left-aligned, vertically centered, capped width
  const phaseClass =
    'absolute inset-0 flex flex-col justify-center items-start text-left pl-8 md:pl-16 lg:pl-24 pr-8 pointer-events-none';

  return (
    <div className="absolute inset-0 pointer-events-none z-10">
      <div className="sticky top-0 h-screen w-full overflow-hidden">

        {/* Phase 1: Liquid-glass watermark. Gradient-fill text, chromatic refraction on hover.
            pointer-events flips to none past the active range so it cannot intercept hover after fade. */}
        <motion.div
          style={{
            opacity: opacity1,
            visibility: visibility1,
            willChange: 'opacity, visibility',
          }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <h1
            className="watermark-glass text-[15vw] font-black tracking-tighter select-none text-center leading-none cursor-default"
            style={{ pointerEvents: 'auto' }}
          >
            Chetan <br /> Pujari.
          </h1>
        </motion.div>

        {/* Phase 2 */}
        <motion.div
          style={{ opacity: opacity2, willChange: 'opacity' }}
          className={phaseClass}
        >
          <div className="max-w-[640px]">
            <p className="text-base md:text-xl text-white mb-3 font-medium tracking-wide drop-shadow-md">
              I Make Tech, AI &amp; Design
            </p>
            <h2
              className="text-5xl md:text-7xl lg:text-8xl text-white drop-shadow-2xl mb-4"
              style={{ fontWeight: 800, letterSpacing: '-0.04em', lineHeight: 1 }}
            >
              Chetan Pujari.
            </h2>
            <p className="text-xs md:text-sm text-zinc-300 font-semibold tracking-widest uppercase drop-shadow-md">
              400K+ Students &middot; 21+ Platforms
            </p>
          </div>
        </motion.div>

        {/* Phase 3 */}
        <motion.div
          style={{ opacity: opacity3, willChange: 'opacity' }}
          className={phaseClass}
        >
          <h2
            className="text-4xl md:text-6xl lg:text-7xl text-white drop-shadow-2xl whitespace-pre-line max-w-[640px]"
            style={{ fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.1 }}
          >
            {`AI Educator &\nCreative Developer.`}
          </h2>
        </motion.div>

        {/* Phase 3.5 — Cycling taglines (each absolutely positioned in same spot, scroll-driven fade) */}
        {taglines.map((tag, i) => (
          <motion.div
            key={i}
            style={{
              opacity: taglineOpacities[i],
              x: taglineXs[i],
              willChange: 'opacity, transform',
            }}
            className={phaseClass}
          >
            <h3
              className="text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-2xl max-w-[640px]"
              style={{ fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15 }}
            >
              <span className="text-[#ff6b35]">|</span> {tag.text}{' '}
              <span aria-hidden>{tag.emoji}</span>
            </h3>
          </motion.div>
        ))}

        {/* Phase 4 — Final headline */}
        <motion.div
          style={{ opacity: opacity4, willChange: 'opacity' }}
          className={phaseClass}
        >
          <h2
            className="text-3xl md:text-5xl lg:text-6xl text-white drop-shadow-2xl max-w-[700px]"
            style={{ fontWeight: 700, letterSpacing: '-0.03em', lineHeight: 1.15 }}
          >
            I Make Tech, AI &amp; Design Simple —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-zinc-200 to-zinc-500">
              So You Can Do More.
            </span>
          </h2>
        </motion.div>

      </div>
    </div>
  );
}
