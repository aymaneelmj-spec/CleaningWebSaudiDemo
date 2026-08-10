'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home, MessageCircle } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { whatsappLink } from '@/lib/site';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  const { lang, t } = useLang();
  return (
    <section className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden">
      <div className="absolute top-1/4 start-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 end-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl animate-float" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-[120px] md:text-[180px] font-bold gradient-text-royal leading-none">404</h1>
          <h2 className={`text-2xl md:text-3xl font-bold mt-4 mb-3 ${lang === 'ar' ? 'font-arabic' : ''}`}>
            {t('الصفحة غير موجودة', 'Page Not Found')}
          </h2>
          <p className={`text-muted-foreground text-lg max-w-md mx-auto mb-8 ${lang === 'ar' ? 'font-arabic' : ''}`}>
            {t('عذراً، الصفحة التي تبحث عنها غير موجودة أو تم نقلها.', 'Sorry, the page you are looking for does not exist or has been moved.')}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <Button asChild size="lg" className="rounded-full gradient-royal text-white border-0 h-14 px-8">
              <Link href="/">
                <Home className="h-5 w-5" />
                {t('العودة للرئيسية', 'Back Home')}
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                {t('تواصل واتساب', 'WhatsApp')}
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
