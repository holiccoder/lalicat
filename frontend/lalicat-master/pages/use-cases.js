import React from 'react';
import UseCases from "../components/usecases/use-cases";
import {NextSeo} from 'next-seo';
import Head from 'next/head'

const useCases = ({text}) => {

    const SEO = {
        title:text[2][0][0],
        description:text[2][0][2],
        openGraph:{
            title:text[2][0][0],
            description:text[2][0][1]
        }
    }

    return (
        <div>
            <NextSeo {...SEO}/>
            <Head>
                <meta name="keywords" content={text[2][0][1]}/>
            </Head>
            <UseCases text={text[2][1]}/>
        </div>
    );
};

export default useCases;


