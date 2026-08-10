'use client';

import { useState, useMemo } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { navLinks, services, blogPosts, site } from '@/lib/site';
import { cn } from '@/lib/utils';

export function LiveSearch() {
  const { lang, t } = useLang();
  const [q, setQ] = useState('');
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const results = useMemo(() => {
    if (!q.trim()) return [];
    const query = q.toLowerCase();
    const r: { label: string; href: string; type: string }[] = [];
    navLinks.forEach((l) => {
      if (l.ar.includes(query) || l.en.toLowerCase().includes(query))
        r.push({ label: t(l.ar, l.en), href: l.href, type: t('صفحة', 'Page') });
    });
    services.forEach((s) => {
      if (s.ar.title.includes(query) || s.en.title.toLowerCase().includes(query))
        r.push({ label: t(s.ar.title, s.en.title), href: '/services', type: t('خدمة', 'Service') });
    });
    blogPosts.forEach((b) => {
      if (b.ar.title.includes(query) || b.en.title.toLowerCase().includes(query))
        r.push({ label: t(b.ar.title, b.en.title), href: '/blog', type: t('مقال', 'Article') });
    });
    return r.slice(0, 6);
  }, [q, lang, t]);

  return (
    <div className="relative">
      <div className="flex items-center gap-2 rounded-full bg-muted/60 px-3.5 py-2 w-44 lg:w-56 transition-all focus-within:w-64 focus-within:bg-muted focus-within:ring-2 focus-within:ring-ring/40">
        <Search className="h-4 w-4 text-muted-foreground shrink-0" />
        <input
          value={q}
          onChange={(e) => { setQ(e.target.value); setOpen(true); }}
          onFocus={() => setOpen(true)}
          onBlur={() => setTimeout(() => setOpen(false), 200)}
          placeholder={t('بحث...', 'Search...')}
          className="bg-transparent outline-none text-sm w-full placeholder:text-muted-foreground"
        />
        {q && (
          <button onClick={() => setQ('')} className="shrink-0">
            <X className="h-3.5 w-3.5 text-muted-foreground" />
          </button>
        )}
      </div>
      {open && results.length > 0 && (
        <div className="absolute top-full mt-2 inset-x-0 glass-strong rounded-2xl shadow-luxury-lg p-2 z-50 min-w-[280px]">
          {results.map((r, i) => (
            <button
              key={i}
              onClick={() => { router.push(r.href); setQ(''); setOpen(false); }}
              className="flex items-center justify-between w-full px-3 py-2.5 rounded-xl hover:bg-muted transition-colors text-sm text-start"
            >
              <span className="font-medium">{r.label}</span>
              <span className="text-xs text-muted-foreground">{r.type}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
