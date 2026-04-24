import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircleCheck, faCircleXmark} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import parse from "html-react-parser"

const Prices = ({text}) => {

    return (
        <div className="mt-8 pricing text-center md:mt-44 mb-20 text-green-900">
            <h1 className="uppercase text-6xl font-bold">{text[0]}</h1>
            {parse(text[1])}
            <div className="w-full md:max-w-[85%] m-auto p-0 md:p-5 rounded-2xl shadow-2xl">
                <div className="flex flex-col w-full">
                    <div className="p-0 md:p-2">
                        <div className="flex flex-col md:flex-row gap-2">
                            {text[2].map((item, index) => (
                                <div className="flex-1 max-w-full" key={index}>
                                    <div className="align-top" style={{padding:"32px 24px", border:"1px solid #e3e5ec"}}>
                                        <div className="flex flex-col justify-between align-middle" style={{minHeight:350}}>
                                            <h1 className={'text-4xl font-bold uppercase'}>{item[0]}</h1>
                                            <div className={'max-w-full'}>{item[1]}</div>
                                            <div className="relative">
                                                <span className={'absolute'} style={{top:0, left:"20%"}}>$</span>
                                                <div className={'text-5xl bold'}>{item[2]}</div>
                                                <div style={{fontSize:14}}>{item[3]}</div>
                                            </div>
                                            <div className="flex justify-center">
                                                <button className="uppercase bg-green-900 p-3 rounded-2xl w-full text-white font-bold text-md"><Link href="/download"><a>{item[4]}</a></Link></button>
                                            </div>
                                            <div className="text-xs text-red-800 leading-tight">
                                                <div>{parse(item[6][0])}</div>
                                                <div>{parse(item[6][1])}</div>
                                                <div>{parse(item[6][2])}</div>
                                            </div>
                                        </div>
                                    </div>
                                        {item[5].map((item, index) => (
                                            <div className="max-w-full text-left bg-gray-200 p-3">
                                                {item.includes('.') ? <FontAwesomeIcon icon={faCircleXmark} className="pr-2 text-red-600"></FontAwesomeIcon> : <FontAwesomeIcon icon={faCircleCheck} className="pr-2"></FontAwesomeIcon>}
                                                {item}
                                            </div>
                                        ))}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="max-w-[100%]">
                    <h1 className={"text-center text-4xl font-bold my-6 pt-10 uppercase"}>{text[3]}</h1>
                    <div className="flex flex-col md:flex-row flex-wrap justify-start">
                        {text[4].map((item,index) => (
                            <div className={'flex w-full text-left md:w-1/3 justify-start items-center leading-5 p-5'}><FontAwesomeIcon icon={faCircleCheck} className={'pr-2'}/><span>{item}</span></div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Prices;