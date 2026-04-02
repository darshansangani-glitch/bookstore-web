import React from "react";
import MoonImg from "../assets/moon-landing-hero.jpg";

interface Featured {
  id: string;
  name: string;
  category: string;
  src: string;
}

const FeatureBooks: Featured[] = [
  {
    id: "0",
    name: "The Seven Husbands of Evelyn Hugo",
    category: "Fiction",
    src: "https://m.media-amazon.com/images/I/81LscKUplaL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "1",
    name: "The Silent Patient",
    category: "Thriller",
    src: "https://m.media-amazon.com/images/I/81LscKUplaL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "2",
    name: "Atomic Habits",
    category: "NonFiction",
    src: "https://m.media-amazon.com/images/I/81LscKUplaL._AC_UF1000,1000_QL80_.jpg",
  },
  {
    id: "3",
    name: "The Midnight Library",
    category: "Fiction",
    src: "https://m.media-amazon.com/images/I/81LscKUplaL._AC_UF1000,1000_QL80_.jpg",
  },
];

export const BookCards = ({ id, name, category, src }: Featured) => {
  return (
    <div id={id} className="w-60! h-92! relative ">
      <img
        src={src}
        alt=""
        className="w-70! h-75! rounded-tl-xl rounded-tr-xl"
      />
      <span className="absolute left-2  top-2 text-white font-extrabold text-[12px] bg-orange-300  rounded-2xl pl-2 pr-2    ">
        {category}
      </span>
      <div className=" flex flex-col  items-center">
        <h1 className="text-[20px]! p-3 max-w-52! flex  text-ellipsis! overflow-hidden! whitespace-nowrap!   text-gray-700 font-semibold">
          {name}
        </h1>
        <button
          className="p-4 min-w-55! mb-4 rounded-xl bg-orange-400 text-white border"
          type="submit"
        >
          Request Book
        </button>
      </div>
    </div>
  );
};

export const FeaturedBooks = () => {
  const FeaturedBooksData: React.ReactNode = FeatureBooks.map((book) => {
    return (
      <BookCards
        id={book.id}
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
      <div className="flex w-full! justify-center items-center  gap-10 ">
        {FeaturedBooksData}
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
