import React from 'react';
import Image from "next/image"
import Image1 from "../../public/images/home/usecases/e-commerce-660.400.2.jpg"
import Image2 from "../../public/images/home/usecases/SMM-660.400.jpg"
import Image3 from "../../public/images/home/usecases/Affiliate-Marketing-660.jpg"
import Image4 from "../../public/images/home/usecases/ads-agency-660.400-3.jpg"
import Image5 from "../../public/images/home/usecases/Investigation-660.jpg"
import Image6 from "../../public/images/home/usecases/Traffic-arbitrage-600.jpg"
import Image7 from "../../public/images/home/usecases/Betting-660.jpg"
import Image8 from "../../public/images/home/usecases/Ticketing-660.jpg"
import Link from "next/link";
import parse from "html-react-parser";

const UseCases = ({text}) => {
    return (
        <div className="mt-5 pricing text-center md:mt-44 mb-20">
            <h1 className="uppercase text-6xl font-bold text-green-900">{text[0]}</h1>
            {parse(text[1])}
            <div className={'max-w-full'}>
                <div className="max-w-full useinner md:max-w-[80%] m-auto p-2 md:p-8 rounded-lg flex flex-col md:flex-row flex-wrap">
                    <div className="max-w-full casecard md:max-w-[23%] rounded-xl shadow-lg">
                        <div className="caseinner h-full flex flex-col justify-between">
                            <div>
                                <div className="text-white flex justify-center">
                                    <Image src={Image1} className="rounded-tl-xl rounded-tr-xl" alt="E-commerce"></Image>
                                </div>
                                <div className="text-2xl font-semibold text-white py-3"
                                     style={{color: '#205335'}}>{text[2][0][0]}
                                </div>
                                <p className={"text-white text-lg p-3 text-left"} style={{color: '#205335'}}>{text[2][0][1]}</p>
                            </div>
                            <div className={'flex justify-center'}>
                                <button className={'deepbtn uppercase my-2'}><Link href="e-commerce"><a>{text[2][8]}</a></Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-full casecard md:max-w-[23%] rounded-xl shadow-lg">
                        <div className="caseinner h-full flex flex-col justify-between">
                            <div>
                                <div className="text-white flex justify-center">
                                    <Image src={Image2} className="rounded-tl-xl rounded-tr-xl" alt="Media Marketing"></Image>
                                </div>
                                <div className="text-2xl font-semibold text-white py-3" style={{color: '#205335'}}>{text[2][1][0]}</div>
                                <p className={"text-white text-lg p-3 text-left"} style={{color: '#205335'}}>{text[2][1][1]}</p>
                            </div>
                            <div className={'flex justify-center'}>
                                <button className={'deepbtn uppercase my-2'}><Link href="/social-media-marketing"><a>{text[2][8]}</a></Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-full casecard md:max-w-[23%] rounded-xl shadow-lg">
                        <div className="caseinner h-full flex flex-col justify-between">
                            <div>
                                <div className="text-white flex justify-center">
                                    <Image src={Image3} className="rounded-tl-xl rounded-tr-xl" alt="Affiliate Marketing"></Image>
                                </div>
                                <div className="text-2xl font-semibold text-white py-3" style={{color: '#205335'}}>{text[2][2][0]}</div>
                                <p className={"text-white text-lg p-3 text-left"} style={{color: '#205335'}}>{text[2][2][1]}</p>
                            </div>
                            <div className={'flex justify-center'}>
                                <button className={'deepbtn uppercase my-2'}><Link href="/affiliate-marketing"><a>{text[2][8]}</a></Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-full casecard md:max-w-[23%] rounded-xl shadow-lg">
                        <div className="caseinner h-full flex flex-col justify-between">
                            <div>
                                <div className="text-white flex justify-center">
                                    <Image src={Image4} className="rounded-tl-xl rounded-tr-xl" alt="ads agency"></Image>
                                </div>
                                <div className="text-2xl font-semibold text-white py-3" style={{color: '#205335'}}>{text[2][3][0]}</div>
                                <p className={"text-white text-lg p-3 text-left"} style={{color: '#205335'}}>{text[2][3][1]}</p>
                            </div>
                            <div className={'flex justify-center'}>
                                <button className={'deepbtn uppercase my-2'}><Link href="/ads-agency"><a>{text[2][8]}</a></Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-full casecard md:max-w-[23%] rounded-xl shadow-lg">
                        <div className="caseinner h-full flex flex-col justify-between">
                            <div>
                                <div className="text-white flex justify-center">
                                    <Image src={Image5} className="rounded-tl-xl rounded-tr-xl" alt="Online Survey"></Image>
                                </div>
                                <div className="text-2xl text-white py-3 font-semibold" style={{color: '#205335'}}>{text[2][4][0]}</div>
                                <p className={"text-white text-lg p-3 text-left"} style={{color: '#205335'}}>{text[2][4][1]}</p>
                            </div>
                            <div className={'flex justify-center'}>
                                <button className={'deepbtn uppercase my-2'}><Link href="/online-survey"><a>{text[2][8]}</a></Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-full casecard md:max-w-[23%] rounded-xl shadow-lg">
                        <div className="caseinner h-full flex flex-col justify-between">
                            <div>
                                <div className="text-white flex justify-center">
                                    <Image src={Image6} className="rounded-tl-xl rounded-tr-xl" alt="Traffic Arbitrage"></Image>
                                </div>
                                <div className="text-2xl font-semibold text-white py-3" style={{color: '#205335'}}>{text[2][5][0]}
                                </div>
                                <p className={"text-white text-lg p-3 text-left"} style={{color: '#205335'}}>{text[2][5][1]}</p>
                            </div>
                            <div className={'flex justify-center'}>
                                <button className={'deepbtn uppercase my-2'}><Link href="/traffic-arbitrage"><a>{text[2][8]}</a></Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-full casecard md:max-w-[23%] rounded-xl shadow-lg">
                        <div className="caseinner h-full flex flex-col justify-between">
                            <div>
                                <div className="text-white flex justify-center">
                                    <Image src={Image7} className="rounded-tl-xl rounded-tr-xl" alt="betting"></Image>
                                </div>
                                <div className="text-2xl font-semibold text-white py-3" style={{color: '#205335'}}>{text[2][6][0]}
                                </div>
                                <p className={"text-white text-lg p-3 text-left"} style={{color: '#205335'}}>{text[2][6][1]}</p>
                            </div>
                            <div className={'flex justify-center'}>
                                <button className={'deepbtn uppercase my-2'}><Link href="/betting"><a>{text[2][8]}</a></Link></button>
                            </div>
                        </div>
                    </div>
                    <div className="max-w-full casecard md:max-w-[23%] rounded-xl shadow-lg">
                        <div className="caseinner h-full flex flex-col justify-between">
                            <div>
                                <div className="text-white flex justify-center">
                                    <Image src={Image8} className="rounded-tl-xl rounded-tr-xl" alt="ticketing"></Image>
                                </div>
                                <div className="text-3xl text-white py-3 font-semibold" style={{color: '#205335'}}>{text[2][7][0]}</div>
                                <p className={"text-white text-lg p-2 text-left"} style={{color: '#205335'}}>{text[2][7][1]}</p>
                            </div>
                            <div className={'flex justify-center'}>
                                <button className={'deepbtn uppercase my-2'}><Link href="/ticketing"><a>{text[2][8]}</a></Link></button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default UseCases;
