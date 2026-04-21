import React from "react";
import MoonImg from "../assets/moon-landing-hero.jpg";
import LostForest from '../assets/The Lost Forest.jpeg';
import Hobbit from '../assets/The Hobbit.webp'
import img3 from '../assets/3.jpg'

interface Featured {
  id: string;
  name: string;
  author: string
  category: string;
  src: string;
}

const FeatureBooks: Featured[] = [
  {
    id: "0",
    name: "The Seven Husbands of Evelyn Hugo",
    author: 'Smit Desai',
    category: "Fiction",
    src: "https://m.media-amazon.com/images/I/81LscKUplaL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "1",
    name: "The Lost Forest",
    author: 'Smit Desai',
    category: "Thriller",
    src: LostForest,
  },
  {
    id: "2",
    name: "The Hobbits",
    author: 'Smit Desai',
    category: "NonFiction",
    src: Hobbit,
  },
  {
    id: "3",
    name: "The Silver Crow",
    author: 'Smit Desai',
    category: "Fiction",
    src: img3,
  },
  {
    id: "4",
    name: "The Seven Husbands of Evelyn Hugo",
    author: 'Smit Desai',
    category: "Fiction",
    src: "https://m.media-amazon.com/images/I/81LscKUplaL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "5",
    name: "The Lost Forest",
    author: 'Smit Desai',
    category: "Thriller",
    src: LostForest,
  },
  {
    id: "6",
    name: "The Hobbits",
    author: 'Smit Desai',
    category: "NonFiction",
    src: Hobbit,
  },
  {
    id: "7",
    name: "The Silver Crow",
    author: 'Smit Desai',
    category: "Fiction",
    src: img3,
  },
];

export const BookCards = ({ id, name, category, src, author }: Featured) => {
  return (
    <div id={id} className=" flex flex-col border border-slate-300 rounded-2xl shadow-2xl shadow-gray-/400  relative">
      <div className="">
        <img
          src={src}
          alt=""
          className="w-fit! h-90! "
        />
         <span className="absolute left-8  top-8 text-white font-extrabold text-[12px] rounded-2xl bg-orange-300  pl-2 pr-2    ">
          {category}
        </span>
      </div>
      <div className="">
       
        <div className=" p-5   flex flex-1 flex-col  gap-2   rounded-b-2xl items-start ">
          <span className="w-full overflow-hidden! whitespace-nowrap! text-ellipsis! max-w-40 text-[24px]! text-gray-400 font-bold">
            {name}
          </span>
          <span className="text-gray-400 text-[18px]">{author}</span>
          <div className="flex w-full items-center justify-end">
            <button
              className="p-2 w-30 rounded-xl bg-orange-400 text-white border"
              type="submit"
            >
              Request
            </button>
          </div>
        </div>
      </div>
    </div>

  );
};

export const FeaturedBooks = () => {
  const FeaturedBooksData: React.ReactNode = FeatureBooks.map((book) => {
    return (
      <BookCards
        key={book.id}
        id={book.id}
        author={book.author}
        name={book.name}
        category={book.category}
        src={book.src}
      />
    );
  });
  return (
    <>
      <div className=" text-xl text-gray-400 flex flex-col items-center justify-center p-20">
        <h1 className="text-6xl w-140 flex font-normal justify-center pb-3  items-center text-black ">
          Featured Books
        </h1>
        <p>Browse Books By Your Interest and Read an Exciting Books and Gain Knowledge.</p>
        <span>Have Fun Reading Books!!!</span>
      </div>
      <div className="ml-auto mr-auto w-full flex justify-center pb-20">
        <div className="grid grid-cols-4  w-fit! justify-center items-center  gap-5 bg-white  rounded-2xl   p-5 ">
          {FeaturedBooksData}
        </div>
      </div>
    </>
  );
};


