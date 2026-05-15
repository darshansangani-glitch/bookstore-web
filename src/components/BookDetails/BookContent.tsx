import { BookInfo } from "../../pages/BookDetailsPage";
import { addToCart } from "../../redux/features/slice/cartSlice";
import { useAppDispatch } from "../../redux/hooks";

interface BookContentProps {
  book: BookInfo;
}

export default function BookContent(props: BookContentProps) {
  const dispatch = useAppDispatch();
  const handleDispatch = () => {
    dispatch(
      addToCart({
        _id: props.book._id,
        author: props.book.author,
        book_name: props.book.book_name,
        category: props.book.category,
        src: `${import.meta.env.VITE_SERVER_URL}${props.book.book_image_filename}`,
        orderType: "",
        rentPrice: props.book.rent_price,
        buyPrice: props.book.buy_price
      }),
    );
  };
  return (
    <div
      className="h-full 2xl:w-275 lg:w-205 flex flex-col font-plus"
      key={props.book._id}
    >
      <div className="flex flex-col flex-1 gap-2 pb-3 border-b-2 border-b-[#E0E0E0]">
        <span className="text-[20px]">
          <span className="text-black font-bold">Author: </span>{" "}
          {props.book.author}
        </span>
        <span className="text-[20px]">
          <span className="text-black font-bold">Category: </span>{" "}
          {props.book.category}
        </span>
        {props.book.quantity > 0 ? (
          <span className="text-[24px] font-bold text-green-500">In stock</span>
        ) : (
          <span className="text-[20px] font-bold text-red-500">
            Out of stock
          </span>
        )}
        <div className="flex justify-between items-center">
          <div className="w-70 flex justify-between py-5">
            <span className="flex flex-col text-gray-500 text-[18px] gap-1">
              Buy Price
              <span className="font-bold text-gray-900 text-[24px]">
                ${props.book.buy_price}
              </span>
            </span>
            <span className="border h-15  border-gray-300" />
            <span className="flex flex-col text-gray-500 text-[18px] gap-1">
              Rent Price
              <span className="font-bold text-[#74642F] text-[24px]">
                ${props.book.rent_price}/Week
              </span>
            </span>
          </div>
          <button
            type="button"
            className="border-0 p-2 px-6 bg-black text-white font-bold hover:bg-[#9c894d]"
            onClick={handleDispatch}
          >
            Add to Cart
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-2 py-5">
        <span className="text-[22px] font-bold text-gray-600 w-fit  py-2 ">
          Description
        </span>
        <span className="text-[18px] whitespace-pre-line">
          {props.book.description}
        </span>
      </div>
    </div>
  );
}
