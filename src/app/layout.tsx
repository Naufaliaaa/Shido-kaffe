import './globals.css';
import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import SmoothScroller from '@/components/ui/SmoothScroller';
import Navbar from '@/components/ui/Navbar';
import Preloader from '@/components/ui/Preloader';

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit'
});

export const metadata: Metadata = {
  title: 'Shido Coffee',
  description: 'Premium Japanese Single Origin Coffee',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={outfit.variable}>
      <body className="bg-background text-foreground antialiased selection:bg-yellow-500/30">
        <SmoothScroller>
          <Preloader />
          <Navbar />
          <main>
            {children}
          </main>
        </SmoothScroller>
      </body>
    </html>
  );
}
