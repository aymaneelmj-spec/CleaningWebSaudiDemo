'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/lang-context';

interface SectionHeadingProps {
  eyebrow?: string;
  eyebrowEn?: string;
  title: string;
  titleEn: string;
  desc?: string;
  descEn?: string;
  center?: boolean;
}

export function SectionHeading({ eyebrow, eyebrowEn, title, titleEn, desc, descEn, center = true }: SectionHeadingProps) {
  const { lang, t } = useLang();
  return (
    <div className={`max-w-2xl ${center ? 'mx-auto text-center' : ''} mb-12`}>
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className={`inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4 ${lang === 'ar' ? 'font-arabic' : ''}`}
        >
          {t(eyebrow, eyebrowEn || '')}
        </motion.div>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight ${lang === 'ar' ? 'font-arabic leading-snug' : 'leading-tight'}`}
      >
        {t(title, titleEn)}
      </motion.h2>
      {desc && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-muted-foreground text-lg ${lang === 'ar' ? 'font-arabic' : ''} ${center ? 'mx-auto' : ''}`}
        >
          {t(desc, descEn || '')}
        </motion.p>
      )}
    </div>
  );
}
