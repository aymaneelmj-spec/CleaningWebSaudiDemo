'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useLang } from '@/lib/lang-context';
import { site, whatsappLink } from '@/lib/site';

export function FloatingWhatsApp() {
  const { lang, t } = useLang();
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (visible) {
      const timer = setTimeout(() => setTooltip(true), 1500);
      const timer2 = setTimeout(() => setTooltip(false), 6000);
      return () => { clearTimeout(timer); clearTimeout(timer2); };
    }
  }, [visible]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 20 }}
          className="fixed bottom-5 start-5 z-50 flex items-center gap-2"
        >
          <AnimatePresence>
            {tooltip && (
              <motion.div
                initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20, scale: 0.8 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                exit={{ opacity: 0, x: lang === 'ar' ? 20 : -20, scale: 0.8 }}
                className="glass-strong rounded-2xl shadow-luxury-lg px-4 py-3 max-w-[220px] relative"
              >
                <button
                  onClick={() => setTooltip(false)}
                  className="absolute -top-1.5 -end-1.5 h-5 w-5 rounded-full bg-muted flex items-center justify-center"
                >
                  <X className="h-3 w-3" />
                </button>
                <p className="text-sm font-medium">
                  {t('تحتاج خدمة غسيل؟ تواصل معنا الآن!', 'Need laundry service? Contact us now!')}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
          <a
            href={whatsappLink(t('مرحباً، أريد الاستفسار عن خدمات الغسيل', 'Hello, I want to inquire about laundry services'))}
            target="_blank"
            rel="noopener noreferrer"
            className="relative h-14 w-14 rounded-full bg-[#25D366] flex items-center justify-center shadow-luxury-lg hover:scale-110 transition-transform animate-pulse-ring"
            aria-label="WhatsApp"
          >
            <MessageCircle className="h-7 w-7 text-white" fill="white" />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
