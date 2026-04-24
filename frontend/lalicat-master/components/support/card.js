import React from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Link from "next/link";
import {library} from "@fortawesome/fontawesome-svg-core";
import {
    faCirclePlay,
    faCircleQuestion,
    faDesktop,
    faDiagramProject,
    faWindowRestore,
    faGear
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faCirclePlay,
  faWindowRestore,
  faCircleQuestion,
  faDesktop,
  faDiagramProject,
    faGear
);

const Card = ({menu}) => {
    return (
        <div className="border border-gray-300 flex flex-col items-center justify-between p-9 max-w-full mb-3 mr-3">
            <Link href={menu.slug}>
                <a><div className="h-30 flex flex-col items-center pb-8 text-green-900"><FontAwesomeIcon icon={["fas", menu.icon]} size={'2x'} style={{maxHeight:60}}></FontAwesomeIcon></div>
            <div className="w-full text-3xl text-center text-green-900">{menu.label}</div>
            <div className="w-full text-md text-center pt-2 text-green-900">{menu.count} articles</div></a>
            </Link>
        </div>
    );
};

export default Card;
