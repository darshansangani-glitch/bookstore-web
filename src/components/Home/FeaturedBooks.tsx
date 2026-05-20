import React from "react";
import LostForest from "../../assets/the lost forest.webp";
import Hobbit from "../../assets/The Hobbit.webp";
import img3 from "../../assets/3.jpg";
import img4 from "../../assets/History of Rome.jpeg";
import img5 from "../../assets/Dune.webp";
import img6 from "../../assets/Midnight Tales.jpeg";
import img7 from "../../assets/Educated.webp";
import BookCards from "../Books/BookCards";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BookInfo } from "../../pages/BookDetailsPage";

export interface Featured {
  id: string;
  name: string;
  author: string;
  category: string;
  src: string;
  offers?: string;
  offer?: boolean;
}

export const FeatureBooks: Featured[] = [
  {
    id: "0",
    name: "The Seven Husbands of Evelyn Hugo",
    author: "Smit Desai",
    category: "Fiction",
    src: "https://m.media-amazon.com/images/I/81LscKUplaL._AC_UF1000,1000_QL80_.jpg",
    offers: "12% off",
  },
  {
    id: "1",
    name: "The Lost Forest",
    author: "Smit Desai",
    category: "Thriller",
    src: LostForest,
    offers: "12% off",
  },
  {
    id: "2",
    name: "The Hobbits",
    author: "Smit Desai",
    category: "NonFiction",
    src: Hobbit,
    offers: "12% off",
  },
  {
    id: "3",
    name: "The Silver Crow",
    author: "Smit Desai",
    category: "Fiction",
    src: img3,
    offers: "12% off",
  },
  {
    id: "4",
    name: "History of Rome",
    author: "Smit Desai",
    category: "Fiction",
    src: img4,
    offers: "12% off",
  },
  {
    id: "5",
    name: "Dune",
    author: "Smit Desai",
    category: "Thriller",
    src: img5,
    offers: "12% off",
  },
  {
    id: "6",
    name: "Midnight Tales",
    author: "Smit Desai",
    category: "NonFiction",
    src: img6,
    offers: "12% off",
  },
  {
    id: "7",
    name: "Educated",
    author: "Smit Desai",
    category: "Fiction",
    src: img7,
    offers: "12% off",
  },
];

interface FeaturedBooksProps {
  featuredBooks: BookInfo[];
}

export default function FeaturedBooks(props: FeaturedBooksProps) {
  const navigate = useNavigate();
  const FeaturedBooksData: React.ReactNode = props.featuredBooks.map(
    (book: BookInfo, index: number) => {
      return (
        <SwiperSlide>
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
        </SwiperSlide>
      );
    },
  );

  return (
    <>
      <div className=" text-xl text-gray-400 flex flex-col items-center justify-center p-20">
        <div className="flex flex-col gap-3 justify-center items-center">
          <span className="text-[#7A7A7A] text-[13px] font-plus font-medium">
            SOME QUALITY ITEMS
          </span>
          <div className="flex items-center 2xl:w-355 lg:w-285 md:w-235">
            <div className="border w-full border-[#E0E0E0]" />
            <p className="text-[48px]  font-prata w-300 flex justify-center   items-center text-black ">
              Featured Books
            </p>
            <div className="border w-full border-[#E0E0E0]" />
          </div>
        </div>
      </div>
      <div className="ml-auto mr-auto w-full flex flex-col justify-center items-center pb-20 relative z-100">
        <div className=" 2xl:w-355 lg:w-285 md:w-235 flex  justify-center items-center  gap-5   p-4  ">
          <Swiper
            slidesPerView={1}
            autoplay={{ delay: 2500, pauseOnMouseEnter: true }}
            spaceBetween={390}
            loop={true}
            speed={1500}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
              renderBullet: function (index, className) {
                return (
                  "<span key= " +
                  (index + 1) +
                  ' class="' +
                  className +
                  '">' +
                  "•" +
                  "</span>"
                );
              },
            }}
            breakpoints={{
              640: {
                slidesPerView: 0,
                spaceBetween: 100,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper relative! "
          >
            {FeaturedBooksData}
            <div className="border-b border-b-[#E0E0E0] p-5" />
            <div className="swiper-pagination h-10"></div>
            <div className="2xl:w-355 lg:w-285 md:w-235 flex justify-end p-10">
              <button
                className="flex items-center gap-2 text-[#111111] text-[16px] font-medium font-plus transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#74642F] hover:text-white p-2"
                onClick={() => navigate("/books")}
              >
                View All Products <IoIosArrowRoundForward size={25} />
              </button>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}
