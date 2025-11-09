import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      title: 'Full-Stack Engineer',
      company: 'Cyrino India',
      location: 'Remote, IN',
      period: 'Sep 2024 - Oct 2025',
      description: 'Built and maintained backend APIs for scalable healthcare services. Developed async scraping pipelines for high-volume data extraction.',
      highlights: [
        'Built scalable backend APIs for healthcare services',
        'Developed async scraping pipelines for high-volume data'
      ]
    },
    {
      title: 'AI Full-Stack Engineer',
      company: 'Epixel Solutions',
      location: 'Kochi, Kerala, IN',
      period: 'Jan 2023 - July 2024',
      description: 'Spearheaded AI strategy and implementation, including time series forecasting and GenAI chatbots.',
      highlights: [
        'Boosted customer satisfaction by 25% through AI implementations',
        'Reduced processing time by 23% via microservice-based AI integrations',
        'Enhanced client satisfaction by 20% through R&D on AI solutions',
        'Contributed to 13+ AI product deliveries'
      ]
    },
    {
      title: 'AI Software Developer',
      company: 'Techversant Infotech',
      location: 'Kochi, Kerala, IN',
      period: 'Aug 2019 - Jan 2023',
      description: 'Led development of AI-powered solutions and enhanced OCR model accuracy.',
      highlights: [
        'Led development of AI-powered EHR module (90% manual effort reduction)',
        'Enhanced OCR model accuracy by 40% using custom CNN',
        'Contributed to 13+ AI product deliveries'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 text-center">
          Experience
        </h2>

        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="border-l-2 border-gray-200 pl-8 pb-8 relative hover:border-gray-900 transition-colors duration-300"
            >
              <div className="absolute -left-2 top-0 w-4 h-4 bg-gray-900 rounded-full"></div>
              
              <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-normal mb-2">{exp.title}</h3>
                  <div className="flex items-center gap-2 text-gray-600 mb-1">
                    <Briefcase size={16} />
                    <span className="font-medium">{exp.company}</span>
                    <span>•</span>
                    <span>{exp.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-2 md:mt-0">
                  <Calendar size={16} />
                  <span>{exp.period}</span>
                </div>
              </div>

              <p className="text-gray-700 mb-4">{exp.description}</p>

              <ul className="space-y-2">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-600">
                    <span className="text-gray-400 mt-1">•</span>
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
