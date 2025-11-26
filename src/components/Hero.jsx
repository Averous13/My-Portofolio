import { ArrowRight, Download, Mail, Linkedin } from "lucide-react";
import React from "react";
import { Button } from "./ui/button";
import { personalInfo } from "../data";

const Hero = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const handleDownloadCV = () => {
        window.open(personalInfo.cvUrl, '_blank');
    };

    return (
        <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#0a0d10] via-[#000000] to-[#0a0d10] pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
                <div className="space-y-2">
                <p className="text-[#8ab2a6] text-lg font-medium">Hi, I'm</p>
                <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight">
                    {personalInfo.name}
                </h1>
                <h2 className="text-2xl md:text-3xl text-gray-300 font-light">
                    {personalInfo.title}
                </h2>
                </div>
                
                <p className="text-gray-400 text-lg leading-relaxed">
                {personalInfo.tagline}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-wrap gap-4 pt-4">
                <Button
                    onClick={() => scrollToSection('projects')}
                    className="bg-gradient-to-r from-[#3e9d81] to-[#8ab2a6] text-white hover:opacity-90 transition-all duration-300 group"
                    size="lg"
                >
                    View Projects
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
                
                <Button
                    onClick={handleDownloadCV}
                    variant="outline"
                    className="border-[#8ab2a6] text-[#8ab2a6] hover:bg-[#8ab2a6] hover:text-white transition-all duration-300"
                    size="lg"
                >
                    <Download className="mr-2" size={18} />
                    Download CV
                </Button>
                </div>

                {/* Social Links */}
                <div className="flex gap-4 pt-4">
                <a
                    href={`mailto:${personalInfo.email}`}
                    className="p-3 rounded-lg bg-gray-800/50 hover:bg-[#8ab2a6] text-gray-300 hover:text-white transition-all duration-300"
                    aria-label="Email"
                >
                    <Mail size={20} />
                </a>
                <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-lg bg-gray-800/50 hover:bg-[#8ab2a6] text-gray-300 hover:text-white transition-all duration-300"
                    aria-label="LinkedIn"
                >
                    <Linkedin size={20} />
                </a>
                </div>
            </div>

            {/* Professional Photo */}
            <div className="relative">
                <div className="relative z-10">
                <div className="relative overflow-hidden rounded-2xl border-4 border-[#8ab2a6]/20">
                    <img
                    src={personalInfo.photo}
                    alt={personalInfo.name}
                    className="w-full h-auto object-cover"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0d10] via-transparent to-transparent opacity-30"></div>
                </div>
                </div>
                
                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-72 h-72 bg-gradient-to-br from-[#3e9d81] to-[#8ab2a6] rounded-full blur-3xl opacity-10 -z-10"></div>
                <div className="absolute -bottom-4 -left-4 w-72 h-72 bg-gradient-to-tr from-[#3e9d81] to-[#8ab2a6] rounded-full blur-3xl opacity-10 -z-10"></div>
            </div>
            </div>
        </div>
        </section>
    );
};

export default Hero;
