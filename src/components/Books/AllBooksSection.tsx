import { book } from "../../pages/Books";
import BookCard from "./BookCards";

interface ShowAllBooksProps {
  displayedData: book[];
}

export default function ShowAllBooks({ displayedData }: ShowAllBooksProps) {
  const bookCardsData = displayedData.map((b: book) => {
    return (
      <BookCard
        key={b._id}
        id={b._id}
        src={`${import.meta.env.VITE_SERVER_URL}${b.book_image_filename}`}
        category={b.category}
        bookName={b.book_name}
        author={b.author}
        rent_price={b.rent_price}
        buy_price={b.buy_price}
      />
    );
  });
  return (
    <div className="w-full flex flex-col justify-center items-center gap-15 pb-2">
      <div className="w-full grid grid-cols-3 justify-center items-center gap-5  p-4 border-b border-b-[#E0E0E0] ">
        {bookCardsData}
      </div>
    </div>
  );
}
