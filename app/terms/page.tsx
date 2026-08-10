'use client';

import { useLang } from '@/lib/lang-context';
import { site } from '@/lib/site';
import { PageHeader } from '@/components/site/page-header';
import { SectionReveal } from '@/components/site/section-reveal';

export default function TermsPage() {
  const { lang, t } = useLang();

  const sections = [
    { ar: { title: 'قبول الشروط', body: 'باستخدامك لموقعنا أو خدماتك فإنك توافق على هذه الشروط والأحكام. إذا لم توافق على أي جزء منها، يرجى عدم استخدام خدماتنا.' }, en: { title: 'Acceptance of Terms', body: 'By using our website or services, you agree to these terms and conditions. If you do not agree to any part of them, please do not use our services.' } },
    { ar: { title: 'الخدمات', body: 'تقدم مغسلة أبراج البيت خدمات غسيل وتنظيف الملابس والمنسوجات والكنب والسجاد في مكة المكرمة والمملكة العربية السعودية. نحتفظ بالحق في رفض أو إلغاء أي خدمة.' }, en: { title: 'Services', body: 'Abraj Al Bait Laundry provides laundry, textile, sofa, and carpet cleaning services in Makkah and Saudi Arabia. We reserve the right to refuse or cancel any service.' } },
    { ar: { title: 'الحجوزات والدفع', body: 'يتم تأكيد الحجز عبر واتساب أو الهاتف. الدفع يتم بعد إتمام الخدمة. نقبل الدفع نقداً أو عبر التحويل البنكي أو نقاط البيع.' }, en: { title: 'Bookings and Payment', body: 'Booking is confirmed via WhatsApp or phone. Payment is made after service completion. We accept cash, bank transfer, or POS payments.' } },
    { ar: { title: 'الإلغاء', body: 'يمكنك إلغاء الحجز قبل 2 ساعة من الموعد المحدد دون أي رسوم. الإلغاء بعد ذلك قد يخضع لرسوم.' }, en: { title: 'Cancellation', body: 'You can cancel your booking 2 hours before the scheduled time without any fees. Cancellation after that may be subject to fees.' } },
    { ar: { title: 'الضمان', body: 'نضمن رضاك التام عن الخدمة. إذا لم تكن راضياً، نعيد الخدمة مجاناً. لا يغطي الضمان الأضرار الناتجة عن سوء الاستخدام.' }, en: { title: 'Guarantee', body: 'We guarantee your full satisfaction with the service. If you are not satisfied, we redo the service for free. The guarantee does not cover damages from misuse.' } },
    { ar: { title: 'المسؤولية', body: 'شركتنا غير مسؤولة عن أي أضرار ناتجة عن عيوب سابقة في الأثاث أو المواد غير المناسبة للتنظيف. نوصي بإبلاغنا بأي عيوب قبل بدء الخدمة.' }, en: { title: 'Liability', body: 'Our company is not responsible for damages resulting from pre-existing defects in furniture or materials unsuitable for cleaning. We recommend informing us of any defects before starting the service.' } },
    { ar: { title: 'التواصل', body: `لأي استفسارات بخصوص الشروط، تواصل معنا على: ${site.email} أو ${site.phoneDisplay}` }, en: { title: 'Contact', body: `For any inquiries regarding terms, contact us at: ${site.email} or ${site.phoneDisplay}` } },
  ];

  return (
    <>
      <PageHeader
        eyebrow="القانونية"
        eyebrowEn="Legal"
        title="الشروط والأحكام"
        titleEn="Terms & Conditions"
        desc="الشروط التي تحكم استخدامك لخدماتنا."
        descEn="The terms governing your use of our services."
      />
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="space-y-8">
            {sections.map((s, i) => (
              <SectionReveal key={i} delay={i * 0.05}>
                <div className="rounded-2xl border border-border/50 bg-card p-6">
                  <h2 className={`text-xl font-bold mb-3 ${lang === 'ar' ? 'font-arabic' : ''}`}>{t(s.ar.title, s.en.title)}</h2>
                  <p className={`text-muted-foreground leading-relaxed ${lang === 'ar' ? 'font-arabic' : ''}`}>{t(s.ar.body, s.en.body)}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
