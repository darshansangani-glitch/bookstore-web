import LostForest from "../assets/the lost forest.webp";
import Hobbit from "../assets/The Hobbit.webp";
import img3 from "../assets/3.jpg";
import img4 from "../assets/History of Rome.jpeg";
import img5 from "../assets/Dune.webp";
import img6 from "../assets/Midnight Tales.jpeg";
import img7 from "../assets/Educated.webp";
import bookImg1 from "../assets/book.png";
import bgPattern from "../assets/bg pattern.png";
import img1 from "../assets/The Hobbit.webp";
import Img3 from "../assets/3.jpg";

export interface Featured {
  id: string;
  name: string;
  author: string;
  category: string;
  src: string;
  offers?: string;
  offer?: boolean;
}

export const FeatureBooks: Featured[] = [
  {
    id: "0",
    name: "The Seven Husbands of Evelyn Hugo",
    author: "Smit Desai",
    category: "Fiction",
    src: "https://m.media-amazon.com/images/I/81LscKUplaL._AC_UF1000,1000_QL80_.jpg",
    offers: "12% off",
  },
  {
    id: "1",
    name: "The Lost Forest",
    author: "Smit Desai",
    category: "Thriller",
    src: LostForest,
    offers: "12% off",
  },
  {
    id: "2",
    name: "The Hobbits",
    author: "Smit Desai",
    category: "NonFiction",
    src: Hobbit,
    offers: "12% off",
  },
  {
    id: "3",
    name: "The Silver Crow",
    author: "Smit Desai",
    category: "Fiction",
    src: img3,
    offers: "12% off",
  },
  {
    id: "4",
    name: "History of Rome",
    author: "Smit Desai",
    category: "Fiction",
    src: img4,
    offers: "12% off",
  },
  {
    id: "5",
    name: "Dune",
    author: "Smit Desai",
    category: "Thriller",
    src: img5,
    offers: "12% off",
  },
  {
    id: "6",
    name: "Midnight Tales",
    author: "Smit Desai",
    category: "NonFiction",
    src: img6,
    offers: "12% off",
  },
  {
    id: "7",
    name: "Educated",
    author: "Smit Desai",
    category: "Fiction",
    src: img7,
    offers: "12% off",
  },
];

export const sliderData = [
  {
    title: "Life of the wild",
    bookImg: bookImg1,
    pattern: bgPattern,
  },
  {
    title: "The Hobbit",
    bookImg: img1,
    pattern: bgPattern,
  },
  {
    title: "The Silver Crow",
    bookImg: Img3,
    pattern: bgPattern,
  },
];
