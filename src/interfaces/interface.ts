import { Dispatch, SetStateAction, SubmitEvent } from "react";
import { checkoutSchema } from "../validation/checkoutValidation";
import { z } from "zod";

export interface Cart {
  _id: string;
  src: string;
  category: string;
  book_name: string;
  rentPrice: number;
  buyPrice: number;
  orderType: string;
  author: string;
}

export interface CartSlice {
  cart: Cart[];
}

export interface PaymentMethodsProps {
  setActive: Dispatch<SetStateAction<number | null>>;
  active: number | null;
}

export interface CheckoutBooks {
  src: string;
  book_name: string;
  orderType: string;
  price: number;
}

export interface CheckoutPaymentData {
  cardNumber: string;
  holderName: string;
  expiry: string;
  cvv: string;
}

export interface BooksData {
  type: string;
  book_id: string;
}

export interface UPIProps {
  upi_id: string;
}

export interface CheckoutData {
  purchase_type: "Cod" | "Credit/Debit" | "UPI";
  payment_details: CheckoutPaymentData | UPIProps | {};
  address_id: string;
  books: BooksData[];
}

export interface CheckoutPaymentsDataProps {
  setPaymentData: Dispatch<SetStateAction<CheckoutPaymentData>>;
  paymentData: CheckoutPaymentData;
  errors: FormErrors | string | null;
  setUpiId: Dispatch<SetStateAction<string>>;
}

export interface PaymentModesProps {
  handleSubmit: (e: SubmitEvent<HTMLFormElement>) => void;
  setType: Dispatch<SetStateAction<"Cod" | "Credit/Debit" | "UPI">>;
  loading: boolean;
}

export type FormData = z.infer<typeof checkoutSchema>;
export type FormErrors = Partial<Record<keyof FormData, string[]>>;

export interface PageHeaderProps {
  pageTitle: string;
  path: string;
  previousPage: string;
  pageName: string;
  bookName?: string;
  previousPagePath?: string;
}

export interface CartData {
  _id?: string;
  street: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface SummaryProps {
  loading: boolean;
  setAddress: React.Dispatch<React.SetStateAction<CartData>>;
  addresses: CartData[];
  addOpen: boolean;
  error: string;
  setAddOpen: React.Dispatch<React.SetStateAction<boolean>>;
  handleAddAddress: () => void;
  handleDeleteAddress: (id: string) => void;
}
