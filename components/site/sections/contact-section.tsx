'use client';

import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, MessageCircle, Send, CheckCircle2 } from 'lucide-react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useLang } from '@/lib/lang-context';
import { site, whatsappLink, telLink } from '@/lib/site';
import { SectionHeading } from '@/components/site/section-heading';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { services } from '@/lib/site';

const schema = z.object({
  name: z.string().min(2, 'Name required'),
  phone: z.string().min(8, 'Phone required'),
  service: z.string().min(1, 'Service required'),
  message: z.string().optional(),
});

type FormData = z.infer<typeof schema>;

export function ContactSection() {
  const { lang, t } = useLang();
  const [sent, setSent] = useState(false);
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data: FormData) => {
    const msg = `${t('طلب عرض سعر جديد', 'New Quote Request')}%0A${t('الاسم', 'Name')}: ${data.name}%0A${t('الهاتف', 'Phone')}: ${data.phone}%0A${t('الخدمة', 'Service')}: ${data.service}%0A${t('الرسالة', 'Message')}: ${data.message || '-'}`;
    window.open(whatsappLink(decodeURIComponent(msg)), '_blank');
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const contactItems = [
    { icon: Phone, label: t('الهاتف', 'Phone'), value: site.phoneDisplay, href: telLink },
    { icon: MessageCircle, label: t('واتساب', 'WhatsApp'), value: site.phoneDisplay, href: whatsappLink() },
    { icon: Mail, label: t('البريد', 'Email'), value: site.email, href: `mailto:${site.email}` },
    { icon: Clock, label: t('ساعات العمل', 'Hours'), value: t(site.hours.ar, site.hours.en), href: undefined },
    { icon: MapPin, label: t('العنوان', 'Address'), value: t(site.address.ar, site.address.en), href: undefined },
  ];

  return (
    <section className="py-20 md:py-28 relative">
      <div className="container mx-auto px-4">
        <SectionHeading
          eyebrow="تواصل معنا"
          eyebrowEn="Contact Us"
          title="احصل على عرض سعر مجاني الآن"
          titleEn="Get a Free Quote Now"
          desc="املأ النموذج وسنتواصل معك خلال دقائق عبر واتساب."
          descEn="Fill the form and we will contact you within minutes via WhatsApp."
        />
        <div className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
          {/* Contact info */}
          <div className="lg:col-span-2 space-y-4">
            {contactItems.map((item, i) => {
              const Content = (
                <motion.div
                  initial={{ opacity: 0, x: lang === 'ar' ? 20 : -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  whileHover={{ y: -3 }}
                  className="flex items-center gap-4 rounded-2xl border border-border/50 bg-card p-5 hover:shadow-luxury transition-shadow"
                >
                  <div className="h-12 w-12 rounded-xl gradient-royal flex items-center justify-center shrink-0">
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <div className={`text-sm text-muted-foreground ${lang === 'ar' ? 'font-arabic' : ''}`}>{item.label}</div>
                    <div className={`font-semibold ${lang === 'ar' ? 'font-arabic' : ''}`} dir={item.label === t('الهاتف', 'Phone') || item.label === t('واتساب', 'WhatsApp') ? 'ltr' : undefined}>{item.value}</div>
                  </div>
                </motion.div>
              );
              return item.href ? (
                <a key={i} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="block">{Content}</a>
              ) : (
                <div key={i}>{Content}</div>
              );
            })}
          </div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-3"
          >
            <form onSubmit={handleSubmit(onSubmit)} className="glass-strong rounded-3xl p-6 md:p-8 shadow-luxury space-y-5">
              {sent && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex items-center gap-3 rounded-2xl bg-green-500/10 border border-green-500/20 p-4"
                >
                  <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                  <p className={`text-sm font-medium ${lang === 'ar' ? 'font-arabic' : ''}`}>
                    {t('تم إرسال طلبك! سنفتح واتساب لإكمال المحادثة.', 'Your request has been sent! WhatsApp will open to continue the conversation.')}
                  </p>
                </motion.div>
              )}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label className={lang === 'ar' ? 'font-arabic' : ''}>{t('الاسم', 'Name')}</Label>
                  <Input {...register('name')} placeholder={t('اسمك الكامل', 'Your full name')} className="rounded-xl" />
                  {errors.name && <p className="text-xs text-destructive">{t('الاسم مطلوب', 'Name required')}</p>}
                </div>
                <div className="space-y-2">
                  <Label className={lang === 'ar' ? 'font-arabic' : ''}>{t('الهاتف', 'Phone')}</Label>
                  <Input {...register('phone')} placeholder="05xxxxxxxx" className="rounded-xl" dir="ltr" />
                  {errors.phone && <p className="text-xs text-destructive">{t('الهاتف مطلوب', 'Phone required')}</p>}
                </div>
              </div>
              <div className="space-y-2">
                <Label className={lang === 'ar' ? 'font-arabic' : ''}>{t('الخدمة المطلوبة', 'Service Needed')}</Label>
                <Select onValueChange={(v) => setValue('service', v)} value={watch('service') || ''}>
                  <SelectTrigger className="rounded-xl">
                    <SelectValue placeholder={t('اختر الخدمة', 'Select a service')} />
                  </SelectTrigger>
                  <SelectContent>
                    {services.map((s) => (
                      <SelectItem key={s.id} value={t(s.ar.title, s.en.title)}>
                        {t(s.ar.title, s.en.title)}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                {errors.service && <p className="text-xs text-destructive">{t('الخدمة مطلوبة', 'Service required')}</p>}
              </div>
              <div className="space-y-2">
                <Label className={lang === 'ar' ? 'font-arabic' : ''}>{t('رسالة (اختياري)', 'Message (optional)')}</Label>
                <Textarea {...register('message')} placeholder={t('أخبرنا بتفاصيل أكثر...', 'Tell us more details...')} className="rounded-xl min-h-[100px]" />
              </div>
              <Button type="submit" size="lg" className="w-full rounded-xl gradient-royal text-white border-0 h-14 text-base shadow-luxury">
                <Send className="h-5 w-5" />
                {t('إرسال الطلب', 'Send Request')}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
