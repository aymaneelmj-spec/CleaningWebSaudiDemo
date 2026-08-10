'use client';

import { ContactSection } from '@/components/site/sections/contact-section';
import { PageHeader } from '@/components/site/page-header';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="تواصل معنا"
        eyebrowEn="Contact Us"
        title="نحن هنا لخدمتك"
        titleEn="We Are Here to Serve You"
        desc="تواصل معنا عبر واتساب أو الهاتف أو املأ النموذج وسنعاود الاتصال بك فوراً."
        descEn="Contact us via WhatsApp or phone, or fill the form and we will call you back immediately."
      />
      <ContactSection />
    </>
  );
}
