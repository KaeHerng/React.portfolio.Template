import React, { useState, useEffect } from 'react';
import { Menu, X, Rocket } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#' },
        { name: 'About', href: '#about' },
        { name: 'Services', href: '#services' },
        { name: 'Vision', href: '#vision' },
        { name: 'Career', href: '#career' },
        { name: 'News', href: '#news' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-dark/80 backdrop-blur-md py-4 shadow-lg' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <Rocket className="text-primary w-8 h-8" />
                    <span className="text-2xl font-bold tracking-tighter">TECH<span className="text-primary">CORE</span></span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="text-sm font-medium hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="btn-primary py-2 px-6 text-sm">Get Started</button>
                </div>

                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button onClick={() => setIsOpen(!isOpen)} className="text-light">
                        {isOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </div>

            {/* Mobile Nav */}
            <div className={`md:hidden absolute w-full bg-dark transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 py-6 border-b border-white/10' : 'max-h-0'}`}>
                <div className="flex flex-col items-center gap-6">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="text-lg font-medium hover:text-primary transition-colors"
                        >
                            {link.name}
                        </a>
                    ))}
                    <button className="btn-primary py-2 px-6 text-sm">Get Started</button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
