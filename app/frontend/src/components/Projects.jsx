import React from 'react';
import { TrendingUp, Brain, Map, Activity } from 'lucide-react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'HCP Data Scraper',
      company: 'Cyrino India',
      period: 'Sep 2024 - Oct 2024',
      description: 'Engineered a robust backend service using Playwright to scrape HCP data from all 50 U.S. state portals.',
      icon: Map,
      highlights: [
        'Increased data extraction efficiency by 60%',
        'Concurrent task execution for scalability',
        'All 50 U.S. state portals coverage'
      ],
      tags: ['Python', 'Playwright', 'Web Scraping', 'Async']
    },
    {
      title: 'Sales Forecasting System',
      company: 'Epixel Solutions',
      period: 'Feb 2024 - July 2024',
      description: 'Led predictive analytics project using ARIMA, ETS, and deep learning models.',
      icon: TrendingUp,
      highlights: [
        '30% accuracy boost in predictions',
        'Integrated Celery for auto-tuning',
        'Vector DBs for similarity search',
        'Flask microservice with Docker & ECR deployment'
      ],
      tags: ['Machine Learning', 'Flask', 'Docker', 'Time Series']
    },
    {
      title: 'IN8 Network',
      company: 'Epixel Solutions',
      period: 'Feb 2024 - July 2024',
      description: 'Led 4-member team delivering key features using Agile practices.',
      icon: Activity,
      highlights: [
        'Built level-based bonus system',
        'Automated order cancellations',
        'Upgraded Django & Stripe integration',
        'Enhanced AI-based forecasting'
      ],
      tags: ['Django', 'Stripe', 'Team Leadership', 'AI']
    },
    {
      title: 'NextGen Dr Robo',
      company: 'Techversant Infotech',
      period: 'Sep 2021 - Apr 2022',
      description: 'Developed AI-powered EHR module with multiple intelligent features.',
      icon: Brain,
      highlights: [
        '90% reduction in manual analysis',
        'Built 5+ modules including auto-correction',
        'Reduced misdiagnosis by 20%',
        'Data extraction and visualization'
      ],
      tags: ['AI', 'Healthcare', 'NLP', 'Deep Learning']
    },
    {
      title: 'Safari Roof Top AI',
      company: 'Techversant Infotech',
      period: 'Aug 2020 - Sep 2020',
      description: 'Developed module to collect and process Google Map images for target locations.',
      icon: Map,
      highlights: [
        '97% accuracy in location detection',
        'Edge-enhanced detection algorithm',
        '20% improvement in rooftop area calculation'
      ],
      tags: ['Computer Vision', 'OpenCV', 'Google Maps API']
    }
  ];

  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 text-center">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-gray-200"
            >
              <CardHeader>
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <project.icon size={24} className="text-gray-900" />
                  </div>
                  <span className="text-xs text-gray-500">{project.period}</span>
                </div>
                <CardTitle className="text-xl font-normal">{project.title}</CardTitle>
                <CardDescription className="text-gray-600">{project.company}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 mb-4">{project.description}</p>
                
                <ul className="space-y-2 mb-4">
                  {project.highlights.map((highlight, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-gray-400 mt-0.5">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 bg-gray-100 text-gray-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
