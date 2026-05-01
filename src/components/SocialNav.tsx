import { FaFacebookF, FaLinkedinIn, FaTwitter, FaWhatsapp } from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import user from "../assets/Vector.png";
export default function SocialNav() {
    return (
        <div className="flex justify-center bg-[#F3F2EC] border-b border-b-[#E0E0E0]">
             <div className="p-5 flex justify-between w-355! items-center">
            <div className="flex w-43 h-3.5 justify-between text-[14px] ">
                <FaFacebookF />
                <FaInstagram />
                <FaLinkedinIn />
                <FaTwitter />
                <FaWhatsapp />
            </div>
            <div className="flex h-4 gap-3 font-plus">
                <div className="w-22.75 h-3.75 flex text-[12px] justify-center gap-2 items-center text-[#777777]"><img src={user} alt="" className="text-[#111111]" />ACCOUNT</div>
                <div className="border text-[#E0E0E0]"/>
                <div className="w-22.75 h-3.75 flex text-[12px] justify-center gap-2 items-center text-[#777777]"><HiOutlineShoppingBag className="text-[14px] text-[#111111] h-3.75" />CART</div>
                <div className="border text-[#E0E0E0]" />
                <div className="w-22.75 h-3.75 flex text-[12px] justify-center gap-2 items-center text-[#777777]"><LiaSearchSolid className="text-[14px] text-[#111111]" />Search</div></div>
        </div>
        </div>
       
    )
}