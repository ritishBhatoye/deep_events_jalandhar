import { SitemapStream, streamToPromise } from 'sitemap';
import { createWriteStream } from 'fs';
import { Readable } from 'stream';

const siteUrl = 'https://www.deepcateringandevents.com';

const links = [
  { url: '/', changefreq: 'weekly', priority: 1 },
  { url: '/about', changefreq: 'monthly', priority: 0.8 },
  { url: '/services', changefreq: 'weekly', priority: 0.9 },
  { url: '/gallery', changefreq: 'weekly', priority: 0.7 },
  { url: '/contact', changefreq: 'monthly', priority: 0.8 },
  { url: '/booknow', changefreq: 'weekly', priority: 0.9 },
];

const stream = new SitemapStream({ hostname: siteUrl });

(async () => {
  const xml = await streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
    data.toString()
  );

  createWriteStream('./dist/sitemap.xml').write(xml);
  console.log('Sitemap generated successfully!');
})();