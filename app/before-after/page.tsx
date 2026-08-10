'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/lang-context';
import { images } from '@/lib/site';
import { PageHeader } from '@/components/site/page-header';
import { SectionReveal } from '@/components/site/section-reveal';
import { BeforeAfterSlider } from '@/components/site/before-after-slider';
import { CtaBanner } from '@/components/site/sections/cta-banner';

const comparisons = [
  { before: images.sofaGrey, after: images.whiteSofa, labelAr: 'تنظيف كنب أبيض', labelEn: 'White Sofa Cleaning' },
  { before: images.cleaning[3], after: images.livingRooms[0], labelAr: 'تنظيف غرفة المعيشة', labelEn: 'Living Room Cleaning' },
  { before: images.carpet[1], after: images.livingRooms[2], labelAr: 'تنظيف السجاد', labelEn: 'Carpet Cleaning' },
  { before: images.cleaning[4], after: images.office[0], labelAr: 'تنظيف المكتب', labelEn: 'Office Cleaning' },
];

export default function BeforeAfterPage() {
  const { lang, t } = useLang();
  return (
    <>
      <PageHeader
        eyebrow="قبل وبعد"
        eyebrowEn="Before & After"
        title="نتائج حقيقية تتحدث عن نفسها"
        titleEn="Real Results That Speak for Themselves"
        desc="اسحب الشريط لرؤية الفرق قبل وبعد خدماتنا الاحترافية في التنظيف."
        descEn="Drag the slider to see the difference before and after our professional cleaning services."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="space-y-12 max-w-4xl mx-auto">
            {comparisons.map((c, i) => (
              <SectionReveal key={i} delay={i * 0.1}>
                <div className="mb-4">
                  <h3 className={`text-xl font-bold ${lang === 'ar' ? 'font-arabic' : ''}`}>
                    {t(c.labelAr, c.labelEn)}
                  </h3>
                </div>
                <BeforeAfterSlider beforeImage={c.before} afterImage={c.after} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
