import { useNavigate, useParams } from "react-router-dom";
import { api } from "../utils/api";
import { useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import ReusableIntro from "../components/Intro";
import BookImage from "../components/BookDetails/BookImage";
import BookContent from "../components/BookDetails/BookContent";
import RelatedBooksSection from "../components/BookDetails/RelatedBooksSection";

export interface BookInfo {
  _id: string;
  book_name: string;
  category: string;
  shelf_name: string;
  quantity: string;
  description: string;
  book_image: string;
  book_image_filename: string;
  author: string;
}
export default function BookDetailPage() {
  const navigate = useNavigate();
  const param = useParams();
  const token = useAppSelector((s) => s.auth.token);
  const [book, setBook] = useState<BookInfo>({
    _id: "",
    book_name: "",
    category: "",
    shelf_name: "",
    quantity: "",
    description: "",
    book_image: "",
    book_image_filename: "",
    author: "",
  });
  const booksPerPage = 4;
  const [relatedBooks, setRelatedBooks] = useState<BookInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const loadBookInfo = async () => {
    try {
      const data = await api.get(`/book/${param.id}`, token ? token : "");
      setBook(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRequestSubmission = async <T extends string>(id: T) => {
    try {
      console.log(id);
      const result = await api.post(
        `/book/request/add/${id}`,
        { id },
        token ? token : "",
      );
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  const loadRelatedBooksData = async () => {
    try {
      const data = await api.post(
        "/book/related-book",
        {
          limit: booksPerPage,
          category: book.category,
          author: book.author,
          currentBookId: param,
        },
        token ? token : "",
      );
      const withIds = data.data.map((item: BookInfo) =>
        item._id ? item : { ...item, _id: item._id },
      );
      setRelatedBooks(withIds);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadBookInfo();
  }, []);
  useEffect(() => {
    if (book) {
      loadRelatedBooksData();
    }
  }, [booksPerPage, book]);
  return (
    <div className="w-full flex flex-col justify-center items-center mt-2!">
      <ReusableIntro
        path="books"
        pageName="Books"
        pageTitle="Book Details"
        previousPage="Home"
        bookName={book.book_name}
      />
      <div className="flex flex-col my-10 w-355">
        <div className="flex justify-between items-center ">
          <span className="text-[60px] font-bold p-4 py-15 leading-14 text-gray-600">
            {book.book_name}
          </span>
          <button
            className="w-35 h-10 p-2 px-4 font-bold text-22px border border-gray-300 rounded-[5px] hover:bg-[#74642F] hover:text-white"
            onClick={() => navigate("/books")}
          >
            Go Back
          </button>
        </div>
        <div className="w-355 flex  justify-center ">
          <BookImage
            loading={loading}
            src={`${import.meta.env.VITE_SERVER_URL}${book.book_image_filename}`}
            bookName={book.book_name}
          />
          <BookContent
            book_name={book.book_name}
            author={book.author}
            description={book.description}
            category={book.category}
          />
        </div>
        <RelatedBooksSection
          handleRequestSubmission={handleRequestSubmission}
          relatedBooks={relatedBooks}
          loading={loading}
        />
      </div>
    </div>
  );
}
