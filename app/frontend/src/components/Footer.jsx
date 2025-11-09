import React from 'react';
import { Heart, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Linkedin,
      url: 'https://www.linkedin.com/in/littinrajan',
      label: 'LinkedIn'
    },
    {
      icon: Mail,
      url: 'mailto:littinrajan@gmail.com',
      label: 'Email'
    }
  ];

  return (
    <footer className="bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-light mb-4">Littin Rajan</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              AI Full-Stack Engineer specializing in building intelligent systems that make a difference.
            </p>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-gray-400">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              {['About', 'Experience', 'Projects', 'Skills', 'Certifications', 'Contact'].map((item) => (
                <li key={item}>
                  <button
                    onClick={() => {
                      const element = document.getElementById(item.toLowerCase());
                      if (element) {
                        element.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm uppercase tracking-wider mb-4 text-gray-400">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.url}
                  target={social.url.startsWith('http') ? '_blank' : undefined}
                  rel={social.url.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="p-3 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-400">
            © {currentYear} Littin Rajan. All rights reserved.
          </p>
          <p className="text-sm text-gray-400 flex items-center gap-2">
            Built with <Heart size={14} className="text-red-500" /> using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
