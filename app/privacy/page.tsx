'use client';

import { useLang } from '@/lib/lang-context';
import { site } from '@/lib/site';
import { PageHeader } from '@/components/site/page-header';
import { SectionReveal } from '@/components/site/section-reveal';

export default function PrivacyPage() {
  const { lang, t } = useLang();

  const sections = [
    { ar: { title: 'مقدمة', body: 'توضح سياسة الخصوصية هذه كيف تجمع شركة زهراني كلينرز وتستخدم وتحمي بياناتك الشخصية عند استخدامك لموقعنا الإلكتروني أو خدماتنا.' }, en: { title: 'Introduction', body: 'This privacy policy explains how Zahrani Cleaners collects, uses, and protects your personal data when you use our website or services.' } },
    { ar: { title: 'البيانات التي نجمعها', body: 'نجمع البيانات التي تقدمها طوعاً مثل الاسم ورقم الهاتف والبريد الإلكتروني عند ملء نموذج طلب عرض السعر. كما نجمع بيانات تقنية مثل عنوان IP ونوع المتصفح لأغراض تحسين الموقع.' }, en: { title: 'Data We Collect', body: 'We collect data you voluntarily provide such as name, phone number, and email when filling out the quote request form. We also collect technical data like IP address and browser type for website improvement purposes.' } },
    { ar: { title: 'استخدام البيانات', body: 'نستخدم بياناتك للتواصل معك بخصوص طلباتك، وتقديم الخدمات المطلوبة، وإرسال العروض والنشرات البريدية (يمكنك إلغاء الاشتراك في أي وقت).' }, en: { title: 'Data Usage', body: 'We use your data to contact you regarding your requests, provide requested services, and send offers and newsletters (you can unsubscribe at any time).' } },
    { ar: { title: 'حماية البيانات', body: 'نلتزم بحماية بياناتك باستخدام تقنيات التشفير الحديثة وإجراءات أمنية صارمة. لا نشارك بياناتك مع أي طرف ثالث دون موافقتك.' }, en: { title: 'Data Protection', body: 'We are committed to protecting your data using modern encryption technologies and strict security measures. We do not share your data with any third party without your consent.' } },
    { ar: { title: 'حقوقك', body: 'لك الحق في الوصول إلى بياناتك وتصحيحها أو حذفها في أي وقت. لطلب حذف بياناتك، تواصل معنا عبر البريد الإلكتروني.' }, en: { title: 'Your Rights', body: 'You have the right to access, correct, or delete your data at any time. To request data deletion, contact us via email.' } },
    { ar: { title: 'ملفات تعريف الارتباط', body: 'نستخدم ملفات تعريف الارتباط (cookies) لتحسين تجربتك على الموقع. يمكنك التحكم في هذه الملفات من خلال إعدادات المتصفح.' }, en: { title: 'Cookies', body: 'We use cookies to improve your website experience. You can control these cookies through your browser settings.' } },
    { ar: { title: 'التواصل', body: `لأي استفسارات بخصوص الخصوصية، تواصل معنا على: ${site.email} أو ${site.phoneDisplay}` }, en: { title: 'Contact', body: `For any privacy inquiries, contact us at: ${site.email} or ${site.phoneDisplay}` } },
  ];

  return (
    <>
      <PageHeader
        eyebrow="القانونية"
        eyebrowEn="Legal"
        title="سياسة الخصوصية"
        titleEn="Privacy Policy"
        desc="نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية."
        descEn="We respect your privacy and are committed to protecting your personal data."
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
