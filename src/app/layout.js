import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

// Inter font for body text
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

// Playfair Display for headings
const playfair = Playfair_Display({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-playfair',
});

export const metadata = {
  title: 'OnurApps | Web ve mobil uygulama hizmetleri',
  description: 'Modern web ve mobil uygulama geliştirme hizmetleri sunan OnurApps\'in resmi web sitesi. Projelerimiz, hizmetlerimiz ve iletişim bilgilerimize ulaşabilirsiniz.',
  keywords: 'OnurApps, web geliştirme, mobil uygulama, yazılım geliştirme, frontend, React, Next.js, portfolyo, Türkiye, freelancer',
  authors: [{ name: 'OnurApps' }],
  creator: 'OnurApps',
  publisher: 'OnurApps',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  metadataBase: new URL('https://onurapps.com'),
  alternates: {
    canonical: '/',
    languages: {
      'tr-TR': '/',
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/logo.png', sizes: '32x32' }
    ],
    shortcut: '/logo.png',
    apple: '/logo.png',
    other: {
      rel: 'apple-touch-icon',
      url: '/logo.png',
    },
  },
  openGraph: {
    title: 'OnurApps | Web ve mobil uygulama hizmetleri',
    description: 'Modern web ve mobil uygulama geliştirme hizmetleri sunan OnurApps\'in resmi web sitesi.',
    url: 'https://onurapps.com',
    siteName: 'OnurApps',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'OnurApps - Web & Mobil Geliştirme Hizmetleri',
      },
    ],
    locale: 'tr_TR',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnurApps | Web ve mobil uygulama hizmetleri',
    description: 'Modern web ve mobil uygulama geliştirme hizmetleri sunan OnurApps\'in resmi web sitesi.',
    creator: '@onurapps',
    images: ['/images/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/logo.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} antialiased min-h-screen flex flex-col bg-[#080c14] text-white font-sans`}
      >
        {children}

        {/* Global background decorations */}
        <div className="fixed inset-0 pointer-events-none z-[-1] opacity-30">
          <div className="absolute top-[5%] right-[10%] w-[300px] h-[300px] rounded-full bg-blue-500/5 blur-[100px]"></div>
          <div className="absolute bottom-[15%] left-[5%] w-[250px] h-[250px] rounded-full bg-green-500/10 blur-[80px]"></div>
        </div>
      </body>
    </html>
  );
}
