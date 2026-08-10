'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { site } from '@/lib/site';

export function LoadingScreen() {
  const { lang, t } = useLang();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-background"
        >
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/4 -start-1/4 h-96 w-96 rounded-full bg-primary/10 blur-3xl animate-float-slow" />
            <div className="absolute -bottom-1/4 -end-1/4 h-96 w-96 rounded-full bg-gold/10 blur-3xl animate-float-slow" />
          </div>
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              className="relative"
            >
              <div className="h-20 w-20 rounded-2xl gradient-royal flex items-center justify-center shadow-luxury-lg">
                <Sparkles className="h-10 w-10 text-white" />
              </div>
              <motion.div
                className="absolute inset-0 rounded-2xl border-2 border-primary/30"
                animate={{ scale: [1, 1.3], opacity: [1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
            </motion.div>
            <div className="text-center">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className={`text-xl font-bold ${lang === 'ar' ? 'font-arabic' : ''}`}
              >
                {t(site.shortName.ar, site.shortName.en)}
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="text-xs text-muted-foreground mt-1"
              >
                {t(site.loadingTagline.ar, site.loadingTagline.en)}
              </motion.p>
            </div>
            {/* Spinner */}
            <div className="flex gap-1.5">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="h-2 w-2 rounded-full bg-primary"
                  animate={{ y: [0, -8, 0], opacity: [0.4, 1, 0.4] }}
                  transition={{ duration: 0.8, repeat: Infinity, delay: i * 0.15 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
