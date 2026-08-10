'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { blogPosts } from '@/lib/site';
import { PageHeader } from '@/components/site/page-header';
import { StaggerContainer, StaggerItem } from '@/components/site/section-reveal';
import { CtaBanner } from '@/components/site/sections/cta-banner';

export default function BlogPage() {
  const { lang, t } = useLang();
  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <>
      <PageHeader
        eyebrow="المدونة"
        eyebrowEn="Blog"
        title="نصائح ومقالات مفيدة"
        titleEn="Tips & Useful Articles"
        desc="مقالات متخصصة في التنظيف والعناية بالأثاث لتساعدك في الحفاظ على منزلك."
        descEn="Specialized articles on cleaning and furniture care to help you maintain your home."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {blogPosts.map((post) => (
              <StaggerItem key={post.slug}>
                <motion.div whileHover={{ y: -8 }} className="group h-full rounded-3xl border border-border/50 bg-card overflow-hidden hover:shadow-luxury-lg transition-shadow">
                  <div className="relative h-48 overflow-hidden">
                    <img src={post.img} alt={t(post.ar.title, post.en.title)} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                    <div className="absolute top-3 start-3 glass-strong rounded-full px-3 py-1 text-xs font-medium flex items-center gap-1.5">
                      <Calendar className="h-3 w-3" />
                      {post.date}
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className={`text-lg font-bold mb-2 line-clamp-2 ${lang === 'ar' ? 'font-arabic' : ''}`}>{t(post.ar.title, post.en.title)}</h3>
                    <p className={`text-sm text-muted-foreground line-clamp-3 mb-4 ${lang === 'ar' ? 'font-arabic' : ''}`}>{t(post.ar.excerpt, post.en.excerpt)}</p>
                    <Link href={`/blog/${post.slug}`} className={`inline-flex items-center gap-1 text-sm font-medium text-primary hover:gap-2 transition-all ${lang === 'ar' ? 'font-arabic' : ''}`}>
                      {t('اقرأ المزيد', 'Read More')}
                      <Arrow className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CtaBanner />
    </>
  );
}
