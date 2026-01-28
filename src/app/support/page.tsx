'use client';

import Navbar from '@/components/ui/Navbar';
import Footer from '@/components/ui/Footer';
import { Search, ChevronDown, ChevronUp, Coffee, Package, Truck, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
    {
        question: "Bagaimana cara menyeduh kopi Shido dengan sempurna?",
        answer: "Kami merekomendasikan penggunaan 18-20 gram kopi untuk 300ml air pada suhu 92-94°C. Seduh selama 3-4 menit untuk hasil terbaik."
    },
    {
        question: "Apa saja metode pembayaran yang tersedia?",
        answer: "Kami menerima transfer bank, kartu kredit/debit, dan pembayaran digital lainnya melalui Midtrans."
    },
    {
        question: "Berapa lama waktu pengiriman?",
        answer: "Pengiriman ke area Jabodetabek memakan waktu 1-2 hari kerja. Untuk luar pulau, 3-5 hari kerja."
    },
    {
        question: "Apakah bisa mengubah atau membatalkan pesanan?",
        answer: "Ya, Anda dapat mengubah atau membatalkan pesanan dalam waktu 1 jam setelah pemesanan melalui WhatsApp kami."
    },
    {
        question: "Bagaimana cara berlangganan kopi Shido?",
        answer: "Kunjungi halaman Subscription kami di Linktree untuk memilih paket yang sesuai dengan kebutuhan konsumsi harian Anda."
    }
];

const guides = [
    {
        icon: Coffee,
        title: "Brewing Guides",
        description: "Panduan lengkap menyeduh berbagai metode kopi.",
        link: "/brewing-guides"
    },
    {
        icon: Package,
        title: "Orders & Menu",
        description: "Informasi produk, harga, dan cara pemesanan.",
        link: "https://drive.google.com/file/d/142NVK16WHAChsADmsfMNYvQE3Dm1EoGi/view"
    },
    {
        icon: Truck,
        title: "Shipping & Returns",
        description: "Detail pengiriman, kebijakan pengembalian, dan pelacakan.",
        link: "#"
    },
    {
        icon: MessageCircle,
        title: "Live Chat",
        description: "Chat langsung dengan tim support kami.",
        link: "https://wa.me/6288224461483"
    }
];

function FAQItem({ item, isOpen, onClick }: { item: typeof faqs[0], isOpen: boolean, onClick: () => void }) {
    return (
        <div className="border-b border-neutral-800">
            <button
                onClick={onClick}
                className="w-full py-6 flex justify-between items-center text-left group"
            >
                <span className="text-lg font-medium group-hover:text-[#d4af37] transition-colors">{item.question}</span>
                {isOpen ? (
                    <ChevronUp className="w-5 h-5 text-[#d4af37]" />
                ) : (
                    <ChevronDown className="w-5 h-5 text-neutral-500" />
                )}
            </button>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                    >
                        <p className="pb-6 text-neutral-400 leading-relaxed">
                            {item.answer}
                        </p>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}

export default function SupportPage() {
    const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

    return (
        <div className="min-h-screen bg-[#111111] text-white">
            <Navbar />
            
            <main className="pt-32 pb-24 px-6 md:px-12 max-w-7xl mx-auto">
                <div className="mb-16">
                    <h1 className="text-4xl md:text-6xl font-bold uppercase tracking-tighter mb-6">
                        How can we help?
                    </h1>
                    <p className="text-neutral-400 max-w-2xl text-lg">
                        Temukan jawaban untuk pertanyaan umum Anda atau jelajahi panduan kami di bawah.
                    </p>
                </div>

                {/* Search Bar */}
                <div className="relative mb-20 max-w-2xl">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-neutral-500" />
                    <input 
                        type="text" 
                        placeholder="Search for help..." 
                        className="w-full bg-[#1a1a1a] border border-neutral-800 rounded-none py-4 pl-12 pr-4 text-white placeholder:text-neutral-500 focus:outline-none focus:border-[#d4af37] transition-colors"
                    />
                </div>

                {/* Quick Links Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
                    {guides.map((guide, index) => (
                        <a 
                            key={index}
                            href={guide.link}
                            className="group block bg-[#1a1a1a] border border-neutral-800 p-8 hover:border-[#d4af37] transition-colors"
                        >
                            <guide.icon className="w-8 h-8 mb-6 text-neutral-400 group-hover:text-[#d4af37] transition-colors" />
                            <h3 className="text-xl font-bold uppercase tracking-tight mb-2">{guide.title}</h3>
                            <p className="text-sm text-neutral-400">{guide.description}</p>
                        </a>
                    ))}
                </div>

                {/* FAQ Section */}
                <div className="max-w-3xl">
                    <h2 className="text-2xl font-bold uppercase tracking-tighter mb-8">Frequently Asked Questions</h2>
                    <div className="border-t border-neutral-800">
                        {faqs.map((faq, index) => (
                            <FAQItem 
                                key={index} 
                                item={faq} 
                                isOpen={openFaqIndex === index}
                                onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}
                            />
                        ))}
                    </div>
                </div>

                {/* Contact CTA */}
                <div className="mt-24 p-8 md:p-12 bg-[#1a1a1a] border border-neutral-800 text-center">
                    <h2 className="text-2xl font-bold uppercase tracking-tighter mb-4">Still need help?</h2>
                    <p className="text-neutral-400 mb-8">Tim kami siap membantu Anda 24/7 melalui WhatsApp.</p>
                    <a 
                        href="https://wa.me/6288224461483"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-[#d4af37] text-black font-bold uppercase tracking-widest py-4 px-8 hover:bg-white transition-colors"
                    >
                        Contact Support
                    </a>
                </div>
            </main>

            <Footer />
        </div>
    );
}

