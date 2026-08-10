import './globals.css';
import type { Metadata } from 'next';
import { Inter, Tajawal } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { LangProvider } from '@/lib/lang-context';
import { Navbar } from '@/components/site/navbar';
import { Footer } from '@/components/site/footer';
import { FloatingWhatsApp } from '@/components/site/floating-whatsapp';
import { CookieBanner } from '@/components/site/cookie-banner';
import { LoadingScreen } from '@/components/site/loading-screen';
import { site } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const tajawal = Tajawal({ subsets: ['arabic'], weight: ['400', '500', '700', '800'], variable: '--font-arabic', display: 'swap' });

export const metadata: Metadata = {
<<<<<<< HEAD
  metadataBase: new URL('https://abrajbaitlaundry.sa'),
  title: {
    default: 'مغسلة أبراج البيت | خدمات الغسيل والتنظيف في مكة المكرمة',
    template: '%s | مغسلة أبراج البيت',
  },
  description:
    'الشركة الأولى لخدمات الغسيل والتنظيف في مكة المكرمة والمملكة العربية السعودية. خدمة على مدار الساعة. اتصل الآن: 966592052728+',
  keywords: [
    'مغسلة مكة',
    'غسيل ملابس مكة',
    'تنظيف كنب مكة',
    'تنظيف سجاد مكة',
    'خدمات غسيل مكة',
    'laundry Makkah',
    'dry cleaning Makkah',
    'carpet cleaning Makkah',
  ],
=======
  metadataBase: new URL(site.domain),
  title: {
    default: site.seoTitle.ar,
    template: `%s | ${site.shortName.ar}`,
  },
  description: site.seoDescription.ar,
  keywords: [...site.seoKeywords],
>>>>>>> 10f7d35 (Initial commit)
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    alternateLocale: 'en_US',
<<<<<<< HEAD
    url: 'https://abrajbaitlaundry.sa',
    siteName: 'مغسلة أبراج البيت',
    title: 'مغسلة أبراج البيت | خدمات الغسيل في مكة المكرمة',
    description: 'الشركة الأولى لخدمات الغسيل والتنظيف في مكة المكرمة والمملكة العربية السعودية',
    images: [{ url: '/og.png', width: 1200, height: 630, alt: 'مغسلة أبراج البيت' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'مغسلة أبراج البيت',
    description: 'الشركة الأولى لخدمات الغسيل في مكة المكرمة',
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: 'https://abrajbaitlaundry.sa' },
=======
    url: site.domain,
    siteName: site.name.ar,
    title: site.seoTitle.ar,
    description: site.seoDescription.ar,
    images: [{ url: '/og.png', width: 1200, height: 630, alt: site.shortName.ar }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.seoTitle.ar,
    description: site.seoDescription.ar,
    images: ['/og.png'],
  },
  robots: { index: true, follow: true },
  alternates: { canonical: site.domain },
>>>>>>> 10f7d35 (Initial commit)
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/favicon.svg" />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                var theme = localStorage.getItem('theme');
                var systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                if (theme === 'dark' || (!theme && systemDark)) document.documentElement.classList.add('dark');
                var lang = localStorage.getItem('lang');
                if (lang === 'en') { document.documentElement.lang = 'en'; document.documentElement.dir = 'ltr'; }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className={`${inter.variable} ${tajawal.variable} font-sans`}>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
          <LangProvider>
            <LoadingScreen />
            <Navbar />
            <main className="min-h-screen">{children}</main>
            <Footer />
            <FloatingWhatsApp />
            <CookieBanner />
          </LangProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
