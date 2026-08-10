'use client';

import { Languages } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

export function LangToggle() {
  const { lang, setLang } = useLang();
  const isAr = lang === 'ar';

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setLang(isAr ? 'en' : 'ar')}
      className="gap-1.5 rounded-full font-medium"
      aria-label="Toggle language"
    >
      <Languages className="h-4 w-4" />
      <motion.span
        key={lang}
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="text-sm"
      >
        {isAr ? 'EN' : 'ع'}
      </motion.span>
    </Button>
  );
}
