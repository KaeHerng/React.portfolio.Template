import React from 'react';
import { motion } from 'framer-motion';

const posts = [
    {
        title: "The Future of Web Excellence",
        excerpt: "How Web 3.0 and AI are reshaping the way we interact with the internet today...",
        tag: "Future",
        date: "Jan 12, 2026"
    },
    {
        title: "Securing the Cloud Era",
        excerpt: "The latest techniques and protocols to keep your enterprise data safe in a hybrid world.",
        tag: "Security",
        date: "Jan 10, 2026"
    },
    {
        title: "Design for the Minimalist",
        excerpt: "Why simple is better: Exploring the psychological impact of clean digital interfaces.",
        tag: "Design",
        date: "Jan 05, 2026"
    }
];

const Content = () => {
    return (
        <section id="news" className="section-padding">
            <div className="flex justify-between items-end mb-16">
                <div>
                    <h2 className="text-4xl font-bold mb-4">Latest <span className="text-accent underline decoration-white/20">Updates</span></h2>
                    <p className="text-gray-400">Fresh insights from our expert team.</p>
                </div>
                <button className="hidden sm:block text-primary font-bold hover:underline">View All Posts</button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {posts.map((post, i) => (
                    <motion.div
                        key={i}
                        whileHover={{ y: -10 }}
                        className="flex flex-col group cursor-pointer"
                    >
                        <div className="aspect-video w-full bg-gradient-to-br from-primary/20 via-white/5 to-accent/20 rounded-2xl mb-6 relative overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-60 transition-opacity">
                                <div className="w-1/2 h-px bg-white"></div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-bold uppercase tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full">{post.tag}</span>
                            <span className="text-xs text-gray-500 uppercase tracking-widest">{post.date}</span>
                        </div>
                        <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">{post.title}</h3>
                        <p className="text-gray-500 line-clamp-2 leading-relaxed">{post.excerpt}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Content;
