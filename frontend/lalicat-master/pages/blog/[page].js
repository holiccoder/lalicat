import React, {useEffect, useState} from "react";
import BlogList from "../../components/blog/list";
import Pagination from "../../components/blog/pagination"
import {getCurrentPagePosts} from "../../lib/api";
import nextConfig from "../../next.config.mjs";
import {NextSeo} from "next-seo";

export const getStaticPaths = async ({locales}) => {
    const posts = await getCurrentPagePosts()
    const page_count = posts.page_count

    let paths = []
    if(parseInt(page_count) > 1){
        for(let i = 1; i <= parseInt(page_count); i++){
            nextConfig.i18n.locales.map(item => {
                paths.push({params:{page:i.toString()}, locale:item})
            })
        }
    }

    return {
        paths,
        fallback:false
    }
}

export const getStaticProps = async (context) => {
    const page_num = context.params.page
    let posts
    if(context.locale){
        posts = await getCurrentPagePosts( context.locale, page_num)
    }

    return {
        props:{
            posts
        }
    }
}

const Blog = ({text, posts}) => {
    const SEO = {
        title: text[9][0],
        description:text[9][2],
        openGraph:{
            title:text[9][0],
            description: text[9][2]
        }
    }

    return (
        <div className="my-48">
            <NextSeo {...SEO}/>
            {
                posts?.posts && (
                    <div className="flex flex-wrap max-w-[85%] m-auto">
                        {posts?.posts.map((post, id) => (
                            <div className="w-full md:w-1/3 lg:w-1/4 px-2" key={id}>
                                <BlogList post={post}/>
                            </div>
                        ))}
                    </div>
                )
            }

            <Pagination page_count={posts.page_count}/>
        </div>
    )
}

export default Blog