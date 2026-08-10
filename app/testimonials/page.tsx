'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { testimonials } from '@/lib/site';
import { PageHeader } from '@/components/site/page-header';
import { StaggerContainer, StaggerItem } from '@/components/site/section-reveal';
import { CtaBanner } from '@/components/site/sections/cta-banner';

export default function TestimonialsPage() {
  const { lang, t } = useLang();
  return (
    <>
      <PageHeader
        eyebrow="آراء العملاء"
        eyebrowEn="Testimonials"
        title="آلاف العملاء الراضين"
        titleEn="Thousands of Satisfied Customers"
        desc="نفخر بثقة عملائنا. اقرأ ما يقولون عن خدماتنا."
        descEn="We take pride in our customers trust. Read what they say about our services."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Rating summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto text-center mb-16"
          >
            <div className="flex justify-center gap-1 mb-3">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="h-8 w-8 text-gold fill-gold" />
              ))}
            </div>
            <div className="text-5xl font-bold gradient-text-royal">4.9/5</div>
            <p className={`text-muted-foreground mt-2 ${lang === 'ar' ? 'font-arabic' : ''}`}>
              {t('بناءً على أكثر من 5000 تقييم', 'Based on over 5,000 reviews')}
            </p>
          </motion.div>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto" stagger={0.08}>
            {testimonials.map((tt, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ y: -6 }} className="h-full rounded-3xl border border-border/50 bg-card p-7 hover:shadow-luxury-lg transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <Quote className="h-10 w-10 text-primary/20" />
                    <div className="flex gap-0.5">
                      {Array.from({ length: tt.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 text-gold fill-gold" />
                      ))}
                    </div>
                  </div>
                  <p className={`text-muted-foreground leading-relaxed mb-6 ${lang === 'ar' ? 'font-arabic' : ''}`}>
                    "{t(tt.ar, tt.en)}"
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="relative h-12 w-12 rounded-full overflow-hidden ring-2 ring-primary/20">
                      <img src={tt.portrait} alt={tt.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <div className={`font-bold ${lang === 'ar' ? 'font-arabic' : ''}`}>{t(tt.name, tt.nameEn)}</div>
                      <div className={`text-sm text-muted-foreground ${lang === 'ar' ? 'font-arabic' : ''}`}>{t(tt.role.ar, tt.role.en)}</div>
                    </div>
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
