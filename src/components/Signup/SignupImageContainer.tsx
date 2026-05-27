export default function SignupImageContainer({ image }: { image: string }) {
  return (
    <div className=" w-1/2  text-white relative md:block hidden">
      <img
        src={image}
        alt=""
        className="w-full 2xl:h-250 md:h-180  rounded-2xl blur-xs"
      />
      <div className="absolute 2xl:top-90 md:top-50 z-50 w-full flex flex-col p-5">
        <span className="2xl:text-6xl md:text-4xl font-bold">Find</span>
        <span className="2xl:text-6xl md:text-4xl font-bold">
          yourself In a
        </span>
        <span className="2xl:text-6xl md:text-4xl font-bold">Great Book</span>
        <span className="2xl:text-2xl md:text-xl font-bold text-gray-600 w-fit px-5 py-2 mt-2 bg-white">
          And Read Exciting Books Today!!
        </span>
        <span className="2xl:text-7xl xl:text-5xl md:text-5xl font-bold 2xl:mt-10 md:mt-5">
          At BookWarm
        </span>
      </div>
    </div>
  );
}
