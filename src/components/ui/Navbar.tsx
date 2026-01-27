'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

const navLinks = [
    { title: 'Origins', href: '#origins' },
    { title: 'The Roast', href: '#roast' },
    { title: 'Menu', href: 'https://drive.google.com/file/d/142NVK16WHAChsADmsfMNYvQE3Dm1EoGi/view' },
    { title: 'Support', href: '/support' },
    { title: 'Contact', href: 'https://wa.me/6288224461483' },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    // Cast as any to avoid Framer Motion strict typing issues with specific versions
    const menuVariants: any = {
        initial: { scaleY: 0 },
        animate: {
            scaleY: 1,
            transition: { duration: 0.5, ease: "easeInOut" },
        },
        exit: {
            scaleY: 0,
            transition: { delay: 0.5, duration: 0.5, ease: "easeInOut" },
        },
    };

    const containerVars: any = {
        initial: { transition: { staggerChildren: 0.09, staggerDirection: -1 } },
        open: {
            transition: { delayChildren: 0.3, staggerChildren: 0.09, staggerDirection: 1 },
        },
    };

    const linkVars: any = {
        initial: { y: "30vh", transition: { duration: 0.5, ease: "easeInOut" } },
        open: { y: 0, transition: { ease: "easeInOut", duration: 0.7 } },
    };

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center p-6 md:p-12 mix-blend-difference text-white">
                <Link href="/" className="text-2xl font-bold tracking-tighter uppercase">
                    Shido
                </Link>
                <button onClick={toggleMenu} className="group flex items-center gap-2">
                    <span className="uppercase text-sm font-medium tracking-widest hidden md:block group-hover:opacity-70 transition-opacity">Menu</span>
                    <div className="relative w-6 h-6">
                        <Menu className={cn("absolute inset-0 transition-opacity duration-300", isOpen ? "opacity-0" : "opacity-100")} />
                        <X className={cn("absolute inset-0 transition-opacity duration-300", isOpen ? "opacity-100" : "opacity-0")} />
                    </div>
                </button>
            </nav>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        variants={menuVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="fixed inset-0 bg-[#111111] z-40 origin-top flex flex-col justify-center items-center text-center"
                    >
                        <motion.div
                            variants={containerVars}
                            initial="initial"
                            animate="open"
                            exit="initial"
                            className="flex flex-col gap-4 overflow-hidden"
                        >
                            {navLinks.map((link, index) => (
                                <div key={index} className="overflow-hidden">
                                    <motion.div variants={linkVars}>
                                        <Link
                                            href={link.href}
                                            onClick={toggleMenu}
                                            className="text-5xl md:text-8xl font-bold uppercase tracking-tighter hover:text-[#d4af37] transition-colors"
                                        >
                                            {link.title}
                                        </Link>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1, transition: { delay: 0.5 } }}
                            exit={{ opacity: 0 }}
                            className="absolute bottom-10 left-0 right-0 flex justify-center gap-8 text-sm uppercase tracking-widest text-neutral-500"
                        >
                            <a href="https://www.instagram.com/shidokoffee/" target="_blank" rel="noopener noreferrer">Instagram</a>
                            <a href="https://www.linkedin.com/company/kamar-gadget/posts/?feedView=all" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
