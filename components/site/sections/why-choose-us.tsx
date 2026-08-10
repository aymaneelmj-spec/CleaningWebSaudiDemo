'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/lang-context';
import { whyChooseUs } from '@/lib/site';
import { Icon } from '@/components/site/icon';
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/site/section-reveal';
import { SectionHeading } from '@/components/site/section-heading';

export function WhyChooseUs() {
  const { lang, t } = useLang();
  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="لماذا نحن"
          eyebrowEn="Why Choose Us"
          title="لماذا نحن الخيار الأول في مكة المكرمة"
          titleEn="Why We Are the #1 Choice in Makkah"
          desc="نقدم خدمة تنظيف احترافية بأعلى المعايير العالمية مع التزام تام بالجودة والرضا."
          descEn="We deliver professional cleaning to the highest international standards with a full commitment to quality and satisfaction."
        />
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyChooseUs.map((item, i) => (
            <StaggerItem key={i}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className="group relative h-full rounded-3xl border border-border/50 bg-card p-7 overflow-hidden hover:shadow-luxury-lg transition-shadow"
              >
                <div className="absolute -top-12 -end-12 h-32 w-32 rounded-full bg-primary/5 group-hover:bg-primary/10 transition-colors" />
                <div className="relative">
                  <div className="h-14 w-14 rounded-2xl gradient-royal flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    <Icon name={item.icon} className="h-7 w-7 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold mb-2 ${lang === 'ar' ? 'font-arabic' : ''}`}>
                    {t(item.ar.title, item.en.title)}
                  </h3>
                  <p className={`text-muted-foreground ${lang === 'ar' ? 'font-arabic' : ''}`}>
                    {t(item.ar.desc, item.en.desc)}
                  </p>
                </div>
              </motion.div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
}
