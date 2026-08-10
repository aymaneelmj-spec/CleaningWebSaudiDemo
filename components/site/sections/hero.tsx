'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Star, Sparkles, ShieldCheck, Zap, Phone, MessageCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { site, images, whatsappLink, telLink, stats } from '@/lib/site';
import { AnimatedCounter } from '@/components/site/animated-counter';
import { Button } from '@/components/ui/button';

export function Hero() {
  const { lang, t } = useLang();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '40%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);

  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section ref={ref} className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background */}
      <motion.div style={{ y, scale }} className="absolute inset-0 z-0">
        <img src={images.hero} alt="luxury living room" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background dark:from-background/80 dark:via-background/60 dark:to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent rtl:from-background/70" />
      </motion.div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 end-10 h-72 w-72 rounded-full bg-primary/20 blur-3xl animate-float-slow" />
      <div className="absolute bottom-1/4 start-10 h-80 w-80 rounded-full bg-gold/15 blur-3xl animate-float" />

      <motion.div style={{ opacity }} className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className={`inline-flex items-center gap-2 rounded-full glass-strong px-4 py-2 text-sm font-medium mb-6 ${lang === 'ar' ? 'font-arabic' : ''}`}
          >
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            {t('الأولى في خدمات الغسيل في مكة المكرمة', '#1 laundry service in Makkah & KSA')}
            <Star className="h-3.5 w-3.5 text-gold fill-gold" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 ${lang === 'ar' ? 'font-arabic leading-snug' : 'leading-[1.05]'}`}
          >
            {t('خدمات غسيل احترافية', 'Professional Laundry')}
            <br />
            <span className="gradient-text-royal">{t('في قلب مكة المكرمة', 'Services in Makkah')}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className={`text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl ${lang === 'ar' ? 'font-arabic' : ''}`}
          >
            {t(
              'غسيل وتنظيف احترافي للملابس والمنسوجات بأحدث المعدات وأجود المواد. خدمة 24/7 في جميع أحياء مكة المكرمة.',
              'Professional laundry and textile cleaning with the latest equipment and finest materials. 24/7 service across all Makkah districts.'
            )}
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap items-center gap-3"
          >
            <Button asChild size="lg" className="rounded-full gradient-royal text-white border-0 shadow-luxury-lg text-base h-14 px-8 group">
              <a href={whatsappLink(t('مرحباً، أريد حجز موعد لخدمة الغسيل', 'Hello, I want to book a laundry service appointment'))} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="h-5 w-5" />
                {t('احجز واتساب', 'Book on WhatsApp')}
                <Arrow className="h-4 w-4 group-hover:translate-x-0.5 transition-transform rtl:group-hover:-translate-x-0.5" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="rounded-full glass-strong border-border text-base h-14 px-8">
              <a href={telLink}>
                <Phone className="h-5 w-5" />
                {t('اتصل الآن', 'Call Now')}
              </a>
            </Button>
            <Button asChild size="lg" variant="ghost" className="rounded-full text-base h-14 px-8">
              <Link href="/contact">
                {t('عرض سعر مجاني', 'Free Quote')}
                <Arrow className="h-4 w-4" />
              </Link>
            </Button>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap items-center gap-x-6 gap-y-3 mt-10"
          >
            {[
              { icon: ShieldCheck, label: t('ضمان الرضا', 'Satisfaction Guaranteed') },
              { icon: Zap, label: t('استجابة خلال ساعة', '1-Hour Response') },
              { icon: Sparkles, label: t('تنظيف بالبخار', 'Steam Cleaning') },
            ].map((b, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                <b.icon className="h-4 w-4 text-primary" />
                <span className={lang === 'ar' ? 'font-arabic' : ''}>{b.label}</span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl"
        >
          {stats.map((s, i) => (
            <div key={i} className="glass-strong rounded-2xl p-5 text-center">
              <div className="text-3xl md:text-4xl font-bold gradient-text-royal">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className={`text-sm text-muted-foreground mt-1 ${lang === 'ar' ? 'font-arabic' : ''}`}>
                {t(s.ar, s.en)}
              </div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-1 text-muted-foreground"
        >
          <span className={`text-xs ${lang === 'ar' ? 'font-arabic' : ''}`}>{t('مرر للأسفل', 'Scroll')}</span>
          <div className="h-8 w-5 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center pt-1.5">
            <div className="h-1.5 w-1.5 rounded-full bg-muted-foreground animate-pulse" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
