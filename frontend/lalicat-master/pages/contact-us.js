import React, {useRef, useEffect} from 'react';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSkype, faTelegram, faTwitter, faYoutube} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faLocationPin} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import Swal from "sweetalert2"
import withReactContent from "sweetalert2-react-content";
import {postContactMsg} from "../lib/api";
import ReCAPTCHA from "react-google-recaptcha";
import {GOOGLE_CAPTCHA_KEY} from "../lib/constants";
import {NextSeo} from 'next-seo';
import parse from "html-react-parser";
import Steps from '../components/contact/steps';

const ContactUs = ({text}) => {

    const SEO = {
        title: 'lalicat browser contact page',
        description:'contact us through one of the following channels',
        openGraph:{
            title:'lalicat browser contact page',
            description:'contact us through one of the following channels'
        }
    }

    const title = useRef()
    const email = useRef()
    const comment  = useRef()
    const recaptchaRef = useRef()

    const alertModal = withReactContent(Swal)

    const submitMsg = () => {
        const titlevalue = title.current.value
        const emailvalue = email.current.value
        const commentvalue = comment.current.value

        if(titlevalue === ''){
            return alertModal.fire({
                title:"please input your title",
                icon:"warning",
                iconColor:"#205335",
                confirmButtonColor:"#205335"
            })
        }

        if(emailvalue === ''){
            return alertModal.fire({
                title:"please input your email",
                icon:"warning",
                iconColor:"#205335",
                confirmButtonColor:"#205335"
            })
        }

        if(commentvalue === ''){
            return alertModal.fire({
                title:"please input your message",
                icon:"warning",
                iconColor:"#205335",
                confirmButtonColor:"#205335"
            })
        }

        recaptchaRef.current.execute()

        postContactMsg(titlevalue, emailvalue, commentvalue).then(data => {

            if(data.code === 200){
                return alertModal.fire({
                    title:"message submitted successful",
                    icon:"success",
                    iconColor:"#205335",
                    confirmButtonColor:"#205335"
                })
            }else{
                return alertModal.fire({
                    title:"message failed to deliver, please try other means to contact us!",
                    icon:"warning",
                    iconColor:"#205335",
                    confirmButtonColor:"#205335"
                })
            }
        })
    }

    return (
        <div className={'my-10 max-w-full md:my-40 text-green-900'}>
            <NextSeo {...SEO}/>
            <Steps/>

            <h1 className="my-0 uppercase text-4xl text-center md:my-14 font-bold">{parse(text[4][1])}</h1>
            <div className="max-w-full md:max-w-[80%] m-auto flex flex-col md:flex-row shadow-2xl">
                <div className="flex-1 bgtest">
                    <div className="max-w-full form flex flex-col justify-center p-6">
                        <input type="text" className="focus:outline-none mt-2 focus:border-gray-700 border rounded border-gray-100 bg-gray-100 p-3" placeholder={text[4][3]} ref={title}/>
                        <input type="email" className="focus:outline-none mt-2 focus:border-gray-700 border rounded border-gray-100 bg-gray-100 p-3" ref={email} placeholder={text[4][4]}/>
                        <textarea id="comment" className="focus:outline-none mt-2 focus:border-gray-700 border rounded border-gray-200 bg-gray-100 p-3" cols="30" rows="10" placeholder={text[4][5]} ref={comment}/>
                        <div className="flex justify-center"><ReCAPTCHA size="invisible" ref={recaptchaRef} sitekey={GOOGLE_CAPTCHA_KEY}  /></div>
                        <div className="max-w-full m-auto my-3">
                            <button className="deepbtn uppercase" onClick={() => {submitMsg()}}>{text[4][6]}</button>
                        </div>
                    </div>
                </div>
                <div className="flex-1">
                    <h1 className="text-center text-xl font-bold py-8 px-2">{parse(text[4][2])}</h1>
                    <div className="flex justify-start md:justify-center flex-col">
                        <div className="flex justify-start items-center p-2 text-xl md:justify-center m-1">
                            <FontAwesomeIcon icon={faTelegram}/>
                            <Link href="https://t.me/lalicatbrowser">
                                <a target="_blank"><span className="pl-2">Telegram</span></a>
                            </Link>
                        </div>
                        <div className="flex justify-start items-center p-2 text-xl md:justify-center m-1">
                            <FontAwesomeIcon icon={faSkype}/>
                            <Link href="https://join.skype.com/invite/vlfyR3yfk5r9">
                                <a target="_blank"><span className="pl-2">Skype</span></a>
                            </Link>
                        </div>
                        <div className="flex justify-start items-center p-2 text-xl md:justify-center m-1">
                            <FontAwesomeIcon icon={faTwitter}/>
                            <Link href="https://twitter.com/lalicatbrowser">
                                <a target="_blank">
                                    <span className="pl-2">Twitter</span>
                                </a>
                            </Link>
                        </div>
                        <div className="flex justify-start items-center p-2 text-xl md:justify-center m-1">
                            <FontAwesomeIcon icon={faYoutube}/>
                            <Link href="https://www.youtube.com/channel/UCR19sSOVgLPBeRKH_H_zimw">
                                <a target="_blank"><span className="pl-2">Youtube Channel</span></a>
                            </Link>
                        </div>
                        <div className="flex justify-start items-center p-2 text-xl md:justify-center m-1">
                            <FontAwesomeIcon icon={faEnvelope}/>
                            <Link href="mailto:support@lalicat.com">
                                <a target="_blank">
                                    <span className="pl-2">Email: support@lalicat.com</span>
                                </a>
                            </Link>
                        </div>
                        <div className="flex justify-start items-center p-2 text-xl md:justify-center m-1">
                            <FontAwesomeIcon icon={faLocationPin}/><span className="pl-2">Address: Hong Kong, Kowloon Bay, Sheung Yuet Rd, Enterprise Square </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;