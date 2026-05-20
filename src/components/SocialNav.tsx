import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { LiaSearchSolid } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa6";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import user from "../assets/Vector.png";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../redux/hooks";
export default function SocialNav() {
  const cartData = useAppSelector((s) => s.booksCart.cart);
  const navigate = useNavigate();
  return (
    <div className="flex justify-center bg-[#F3F2EC] border-b border-b-[#E0E0E0]">
      <div className="p-5 flex justify-between 2xl:w-355 lg:w-285 md:w-235 items-center">
        <div className="flex w-43 h-5.5 justify-between text-[14px] ">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaTwitter />
          <FaWhatsapp />
        </div>
        <div className="flex h-4 gap-3 font-plus">
          <div className="w-22.75 h-5.75 flex text-[12px] justify-center gap-2 items-center text-[#777777]">
            <img src={user} alt="" className="text-[#111111]" />
            ACCOUNT
          </div>
          <div className="border text-[#E0E0E0]" />
          <div
            className="w-22.75 h-5.75  flex text-[12px] justify-center gap-2 items-center text-[#777777] cursor-pointer relative hover:bg-[#ccb9743d] group"
            onClick={() => navigate("/cart")}
          >
            <HiOutlineShoppingBag className="text-[14px] text-[#111111] h-3.75" />
            <span className="absolute text-[12px] font-bold -top-3 right-1 bg-red-950 h-4 flex items-center justify-center w-4 text-white rounded-2xl">
              {cartData.length}
            </span>
            CART
          </div>
          <div className="border text-[#E0E0E0]" />
          <div className="w-22.75 h-5.75 flex text-[12px] justify-center gap-2 items-center text-[#777777]">
            <LiaSearchSolid className="text-[14px] text-[#111111]" />
            Search
          </div>
        </div>
      </div>
    </div>
  );
}
