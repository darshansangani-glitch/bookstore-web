import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../redux/hooks";
import { addToCart } from "../../redux/features/slice/cartSlice";

interface cardsProps<T> {
  id: T;
  category: T;
  author: string;
  bookName: T;
  src: T;
  offers?: string;
  handleRequestSubmission?: <T extends string>(_id: T) => Promise<void> | null;
  loading?: boolean;
  rent_price: number,
  buy_price: number
}

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
  // const handleRequestSubmission = useContext(HandleRequestContext);
  return (
    <>
      <div key={props.id}>
        <div className="container relative w-82 h-109 flex justify-center items-center overflow-hidden bg-[#EFEEE8] font-plus ">
          {props.offers ? (
            <span className="absolute top-4 -left-12 bg-[#74642F] text-white text-sm font-bold px-16 py-1 transform -rotate-45 shadow-md">
              {props.offers}
            </span>
          ) : null}
          <div className=" book-btns flex gap-5 w-82 opacity-0 transition-opacity absolute top-1/2 leading-10 z-3 hover:opacity-100">
            <button
              className="cursor-pointer hover:bg-[#74642F] hover:text-white text-[18px] font-bold w-38 h-12.45 p-2 text-black bg-white  "
              onClick={() => {
                navigate(`/books/${props.id}`);
              }}
            >
              View Details
            </button>
            <button
              className="cursor-pointer hover:bg-[#74642F] w-38 h-12.45 p-2 text-white bg-black text-[18px] font-bold"
              onClick={handleDispatch}
            >
              Add to Cart
            </button>
          </div>
          <img
            src={props.src}
            alt=""
            className="w-54.75 h-80! shadow-lg shadow-gray-400"
          />
        </div>
        <div className="w-81.5 p-5 flex flex-1 flex-col gap-2 items-center">
          <span className="text-gray-400 font-plus text-[18px] w-full">
            {props.author}
          </span>
          <span className="font-prata truncate w-full text-[22px] text-[#111111] font-bold block">
            {props.bookName}
          </span>
          <span className="font-prata w-full ">{props.category}</span>
        </div>
      </div>
    </>
  );
}
