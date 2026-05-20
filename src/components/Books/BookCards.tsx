import { useNavigate } from "react-router-dom";

interface cardsProps<T> {
  id: T;
  category: T;
  author: string;
  bookName: T;
  src: T;
  handleRequestSubmission: <T extends string>(_id: T) => Promise<void> | null;
}

export default function BookCard(props: cardsProps<string>) {
  const navigate = useNavigate();
  return (
    <div key={props.id}>
      <div className="container relative w-82 h-109 flex justify-center items-center overflow-hidden bg-[#EFEEE8] font-plus! ">
        <div className="book-btns flex gap-5 w-82 opacity-0 transition-opacity absolute top-1/2 leading-10 z-3 hover:opacity-100">
          <button
            className="cursor-pointer hover:bg-[#74642F] hover:text-white! text-[18px] font-bold w-38 h-12.45 p-2 text-black! bg-white  "
            onClick={() => {
              navigate(`/books/${props.id}`);
              navigate(0);
            }}
          >
            View Details
          </button>
          <button
            className="cursor-pointer hover:bg-[#74642F] w-38 h-12.45 p-2 text-white! bg-black text-[18px] font-bold"
            onClick={() => props.handleRequestSubmission(props.id)}
          >
            Add to Cart
          </button>
        </div>
        <img
          src={props.src}
          alt=""
          className="w-54.75! h-80! shadow-lg shadow-gray-400"
        />
      </div>
      <div className="w-81.5 p-5 flex flex-1 flex-col gap-2 items-center">
        <span className="text-gray-400 font-plus text-[18px] w-full">
          {props.author}
        </span>
        <span className="font-prata truncate w-full text-[22px]! text-[#111111] font-bold block">
          {props.bookName}
        </span>
        <span className="font-prata w-full ">{props.category}</span>
      </div>
    </div>
  );
}

//  <div
//             className="max-w-250 h-76 border-2 rounded-2xl border-gray-300 flex  gap-2 justify-center! mb-10 shadow-2xl shadow-gray-300"
//             key={props.id}
//         >
//             <img
//                 src={props.src}
//                 alt=""
//                 className="w-55 rounded-xl h-75"
//             />
//             <div className="flex w-110 justify-between flex-col p-5 pt-12 relative">
//                 <span className="absolute right-2  top-2 text-white font-extrabold text-[15px] bg-orange-300  rounded-2xl pl-4 pr-4 p-1    ">
//                     {props.category}
//                 </span>
//                 <div className="flex flex-col gap-4">
//                     <p className="w-fit! line-clamp-2 overflow-hidden leading-8  font-bold text-gray-500 text-[30px]" >
//                         {props.bookName}
//                     </p>
//                     <p className="line-clamp-4 overflow-hidden ">
//                         {props.description}
//                     </p>
//                 </div>

//                 <div className="flex items-center justify-between">
//                     <p className="font-semibold text-xl">
//                         Quantity: <span className="font-medium">{props.quantity}</span>
//                     </p>
//                     <button
//                         className="w-50 border p-3 rounded-xl bg-green-500 text-[18px] text-white hover:bg-amber-500 font-bold"
//                         type="submit"
//                         onClick={() =>
//                             props.handleRequestSubmission(props.id)
//                         }
//                     >
//                         Request Book
//                     </button>
//                 </div>

//             </div>

//         </div>
