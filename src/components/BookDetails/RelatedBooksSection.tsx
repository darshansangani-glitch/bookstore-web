import { useNavigate } from "react-router-dom";
import BookCard from "../Books/BookCards";
import { IoIosArrowRoundForward } from "react-icons/io";
import { BookInfo } from "../../pages/BookDetailsPage";
interface RelatedBooks {
  relatedBooks: BookInfo[];
  loading: Boolean;
  handleRequestSubmission: <T extends string>(_id: T) => Promise<void> | null;
}
export default function RelatedBooksSection({
  relatedBooks,
  handleRequestSubmission,
}: RelatedBooks) {
  const navigate = useNavigate();
  const relatedBooksData: React.ReactNode = relatedBooks.map((book) => {
    return (
      <BookCard
        key={book._id}
        id={book._id}
        category={book.category}
        author={book.author}
        bookName={book.book_name}
        src={`${import.meta.env.VITE_SERVER_URL}${book.book_image_filename}`}
        handleRequestSubmission={handleRequestSubmission}
        rent_price={book.rent_price}
        buy_price={book.buy_price}
      />
    );
  });
  return (
    <div className="2xl:w-355 lg:w-285 md:w-235 flex flex-1 flex-col my-10 gap-10 p-6 font-plus">
      <span className="text-[30px] font-bold">Related Books</span>
      <div className="grid grid-cols-4 overflow-hidden gap-4">
        {relatedBooksData}
      </div>
      <div className="flex justify-end">
        <button
          className="flex items-center gap-2 text-[#111111] text-[16px] font-medium font-plus transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-110 hover:bg-[#74642F] hover:text-white p-2"
          onClick={() => navigate("/books")}
        >
          View All Products <IoIosArrowRoundForward size={25} />
        </button>
      </div>
    </div>
  );
}
