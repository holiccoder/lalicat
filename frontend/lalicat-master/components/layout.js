import {ReactNode} from "react";
import Footer from "./footer";
import Cookiebar from "../components/common/cookiebar"
import FreeTrial from "../components/common/freetrial"
import {useRouter} from "next/router";
import Navbar from '../components/navbar'

const Layout = ({text, children}) => {
    const router = useRouter()
    const currentPath = router.pathname
    const cpath = currentPath.substring(1)

    return (<div className="max-h-screen flex flex-col">
        <Navbar text={text[0]} />
        {children}
        {cpath !== 'download' && <FreeTrial text={text[7][0]} />}
        <Footer text={text[7][1]} />
        <Cookiebar text={text[6]} />
    </div>)
}

export default Layout