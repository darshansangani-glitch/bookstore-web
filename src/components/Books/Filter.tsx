import { SetStateAction, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { LuSlidersVertical } from "react-icons/lu";
interface BookFilter {
  uniqueCategory: string[];
  setCategory: React.Dispatch<SetStateAction<string[]>> | undefined;
  setPage: React.Dispatch<SetStateAction<number>> | undefined;
  authorsData: string[];
  setAuthor: React.Dispatch<SetStateAction<string[]>> | undefined;
}
export default function BookFilter({
  uniqueCategory,
  setCategory,
  setAuthor,
  setPage,
  authorsData,
}: BookFilter) {
  const [toggleCategory, setToggleCategory] = useState(true);
  const [toggleAuthor, setToggleAuthor] = useState(false);

  const handleCategoryCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value, checked } = event.target;
    if (checked) {
      setCategory ? setCategory((prev) => [...prev, value]) : null;
      setPage ? setPage(0) : null;
    } else {
      setCategory
        ? setCategory((prev) => prev.filter((cat) => cat !== value))
        : null;
    }
  };

  const handleAuthorCheckboxChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    const { value, checked } = event.target;
    if (checked) {
      setAuthor ? setAuthor((prev) => [...prev, value]) : null;
      setPage ? setPage(0) : null;
    } else {
      setAuthor
        ? setAuthor((prev) => prev.filter((cat) => cat !== value))
        : null;
    }
  };
  const categoryFilter = uniqueCategory ? uniqueCategory : [];
  const authorFilter = authorsData ? authorsData : [];

  const categorySectionFields = categoryFilter.map(
    (item: string, index: number) => {
      return (
        <label className="flex gap-2 items-center" key={index}>
          {" "}
          <input
            type="checkbox"
            className="appearance-none size-3.5 border checked:appearance-auto accent-black bg-white"
            name={item}
            id={item}
            value={item}
            onChange={handleCategoryCheckboxChange}
          />
          {item}
        </label>

      )
    },
  );
  const authorSectionFields = authorFilter.map((item, index) => {
    return (
      <label className="flex gap-2 items-center" key={index}>
        <input
          type="checkbox"
          className="appearance-none size-3.5 border checked:appearance-auto accent-black bg-white"
          name={item}
          id={item}
          value={item}
          onChange={handleAuthorCheckboxChange}
        />
        {item}
      </label>
    );
  });
  return (
    <div className="w-80 font-plus flex-col flex flex-1 gap-3 ">
      <div className="flex font-prata h-17.25 gap-2 text-[28px] text-black font-bold p-5 px-0 border-b border-b-[#E0E0E0]">
        <LuSlidersVertical size={25} /> Filter
      </div>
      <div className="w-full flex flex-col border-b border-b-[#d1cdcd] p-3 px-0">
        <p
          className={`font-prata font-semibold text-[20px] flex justify-between ${toggleCategory ? "pb-4" : ""}`}
          onClick={() => setToggleCategory((prev) => !prev)}
        >
          Categories
          <IoIosArrowDown
            className={`${toggleCategory ? "rotate-180 transition-transform" : "transition-transform"}`}
          />
        </p>
        <div
          className={`flex flex-col flex-1 gap-3  overflow-x-auto  ${toggleCategory ? "max-h-95 px-3" : "max-h-0"} [scrollbar-width:thin]`}
          style={{ scrollbarColor: "#d1cdcd transparent" }}
        >
          {categorySectionFields}
        </div>
      </div>
      <div className="flex flex-col border-b border-b-[#d1cdcd] p-3 px-0">
        <span
          className={`font-prata font-semibold text-[20px] flex justify-between ${toggleAuthor ? "pb-4" : ""}`}
          onClick={() => setToggleAuthor((prev) => !prev)}
        >
          Authors
          <IoIosArrowDown
            className={`${toggleAuthor ? "rotate-180 transition-transform" : "transition-transform"}`}
          />
        </span>
        <div
          className={`flex flex-col flex-1 gap-3  overflow-x-auto  ${toggleAuthor ? "max-h-95 px-3" : "max-h-0"} [scrollbar-width:thin]`}
          style={{ scrollbarColor: "#d1cdcd transparent" }}
        >
          {authorSectionFields}
        </div>
      </div>
    </div>
  );
}
