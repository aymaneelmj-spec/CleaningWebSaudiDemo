'use client';

import { useParams } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Calendar, Clock } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { blogPosts, whatsappLink, site } from '@/lib/site';
import { SectionReveal } from '@/components/site/section-reveal';
import { Button } from '@/components/ui/button';
import { CtaBanner } from '@/components/site/sections/cta-banner';

export default function BlogPostPage() {
  const { lang, t } = useLang();
  const params = useParams();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="pt-40 pb-20 text-center">
        <p className="text-muted-foreground">{t('المقال غير موجود', 'Article not found')}</p>
        <Button asChild className="mt-4 rounded-full gradient-royal text-white border-0">
          <Link href="/blog">{t('العودة للمدونة', 'Back to Blog')}</Link>
        </Button>
      </div>
    );
  }

  const Arrow = lang === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <>
      <article className="pt-32 pb-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <Link href="/blog" className={`inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors mb-6 ${lang === 'ar' ? 'font-arabic' : ''}`}>
            <Arrow className="h-4 w-4 rtl:rotate-180" />
            {t('العودة للمدونة', 'Back to Blog')}
          </Link>

          <SectionReveal>
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
              <span className="flex items-center gap-1.5">
                <Calendar className="h-4 w-4" />
                {post.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" />
                {t('5 دقائق قراءة', '5 min read')}
              </span>
            </div>
            <h1 className={`text-3xl md:text-5xl font-bold mb-6 ${lang === 'ar' ? 'font-arabic leading-snug' : 'leading-tight'}`}>
              {t(post.ar.title, post.en.title)}
            </h1>
          </SectionReveal>

          <SectionReveal delay={0.1}>
            <div className="relative rounded-3xl overflow-hidden shadow-luxury-lg mb-8 aspect-video">
              <img src={post.img} alt={t(post.ar.title, post.en.title)} className="w-full h-full object-cover" />
            </div>
          </SectionReveal>

          <SectionReveal delay={0.2}>
            <div className={`prose prose-lg max-w-none ${lang === 'ar' ? 'font-arabic' : ''}`}>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {t(post.ar.excerpt, post.en.excerpt)}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t(post.ar.content, post.en.content)}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t(
                  `في ${site.shortName.ar} نستخدم أحدث المعدات والمواد المعتمدة لضمان أفضل النتائج. فريقنا مدرّب على أعلى المعايير العالمية للتنظيف والتعقيم.`,
                  `At ${site.shortName.en}, we use the latest equipment and certified materials to ensure the best results. Our team is trained to the highest international standards for cleaning and sanitization.`
                )}
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                {t(
                  `لحجز خدمة احترافية، تواصل معنا عبر واتساب على الرقم ${site.whatsapp}+ أو اتصل مباشرة. نصل إليك في أي مكان في ${site.city.ar} خلال ساعة واحدة.`,
                  `To book a professional service, contact us via WhatsApp at ${site.phoneDisplay} or call directly. We reach you anywhere in ${site.city.en} within one hour.`
                )}
              </p>
            </div>
          </SectionReveal>

          <div className="mt-10 p-6 rounded-2xl gradient-royal text-white text-center">
            <p className={`text-lg font-semibold mb-4 ${lang === 'ar' ? 'font-arabic' : ''}`}>
              {t('جاهز لتجربة خدمة احترافية؟', 'Ready to experience professional service?')}
            </p>
            <Button asChild className="rounded-full bg-white text-primary hover:bg-white/90 border-0">
              <a href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                {t('احجز الآن', 'Book Now')}
                <Arrow className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </article>

      <CtaBanner />
    </>
  );
}
