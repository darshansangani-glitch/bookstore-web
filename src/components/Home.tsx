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
];

export const BookCards = ({ id, name, category, src, author }: Featured) => {
  return (
    <div id={id} className="w-60! h-112! relative shadow-xl shadow-gray-500">
      <img
        src={src}
        alt=""
        className="w-70! h-80! rounded-tl-xl rounded-tr-xl"
      />
      <span className="absolute left-2  top-2 text-white font-extrabold text-[12px] bg-orange-300  rounded-2xl pl-2 pr-2    ">
        {category}
      </span>
      <div className=" p-3 w-60 flex flex-1 flex-col h-35! border bg-gray-100 border-slate-200 rounded-b-2xl items-center ">
        <span className="w-full  text-[20px]! text-gray-400 font-bold">
          {name}
        </span>
        <span>{author}</span>
        <div className="flex w-full ">
          <button
            className="p-2 min-w-40! mb-4 rounded-xl bg-orange-400 text-white border"
            type="submit"
          >
            Request Book
          </button>
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
      <div className="w-full flex ml-auto mr-auto justify-center m-20">
        <h1 className="text-5xl w-100 flex justify-center pb-3 border-b-4 border-b-gray-500! items-center text-black font-medium">
          Featured Books
        </h1>
      </div>
      <div className="w-full flex justify-center ">
        <div className="flex w-fit! justify-center items-center  gap-10 bg-white shadow-xl rounded-2xl shadow-gray-400  h-160 p-5 ">
          {FeaturedBooksData}
        </div>
      </div>
    </>
  );
};

export const QuotesSection = () => {
  return (
    <div className="w-full flex ml-auto mr-auto justify-center m-40">
      <div className="intro-img">
        <img
          className="w-130! rounded-2xl h-90"
          src={MoonImg}
          alt="Mask Image"
        />
      </div>
      <div className="intro-block">
        <p className="text-[20px]! p-5 text-gray-400! flex justify-center">
          "Sin is inevitable, but all shall be well, and all shall be well, and
          all manner of thing shall be well."{" "}
          <span className="text-[18px]! w-full flex! justify-end font-extrabold text-black">
            – Julian of Norwich (Mystic)
          </span>
        </p>
        <p className="text-[20px]! p-5 text-gray-400! flex justify-center">
          "Fear—and the boldest men may feel fear—is something horrible, an
          atrocious sensation, a sort of decomposition of the soul."{" "}
          <span className="text-[18px]! w-full flex! justify-end font-extrabold text-black">
            – Julian Hawthorne
          </span>
        </p>
      </div>
    </div>
  );
};
