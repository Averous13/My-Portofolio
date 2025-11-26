import React from "react"
import { Mail, Linkedin, Github, Heart } from "lucide-react"
import { personalInfo } from "../data"

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
        }
  };

  const quickLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    {
      icon: Mail,
      href: `mailto:${personalInfo.email}`,
      label: 'Email'
    },
    {
      icon: Linkedin,
      href: personalInfo.linkedin,
      label: 'LinkedIn'
    }
  ];

  return (
    <footer className="bg-[#0a0d10] border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Footer Content */}
            <div className="py-12 grid md:grid-cols-3 gap-8">
                {/* Brand Section */}
                <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-white">
                        {personalInfo.name.split(' ').map(word => word[0]).join('')}
                    </h3>
                    <p className="text-gray-400 text-sm">
                    {personalInfo.title}
                    </p>
                    <p className="text-gray-500 text-sm">
                    Building scalable solutions with clean architecture and innovation.
                    </p>
                </div>

                {/* Quick Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Quick Links</h4>
                    <ul className="space-y-2">
                    {quickLinks.map((link) => (
                        <li key={link.id}>
                        <button
                            onClick={() => scrollToSection(link.id)}
                            className="text-gray-400 hover:text-[#8ab2a6] transition-colors text-sm"
                        >
                            {link.label}
                        </button>
                        </li>
                    ))}
                    </ul>
                </div>

                {/* Social Links */}
                <div>
                    <h4 className="text-white font-semibold mb-4">Connect With Me</h4>
                    <div className="flex gap-3">
                    {socialLinks.map((social, index) => (
                        <a
                        key={index}
                        href={social.href}
                        target={social.href.startsWith('http') ? '_blank' : '_self'}
                        rel="noopener noreferrer"
                        className="p-3 rounded-lg bg-gray-800/50 hover:bg-[#8ab2a6] text-gray-300 hover:text-white transition-all duration-300"
                        aria-label={social.label}
                        >
                        <social.icon size={20} />
                        </a>
                    ))}
                    </div>
                    <div className="mt-6">
                    <p className="text-gray-400 text-sm mb-2">Email</p>
                    <a
                        href={`mailto:${personalInfo.email}`}
                        className="text-[#8ab2a6] hover:text-[#3e9d81] transition-colors text-sm"
                    >
                        {personalInfo.email}
                    </a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="py-6 border-t border-gray-800">
                <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-gray-500 text-sm">
                    © {currentYear} {personalInfo.name}. All rights reserved.
                    </p>
                    <p className="text-gray-500 text-sm flex items-center gap-1">
                    Made with <Heart size={14} className="text-[#8ab2a6]" fill="currentColor" /> by {personalInfo.name.split(' ')[0]}
                    </p>
                </div>
            </div>
        </div>
    </footer>

  );
}

export default Footer;