import React from 'react';
import Image from 'next/image'
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faWindows} from "@fortawesome/free-brands-svg-icons";
import logo from "../../public/images/common/logo1000-150x150.png"
import banner1 from "../../public/images/common/lalicat-browser-login-1.jpg"
import banner2 from "../../public/images/common/lalicat-fingerprint.png"
import banner3 from "../../public/images/common/lalicat-profile-setting-2-2.jpg"


const Banners = () => {
    return (
        <div className="hidden md:block max-w-full flex flex-col justify-center mt-16">
            <div className="relative m-auto max-h-full p-2 text-center" style={{width:"85%", height:"750px"}}>
                <div style={{position:"absolute z-19", width:"784px", height:"545px", top:0, left:0}}>
                    <Image src={banner1}></Image>
                </div>
                <div className="absolute z-21" style={{width:"784px", height:"545px", top:"-96px", left:"20%"}}>
                    <Image src={banner2}></Image>
                </div>
                <div className="absolute z-20 border border-gray-300" style={{width:"936px", height:"545px", bottom:0, right:0}}>
                    <Image src={banner3}></Image>
                </div>
            </div>
        </div>
    );
};

export default Banners;
