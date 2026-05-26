import { useContext } from "react";
import { PaymentMethodsContext } from "../../pages/Checkout";
import { CheckoutPaymentsDataProps } from "../../interfaces/interface";

export default function UPIInputs() {
  const { setUpiId, errors } = useContext(
    PaymentMethodsContext,
  ) as CheckoutPaymentsDataProps;
  return (
    <div className="bg-gray-50 font-semibold text-[18px] rounded-xl p-5 ">
      <label className="flex flex-col gap-2">
        Enter UPI ID
        <input
          type="text"
          placeholder="yourname@upi"
          className=" border rounded-lg p-3 border-gray-300"
          onChange={(e) => {
            setUpiId(e.target.value);
          }}
          name="upiId"
          id="upiId"
          required
        />
        {typeof errors === "string" ? (
          <span className="text-red-400">{errors}</span>
        ) : null}
      </label>
    </div>
  );
}
