import { IoIosCard } from "react-icons/io";
import { FiSmartphone } from "react-icons/fi";
import { BsCash } from "react-icons/bs";
import { PaymentMethodsProps } from "../../interfaces/interface";

export default function PaymentMethodModes({
  setActive,
  active,
}: PaymentMethodsProps) {
  const paymentMethods = [
    { name: "Credit/Debit Card", icon: <IoIosCard /> },
    { name: "UPI/Digital Wallet", icon: <FiSmartphone /> },
    { name: "Cash on Delivery", icon: <BsCash /> },
  ];

  return (
    <div className="flex flex-col space-y-4">
      {paymentMethods.map((item, index) => {
        return (
          <label
            className={`border rounded-lg p-3 flex gap-3 border-gray-300 hover:border-gray-500 text-[22px] font-plus items-center font-semibold ${active == index ? "border-gray-500" : ""}`}
            key={item.name}
          >
            <div className="h-4.75 border rounded-2xl px-1 py-1 items-center flex">
              <input
                type="radio"
                name="shippingAddress"
                className="peer appearance-none w-2 h-2   border-gray-300 rounded-full checked:bg-[#74642F] relative transition-all cursor-pointer"
                id={item.name}
                defaultChecked={index == 0}
                onClick={() => setActive(index)}
              />
            </div>
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </label>
        );
      })}
    </div>
  );
}
