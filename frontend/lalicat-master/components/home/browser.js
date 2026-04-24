import React from 'react';
import Image from "next/image";
import Image2 from "../../public/images/home/data.png";
import parse from "html-react-parser";
import Image1 from "../../public/images/home/browser.png";

const Browser = ({text}) => {
    return (
        <>
            <div className="max-w-full gradient-bg">
                <div className="max-w-full flex flex-col md:flex-row align-middle md:max-w-[80%] h-fit m-auto">
                    <div className="max-w-full md:max-w-[50%] p-6 pt-6 pl-10">
                        <h1 className="text-3xl p-3 text-3xl font-bold text-white py-6">{parse(text[0][0])}</h1>
                        <div className="p-3 text-white text-lg pb-10">{parse(text[0][1])}</div>
                        <div className="flex flex-col text-white text-lg pl-4 pt-10">
                            <div className="flex flex-col max-w-full md:flex-row">
                                <div>
                                    <div className="font-bold w-64">{parse(text[0][2])}</div>
                                    <div>
                                        28796
                                    </div>
                                </div>
                                <div>
                                    <div className="pl-0 font-bold md:pl-20">{parse(text[0][3])}</div>
                                    <div className="pl-0 md:pl-20">
                                        2068 517
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-full p-2 md:max-w-[40%] md:max-h-5/6 px-10 py-10 flex align-middle flex-col align-middle overflow-hidden m-7">
                        <Image src={Image2} alt="Internet anomymous surfing"/>
                    </div>
                </div>
            </div>
            <div className="max-w-full" style={{color:"#205335"}}>
                <div className="my-1 max-w-full flex flex-col md:flex-row md:max-w-[80%] m-auto md:my-8">
                    <div className="p-1 max-w-full md:max-w-[50%] md:p-6 flex align-middle flex-col align-middle">
                        <Image src={Image1} alt="digital fingerprint parameters"/>
                    </div>
                    <div className="p-1 max-w-full md:max-w-[50%] md:p-6 flex flex-col">
                        <h1 className="text-3xl p-3 text-3xl font-bold">
                            {parse(text[1][0])}
                        </h1>
                        <p className="p-2 text-lg">
                            {parse(text[1][1])}
                        </p>
                        <p className="p-2 text-lg">
                            {parse(text[1][2])}
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Browser;