import React, {useEffect, useState} from "react";
import {getSinglePostOrPage, getAllSlugs, getDocsSidebar} from "../lib/api";
import PostTemplate from "../components/blog/post"
import PageTemplate from "../components/blog/page"
import { useRouter } from 'next/router'
import SupportTemplate from "../components/support/supportTemplate";
import parse from "html-react-parser";
import SupportIndexTemplate from "../components/support/supportIndexTemplate";
import {NextSeo} from 'next-seo'
import nextConfig from "../next.config.mjs"

export const getStaticPaths = async () => {
    const slugs = await getAllSlugs()
    const paths = slugs.map(item => {
        return {
            params:{slug:item.slug}
        }
    })

    return {
        paths,
        fallback: "blocking"
    }
}

export const getStaticProps = async (context) => {
    const slug = context.params.slug
    let article
    let sidebar

    if(context.locale){
        article = await getSinglePostOrPage(slug, context.locale)
        sidebar = await getDocsSidebar(context.locale)
    }

    const notFound = !article?.title

    return {
        props:{
           article, sidebar
        },
        revalidate: 200,
        notFound
    }
}

const Post = ({article, sidebar}) => {

    return (
        <>
            {article.post_type === 'post' ? <PostTemplate article={article}/> : article.post_type === 'support' ? <SupportTemplate article={article} sidebar={sidebar}/> : <PageTemplate article={article}/>}
        </>
    )
}

export default Post