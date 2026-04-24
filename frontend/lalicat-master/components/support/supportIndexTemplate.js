import React from 'react';
import Sidebar from "./sidebar";
import Card from "./card";
import Link from "next/link";

const SupportIndexTemplate = ({article,sidebar}) => {
    return (
        <>
        <div className="pt-0 max-w-full flex justify-center md:pt-40 pb-10 mb-10 bg-green-900">
            <h1 className="text-white text-4xl uppercase">Support</h1>
        </div>

    <div className="max-w-full md:flex gap-2.5">
        <div className="w-full md:w-1/4">
            <Sidebar sidebar={sidebar}></Sidebar>
        </div>
        <div className="w-full md:w-3/4 h-fit p-4">
            {article.map((item,index) => (
                <ul key={index} className="flex flex-col">
                    <li className="border-b border-gray-300 p-3 max-w-full md:max-w-3/4">
                        <Link href={item.slug}>
                            <a>{item.title}</a>
                        </Link>
                    </li>
                </ul>
            ))}
        </div>
    </div>
        </>
    );
};

export default SupportIndexTemplate;
