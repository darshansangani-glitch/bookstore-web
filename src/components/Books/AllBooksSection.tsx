
export default function ShowAllBooks({ bookCardsData }: any) {
  return (
    <div className="ml-auto mr-auto w-full flex flex-col justify-center items-center gap-15 pb-2 relative! z-100!">
      <div className="w-275 grid grid-cols-3 justify-center items-center  gap-5   p-4 border-b border-b-[#E0E0E0] ">
        {bookCardsData}
      </div>
    </div>
  );
}