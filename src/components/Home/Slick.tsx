// import React, { useState, useRef } from "react";
import img1 from '../../assets/The Hobbit.webp'
import img3 from '../../assets/3.jpg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import bookImg1 from '../../assets/book.png'
import bgPattern from '../../assets/bg pattern.png'
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from "react-icons/io";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from "swiper/react";

export default function Slick() {
    const sliderData = [
        {
            title: "Life of the wild",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.',
            bookImg: bookImg1,
            pattern: bgPattern
        },
        {
            title: "The Hobbit",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.',
            bookImg: img1,
            pattern: bgPattern
        },
        {
            title: "The Silver Crow",
            description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eu feugiat amet, libero ipsum enim pharetra hac. Urna commodo, lacus ut magna velit eleifend. Amet, quis urna, a eu.',
            bookImg: img3,
            pattern: bgPattern
        }
    ]
    return (
        <div className='content'>
            <Swiper
                slidesPerView={1}
                autoplay={{ delay: 2500, disableOnInteraction: false, }}
                spaceBetween={30}
                loop={true}
                pagination={{
                    el: '.swiper-pagination',
                    clickable: true,
                    renderBullet: function (index, className) {
                        return '<span key= '+(index+ 1)+' class="' + className + '">' + ("•") + '</span>';
                    }
                }}
                navigation={{
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                }}
                modules={[Pagination, Autoplay, Navigation]}
                className="mySwiper relative!"
            >
                
                {sliderData.map((card, index) => (
                    <SwiperSlide>

                        <div key={index} className={`relative w-full flex! justify-evenly h-208!  inset-0 z-4000  items-center  transition-opacity  bg-[#F3F2EC]!`}>
                            <div className='w-full inset-0  backdrop-blur-xs h-200 absolute flex flex-1 justify-evenly items-center '>

                                <div className={`w-140 h-26.5 text-[#222222] font-prata flex flex-col gap-10`}>
                                    {card.title ?
                                        <span className='text-[73px] font-prata font-bold '>{card.title ? card.title : ''}</span>
                                        : null}
                                    <p className='text-[16px] text-[#7A7A7A] font-normal w-150 font-plus leading-5 wrap-break-word! '>{card.description ? card.description : ''}</p>

                                    {card.title && <button className='w-50 h-25 p-4 text-[16px]! gap-2 hover:gap-5 text-[#111111] border border-[#C0C0C0] items-center flex justify-center hover:bg-[#5b4f29] hover:text-white'>{card.title ? `READ MORE` : ''} <IoIosArrowRoundForward className='text-2xl' />  </button>}
                                </div>
                                <div className='relative w-fit '>
                                    <img alt={card.title ? card.title : ''} src={card.bookImg ? card.bookImg : ''} className=' rounded w-99 h-143 ' />
                                    <img src={card.pattern} alt="" className='absolute bottom-0 w-165!  h-[708.74px]! -right-50 -top-40 -z-100' />
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
                <div className="swiper-button-prev left-[2%]!  border rounded-[50px] w-15! h-15! absolute top-1/2 z-10 p-3 border- -translate-y-1/2 cursor-pointer  text-[#808080]! bg-[#f3f2ec]! hover:bg-[#E7E5DC]!">
                    <IoIosArrowRoundBack className='text-[18px]!' />
                </div>
                <div className="swiper-button-next  right-[2%]!  border rounded-[50px] w-15! h-15! absolute top-1/2 z-10 p-3 border- -translate-y-1/2 cursor-pointer  text-[#808080]! bg-[#f3f2ec]! hover:bg-[#E7E5DC]!">
                    <IoIosArrowRoundForward />
                </div>
                <div className="swiper-pagination h-10! mx-auto absolute! left-100 top-[85%]!"></div>
            </Swiper>
        </div>
    )
}
