import Hero from '../sections/Hero';
import About from '../sections/About';
import Projects from '../sections/Projects';
import Testimonials from '../sections/Testimonials';
import Contact from '../sections/Contact';
import Footer from '../components/Footer';
import Script from 'next/script';

// JSON-LD yapılandırılmış veri
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Onur Keskin",
  "url": "https://onurapps.com",
  "image": "https://onurapps.com/images/og-image.jpg",
  "sameAs": [
    "https://twitter.com/onurapps",
    "https://github.com/onurapps",
    "https://linkedin.com/in/onurapps",
    "https://instagram.com/onurapps"
  ],
  "jobTitle": "Web & Mobil Geliştirici",
  "worksFor": {
    "@type": "Organization",
    "name": "Freelance"
  },
  "description": "Modern web ve mobil uygulama geliştirme hizmetleri sunan profesyonel yazılım geliştiricisi",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Zonguldak",
    "addressCountry": "TR"
  },
  "email": "onurdevs@gmail.com"
};

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <About />
      <Projects />
      <Testimonials />
      <Contact />
      <Footer />
      
      {/* JSON-LD yapılandırılmış veri */}
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
    </main>
  );
}
