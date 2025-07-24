import './globals.css';
// import { Inter } from 'next/font/google';
import { Montserrat } from 'next/font/google';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

// const Montserrat = Montserrat({ subsets: ['latin'] });
const montserrat = Montserrat({ subsets: ['latin'], weight: ['400', '500', '600', '700'] });


export const metadata = {
  title: 'HurlaInterio - Premium Custom Interior Design',
  description: 'Discover exquisite luxury furniture and custom interior design solutions. Premium collections, bespoke craftsmanship, and personalized design services.',
  keywords: 'hurlainterio, custom interior design, premium furniture, bespoke furniture, interior design studio',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${montserrat.className} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}