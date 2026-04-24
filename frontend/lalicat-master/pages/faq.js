import React from 'react';
import SupportIndexTemplate from "../components/support/supportIndexTemplate"
import {getSupportIndex, getDocsSidebar} from "../lib/api"
import {NextSeo} from 'next-seo';

export const getStaticProps = async(context) => {
    let article
    let sidebar

    const current_file_name = __filename.slice(__dirname.length + 1, -3)

    if(context.locale !== 'en'){
        article = await getSupportIndex(current_file_name, context.locale)
        sidebar = await getDocsSidebar(context.locale)
    }

    article = await getSupportIndex(current_file_name)
    sidebar = await getDocsSidebar()

    return {
        props:{
            article, sidebar
        },
        revalidate:10
    }
}

const FAQ = ({article, sidebar}) => {
    return (
        <div>
            <NextSeo title={article.title} description={article.description}/>
            <SupportIndexTemplate article={article} sidebar={sidebar}/>
        </div>
    );
};

export default FAQ;