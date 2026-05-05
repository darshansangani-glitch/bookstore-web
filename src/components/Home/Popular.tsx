import React from "react";
import BookCards from "./BookCards";
import { IoIosArrowRoundForward } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { FeatureBooks } from "./FeaturedBooks";

export default function PopularBooks() {
    const navigate = useNavigate()
    const FeaturedBooksData: React.ReactNode = FeatureBooks.map((book, index) => {
        return (
            <BookCards
                key={index}
                id={book.id}
                author={book.author}
                name={book.name}
                category={book.category}
                src={book.src}
            />
        );
    });
   function handleClick(e: React.MouseEvent) {
        if((e.target as HTMLDivElement).className === 'border-b-2'){
            (e.target as HTMLDivElement).className = '';
            console.log('remove')
        }else{
            (e.target as HTMLDivElement).className = 'border-b-2';
            console.log('add class')
        }
    }  
    const categories = ['All Genre', 'Business', 'Sci-Fi', 'History', 'Fiction']

    return (
        <>
            <div className=" text-xl text-gray-400 flex flex-col items-center justify-center p-20">
                <div className="flex flex-col gap-5 justify-center items-center ">
                    <span className="text-[#7A7A7A] text-[13px] font-plus font-medium">SOME QUALITY ITEMS</span>
                    <div className="flex items-center w-355">
                        <div className="border w-full border-[#E0E0E0]" />
                        <p className="text-[48px]  font-prata w-300 flex font-normal justify-center   items-center text-black ">
                            Popular Books
                        </p>
                        <div className="border w-full border-[#E0E0E0]" />
                    </div>
                   
                </div>
            </div>
            <div className="ml-auto mr-auto w-full flex flex-col justify-center items-center gap-15 pb-20 relative! z-100!">
                 <div className="w-184 h-5 text-[22px] font-plus flex items-center justify-between">
                        {categories.map((category, index)=>{
                            return <button key={index} className=" border-b-[#9A884C]" onClick={handleClick}>
                                {category}
                            </button>
                        })}
                    </div>
                <div className="w-355 grid grid-cols-4 justify-center items-center  gap-5   p-4 border-b border-b-[#E0E0E0] " >
                    {FeaturedBooksData}
                </div>
                <div className="w-355 flex justify-end p-10 py-0">
                    <button className="flex items-center gap-2 text-[#111111] text-[16px] font-medium font-plus transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#74642F] hover:text-white p-2" onClick={() => navigate('/books')}>View All Products <IoIosArrowRoundForward size={25} /></button>
                </div>
            </div>
        </> 
    );
};


