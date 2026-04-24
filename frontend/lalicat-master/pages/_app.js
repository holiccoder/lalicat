import '../styles/globals.css'
import Layout from '../components/layout'
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/700.css";
import * as gtag from '../lib/analytics'
import {useRouter} from "next/router";
import { useEffect } from 'react';
import Script from 'next/script'
import en from '../locales/en'
import fr from '../locales/fr'
import de from '../locales/de'
import it from '../locales/it'
import es from '../locales/es'
import pt from '../locales/pt'
import ru from '../locales/ru'
import jp from '../locales/jp'
import vi from '../locales/vi'
import SEO from '../next-seo.config'
import { DefaultSeo } from 'next-seo';
import Head from "next/head";

function MyApp({ Component, pageProps, ...appProps }){
    const router = useRouter()
    const {locale, locales} = router
    let t
    let country
    const localFiles = [en, fr, de, ru, vi, jp, es, pt, it]
    switch(locale){
        case 'fr':
            country = 'France'
            break
        case 'ja':
            country = 'Japan'
            break
        case 'ru':
            country = 'Russia'
            break
        case "de":
            country = 'Germany'
            break
        case 'es':
            country = 'Spain'
            break
        case 'pt':
            country = 'Portugal'
            break
        case 'it':
            country = 'italy'
            break
        default:
            country = null
    }

    locales.map((item, index) => {
          if(locale === item){
               t = localFiles[index]
          }
    })

    useEffect(() => {
        const handleRouteChange = (url) => {
          gtag.pageview(url)
        }

        router.events.on('routeChangeComplete', handleRouteChange)
        return () => {
          router.events.off('routeChangeComplete', handleRouteChange)
        }
      }, [router.events])

    const getContent = () => {
        if ([`/sitemap.xml`,
            '/sitemaps/en-sitemap.xml',
            '/sitemaps/fr-sitemap.xml',
            '/sitemaps/de-sitemap.xml',
            '/sitemaps/ja-sitemap.xml',
            '/sitemaps/ru-sitemap.xml',
            '/sitemaps/es-sitemap.xml',
            '/sitemaps/pt-sitemap.xml',
            '/sitemaps/it-sitemap.xml',
            '/sitemaps/vi-sitemap.xml'
        ].includes(appProps.router.pathname))
            return <Component {...pageProps} />;

        return (
            <Layout text={t}>
                <DefaultSeo {...SEO} />
                <Head>
                    {country && <meta name="geo.placename" content={country}/>}
                </Head>
      <Script strategy="afterInteractive" src={`https://www.googletagmanager.com/gtag/js?id=${gtag.GA_TRACKING_ID}`}/>
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${gtag.GA_TRACKING_ID}', {
              page_path: window.location.pathname,
            });
          `,
        }}
      />
                <Component text={t} {...pageProps} />{" "}
            </Layout>
        );
    };

   return getContent()
}

export default MyApp
