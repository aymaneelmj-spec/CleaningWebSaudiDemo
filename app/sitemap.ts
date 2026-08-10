import { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
<<<<<<< HEAD
  const base = 'https://abrajbaitlaundry.sa';
=======
  const base = site.domain;
>>>>>>> 10f7d35 (Initial commit)
  const routes = [
    '', '/about', '/services', '/gallery', '/before-after', '/pricing',
    '/faq', '/blog', '/testimonials', '/contact', '/privacy', '/terms',
  ];
  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.7,
  }));
}
