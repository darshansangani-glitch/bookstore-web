import { CheckoutBooks } from "../../interfaces/interface";

export default function CheckoutBooksCard(props: CheckoutBooks) {
  return (
    <div className="flex gap-2">
      <img src={props.src} alt="" className="w-15 h-20 rounded-lg" />
      <div className="flex flex-col font-semibold">
        <span>{props.book_name}</span>
        <span className="font-medium">{props.orderType}</span>
        <span>${props.price}</span>
      </div>
    </div>
  );
}
