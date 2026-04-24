import React from 'react';
import Sidebar from "./sidebar";
import MainContent from "./main";
import {NextSeo} from "next-seo";
import Head from "next/head";


const supportTemplate = ({article, sidebar}) => {
    return (
        <div className="my-4 md:my-40 w-full flex flex-col">
             <NextSeo title={article.title} description={article.description}/>
             <Head>
                <meta name="keywords" content={article.keywords}/>
            </Head>
            <div className="md:flex">
                <div className="w-full md:w-1/4">
                    <Sidebar sidebar={sidebar}/>
                </div>
                <div className="w-full md:w-3/4">
                    <div className="max-w-full">
                        <MainContent article={article}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default supportTemplate;
