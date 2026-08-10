'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { images } from '@/lib/site';
import { PageHeader } from '@/components/site/page-header';
import { StaggerContainer, StaggerItem } from '@/components/site/section-reveal';
import { CtaBanner } from '@/components/site/sections/cta-banner';

const galleryImages = [
  ...images.livingRooms.map((img, i) => ({ img, cat: 'living' })),
  ...images.cleaning.map((img, i) => ({ img, cat: 'cleaning' })),
  ...images.villas.map((img, i) => ({ img, cat: 'villa' })),
  ...images.office.map((img, i) => ({ img, cat: 'office' })),
  { img: images.majlis, cat: 'majlis' },
  ...images.carpet.map((img, i) => ({ img, cat: 'carpet' })),
  ...images.family.map((img, i) => ({ img, cat: 'family' })),
];

const categories = [
  { id: 'all', ar: 'الكل', en: 'All' },
  { id: 'living', ar: 'غرف المعيشة', en: 'Living Rooms' },
  { id: 'cleaning', ar: 'التنظيف', en: 'Cleaning' },
  { id: 'villa', ar: 'الفلل', en: 'Villas' },
  { id: 'office', ar: 'المكاتب', en: 'Offices' },
  { id: 'majlis', ar: 'المجالس', en: 'Majlis' },
  { id: 'carpet', ar: 'السجاد', en: 'Carpets' },
  { id: 'family', ar: 'العائلات', en: 'Families' },
];

export default function GalleryPage() {
  const { lang, t } = useLang();
  const [filter, setFilter] = useState('all');
  const [lightbox, setLightbox] = useState<string | null>(null);

  const filtered = filter === 'all' ? galleryImages : galleryImages.filter((g) => g.cat === filter);

  return (
    <>
      <PageHeader
        eyebrow="المعرض"
        eyebrowEn="Gallery"
        title="معرض أعمالنا"
        titleEn="Our Work Gallery"
        desc="استعرض مجموعة من أعمالنا في تنظيف الأثاث والمنازل والمكاتب في مكة المكرمة."
        descEn="Browse a collection of our work in upholstery, home, and office cleaning in Makkah."
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((c) => (
              <button
                key={c.id}
                onClick={() => setFilter(c.id)}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all ${filter === c.id ? 'gradient-royal text-white shadow-luxury' : 'bg-muted hover:bg-muted/70'}`}
              >
                {t(c.ar, c.en)}
              </button>
            ))}
          </div>

          {/* Grid */}
          <StaggerContainer className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4" stagger={0.05}>
            {filtered.map((g, i) => (
              <StaggerItem key={i}>
                <motion.div
                  layout
                  whileHover={{ scale: 1.02 }}
                  onClick={() => setLightbox(g.img)}
                  className="group relative cursor-pointer rounded-2xl overflow-hidden aspect-square shadow-luxury"
                >
                  <img src={g.img} alt="gallery" loading="lazy" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="fixed inset-0 z-[200] bg-black/80 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button className="absolute top-5 end-5 h-12 w-12 rounded-full glass-strong flex items-center justify-center text-white">
              <X className="h-6 w-6" />
            </button>
            <motion.img
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.8 }}
              src={lightbox}
              alt="gallery large"
              className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <CtaBanner />
    </>
  );
}
