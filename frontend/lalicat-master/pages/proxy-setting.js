import React from 'react';
import SupportIndexTemplate from "../components/support/supportIndexTemplate"
import {getSupportIndex, getDocsSidebar} from "../lib/api"
import {NextSeo} from "next-seo";
import Head from 'next/head'

export const getStaticProps = async(context) => {

    const article = await getSupportIndex("proxy-setting", context.locale)
    const sidebar = await getDocsSidebar(context.locale)

    return {
        props:{
            article, sidebar
        },
        revalidate:10
    }
}

const ProxySetting = ({article, sidebar}) => {
    return (
        <div>
            <NextSeo title={article.title} description={article.description}/>
            <Head>
                <meta name="keywords" content={article.keywords}/>
            </Head>
            <SupportIndexTemplate article={article} sidebar={sidebar}/>
        </div>
    );
};

export default ProxySetting;