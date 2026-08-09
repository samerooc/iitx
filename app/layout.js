import './globals.css';
import { AppProvider } from '@/context/AppContext';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export const metadata = {
  title: 'IIT Rungta Student Union | Official Website & Notice Board',
  description: 'Official digital platform of IIT Rungta Student Union featuring Notice Board, Executive Elections 2026, Student Support, Resource Library, and Digital Membership Cards.',
  keywords: ['IIT Rungta', 'Student Union', 'Elections', 'Notice Board', 'Campus Portal'],
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Outfit:wght@500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-surface dark:bg-obsidian text-on-surface dark:text-gray-100 min-h-screen flex flex-col selection:bg-neon-saffron selection:text-white transition-colors duration-300">
        <AppProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
