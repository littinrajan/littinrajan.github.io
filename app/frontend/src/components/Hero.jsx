import React from 'react';
import { ArrowDown, Mail, Linkedin, FileText } from 'lucide-react';
import { Button } from './ui/button';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-5xl mx-auto text-center">
        <div className="mb-8 opacity-0 animate-fade-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
          <p className="text-sm uppercase tracking-wider text-gray-500 mb-4">AI Full-Stack Engineer</p>
          <h1 className="text-6xl md:text-8xl font-light tracking-tight mb-6">
            Littin Rajan
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 font-light max-w-3xl mx-auto leading-relaxed">
            Building intelligent systems that matter. 6+ years crafting 19+ AI/ML/SaaS products.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12 opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
          <Button
            onClick={scrollToContact}
            className="bg-gray-900 text-white hover:bg-gray-800 px-8 py-6 text-base"
          >
            Get in Touch
          </Button>
          <Button
            variant="outline"
            className="border-gray-300 text-gray-900 hover:bg-gray-50 px-8 py-6 text-base"
            onClick={() => window.open('https://www.linkedin.com/in/littinrajan', '_blank')}
          >
            <Linkedin size={18} className="mr-2" />
            LinkedIn
          </Button>
        </div>

        <div className="flex justify-center gap-8 text-sm text-gray-600 opacity-0 animate-fade-in" style={{ animationDelay: '0.8s', animationFillMode: 'forwards' }}>
          <div className="flex items-center gap-2">
            <Mail size={16} />
            <span>littinrajan@gmail.com</span>
          </div>
          <div className="hidden sm:block">•</div>
          <div className="flex items-center gap-2">
            <span>Kottayam, Kerala, IN</span>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: '1s', animationFillMode: 'forwards' }}>
          <ArrowDown size={24} className="text-gray-400 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
