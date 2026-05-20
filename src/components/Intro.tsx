import { FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface IntroSection {
    pageTitle: string,
    pageName: string,
    previousPage: string,
    bookName?: string
    path: string
}
export default function ReusableIntro({ pageTitle, pageName, previousPage, bookName, path }: IntroSection) {
    const navigate = useNavigate()
    return (
        <div className='content'>
            <div className={`relative w-screen flex! justify-evenly h-60!  inset-0   items-center  transition-opacity font-plus! `}>
                <div className='w-full  text-4xl leading-15  flex-col inset-0 bg-[#EDEBE3] backdrop-blur-xs h-60 absolute flex flex-1 justify-center items-center '>
                    <div className="w-355! flex flex-col items-start p-5">
                        <span className="font-bold text-[54px]">{pageTitle}</span>
                        <p className="text-[24px] text-gray-400 flex items-center gap-2"><span className="flex gap-2 items-center cursor-pointer" onClick={()=>navigate('/home')}>{previousPage}<FaArrowRight /> </span> <span onClick={() =>  navigate(`/${path ?? 'books'}`)} className="text-[#5b4f29]! items-center flex gap-2 cursor-pointer">{pageName}</span>
                            <span className="text-[#5b4f29]! items-center flex">{bookName ? <span className="items-center flex gap-2"><FaArrowRight /> {bookName}</span> : ''}</span></p>
                    </div>
                </div>
            </div>
        </div>
    )
}