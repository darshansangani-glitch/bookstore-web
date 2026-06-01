import pankhudi from "../../assets/pankhudi2.png";
import zigzag from "../../assets/Vector 17.png";
import bgPattern from "../../assets/bg pattern.png";
import { IoArrowForwardSharp } from "react-icons/io5";
import { BestBookProps } from "../../interface/interface";

export default function BestBook(props: BestBookProps) {
  return (
    <div className="w-full lg:h-227 h-250 relative bg-[#EDEBE3] flex  justify-center items-center overflow-hidden">
      <img
        src={pankhudi}
        alt=""
        className="absolute xl:-bottom-20 -bottom-40 xl:-left-15 -left-60 rotate-83"
      />
      <img
        src={bgPattern}
        alt=""
        className="absolute -top-50 -right-75 rotate-180"
      />
      <div className="2xl:w-355 xl:w-285 lg:flex-row flex-col w-full z-20 px-5 flex justify-center xl:gap-25 gap-10">
        <div className="relative lg:w-100 w-full sxl:pt-0 pt-20">
          <img
            src={`${import.meta.env.VITE_SERVER_URL}${props.topBook.book_image_filename}`}
            alt=""
            className="xl:w-100! w-80  xl:h-145.25 h-120  "
          />
          <div className="border absolute xl:h-190 h-175 xl:-top-45 -top-55 lg:block hidden  -left-1 border-[#E1DFD6]" />
          <div className="border absolute xl:h-190 h-175  xl:-bottom-45 -bottom-55 lg:block hidden   -right-1 border-[#E1DFD6]" />
        </div>
        <div className="flex flex-col justify-center xl:w-150 w-full gap-7">
          <div>
            <span className="w-fit h-17 md:text-4xl text-3xl font-prata text-[#111111] items-center flex">
              Most Requested Book
            </span>
            <img src={zigzag} alt="" />
          </div>
          <div className="flex  flex-col gap-6">
            <span className="text-sm font-medium font-plus [word-spacing:0.15rem] text-[#888888] uppercase">
              BY {props.topBook.author}
            </span>
            <span className="sm:text-3xl text-2xl font-prata text-[#111111] uppercase">
              {props.topBook.book_name}
            </span>
            <p className="sm:w-121.5 w-full sm:text-lg text-sm  text-[#7A7A7A]  line-clamp-4">
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
