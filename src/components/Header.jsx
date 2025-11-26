import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsMobileMenuOpen(false);
        }
  };

    const navItems = [
        { label: 'Home', id: 'home' },
        { label: 'About', id: 'about' },
        { label: 'Projects', id: 'projects' },
        { label: 'Contact', id: 'contact' }
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#0a0d10]/95 backdrop-blur-md shadow-lg' : 'bg-transparent'}`}>
            <div className="max-w-7xl mx-auto px4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                {/* Logo Section */}
                <button
                    onClick={() => scrollToSection('home')}
                    className="text-xl font-bold text-white hover:text-[##8ab2a6] transition-colors">
                AS
                </button>


                {/* Navigation Links */}
                <nav className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="text-gray-300 hover:text-[#8ab2a6] transition-colors text-sm font-medium">
                            {item.label}
                        </button>
                    ))}
                     <Button
                         onClick={() => scrollToSection('contact')}
                        className="bg-gradient-to-r from-[#3e9d81] to-[#8ab2a6] text-white hover:opacity-90 transition-opacity"
                    >
                        Get In Touch
                    </Button>

                </nav>

                {/* Mobile Menu Button */}
                <button 
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="md:hidden text-white hover:text-[#8ab2a6] transition-colors">
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                </div>
            </div>

            {isMobileMenuOpen && (
                <div
                    className="md:hidden bg-[#0a0d10] border-t border-gray-800">
                    <nav
                    className="px-4 py-4 space-y-3">
                    {navItems.map((item) => (
                        <button
                            key={item.id}
                            onClick={() => scrollToSection(item.id)}
                            className="block w-full text-left text-gray-300 hover:text-[#8ab2a6] transition-colors py-2">
                            {item.label}
                        </button>
                    ))}
                        
                    </nav>    
                    <Button
                        onClick={() => scrollToSection('contact')}
                        className="w-full bg-gradient-to-r from-[#3e9d81] to-[#8ab2a6] text-white hover:opacity-90 transition-opacity"
                    >
                    Get In Touch
                    </Button>
                </div>
            )}

        </header>
    )
}

export default Header;