import Slick from "../components/Home/Slick.js";
import Associate from "../components/Home/Associate.js";
import FeaturedBooks from "../components/Home/FeaturedBooks.js";
import BestBook from "../components/Home/BestBook.js";
import PopularBooks from "../components/Home/Popular.js";
import Quotes from "../components/Home/Quotes.js";
import BooksWithOffer from "../components/Home/BooksWithOffer.js";
import { useAppSelector } from "../redux/hooks.js";
import { api } from "../utils/api.js";
import { useEffect, useState } from "react";
import { BookInfo } from "./BookDetailsPage.js";

export default function Home() {
  const [featuredBooks, setFeaturedBooks] = useState<BookInfo[]>([]);
  const [popularBooks, setPopularBooks] = useState<BookInfo[]>([]);
  const [uniqueCategories, setUniqueCategories] = useState<string[]>([]);
  const [category, setCategory] = useState<string>("");
  const [topBook, setTopBook] = useState<BookInfo>({
    _id: "",
    book_name: "",
    quantity: 0,
    description: "",
    author: "",
    category: "",
    shelf_name: "",
    book_image: "",
    book_image_filename: "",
    rent_price: 0,
    buy_price: 0,
  });
  const token = useAppSelector((s) => s.auth.token);
  const loadFeaturedBooks = async () => {
    try {
      const data = await api.get("/book/featured", token ? token : "");
      setFeaturedBooks(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const loadPopularBooks = async () => {
    try {
      const data = await api.get(
        `/book/popular?category=${category}`,
        token ? token : "",
      );
      setPopularBooks(data.data);
      setUniqueCategories(data.categories);
    } catch (error) {
      console.log(error);
    }
  };

  const loadTopBookData = async () => {
    try {
      const data = await api.get("/book/top-book", token ? token : "");
      setTopBook(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadTopBookData();
    loadFeaturedBooks();
  }, [token]);

  useEffect(() => {
    loadPopularBooks();
  }, [category, token]);

  return (
    <>
      <main className="w-screen flex flex-col justify-center">
        <Slick />
        <Associate />
        <FeaturedBooks featuredBooks={featuredBooks} />
        <BestBook topBook={topBook} />
        <PopularBooks
          popularBooks={popularBooks}
          setCategory={setCategory}
          uniqueCategories={uniqueCategories}
        />
        <Quotes />
        <BooksWithOffer />
      </main>
    </>
  );
}
