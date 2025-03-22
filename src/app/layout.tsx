import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';


const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Amdo Initiative | Building for Everyone',
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
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>
        {/* Only one Header component should be here */}
        {children}
      </body>
    </html>
  );
}