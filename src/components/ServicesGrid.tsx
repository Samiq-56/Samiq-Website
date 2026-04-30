import React from 'react';

export default function ServicesGrid() {
  const services = [
    {
      title: "Course Education",
      desc: "400K+ students. 21+ platforms. Learn at your pace.",
      icon: "🎓"
    },
    {
      title: "Web Development",
      desc: "Fast, modern websites. HTML/CSS/JS. Deployed on Vercel.",
      icon: "💻"
    },
    {
      title: "AI Automation",
      desc: "Chatbots, n8n workflows, smart agents. 24/7 automation.",
      icon: "🤖"
    },
    {
      title: "Brand Building",
      desc: "LinkedIn strategy, Instagram growth, Substack newsletters.",
      icon: "📱"
    },
    {
      title: "Video Production",
      desc: "Scripting, editing, course videos, social media reels.",
      icon: "🎬"
    },
    {
      title: "UI/UX Design",
      desc: "Figma wireframes to pixel-perfect prototypes. Real projects.",
      icon: "🎨"
    }
  ];

  return (
    <section className="bg-[#0d0d0d] py-[80px] lg:py-[120px] px-8 md:px-16 border-t border-white/5">
      <div className="max-w-[1200px] mx-auto">
        
        <div className="mb-16 text-center">
          <h3 className="text-3xl md:text-5xl font-bold text-[#ffffff] mb-4 tracking-tight">
            Services
          </h3>
          <p className="text-lg md:text-xl text-[#999999] max-w-2xl mx-auto">
            What I can do for you and your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <div 
              key={idx} 
              className="glass-card rounded-3xl p-8"
            >
              <div className="text-5xl mb-6">{service.icon}</div>
              <h4 className="text-xl font-bold text-[#ffffff] mb-3">{service.title}</h4>
              <p className="text-[#999999] leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
