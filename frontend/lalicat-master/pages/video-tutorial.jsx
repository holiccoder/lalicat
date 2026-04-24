import React from 'react';
import SupportIndexTemplate from "../components/support/supportIndexTemplate"
import {getSupportIndex, getDocsSidebar} from "../lib/api"
import {NextSeo} from "next-seo";

export const getStaticProps = async(context) => {
    let article
    let sidebar

    if(context.locale){
        article = await getSupportIndex('video-tutorial', context.locale)
        sidebar = await getDocsSidebar(context.locale)
    }

    return {
        props:{
            article, sidebar
        },
        revalidate:10
    }
}

const VideoTutorial = ({article, sidebar}) => {
    return (
        <div>
            <NextSeo title={article.title} description={article.description}/>
            <SupportIndexTemplate article={article} sidebar={sidebar}/>
        </div>
    );
};

export default VideoTutorial;