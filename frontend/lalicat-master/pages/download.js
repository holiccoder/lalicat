import React from 'react';
import Banners from "../components/download/banners";
import Dcard from "../components/download/dcard";
import {NextSeo} from 'next-seo';
import parse from 'html-react-parser'
import {getReleases} from "../lib/api";
import Head from "next/head";

export const getStaticProps = async () =>
{
    let releases = await getReleases()
    return {
        props:{
            latest:releases.posts[0]
        },
        revalidate:10
    }
}

const Download = ({text, latest}) => {
    const SEO = {
        title:text[8][0][0],
        description:text[8][0][1],
        openGraph:{
            title:text[8][0][0],
            description:text[8][0][1]
        }
    }

    return (
        <div className="max-w-full my-16">
            <Head>
                <meta http-equiv="refresh" content="0; url=https://v.lalicat.xyz/down/Lalimao_setup.exe" />
            </Head>
            <NextSeo {...SEO}/>
            <h1 className="text-center text-4xl pt-20">
                {text[8][1]}
            </h1>
            <div className="w-full p-0 md:max-w-[85%] text-center m-auto flex flex-col justify-center md:p-10">
                {parse(text[8][2])}
                {parse(text[8][3])}
                <Banners/>
                <Dcard text={text[8][4]} latest={latest}/>
            </div>
        </div>
    );
};

export default Download;