'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, CheckCircle2, Sparkles, Award, Users, Briefcase, HeartHandshake } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { site, images, stats } from '@/lib/site';
import { PageHeader } from '@/components/site/page-header';
import { SectionReveal, StaggerContainer, StaggerItem } from '@/components/site/section-reveal';
import { AnimatedCounter } from '@/components/site/animated-counter';
import { Button } from '@/components/ui/button';
import { CtaBanner } from '@/components/site/sections/cta-banner';

const values = [
  { icon: 'Award', ar: { title: 'التميز', desc: 'نسعى دائماً لتقديم أعلى مستوى من الجودة في كل خدمة' }, en: { title: 'Excellence', desc: 'We always strive to deliver the highest level of quality in every service' } },
  { icon: 'HeartHandshake', ar: { title: 'الثقة', desc: 'نبني علاقات طويلة الأمد مع عملائنا بناءً على الصدق والشفافية' }, en: { title: 'Trust', desc: 'We build long-term relationships with our clients based on honesty and transparency' } },
  { icon: 'Sparkles', ar: { title: 'الابتكار', desc: 'نستخدم أحدث التقنيات والمعدات في عالم التنظيف' }, en: { title: 'Innovation', desc: 'We use the latest technologies and equipment in the cleaning world' } },
  { icon: 'ShieldCheck', ar: { title: 'الأمان', desc: 'نضمن سلامة عائلتك وحيواناتك الأليفة بمواد صديقة للبيئة' }, en: { title: 'Safety', desc: 'We ensure your family and pets safety with eco-friendly materials' } },
];

const milestones = [
  { year: '2014', ar: 'تأسيس الشركة في مكة المكرمة', en: 'Company founded in Makkah' },
  { year: '2017', ar: 'توسع الخدمات لتشمل التعقيم بالبخار', en: 'Expanded services to include steam sanitization' },
  { year: '2020', ar: 'تجاوز 5000 عميل سعيد', en: 'Surpassed 5,000 happy customers' },
  { year: '2024', ar: 'أصبحنا الأولى في خدمات الغسيل بالمملكة', en: 'Became #1 in laundry services in KSA' },
];

export default function AboutPage() {
  const { lang, t } = useLang();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <>
      <PageHeader
        eyebrow="من نحن"
        eyebrowEn="About Us"
        title="الشركة الأولى لخدمات الغسيل في مكة المكرمة"
        titleEn="The #1 Laundry Service Company in Makkah"
        desc="منذ 2014 ونحن نقدم خدمات غسيل وتنظيف احترافية بأعلى المعايير، نمت بثقة عملائنا لنصبح الرائدين في المملكة."
        descEn="Since 2014, we have delivered professional laundry services to the highest standards, growing through our customers trust to become leaders in the Kingdom."
      />

      {/* Story */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <SectionReveal>
              <div className="relative rounded-3xl overflow-hidden shadow-luxury-lg aspect-[4/3]">
                <img src={images.cleaning[0]} alt="professional cleaning" className="w-full h-full object-cover" />
                <div className="absolute bottom-4 start-4 glass-strong rounded-2xl px-5 py-3">
                  <div className="text-3xl font-bold gradient-text-royal">10+</div>
                  <div className={`text-sm text-muted-foreground ${lang === 'ar' ? 'font-arabic' : ''}`}>{t('سنوات خبرة', 'Years Experience')}</div>
                </div>
              </div>
            </SectionReveal>
            <SectionReveal delay={0.1}>
              <div>
                <h2 className={`text-3xl md:text-4xl font-bold mb-6 ${lang === 'ar' ? 'font-arabic' : ''}`}>
                  {t('قصتنا', 'Our Story')}
                </h2>
                <div className={`space-y-4 text-muted-foreground leading-relaxed ${lang === 'ar' ? 'font-arabic' : ''}`}>
                  <p>
                    {t(
                      'بدأت شركة مغسلة أبراج البيت في عام 2014 كشركة صغيرة في مكة المكرمة برؤية واضحة: تقديم خدمات غسيل وتنظيف احترافية بمعايير عالمية للسوق السعودي.',
                      'Abraj Al Bait Laundry started in 2014 as a small company in Makkah with a clear vision: delivering professional laundry services with international standards to the Saudi market.'
                    )}
                  </p>
                  <p>
                    {t(
                      'على مدى أكثر من عشر سنوات، نمت الشركة بثقة عملائنا حتى أصبحت الأولى في خدمات الغسيل والتنظيف في مكة المكرمة والمملكة العربية السعودية. نخدم آلاف العملاء سنوياً بفريق من الفنيين المعتمدين والمدرّبين على أحدث تقنيات الغسيل.',
                      'Over more than ten years, the company grew through our customers trust to become the #1 in laundry and cleaning services in Makkah and Saudi Arabia. We serve thousands of customers annually with a team of certified technicians trained on the latest laundry technologies.'
                    )}
                  </p>
                  <p>
                    {t(
                      'نؤمن بأن كل قطعة أثاث تستحق عناية خاصة، وكل عميل يستحق خدمة استثنائية. لذلك نلتزم بأعلى معايير الجودة والسلامة في كل ما نقوم به.',
                      'We believe every piece of furniture deserves special care, and every customer deserves exceptional service. Therefore, we commit to the highest standards of quality and safety in everything we do.'
                    )}
                  </p>
                </div>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 gradient-royal" />
        <div className="absolute inset-0 animated-gradient-bg opacity-30" style={{ backgroundImage: 'linear-gradient(120deg, hsl(217 91% 60%), hsl(222 83% 28%), hsl(43 74% 50%))' }} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {stats.map((s, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center glass rounded-3xl p-6 border-white/20"
              >
                <div className="text-4xl md:text-5xl font-bold text-white">
                  <AnimatedCounter value={s.value} suffix={s.suffix} />
                </div>
                <div className={`text-white/70 mt-2 ${lang === 'ar' ? 'font-arabic' : ''}`}>{t(s.ar, s.en)}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className={`text-center max-w-2xl mx-auto mb-12 ${lang === 'ar' ? 'font-arabic' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('قيمنا الأساسية', 'Our Core Values')}</h2>
              <p className="text-muted-foreground text-lg">{t('المبادئ التي تقودنا في كل خدمة نقدمها', 'The principles that guide us in every service we deliver')}</p>
            </div>
          </SectionReveal>
          <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {values.map((v, i) => (
              <StaggerItem key={i}>
                <motion.div whileHover={{ y: -6 }} className="h-full rounded-3xl border border-border/50 bg-card p-7 text-center hover:shadow-luxury-lg transition-shadow">
                  <div className="mx-auto h-16 w-16 rounded-2xl gradient-royal flex items-center justify-center mb-5">
                    {v.icon === 'Award' && <Award className="h-8 w-8 text-white" />}
                    {v.icon === 'HeartHandshake' && <HeartHandshake className="h-8 w-8 text-white" />}
                    {v.icon === 'Sparkles' && <Sparkles className="h-8 w-8 text-white" />}
                    {v.icon === 'ShieldCheck' && <CheckCircle2 className="h-8 w-8 text-white" />}
                  </div>
                  <h3 className={`text-lg font-bold mb-2 ${lang === 'ar' ? 'font-arabic' : ''}`}>{t(v.ar.title, v.en.title)}</h3>
                  <p className={`text-sm text-muted-foreground ${lang === 'ar' ? 'font-arabic' : ''}`}>{t(v.ar.desc, v.en.desc)}</p>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto px-4">
          <SectionReveal>
            <div className={`text-center max-w-2xl mx-auto mb-12 ${lang === 'ar' ? 'font-arabic' : ''}`}>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">{t('مسيرتنا', 'Our Journey')}</h2>
              <p className="text-muted-foreground text-lg">{t('محطات بارزة في تاريخ الشركة', 'Milestones in our company history')}</p>
            </div>
          </SectionReveal>
          <div className="max-w-3xl mx-auto space-y-6">
            {milestones.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: lang === 'ar' ? 30 : -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-center gap-5"
              >
                <div className="shrink-0 h-16 w-16 rounded-2xl gradient-royal flex items-center justify-center text-white font-bold shadow-luxury">
                  {m.year}
                </div>
                <div className="flex-1 rounded-2xl border border-border/50 bg-card p-5">
                  <p className={`font-semibold ${lang === 'ar' ? 'font-arabic' : ''}`}>{t(m.ar, m.en)}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
