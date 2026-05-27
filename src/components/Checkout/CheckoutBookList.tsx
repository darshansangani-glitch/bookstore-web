import { useAppSelector } from "../../redux/hooks";
import CheckoutBooksCard from "./CheckoutBooksCard";

export default function CheckoutBookList() {
  const orderedBooks = useAppSelector((s) => s.booksCart.cart);
  return (
    <div className="space-y-3 pb-5 border-b border-b-gray-300">
      {orderedBooks.map((book) => {
        return (
          <CheckoutBooksCard
            key={book._id}
            src={book.src}
            book_name={book.book_name}
            price={book.orderType === "Buy" ? book.buyPrice : book.rentPrice}
            orderType={book.orderType}
          />
        );
      })}
    </div>
  );
}
