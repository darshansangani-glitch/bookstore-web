import BookCards from "../Books/BookCards";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { BookInfo, FeaturedBooksProps } from "../../interface/interface";

export default function FeaturedBooks(props: FeaturedBooksProps) {
  const navigate = useNavigate();
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
              <span className="max-w-fit">Featured Books</span>
            </div>
            <div className="border w-full border-[#E0E0E0]" />
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center items-center pb-20 relative z-100">
        <div className=" 2xl:w-355 xl:w-285 w-full flex justify-center items-center gap-5 p-4">
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
              240: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              1440: {
                slidesPerView: 3,
                spaceBetween: 70,
              },
              2000: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper relative! "
          >
            {props.featuredBooks.map((book: BookInfo) => {
              return (
                <SwiperSlide key={book._id}>
                  <BookCards
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
            })}
            <div className="border-b border-b-[#E0E0E0] p-5" />
            <div className="swiper-pagination h-10"></div>
            <div className="2xl:w-355 xl:w-285  w-full flex justify-end p-10 sm:px-10 px-0">
              <button
                className="flex items-center gap-2 text-[#111111] sm:text-[16px] text-xs  font-medium font-plus transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110  hover:bg-[#74642F] hover:text-white p-2"
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
