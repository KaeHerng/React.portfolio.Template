import React from 'react';
import { motion } from 'framer-motion';
import { Globe, Users, Target } from 'lucide-react';

const Introduction = () => {
    return (
        <section id="about" className="section-padding">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-bold mb-8"
                    >
                        We build the tools of <span className="text-secondary">tomorrow.</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-400 text-lg mb-12"
                    >
                        Founded in 2010, TechCore has evolved from a small startup to a global powerhouse in software engineering and digital transformation. We believe that technology should be accessible, powerful, and beautiful.
                    </motion.p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                        <div className="flex gap-4">
                            <div className="p-3 glass-card text-primary h-fit">
                                <Globe size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Global Presence</h4>
                                <p className="text-sm text-gray-500">Operating in over 45 countries worldwide.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="p-3 glass-card text-secondary h-fit">
                                <Users size={24} />
                            </div>
                            <div>
                                <h4 className="font-bold mb-1">Elite Team</h4>
                                <p className="text-sm text-gray-500">500+ experts across multiple disciplines.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="relative group"
                >
                    <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent opacity-20 blur-2xl rounded-full group-hover:opacity-40 transition-opacity"></div>
                    <div className="relative glass-card aspect-square flex items-center justify-center p-8">
                        <div className="text-center">
                            <div className="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                                <Target size={48} />
                            </div>
                            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                            <p className="text-gray-400">To accelerate the world's transition to a digitally-driven economy through sustainable and scalable innovation.</p>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Introduction;
