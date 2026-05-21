import {
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

export default function Footer() {
  const about = ["VISION", "ARTICLES", "CAREERS", "TERMS", "DONATE"];
  const discover = ["HOME", "BOOKS", "AUTHORS", "CATEGORIES"];
  const account = ["SIGN IN", "VIEW CART", "MY WISHLIST", "TRACK MY ORDER"];
  const help = ["HELP CENTER", "SUGGESTION", "REPORT ISSUE", "CONTACT US"];
  return (
    <div className="w-full flex flex-col items-center justify-center gap-3 pt-20">
      <div className="w-full xl:w-355 flex justify-center items-center border-b  flex-col sm:h-80 h-fit">
        <div className="flex flex-1 xl:flex-row xl:justify-between flex-col w-full">
          <span className="w-54.25 h-14  mx-10 sm:text-[46px] text-[30px]   font-unicase font-light">
            <span className="font-bold">BOOK</span>WORM
          </span>
          <div className="xl:w-full sm:flex  mx-10 sm:justify-between grid grid-cols-2 h-full  sm:pb-5">
            <div className="flex flex-col gap-5 ">
              <span className="md:w-35.25 w-fit sm:h-9.5  xl:text-[28px] md:text-[22px] text-[18px]  text-[#111111] font-prata">
                About Us
              </span>
              <div className="flex flex-col items-start space-y-2 font-plus xl:text-[16px] md:text-[14px] text-[12px] text-[#777777] font-medium ">
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
              <span className="md:w-35.25 w-fit h-9.5  xl:text-[28px] md:text-[22px] text-[18px]  text-[#111111] font-prata">
                Discover
              </span>
              <div className="flex flex-col items-start space-y-2 font-plus xl:text-[16px] md:text-[14px] text-[12px] text-[#777777] font-medium ">
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
              <span className="md:w-42.25 w-fit h-9.5  xl:text-[28px] md:text-[22px] text-[18px]  text-[#111111] font-prata">
                My Account
              </span>
              <div className="flex flex-col items-start space-y-2 font-plus xl:text-[16px] md:text-[14px] text-[12px] text-[#777777] font-medium">
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
              <span className="md:w-35.25 w-fit h-9.5  xl:text-[28px] md:text-[22px] text-[18px]  text-[#111111] font-prata">
                Help
              </span>
              <div className="flex flex-col items-start space-y-2 font-plus xl:text-[16px] md:text-[14px] text-[12px] text-[#777777] font-medium">
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
        </div>

        <div className="border" />
      </div>
      <div className="flex justify-between gap-15 items-center h-8">
        <span className="xl:text-[22px] md:text-[18px] text-[14px]">
          © 2021 Templates Jungle. All rights reserved.
        </span>
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
