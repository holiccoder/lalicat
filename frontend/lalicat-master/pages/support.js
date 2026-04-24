import React from 'react';
import Search from "../components/common/search";
import Sidebar from "../components/support/sidebar";
import Card from "../components/support/card";
import {getCurrentPagePosts, getDocsSidebar, getSupportIndex} from "../lib/api";
import {NextSeo} from 'next-seo';
import Head from 'next/head'

export const getStaticProps = async (context) => {
    let sidebar

    if(context.locale !== "en"){
        sidebar = await getDocsSidebar(context.locale)
    }else{
        sidebar = await getDocsSidebar()
    }

    return {
        props:{
            sidebar
        },
        revalidate:300
    }
}

const Support = ({sidebar}) => {
    const SEO = {
        title:'lalicat fingerprint browser support page',
        description:'antidetect browser, multi-login browser multi-login',
        openGraph:{
            title:'lalicat fingerprint browser support page',
            description:'antidetect browser, multi-login browser multi-login'
        }
    }

    return (
        <>
            <NextSeo {...SEO}/>
            <Head>
                <meta name="keywords" content="lalicat anitdetect browser, support page"/>
            </Head>
            <div className="pt-0 max-w-full flex justify-center md:pt-40 pb-10 mb-10 bg-green-900">
                <h1 className="text-white text-4xl uppercase">Support</h1>
            </div>

            <div className="max-w-full md:flex md:gap-2.5">
                <div className="w-full md:w-1/4">
                    <Sidebar sidebar={sidebar}/>
                </div>
                <div className="w-full md:w-3/4 md:grid md:grid-cols-3 h-fit p-4">
                    {sidebar && sidebar.map((item,index) => (<Card key={index} menu={item}/>))}
                </div>
            </div>
        </>
    );
};

export default Support;
