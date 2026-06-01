import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/slice/cartSlice";
import { cardsProps } from "../../interface/interface";

export default function BookCard(props: cardsProps<string>) {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const handleDispatch = () => {
    dispatch(
      addToCart({
        _id: props.id,
        author: props.author,
        book_name: props.bookName,
        category: props.category,
        src: props.src,
        orderType: "",
        rentPrice: props.rent_price,
        buyPrice: props.buy_price,
      }),
    );
  };
  return (
    <div
      key={props.id}
      className=" sm:block flex justify-center items-center flex-col w-full"
    >
      <div className="md:w-60 md:h-80 w-50 h-70 relative xl:w-82 lg:w-80 xl:h-109 lg:h-89 flex justify-center items-center overflow-hidden bg-[#EFEEE8] font-plus ">
        {props.offers ? (
          <span className="absolute top-4 -left-12 bg-[#74642F] text-white text-sm font-bold px-16 py-1 transform -rotate-45 shadow-md">
            {props.offers}
          </span>
        ) : null}
        <div className=" book-btns flex gap-5 w-60 xl:w-82 lg:w-70 opacity-0 transition-opacity absolute top-1/2 leading-10 z-10 hover:opacity-100">
          <button
            className="cursor-pointer hover:bg-[#74642F] hover:text-white text-lg font-bold w-38 h-12.45 p-2 text-black bg-white  "
            onClick={() => {
              navigate(`/books/${props.id}`);
            }}
          >
            View Details
          </button>
          <button
            className="cursor-pointer hover:bg-[#74642F] w-38 h-12.45 p-2 text-white bg-black text-lg font-bold"
            onClick={handleDispatch}
          >
            Add to Cart
          </button>
        </div>
        <img
          src={props.src}
          alt=""
          className="xl:w-54.75 lg:w-45 xl:h-80 lg:h-70 w-40 h-60 shadow-lg shadow-gray-400"
        />
      </div>
      <div className="xl:w-82 lg:w-70 w-60 p-5 flex flex-1 flex-col gap-2 items-center">
        <span className="text-gray-400 font-plus text-lg w-full">
          {props.author}
        </span>
        <span className="font-prata truncate w-full text-xl text-[#111111] font-bold block">
          {props.bookName}
        </span>
        <span className="font-prata w-full ">{props.category}</span>
      </div>
    </div>
  );
}
