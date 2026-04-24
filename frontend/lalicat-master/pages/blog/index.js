import React, {useEffect, useState} from "react";
import BlogList from "../../components/blog/list";
import Pagination from "../../components/blog/pagination"
import {NextSeo} from "next-seo"
import {getCurrentPagePosts, getDocsSidebar, getSinglePostOrPage} from "../../lib/api";

export const getStaticProps = async ({locale}) => {
    let posts

    if(locale){
        posts = await getCurrentPagePosts(locale)
    }

    return {
        props:{
            posts
        },
        revalidate:10
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
        <div className="mt-48 mb-32">
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