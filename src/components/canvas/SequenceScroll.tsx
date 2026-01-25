'use client';

import { useScroll, useTransform, motion, useMotionValueEvent } from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import { cn } from '@/lib/utils';

interface SequenceScrollProps {
    className?: string;
}

const FRAME_COUNT = 240;

export default function SequenceScroll({ className }: SequenceScrollProps) {
    const containerRef = useRef<HTMLDivElement>(null);
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    const currentIndex = useTransform(scrollYProgress, [0, 1], [0, FRAME_COUNT - 1]);

    useEffect(() => {
        const loadedImages: HTMLImageElement[] = [];
        let loadedCount = 0;

        for (let i = 1; i <= FRAME_COUNT; i++) {
            const img = new Image();
            const src = `/sequence/ezgif-frame-${i.toString().padStart(3, '0')}.jpg`;
            img.src = src;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === FRAME_COUNT) {
                    setImages(loadedImages.sort((a, b) => {
                        // Extract number from src to sort correctly because async loading might mix order
                        const getNum = (str: string) => parseInt(str.match(/ezgif-frame-(\d+)/)?.[1] || '0');
                        return getNum(a.src) - getNum(b.src);
                    }));
                    setIsLoaded(true);
                }
            };
            // Keep order loosely by index placement, but sort on completion to be safe
            loadedImages.push(img);
        }
    }, []);

    const renderFrame = (index: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const img = images[index];
        if (!img) return;

        // Cover logic
        const canvasRatio = canvas.width / canvas.height;
        const imgRatio = img.width / img.height;
        let drawWidth, drawHeight, offsetX, offsetY;

        if (imgRatio > canvasRatio) {
            drawHeight = canvas.height;
            drawWidth = img.width * (canvas.height / img.height);
            offsetX = (canvas.width - drawWidth) / 2;
            offsetY = 0;
        } else {
            drawWidth = canvas.width;
            drawHeight = img.height * (canvas.width / img.width);
            offsetX = 0;
            offsetY = (canvas.height - drawHeight) / 2;
        }

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, offsetX, offsetY, drawWidth, drawHeight);
    };

    useMotionValueEvent(currentIndex, 'change', (latest) => {
        if (isLoaded) {
            const frameIndex = Math.min(
                FRAME_COUNT - 1,
                Math.max(0, Math.round(latest))
            );
            requestAnimationFrame(() => renderFrame(frameIndex));
        }
    });

    useEffect(() => {
        const handleResize = () => {
            if (canvasRef.current) {
                canvasRef.current.width = window.innerWidth;
                canvasRef.current.height = window.innerHeight;
                // Re-render current frame on resize
                if (images.length > 0) {
                    renderFrame(Math.round(currentIndex.get()));
                }
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, [isLoaded, images]);

    return (
        <div ref={containerRef} className={cn("h-[400vh] relative", className)}>
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas
                    ref={canvasRef}
                    className="w-full h-full object-cover bg-[#111111]"
                />

                {/* Text Overlays - Positioned absolute on top of canvas */}
                <div className="absolute inset-0 pointer-events-none flex flex-col justify-center items-center z-10">
                    {/* Intro Text - Fade out as we scroll */}
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0, 0.15], [1, 0]) }}
                        className="text-center"
                    >
                        <h1 className="text-6xl md:text-9xl font-bold tracking-tighter uppercase mb-4">Shido</h1>
                        <p className="text-xl md:text-2xl text-neutral-400 tracking-widest uppercase">Premium Single Origin</p>
                    </motion.div>

                    {/* Slogan 1 - Left */}
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0.2, 0.3, 0.4], [0, 1, 0]), x: useTransform(scrollYProgress, [0.2, 0.3, 0.4], [-50, 0, -50]) }}
                        className="absolute left-10 md:left-32 max-w-lg"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">Born in the <br /><span className="text-[#d4af37]">Shadows</span></h2>
                    </motion.div>

                    {/* Slogan 2 - Right */}
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0.5, 0.6, 0.7], [0, 1, 0]), x: useTransform(scrollYProgress, [0.5, 0.6, 0.7], [50, 0, 50]) }}
                        className="absolute right-10 md:right-32 max-w-lg text-right"
                    >
                        <h2 className="text-4xl md:text-6xl font-bold leading-tight">Roasting <br /><span className="text-[#d4af37]">Perfection</span></h2>
                    </motion.div>

                    {/* CTA Overlay */}
                    <motion.div
                        style={{ opacity: useTransform(scrollYProgress, [0.85, 0.95], [0, 1]) }}
                        className="absolute bottom-32 flex flex-col items-center gap-6"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold">Experience the Depth</h2>
                        <div className="pointer-events-auto">
                            <button className="px-8 py-4 bg-[#d4af37] text-black font-bold uppercase tracking-widest hover:bg-white transition-colors rounded-full">
                                Order Now
                            </button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
