import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload,faPhone} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";

const FreeTrial = ({text}) => {
    return (
        <div className="mt-0 max-w-full md:mt-10">
            <div className="max-w-full md:max-w-[75%] m-auto border flex flex-col md:flex-row border-gray-300 p-3 rounded-lg mb-2">
                <div className="flex-1 flex flex-col justify-center text-green-900">
                    <h1 className="uppercase text-5xl text-center mb-2">
                        {text[0]}
                    </h1>
                    <p className="text-center">{text[1]}</p>
                    <p className="text-center">{text[2]}</p>
                    <div className="flex justify-center my-3">
                        <div className="flex">
                            <Link href="https://v.lalicat.xyz/down/Lalimao_setup.exe">
                                <button className="deepbtn"><FontAwesomeIcon icon={faDownload} size="sm"/><span
                                    className="pl-2 text-sm uppercase">{text[3]}</span>
                                </button>
                            </Link>

                            <Link href="/contact-us">
                                <button className="deepbtn"><FontAwesomeIcon icon={faPhone} size="sm"/><span
                                    className="pl-2 text-sm uppercase">{text[4]}</span></button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <img src="/images/common/screenshot-lalicat-browser.jpg" className="max-w-full"/>
                </div>
            </div>
        </div>
    );
};

export default FreeTrial;