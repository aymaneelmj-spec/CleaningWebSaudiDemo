import { MetadataRoute } from 'next';
import { site } from '@/lib/site';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: '*', allow: '/' },
<<<<<<< HEAD
    sitemap: 'https://abrajbaitlaundry.sa/sitemap.xml',
=======
    sitemap: `${site.domain}/sitemap.xml`,
>>>>>>> 10f7d35 (Initial commit)
  };
}
