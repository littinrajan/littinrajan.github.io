import React from 'react';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';
import { Button } from './ui/button';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'littinrajan@gmail.com',
      link: 'mailto:littinrajan@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+91-7306455384',
      link: 'tel:+917306455384'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Kottayam, Kerala, IN',
      link: null
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/littinrajan',
      link: 'https://www.linkedin.com/in/littinrajan'
    }
  ];

  const languages = [
    { language: 'English', proficiency: 'Professional Proficiency' },
    { language: 'Malayalam', proficiency: 'Native Speaker' },
    { language: 'Hindi', proficiency: 'Working Proficiency' }
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-16 text-center">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-light mb-6">Contact Information</h3>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <div key={index} className="flex items-start gap-4">
                  <div className="p-3 bg-gray-100 rounded-lg">
                    <item.icon size={20} className="text-gray-900" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500 mb-1">{item.label}</p>
                    {item.link ? (
                      <a
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-gray-900 hover:text-gray-600 transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-gray-900">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-lg font-medium mb-4">Languages</h4>
              <div className="space-y-3">
                {languages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="text-gray-900">{lang.language}</span>
                    <span className="text-sm text-gray-600">{lang.proficiency}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-light mb-6">Let's Collaborate</h3>
            <p className="text-gray-700 mb-6 leading-relaxed">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Whether you're looking for an AI engineer, a full-stack developer, or a technical mentor, I'd love to hear from you.
            </p>
            <p className="text-gray-700 mb-8 leading-relaxed">
              Feel free to reach out via email or connect with me on LinkedIn. I typically respond within 24 hours.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                className="bg-gray-900 text-white hover:bg-gray-800 px-8"
                onClick={() => window.location.href = 'mailto:littinrajan@gmail.com'}
              >
                <Mail size={18} className="mr-2" />
                Send Email
              </Button>
              <Button
                variant="outline"
                className="border-gray-300 text-gray-900 hover:bg-gray-50 px-8"
                onClick={() => window.open('https://www.linkedin.com/in/littinrajan', '_blank')}
              >
                <Linkedin size={18} className="mr-2" />
                Connect on LinkedIn
              </Button>
            </div>

            <div className="mt-12 p-6 bg-gray-50 rounded-lg">
              <h4 className="font-medium mb-3">Currently Available For</h4>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Full-time opportunities</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Consulting projects</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Technical mentorship</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Speaking engagements</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
