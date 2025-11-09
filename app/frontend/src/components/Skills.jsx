import React from 'react';
import { Code, Brain, Cloud, Database, Wrench, Users } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: Code,
      title: 'Languages & Frameworks',
      skills: [
        'Python', 'Julia', 'R', 'Go',
        'Django', 'Flask', 'FastAPI', 'Bottle',
        'HTML', 'CSS', 'JavaScript'
      ]
    },
    {
      icon: Brain,
      title: 'AI / ML / LLM',
      skills: [
        'Machine Learning', 'Deep Learning',
        'Time Series Forecasting',
        'NLP (SpaCy, NLTK, NER)',
        'LLMs (GPT, BERT, LangChain)',
        'Chatbot Development',
        'Prompt Engineering',
        'PyTorch', 'TensorFlow', 'Scikit-learn',
        'Pandas', 'NumPy', 'OpenCV', 'YOLO'
      ]
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      skills: [
        'AWS', 'Azure', 'GCP',
        'Docker', 'Jenkins', 'Celery',
        'Git', 'CI/CD', 'REST API', 'Postman'
      ]
    },
    {
      icon: Database,
      title: 'Data & Visualization',
      skills: [
        'PostgreSQL', 'MySQL', 'MongoDB', 'Redis',
        'Vector Databases',
        'Tableau', 'Power BI'
      ]
    },
    {
      icon: Wrench,
      title: 'Testing & Automation',
      skills: [
        'MLOps', 'Unit Testing (Pytest)', 'TDD',
        'Selenium', 'UiPath',
        'Jupyter', 'Colab', 'VSCode', 'PyCharm'
      ]
    },
    {
      icon: Users,
      title: 'Project Management',
      skills: [
        'Agile', 'Scrum', 'Jira', 'Azure Boards',
        'Problem Solving', 'Critical Thinking',
        'Mentorship', 'Team Leadership'
      ]
    }
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 text-center">
          Skills & Expertise
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="p-6 border border-gray-200 rounded-lg hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gray-100 rounded-lg">
                  <category.icon size={20} className="text-gray-900" />
                </div>
                <h3 className="text-lg font-medium">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-gray-50 text-gray-700 text-sm rounded-md hover:bg-gray-100 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
