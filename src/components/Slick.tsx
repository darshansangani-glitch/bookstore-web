// import React, { useState, useRef } from "react";
import img1 from '../assets/The Hobbit.webp'
import img2 from '../assets/2.jpg'
import img3 from '../assets/3.jpg'
import img1Bg from '../assets/bg.png'
import img2Bg from '../assets/hobbitbg.jpg'
import img3Bg from '../assets/bg-99.jpeg'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick'

// export default function Slick() {
//     const settings = {
//         dots: true,
//         infinite: false,
//         speed: 300,
//         slidesToShow: 4,
//         slidesToScroll: 4,'
//         responsive: [
//             {
//                 breakpoint: 1024,
//                 settings: {
//                     slidesToShow: 3,
//                     slidesToScroll: 3,
//                     infinite: true,
//                     dots: true
//                 }
//             },
//             {
//                 breakpoint: 600,
//                 settings: {
//                     slidesToShow: 2,
//                     slidesToScroll: 2
//                 }
//             },
//             {
//                 breakpoint: 480,
//                 settings: {
//                     slidesToShow: 1,
//                     slidesToScroll: 1
//                 }
//             }
//         ]
//     }

//    const SliderComponent = typeof window === 'undefined' ? Slider.default : Slider;
// // Then render <SliderComponent {...settings} />

//     return (
//         <div className="reactSlick">
//             <SliderComponent {...settings}>
//                 <div className="">
//                     <div>
//                         <img src={img1} alt="" />
//                     </div>
//                 </div>
//                 <div className="">
//                     <div>
//                         <img src={img2} alt="" />
//                     </div>
//                 </div>
//                 <div className="">
//                     <div>
//                         <img src={img3} alt="" />
//                     </div>
//                 </div>
//                 <div className="">
//                     <div>
//                         <img src={img4} alt="" />
//                     </div>
//                 </div>
//             </SliderComponent>
//         </div>
//     );
// }


import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

export default function Slick() {
    const bookCards = [
        {
            imageSrc: img1,
            title: 'The Hobbit',
            description: "The story follows Bilbo Baggies, a comfortable, peace-loving hobbit who lives in the Shire. His quiet life is disrupted by the wizard Gandalf and a company of thirteen dwarves, led by Thorin Oakenshield, who enlist him as a 'burglar' for a perilous quest to reclaim their ancestral home and treasure from the dragon Smug at the Lonely Mountain.",
            Author: 'J.R.R. Tolkien',
            backgroundImg: img1Bg
        },

        {
            imageSrc: img3,
            quotes: "Ever tried. Ever failed. No matter. Try again. Fail again. Fail better",
            Author: ' Samuel Beckett',
            backgroundImg: img3Bg
        },
        {
            imageSrc: img2,
            title: 'The Silent Echo',
            description: " When previously ignored disappearances of teenagers are connected to a web of corruption, Eleanor is tasked with finding them. She must navigate a town where secrets are hidden, a Mentor figure manipulating events from the shadows, and her own traumatic past.",
            Author: 'Corbin Black',
            backgroundImg: img2Bg
        },
    ]
    const sliderSettings = {
        autoplay: true,
        autoplaySpeed: 1000,
        infinite:true,
        dots: true,
        speed: 1000,
        slidesToShow: 1,
        adaptiveHeight: true
    }
    return (
        <div className='content'>
            <Slider.default {...sliderSettings}>

                {bookCards.map((card, index) => (
                    <div key={index} className={`relative w-full flex! justify-evenly h-200!  inset-0 z-4000  items-center  transition-opacity  `}>
                        <img src={card.backgroundImg ? card.backgroundImg : ''} alt="" className='top-1 h-200 w-460 fixed' />
                        <div className='w-full inset-0 bg-black/60 backdrop-blur-xs h-200 absolute flex flex-1 justify-evenly items-center '>

                            <div className={`${card.quotes ? 'w-0' : 'w-140'} text-white flex flex-col gap-10`}>
                                {card.title ?
                                    <span className='text-5xl font-bold '>{card.title ? card.title : ''}</span>
                                    : null}
                                <p className='text-[18px] text-slate-300 leading-5 wrap-break-word! '>{card.description ? card.description : ''}</p>

                                {card.title && <button className='w-50 h-12 rounded-2xl bg-red-500 text-white items-center flex justify-center'>{card.title ? ' Explore Now' : ''} </button>}
                                {card.quotes && <div>
                                    <blockquote className='text-5xl font-bold w-80'>{card.quotes}</blockquote>
                                </div>}
                            </div>
                            <div >
                                <img alt={card.title ? card.title : ''} src={card.imageSrc ? card.imageSrc : ''} width="350" height="350" className='rounded shadow-2xl shadow-slate-400' />
                            </div>
                        </div>
                    </div>
                ))}
            </Slider.default>
        </div>
    )
}