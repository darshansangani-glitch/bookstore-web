import { useNavigate, useParams } from "react-router-dom";
import { api } from "../utils/api";
import { useAppSelector } from "../redux/hooks";
import { useEffect, useState } from "react";
import ReusableIntro from "../components/PageHeader";
import BookImage from "../components/BookDetails/BookImage";
import BookContent from "../components/BookDetails/BookContent";
import RelatedBooksSection from "../components/BookDetails/RelatedBooksSection";
import ClipLoading from "../components/Loading";
import { BookInfo } from "../interface/interface";


export default function BookDetailPage() {
  const navigate = useNavigate();
  const param = useParams();
  const token = useAppSelector((s) => s.auth.token);
  const [book, setBook] = useState<BookInfo>({
    _id: "",
    book_name: "",
    category: "",
    shelf_name: "",
    quantity: 0,
    description: "",
    book_image: "",
    book_image_filename: "",
    author: "",
    rent_price: 0,
    buy_price: 0,
  });
  const booksPerPage = 4;
  const [relatedBooks, setRelatedBooks] = useState<BookInfo[]>([]);
  const [loading, setLoading] = useState(true);

  const loadBookInfo = async () => {
    try {
      const data = await api.get(`/book/${param.id}`, token ? token : "");
      setBook(data.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      navigate("/books");
    }
  };

  const handleRequestSubmission = async <T extends string>(id: T) => {
    try {
      await api.post(`/book/request/add/${id}`, { id }, token ? token : "");
    } catch (error) {
      console.log(error);
    }
  };
  const loadRelatedBooksData = async () => {
    try {
      setLoading(true);
      const data = await api.post(
        "/book/related-book",
        {
          limit: booksPerPage,
          category: book.category,
          author: book.author,
          currentBookId: param.id,
        },
        token ? token : "",
      );
      setRelatedBooks(data.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setLoading(true);
    loadBookInfo();
    useEffect(() => {
      if (book._id) {
        loadRelatedBooksData();
      }
    }, [book._id, book.category, book.author, token, param.id]);
  }, [booksPerPage, book._id, book.category, book.author]);
  return (
    <>
      {loading ? (
        <ClipLoading />
      ) : (
        <div className="w-full flex flex-col justify-center items-center mt-2">
          <ReusableIntro
            path="books"
            pageName="Books"
            pageTitle="Book Details"
            previousPage="Home"
            bookName={book.book_name}
          />

          <div className="flex flex-col my-10 2xl:w-355 lg:w-285">
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
            <div className="2xl:w-355 lg:w-285 flex  justify-center ">
              <BookImage
                loading={loading}
                src={`${import.meta.env.VITE_SERVER_URL}${book.book_image_filename}`}
                bookName={book.book_name}
              />
              <BookContent book={book} />
            </div>
            <RelatedBooksSection
              handleRequestSubmission={handleRequestSubmission}
              relatedBooks={relatedBooks}
              loading={loading}
            />
          </div>
        </div>
      )}
    </>
  );
}
