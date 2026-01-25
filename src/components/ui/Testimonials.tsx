'use client';

import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const testimonials = [
    { text: "The complexity of flavor is unlike anything I've tasted.", author: "James Hoffman" },
    { text: "Shido redefines the morning ritual. Simply exquisite.", author: "Monocle Magazine" },
    { text: "A dark roast that actually retains its origin character.", author: "Barista Daily" },
];

export default function Testimonials() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrent((prev) => (prev + 1) % testimonials.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="h-screen flex items-center justify-center bg-[#111111] relative z-20">
            <div className="max-w-4xl text-center px-6">
                <motion.div
                    key={current}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                    className="flex flex-col gap-8"
                >
                    <p className="text-3xl md:text-6xl font-serif italic text-neutral-300">
                        "{testimonials[current].text}"
                    </p>
                    <p className="text-[#d4af37] tracking-widest uppercase font-bold text-sm md:text-base">
                        — {testimonials[current].author}
                    </p>
                </motion.div>

                <div className="flex justify-center gap-4 mt-12">
                    {testimonials.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className={`w-3 h-3 rounded-full transition-colors ${i === current ? 'bg-[#d4af37]' : 'bg-neutral-800'}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
