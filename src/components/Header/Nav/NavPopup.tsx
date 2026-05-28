import { useNavigate } from "react-router-dom";
import { NavItems } from "../../../data/NavBarData";
import { Dispatch, SetStateAction } from "react";

export default function NavPopup({
  setOpen,
}: {
  setOpen: Dispatch<SetStateAction<boolean>>;
}) {
  const navigate = useNavigate();
  return (
    <div className="w-70 p-5 h-fit -left-70 bg-[#F3F2EC] absolute border border-gray-300 rounded-lg ">
      <div className="text-xl py-2 border-b border-b-gray-400 font-semibold mb-2">
        Menu
      </div>
      {NavItems.map((item, index) => {
        return (
          <button
            key={index}
            className="w-full flex px-4 py-3 hover:bg-[#e8e5d8]"
            type="button"
            onClick={() => {
              navigate(item.route);
              setOpen((prev) => !prev);
            }}
          >
            {item.name}
          </button>
        );
      })}
    </div>
  );
}
