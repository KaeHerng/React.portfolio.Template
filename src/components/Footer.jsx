import React from 'react';
import { Rocket, Twitter, Linkedin, Github, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-dark/50 border-t border-white/5 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-20">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Rocket className="text-primary w-8 h-8" />
                            <span className="text-2xl font-bold tracking-tighter">TECH<span className="text-primary">CORE</span></span>
                        </div>
                        <p className="text-gray-500 max-w-sm mb-8">
                            Building the future of digital commerce and enterprise infrastructure. Join us on our mission to revolutionize the industry.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors hover:border-primary"><Twitter size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors hover:border-primary"><Linkedin size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors hover:border-primary"><Github size={18} /></a>
                            <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center hover:bg-primary transition-colors hover:border-primary"><Instagram size={18} /></a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Quick Links</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li><a href="#" className="hover:text-primary transition-colors">About Us</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Our Services</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Case Studies</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Careers</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold mb-6">Support</h4>
                        <ul className="space-y-4 text-gray-500">
                            <li><a href="#" className="hover:text-primary transition-colors">Help Center</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Privacy Policy</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Terms of Service</a></li>
                            <li><a href="#" className="hover:text-primary transition-colors">Contact Support</a></li>
                        </ul>
                    </div>
                </div>

                <div className="pt-8 border-t border-white/5 text-center text-sm text-gray-600">
                    <p>© 2026 TechCore Interactive. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
