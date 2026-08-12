// ##SITE_CONFIG_START## — do not edit this block by hand, use site.config.json + UPDATE-SITE-INFO.bat instead
export const site = {
  name: { ar: "ممتاز لخدمات الغسيل", en: "Mumthaz Laundry service" },
  shortName: { ar: "مغسلة ممتاز", en: "Mumthaz Laundry" },
  tagline: { ar: "خدمات غسيل وتنظيف احترافية وموثوقة في مكة المكرمة", en: "Professional & Reliable Laundry Services in Makkah" },
  city: { ar: "مكة المكرمة", en: "Makkah" },
  country: { ar: "المملكة العربية السعودية", en: "Saudi Arabia" },
  address: { ar: "أجياد، الحرم، مكة المكرمة، المملكة العربية السعودية", en: "Ajyad, Al Haram, Makkah, Saudi Arabia" },
  phone: "+966538635826",
  phoneDisplay: "+966 53 863 5826",
  whatsapp: "966538635826",
  email: "",
  hours: { ar: "مفتوح 24 ساعة", en: "Open 24 Hours" },
  founded: null,
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d949726.0408127684!2d38.427543513642746!3d21.591100499999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15c2059a074922f3%3A0xa33fab3a0d906df5!2sMumthaz%20Laundry%20service!5e0!3m2!1sen!2sma!4v1786570952166!5m2!1sen!2sma",
  mapsLat: 21.591100499999996,
  mapsLng: 38.427543513642746,
  mapsPlaceId: "0x15c2059a074922f3:0xa33fab3a0d906df5",
  footerTagline: { ar: "مغسلة ممتاز لخدمات الغسيل والتنظيف الاحترافية في مكة المكرمة. نقدم خدمات موثوقة بجودة عالية واهتمام بأدق التفاصيل.", en: "Mumthaz Laundry provides professional laundry and cleaning services in Makkah with reliable service, high quality, and attention to detail." },
  loadingTagline: { ar: "خدمات غسيل وتنظيف احترافية في مكة المكرمة", en: "Professional Laundry Services in Makkah" },
  domain: "https://mumthazlaundry.com",
  seoTitle: { ar: "مغسلة ممتاز | خدمات الغسيل في مكة المكرمة", en: "Mumthaz Laundry | Laundry Services in Makkah" },
  seoDescription: { ar: "مغسلة ممتاز لخدمات الغسيل والتنظيف في مكة المكرمة. نقدم خدمات غسيل احترافية وموثوقة بجودة عالية.", en: "Mumthaz Laundry provides professional and reliable laundry services in Makkah with high quality and excellent service." },
  seoKeywords: ["مغسلة مكة","مغاسل مكة","مغسلة ملابس مكة","مغسلة أجياد","مغسلة الحرم","غسيل ملابس مكة","خدمات غسيل مكة","تنظيف ملابس مكة","مغسلة 24 ساعة مكة","laundry makkah","laundry service makkah","laundry near haram","laundry ajyad","laundry service mecca","24 hour laundry makkah"],
} as const;
// ##SITE_CONFIG_END##

export const whatsappLink = (message?: string) =>
  `https://wa.me/${site.whatsapp}${message ? `?text=${encodeURIComponent(message)}` : ''}`;

export const telLink = `tel:${site.phone}`;

export const images = {
  hero: 'https://images.pexels.com/photos/7166640/pexels-photo-7166640.jpeg?auto=compress&cs=tinysrgb&w=1920',
  heroAlt: 'https://images.pexels.com/photos/4401535/pexels-photo-4401535.jpeg?auto=compress&cs=tinysrgb&w=1920',
  livingRooms: [
    'https://images.pexels.com/photos/29012619/pexels-photo-29012619.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/7174113/pexels-photo-7174113.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/8135492/pexels-photo-8135492.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/7546323/pexels-photo-7546323.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/8135503/pexels-photo-8135503.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/8135496/pexels-photo-8135496.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/7166640/pexels-photo-7166640.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ],
  majlis: 'https://images.pexels.com/photos/18285958/pexels-photo-18285958.jpeg?auto=compress&cs=tinysrgb&w=1600',
  cleaning: [
    'https://images.pexels.com/photos/4401535/pexels-photo-4401535.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/4401538/pexels-photo-4401538.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/4098780/pexels-photo-4098780.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/4176225/pexels-photo-4176225.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/4176609/pexels-photo-4176609.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ],
  carpet: [
    'https://images.pexels.com/photos/4107278/pexels-photo-4107278.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/4107284/pexels-photo-4107284.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/4107281/pexels-photo-4107281.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ],
  office: [
    'https://images.pexels.com/photos/1128207/pexels-photo-1128207.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3747070/pexels-photo-3747070.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/9300721/pexels-photo-9300721.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/12662883/pexels-photo-12662883.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ],
  family: [
    'https://images.pexels.com/photos/3875141/pexels-photo-3875141.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/8120623/pexels-photo-8120623.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/8055074/pexels-photo-8055074.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ],
  equipment: [
    'https://images.pexels.com/photos/6195129/pexels-photo-6195129.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/6195275/pexels-photo-6195275.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/3616735/pexels-photo-3616735.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ],
  villas: [
    'https://images.pexels.com/photos/7031600/pexels-photo-7031600.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/7031598/pexels-photo-7031598.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/7031593/pexels-photo-7031593.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/8134847/pexels-photo-8134847.jpeg?auto=compress&cs=tinysrgb&w=1200',
    'https://images.pexels.com/photos/8082328/pexels-photo-8082328.jpeg?auto=compress&cs=tinysrgb&w=1200',
  ],
  whiteSofa: 'https://images.pexels.com/photos/29012619/pexels-photo-29012619.jpeg?auto=compress&cs=tinysrgb&w=1600',
  sofaGrey: 'https://images.pexels.com/photos/8082243/pexels-photo-8082243.jpeg?auto=compress&cs=tinysrgb&w=1600',
  sofaVintage: 'https://images.pexels.com/photos/7227620/pexels-photo-7227620.jpeg?auto=compress&cs=tinysrgb&w=1600',
  portraits: [
    'https://images.pexels.com/photos/38197025/pexels-photo-38197025.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/12311567/pexels-photo-12311567.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/37148308/pexels-photo-37148308.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/36439572/pexels-photo-36439572.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/12311572/pexels-photo-12311572.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/10174456/pexels-photo-10174456.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/12311579/pexels-photo-12311579.jpeg?auto=compress&cs=tinysrgb&w=400',
    'https://images.pexels.com/photos/29852852/pexels-photo-29852852.jpeg?auto=compress&cs=tinysrgb&w=400',
  ],
};

export const services = [
  { id: 'sofa', icon: 'Sofa', ar: { title: 'تنظيف الكنب والأرائك', desc: 'غسيل عميق للكنب بإزالة البقع والروائح من الألياف، يرجع كأنه جديد.' }, en: { title: 'Sofa Cleaning', desc: 'Deep wash that pulls stains and odors out of the fabric. Your sofa comes back looking new.' }, img: images.cleaning[0] },
  { id: 'carpet', icon: 'Layers', ar: { title: 'تنظيف السجاد والموكيت', desc: 'غسيل السجاد بمواد آمنة للأطفال والحيوانات، مع تجفيف سريع يمنع الرائحة.' }, en: { title: 'Carpet Cleaning', desc: 'Carpet wash with child- and pet-safe products, plus fast drying so no smell lingers.' }, img: images.carpet[0] },
  { id: 'curtain', icon: 'Blinds', ar: { title: 'تنظيف الستائر', desc: 'نظف الستائر ونظفها وهي في مكانها، ما تحتاج تنزلها ولا تشيل همها.' }, en: { title: 'Curtain Cleaning', desc: 'We clean and sanitize curtains right where they hang. No need to take them down.' }, img: images.livingRooms[0] },
  { id: 'mattress', icon: 'BedDouble', ar: { title: 'تنظيف المراتب', desc: 'نسحب عث الغبار والبكتيريا من المرتبة عشان تنام مرتاح وتصحى صحي.' }, en: { title: 'Mattress Cleaning', desc: 'We pull dust mites and bacteria out of your mattress so you sleep clean and healthy.' }, img: images.sofaVintage },
  { id: 'majlis', icon: 'Armchair', ar: { title: 'تنظيف المجالس', desc: 'عناية خاصة بالمجالس العربية مع الحفاظ على القماش والطابع الأصيل.' }, en: { title: 'Majlis Cleaning', desc: 'Careful cleaning of traditional majlis, keeping the fabric and character intact.' }, img: images.majlis },
  { id: 'office', icon: 'Building2', ar: { title: 'تنظيف المكاتب', desc: 'عقود صيانة شهرية للمكاتب والشركات، الفريق يجيك في الوقت المحدد.' }, en: { title: 'Office Cleaning', desc: 'Monthly contracts for offices and companies. The team shows up on schedule, every time.' }, img: images.office[0] },
  { id: 'villa', icon: 'Home', ar: { title: 'تنظيف الفلل', desc: 'تنظيف شامل للفيلا من الأرض للموبيليا مع تعقيم كامل لكل الغرف.' }, en: { title: 'Villa Cleaning', desc: 'Top-to-bottom villa cleaning with full sanitization across every room.' }, img: images.villas[0] },
  { id: 'apartment', icon: 'DoorOpen', ar: { title: 'تنظيف الشقق', desc: 'تنظيف عميق للشقة مع التركيز على التفاصيل الصغيرة اللي تفرق.' }, en: { title: 'Apartment Cleaning', desc: 'Deep apartment cleaning that gets into the details that make a real difference.' }, img: images.livingRooms[1] },
  { id: 'deep', icon: 'Sparkles', ar: { title: 'تنظيف عميق شامل', desc: 'تنظيف مكثف للمنزل كامل بالمعدات الاحترافية، من السقف للأرض.' }, en: { title: 'Deep Cleaning', desc: 'Intensive full-home cleaning with pro equipment, from ceiling to floor.' }, img: images.cleaning[1] },
  { id: 'steam', icon: 'Waves', ar: { title: 'تنظيف بالبخار', desc: 'البخار يقتل 99.9% من الجراثيم بدون كيماويات، آمن للبيئة كلها.' }, en: { title: 'Steam Cleaning', desc: 'Steam kills 99.9% of germs without harsh chemicals. Safe for the whole house.' }, img: images.cleaning[2] },
  { id: 'disinfection', icon: 'ShieldCheck', ar: { title: 'تعقيم وتطهير', desc: 'تعقيم شامل بالأشعة فوق البنفسجية ومواد معتمدة من الهيئة الصحية.' }, en: { title: 'Disinfection', desc: 'Full disinfection with UV light and health-authority-approved products.' }, img: images.equipment[0] },
  { id: 'chair', icon: 'Armchair', ar: { title: 'تنظيف الكراسي', desc: 'كراسي المنزل والمكتب، كل الأنواع والأقمشة، نظافة من الجذور.' }, en: { title: 'Chair Cleaning', desc: 'Home and office chairs, all types and fabrics, cleaned from the root up.' }, img: images.cleaning[3] },
];

export const whyChooseUs = [
  { icon: 'BadgeCheck', ar: { title: 'فريق مدرّب ومعتمد', desc: 'فنيون معتمدون درسوا أحدث طرق التنظيف' }, en: { title: 'Certified Team', desc: 'Technicians trained and certified on modern methods' } },
  { icon: 'Leaf', ar: { title: 'مواد آمنة على عائلتك', desc: 'مواد صديقة للبيئة وآمنة على الأطفال' }, en: { title: 'Family-Safe Products', desc: 'Eco-friendly materials safe for children' } },
  { icon: 'Zap', ar: { title: 'نوصلك خلال ساعة', desc: 'في مكة المكرمة، نصل خلال 60 دقيقة من اتصالك' }, en: { title: 'There in 1 Hour', desc: 'Anywhere in Makkah within 60 minutes of your call' } },
  { icon: 'Wallet', ar: { title: 'سعر واضح بدون مفاجآت', desc: 'السعر اللي تقوله هو اللي تدفعه' }, en: { title: 'Clear Pricing', desc: 'The price we quote is the price you pay' } },
  { icon: 'Clock', ar: { title: 'خدمة 24 ساعة', desc: 'نشتغل ليل نهار عشان راحتك' }, en: { title: '24/7 Availability', desc: 'We work around the clock for your convenience' } },
  { icon: 'HeartHandshake', ar: { title: 'ضمان الرضا التام', desc: 'ما تطلع إلا وأنت راضٍ، وإلا نعيد الخدمة ببلاش' }, en: { title: 'Satisfaction Guarantee', desc: 'Not happy? We redo it free, no questions asked' } },
];

export const process = [
  { icon: 'CalendarCheck', ar: { title: 'احجز', desc: 'واتساب أو مكالمة، الحجز ياخذ دقائق' }, en: { title: 'Book', desc: 'WhatsApp or call, booking takes minutes' } },
  { icon: 'Search', ar: { title: 'نفحص', desc: 'نشوف الأثاث ونختار طريقة التنظيف المناسبة' }, en: { title: 'Inspect', desc: 'We check the furniture and pick the right method' } },
  { icon: 'Droplets', ar: { title: 'نظف', desc: 'نبدأ التنظيف العميق بالمعدات الاحترافية' }, en: { title: 'Clean', desc: 'Deep cleaning starts with professional equipment' } },
  { icon: 'Wind', ar: { title: 'نجفف', desc: 'تجفيف سريع يمنع العفن والروائح' }, en: { title: 'Dry', desc: 'Fast drying to stop mold and smells' } },
  { icon: 'CheckCircle2', ar: { title: 'نسلم', desc: 'أثاثك نظيف ومعقم وجاهز للاستخدام' }, en: { title: 'Done', desc: 'Your furniture clean, sanitized, ready to use' } },
];

export const stats = [
  { value: 10, suffix: '+', ar: 'سنوات خبرة', en: 'Years Experience' },
  { value: 5000, suffix: '+', ar: 'عميل سعيد', en: 'Happy Customers' },
  { value: 15000, suffix: '+', ar: 'عملية مكتملة', en: 'Jobs Completed' },
  { value: 24, suffix: '/7', ar: 'دعم متواصل', en: 'Support' },
];

export const testimonials = [
  { name: 'أحمد العتيبي', nameEn: 'Ahmad Al-Otaibi', role: { ar: 'صاحب فيلا - مكة المكرمة', en: 'Villa Owner, Makkah' }, rating: 5, portrait: images.portraits[1], ar: 'نظفوا كنب المجلس كأنه جديد تماماً. الفريق محترم وجا في الموعد بالضبط. أنصح فيهم.', en: 'They cleaned the majlis sofa like it was brand new. Respectful team, arrived exactly on time. I recommend them.' },
  { name: 'سارة الدوسري', nameEn: 'Sara Al-Dosari', role: { ar: 'ربة منزل - مكة المكرمة', en: 'Homemaker, Makkah' }, rating: 5, portrait: images.portraits[0], ar: 'جربت شركات كثيرة بس مغسلة أبراج البيت غير. التعقيم بالبخار غيّر ريحة البيت بالكامل. شكراً.', en: 'I tried many companies but Abraj Al Bait Laundry is different. The steam sanitization changed the whole house smell. Thank you.' },
  { name: 'خالد الغامدي', nameEn: 'Khalid Al-Ghamdi', role: { ar: 'مدير مكتب - مكة المكرمة', en: 'Office Manager, Makkah' }, rating: 5, portrait: images.portraits[2], ar: 'تعاقدنا معهم شهرياً لمكتبنا. الالتزام والجودة ممتازين والأسعار معقولة.', en: 'We signed a monthly contract for our office. Great commitment, quality work, fair prices.' },
  { name: 'نورة القحطاني', nameEn: 'Noura Al-Qahtani', role: { ar: 'عميلة - مكة المكرمة', en: 'Customer, Makkah' }, rating: 5, portrait: images.portraits[3], ar: 'وصلوا خلال ساعة من الاتصال. السجاد طلع مذهل، البقع الصعبة اختفت كلها.', en: 'They showed up within an hour. The carpet came out amazing, tough stains completely gone.' },
  { name: 'فهد الشمري', nameEn: 'Fahad Al-Shammari', role: { ar: 'صاحب شقة - مكة المكرمة', en: 'Apartment Owner, Makkah' }, rating: 5, portrait: images.portraits[4], ar: 'المرتبة كانت محتاجة تنظيف عميق. صارت كأنها جديدة. خدمة تستاهل كل ريال.', en: 'The mattress needed deep cleaning. Came out like new. Worth every riyal.' },
  { name: 'منى الحربي', nameEn: 'Mona Al-Harbi', role: { ar: 'عميلة - مكة المكرمة', en: 'Customer, Makkah' }, rating: 5, portrait: images.portraits[5], ar: 'نظفوا الستائر وهي في مكانها ما طلعوها. احترافية عالية وتعامل راقٍ.', en: 'They cleaned the curtains without taking them down. High professionalism, courteous service.' },
];

export const faqs = [
  { ar: { q: 'كم ياخذ وقت تنظيف الكنب؟', a: 'من 30 إلى 60 دقيقة لكل قطعة حسب الحجم ونوع القماش. بعدها 2-4 ساعات تجفيف وتقدر تستخدمه.' }, en: { q: 'How long does sofa cleaning take?', a: '30 to 60 minutes per piece depending on size and fabric. Then 2-4 hours to dry before you can use it.' } },
  { ar: { q: 'المواد آمنة على الأطفال والحيوانات؟', a: 'نعم، نستخدم مواد معتمدة وصديقة للبيئة، آمنة تماماً على الأطفال والحيوانات الأليفة.' }, en: { q: 'Are the cleaning products safe for kids and pets?', a: 'Yes. We use certified, eco-friendly products that are completely safe for children and pets.' } },
  { ar: { q: 'تخدمون في أوقات متأخرة؟', a: 'نعم، خدمتنا 24 ساعة. اتصل أي وقت ونوصلك بأسرع ما يمكن.' }, en: { q: 'Do you work late hours?', a: 'Yes, we are available 24 hours. Call anytime and we will get to you as fast as possible.' } },
  { ar: { q: 'أي أحياء في جدة تغطونها؟', a: 'نغطي كل أحياء جدة: الشاطئ، الروضة، النعيم، السلامة، الأندلس، الحمراء، الزهراء، الواحة وغيرها.' }, en: { q: 'Which Jeddah districts do you cover?', a: 'All of Jeddah: Al-Shati, Al-Rawdah, Al-Naeem, Al-Salamah, Al-Andalus, Al-Hamra, Al-Zahra, Al-Waha, and more.' } },
  { ar: { q: 'في ضمان على الخدمة؟', a: 'نعم، ضمان الرضا التام. إذا ما كنت راضٍ نعيد الخدمة ببلاش بدون أي رسوم.' }, en: { q: 'Is there a guarantee?', a: 'Yes, full satisfaction guarantee. If you are not happy, we redo it free of charge.' } },
  { ar: { q: 'كيف أحجز؟', a: 'واتساب على 966592052728+ أو اتصال مباشر. الفريق يأكد الموعد فوراً.' }, en: { q: 'How do I book?', a: 'WhatsApp +966592052728 or call directly. The team confirms your appointment right away.' } },
  { ar: { q: 'تنظفون الستائر بدون ما تنزلها؟', a: 'نعم، نستخدم تقنيات تخصصية تنظف وتعقم الستائر وهي في مكانها.' }, en: { q: 'Can you clean curtains without taking them down?', a: 'Yes, we use specialized techniques to clean and sanitize curtains in place.' } },
];

export const pricing = [
  {
    name: { ar: 'الباقة الأساسية', en: 'Basic Package' },
    price: 99,
    popular: false,
    features: {
      ar: ['تنظيف كنبة واحدة (3 مقاعد)', 'شفط الغبار وإزالة البقع', 'تعقيم سطحي', 'تجفيف سريع'],
      en: ['One sofa cleaning (3 seats)', 'Vacuum and stain removal', 'Surface sanitization', 'Fast drying'],
    },
  },
  {
    name: { ar: 'الباقة الذهبية', en: 'Gold Package' },
    price: 249,
    popular: true,
    features: {
      ar: ['تنظيف كنب + سجادة', 'تنظيف بالبخار العميق', 'تعقيم كامل بالأشعة فوق البنفسجية', 'إزالة الروائح والبكتيريا', 'تجفيف سريع + ضمان الرضا'],
      en: ['Sofa + carpet cleaning', 'Deep steam cleaning', 'Full UV sanitization', 'Odor and bacteria removal', 'Fast drying + satisfaction guarantee'],
    },
  },
  {
    name: { ar: 'الباقة الملكية', en: 'Royal Package' },
    price: 499,
    popular: false,
    features: {
      ar: ['تنظيف كامل المنزل (كنب + سجاد + ستائر)', 'تنظيف بالبخار والتعقيم الشامل', 'تنظيف المراتب والكنب', 'فريق مخصص ومشرف', 'ضمان الرضا + متابعة مجانية'],
      en: ['Full home cleaning (sofa + carpet + curtains)', 'Steam cleaning and full sanitization', 'Mattress and sofa cleaning', 'Dedicated team and supervisor', 'Satisfaction guarantee + free follow-up'],
    },
  },
];

export const blogPosts = [
  { slug: 'how-to-maintain-sofa', date: '2025-12-15', ar: { title: 'كيف تحافظ على كنبك نظيف بين التنظيفات', excerpt: 'نصائح بسيطة تطيل عمر كنبك وتخليه يبقى نظيف بين مواعيد التنظيف الاحترافية.', content: 'الحفاظ على نظافة الكنب بين التنظيفات الاحترافية أسهل مما تظن. اكنس الكنب مرة في الأسبوع بالمكنسة الكهربائية، ونظف أي بقع فوراً قبل ما تثبت، وقلب الوسائد كل أسبوعين عشان توزع الاستهلاك. تجنب الأكل على الكنب، ولو عندك أطفال أو حيوانات، فكر في غطاء واقي. هذه الخطوات البسيطة تطيل عمر كنبك سنوات.' }, en: { title: 'How to Keep Your Sofa Clean Between Professional Cleanings', excerpt: 'Simple tips to extend your sofa life and keep it fresh between professional visits.', content: 'Keeping your sofa clean between professional visits is easier than you think. Vacuum it once a week, clean spills immediately before they set, and rotate cushions every two weeks to distribute wear. Avoid eating on the sofa, and if you have kids or pets, consider a protective cover. These simple steps add years to your sofa life.' }, img: images.cleaning[0] },
  { slug: 'steam-cleaning-benefits', date: '2025-11-28', ar: { title: 'فوائد التنظيف بالبخار لمنزلك', excerpt: 'ليش التنظيف بالبخار يعتبر أفضل خيار لمنزلك؟ تعرف على الفوائد الصحية والبيئية.', content: 'التنظيف بالبخار يقتل 99.9% من الجراثيم والبكتيريا بدون استخدام كيماويات ضارة. البخار ينفذ في الألياف بعمق ويسحب الأوساخ والدهون المتراكمة. مناسب للأطفال والحيوانات الأليفة لأنه ما يترك بقايا كيميائية. كذلك يوفر الماء لأنه يستخدم كمية قليلة مقارنة بالغسيل التقليدي.' }, en: { title: 'The Benefits of Steam Cleaning for Your Home', excerpt: 'Why steam cleaning is the best choice for your home. Learn the health and environmental benefits.', content: 'Steam cleaning kills 99.9% of germs and bacteria without harsh chemicals. The steam penetrates deep into fibers and pulls out embedded dirt and grease. It is safe for children and pets because it leaves no chemical residue. It also saves water since it uses far less than traditional washing.' }, img: images.cleaning[1] },
  { slug: 'choosing-cleaning-company', date: '2025-10-10', ar: { title: 'كيف تختار شركة تنظيف موثوقة في مكة المكرمة', excerpt: 'مقاييس واضحة تساعدك تختار أفضل شركة تنظيف بدون ما تنصدم.', content: 'اختيار شركة تنظيف موثوقة يحتاج شوية بحث. شوف التقييمات على خرائط جوجل، واسأل عن المواد اللي يستخدمونها هل هي آمنة للأطفال. تأكد إن عندهم ضمان على الخدمة، وإن الفريق مدرّب ومعتمد. السعر الرخيص جداً عادة يكون علامة على جودة ضعيفة. اطلب عرض سعر واضح بكل التفاصيل قبل ما تتفق.' }, en: { title: 'How to Choose a Reliable Cleaning Company in Makkah', excerpt: 'Clear criteria to help you pick the best cleaning company without surprises.', content: 'Choosing a reliable cleaning company takes some research. Check reviews on Google Maps, ask about the products they use and whether they are safe for children. Make sure they offer a service guarantee and that the team is trained and certified. Very low prices usually mean poor quality. Ask for a clear, detailed quote before agreeing.' }, img: images.office[0] },
  { slug: 'mattress-cleaning-importance', date: '2025-09-05', ar: { title: 'ليش تنظيف المراتب مهم لصحتك', excerpt: 'المراتب المتسخة تسبب حساسية ومشاكل تنفس. تعرف كيف تحمي عائلتك.', content: 'المراتب تحتوي على ملايين عث الغبار اللي يسبب الحساسية والربو. تنظيف المرتبة كل 6 أشهر يقلل هذه المخاطر بشكل كبير. البقع والعرق يتراكموا مع الوقت ويخلقوا بيئة للبكتيريا. التنظيف العميق بالبخار يسحب كل هذا ويخلي مرتبتك آمنة وصحية لكل العائلة.' }, en: { title: 'Why Mattress Cleaning Matters for Your Health', excerpt: 'Dirty mattresses cause allergies and breathing problems. Learn how to protect your family.', content: 'Mattresses contain millions of dust mites that cause allergies and asthma. Cleaning your mattress every 6 months reduces these risks significantly. Stains and sweat build up over time and create a breeding ground for bacteria. Deep steam cleaning pulls all of this out and keeps your mattress safe and healthy for the whole family.' }, img: images.sofaVintage },
];

export const serviceAreas = [
  { ar: 'الشاطئ', en: 'Al-Shati' },
  { ar: 'الروضة', en: 'Al-Rawdah' },
  { ar: 'النعيم', en: 'Al-Naeem' },
  { ar: 'السلامة', en: 'Al-Salamah' },
  { ar: 'الأندلس', en: 'Al-Andalus' },
  { ar: 'الحمراء', en: 'Al-Hamra' },
  { ar: 'الزهراء', en: 'Al-Zahra' },
  { ar: 'الواحة', en: 'Al-Waha' },
  { ar: 'الشرفية', en: 'Al-Sharafiyah' },
  { ar: 'المروة', en: 'Al-Marwah' },
  { ar: 'الصفا', en: 'Al-Safa' },
  { ar: 'العزيزية', en: 'Al-Aziziyah' },
];

export const navLinks = [
  { href: '/', ar: 'الرئيسية', en: 'Home' },
  { href: '/about', ar: 'من نحن', en: 'About' },
  { href: '/services', ar: 'الخدمات', en: 'Services' },
  { href: '/gallery', ar: 'المعرض', en: 'Gallery' },
  { href: '/before-after', ar: 'قبل وبعد', en: 'Before & After' },
  { href: '/pricing', ar: 'الأسعار', en: 'Pricing' },
  { href: '/blog', ar: 'المدونة', en: 'Blog' },
  { href: '/contact', ar: 'تواصل معنا', en: 'Contact' },
];
