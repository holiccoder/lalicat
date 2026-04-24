import React from 'react';
import parse from "html-react-parser";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faUser, faForward, faBackward} from "@fortawesome/free-solid-svg-icons";
import {EmailShareButton,
        EmailIcon,
        FacebookShareButton,
        FacebookIcon,
        TwitterShareButton,
TwitterIcon, PinterestIcon, PinterestShareButton, RedditIcon, RedditShareButton} from "react-share";
import {NextSeo} from "next-seo";

const PostTemplate = ({article}) => {
    return (
        <div className="my-1 max-w-full flex flex-col items-center justify-center md:mt-32 md:mb-10">
            <NextSeo title={article.title} description={article.description}/>
            {article &&
                <div>
                    <div className="max-w-full md:max-w-[50%] m-auto rounded-lg shadow-lg text-black">
                        <h1 className="mt-0 text-3xl font-bold text-center md:mt-8 p-6" style={{color:"#205335"}}>{parse(article.title)}</h1>
                        <div className={'p-6'}>
                            <div className="flex items-center justify-center p-3">
                                <FontAwesomeIcon icon={faCalendar}/><span className="px-2">{new Date(article.date).toDateString()}</span>
                                <FontAwesomeIcon icon={faUser}/><span className="px-2">{article.author}</span>
                            </div>
                            <div className="leading-8">
                                {parse(article.content)}
                            </div>
                            <div className="w-full flex my-2">
                                {article.next_post_link.title && <div className={`${article.previous_post_link.title?"w-1/2":"w-full"} border border-gray-200 mr-2 p-2 rounded`}>
                                    <FontAwesomeIcon icon={faBackward} color="gray"/>
                                    <a href={article.next_post_link.link} className="pl-2">{article.next_post_link.title}</a>
                                </div>}
                                {article.previous_post_link.title && <div className={`${article.next_post_link.title?"w-1/2":"w-full"} border border-gray-200 mr-2 p-2 rounded text-right`}>
                                    <a href={article.previous_post_link.link} className="pr-2">{article.previous_post_link.title}</a>
                                    <FontAwesomeIcon icon={faForward} color="gray"/>
                                </div>}
                            </div>
                            <div className="pt-3">
                                <FacebookShareButton url={typeof window !== "undefined" && window.location.href}>
                                    <FacebookIcon size={45} round={true}></FacebookIcon>
                                </FacebookShareButton>
                                <TwitterShareButton url={typeof window !== "undefined" && window.location.href}>
                                    <TwitterIcon size={45} round={true}></TwitterIcon>
                                </TwitterShareButton>
                                <PinterestShareButton url={typeof window !== "undefined" && window.location.href}>
                                    <PinterestIcon size={45} round={true}></PinterestIcon>
                                </PinterestShareButton>
                                <RedditShareButton url={typeof window !== "undefined" && window.location.href}>
                                    <RedditIcon size={45} round={true}></RedditIcon>
                                </RedditShareButton>
                                <EmailShareButton url={typeof window !== "undefined" && window.location.href}>
                                    <EmailIcon size={45} round={true}></EmailIcon>
                                </EmailShareButton>
                            </div>
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default PostTemplate;