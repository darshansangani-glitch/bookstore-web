import { useEffect, useState } from "react";
import CreditCard from "./CardSection";
import CodSection from "./CodSection";
import PaymentMethodModes from "./PaymentMethodModes";
import UPIInputs from "./UPIInputs";
import { useNavigate } from "react-router-dom";
import ClipLoading from "../Loading";
import { PaymentModesProps } from "../../interfaces/interface";

export default function PaymentMethod({
  handleSubmit,
  setType,
  loading,
}: PaymentModesProps) {
  const [active, setActive] = useState<number | null>(0);

  const navigate = useNavigate();
  useEffect(() => {
    setType(active !== 0 ? (active === 1 ? "UPI" : "Cod") : "Credit/Debit");
  }, [active]);
  return (
    <form
      className="2xl:w-230 w-full flex flex-col bg-white p-8 rounded-xl space-y-5 h-fit"
      onSubmit={handleSubmit}
    >
      <span className="text-2xl font-semibold">Payment Method</span>
      <PaymentMethodModes setActive={setActive} active={active} />
      {
        {
          0: <CreditCard />,
          1: <UPIInputs />,
          2: <CodSection />,
        }[active !== null ? active : 0]
      }
      <div className="flex justify-between gap-5 mt-5 font-semibold text-xl">
        <button
          type="button"
          className="p-2 py-3 w-1/2 border rounded-lg hover:bg-gray-100"
          onClick={() => navigate("/cart")}
        >
          Back to Cart
        </button>
        <button
          type="submit"
          className="p-2 py-3 w-1/2 border rounded-lg text-white bg-[#74642F] hover:bg-[#4b3f19] flex gap-5 items-center justify-center"
        >
          <span>{loading ? <ClipLoading /> : null}</span> Place Order
        </button>
      </div>
    </form>
  );
}
