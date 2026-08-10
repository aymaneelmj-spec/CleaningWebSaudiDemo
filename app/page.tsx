import { site } from '@/lib/site';
import { Hero } from '@/components/site/sections/hero';
import { ContactSection } from '@/components/site/sections/contact-section';
import { WhyChooseUs } from '@/components/site/sections/why-choose-us';
import { ServicesSection } from '@/components/site/sections/services-section';
import { BeforeAfterSection } from '@/components/site/sections/before-after-section';
import { ProcessSection } from '@/components/site/sections/process-section';
import { StatsSection } from '@/components/site/sections/stats-section';
import { TestimonialsSection } from '@/components/site/sections/testimonials-section';
import { FaqSection } from '@/components/site/sections/faq-section';
import { ServiceAreas } from '@/components/site/sections/service-areas';
import { CtaBanner } from '@/components/site/sections/cta-banner';

export default function Home() {
  return (
    <>
      <Hero />
      <ContactSection />
      <WhyChooseUs />
      <ServicesSection />
      <BeforeAfterSection />
      <ProcessSection />
      <StatsSection />
      <TestimonialsSection />
      <CtaBanner />
      <ServiceAreas />
      <FaqSection />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: site.shortName.en,
            alternateName: site.shortName.ar,
            description: site.tagline.en,
            telephone: site.phone,
            email: site.email,
<<<<<<< HEAD
            address: { '@type': 'PostalAddress', addressLocality: 'Makkah', addressCountry: 'SA' },
            areaServed: 'Makkah, Saudi Arabia',
=======
            address: { '@type': 'PostalAddress', streetAddress: site.address.en, addressLocality: site.city.en, addressCountry: 'SA' },
            areaServed: `${site.city.en}, ${site.country.en}`,
>>>>>>> 10f7d35 (Initial commit)
            openingHours: 'Mo-Su 00:00-24:00',
            priceRange: '$',
            aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '5000' },
          }),
        }}
      />
    </>
  );
}
