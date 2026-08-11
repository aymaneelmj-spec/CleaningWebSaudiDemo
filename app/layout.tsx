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
  metadataBase: new URL(site.domain),
  title: {
    default: site.seoTitle.ar,
    template: `%s | ${site.shortName.ar}`,
  },
  description: site.seoDescription.ar,
  keywords: [...site.seoKeywords],
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    alternateLocale: 'en_US',
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
