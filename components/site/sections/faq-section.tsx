'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { faqs } from '@/lib/site';
import { SectionHeading } from '@/components/site/section-heading';
import { cn } from '@/lib/utils';

export function FaqSection() {
  const { lang, t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="الأسئلة الشائعة"
          eyebrowEn="FAQ"
          title="إجابات على أكثر الأسئلة شيوعاً"
          titleEn="Answers to the Most Common Questions"
          desc="كل ما تحتاج معرفته عن خدماتنا قبل الحجز."
          descEn="Everything you need to know about our services before booking."
        />
        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className={cn(
                  'rounded-2xl border border-border/50 overflow-hidden transition-colors',
                  isOpen ? 'bg-card shadow-luxury' : 'bg-card/50 hover:bg-card'
                )}
              >
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="flex items-center justify-between w-full p-5 text-start"
                >
                  <span className={`text-base md:text-lg font-semibold ${lang === 'ar' ? 'font-arabic' : ''}`}>
                    {t(faq.ar.q, faq.en.q)}
                  </span>
                  <div className={cn('h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-colors', isOpen ? 'gradient-royal text-white' : 'bg-muted')}>
                    {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className={`px-5 pb-5 text-muted-foreground leading-relaxed ${lang === 'ar' ? 'font-arabic' : ''}`}>
                        {t(faq.ar.a, faq.en.a)}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
