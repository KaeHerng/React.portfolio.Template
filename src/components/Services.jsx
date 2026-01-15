import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Cpu, Shield, BarChart, Cloud, Code } from 'lucide-react';

const services = [
    {
        icon: <Layout className="w-8 h-8" />,
        title: "UI/UX Design",
        description: "Creating intuitive and breathtaking digital experiences that engage and delight users."
    },
    {
        icon: <Code className="w-8 h-8" />,
        title: "Web Development",
        description: "Building scalable, high-performance web applications using the latest technologies."
    },
    {
        icon: <Cpu className="w-8 h-8" />,
        title: "AI & Machine Learning",
        description: "Leveraging data and intelligent algorithms to solve complex business challenges."
    },
    {
        icon: <Shield className="w-8 h-8" />,
        title: "Cybersecurity",
        description: "Protecting your digital assets with robust, enterprise-grade security solutions."
    },
    {
        icon: <Cloud className="w-8 h-8" />,
        title: "Cloud Solutions",
        description: "Optimizing your infrastructure with secure and flexible cloud-native architectures."
    },
    {
        icon: <BarChart className="w-8 h-8" />,
        title: "Digital Strategy",
        description: "Data-driven roadmaps to help your business thrive in a competitive landscape."
    }
];

const Services = () => {
    return (
        <section id="services" className="section-padding bg-white/[0.02]">
            <div className="text-center mb-20">
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Our <span className="gradient-text">Services</span></h2>
                <p className="text-gray-400 max-w-2xl mx-auto">From concept to execution, we provide comprehensive solutions tailored to your unique needs.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {services.map((service, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="p-8 glass-card hover:bg-white/10 transition-all group"
                    >
                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                            {service.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                        <p className="text-gray-500 leading-relaxed">{service.description}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Services;
