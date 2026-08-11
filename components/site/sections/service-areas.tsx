'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Navigation, ExternalLink } from 'lucide-react';
import { useLang } from '@/lib/lang-context';
import { serviceAreas, site } from '@/lib/site';
import { StaggerContainer, StaggerItem } from '@/components/site/section-reveal';
import { SectionHeading } from '@/components/site/section-heading';

function buildEmbedUrl(): string {
  const configured = site.mapsEmbed;
  if (configured && configured.startsWith('https://www.google.com/maps/embed')) {
    return configured;
  }
  return `https://www.google.com/maps?q=${site.mapsLat},${site.mapsLng}&z=15&output=embed`;
}

const STATIC_MAP_URL = `https://maps.googleapis.com/maps/api/staticmap?center=${site.mapsLat},${site.mapsLng}&zoom=15&size=600x400&scale=2&markers=color:red%7C${site.mapsLat},${site.mapsLng}&key=`;
const MAPS_LINK = `https://www.google.com/maps/place/?q=place_id:${site.mapsPlaceId}`;
const DIRECTIONS_LINK = `https://www.google.com/maps/dir/?api=1&destination=${site.mapsLat},${site.mapsLng}`;

export function ServiceAreas() {
  const { lang, t } = useLang();
  const [embedFailed, setEmbedFailed] = useState(false);
  const embedUrl = buildEmbedUrl();

  return (
    <section className="py-20 md:py-28 relative bg-muted/20">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="مناطق التغطية"
          eyebrowEn="Service Areas"
          title="نخدم جميع أحياء مكة المكرمة"
          titleEn="We Serve All Makkah Districts"
          desc="فريقنا منتشر في جميع أنحاء مكة المكرمة للوصول إليك في أسرع وقت."
          descEn="Our team is spread across all of Makkah to reach you as quickly as possible."
        />
        <div className="grid lg:grid-cols-2 gap-8 items-center max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative h-80 lg:h-96"
            style={{ borderRadius: 24, overflow: 'hidden' }}
          >
            {!embedFailed ? (
              <iframe
                src={embedUrl}
                width="100%"
                height="100%"
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                title={`${site.city.en} Service Area Map`}
                className="absolute inset-0 w-full h-full"
                style={{ border: 0, borderRadius: 24 }}
                onError={() => setEmbedFailed(true)}
              />
            ) : (
              <div className="absolute inset-0 w-full h-full flex flex-col items-center justify-center gap-4 bg-muted">
                <div
                  className="w-full h-full max-w-full max-h-full"
                  style={{
                    backgroundImage: `url("${STATIC_MAP_URL}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    borderRadius: 24,
                  }}
                  aria-label={`Static map of ${site.city.en}`}
                />
                <div className="absolute bottom-4 inset-x-4 flex flex-wrap gap-2 justify-center">
                  <a
                    href={MAPS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-4 py-2 text-sm font-medium shadow hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {t('افتح في خرائط جوجل', 'Open in Google Maps')}
                  </a>
                  <a
                    href={DIRECTIONS_LINK}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-background text-foreground border border-border px-4 py-2 text-sm font-medium shadow hover:bg-muted transition-colors"
                  >
                    <Navigation className="h-4 w-4" />
                    {t('احصل على الاتجاهات', 'Get Directions')}
                  </a>
                </div>
              </div>
            )}

            <div className="absolute top-4 start-4 glass-strong rounded-2xl px-4 py-3 flex items-center gap-2 pointer-events-none">
              <MapPin className="h-5 w-5 text-primary" />
              <span className={`text-sm font-medium ${lang === 'ar' ? 'font-arabic' : ''}`}>
                {t(site.address.ar, site.address.en)}
              </span>
            </div>
          </motion.div>

          <div>
            <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 gap-3" stagger={0.05}>
              {serviceAreas.map((area, i) => (
                <StaggerItem key={i}>
                  <div className="flex items-center gap-2 rounded-xl border border-border/50 bg-card px-3 py-2.5 hover:border-primary/50 hover:bg-primary/5 transition-colors">
                    <div className="h-2 w-2 rounded-full bg-primary shrink-0" />
                    <span className={`text-sm ${lang === 'ar' ? 'font-arabic' : ''}`}>
                      {t(area.ar, area.en)}
                    </span>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </div>
    </section>
  );
}
