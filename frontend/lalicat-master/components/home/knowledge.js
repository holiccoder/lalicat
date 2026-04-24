import Image from "next/image";
import Image1 from "../../public/images/home/digital-fingerprint-parameters.png"
import Image2 from "../../public/images/home/an-brow.png"
import parse from "html-react-parser"
const Knowledge = ({text}) => {
    return (
        <>
            <div className="max-w-full" style={{color:"#205335"}}>
                <div className="my-1 max-w-full flex flex-col md:flex-row md:max-w-[80%] m-auto md:my-8">
                    <div className="p-1 max-w-full md:max-w-[50%] md:p-6 flex align-middle flex-col align-middle">
                        <Image src={Image1} alt="digital fingerprint parameters"/>
                    </div>
                    {parse(text[0])}
                </div>
            </div>
            <div className="max-w-full gradient-bg">
                <div className="max-w-full flex flex-col md:flex-row align-middle md:max-w-[80%] h-fit m-auto">
                    {parse(text[1])}
                    <div className="max-w-full p-2 md:max-w-[40%] md:max-h-5/6 px-10 flex align-middle flex-col align-middle overflow-hidden m-7">
                        <Image src={Image2} alt="Internet anomymous surfing"/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Knowledge