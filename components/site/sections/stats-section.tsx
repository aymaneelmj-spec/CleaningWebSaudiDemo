'use client';

import { motion } from 'framer-motion';
import { useLang } from '@/lib/lang-context';
import { stats } from '@/lib/site';
import { AnimatedCounter } from '@/components/site/animated-counter';
import { Icon } from '@/components/site/icon';

const statIcons = ['Award', 'Users', 'Briefcase', 'Headphones'];

export function StatsSection() {
  const { lang, t } = useLang();
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute inset-0 gradient-royal" />
      <div className="absolute inset-0 animated-gradient-bg opacity-30" style={{ backgroundImage: 'linear-gradient(120deg, hsl(217 91% 60%), hsl(222 83% 28%), hsl(43 74% 50%))' }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/0 to-background/10" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className={`text-center mb-12 ${lang === 'ar' ? 'font-arabic' : ''}`}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            {t('أرقام تتحدث عن الإتقان', 'Numbers That Speak Excellence')}
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto">
            {t('سنوات من الخبرة والثقة جعلتنا الرائدين في تنظيف الأثاث بالمملكة', 'Years of experience and trust made us the leaders in upholstery cleaning in the Kingdom')}
          </p>
        </motion.div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -6 }}
              className="text-center glass rounded-3xl p-6 md:p-8 border-white/20"
            >
              <div className="mx-auto h-14 w-14 rounded-2xl bg-white/15 flex items-center justify-center mb-4">
                <Icon name={statIcons[i]} className="h-7 w-7 text-white" />
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </div>
              <div className={`text-white/70 mt-2 ${lang === 'ar' ? 'font-arabic' : ''}`}>
                {t(s.ar, s.en)}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
