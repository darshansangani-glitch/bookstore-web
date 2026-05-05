import { Featured } from "../Home/FeaturedBooks";

export default function BookCards({ id, name, src, author, offer, offers }: Featured) {

  return (
    <>
    <div key={id}>
      <div className='container relative w-82 h-109 flex justify-center items-center overflow-hidden bg-[#EFEEE8] '>
        {offer ?
          <span className="absolute top-4 -left-12 bg-[#74642F] text-white text-sm font-bold px-16 py-1 transform -rotate-45 shadow-md" >{offers}</span>
          : null}
        <button className="btn  w-82 h-12.45 p-2 text-white! bg-black">ADD TO CART</button>
        <img
          src={src}
          alt=""
          className="w-54.75! h-80! shadow-lg shadow-gray-400"
        />
      </div>
      <div className="w-81.5 p-5 flex flex-1 flex-col gap-2 items-center  justify-center!">
        <span className="font-prata overflow-hidden! whitespace-nowrap! text-ellipsis! max-w-70 text-[22px]! text-[#111111] font-bold">
          {name}
        </span>
        <span className="text-gray-400 font-plus text-[14px]">{author}</span>
      </div>
    </div>
    </>
  );
};