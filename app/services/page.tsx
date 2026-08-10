'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { services, whatsappLink } from '@/lib/site';
import { Icon } from '@/components/site/icon';
import { PageHeader } from '@/components/site/page-header';
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/site/section-reveal';
import { Button } from '@/components/ui/button';
import { CtaBanner } from '@/components/site/sections/cta-banner';

export default function ServicesPage() {
  const { lang, t } = useLang();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <>
      <PageHeader
        eyebrow="خدماتنا"
        eyebrowEn="Our Services"
        title="خدمات تنظيف احترافية متكاملة"
        titleEn="Professional Integrated Cleaning Services"
        desc="نقدم أكثر من 12 خدمة تنظيف متخصصة لمنزلك ومكتبك بأحدث المعدات وأفضل المواد."
        descEn="We offer over 12 specialized cleaning services for your home and office with the latest equipment and best materials."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <StaggerItem key={s.id}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                  className="group h-full rounded-3xl border border-border/50 bg-card overflow-hidden hover:shadow-luxury-lg transition-shadow"
                >
                  <div className="relative h-52 overflow-hidden">
                    <img src={s.img} alt={t(s.ar.title, s.en.title)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute inset-0 bg-gradient-to-t from-card via-card/30 to-transparent" />
                    <div className="absolute top-4 start-4 h-12 w-12 rounded-xl glass-strong flex items-center justify-center">
                      <Icon name={s.icon} className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-xl font-bold mb-3 ${lang === 'ar' ? 'font-arabic' : ''}`}>{t(s.ar.title, s.en.title)}</h3>
                    <p className={`text-muted-foreground mb-4 leading-relaxed ${lang === 'ar' ? 'font-arabic' : ''}`}>{t(s.ar.desc, s.en.desc)}</p>
                    <div className="flex items-center gap-2 mb-4">
                      <CheckCircle2 className="h-4 w-4 text-green-500 shrink-0" />
                      <span className={`text-sm text-muted-foreground ${lang === 'ar' ? 'font-arabic' : ''}`}>{t('ضمان الرضا التام', 'Full satisfaction guarantee')}</span>
                    </div>
                    <Button asChild size="sm" className="w-full rounded-xl gradient-royal text-white border-0">
                      <a href={whatsappLink(t('مرحباً، أريد حجز خدمة: ', 'Hello, I want to book: ') + t(s.ar.title, s.en.title))} target="_blank" rel="noopener noreferrer">
                        {t('احجز الآن', 'Book Now')}
                        <Arrow className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
