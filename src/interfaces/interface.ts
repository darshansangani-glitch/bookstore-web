import { Dispatch, SetStateAction } from "react";

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