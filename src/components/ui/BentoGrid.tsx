'use client';

import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

const items = [
    {
        type: 'image',
        src: '/IMG/003.jpeg',
        colSpan: 'col-span-12 md:col-span-8',
        rowSpan: 'row-span-2',
        title: 'Ethically Sourced'
    },
    {
        type: 'stat',
        value: 2400,
        label: 'Meters Above Sea Level',
        colSpan: 'col-span-6 md:col-span-4',
        rowSpan: 'row-span-1'
    },

    {
        type: 'image',
        src: '/IMG/001.png',
        colSpan: 'col-span-6 md:col-span-4',
        rowSpan: 'row-span-1',
        title: 'Master Roasters'
    },
    {
        type: 'stat',
        value: 100,
        label: 'Arabica',
        suffix: '%',
        colSpan: 'col-span-6 md:col-span-4',
        rowSpan: 'row-span-1'
    },
    {
        type: 'image',
        src: '/IMG/002.png',
        colSpan: 'col-span-6 md:col-span-8',
        rowSpan: 'row-span-1',
        title: 'Daily Ritual'
    },
];

export default function BentoGrid() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <section className="py-24 px-6 md:px-12 bg-[#111111] z-20 relative">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-4xl md:text-6xl font-bold mb-16 uppercase tracking-tighter"
                >
                    Craftsmanship
                </motion.h2>

                <div ref={ref} className="grid grid-cols-12 grid-rows-none md:grid-rows-2 gap-4 h-auto md:h-[800px]">
                    {items.map((item, i) => (
                        <motion.div
                            key={i}
                            className={`${item.colSpan} ${item.rowSpan} relative group overflow-hidden rounded-3xl bg-neutral-900 border border-neutral-800`}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: i * 0.1, duration: 0.5 }}
                        >
                            {item.type === 'image' ? (
                                <>
                                    <Image
                                        src={item.src!}
                                        alt={item.title!}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110 opacity-70 group-hover:opacity-50"
                                    />
                                    <div className="absolute bottom-6 left-6">
                                        <h3 className="text-xl font-bold uppercase">{item.title}</h3>
                                    </div>
                                </>
                            ) : (
                                <div className="h-full flex flex-col justify-center items-center text-center p-6">
                                    <span className="text-5xl md:text-7xl font-bold text-[#d4af37]">
                                        {isInView ? <CountUp end={item.value!} duration={3} suffix={item.suffix || ''} /> : 0}
                                    </span>
                                    <p className="text-neutral-400 mt-2 uppercase tracking-wide text-sm">{item.label}</p>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
