'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/lang-context';
import { images } from '@/lib/site';
import { SectionHeading } from '@/components/site/section-heading';
import { BeforeAfterSlider } from '@/components/site/before-after-slider';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { ArrowLeft, ArrowRight } from 'lucide-react';

export function BeforeAfterSection() {
  const { lang, t } = useLang();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="قبل وبعد"
          eyebrowEn="Before & After"
          title="شاهد الفرق بنفسك"
          titleEn="See the Difference for Yourself"
          desc="اسحب الشريط لمقارنة الصور قبل وبعد التنظيف. نتائج تتحدث عن نفسها."
          descEn="Drag the slider to compare before and after cleaning. Results that speak for themselves."
        />
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="max-w-4xl mx-auto"
        >
          <BeforeAfterSlider
            beforeImage={images.sofaGrey}
            afterImage={images.whiteSofa}
          />
        </motion.div>
        <div className="text-center mt-10">
          <Button asChild size="lg" variant="outline" className="rounded-full h-14 px-8">
            <Link href="/before-after">
              {t('شاهد المزيد من النتائج', 'See More Results')}
              <Arrow className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
