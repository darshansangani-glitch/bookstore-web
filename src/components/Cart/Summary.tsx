import { useAppSelector } from "../../redux/hooks";
import CartCardBuyRent from "./filterCartCard";
import { useNavigate } from "react-router-dom";
import { FaPhoneAlt } from "react-icons/fa";
import { LuClock4, LuBookOpen } from "react-icons/lu";
import AddAddressForm from "./AddAddressForm";
import { RiAddLine, RiDeleteBin6Line } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { CartData } from "../../pages/Cart";

interface SummaryProps {
  loading: boolean;
  setAddress: React.Dispatch<React.SetStateAction<CartData>>;
  addresses: CartData[];
  addOpen: boolean;
  error: string;
  setAddOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddAddress: () => void;
  handleDeleteAddress: (id: string) => void;
}

export default function SummarySection(props: SummaryProps) {
  const user = useAppSelector((s) => s.auth.user);
  const navigate = useNavigate();

  const rentBooksData = useAppSelector((s) =>
    s.booksCart.cart.filter((item) => item.orderType == "Rent"),
  );
  const rentBooksList = rentBooksData.map((items) => {
    return (
      <CartCardBuyRent
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
  const buyBooksData = useAppSelector((s) =>
    s.booksCart.cart.filter((item) => item.orderType == "Buy"),
  );
  const buyBooksList = buyBooksData.map((items) => {
    if (items.orderType == "Buy") {
      return (
        <CartCardBuyRent
          key={items._id}
          src={items.src}
          book_name={items.book_name}
          author={items.author}
          category={items.category}
          orderType={items.orderType}
          _id={items._id}
          rentPrice={items.rentPrice}
          buyPrice={items.buyPrice}
        // setBuyPopup={props.setBuyPopup}
        />
      );
    }
  });

  const totalRentPrice = rentBooksData
    .reduce((total, book) => total + book.rentPrice, 0)
    .toFixed(2);
  const totalBuyPrice = buyBooksData
    .reduce((total, book) => total + book.buyPrice, 0)
    .toFixed(2);
  const subTotal = (
    parseFloat(totalRentPrice) + parseFloat(totalBuyPrice)
  ).toFixed(2);
  const allAddresses = props.addresses.map((address) => {
    return (
      <label
        key={address._id}
        className="flex gap-2 border border-gray-200 justify-between rounded-xl p-5"
      >
        <div className="h-4.75 border rounded-2xl px-1 py-1 items-center flex">
          <input
            type="radio"
            name="shippingAddress"
            className="peer appearance-none w-2 h-2   border-gray-300 rounded-full checked:bg-[#74642F] relative transition-all cursor-pointer"
            id={address._id}
            defaultChecked={props.addresses[0]._id === address._id}
          />
        </div>
        <div className="w-70 flex flex-col gap-2">
          <span>{address.street}</span>
          <span>
            {address.city}, {address.state} - {address.zipCode}
          </span>
        </div>
        <button
          className="hover:text-red-500 border p-1 rounded h-fit"
          onClick={() =>
            props.handleDeleteAddress(address._id ? address._id : "")
          }
        >
          <RiDeleteBin6Line size={18} />
        </button>
      </label>
    );
  });
  console.log("UserName", user.name)
  function getInitials(fullName: string) {
    if (!fullName) return "";
    const nameParts = fullName.split(" ");
    const firstNameInitial = nameParts[0] ? nameParts[0].charAt(0) : "";
    const lastNameInitial =
      nameParts.length > 1 ? nameParts[nameParts.length - 1].charAt(0) : "";
    return (firstNameInitial + lastNameInitial).toUpperCase();
  }

  return (
    <div className="font-plus p-5 flex flex-col gap-10 rounded-2xl h-fit">
      <div className="flex flex-col gap-5 h-fit">
        <div className="flex flex-col gap-4">
          <span className="text-[28px] uppercase font-bold">Order Summary</span>
          <div className="text-[20px] flex flex-col gap-3">
            <div className=" flex flex-col  border-b border-gray-300 p-3 px-5">
              <span className="font-bold text-[16px] uppercase">Contact</span>
              <div className="text-[18px]">
                <span className="font-medium flex items-center gap-2 border-b py-3">
                  <span className="w-15 h-15  rounded-4xl flex items-center justify-center text-[28px] font-bold text-[#74642F] bg-[#b6a56c92] ">
                    {getInitials(user.name)}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-black">{user.name}</span>
                    <span className="font-medium text-[16px] text-gray-500 ">
                      {user.email}
                    </span>
                  </div>
                </span>
                <span className="font-medium flex items-center gap-2 py-2 ">
                  <FaPhoneAlt />
                  {user.mobileNo}
                </span>
              </div>
            </div>
            <div className=" flex flex-col gap-3 border-b border-gray-300 p-3 px-5">
              <span className="flex items-center justify-between gap-1">
                <span className="flex font-bold text-[16px] gap-1 uppercase">
                  Shipping Address
                </span>

                <button
                  className="flex border px-3 py-1 items-center gap-2 rounded-xl text-[16px] hover:bg-[#74642F] hover:text-white font-bold"
                  onClick={() => props.setAddOpen((prev) => !prev)}
                >
                  <RiAddLine />
                  Add
                </button>
              </span>
              {props.addOpen ? (
                <AddAddressForm
                  loading={props.loading}
                  addOpen={props.addOpen}
                  error={props.error}
                  setAddOpen={props.setAddOpen}
                  setAddress={props.setAddress}
                  handleAddAddress={props.handleAddAddress}
                />
              ) : null}
              <div className="font-medium text-[16px] flex flex-col gap-2 leading-3">
                {props.addresses.length > 0 ? (
                  allAddresses
                ) : (
                  <div className="flex flex-col justify-center items-center gap-2">
                    <AiOutlineHome className="bg-gray-200  p-3 rounded-4xl h-15 w-15 text-gray-400" />
                    <span className="font-bold text-[18px]">
                      No Address Found!!
                    </span>
                    <span className="text-[16px]">
                      Add your delivery address to continue
                    </span>
                  </div>
                )}
              </div>
            </div>
            {rentBooksList.length > 0 || buyBooksList.length > 0 ? (
              <div className=" flex flex-col gap-2 p-3 px-5 ">
                <div className=" flex flex-col gap-2 ">
                  <span className="uppercase text-[16px] font-bold">
                    order details
                  </span>
                  <div className="text-[18px] flex flex-col gap-2 border-b py-2">
                    <span className="flex gap-2 items-center font-bold">
                      <LuClock4 />
                      Rent
                      <span className="bg-[#bdae7c] px-2  text-white rounded-2xl text-[14px]">
                        {rentBooksList.length} books
                      </span>
                    </span>
                    <span className=" font-medium flex justify-between">
                      Rental price :
                      <span className="font-bold">${totalRentPrice}</span>
                    </span>
                  </div>
                  <div className="text-[18px] flex flex-col gap-2 border-b py-2">
                    <span className="flex gap-2 items-center font-bold">
                      <LuBookOpen />
                      Buy
                      <span className="bg-[#bdae7c] px-2  text-white rounded-2xl text-[14px]">
                        {buyBooksList.length} books
                      </span>
                    </span>
                    <span className=" font-medium flex justify-between">
                      Purchase price :
                      <span className="font-bold">${totalBuyPrice}</span>
                    </span>
                  </div>
                  <div className="text-[18px]  flex justify-between  gap-2 py-2">
                    <span className=" flex gap-1 flex-col font-bold">
                      Total
                      <span>
                        {buyBooksList.length + rentBooksList.length} books:
                        {rentBooksList.length} Rent, {buyBooksList.length} Buy
                      </span>
                    </span>
                    <span className="font-bold text-xl flex items-center justify-center">
                      ${subTotal}
                    </span>
                  </div>
                  <button className="h-10 py-2 bg-[#74642F] text-white rounded-lg hover:bg-[#5a4d26] transition delay-50 duration-150 ease-in-out hover:-translate-y-1 hover:scale-105 ">
                    Checkout
                  </button>
                </div>
              </div>

            ) : (
              <div className="flex flex-col items-center gap-3 p-5">
                <p className="text-[18px] font-semibold text-slate-400">
                  No Books For Rent or Buy In Your Cart!!
                </p>
                <button
                  className="border-0 bg-[#998e66] hover:bg-[#74642F] w-full text-[18px] text-white p-3 rounded-2xl"
                  onClick={() => {
                    navigate("/books");
                  }}
                >
                  Find Books
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

