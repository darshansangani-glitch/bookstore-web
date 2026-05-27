import { BsCash } from "react-icons/bs";
import { FiSmartphone } from "react-icons/fi";
import { IoIosCard } from "react-icons/io";

export const paymentMethods = [
  { name: "Credit/Debit Card", icon: <IoIosCard /> },
  { name: "UPI/Digital Wallet", icon: <FiSmartphone /> },
  { name: "Cash on Delivery", icon: <BsCash /> },
];
