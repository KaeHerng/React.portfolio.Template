import React from 'react';
import { motion } from 'framer-motion';

const stats = [
    { value: "500+", label: "Projects Completed" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "15+", label: "Years Experience" },
    { value: "45", label: "Global Awards" },
];

const Achievements = () => {
    return (
        <section className="section-padding overflow-hidden">
            <div className="glass-card py-16 px-8 flex flex-wrap justify-around gap-12 text-center relative">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary/10 to-accent/10 pointer-events-none"></div>
                {stats.map((stat, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.5 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ type: "spring", stiffness: 100, delay: index * 0.1 }}
                    >
                        <h3 className="text-4xl md:text-6xl font-black gradient-text mb-2">{stat.value}</h3>
                        <p className="text-gray-400 font-medium tracking-wide uppercase text-sm">{stat.label}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Achievements;
