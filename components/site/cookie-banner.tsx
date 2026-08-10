'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cookie, X } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { Button } from '@/components/ui/button';

export function CookieBanner() {
  const { lang, t } = useLang();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const accepted = localStorage.getItem('cookie-accepted');
    if (!accepted) {
      const timer = setTimeout(() => setShow(true), 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  const accept = () => {
    localStorage.setItem('cookie-accepted', 'true');
    setShow(false);
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 30 }}
          className="fixed bottom-5 end-5 z-40 max-w-sm"
        >
          <div className="glass-strong rounded-2xl shadow-luxury-lg p-5">
            <div className="flex items-start gap-3">
              <div className="h-10 w-10 rounded-xl bg-gold/20 flex items-center justify-center shrink-0">
                <Cookie className="h-5 w-5 text-gold" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium mb-1">
                  {t('نستخدم ملفات تعريف الارتباط', 'We use cookies')}
                </p>
                <p className="text-xs text-muted-foreground mb-3">
                  {t(
                    'نستخدم ملفات تعريف الارتباط لتحسين تجربتك. بالاستمرار فإنك توافق على سياسة الخصوصية.',
                    'We use cookies to improve your experience. By continuing you agree to our privacy policy.'
                  )}
                </p>
                <div className="flex gap-2">
                  <Button size="sm" onClick={accept} className="rounded-full gradient-royal text-white border-0 text-xs h-8">
                    {t('موافق', 'Accept')}
                  </Button>
                  <Button size="sm" variant="ghost" onClick={() => setShow(false)} className="rounded-full text-xs h-8">
                    {t('رفض', 'Decline')}
                  </Button>
                </div>
              </div>
              <button onClick={() => setShow(false)} className="shrink-0">
                <X className="h-4 w-4 text-muted-foreground" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
