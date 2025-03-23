import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

// Load the Inter font with Latin subset
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amdo Foundation | Building for Everyone',
  description: 'Empowering our community by developing its people, creating opportunities, and building lasting solutions that uplift every individual.',
  icons: {
    icon: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}