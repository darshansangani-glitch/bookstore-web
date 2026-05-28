import { Link } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";
import { NavItems } from "../../data/NavBarData";
import { useRef, useState } from "react";
import { RxCross2 } from "react-icons/rx";
import NavPopup from "./Nav/NavPopup";
import useOutsideClick from "../../redux/hooks";

export default function NavBar() {
  const [open, setOpen] = useState<boolean>(false);
  const popupRef = useRef<HTMLDivElement | null>(null);
  useOutsideClick({
    ref: popupRef as React.RefObject<HTMLElement>,
    handler: () => setOpen(false),
  });
  return (
    <div className="flex gap-15 text-[16px] ">
      {NavItems.map((item, index) => {
        return (
          <Link
            key={index}
            className="lg:block hidden uppercase"
            to={item.route}
          >
            {item.name}
          </Link>
        );
      })}
      <div ref={popupRef} className="lg:hidden block relative">
        <button type="button" onClick={() => setOpen((prev) => !prev)}>
          {!open ? (
            <IoReorderThree fontSize={25} className="font-light " />
          ) : (
            <RxCross2 fontSize={25} className="font-light" />
          )}
        </button>
        {open ? <NavPopup setOpen={setOpen} /> : null}
      </div>
    </div>
  );
}
