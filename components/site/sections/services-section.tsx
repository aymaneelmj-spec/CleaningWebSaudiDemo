'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { services } from '@/lib/site';
import { Icon } from '@/components/site/icon';
import { StaggerContainer, StaggerItem } from '@/components/site/section-reveal';
import { SectionHeading } from '@/components/site/section-heading';
import { Button } from '@/components/ui/button';

export function ServicesSection() {
  const { lang, t } = useLang();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 md:py-28 relative bg-muted/20">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="خدماتنا"
          eyebrowEn="Our Services"
          title="خدمات تنظيف متكاملة لكل احتياجاتك"
          titleEn="Complete Cleaning Services for Every Need"
          desc="من تنظيف الكنب إلى التعقيم الشامل، نقدم حلولاً متكاملة لمنزلك ومكتبك."
          descEn="From sofa cleaning to full sanitization, we offer complete solutions for your home and office."
        />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
          {services.map((s, i) => (
            <StaggerItem key={s.id}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full rounded-3xl border border-border/50 bg-card overflow-hidden hover:shadow-luxury-lg transition-shadow"
              >
                {/* Image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src={s.img}
                    alt={t(s.ar.title, s.en.title)}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent" />
                  <div className="absolute top-3 start-3 h-11 w-11 rounded-xl glass-strong flex items-center justify-center">
                    <Icon name={s.icon} className="h-5 w-5 text-primary" />
                  </div>
                </div>
                {/* Content */}
                <div className="p-5">
                  <h3 className={`text-lg font-bold mb-2 ${lang === 'ar' ? 'font-arabic' : ''}`}>
                    {t(s.ar.title, s.en.title)}
                  </h3>
                  <p className={`text-sm text-muted-foreground line-clamp-2 mb-3 ${lang === 'ar' ? 'font-arabic' : ''}`}>
                    {t(s.ar.desc, s.en.desc)}
                  </p>
                  <Link href="/services" className={`inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all ${lang === 'ar' ? 'font-arabic' : ''}`}>
                    {t('اعرف المزيد', 'Learn more')}
                    <Arrow className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
        <div className="text-center mt-10">
          <Button asChild size="lg" className="rounded-full gradient-royal text-white border-0 shadow-luxury h-14 px-8">
            <Link href="/services">
              {t('جميع الخدمات', 'All Services')}
              <Arrow className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
