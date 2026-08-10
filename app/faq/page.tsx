'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { faqs, whatsappLink } from '@/lib/site';
import { PageHeader } from '@/components/site/page-header';
import { SectionReveal } from '@/components/site/section-reveal';
import { Button } from '@/components/ui/button';
import { CtaBanner } from '@/components/site/sections/cta-banner';
import { cn } from '@/lib/utils';

export default function FaqPage() {
  const { lang, t } = useLang();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <>
      <PageHeader
        eyebrow="الأسئلة الشائعة"
        eyebrowEn="FAQ"
        title="إجابات على أسئلتك"
        titleEn="Answers to Your Questions"
        desc="كل ما تحتاج معرفته عن خدماتنا. لم تجد إجابتك؟ تواصل معنا."
        descEn="Everything you need to know about our services. Didnt find your answer? Contact us."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = open === i;
              return (
                <SectionReveal key={i} delay={i * 0.05}>
                  <div className={cn('rounded-2xl border overflow-hidden transition-colors', isOpen ? 'border-primary/30 bg-card shadow-luxury' : 'border-border/50 bg-card/50 hover:bg-card')}>
                    <button onClick={() => setOpen(isOpen ? null : i)} className="flex items-center justify-between w-full p-5 text-start">
                      <span className={`text-base md:text-lg font-semibold ${lang === 'ar' ? 'font-arabic' : ''}`}>{t(faq.ar.q, faq.en.q)}</span>
                      <div className={cn('h-8 w-8 rounded-full flex items-center justify-center shrink-0 transition-colors', isOpen ? 'gradient-royal text-white' : 'bg-muted')}>
                        {isOpen ? <Minus className="h-4 w-4" /> : <Plus className="h-4 w-4" />}
                      </div>
                    </button>
                    <AnimatePresence>
                      {isOpen && (
                        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3 }} className="overflow-hidden">
                          <p className={`px-5 pb-5 text-muted-foreground leading-relaxed ${lang === 'ar' ? 'font-arabic' : ''}`}>{t(faq.ar.a, faq.en.a)}</p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </SectionReveal>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className={`text-muted-foreground mb-4 ${lang === 'ar' ? 'font-arabic' : ''}`}>{t('لديك سؤال آخر؟', 'Have another question?')}</p>
            <Button asChild size="lg" className="rounded-full gradient-royal text-white border-0 h-14 px-8">
              <a href={whatsappLink(t('مرحباً، لدي سؤال', 'Hello, I have a question'))} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                {t('اسأل على واتساب', 'Ask on WhatsApp')}
              </a>
            </Button>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
