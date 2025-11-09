import React from 'react';
import { Award, Users, Target, Sparkles } from 'lucide-react';

const About = () => {
  const highlights = [
    {
      icon: Award,
      title: '19+ Products',
      description: 'AI/ML/SaaS solutions delivered'
    },
    {
      icon: Target,
      title: '6+ Years',
      description: 'Professional experience'
    },
    {
      icon: Sparkles,
      title: 'World Rank 1',
      description: 'Python on HackerRank'
    },
    {
      icon: Users,
      title: '70+ Mentored',
      description: 'Solutions with 5/5 rating'
    }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              AI Full Stack Developer with 6+ years of experience building innovative AI/ML/SaaS products. 
              Certified AI Engineer & Python Developer with deep expertise in scalable systems, predictive 
              analytics, NLP, and end-to-end product development.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              I specialize in FastAPI, Docker, and Azure, with a proven track record of delivering solutions 
              that drive measurable business impact—from 90% reductions in manual effort to 40% improvements 
              in model accuracy.
            </p>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-gray-700 leading-relaxed">
              My expertise spans machine learning, deep learning, time series forecasting, NLP, and LLM 
              integration. I've led teams, mentored developers, and contributed to projects that have 
              enhanced customer satisfaction by up to 25%.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Beyond coding, I'm passionate about sharing knowledge—having delivered workshops on AI, 
              mentored 70+ solutions on Exercism, and maintained a perfect 5/5 rating.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {highlights.map((item, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white rounded-lg hover:shadow-lg transition-shadow duration-300"
            >
              <item.icon size={32} className="mx-auto mb-4 text-gray-900" />
              <h3 className="text-2xl font-light mb-2">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
