import React from 'react';
import Prices from '../components/pricing/Prices';
import {NextSeo} from 'next-seo';
import Head from "next/head";

const Pricing = ({text}) => {

    const SEO = {
        title:text[3][0][0],
        description:text[3][0][1],
        openGraph:{
            title:text[3][0][0],
            description:text[3][0][1]
        }
    }

    return (
        <div>
            <NextSeo {...SEO}/>
            <Head>
                <meta name="keywords" content={"lalicat antidetect browser pricing, pricing page"}/>
            </Head>
            <Prices text={text[3][1]} />
        </div>
    );
};

export default Pricing;
