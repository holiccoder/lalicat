import React from 'react';
import Image from "next/image";



const MobileHero = () => {
    return (
        <div className="p-3 flex flex-col">
            <div className="flex font-bold flex-col text-center py-2 leading-8 text-white text-2xl py-5">
                Lalicat Antidetect Browser
            </div>
            <div className="flex flex-col justify-center">
                <Image src="/images/home/swiper/Collaborate-in-a-team.png" width={500} height={300} layout="responsive"></Image>
            </div>
        </div>
    );
};

export default MobileHero;
