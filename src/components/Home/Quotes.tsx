import zigzag from "../../assets/Vector 17.png";

export default function Quotes() {
  return (
    <div className="flex justify-center items-center h-110">
      <div className="w-185 h-75.75 flex flex-col sm:gap-10 gap-5 ">
        <div className="flex flex-col justify-center items-center">
          <span className="font-prata sm:text-5xl text-4xl [word-spacing:0%] w-fit h-16.25">
            Quote of the day
          </span>
          <img src={zigzag} alt="" className="w-fit" />
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <span className="w-full sm:text-2xl text-lg text-[#7A7A7A]  leading-9 font-normal font-plus text-center ">
            “The more that you read, the more things you will know. The more
            that you learn, the more places you’ll go.”
          </span>
          <span className="text-xl font-prata font-normal text-[#111111]">
            Dr. Seuss
          </span>
        </div>
      </div>
    </div>
  );
}
