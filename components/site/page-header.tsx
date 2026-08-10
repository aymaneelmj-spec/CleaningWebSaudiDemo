'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/lang-context';

interface PageHeaderProps {
  eyebrow?: string;
  eyebrowEn?: string;
  title: string;
  titleEn: string;
  desc?: string;
  descEn?: string;
}

export function PageHeader({ eyebrow, eyebrowEn, title, titleEn, desc, descEn }: PageHeaderProps) {
  const { lang, t } = useLang();
  return (
    <section className="relative pt-32 pb-16 md:pt-40 md:pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-muted/40 to-transparent" />
      <div className="absolute top-20 start-1/4 h-72 w-72 rounded-full bg-primary/10 blur-3xl animate-float-slow" />
      <div className="absolute top-10 end-1/4 h-72 w-72 rounded-full bg-gold/10 blur-3xl animate-float" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        {eyebrow && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className={`inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4 ${lang === 'ar' ? 'font-arabic' : ''}`}
          >
            {t(eyebrow, eyebrowEn || '')}
          </motion.div>
        )}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className={`text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 ${lang === 'ar' ? 'font-arabic leading-snug' : 'leading-tight'}`}
        >
          {t(title, titleEn)}
        </motion.h1>
        {desc && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className={`text-lg text-muted-foreground max-w-2xl mx-auto ${lang === 'ar' ? 'font-arabic' : ''}`}
          >
            {t(desc, descEn || '')}
          </motion.p>
        )}
      </div>
    </section>
  );
}
