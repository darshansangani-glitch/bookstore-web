import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const about = ["VISION", "ARTICLES", "CAREERS", "SERVICE TERMS", "DONATE"];
  const discover = ["HOME", "BOOKS", "AUTHORS", "CATEGORIES"];
  const account = ["SIGN IN", "VIEW CART", "MY WISHLIST", "TRACK MY ORDER"];
  const help = ["HELP CENTER", "SUGGESTION", "REPORT ISSUE", "CONTACT US"];
  return (
    <div className="w-full h-100 flex flex-col items-center justify-center gap-3 pt-20">
      <div className="w-full flex justify-center items-center border-b  flex-col h-80">
        <div className="flex flex-1 justify-between 2xl:w-355 lg:w-285 md:w-235">
          <span className="w-54.25 h-14 text-[46px] md:text-[40px] font-unicase font-light">
            <span className="font-bold">BOOK</span>WORM
          </span>

          <div className="flex flex-col gap-5">
            <span className="w-31.25 h-9.5 text-[28px] md:text-[22px] text-[#111111] font-prata">
              About Us
            </span>
            <div className="flex flex-1 flex-col items-start gap-2 font-plus text-[16px] md:text-[14px] text-[#777777] font-medium ">
              {about.map((item, index) => {
                return (
                  <button key={index} className="font-normal hover:font-bold">
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="w-31.25 h-9.5 text-[28px] md:text-[22px] text-[#111111] font-prata">
              Discover
            </span>
            <div className="flex flex-1 flex-col items-start gap-2 font-plus text-[16px] md:text-[14px] text-[#777777] font-medium">
              {discover.map((item, index) => {
                return (
                  <button key={index} className="font-normal hover:font-bold">
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="w-40.25 h-9.5 text-[28px] md:text-[22px] text-[#111111] font-prata">
              My Account
            </span>
            <div className="flex flex-1 flex-col items-start gap-2 font-plus text-[16px] md:text-[14px] text-[#777777] font-medium">
              {account.map((item, index) => {
                return (
                  <button key={index} className="font-normal hover:font-bold">
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <span className="w-31.25 h-9.5 text-[28px] md:text-[22px] text-[#111111] font-prata">
              Help
            </span>
            <div className="flex flex-1 flex-col items-start gap-2 font-plus text-[16px] md:text-[14px] text-[#777777] font-medium">
              {help.map((item, index) => {
                return (
                  <button key={index} className="font-normal hover:font-bold">
                    {item}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
        <div className="border" />
      </div>
      <div className="flex justify-between 2xl:w-355 lg:w-285 md:w-235 items-center h-8">
        <span>© 2021 Templates Jungle. All rights reserved.</span>
        <div className="flex w-43 h-3.5 justify-between text-[14px] ">
          <FaFacebookF />
          <FaInstagram />
          <FaLinkedinIn />
          <FaTwitter />
          <FaWhatsapp />
        </div>
      </div>
    </div>
  );
}
