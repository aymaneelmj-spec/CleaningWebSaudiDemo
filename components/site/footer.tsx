'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sparkles, Phone, Mail, MapPin, Clock, MessageCircle, ChevronRight } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { site, navLinks, whatsappLink, telLink } from '@/lib/site';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function Footer() {
  const { lang, t } = useLang();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [year] = useState(new Date().getFullYear());

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubscribed(true);
  };

  return (
    <footer className="relative mt-20 border-t border-border/50">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/30 pointer-events-none" />
      <div className="container mx-auto px-4 relative">
        {/* Newsletter CTA */}
        <div className="relative -top-16 mb-8">
          <div className="glass-strong rounded-3xl shadow-luxury-lg p-8 md:p-12 overflow-hidden relative">
            <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-primary/10 blur-3xl" />
            <div className="absolute -bottom-20 -left-20 h-60 w-60 rounded-full bg-gold/10 blur-3xl" />
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="max-w-md">
                <h3 className={`text-2xl md:text-3xl font-bold mb-2 ${lang === 'ar' ? 'font-arabic' : ''}`}>
                  {t('اشترك في نشرتنا البريدية', 'Subscribe to Our Newsletter')}
                </h3>
                <p className="text-muted-foreground">
                  {t('احصل على نصائح التنظيف والعروض الحصرية مباشرة في بريدك', 'Get cleaning tips and exclusive offers directly to your inbox')}
                </p>
              </div>
              <form onSubmit={handleSubscribe} className="flex gap-2 w-full md:w-auto md:min-w-[360px]">
                <Input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder={t('بريدك الإلكتروني', 'Your email')}
                  required
                  className="rounded-full flex-1"
                />
                <Button type="submit" className="rounded-full gradient-royal text-white border-0 shrink-0">
                  {subscribed ? t('تم!', 'Done!') : t('اشترك', 'Subscribe')}
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Main footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 pb-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-4">
              <div className="h-10 w-10 rounded-xl gradient-royal flex items-center justify-center">
                <Sparkles className="h-5 w-5 text-white" />
              </div>
              <span className={`font-bold text-lg ${lang === 'ar' ? 'font-arabic' : ''}`}>
                {t(site.shortName.ar, site.shortName.en)}
              </span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mb-4">
              {t(site.footerTagline.ar, site.footerTagline.en)}
            </p>
            <div className="flex gap-2">
              <Button asChild size="sm" className="rounded-full gradient-royal text-white border-0">
                <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="h-4 w-4" />
                  {t('واتساب', 'WhatsApp')}
                </a>
              </Button>
              <Button asChild size="sm" variant="outline" className="rounded-full">
                <a href={telLink}>
                  <Phone className="h-4 w-4" />
                  {t('اتصل', 'Call')}
                </a>
              </Button>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              {t('روابط سريعة', 'Quick Links')}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.slice(0, 6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                    <ChevronRight className="h-3 w-3 rtl:rotate-180 shrink-0" />
                    {t(link.ar, link.en)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* More links */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              {t('المزيد', 'More')}
            </h4>
            <ul className="space-y-2.5">
              {navLinks.slice(6).map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                    <ChevronRight className="h-3 w-3 rtl:rotate-180 shrink-0" />
                    {t(link.ar, link.en)}
                  </Link>
                </li>
              ))}
              <li>
                <Link href="/faq" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3 rtl:rotate-180 shrink-0" />
                  {t('الأسئلة الشائعة', 'FAQ')}
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3 rtl:rotate-180 shrink-0" />
                  {t('سياسة الخصوصية', 'Privacy Policy')}
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors flex items-center gap-1">
                  <ChevronRight className="h-3 w-3 rtl:rotate-180 shrink-0" />
                  {t('الشروط والأحكام', 'Terms')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider text-muted-foreground">
              {t('تواصل معنا', 'Contact')}
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>{t(site.address.ar, site.address.en)}</span>
              </li>
              <li>
                <a href={telLink} className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Phone className="h-4 w-4 shrink-0 text-primary" />
                  <span dir="ltr">{site.phoneDisplay}</span>
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="flex items-center gap-2.5 text-sm text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="h-4 w-4 shrink-0 text-primary" />
                  <span>{site.email}</span>
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-muted-foreground">
                <Clock className="h-4 w-4 mt-0.5 shrink-0 text-primary" />
                <span>{t(site.hours.ar, site.hours.en)}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-border/50 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground text-center md:text-start">
            {t(`© ${year} ${site.shortName.ar}. جميع الحقوق محفوظة.`, `© ${year} ${site.shortName.en}. All rights reserved.`)}
          </p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-primary transition-colors">
              {t('الخصوصية', 'Privacy')}
            </Link>
            <Link href="/terms" className="hover:text-primary transition-colors">
              {t('الشروط', 'Terms')}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
