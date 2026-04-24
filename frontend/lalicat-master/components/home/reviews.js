import React from 'react';
import parse from "html-react-parser";
import Link from "next/link";
import Image from "next/image";


function Reviews({reviews}){
    return (
        <div className="flex flex-col mb-8">
            <h1 className="text-center text-5xl font-extrabold pt-16 pb-16 uppercase" style={{color:"#205335"}}>reviews</h1>
        <div className="flex flex-col md:flex-row md:max-w-[75%] gap-4 mx-auto">
            {
                reviews.map((review, index) => (
                    <div className="bg-gray-200 rounded-md md:w-1/3 p-5">
                        <div className="flex justify-between">
                            <div><Image src="/images/stars-5.svg" width={108} height={20}/></div>
                            <div>{review.review_time}</div>
                        </div>
                        <div className="font-bold text-md my-2"><Link href={review.trust_pilot_link}><a>{parse(review.title)}</a></Link></div>
                        <div className="">
                            {parse(review.content)}
                        </div>
                        <div>{review.review_name}</div>
                    </div>
                ))
            }
        </div>
        </div>
    );
}

export default Reviews;