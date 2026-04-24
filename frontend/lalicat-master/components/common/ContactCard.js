import React from 'react';
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSkype, faTelegram, faTwitter, faWhatsapp, faYoutube} from "@fortawesome/free-brands-svg-icons";

function ContactCard(props) {
    return (
        <div className="hidden md:block fixed right-10 bottom-5 text-white p-5 rounded-lg" style={{backgroundColor:"rgb(32, 83, 53)"}}>
            <nav className="list-none">
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
            </nav>
        </div>
    );
}

export default ContactCard;