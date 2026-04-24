import React, {useEffect, useState} from "react";
const CookieBar = () => {

    const [acceptCookie, setAcceptCookie] = useState(false)

    useEffect(() => {
        const acceptCookie = window.localStorage.getItem('acceptCookie')
        if(acceptCookie){
            setAcceptCookie(true)
        }
    }, [])

    const acceptCookieAction = () => {
        setAcceptCookie(true)
        window.localStorage.setItem("acceptCookie", true)
    }

    return (
         <div className="h-40 w-full p-5 z-40 bg-green-800 text-white text-center opacity-95 cookiebar leading-5 fixed bottom-0 left-0" style={acceptCookie?{display:"none"}:{display:"block"}}>
             <div className={'text-xs md:text-xl flex flex-col'}>
                 <div>By clicking "accept", you agree to use Cookies to optimize the information presented to you, and analyze the traffic of our website.</div>
                <div>If you want to opt out of our cookies, please read our <a href="/cookie-policy">Cookie Policy</a> for your guidance.</div></div>
            <div className={'w-full flex justify-center pt-4'}><button onClick={() => {acceptCookieAction()}} className={'deepbtn pb-0 font-bold'}>Accept</button></div>
        </div>
    )
}

export default CookieBar