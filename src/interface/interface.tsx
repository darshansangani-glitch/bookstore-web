import { Dispatch, SetStateAction } from "react";

export interface BookInfo {
  _id: string;
  book_name: string;
  category: string;
  shelf_name: string;
  quantity: number;
  description: string;
  book_image: string;
  book_image_filename: string;
  author: string;
  rent_price: number;
  buy_price: number;
}

export interface PopularBooksProps {
  popularBooks: BookInfo[];
  setCategory: Dispatch<SetStateAction<string>>;
  uniqueCategories: string[];
}

export interface FeaturedBooksProps {
  featuredBooks: BookInfo[];
}

export interface BestBookProps {
  topBook: BookInfo;
}

export interface cardsProps<T> {
  id: T;
  category: T;
  author: string;
  bookName: T;
  src: T;
  offers?: string;
  handleRequestSubmission?: <T extends string>(_id: T) => Promise<void> | null;
  loading?: boolean;
  rent_price: number;
  buy_price: number;
}
