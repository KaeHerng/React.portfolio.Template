import React from 'react';
import { motion } from 'framer-motion';

const Vision = () => {
    return (
        <section id="vision" className="relative py-32 overflow-hidden">
            <div className="absolute inset-0 bg-primary/5"></div>
            <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                >
                    <span className="text-accent font-bold tracking-widest uppercase mb-4 block">Our Vision</span>
                    <h2 className="text-4xl md:text-6xl font-black mb-12 italic leading-tight">
                        "To empower every organization on the planet to achieve more through the <span className="text-white not-italic underline decoration-primary underline-offset-8">seamless integration</span> of human creativity and technology."
                    </h2>
                    <div className="flex items-center justify-center gap-4">
                        <div className="w-12 h-px bg-gray-600"></div>
                        <p className="text-xl font-medium">Marc Benioff, CEO & Founder</p>
                        <div className="w-12 h-px bg-gray-600"></div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Vision;
