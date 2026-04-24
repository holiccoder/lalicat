import React from 'react';
import {getSitemap} from "../../lib/api";

const Sitemap = () => {
    return null;
};

export const getServerSideProps = async ({ res }) => {

    const getsitemap = await getSitemap('de')

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
       ${getsitemap
        .map((item) => {
            return `
            <url>
              <loc>${item.slug}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>daily</changefreq>
              <priority>1.0</priority>
            </url>
          `;
        })
        .join("")}
    </urlset>
  `;

    res.setHeader('Content-Type', 'text/xml');
    res.write(sitemap);
    res.end();

    return {
        props: {},
    };
};

export default Sitemap;