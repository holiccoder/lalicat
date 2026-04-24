import Knowledge from "../components/home/knowledge";
import HomeSwiper from "../components/home/swiper";
import Features from "../components/home/features";
import UseCases from "../components/home/usecases";
import MobileHero from "../components/home/mobilehero";
import Browser from "../components/home/browser"
import { NextSeo } from 'next-seo';
import Head from 'next/head'
import {getRecentPosts} from "../lib/api";
import RecentBlogs from "../components/home/RecentBlogs";

export const getStaticProps = async ({locale}) => {
    let posts

    if(locale){
        posts = await getRecentPosts(locale)
    }

    return {
        props:{
            posts
        },
        revalidate:10
    }
}


const Home = ({text, posts}) => {

    return (
        <>
            <NextSeo title={text[1][0][0]} description={text[1][0][2]}/>
            <Head>
                <meta name={"keywords"} content={text[1][0][1]}/>
            </Head>
            <div className="hidden md:block w-full home-swiper-bg">
                <div className="wave-bg">
                    <HomeSwiper text={text[1][1]}/>
                </div>
            </div>
            <div className="block md:hidden w-full home-swiper-bg">
                <div className="wave-bg">
                    <MobileHero/>
                </div>
            </div>

            <Knowledge text={text[1][2]}/>
            <Features text={text[1][3]}/>
            <UseCases text={text[1][4]}/>
            <Browser text={text[1][5]}/>
            <h1 className="w-full text-center uppercase text-6xl font-bold text-green-900 my-10">Recent Posts</h1>
            <RecentBlogs posts={posts}/>
        </>
    )
}

export default Home
