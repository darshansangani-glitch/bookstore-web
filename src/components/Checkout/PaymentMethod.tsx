import { useState } from "react";
import CreditCard from "./CardSection";
import CodSection from "./CodSection";
import PaymentMethodModes from "./PaymentMethodModes";
import UPIInputs from "./UPIInputs";
import { useNavigate } from "react-router-dom";

export default function PaymentMethod() {
  // const [openCredit, setOpenCredit] = useState<Boolean>(false);
  // const [openUPI, setOpenUPI] = useState<Boolean>(false);
  // const [openCod, setOpenCod] = useState<Boolean>(false);
  const [active, setActive] = useState<number | null>(0);
  const navigate = useNavigate();
  return (
    <div className="2xl:w-230 w-full flex flex-col bg-white p-8 rounded-xl space-y-5 h-fit">
      <span className="text-2xl font-semibold">Payment Method</span>
      <PaymentMethodModes setActive={setActive} active={active} />
      {
        {
          0: <CreditCard />,
          1: <UPIInputs />,
          2: <CodSection />,
        }[active ? active : 0]
      }
      <div className="flex justify-between gap-5 mt-5 font-semibold text-[20px]">
        <button
          className="p-2 py-3 w-1/2 border rounded-lg hover:bg-gray-100"
          onClick={() => navigate("/cart")}
        >
          Back to Cart
        </button>
        <button className="p-2 py-3 w-1/2 border rounded-lg text-white bg-[#74642F] hover:bg-[#4b3f19]">
          Place Order
        </button> 
      </div>
    </div>
  );
}
