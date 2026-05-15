import React, { Dispatch, SetStateAction, useState } from "react";
import BookCards from "../Books/BookCards";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { BookInfo } from "../../pages/BookDetailsPage";
interface PopularBooksProps {
  popularBooks: BookInfo[];
  setCategory: Dispatch<SetStateAction<string>>;
  uniqueCategories: string[];
}
export default function PopularBooks(props: PopularBooksProps) {
  const navigate = useNavigate();
  const [indexActive, setIndexActive] = useState(50);
  const PopularBooksData: React.ReactNode = props.popularBooks.map(
    (book, index) => {
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
    },
  );
  return (
    <>
      <div className=" text-xl text-gray-400 flex flex-col items-center justify-center p-20">
        <div className="flex flex-col gap-5 justify-center items-center ">
          <span className="text-[#7A7A7A] text-[13px] font-plus font-medium">
            SOME QUALITY ITEMS
          </span>
          <div className="flex items-center 2xl:w-355 lg:w-285 md:w-235">
            <div className="border w-full border-[#E0E0E0]" />
            <p className="text-[48px]  font-prata w-300 flex justify-center   items-center text-black ">
              Popular Books
            </p>
            <div className="border w-full border-[#E0E0E0]" />
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center items-center gap-15 pb-20 ">
        <div className="w-240 h-5 text-[22px] font-plus flex items-center justify-between">
          <button
            key={50}
            className={`p-2 ${indexActive == 50 ? "border-b" : ""}`}
            onClick={() => {
              props.setCategory("");
              setIndexActive(50);
            }}
          >
            All Books
          </button>
          {props.uniqueCategories.map((category, index) => {
            return (
              <button
                key={index}
                className={`p-2 ${indexActive == index ? "border-b" : ""}`}
                onClick={() => {
                  props.setCategory(category);
                  setIndexActive(index);
                }}
              >
                {category}
              </button>
            );
          })}
        </div>
        <div className="2xl:w-355 lg:w-285 md:w-235 grid 2xl:grid-cols-4 lg:grid-cols-3 justify-center items-center  gap-5   p-4 border-b border-b-[#E0E0E0] ">
          {PopularBooksData}
        </div>
        <div className="2xl:w-355 lg:w-285  md:w-235 flex justify-end">
          <button
            className="flex items-center gap-2 text-[#111111] text-[16px] font-medium font-plus transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#74642F] hover:text-white p-2"
            onClick={() => navigate("/books")}
          >
            View All Products <IoIosArrowRoundForward size={25} />
          </button>
        </div>
      </div>
    </>
  );
}
