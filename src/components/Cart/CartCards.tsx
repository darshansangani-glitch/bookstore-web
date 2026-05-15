import { RiDeleteBin6Line } from "react-icons/ri";
import { useAppDispatch } from "../../redux/hooks";
import {
  orderTypeChange,
  removeFromCart,
} from "../../redux/features/slice/cartSlice";
import Dropdown from "./Dropdown";
interface CartCardProps {
  _id: string;
  src: string;
  book_name: string;
  author: string;
  category: string;
  orderType: string;
  rentPrice: number;
  buyPrice: number;
}

export default function CartCard(props: CartCardProps) {
  const dispatch = useAppDispatch();
  const handleRemoveItems = async (id: string) => {
    dispatch(removeFromCart({ _id: id }));
  };

  const handleToggle = async (orderType: string, id: string) => {
    dispatch(
      orderTypeChange({
        orderType: orderType,
        _id: id,
      }),
    );
  };
  return (
    <>
      <tr className="flex py-5" key={props._id}>
        <td className="w-50 flex justify-center relative">
          <span
            className={`absolute text-[15px] right-10 -top-3 px-2 font-bold text-center   rounded-xl ${props.orderType !== "" ? (props.orderType === "Buy" ? "bg-[#74642F] text-white" : "bg-white text-[#74642F] border border-gray-200") : ""} `}
          >
            {props.orderType !== "" ? props.orderType : ""}
          </span>
          <img src={props.src} alt="" className="rounded-lg w-25 h-37 " />
        </td>
        <td className="2xl:w-120 lg:w-100 flex  justify-between flex-col">
          <div className="flex flex-col gap-1">
            <span className="text-[22px] font-plus font-bold overflow-hidden whitespace-nowrap text-ellipsis">
              {props.book_name}
            </span>
            <span className="text-[18px] text-gray-600 font-medium">
              By {props.author}
            </span>
            <span className="text-gray-500 text-[18px] font-medium">
              Category: {props.category}
            </span>
          </div>

          <div className="flex justify-between w-50 py-5">
            <span className="flex flex-col text-gray-500 text-[14px] gap-1">
              Buy Price
              <span className="font-bold text-gray-900 text-[24px]">
                ${props.buyPrice}
              </span>
            </span>
            <span className="border h-full  border-gray-200" />
            <span className="flex flex-col text-gray-500 text-[14px] gap-1">
              Rent Price
              <span className="font-bold text-[#74642F] text-[24px]">
                ${props.rentPrice}/Week
              </span>
            </span>
          </div>
        </td>
        <td className="w-50 flex flex-col justify-center items-center gap-3">
          <span
            className="flex text-[20px] rounded-xl justify-center  items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 group cursor-pointer"
            onClick={() => handleRemoveItems(props._id)}
          >
            <RiDeleteBin6Line />
            Remove
          </span>
          <Dropdown
            id="order-type-dropdown"
            orderType={props.orderType}
            data={[
              { id: "Buy", name: "Buy", price: `${props.buyPrice}` },
              {
                id: "Rent",
                name: "Rent",
                price: `${props.rentPrice}/Week`,
              },
            ]}
            selectedId={props.orderType}
            onChange={(id) => handleToggle(id, props._id)}
          />
        </td>
      </tr>
    </>
  );
}
