import React, {useState, useRef, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCircle, faHandPointer} from "@fortawesome/free-solid-svg-icons";
import {faWindows} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";
import SliderImg1 from "../../public/images/home/swiper/manage-multiple-browser-profiles.png"
import SliderImg2 from "../../public/images/home/swiper/customized-browser-fingerprint.png"
import SliderImg3 from "../../public/images/home/swiper/Collaborate-in-a-team.png"
import SliderImg4 from "../../public/images/home/swiper/Share-profiles-to-members.png"
import SliderImg5 from "../../public/images/home/swiper/API-for-automation.jpg"


export default function HomeSwiper({text}) {
    const [nav1, setNav1] = useState(null)
    const [nav2, setNav2] = useState(null)
    const slider1 = useRef(null)
    const slider2 = useRef(null)

    useEffect(() => {
        setNav1(slider1.current)
        setNav2(slider2.current)
    }, [])

    return (
        <div className="max-w-[90%] m-auto">
            <div className="max-w-full flex pt-36 pb-24 home-swiper text-gray-400">
                <div className="max-w-[40%] flex flex-col">
                    <h1 className="text-4xl text-white text-center font-bold my-7">{text[0]}</h1>
                    <div className="w-full">
                        <div className="m-auto">
                            <Slider
                                arrows={false}
                                asNavFor={nav2}
                                ref={slider1}
                                slidesToShow={5}
                                focusOnSelect={true}
                                autoplay={true}
                                speed={1000}
                                vertical={true}>
                                {text[1] && text[1].map((item, index) => (
                                    <div className="flex cursor-pointer" key={index}>
                                        <h3 className="flex items-center text-2xl">
                                            <FontAwesomeIcon icon={faCircle} size={'sm'}/>
                                            <span className="p-2">{item}</span>
                                        </h3>
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                    <div className="max-w-full flex justify-center my-8 pr-5">
                        <div className="deepbtn text-2xl">
                            <FontAwesomeIcon icon={faWindows} size={'xl'}></FontAwesomeIcon>
                            <span className="pl-2 uppercase font-bold">
                                <Link href="/download"><a>{text[2]}</a></Link>
                            </span>
                        </div>
                        <div className="deepbtn text-2xl">
                            <FontAwesomeIcon icon={faHandPointer} size={'xl'}></FontAwesomeIcon>
                            <span className="pl-2 uppercase font-bold">
                                <Link href="https://v.lalicat.com/index.html#/register"><a>{text[3]}</a></Link>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="max-w-[52%]">
                    <Slider
                        adaptiveHeight={false}
                        arrows={false}
                        asNavFor={nav1}
                        ref={slider2}
                        slidesToShow={1}
                        slidesToScroll={1}
                        autoplay={true}
                        speed={1000}
                        fade={true}>
                        <div id="slider1">
                            <Image src={SliderImg1}></Image>
                        </div>
                        <div>
                            <Image src={SliderImg2}></Image>
                        </div>
                        <div>
                            <Image src={SliderImg3}></Image>
                        </div>
                        <div>
                            <Image src={SliderImg4}></Image>
                        </div>
                        <div>
                            <Image src={SliderImg5}></Image>
                        </div>

                    </Slider>
                </div>
            </div>
        </div>
    )
}