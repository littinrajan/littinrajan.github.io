import React from 'react';
import { Award, BookOpen, Code, Brain, Cloud } from 'lucide-react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';

const Certifications = () => {
  const certifications = [
    {
      category: 'AI & ML',
      icon: Brain,
      items: [
        { title: 'Associate AI Engineer for Developers', provider: 'DataCamp' },
        { title: 'AI Fundamentals', provider: 'DataCamp' },
        { title: 'Developing AI Applications', provider: 'DataCamp' },
        { title: 'AI Business Fundamentals', provider: 'DataCamp' },
        { title: 'Deep Learning using TensorFlow', provider: 'IBM' },
        { title: 'Python for Data Science', provider: 'IBM' }
      ]
    },
    {
      category: 'LLM & GenAI',
      icon: BookOpen,
      items: [
        { title: 'ChatGPT Fundamentals', provider: 'DataCamp' },
        { title: 'OpenAI Fundamentals', provider: 'DataCamp' },
        { title: 'Llama Fundamentals', provider: 'DataCamp' },
        { title: 'Developing Applications with LangChain', provider: 'DataCamp' },
        { title: 'Prompt Engineering with OpenAI API', provider: 'DataCamp' },
        { title: 'Introduction to Embeddings with OpenAI API', provider: 'DataCamp' },
        { title: 'Understanding Prompt Engineering', provider: 'DataCamp' },
        { title: 'Working with Hugging Face', provider: 'DataCamp' }
      ]
    },
    {
      category: 'Python & Development',
      icon: Code,
      items: [
        { title: 'Python Developer', provider: 'DataCamp' },
        { title: 'Software Engineer', provider: 'HackerRank' },
        { title: 'Python Essentials 1', provider: 'Cisco' },
        { title: 'Python Data Fundamentals', provider: 'DataCamp' },
        { title: 'Introduction to FastAPI', provider: 'DataCamp' },
        { title: 'GitHub Essential Training', provider: 'LinkedIn' }
      ]
    },
    {
      category: 'Cloud & DevOps',
      icon: Cloud,
      items: [
        { title: 'Understanding Microsoft Azure', provider: 'DataCamp' },
        { title: 'AWS Concepts', provider: 'DataCamp' },
        { title: 'Introduction to Kubernetes', provider: 'DataCamp' },
        { title: 'Docker for Developers', provider: 'LinkedIn' },
        { title: 'Docker Essentials: A Developer Introduction', provider: 'IBM' }
      ]
    }
  ];

  const achievements = [
    { title: 'World Rank 1 in Python', platform: 'HackerRank', icon: Award },
    { title: 'Best Performer Q4 2021-22', company: 'Techversant Infotech', icon: Award },
    { title: 'AI Workshop Keynote Speaker', event: 'ICET', icon: BookOpen },
    { title: '70 Solutions Mentored, 5/5 Rating', platform: 'Exercism since Aug 2020', icon: Award }
  ];

  return (
    <section id="certifications" className="py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 text-center">
          Certifications & Achievements
        </h2>

        {/* Achievements */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {achievements.map((achievement, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg text-center hover:shadow-lg transition-shadow duration-300"
            >
              <achievement.icon size={32} className="mx-auto mb-4 text-gray-900" />
              <h3 className="font-medium mb-2">{achievement.title}</h3>
              <p className="text-sm text-gray-600">
                {achievement.platform || achievement.company || achievement.event}
              </p>
            </div>
          ))}
        </div>

        {/* Certifications */}
        <div className="bg-white p-8 rounded-lg">
          <Tabs defaultValue="AI & ML" className="w-full">
            <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-8">
              {certifications.map((category) => (
                <TabsTrigger key={category.category} value={category.category}>
                  <category.icon size={16} className="mr-2" />
                  {category.category}
                </TabsTrigger>
              ))}
            </TabsList>

            {certifications.map((category) => (
              <TabsContent key={category.category} value={category.category}>
                <div className="grid md:grid-cols-2 gap-4">
                  {category.items.map((cert, index) => (
                    <div
                      key={index}
                      className="p-4 border border-gray-200 rounded-md hover:border-gray-400 transition-colors"
                    >
                      <h4 className="font-medium mb-1">{cert.title}</h4>
                      <p className="text-sm text-gray-600">{cert.provider}</p>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>

        {/* Education */}
        <div className="mt-16">
          <h3 className="text-2xl font-light tracking-tight mb-8 text-center">Education</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-medium mb-2">Bachelor of Technology (BTech/BE)</h4>
              <p className="text-gray-700 mb-1">Computer Science and Engineering</p>
              <p className="text-sm text-gray-600">Kerala Technological University, Kerala, IN</p>
              <p className="text-sm text-gray-500 mt-2">2015 - 2019</p>
            </div>
            <div className="bg-white p-6 rounded-lg border border-gray-200">
              <h4 className="text-lg font-medium mb-2">12th Grade Diploma</h4>
              <p className="text-gray-700 mb-1">Bio Science</p>
              <p className="text-sm text-gray-600">Kerala State Board, Kerala, IN</p>
              <p className="text-sm text-gray-500 mt-2">2012 - 2014</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
