import { useContext } from "react";
import { PaymentMethodsContext } from "../../pages/Checkout";
import { CheckoutPaymentsDataProps } from "../../interfaces/interface";

export default function CardInputs() {
  const { paymentData, setPaymentData, errors } = useContext(
    PaymentMethodsContext,
  ) as CheckoutPaymentsDataProps;
  return (
    <div className=" flex flex-col space-y-4 font-semibold">
      <label className="text-lg flex flex-col space-y-2 ">
        <span>Card Number</span>
        <input
          type="number"
          placeholder="1234 5678 9012 3456"
          name="cardNumber"
          id="cardNumber"
          className="border p-3 rounded-lg border-gray-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
          aria-errormessage="cardNumber-error"
          required
          onChange={(e) => {
            setPaymentData({
              ...paymentData,
              cardNumber: e.target.value,
            });
          }}
          onWheel={(e) => (e.target as HTMLElement).blur()}
        />
        {errors !== null && typeof errors !== "string" ? (
          errors.cardNumber ? (
            <div className="flex gap-2 items-center">
              <span className="text-red-400">{errors.cardNumber}</span>
              <span className="text-red-400">
                You have added {paymentData.cardNumber.length} Digits
              </span>
            </div>
          ) : null
        ) : (
          ""
        )}
      </label>
      <label className="text-lg space-y-2 flex flex-col ">
        <span>Cardholder Name</span>
        <input
          type="text"
          name="holderName"
          id="holderName"
          placeholder="John Doe"
          className="border p-3 rounded-lg border-gray-300"
          aria-errormessage="cardHolderName-error"
          required
          onChange={(e) => {
            setPaymentData({
              ...paymentData,
              holderName: e.target.value,
            });
          }}
        />
        {errors !== null && typeof errors !== "string" ? (
          errors.holderName ? (
            <span className="text-red-400">{errors.holderName}</span>
          ) : null
        ) : (
          ""
        )}
      </label>
      <div className="flex gap-5">
        <label className="text-lg space-y-2 w-1/2 flex flex-col">
          <span>Expiry Date</span>
          <input
            type="text"
            placeholder="MM/YY"
            name="expiry"
            id="expiry"
            className="border p-3  rounded-lg border-gray-300"
            onChange={(e) => {
              setPaymentData({
                ...paymentData,
                expiry: e.target.value,
              });
            }}
            aria-errormessage="expiryDate-error"
            required
          />
          {errors !== null && typeof errors !== "string" ? (
            errors.expiry ? (
              <span className="text-red-400">{errors.expiry}</span>
            ) : null
          ) : (
            ""
          )}
        </label>
        <label className="w-1/2 space-y-2 text-lg flex flex-col">
          <span>CVV</span>
          <input
            type="text"
            inputMode="numeric"
            pattern="[0-9]{3,4}"
            maxLength={4}
            placeholder="123"
            name="cvv"
            id="cvv"
            className="border p-3 rounded-lg border-gray-300 [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            onChange={(e) => {
              setPaymentData({
                ...paymentData,
                cvv: e.target.value,
              });
            }}
            onWheel={(e) => (e.target as HTMLElement).blur()}
            aria-errormessage="invalidCvv-error"
            required
          />
          {errors !== null && typeof errors !== "string" ? (
            errors.cvv ? (
              <span className="text-red-400">{errors.cvv}</span>
            ) : null
          ) : (
            ""
          )}
        </label>
      </div>
    </div>
  );
}
