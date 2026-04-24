import React from 'react';
import SupportIndexTemplate from "../components/support/supportIndexTemplate"
import {getSupportIndex, getDocsSidebar} from "../lib/api"
import {NextSeo} from "next-seo";

export const getStaticProps = async(context) => {
    let article
    let sidebar

    if(context.locale !== 'en'){
        article = await getSupportIndex('lalicat-api', context.locale)
        sidebar = await getDocsSidebar(context.locale)
    }else{
        article = await getSupportIndex('lalicat-api', context.locale)
        sidebar = await getDocsSidebar()
    }

    return {
        props:{
            article, sidebar
        },
        revalidate:10
    }
}

const LalicatApi = ({article, sidebar}) => {
    return (
        <div>
            <NextSeo title={article.title} description={article.description}/>
            <SupportIndexTemplate article={article} sidebar={sidebar}/>
        </div>
    );
};

export default LalicatApi;
