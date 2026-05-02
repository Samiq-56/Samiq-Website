import React from 'react';

export default function ServicesGrid() {
  const skills = [
    {
      title: "Programming",
      desc: "Strong foundation in C++, Object-Oriented Programming, and Data Structures.",
      icon: "💻"
    },
    {
      title: "Web Development",
      desc: "Building modern websites using HTML, CSS, JavaScript, React, and Node.js.",
      icon: "🌐"
    },
    {
      title: "Data Science",
      desc: "Data analysis, probability & statistics modeling using Excel and modern tools.",
      icon: "📊"
    },
    {
      title: "Artificial Intelligence",
      desc: "Expanding knowledge through certifications from Coursera, Google, and Microsoft.",
      icon: "🤖"
    },
    {
      title: "Digital Logic Design",
      desc: "Simulating combinational and sequential circuits using Logisim and circuit theory.",
      icon: "⚡"
    },
    {
      title: "Problem Solving",
      desc: "Participating in online challenges and developing algorithmic logic and reasoning.",
      icon: "🧠"
    }
  ];

  return (
    <section className="bg-white py-[80px] lg:py-[120px] px-8 md:px-16 border-t border-slate-200">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-16 text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-slate-800 mb-4 tracking-tight">
            My <span className="text-blue-500">Skills</span>
          </h3>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto">
            Technical proficiencies and areas of continuous learning.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-3xl p-8"
            >
              <div className="text-5xl mb-6">{skill.icon}</div>
              <h4 className="text-xl font-bold text-slate-800 mb-3">{skill.title}</h4>
              <p className="text-slate-600 leading-relaxed">
                {skill.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
