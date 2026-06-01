import { useState } from "react";
import BookCards from "../Books/BookCards";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { PopularBooksProps } from "../../interface/interface";

export default function PopularBooks(props: PopularBooksProps) {
  const navigate = useNavigate();
  const [indexActive, setIndexActive] = useState<number | null>(null);
  return (
    <>
      <div className=" flex flex-col items-center justify-center p-20">
        <div className="w-full flex flex-col gap-3 justify-center items-center">
          <span className="text-[#7A7A7A] text-[13px] font-plus font-medium">
            SOME QUALITY ITEMS
          </span>
          <div className="w-full flex items-center xl:w-355">
            <div className="border w-full border-[#E0E0E0]" />
            <div className="lg:text-5xl md:text-4xl text-2xl  font-prata w-400  flex justify-center   items-center text-black ">
              <span className="max-w-fit">Popular Books</span>
            </div>
            <div className="border w-full border-[#E0E0E0]" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center pb-20 relative z-100">
        <div className=" 2xl:w-355 xl:w-285 flex w-full  justify-center items-center  md:gap-5 gap-3  p-4  lg:text-lg text-xs">
          <button
            className={`w-fit ${indexActive == null ? "border-b" : ""}`}
            onClick={() => {
              props.setCategory("");
              setIndexActive(null);
            }}
          >
            All Books
          </button>
          {props.uniqueCategories.map((category, index) => {
            return (
              <button
                key={index}
                className={`w-fit ${indexActive == index ? "border-b" : ""}`}
                onClick={() => {
                  props.setCategory(category);
                  setIndexActive(typeof index === "number" ? index : null);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="2xl:w-355 xl:w-285 w-full grid 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-3 grid-cols-2 justify-center items-center  gap-5   p-4 border-b border-b-[#E0E0E0] ">
          {props.popularBooks.map((book, index) => {
            return (
              <BookCards
                key={index}
                id={book._id}
                author={book.author}
                bookName={book.book_name}
                category={book.category}
                src={`${import.meta.env.VITE_SERVER_URL}${book.book_image_filename}`}
                rent_price={book.rent_price}
                buy_price={book.buy_price}
              />
            );
          })}
        </div>
        <div className="2xl:w-355 xl:w-285  w-full flex justify-end p-10 sm:px-10 px-0">
          <button
            className="flex items-center gap-2 text-[#111111] sm:text-[16px] text-xs  font-medium font-plus transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-[#74642F] hover:text-white p-2"
            onClick={() => navigate("/books")}
          >
            View All Products <IoIosArrowRoundForward size={25} />
          </button>
        </div>
      </div>
    </>
  );
}
