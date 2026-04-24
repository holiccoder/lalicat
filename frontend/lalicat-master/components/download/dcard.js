import Image from "next/image";
import logo from "../../public/images/common/logo1000-150x150.png";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindows} from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Release from "../release";

const Dcard = ({text, latest}) => {
    return (
        <div className="max-w-full flex flex-col justify-center mx-auto" style={{marginTop:"-40px"}}>
            <div className="m-auto flex flex-col shadow-2xl rounded-lg p-9">
                <div className="w-1/3 m-auto my-3">
                    <Image src={logo} layout="responsive"/>
                </div>
                <h1 className="text-3xl font-bold my-5 text-green-900">Lalicat Antidetect Browser ({latest.version})</h1>
                <div className="max-w-full my-5">
                    <div className="w-full m-auto w-2/3 flex justify-center">
                        <Link href="https://v.lalicat.xyz/down/Lalimao_setup.exe"><a className="deepbtn"><FontAwesomeIcon icon={faWindows}></FontAwesomeIcon><span className="pl-3">Download</span></a></Link>
                    </div>
                </div>
            </div>

            <div className="my-5 text-left p-9 shadow-2xl rounded-lg mt-14" id="release">
                <div className="font-bold text-5xl my-4 text-center py-2">Latest Release</div>
                <Release release={latest}/>
                <div className="w-full text-right">
                    <div className="font-bold text-right"><a href="/releases" className="p-2.5 bg-green-600 text-white rounded">...More</a></div>
                </div>
            </div>
        </div>
    )
}

export default Dcard