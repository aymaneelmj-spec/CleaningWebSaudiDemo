'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sparkles, Phone } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { navLinks, site, whatsappLink, telLink } from '@/lib/site';
import { ThemeToggle } from '@/components/site/theme-toggle';
import { LangToggle } from '@/components/site/lang-toggle';
import { LiveSearch } from '@/components/site/live-search';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

export function Navbar() {
  const { lang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="fixed top-0 inset-x-0 z-50"
    >
      <div className={cn('transition-all duration-500', scrolled ? 'py-2' : 'py-4')}>
        <div className="container mx-auto px-4">
          <div
            className={cn(
              'flex items-center justify-between rounded-2xl px-4 lg:px-6 h-16 transition-all duration-500',
              scrolled ? 'glass-strong shadow-luxury' : 'bg-transparent'
            )}
          >
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0">
              <div className="relative h-10 w-10 rounded-xl gradient-royal flex items-center justify-center shadow-luxury">
                <Sparkles className="h-5 w-5 text-white" />
                <div className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full gradient-gold border-2 border-background" />
              </div>
              <div className="hidden sm:flex flex-col leading-none">
                <span className={cn('font-bold text-base', lang === 'ar' ? 'font-arabic' : '')}>
                  {t(site.shortName.ar, site.shortName.en)}
                </span>
                <span className="text-[10px] text-muted-foreground mt-0.5">
                  {t(site.loadingTagline.ar, site.loadingTagline.en)}
                </span>
              </div>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className={cn(
                      'relative px-3.5 py-2 rounded-full text-sm font-medium transition-colors',
                      active ? 'text-primary' : 'text-muted-foreground hover:text-foreground'
                    )}
                  >
                    {t(link.ar, link.en)}
                    {active && (
                      <motion.div
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-primary/10 -z-10"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="flex items-center gap-1.5">
              <div className="hidden md:block">
                <LiveSearch />
              </div>
              <LangToggle />
              <ThemeToggle />
              <div className="hidden sm:flex items-center gap-2 ms-2">
                <Button asChild size="sm" className="rounded-full gradient-royal text-white border-0 shadow-luxury hover:opacity-90">
                  <a href={whatsappLink(t('مرحباً، أريد حجز موعد', 'Hello, I want to book an appointment'))} target="_blank" rel="noopener noreferrer">
                    {t('احجز الآن', 'Book Now')}
                  </a>
                </Button>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="lg:hidden rounded-full"
                onClick={() => setOpen(!open)}
                aria-label="Menu"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden"
          >
            <div className="container mx-auto px-4">
              <div className="glass-strong rounded-2xl shadow-luxury-lg p-4 mb-2 space-y-1">
                <div className="md:hidden mb-3">
                  <LiveSearch />
                </div>
                {navLinks.map((link) => {
                  const active = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        'flex items-center px-4 py-3 rounded-xl text-sm font-medium transition-colors',
                        active ? 'bg-primary/10 text-primary' : 'hover:bg-muted'
                      )}
                    >
                      {t(link.ar, link.en)}
                    </Link>
                  );
                })}
                <div className="pt-2 flex gap-2">
                  <Button asChild className="flex-1 rounded-xl gradient-royal text-white border-0">
                    <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                      {t('احجز واتساب', 'WhatsApp')}
                    </a>
                  </Button>
                  <Button asChild variant="outline" className="flex-1 rounded-xl">
                    <a href={telLink}>
                      <Phone className="h-4 w-4" />
                      {t('اتصل', 'Call')}
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
