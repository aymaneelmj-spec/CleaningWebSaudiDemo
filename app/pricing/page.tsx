'use client';

import { motion } from 'framer-motion';
import { Check, Star, Sparkles } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { pricing, whatsappLink } from '@/lib/site';
import { PageHeader } from '@/components/site/page-header';
import { StaggerContainer, StaggerItem } from '@/components/site/section-reveal';
import { Button } from '@/components/ui/button';
import { CtaBanner } from '@/components/site/sections/cta-banner';
import { cn } from '@/lib/utils';

export default function PricingPage() {
  const { lang, t } = useLang();
  return (
    <>
      <PageHeader
        eyebrow="الأسعار"
        eyebrowEn="Pricing"
        title="باقات تناسب كل احتياجاتك"
        titleEn="Packages for Every Need"
        desc="أسعار شفافة بدون رسوم خفية. اختر الباقة المناسبة لك واحجز عبر واتساب."
        descEn="Transparent pricing with no hidden fees. Choose the package that suits you and book via WhatsApp."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricing.map((p) => (
              <StaggerItem key={p.name.en}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className={cn(
                    'relative h-full rounded-3xl border p-8 overflow-hidden',
                    p.popular ? 'border-primary shadow-luxury-lg gradient-royal text-white' : 'border-border/50 bg-card'
                  )}
                >
                  {p.popular && (
                    <div className="absolute top-0 inset-x-0 flex justify-center">
                      <div className="rounded-b-xl gradient-gold px-4 py-1 text-xs font-bold text-white flex items-center gap-1">
                        <Star className="h-3 w-3 fill-white" />
                        {t('الأكثر طلباً', 'Most Popular')}
                      </div>
                    </div>
                  )}
                  <div className={cn('mt-6', p.popular && 'text-white')}>
                    <h3 className={`text-2xl font-bold mb-2 ${lang === 'ar' ? 'font-arabic' : ''}`}>{t(p.name.ar, p.name.en)}</h3>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-4xl font-bold">{p.price}</span>
                      <span className={cn('text-lg', p.popular ? 'text-white/70' : 'text-muted-foreground')}>{t('ريال', 'SAR')}</span>
                    </div>
                    <p className={`text-sm ${p.popular ? 'text-white/70' : 'text-muted-foreground'} ${lang === 'ar' ? 'font-arabic' : ''}`}>
                      {t('يبدأ من', 'Starting from')}
                    </p>
                  </div>
                  <ul className="space-y-3 mt-6">
                    {p.features[lang].map((f, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <div className={cn('h-5 w-5 rounded-full flex items-center justify-center shrink-0 mt-0.5', p.popular ? 'bg-white/20' : 'bg-primary/10')}>
                          <Check className={cn('h-3 w-3', p.popular ? 'text-white' : 'text-primary')} />
                        </div>
                        <span className={`text-sm ${p.popular ? 'text-white/90' : 'text-muted-foreground'} ${lang === 'ar' ? 'font-arabic' : ''}`}>{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    asChild
                    className={cn('w-full mt-8 rounded-xl h-12', p.popular ? 'bg-white text-primary hover:bg-white/90 border-0' : 'gradient-royal text-white border-0')}
                  >
                    <a href={whatsappLink(t('مرحباً، أريد حجز ', 'Hello, I want to book ') + t(p.name.ar, p.name.en))} target="_blank" rel="noopener noreferrer">
                      <Sparkles className="h-4 w-4" />
                      {t('احجز الآن', 'Book Now')}
                    </a>
                  </Button>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          <div className={`text-center mt-12 text-muted-foreground ${lang === 'ar' ? 'font-arabic' : ''}`}>
            <p>{t('جميع الأسعار قابلة للتفاوض حسب حجم العمل. اتصل للحصول على عرض سعر مخصص.', 'All prices are negotiable based on scope of work. Call for a custom quote.')}</p>
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
