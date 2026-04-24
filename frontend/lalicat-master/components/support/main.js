import React from 'react';
import parse from "html-react-parser";
import Headsection from "../headsection";

const MainContent = ({article}) => {
    return (
            <div className="my-5 max-w-full flex flex-col items-center justify-center">
                {article &&
                    <div className={'max-w-full'}>
                        <Headsection title={parse(article.title)} keywords={article.keywords} description={article.description} opImgURL={article.featured_image}></Headsection>
                        <div className="max-w-screen-xl m-auto rounded-lg px-9 pb-9 text-black">

                            <h1 className="text-3xl text-center font-bold mb-10" style={{color:"#205335"}}>{parse(article.title)}</h1>

                            <div className="leading-7">
                                {parse(article.content)}
                            </div>
                        </div>
                    </div>}
            </div>
    );
};

export default MainContent;
