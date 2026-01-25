'use client';

import { motion } from 'framer-motion';

export default function CTA() {
    return (
        <section className="h-[80vh] flex items-center justify-center relative overflow-hidden z-20">
            <div className="absolute inset-0 bg-neutral-900">
                {/* Animated Gradient Background */}
                <motion.div
                    animate={{
                        rotate: 360,
                        scale: [1, 1.2, 1]
                    }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute -top-[50%] -left-[50%] w-[200%] h-[200%] bg-[conic-gradient(from_0deg,transparent_0deg,#d4af3710_360deg)] opacity-30"
                />
            </div>

            <div className="relative z-10 text-center px-6">
                <h2 className="text-5xl md:text-8xl font-bold uppercase tracking-tighter mb-8 text-transparent bg-clip-text bg-gradient-to-b from-white to-neutral-500">
                    Join the Cult
                </h2>
                <p className="text-neutral-400 mb-12 max-w-lg mx-auto uppercase tracking-wide">
                    Subscribe today and never run out of your daily ritual.
                </p>
                <button className="px-12 py-5 bg-[#d4af37] text-black font-bold uppercase tracking-widest text-lg hover:scale-105 transition-transform rounded-full">
                    Get Started
                </button>
            </div>
        </section>
    );
}
