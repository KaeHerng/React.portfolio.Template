import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

const Hero = () => {
    return (
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 bg-dark z-0">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <span className="inline-block py-1 px-4 rounded-full bg-white/5 border border-white/10 text-sm font-medium mb-6 text-primary">
                        Leading the digital frontier
                    </span>
                    <h1 className="text-5xl md:text-8xl font-black mb-8 leading-tight">
                        Innovate. <span className="gradient-text">Transform.</span> <br /> Elevate.
                    </h1>
                    <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                        Empowering global enterprises with cutting-edge technology solutions that redefine boundaries and drive unprecedented growth.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button className="btn-primary flex items-center gap-2">
                            Explore Our Work <ArrowRight className="w-4 h-4" />
                        </button>
                        <button className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/5 transition-colors font-semibold">
                            Watch Demo
                        </button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gray-500"
            >
                <ChevronDown size={32} />
            </motion.div>
        </section>
    );
};

export default Hero;
