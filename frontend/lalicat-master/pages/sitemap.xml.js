import React from 'react';

const Sitemap = () => {
    const currentDateTime = new Date().toISOString()
    return (
        <div id="main">
            <h1>XML Sitemaps</h1><p>
            <a href="https://www.lalicat.com/sitemap.xml">sitemaps index</a>
           </p>
            <p>This XML Sitemap Index file contains 9 sitemaps.</p>
            <div id="sitemaps">
                <div className="loc">URL</div>
                <div className="lastmod">Last update</div>
                <ul>
                    <li>
                        <span className="loc"><a href="https://www.lalicat.com/sitemaps/en-sitemap.xml">https://www.lalicat.com/sitemaps/en-sitemap.xml</a></span>
                        <span className="lastmod">{currentDateTime}</span>
                    </li>
                    <li>
                        <span className="loc"><a href="https://www.lalicat.com/sitemaps/fr-sitemap.xml">https://www.lalicat.com/sitemaps/fr-sitemap.xml</a></span>
                        <span className="lastmod">{currentDateTime}</span>
                    </li>
                    <li>
                        <span className="loc"><a href="https://www.lalicat.com/sitemaps/de-sitemap.xml">https://www.lalicat.com/sitemaps/de-sitemap.xml</a></span>
                        <span className="lastmod">{currentDateTime}</span>
                    </li>
                    <li>
                        <span className="loc"><a href="https://www.lalicat.com/sitemaps/it-sitemap.xml">https://www.lalicat.com/sitemaps/it-sitemap.xml</a></span>
                        <span className="lastmod">{currentDateTime}</span>
                    </li>
                    <li>
                        <span className="loc"><a href="https://www.lalicat.com/sitemaps/ja-sitemap.xml">https://www.lalicat.com/sitemaps/ja-sitemap.xml</a></span>
                        <span className="lastmod">{currentDateTime}</span>
                    </li>
                    <li>
                        <span className="loc"><a href="https://www.lalicat.com/sitemaps/pt-sitemap.xml">https://www.lalicat.com/sitemaps/pt-sitemap.xml</a></span>
                        <span className="lastmod">{currentDateTime}</span>
                    </li>
                    <li>
                        <span className="loc"><a href="https://www.lalicat.com/sitemaps/ru-sitemap.xml">https://www.lalicat.com/sitemaps/ru-sitemap.xml</a></span>
                        <span className="lastmod">{currentDateTime}</span>
                    </li>
                    <li>
                        <span className="loc"><a href="https://www.lalicat.com/sitemaps/es-sitemap.xml">https://www.lalicat.com/sitemaps/es-sitemap.xml</a></span>
                        <span className="lastmod">{currentDateTime}</span>
                    </li>
                    <li>
                        <span className="loc"><a href="https://www.lalicat.com/sitemaps/vi-sitemap.xml">https://www.lalicat.com/sitemaps/vi-sitemap.xml</a></span>
                        <span className="lastmod">{currentDateTime}</span>
                    </li>
                </ul>
            </div>
            <style jsx>{`
               #main {
                    margin: 0 auto;
                    max-width: 55rem;
                    padding: 1.5rem;
                    width: 100%;
                }

                h1 {
                color: #23282d;
                font-weight: bold;
                font-size: 20px;
                margin: 20px 0;
               }
               
               #sitemaps {
    width: 100%;
    box-shadow: 0 0 0 1px rgba(224, 224, 224, 0.5),0 1px 2px #a8a8a8;
    background: #fff;
    margin-top: 20px;
    display: inline-block;
}

#sitemaps .loc {
    width: 70%;
}

#sitemaps li  a {
   color: rgb(0, 135, 190);
   text-decoration: none;
}

#sitemaps .loc, #sitemaps .lastmod {
    font-weight: bold;
    display: inline-block;
    border-bottom: 1px solid rgba(224, 224, 224, 1);
    padding: 15px;
}

#sitemaps .lastmod {
    width: 30%;
    padding-left: 0;
}

#sitemaps ul {
    margin: 10px 0;
    padding: 0;
}

#sitemaps li {
    list-style: none;
    padding: 10px 15px;
}
            
             `}
            </style>
        </div>
    );
};

export default Sitemap;
