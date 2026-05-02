'use client';

import { motion } from 'framer-motion';

export default function JourneyTimeline() {
  const timeline = [
    { year: "2020 - 2021", title: "Matriculation", desc: "Divisional Model College FSD. Completed my secondary education with a strong focus on science and mathematics. Participated in science fairs." },
    { year: "2022 - 2023", title: "Intermediate (FSc Pre-Engineering)", desc: "Punjab Group Of Colleges. Focused on mathematics, physics, and computer science. Discovered my passion for programming and problem solving." },
    { year: "2024 - 2028", title: "BS Data Science", desc: "PUCIT, University of the Punjab. Currently enrolled in one of Pakistan's top CS institutions. Learning data analysis, machine learning, and real-world problem solving." },
    { year: "2024 - Present", title: "Self-Learning Web Development", desc: "Built websites using HTML, CSS, JavaScript, React, and Node.js. Worked on real-world portfolios and participated in online challenges." },
    { year: "2024 - Present", title: "AI & Data Science Certifications", desc: "Coursera, Google, Microsoft. Earned certificates in AI, machine learning, and data science from global platforms. Constantly expanding my skillset." },
  ];

  return (
    <section className="bg-white py-[80px] lg:py-[120px] px-8 md:px-16 border-t border-slate-200">
      <div className="max-w-[800px] mx-auto">
        
        <div className="mb-16 text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            My <span className="text-blue-500">Journey</span>
          </h3>
          <p className="text-lg md:text-xl text-slate-600">
            A timeline of my academic background and learning experiences.
          </p>
        </div>

        <div className="relative border-l-2 border-slate-200 ml-4 md:ml-8 pl-8 md:pl-12 space-y-12">
          {timeline.map((item, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="relative"
            >
              {/* Timeline Dot */}
              <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-[41px] md:-left-[57px] top-1.5 shadow-[0_0_10px_rgba(59,130,246,0.5)]" />
              
              <span className="inline-block text-sm font-bold tracking-widest text-blue-500 mb-2 uppercase">
                {item.year}
              </span>
              <h4 className="text-2xl font-bold text-slate-800 mb-2">
                {item.title}
              </h4>
              <p className="text-slate-600 text-lg leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
