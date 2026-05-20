import { RiDeleteBin6Line } from "react-icons/ri";
import { removeFromCart } from "../../redux/features/slice/cartSlice";
import { useAppDispatch } from "../../redux/hooks";
import { SetStateAction } from "react";

interface CartCardProps {
  _id: string;
  src: string;
  book_name: string;
  author: string;
  category: string;
  orderType: string;
  setBuyPopup?: React.Dispatch<SetStateAction<boolean>>;
  rentPrice: number;
  buyPrice: number
}

export default function CartCardBuyRent(props: CartCardProps) {
  const dispatch = useAppDispatch();
  const handleRemoveItems = async (id: string) => {
    dispatch(removeFromCart({ _id: id }));
  };
  return (
    <div className="w-full flex p-5 hover:bg-gray-100 " key={props._id}>
      <img src={props.src} alt="" className="h-25 max-w-15" />
      <div className="flex flex-col px-5 gap-1 w-50">
        <span className="text-[22px] font-plus font-bold overflow-hidden whitespace-nowrap text-ellipsis max-w-60">
          {props.book_name}
        </span>
        <span className="text-[16px] font-medium">By {props.author}</span>
        <span className="flex gap-2 text-[16px] overflow-hidden whitespace-nowrap text-ellipsis max-w-60">
          <span className="font-black">Category: </span>
          {props.category}
        </span>
      </div>
      <div className="w-full flex flex-col items-end justify-between ">
        <RiDeleteBin6Line
          className="text-red-400 hover:text-red-600 transition delay-50 duration-150 ease-in-out hover:-translate-y-1 hover:scale-100"
          onClick={() => handleRemoveItems(props._id)}
        />
      </div>
    </div>
  );
}
