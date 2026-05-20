import { useEffect, useState } from "react";
import CartPageTable from "../components/Cart/CartTableLayout";
import ReusableIntro from "../components/PageHeader";
import { api } from "../utils/api";
import { useAppSelector } from "../redux/hooks";
import SummarySection from "../components/Cart/Summary";
import BuyBooksPopup from "../components/Cart/BuyBookPopup";
import { MdErrorOutline } from "react-icons/md";

export interface CartData {
  _id?: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}
export default function CartPage() {
  const token = useAppSelector((s) => s.auth.token);
  const [buyPopup, setBuyPopup] = useState<boolean>(false);
  const [loading, setLoading] = useState(false);
  const [address, setAddress] = useState({
    street: "",
    city: "",
    state: "",
    zipCode: "",
  });
  const [addresses, setAddresses] = useState<CartData[]>([]);
  const [addOpen, setAddOpen] = useState(false);

  const [error, setError] = useState("");
  const loadAddresses = async () => {
    try {
      const data = await api.get("/user/addresses", token ? token : "");
      setAddresses(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    loadAddresses();
  }, [token]);

  const handleAddAddress = async () => {
    try {
      setLoading(true);
      setError("");
      const data = await api.post(
        "/user/add-address",
        address,
        token ? token : "",
      );
      if (data.data) {
        loadAddresses();
        setLoading(false);
        setAddOpen(false);
      } else {
        setError(data.message || "Failed to add address");
        setLoading(false);
      }
    } catch (error) {
      console.error("Error adding address:", error);
      setError("An error occurred while adding the address");
      setLoading(false);
    }
  };
  const handleDeleteAddress = async (id: string) => {
    try {
      setLoading(true)
      await api.delete(
        `/user/delete-address/${id}`,
        token ? token : "",
      );
      await loadAddresses();
      setLoading(false)
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="w-full flex flex-col justify-center items-center mt-2 font-plus relative ">
      {buyPopup ? (
        <BuyBooksPopup setBuyPopup={setBuyPopup} buyPopup={buyPopup} />
      ) : null}
      <ReusableIntro
        pageName="Cart"
        pageTitle="Books Cart"
        previousPage="Home "
        path="cart"
      />
      <span className="2xl:w-355 flex items-center gap-2 lg:w-285 border-l-7 border-l-[#aa8d36] bg-white mt-5 text-[22px] font-bold rounded-xl p-5 md:w-235">
        <MdErrorOutline size={30} />
        Notes: You Can Only Rent 2 Books At one time!!
      </span>
      <div className="2xl:w-355 lg:w-285 my-5 md:w-235 flex gap-4">
        <div className="2xl:w-230 lg:w-150 rounded-2xl bg-white h-fit shadow-xl">
          <CartPageTable />
        </div>
        <div className="2xl:w-120 md:w-100 rounded-2xl bg-white h-fit shadow-xl">
          <SummarySection
            setAddOpen={setAddOpen}
            loading={loading}
            setAddress={setAddress}
            addresses={addresses}
            addOpen={addOpen}
            error={error}
            handleAddAddress={handleAddAddress}
            handleDeleteAddress={handleDeleteAddress}
          />
        </div>
      </div>
    </div>
  );
}
