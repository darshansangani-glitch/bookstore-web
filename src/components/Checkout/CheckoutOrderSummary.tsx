import { useAppSelector } from "../../redux/hooks";
import CheckoutBookList from "./CheckoutBookList";

export default function CheckoutOrderSummary() {
  const rentBooksData = useAppSelector((s) =>
    s.booksCart.cart.filter((item) => item.orderType === "Rent"),
  );
  const buyBooksData = useAppSelector((s) =>
    s.booksCart.cart.filter((item) => item.orderType === "Buy"),
  );
  const totalRentPrice = rentBooksData
    .reduce((total, book) => total + book.rentPrice, 0)
    .toFixed(2);
  const totalBuyPrice = buyBooksData
    .reduce((total, book) => total + book.buyPrice, 0)
    .toFixed(2);
  const subTotal = (
    parseFloat(totalRentPrice) + parseFloat(totalBuyPrice)
  ).toFixed(2);
  return (
    <div className="bg-white p-5 xl:w-95 w-full rounded-xl h-fit sticky top-0">
      <div className="text-[24px] font-semibold mb-6">Order Summary</div>
      <CheckoutBookList />
      <div className="py-3 flex flex-col space-y-2 border-b border-b-gray-300">
        <div className="flex justify-between">
          Buy Total <span className="font-semibold">${totalBuyPrice}</span>{" "}
        </div>
        <div className="flex justify-between">
          Rent Total <span className="font-semibold">${totalRentPrice}</span>
        </div>
      </div>
      <div className="pt-3 flex justify-between text-black font-semibold text-xl">
        Total: <span>${subTotal}</span>
      </div>
    </div>
  );
}
