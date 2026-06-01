import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { useNavigate } from "react-router-dom";
import { sliderData } from "../../data/homePageData";

export default function Slick() {
  const navigate = useNavigate();
  return (
    <div className="content">
      <Swiper
        slidesPerView={1}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        spaceBetween={30}
        loop={true}
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
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        modules={[Pagination, Autoplay, Navigation]}
        className="mySwiper relative"
      >
        {sliderData.map((card, index) => (
          <SwiperSlide>
            <div
              key={index}
              className="relative w-full flex justify-evenly h-208  inset-0 z-4000  items-center  transition-opacity  bg-[#F3F2EC]  "
            >
              <div className="w-full inset-0 lg:px-0  sm:px-15  backdrop-blur-xs h-200 absolute flex flex-1 justify-evenly items-center ">
                <div className="xl:w-140 lg:w-100 sm:w-fit h-26.5 text-[#222222] font-prata flex flex-col lg:gap-10 gap-5">
                  {card.title ? (
                    <span className="lg:text-7xl md:text-4xl sm:text-2xl text-xl font-prata font-bold ">
                      {card.title ? card.title : ""}
                    </span>
                  ) : null}
                  {card.title && (
                    <button
                      onClick={() => navigate("/books")}
                      className="w-fit h-fit lg:p-4 lg:px-9 sm:px-5 p-2  lg:text-lg md:text-sm text-xs gap-2 hover:gap-5 text-[#111111] border border-[#C0C0C0] items-center flex justify-center hover:bg-[#5b4f29] hover:text-white"
                    >
                      {card.title ? `READ MORE` : ""}
                      <IoIosArrowRoundForward className="text-2xl" />
                    </button>
                  )}
                </div>
                <div className="relative w-fit ">
                  <img
                    alt={card.title ? card.title : ""}
                    src={card.bookImg ? card.bookImg : ""}
                    className=" rounded lg:w-99 md:w-80 w-50 lg:h-143 md:h-110 sm:h-100 "
                  />
                  <img
                    src={card.pattern}
                    alt=""
                    className="absolute bottom-0 w-165  h-[708.74px] -right-50 -top-40 -z-100"
                  />
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="swiper-button-prev 2xl:left-60! xl:left-10! lg:left-5! sm:block! hidden! border rounded-[50px] w-15 h-15 absolute top-1/2 z-10 p-3 border- -translate-y-1/2 cursor-pointer  text-[#808080] bg-[#f3f2ec] hover:bg-[#E7E5DC]">
          <IoIosArrowRoundBack className="text-[18px]" />
        </div>
        <div className="swiper-button-next  2xl:right-60! xl:right-10! lg:right-5! sm:block! hidden!  border rounded-[50px] w-15 h-15 absolute top-1/2 z-10 p-3 border- -translate-y-1/2 cursor-pointer  text-[#808080] bg-[#f3f2ec] hover:bg-[#E7E5DC]">
          <IoIosArrowRoundForward />
        </div>
        <div className="swiper-pagination h-10 mx-auto absolute left-100 sm:top-[85%] top-[60%]"></div>
      </Swiper>
    </div>
  );
}
