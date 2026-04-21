import {  useNavigate } from "react-router-dom"

export default function Footer() {
    const navigate = useNavigate()
    const handleNavigation = ()=>{
        navigate('/books')
    }
    return (
        <div className=" p-20 h-150! border flex  flex-col items-center justify-evenly gap-30 bg-black">
            <div className=" text-gray-300 justify-center items-center flex-col flex gap-5">
                <span className="text-4xl  font-bold text-green-500 flex justify-center items-center">Request Your New Book Today Now!</span>
                <div className="flex flex-col justify-center items-center">
                    <span className="text-[18px] w-fit text-gray-400 ">Get Reading With BookWorm Today. Start Reading Your First Book With BookWorm By Requesting Today!!</span>
                    <span className="text-[18px] w-100 text-gray-400"> Enjoy the Latest Trends and Gain Knowledge</span>
                </div>

                <button className="w-70 p-4 px-6 text-xl hover:bg-green-600 text-white bg-green-500 font-bold rounded-4xl" onClick={handleNavigation}>Request Book Today!</button>
            </div>
            <span className="h-45 text-[250px] font-bold text-gray-700"><span className="text-green-200">Book</span>Worm</span>
        </div>
    )
}