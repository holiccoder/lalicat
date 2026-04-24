import React, {useState, useRef, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';
import {faSellcast} from "@fortawesome/free-brands-svg-icons";
import {
    faUserGroup,
    faShoppingCart,
    faAd,
    faCoins,
    faTicket,
    faMoneyCheckDollar,
    faForward,
    faSquarePollVertical
} from "@fortawesome/free-solid-svg-icons";
import {useMediaQuery} from "react-responsive";
import Link from "next/link";
import parse from "html-react-parser"

const UseCases = ({text}) => {
    const [nav1, setNav1] = useState()
    const [nav2, setNav2] = useState()
    const slider1 = useRef(null)
    const slider2 = useRef(null)
    const isMobile = useMediaQuery({maxWidth:768})

    useEffect(() => {
        setNav1(slider1.current)
        setNav2(slider2.current)
    }, [])

    const nav_icon_array = [
        faShoppingCart,
        faUserGroup,
        faMoneyCheckDollar,
        faAd,
        faSquarePollVertical,
        faSellcast,
        faCoins,
        faTicket
    ]

    const content_links = [
        '/e-commerce',
        '/social-media-marketing',
        '/affiliate-marketing',
        '/ads-agency',
        '/online-survey',
        '/traffic-arbitrage',
        '/betting',
        '/ticketing'
    ]

    return (
        <div className="mb-0 max-w-full md:mb-8 use-cases">
            <h1 className="text-center text-5xl font-extrabold pt-16 my-5 uppercase" style={{color:"#205335"}}>{text[0]}</h1>
            <div className="my-5">{parse(text[1])}</div>
            <div className="max-w-full md:max-w-[85%] flex flex-col m-auto">
                <div className="mb-2">
                    <Slider
                        asNavFor={nav1}
                        ref={slider2}
                        slidesToShow={isMobile?2:8}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        autoplay={false}
                        arrows={false}>
                        {
                            text[3].map((item,index) => (
                                <div className="text-center rounded h-40 flex items-center justify-center cursor-pointer" key={index}>
                                    <h3 className="flex flex-col justify-center items-center text-xl gap-2 font-bold p-4"><div className="rounded-full bg-green-300 cursor-pointer aspect-square p-3"><FontAwesomeIcon icon={nav_icon_array[index]} size="2x"></FontAwesomeIcon></div><span>{item}</span></h3>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
                <div className="main-slider mt-2 bg-white">
                    <Slider speed={500} asNavFor={nav2} autoplay={false} fade={true} ref={slider1} arrows={false}>
                        {
                            text[4].map((item,index) => (
                                <div className={'text-2xl p-5 active-feature cursor-pointer'} key={index}>
                                    <a href={content_links[index]}>
                                    <div className="flex flex-col justify-center items-center">
                                        <div className="pb-6">{parse(item)}</div>
                                    </div>
                                    </a>
                                </div>
                            ))
                        }
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default UseCases