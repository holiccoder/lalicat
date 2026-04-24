import React, {useState, useRef, useEffect} from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import '@fortawesome/fontawesome-svg-core/styles.css';
import {faGears, faUserPlus,faBookAtlas,faWindowRestore } from "@fortawesome/free-solid-svg-icons";
import { useMediaQuery } from "react-responsive";
import Image from "next/image";
import accounts from "../../public/images/home/accounts.webp"
import fingerprints from "../../public/images/home/fingerprints.png"
import automation from "../../public/images/home/automation.png"
import team from "../../public/images/home/team.png"
import parse from "html-react-parser"


const Features = ({text}) => {
    const [nav1, setNav1] = useState()
    const [nav2, setNav2] = useState()
    const slider1 = useRef(null)
    const slider2 = useRef(null)
    const isMobile = useMediaQuery({maxWidth:768})

    useEffect(() => {
        setNav1(slider1.current)
        setNav2(slider2.current)
    }, [])
    return (
        <div className="max-w-full my-2 features">
            <h1 className="text-center text-5xl font-extrabold pt-16 pb-5 uppercase" style={{color:"#205335"}}>{text[0]}</h1>
            <div className={'text-center pb-3'}>{parse(text[1])}</div>
            <div className="max-w-[85%] flex flex-col m-auto">
                <div className="mb-1">
                    <Slider
                        asNavFor={nav1}
                        ref={slider2}
                        slidesToShow={isMobile?1:4}
                        swipeToSlide={true}
                        focusOnSelect={true}
                        autoplay={false}
                        arrows={false}
                        speed={500}>
                        <div className="text-center">
                            <h2 className="flex justify-center items-center text-xl gap-2 font-bold p-4"><FontAwesomeIcon icon={faGears} size="lg"></FontAwesomeIcon><span> {parse(text[2][0])}</span></h2>
                        </div>
                        <div className="text-center">
                            <h2 className="flex justify-center items-center text-xl gap-2 font-bold p-4"><FontAwesomeIcon icon={faUserPlus} size="lg"></FontAwesomeIcon><span>{parse(text[2][1])}</span></h2>
                        </div>
                        <div className="text-center">
                            <h2 className="flex justify-center items-center text-xl gap-2 font-bold p-4"><FontAwesomeIcon icon={faBookAtlas} size="lg"></FontAwesomeIcon><span>{parse(text[2][2])}</span></h2>
                        </div>
                        <div className="text-center">
                            <h2 className="flex justify-center items-center text-xl gap-2 font-bold p-4"><FontAwesomeIcon icon={faWindowRestore} size="lg"></FontAwesomeIcon><span>{parse(text[2][3])}</span></h2>
                        </div>
                    </Slider>
                </div>
                <div className="main-slider">
                    <Slider speed={500} asNavFor={nav2} autoplay={true} ref={slider1} arrows={false}>
                        <div className={'flex flex-col md:flex-row p-4 text-2xl md:p-10 active-feature'}>
                            {parse(text[3][0])}
                            <div className={'w-full md:w-1/2 flex flex-col justify-center items-center'}>
                                <Image src={accounts} height={400} width={400} className="h-60 md:max-h-64" alt="Manage Multiple Accounts"/>
                            </div>
                        </div>
                        <div className={'flex flex-col md:flex-row p-4 text-2xl md:p-10 active-feature'}>
                            {parse(text[3][1])}
                            <div className={'w-full md:w-1/2 flex flex-col justify-center items-center'}>
                                <Image src={fingerprints} height={400} width={400} className="h-64 md:max-h-64" alt="Simulate Browser Fingerprints"/>
                            </div>
                        </div>
                        <div className={'flex flex-col md:flex-row p-4 text-2xl md:p-10 active-feature'}>
                            {parse(text[3][2])}
                            <div className={'w-full md:w-1/2 flex flex-col justify-center items-center'}>
                                <Image src={automation} height={400} width={450} className="h-64 md:max-h-64" alt="Local API for Automation"/>
                            </div>
                        </div>
                        <div className={'flex flex-col md:flex-row p-4 text-2xl md:p-10 active-feature'}>
                            {parse(text[3][3])}
                            <div className={'w-full md:w-1/2 flex flex-col justify-center items-center'}>
                                <Image src={team} className="h-72 md:max-h-64" height={400} width={400} alt="Team Collaboration"/>
                            </div>
                        </div>
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default Features