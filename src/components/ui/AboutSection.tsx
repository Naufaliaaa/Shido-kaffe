'use client';

import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import { cn } from '@/lib/utils';

export default function AboutSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start 0.9', 'start 0.25'],
    });

    const text = "Shido is not just coffee. It is a ritual. Born from the shadows of Kyoto, roasted with precision, and brewed for those who seek depth in every sip.";
    const words = text.split(" ");

    return (
        <section ref={containerRef} className="relative min-h-screen flex items-center justify-center p-12 bg-[#111111] z-20 -mt-[100vh] pt-[100vh]">
            <div className="max-w-4xl text-center">
                <p className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight flex flex-wrap justify-center gap-x-3 gap-y-2">
                    {words.map((word, i) => {
                        const start = i / words.length;
                        const end = start + (1 / words.length);
                        // eslint-disable-next-line react-hooks/rules-of-hooks
                        const opacity = useTransform(scrollYProgress, [start, end], [0.1, 1]);

                        return (
                            <motion.span
                                key={i}
                                style={{ opacity }}
                                className="transition-colors duration-200"
                            >
                                {word}
                            </motion.span>
                        )
                    })}
                </p>
            </div>
        </section>
    );
}
