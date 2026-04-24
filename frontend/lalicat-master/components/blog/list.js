import React, {useEffect, useState} from "react";
import parse from 'html-react-parser'
import {getAuthor, getFeaturedImage} from "../../lib/api";
import Link from "next/link";
import {faCalendar, faUser} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const BlogList = ({post}) => {

    return (
        <>
        {post && <div className="max-w-[370px] mx-auto mb-10 h-[360px] overflow-hidden shadow-2xl rounded-lg">
                        <div className="rounded overflow-hidden">
                            <img src={post.featured_image ? post.featured_image : '/aeeiee-logo.png'} alt="image" className="w-full max-h-full h-[200px]" />
                        </div>
                        <div className="flex flex-col p-4 overflow-hidden">
                            <div className="flex py-1"><FontAwesomeIcon icon={faCalendar}></FontAwesomeIcon><span className="px-2">{new Date(post.date).toDateString()}</span>
                                <FontAwesomeIcon icon={faUser}></FontAwesomeIcon><span className="px-2">{post.author}</span>
                            </div>
                            <h3 className="py-1">
                                <Link href={`/${post.slug}`}><a className="font-semibold text-lg sm:text-2xl lg:text-xl xl:text-xl mb-1 inline-block text-dark hover:text-primary">
                                    {parse(post.title)}</a>
                                </Link>
                            </h3>
                        </div>
        </div>}
        </>
    )

}

export default BlogList