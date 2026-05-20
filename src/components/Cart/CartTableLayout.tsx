import { useNavigate } from "react-router-dom";
import CartCard from "./CartCards";
import { useAppSelector } from "../../redux/hooks";

export default function CartPageTable() {
  const cartData = useAppSelector((s) => s.booksCart.cart);
  const navigate = useNavigate();
  const allRequests = cartData.map((items) => {
    return (
      <CartCard
        key={items._id}
        src={items.src}
        book_name={items.book_name}
        author={items.author}
        category={items.category}
        orderType={items.orderType}
        rentPrice={items.rentPrice}
        buyPrice={items.buyPrice}
        _id={items._id}
      />
    );
  });
  return (
    <>
      {allRequests.length > 0 ? (
        <table className="flex flex-col  rounded-2xl w-full">
          <thead className="border-b border-b-gray-300 items-end py-4 px-4 flex text-[#9e9e9e] h-17 font-bold text-[24px]">
            <tr>
              <th className="w-45">Image</th>
              <th className="w-120">Book Details</th>
              <th className="w-50">Actions</th>
            </tr>
          </thead>
          <tbody>{allRequests}</tbody>
        </table>
      ) : (
        <div className=" flex flex-col justify-center items-center h-100 font-plus gap-5">
          <span className="text-[30px] font-bold">Your Cart is Empty.</span>
          <button
            className="flex items-center p-3 text-white w-100 justify-center bg-[#998e66] hover:bg-[#74642F] text-[25px] gap-10 rounded-xl  transition delay-50 duration-150 ease-in-out hover:-translate-y-1 hover:scale-105"
            onClick={() => navigate("/books")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              width="44"
              height="44"
              className=""
              fill="white"
              style={{ opacity: "1", color: "white" }}
            >
              <path d="M922.9 701.9H327.4l29.9-60.9l496.8-.9c16.8 0 31.2-12 34.2-28.6l68.8-385.1c1.8-10.1-.9-20.5-7.5-28.4a34.99 34.99 0 0 0-26.6-12.5l-632-2.1l-5.4-25.4c-3.4-16.2-18-28-34.6-28H96.5a35.3 35.3 0 1 0 0 70.6h125.9L246 312.8l58.1 281.3l-74.8 122.1a34.96 34.96 0 0 0-3 36.8c6 11.9 18.1 19.4 31.5 19.4h62.8a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7h161.1a102.43 102.43 0 0 0-20.6 61.7c0 56.6 46 102.6 102.6 102.6s102.6-46 102.6-102.6c0-22.3-7.4-44-20.6-61.7H923c19.4 0 35.3-15.8 35.3-35.3a35.42 35.42 0 0 0-35.4-35.2M305.7 253l575.8 1.9l-56.4 315.8l-452.3.8zm96.9 612.7c-17.4 0-31.6-14.2-31.6-31.6s14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6m325.1 0c-17.4 0-31.6-14.2-31.6-31.6s14.2-31.6 31.6-31.6s31.6 14.2 31.6 31.6a31.6 31.6 0 0 1-31.6 31.6" />
            </svg>
            Continue Your Shopping
          </button>
        </div>
      )}
    </>
  );
}
