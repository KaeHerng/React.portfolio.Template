import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
    return (
        <section id="contact" className="section-padding overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-20">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-8">Let's <span className="gradient-text">Connect.</span></h2>
                    <p className="text-gray-400 text-lg mb-12">
                        Have a project in mind or just want to say hi? We'd love to hear from you. Our team typically responds within 24 hours.
                    </p>

                    <div className="space-y-8">
                        <div className="flex gap-6 items-center">
                            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary shrink-0">
                                <Mail />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Email Us</p>
                                <p className="text-xl font-medium">hello@techcore.io</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center">
                            <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0">
                                <Phone />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Call Us</p>
                                <p className="text-xl font-medium">+1 (555) 000-1234</p>
                            </div>
                        </div>
                        <div className="flex gap-6 items-center">
                            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center text-accent shrink-0">
                                <MapPin />
                            </div>
                            <div>
                                <p className="text-sm text-gray-500 uppercase font-bold tracking-widest">Visit Us</p>
                                <p className="text-xl font-medium">123 Innovation Way, Tech City</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="glass-card p-10">
                    <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                        <div className="grid sm:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">FullName</label>
                                <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="John Doe" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-gray-400">Email Address</label>
                                <input type="email" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Subject</label>
                            <input type="text" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="How can we help?" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-400">Message</label>
                            <textarea rows="5" className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-colors" placeholder="Tell us more about your project..."></textarea>
                        </div>
                        <button className="btn-primary w-full flex items-center justify-center gap-2">
                            Send Message <Send size={18} />
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
