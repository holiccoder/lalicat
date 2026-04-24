import React from 'react';
import Breadcrumb from "../common/breadcrumb";
import Headsection from "../headsection";
import parse from "html-react-parser";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCalendar, faUser} from "@fortawesome/free-solid-svg-icons";
import {NextSeo} from "next-seo";

const PageTemplate = ({article}) => {

    return (
        <div className="my-5 max-w-full flex flex-col items-center justify-center md:my-40 md:mb-40">
            <NextSeo title={article.title} description={article.description}/>
            {article &&
                <div className={'max-w-full md:max-w-[50%]'}>
                    <div className="max-w-screen-xl m-auto rounded-lg px-9 pb-9 shadow-2xl text-black">

                        <h1 className="text-3xl text-center font-bold py-14" style={{color:"#205335"}}>{parse(article.title)}</h1>

                        <div className="leading-7">
                            {parse(article.content)}
                        </div>
                    </div>
                </div>}
        </div>
    );
};

export default PageTemplate;
