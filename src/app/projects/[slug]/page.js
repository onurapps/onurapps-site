import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

// Proje verileri
const projectsData = {
  'kronos': {
    title: 'Kronos',
    subtitle: 'Tarihi olayları kronolojik sıraya koyma oyunu',
    description: `Kronos, kullanıcıların tarihi olayları doğru kronolojik sıraya yerleştirerek puan kazandığı eğitici bir mobil oyun uygulamasıdır. 
    
    Farklı zorluk seviyelerinde binlerce tarihi olay içeren bu uygulama, tarih bilgisini eğlenceli bir şekilde test etmek ve geliştirmek isteyenler için tasarlanmıştır.`,
    features: [
      'Binlerce tarihi olay içeren geniş veritabanı',
      'Farklı zorluk seviyeleri (Kolay, Orta, Zor)',
      'Günlük zorluklar ve ödüller',
      'Arkadaşlarla rekabet etme ve liderlik tablosu',
      'Offline oyun desteği',
      'Tarihi olaylar hakkında bilgi edinme'
    ],
    techStack: ['Flutter', 'Dart', 'Supabase', 'GetX', 'Firebase Analytics'],
    images: [
      '/projects/kronos/screenshot-1.png',
      '/projects/kronos/screenshot-2.png',
      '/projects/kronos/screenshot-3.png'
    ],
    primaryImage: '/projects/kronos.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.onurdevs.kronos',
    challenges: 'Kronos projesinde karşılaştığım en büyük zorluk, geniş tarihi veri setinin yönetilmesi ve bu verilerin zorluk seviyelerine göre ayarlanması oldu. Ayrıca kullanıcı deneyiminin sezgisel ve eğlenceli olmasını sağlamak için UI/UX tasarımına özel önem verdim.',
    solutions: 'Veri yönetimi için Supabase kullanarak esnek ve ölçeklenebilir bir backend çözümü geliştirdim. GetX state management kütüphanesi ile performanslı ve reactive bir uygulama akışı sağladım. Kullanıcı feedback\'lerine dayalı iteratif iyileştirmeler yaparak oyun deneyimini sürekli geliştirdim.',
    releasedDate: 'Ocak 2023'
  },
  'nefesal': {
    title: 'NefesAl',
    subtitle: 'Sigarayı bırakmaya yardımcı mobil uygulama',
    description: `NefesAl, sigara bağımlılığından kurtulmak isteyenler için tasarlanmış, kullanıcı dostu bir mobil uygulamadır. 
    
    Uygulama, sigarayı bırakma sürecini takip eder, sağlık iyileşmelerini görselleştirir ve motivasyon sağlayarak kullanıcılara destek olur.`,
    features: [
      'Sigarasız geçen süre takibi',
      'Tasarruf edilen para hesaplayıcısı',
      'Sağlık iyileşme takvimi',
      'Günlük motivasyon bildirimleri',
      'Arzu tetikleyicileri yönetme araçları',
      'Başarı rozetleri ve ödüller',
      'İstatistikler ve ilerleme grafikleri'
    ],
    techStack: ['Flutter', 'Dart', 'Firebase', 'Provider', 'Cloud Functions'],
    images: [
      '/projects/nefesal/screenshot-1.png',
      '/projects/nefesal/screenshot-2.png',
      '/projects/nefesal/screenshot-3.png'
    ],
    primaryImage: '/projects/nefesal.png',
    playStoreUrl: 'https://play.google.com/store/apps/details?id=com.onurdevs.nefesai',
    challenges: 'NefesAl projesinin en zorlu kısmı, kullanıcıların motivasyonunu sürekli yüksek tutacak bir sistem tasarlamaktı. Ayrıca sağlık verilerinin doğru hesaplanması ve sunulması için detaylı araştırma yapmam gerekti.',
    solutions: 'Kullanıcı motivasyonunu artırmak için davranışsal psikoloji ilkelerinden yararlanarak ödül sistemleri ve görsel geri bildirimler tasarladım. Firebase ile gerçek zamanlı kullanıcı verileri takibi sağladım ve Provider pattern kullanarak uygulama state\'ini etkin bir şekilde yönettim.',
    releasedDate: 'Mayıs 2023'
  }
};

export function generateMetadata({ params }) {
  const { slug } = params;
  const project = projectsData[slug];
  
  if (!project) {
    return {
      title: 'Proje Bulunamadı - OnurApps',
    };
  }
  
  return {
    title: `${project.title} - OnurApps Projesi`,
    description: project.description.substring(0, 160),
    openGraph: {
      title: `${project.title} - OnurApps Projesi`,
      description: project.description.substring(0, 160),
      images: [{ url: project.primaryImage }],
    },
  };
}

export default function ProjectDetails({ params }) {
  const { slug } = params;
  const project = projectsData[slug];
  
  if (!project) {
    notFound();
  }
  
  return (
    <main className="bg-[#080c14] text-white min-h-screen pt-28 pb-20">
      {/* Project Hero Section */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-[#1ae885]/10 to-transparent opacity-30 z-0"></div>
        <div className="container mx-auto px-6 relative z-10">
          <Link href="/#projects" className="inline-flex items-center text-[#1ae885] mb-10 hover:underline transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Tüm Projelere Dön
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold mb-4">{project.title}</h1>
              <p className="text-xl text-gray-400 mb-6">{project.subtitle}</p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.techStack.map((tech, index) => (
                  <span key={index} className="px-3 py-1 rounded-full bg-[#1ae885]/10 border border-[#1ae885]/20 text-[#1ae885] text-sm">
                    {tech}
                  </span>
                ))}
              </div>
              
              <a 
                href={project.playStoreUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center bg-gradient-to-r from-[#1ae885] to-[#0ea5e9] text-[#080c14] font-bold px-6 py-3 rounded-lg hover:shadow-[0_0_20px_rgba(26,232,133,0.4)] transition-all duration-300"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 mr-2">
                  <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.433-.29.7 0 .267.109.519.29.7.181.181.433.29.7.29.267 0 .519-.109.7-.29L15.567 12 5.009 1.424c-.181-.181-.434-.29-.7-.29-.267 0-.519.109-.7.29-.181.181-.29.434-.29.7 0 .267.109.519.29.7z"/>
                </svg>
                Google Play'de Görüntüle
              </a>
            </div>
            
            <div className="relative">
              {/* Flair Effects */}
              <div className="absolute -inset-4 bg-gradient-to-r from-[#1ae885]/20 to-[#0ea5e9]/20 rounded-xl blur-xl opacity-50 -z-10"></div>
              
              <div className="bg-gradient-to-bl from-[#162435] via-[#0c1520] to-[#0a0f18] shadow-[0_0_40px_rgba(26,232,133,0.15)] rounded-xl border border-[#1ae885]/10 p-1 relative overflow-hidden">
                <div className="relative aspect-[9/16] w-full max-w-sm mx-auto overflow-hidden rounded-lg">
                  <Image
                    src={project.primaryImage}
                    alt={project.title}
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
                
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-[#1ae885]/5 to-transparent animate-[shine_3s_ease-in-out_infinite_alternate]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Project Details Section */}
      <div className="container mx-auto px-6 mt-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold mb-6 text-white">Proje Hakkında</h2>
            
            <div className="prose prose-lg prose-invert max-w-none mb-10">
              {project.description.split('\n\n').map((paragraph, idx) => (
                <p key={idx} className="text-gray-300 mb-4 leading-relaxed">{paragraph}</p>
              ))}
            </div>
            
            <h3 className="text-2xl font-bold mb-4">Özellikler</h3>
            <ul className="mb-10 space-y-2">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-start">
                  <svg className="h-6 w-6 text-[#1ae885] mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-gray-300">{feature}</span>
                </li>
              ))}
            </ul>
            
            <h3 className="text-2xl font-bold mb-4">Karşılaşılan Zorluklar</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">{project.challenges}</p>
            
            <h3 className="text-2xl font-bold mb-4">Çözümler</h3>
            <p className="text-gray-300 mb-8 leading-relaxed">{project.solutions}</p>
          </div>
          
          <div>
            <div className="bg-gradient-to-bl from-[#162435] via-[#0c1520] to-[#0a0f18] shadow-[0_0_30px_rgba(26,232,133,0.1)] rounded-xl border border-[#1ae885]/10 p-6">
              <h3 className="text-xl font-bold mb-6 border-b border-gray-800 pb-4">Proje Detayları</h3>
              
              <div className="space-y-4">
                <div>
                  <h4 className="text-gray-400 text-sm">Proje Adı</h4>
                  <p className="font-medium">{project.title}</p>
                </div>
                
                <div>
                  <h4 className="text-gray-400 text-sm">Teknoloji Stack</h4>
                  <p className="font-medium">{project.techStack.join(', ')}</p>
                </div>
                
                <div>
                  <h4 className="text-gray-400 text-sm">Yayın Tarihi</h4>
                  <p className="font-medium">{project.releasedDate}</p>
                </div>
                
                <div>
                  <h4 className="text-gray-400 text-sm">Platform</h4>
                  <p className="font-medium">Android, iOS</p>
                </div>
              </div>
              
              <div className="mt-8">
                <a 
                  href={project.playStoreUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex justify-center items-center w-full bg-[#1ae885]/10 hover:bg-[#1ae885]/20 text-[#1ae885] font-medium py-3 rounded-lg transition-all duration-300"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                    <path d="M3.609 1.814L13.792 12 3.609 22.186c-.181.181-.29.433-.29.7 0 .267.109.519.29.7.181.181.433.29.7.29.267 0 .519-.109.7-.29L15.567 12 5.009 1.424c-.181-.181-.434-.29-.7-.29-.267 0-.519.109-.7.29-.181.181-.29.434-.29.7 0 .267.109.519.29.7z"/>
                  </svg>
                  Uygulamayı İndir
                </a>
              </div>
              
              <div className="mt-8 pt-6 border-t border-gray-800">
                <h4 className="text-xl font-bold mb-4">İletişime Geç</h4>
                <p className="text-gray-400 mb-4">Bu proje hakkında detaylı bilgi almak veya benzer bir proje geliştirmek için iletişime geçin.</p>
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center text-[#1ae885] hover:underline"
                >
                  İletişim Formu
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
} 