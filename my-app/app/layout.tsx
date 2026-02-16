import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';

const outfit = Outfit({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Adu Yeboah Samuel | Full Stack Developer',
  description: 'Senior Software Developer specializing in React Native, Laravel, and Next.js. Architecting high-performance digital solutions.',
  keywords: ['Software Developer', 'React Native', 'Laravel', 'Next.js', 'Ghana Developer', 'Full Stack Developer', 'Adu Yeboah Samuel'],
  authors: [{ name: 'Adu Yeboah Samuel' }],
  openGraph: {
    title: 'Adu Yeboah Samuel | Full Stack Developer',
    description: 'Architecting high-performance mobile and web solutions.',
    url: 'https://aduyeboah.com',
    siteName: 'Adu Yeboah Samuel Portfolio',
    images: [
      {
        url: '/images/profile.jpeg',
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Adu Yeboah Samuel | Full Stack Developer',
    description: 'Architecting high-performance mobile and web solutions.',
    images: ['/images/profile.jpeg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${outfit.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}