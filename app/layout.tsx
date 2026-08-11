import type { Metadata } from 'next';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Rwanda Notice Board | Amakuru • Amatangazo • Amahirwe',
    template: '%s | Rwanda Notice Board',
  },
  description: 'A professional Rwanda information platform for sharing reliable news, announcements, jobs, opportunities, education, health, business, events, tourism and other useful information for Rwandans.',
  icons: {
    icon: '🇷🇼',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://rwandanoticeboard.rw',
    siteName: 'Rwanda Notice Board',
    description: 'Your trusted source for Rwanda news and information',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Rwanda Notice Board',
    description: 'Your trusted source for Rwanda news and information',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
