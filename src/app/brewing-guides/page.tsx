'use client';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { Coffee, Thermometer, Clock, Scale, Droplets, ChevronRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const brewingMethods = [
    {
        id: 'v60',
        title: 'V60 Pour Over',
        description: 'Metode pour over yang populer untuk menghasilkan kopi yang bersih dan complex.',
        icon: Droplets,
        color: 'bg-amber-50',
        details: {
            ratio: '1:15',
            grindSize: 'Medium-Fine',
            waterTemp: '92-94°C',
            brewTime: '2:30 - 3:00',
            steps: [
                { time: '0:00', action: 'Rinse filter dan add 20g coffee', water: '0g' },
                { time: '0:00 - 0:45', action: 'Bloom pour - add 60g water, swirl gently', water: '60g' },
                { time: '0:45 - 1:15', action: 'Second pour - add water in spirals to 160g', water: '160g' },
                { time: '1:15 - 1:45', action: 'Third pour - add water in spirals to 240g', water: '240g' },
                { time: '1:45 - 2:30', action: 'Final pour - add water to 300g, let drain', water: '300g' },
            ]
        }
    },
    {
        id: 'frenchpress',
        title: 'French Press',
        description: 'Metode full immersion yang menghasilkan kopi dengan body penuh dan rich flavor.',
        icon: Coffee,
        color: 'bg-stone-100',
        details: {
            ratio: '1:12',
            grindSize: 'Coarse',
            waterTemp: '94-96°C',
            brewTime: '4:00',
            steps: [
                { time: '0:00', action: 'Add 30g coarse ground coffee', water: '0g' },
                { time: '0:00 - 0:15', action: 'Pour 360g hot water, stir gently', water: '360g' },
                { time: '0:15 - 4:00', action: 'Place lid on and wait (don\'t plunge yet)', water: '360g' },
                { time: '4:00', action: 'Stir again and let grounds settle', water: '360g' },
                { time: '4:00 - 4:30', action: 'Plunge slowly and serve immediately', water: '360g' },
            ]
        }
    },
    {
        id: 'aeropress',
        title: 'AeroPress',
        description: 'Metode versatile yang bisa menghasilkan berbagai gaya kopi dari espresso-like hingga filter.',
        icon: Thermometer,
        color: 'bg-neutral-100',
        details: {
            ratio: '1:16 (Inverted Method)',
            grindSize: 'Medium-Fine',
            waterTemp: '85-90°C',
            brewTime: '1:30 - 2:00',
            steps: [
                { time: '0:00', action: 'Set up inverted AeroPress, add 15g coffee', water: '0g' },
                { time: '0:00 - 0:30', action: 'Add 240g water, stir 3 times', water: '240g' },
                { time: '0:30 - 1:30', action: 'Flip carefully onto mug, press gently', water: '240g' },
            ]
        }
    },
    {
        id: 'chemex',
        title: 'Chemex',
        description: 'Metode pour over dengan filter tebal menghasilkan kopi yang very clean dan bright.',
        icon: Clock,
        color: 'bg-white',
        details: {
            ratio: '1:16',
            grindSize: 'Medium-Coarse',
            waterTemp: '93-94°C',
            brewTime: '3:30 - 4:30',
            steps: [
                { time: '0:00', action: 'Rinse filter thoroughly (3x water)', water: '0g' },
                { time: '0:00 - 0:30', action: 'Bloom pour - add 50g water', water: '50g' },
                { time: '0:30 - 2:00', action: 'Pour in slow circles to 300g', water: '300g' },
                { time: '2:00 - 3:30', action: 'Continue to 450g total, let drain completely', water: '450g' },
            ]
        }
    }
];

const tips = [
    {
        title: 'Fresh Beans',
        description: 'Beli kopi dalam jumlah kecil dan gunakan dalam 2-4 minggu setelah roasting untuk hasil terbaik.',
        icon: '🫘'
    },
    {
        title: 'Proper Storage',
        description: 'Simpan di tempat sejuk, gelap, dan kering. Hindari kulkas karena kelembapan merusak kopi.',
        icon: '🏺'
    },
    {
        title: 'Grind Fresh',
        description: 'Giling kopi tepat sebelum menyeduh untuk mempertahankan aroma dan flavor maksimal.',
        icon: '⚙️'
    },
    {
        title: 'Water Quality',
        description: 'Gunakan air filtered atau bottled. Air dengan mineral balance yang baik menghasilkan kopi lebih baik.',
        icon: '💧'
    }
];

export default function BrewingGuidesPage() {
    return (
        <div className="min-h-screen bg-[#111111] text-white">
            <Navbar />
            
            <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                {/* Back Button */}
                <Link 
                    href="/support" 
                    className="inline-flex items-center gap-2 text-neutral-400 hover:text-[#d4af37] transition-colors mb-8"
                >
                    <ArrowLeft className="w-5 h-5" />
                    <span>Kembali ke Support</span>
                </Link>

                {/* Header */}
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-16"
                >
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
                        Brewing Guides
                    </h1>
                    <p className="text-neutral-400 max-w-2xl text-lg">
                        Panduan lengkap untuk menyeduh berbagai metode kopi. Temukan rahasia kopi sempurna dengan teknik yang tepat.
                    </p>
                </motion.div>

                {/* Brewing Methods Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
                    {brewingMethods.map((method, index) => (
                        <motion.div
                            key={method.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="bg-[#1a1a1a] border border-neutral-800 p-8 hover:border-[#d4af37] transition-colors group"
                        >
                            <div className="flex items-start gap-4 mb-6">
                                <div className={`p-4 rounded-xl ${method.color} text-black`}>
                                    <method.icon className="w-8 h-8" />
                                </div>
                                <div>
                                    <h2 className="text-2xl font-bold uppercase tracking-tight mb-2 group-hover:text-[#d4af37] transition-colors">
                                        {method.title}
                                    </h2>
                                    <p className="text-neutral-400 text-sm">
                                        {method.description}
                                    </p>
                                </div>
                            </div>

                            {/* Quick Stats */}
                            <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-[#111111] rounded-lg">
                                <div>
                                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Ratio</p>
                                    <p className="font-medium">{method.details.ratio}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Grind</p>
                                    <p className="font-medium">{method.details.grindSize}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Temp</p>
                                    <p className="font-medium">{method.details.waterTemp}</p>
                                </div>
                                <div>
                                    <p className="text-xs text-neutral-500 uppercase tracking-wider mb-1">Time</p>
                                    <p className="font-medium">{method.details.brewTime}</p>
                                </div>
                            </div>

                            {/* Steps */}
                            <div className="space-y-3">
                                <p className="text-xs text-neutral-500 uppercase tracking-wider mb-3">Step by Step</p>
                                {method.details.steps.map((step, i) => (
                                    <div key={i} className="flex items-start gap-3 text-sm">
                                        <div className="flex items-center gap-2 min-w-[60px]">
                                            <span className="text-[#d4af37] font-mono text-xs">{step.time}</span>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-neutral-300">{step.action}</p>
                                            {step.water !== '0g' && (
                                                <p className="text-neutral-500 text-xs mt-1">Target: {step.water}</p>
                                            )}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Tips Section */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    className="mb-20"
                >
                    <h2 className="text-2xl font-bold uppercase tracking-tighter mb-8">Essential Tips</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {tips.map((tip, index) => (
                            <div 
                                key={index}
                                className="bg-[#1a1a1a] border border-neutral-800 p-6 hover:border-[#d4af37] transition-colors"
                            >
                                <span className="text-4xl mb-4 block">{tip.icon}</span>
                                <h3 className="font-bold uppercase tracking-tight mb-2 text-lg">{tip.title}</h3>
                                <p className="text-neutral-400 text-sm leading-relaxed">{tip.description}</p>
                            </div>
                        ))}
                    </div>
                </motion.div>

                {/* Coffee Calculator CTA */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="p-8 md:p-12 bg-[#1a1a1a] border border-neutral-800 text-center"
                >
                    <Coffee className="w-12 h-12 mx-auto mb-6 text-[#d4af37]" />
                    <h2 className="text-2xl font-bold uppercase tracking-tighter mb-4">Butuh Rekomendasi?</h2>
                    <p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
                        Tim barista kami siap membantu Anda menemukan profil kopi dan metode seduh yang sesuai dengan preferensi Anda.
                    </p>
                    <Link 
                        href="https://wa.me/6288224461483"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-[#d4af37] text-black font-bold uppercase tracking-widest py-4 px-8 hover:bg-white transition-colors"
                    >
                        <span>Chat Barista</span>
                        <ChevronRight className="w-5 h-5" />
                    </Link>
                </motion.div>
            </main>

            <Footer />
        </div>
    );
}

