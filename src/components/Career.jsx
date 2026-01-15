import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles, ArrowUpRight } from 'lucide-react';

const positions = [
    { title: "Senior React Developer", type: "Remote", color: "text-blue-400" },
    { title: "Product Designer", type: "London, UK", color: "text-purple-400" },
    { title: "Cloud Architect", type: "New York, US", color: "text-pink-400" },
];

const Career = () => {
    return (
        <section id="career" className="section-padding">
            <div className="grid md:grid-cols-2 gap-16">
                <div>
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 flex items-center gap-4">
                        Join the <span className="text-primary">Core.</span> <Sparkles className="text-yellow-400" />
                    </h2>
                    <p className="text-gray-400 text-lg mb-8">
                        We're always looking for talented individuals who are passionate about technology and innovation. Work on projects that matter.
                    </p>
                    <button className="btn-primary">View Open Positions</button>
                </div>

                <div className="space-y-4">
                    {positions.map((pos, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ x: 10 }}
                            className="p-6 glass-card border-none bg-white/[0.03] flex justify-between items-center cursor-pointer group"
                        >
                            <div>
                                <h4 className={`text-xl font-bold mb-1 ${pos.color}`}>{pos.title}</h4>
                                <p className="text-sm text-gray-500">{pos.type}</p>
                            </div>
                            <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center group-hover:bg-white group-hover:text-dark transition-all">
                                <ArrowUpRight size={20} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Career;
