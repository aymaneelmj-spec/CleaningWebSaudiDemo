'use client';

import { motion } from 'framer-motion';
import { MessageCircle, Phone, Sparkles } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { whatsappLink, telLink } from '@/lib/site';
import { Button } from '@/components/ui/button';

export function CtaBanner() {
  const { lang, t } = useLang();
  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl overflow-hidden shadow-luxury-lg"
        >
          <div className="absolute inset-0 gradient-royal" />
          <div className="absolute inset-0 animated-gradient-bg opacity-40" style={{ backgroundImage: 'linear-gradient(120deg, hsl(217 91% 60%), hsl(222 83% 35%), hsl(43 74% 50%))' }} />
          <div className="absolute -top-20 -end-20 h-60 w-60 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-20 -start-20 h-60 w-60 rounded-full bg-gold/20 blur-3xl" />

          <div className="relative z-10 p-10 md:p-16 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm text-white mb-6">
              <Sparkles className="h-4 w-4" />
              {t('عرض خاص لعملاء مكة المكرمة', 'Special Offer for Makkah Customers')}
            </div>
            <h2 className={`text-3xl md:text-5xl font-bold text-white mb-4 ${lang === 'ar' ? 'font-arabic' : ''}`}>
              {t('جاهز لمنزل أنظف وأكثر صحة؟', 'Ready for a Cleaner, Healthier Home?')}
            </h2>
            <p className={`text-white/80 text-lg max-w-2xl mx-auto mb-8 ${lang === 'ar' ? 'font-arabic' : ''}`}>
              {t('احجز الآن واحصل على خصم 15% على أول خدمة غسيل. استجابة خلال ساعة في جميع أحياء مكة المكرمة.', 'Book now and get 15% off your first laundry service. 1-hour response across all Makkah districts.')}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-3">
              <Button asChild size="lg" className="rounded-full bg-white text-primary hover:bg-white/90 border-0 h-14 px-8 text-base shadow-luxury-lg">
                <a href={whatsappLink(t('مرحباً، أريد الاستفادة من العرض الخاص لخدمة الغسيل', 'Hello, I want to take advantage of the special laundry offer'))} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-5 w-5" />
                  {t('احجز واتساب', 'Book WhatsApp')}
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full bg-transparent border-white/30 text-white hover:bg-white/10 h-14 px-8 text-base">
                <a href={telLink}>
                  <Phone className="h-5 w-5" />
                  {t('اتصل الآن', 'Call Now')}
                </a>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
