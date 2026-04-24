import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faDownload, faUser, faContactCard} from "@fortawesome/free-solid-svg-icons";
import styles from './steps.module.css';
import parse from "html-react-parser";

const Steps = () => {

    const stepsInfo = [
        {
            title:'download',
            description: 'download the lalicat client software',
            icon:faDownload,
            link:'/download'
        },
        {
            title:'register',
            description: 'register a new user in lalicat',
            icon:faUser,
            link:'/download'
        },
        {
            title:'get free trial',
            description: 'send your lalicat email to us',
            icon:faContactCard,
            link:'https://t.me/lalicatbrowser'
        },
    ]



    return (
        <div className={'container mx-auto'}>
            <h2 className="sr-only pt-32 font-extrabold text-5xl">Steps</h2>
            <div>
                <ol className="grid grid-cols-1 divide-x divide-gray-300 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-500 sm:grid-cols-3">

                    {
                        stepsInfo.map((item, index) => (
                            <li className={`flex items-center justify-center p-4 ${index === 1 && "bg-gray-100 relative"}`} key={index}>
                                {
                                    index === 1 && <span
                                        className="absolute -left-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-white sm:block"
                                    >
                                    </span>}
                                {index === 1 &&
                                    <span
                                    className="absolute -right-2 top-1/2 hidden h-4 w-4 -translate-y-1/2 rotate-45 border border-b-0 border-l-0 border-gray-100 bg-gray-50 sm:block"
                                    >
                                    </span>

                                }
                                <div className={'mr-5'}>
                                    <a href={item.link}>
                                       <FontAwesomeIcon icon={item.icon} size={'3x'} className={'text-green-900'} style={{maxHeight:"none"}}/>
                                    </a>
                                </div>
                                <div className="leading-none">
                                   <a href={item.link}>
                                       <strong className="block text-2xl font-extrabold text-green-900 uppercase">{item.title}</strong>
                                   </a>
                                    <small className="mt-1 text-lg text-gray-900">{parse(item.description)}</small>
                                </div>
                            </li>
                        ))
                    }

                </ol>
            </div>
        </div>
    );
};

export default Steps;