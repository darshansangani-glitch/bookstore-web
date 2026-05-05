import Slick from "../components/Home/Slick.js";
import Associate from "../components/Home/Associate.js";
import FeaturedBooks from "../components/Home/FeaturedBooks.js";
import BestBook from "../components/Home/BestBook.js";
import PopularBooks from "../components/Home/Popular.js";
import Quotes from "../components/Home/Quotes.js";
import BooksWithOffer from "../components/Home/BooksWithOffer.js";

export default function Home() {
  return (
    <>
      <main className="w-screen flex flex-col justify-center">
        <Slick />
        <Associate />
        <FeaturedBooks />
        <BestBook />
        <PopularBooks />
        <Quotes />
        <BooksWithOffer />
      </main>
    </>
  );
}
