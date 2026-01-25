export default function Footer() {
    return (
        <footer className="bg-black text-neutral-400 py-24 px-6 md:px-12 relative z-20 border-t border-neutral-900">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
                <div>
                    <h1 className="text-5xl font-bold text-white uppercase tracking-tighter mb-6">Shido</h1>
                    <p className="max-w-sm">Kyoto-roasted, single-origin coffee delivered to your doorstep. Experience the darkness.</p>
                </div>

                <div className="grid grid-cols-2 gap-12 text-sm uppercase tracking-widest">
                    <div className="flex flex-col gap-4">
                        <span className="text-white font-bold">Explore</span>
                        <a href="#" className="hover:text-[#d4af37] transition-colors">Shop</a>
                        <a href="#" className="hover:text-[#d4af37] transition-colors">Subscription</a>
                        <a href="https://maps.app.goo.gl/9254dW5t56AeVAiHA" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">Locations</a>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-white font-bold">Connect</span>
                        <a href="https://www.instagram.com/shidokoffee/" target="_blank" rel="noopener noreferrer" className="hover:text-[#d4af37] transition-colors">Instagram</a>
                        <a href="#" className="hover:text-[#d4af37] transition-colors">Twitter</a>
                        <a href="#" className="hover:text-[#d4af37] transition-colors">Support</a>
                    </div>
                </div>
            </div>
            <div className="mt-24 pt-8 border-t border-neutral-900 flex justify-between text-xs uppercase opacity-50">
                <span>© 2026 Shido Coffee</span>
                <span>Made by Antigravity</span>
            </div>
        </footer>
    );
}
