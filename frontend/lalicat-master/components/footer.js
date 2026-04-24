import Image from "next/image";
import logo from "../public/images/common/logo.png"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSkype, faTwitter, faYoutube, faTelegram, faFacebook, faWhatsapp} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import ContactCard from "./common/ContactCard";


const Footer = ({text}) => {
    return (
        <footer className="text-gray-600 body-font leading-7">
            <ContactCard/>
            <div className="py-3 container px-5 md:py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
                <div className="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
                    <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900 pl-4">
                        <Image src={logo} alt='lalicat antidetect browser' width={160} height={80}/>
                    </a>
                    <p className="mt-2 pl-7 text-white text-left">
                        <Link href="/"><a>{text[0]}</a></Link>
                    </p>
                    <p className="text-center text-white">
                       Work Hours:7:00 am-12:00 pm HongKong time
                    </p>
                </div>
                <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="text-lg font-bold text-white tracking-widest text-md mb-3 uppercase">{text[1][0]}</h2>
                        <nav className="list-none mb-10 font-light">
                            {
                                text[1][1].map((item,index) => (
                                    <li key={index}><Link href={item[1]}><a className="text-white hover:text-red-300">{item[0]}</a></Link></li>
                                ))
                            }
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="text-lg font-bold text-white tracking-widest text-md mb-3 uppercase">{text[2][0]}</h2>
                        <nav className="list-none mb-10 font-light">
                            {
                                text[2][1].map((item,index) => (
                                    <li key={index}><Link href={item[1]}><a className="text-white hover:text-red-300">{item[0]}</a></Link></li>
                                ))
                            }
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="text-lg font-bold text-white tracking-widest text-md mb-3 uppercase">{text[3][0]}</h2>
                        <nav className="list-none mb-10 font-light">
                            {
                                text[3][1].map((item,index) => (
                                    <li key={index}><Link href={item[1]}><a className="text-white hover:text-red-300">{item[0]}</a></Link></li>
                                ))
                            }
                        </nav>
                    </div>
                    <div className="lg:w-1/4 md:w-1/2 w-full px-4">
                        <h2 className="text-lg font-bold text-white tracking-widest text-md mb-3 uppercase">{text[4]}</h2>
                        <nav className="list-none mb-10">
                            <li>
                                <Link href="https://t.me/lalicatbrowser">
                                    <a className="flex justify-center items-center md:justify-start" target="_blank"><FontAwesomeIcon icon={faTelegram} size="2x"/><span className="pl-2 font-normal">Telegram</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://join.skype.com/invite/vlfyR3yfk5r9">
                                    <a className="flex justify-center items-center md:justify-start" target="_blank"><FontAwesomeIcon icon={faSkype} size="2x"/><span className="pl-2 font-normal">Skype</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://twitter.com/lalicatbrowser">
                                    <a target="_blank" className="flex justify-center items-center md:justify-start"><FontAwesomeIcon icon={faTwitter} size="2x"/><span className="pl-2 font-normal">Twitter</span></a>
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.youtube.com/channel/UCR19sSOVgLPBeRKH_H_zimw">
                                    <a className="flex justify-center items-center md:justify-start" target="_blank"><FontAwesomeIcon icon={faYoutube} size="2x"/><span className="pl-2 font-normal">Youtube</span></a>
                                </Link>
                            </li>
                        </nav>
                    </div>
                </div>
            </div>
            <div style={{backgroundColor: "#205335"}}>
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
                    <p className="text-white text-sm text-center">© {new Date().getFullYear()} —
                        Lalicat Antidetect Browser
                    </p>
                    <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start"/>
                </div>
            </div>
        </footer>
    )
}

export default Footer