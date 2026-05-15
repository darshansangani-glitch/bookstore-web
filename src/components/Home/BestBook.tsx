import pankhudi from "../../assets/pankhudi2.png";
import zigzag from "../../assets/Vector 17.png";
import bgPattern from "../../assets/bg pattern.png";
import { IoArrowForwardSharp } from "react-icons/io5";
import { BookInfo } from "../../pages/BookDetailsPage";

interface BestBookProps {
  topBook: BookInfo;
}
export default function BestBook(props: BestBookProps) {
  return (
    <div className="w-full h-227 relative bg-[#EDEBE3] flex justify-center items-center overflow-hidden">
      <img
        src={pankhudi}
        alt=""
        className="absolute -bottom-20 -left-15 rotate-83"
      />
      <img
        src={bgPattern}
        alt=""
        className="absolute -top-50 -right-75 rotate-180"
      />
      <div className="2xl:w-355 lg:w-285 md:w-235 flex justify-center gap-25">
        <div className="relative w-103.75">
          <img
            src={`${import.meta.env.VITE_SERVER_URL}${props.topBook.book_image_filename}`}
            alt=""
            className="w-103.25 h-150.25 "
          />
          <div className="border absolute h-179 w-px -top-38 left-7 border-[#E1DFD6]" />
          <div className="border absolute h-182 w-px -bottom-38 right-8 border-[#E1DFD6]" />
        </div>
        <div className="flex flex-col justify-center w-150 gap-7">
          <div>
            <span className="w-120.75 h-17 text-[48px] font-prata text-[#111111] items-center flex">
              Most Requested Book
            </span>
            <img src={zigzag} alt="" />
          </div>
          <div className="flex  flex-col gap-6">
            <span className="text-[13px] font-medium font-plus [word-spacing:0.15rem] text-[#888888] uppercase">
              BY {props.topBook.author}
            </span>
            <span className="text-[28px] font-prata text-[#111111] uppercase">
              {props.topBook.book_name}
            </span>
            <p className="w-121.5 text-[#7A7A7A] truncate">
              {props.topBook.description}
            </p>
          </div>
          <button className="w-35 gap-2 items-center flex text-[16px] font-plus font-medium transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#74642F] hover:text-white  p-3">
            Rent It Now <IoArrowForwardSharp />
          </button>
        </div>
      </div>
    </div>
  );
}
