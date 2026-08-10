'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/lang-context';
import { process } from '@/lib/site';
import { Icon } from '@/components/site/icon';
import { StaggerContainer, StaggerItem } from '@/components/site/section-reveal';
import { SectionHeading } from '@/components/site/section-heading';

export function ProcessSection() {
  const { lang, t } = useLang();
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="طريقة العمل"
          eyebrowEn="Our Process"
          title="كيف نعمل في 5 خطوات بسيطة"
          titleEn="How We Work in 5 Simple Steps"
          desc="من الحجز إلى التسليم، نضمن تجربة سلسة واحترافية في كل خطوة."
          descEn="From booking to delivery, we guarantee a smooth and professional experience at every step."
        />
        <div className="relative">
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-12 start-0 end-0 h-0.5 bg-gradient-to-r from-transparent via-border to-transparent" />
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((p, i) => (
              <StaggerItem key={i}>
                <div className="relative text-center">
                  <motion.div
                    whileHover={{ scale: 1.1, y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="relative mx-auto h-24 w-24 rounded-3xl gradient-royal flex items-center justify-center shadow-luxury-lg z-10"
                  >
                    <Icon name={p.icon} className="h-10 w-10 text-white" />
                    <div className="absolute -top-2 -end-2 h-7 w-7 rounded-full gradient-gold flex items-center justify-center text-xs font-bold text-white shadow-luxury">
                      {i + 1}
                    </div>
                  </motion.div>
                  <h3 className={`text-lg font-bold mt-5 mb-2 ${lang === 'ar' ? 'font-arabic' : ''}`}>
                    {t(p.ar.title, p.en.title)}
                  </h3>
                  <p className={`text-sm text-muted-foreground ${lang === 'ar' ? 'font-arabic' : ''}`}>
                    {t(p.ar.desc, p.en.desc)}
                  </p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </div>
    </section>
  );
}
