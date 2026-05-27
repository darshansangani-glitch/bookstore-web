import CardInputs from "./CardInputs";

export default function CreditCard() {
  return (
    <div className="bg-gray-50 flex flex-col space-y-5 p-5 font-plus rounded-xl">
      <span className="text-lg font-bold">Enter Card Details</span>
      <CardInputs />
    </div>
  );
}
