'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { testimonials } from '@/lib/site';
import { SectionHeading } from '@/components/site/section-heading';
import { cn } from '@/lib/utils';

export function TestimonialsSection() {
  const { lang, t } = useLang();
  const [index, setIndex] = useState(0);
  const [auto, setAuto] = useState(true);

  const next = useCallback(() => setIndex((p) => (p + 1) % testimonials.length), []);
  const prev = useCallback(() => setIndex((p) => (p - 1 + testimonials.length) % testimonials.length), []);

  useEffect(() => {
    if (!auto) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [auto, next]);

  const current = testimonials[index];

  return (
    <section className="py-20 md:py-28 relative bg-muted/20 overflow-hidden">
      <div className="absolute top-10 start-10 h-40 w-40 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-10 end-10 h-40 w-40 rounded-full bg-gold/5 blur-3xl" />

      <div className="container mx-auto px-4 relative">
        <SectionHeading
          eyebrow="آراء العملاء"
          eyebrowEn="Customer Reviews"
          title="ماذا يقول عملاؤنا عنّا"
          titleEn="What Our Customers Say"
          desc="آلاف العملاء الراضين في مكة المكرمة والمملكة يثقون بخدماتنا."
          descEn="Thousands of satisfied customers in Makkah and KSA trust our services."
        />

        <div className="max-w-3xl mx-auto">
          <div
            className="relative"
            onMouseEnter={() => setAuto(false)}
            onMouseLeave={() => setAuto(true)}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="glass-strong rounded-3xl p-8 md:p-12 shadow-luxury-lg"
              >
                <div className="flex items-center justify-between mb-6">
                  <Quote className="h-12 w-12 text-primary/20" />
                  <div className="flex gap-1">
                    {Array.from({ length: current.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-gold fill-gold" />
                    ))}
                  </div>
                </div>
                <p className={`text-lg md:text-xl leading-relaxed mb-8 ${lang === 'ar' ? 'font-arabic' : ''}`}>
                  "{t(current.ar, current.en)}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 rounded-full overflow-hidden ring-2 ring-primary/20">
                    <img src={current.portrait} alt={current.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <div className={`font-bold ${lang === 'ar' ? 'font-arabic' : ''}`}>
                      {t(current.name, current.nameEn)}
                    </div>
                    <div className={`text-sm text-muted-foreground ${lang === 'ar' ? 'font-arabic' : ''}`}>
                      {t(current.role.ar, current.role.en)}
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Controls */}
            <div className="flex items-center justify-center gap-3 mt-6">
              <button
                onClick={prev}
                className="h-11 w-11 rounded-full glass-strong flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Previous"
              >
                <ChevronRight className="h-5 w-5 rtl:hidden" />
                <ChevronLeft className="h-5 w-5 hidden rtl:block" />
              </button>
              <div className="flex gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setIndex(i)}
                    className={cn(
                      'h-2 rounded-full transition-all',
                      i === index ? 'w-8 bg-primary' : 'w-2 bg-muted-foreground/30'
                    )}
                  />
                ))}
              </div>
              <button
                onClick={next}
                className="h-11 w-11 rounded-full glass-strong flex items-center justify-center hover:bg-muted transition-colors"
                aria-label="Next"
              >
                <ChevronLeft className="h-5 w-5 rtl:hidden" />
                <ChevronRight className="h-5 w-5 hidden rtl:block" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
