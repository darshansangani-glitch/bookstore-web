import NavBar from "./NavBar.js";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { NavItems } from "../../data/NavBarData";
import { useState } from "react";
export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const [openNav, setOpenNav] = useState(false);
  const items = ["Profile", "Settings", "Log Out"];
  return (
    <header
      className={`bg-[#F3F2EC]! flex justify-center! ${openNav ? " sticky flex-col py-0 h-70!" : ""}`}
    >
      <div className="2xl:w-355 lg:w-285 lg:border-b-0 border-b border-b-gray-300 w-full flex justify-between text-black p-5 pb-0 items-center relative">
        <div>
          <button
            className="font-light h-fit cursor-pointer text-5xl font-unicase text-black"
            onClick={() =>
              pathname === "/home" ? window.scrollTo(0, 0) : navigate("/home")
            }
          >
            <span className="text-black font-bold">Book</span>Worm
          </button>
        </div>
        <div className="font-plus p-5">
          <NavBar openNav={openNav} setOpenNav={setOpenNav} />
        </div>
      </div>
      {openNav ? (
        <div className="w-full p-5 pt-0">
          {NavItems.map((item, index) => {
            return (
              <button
                key={index}
                className="w-full flex px-4 py-3 text-black hover:bg-[#e8e5d8]"
                type="button"
                onClick={() => {
                  navigate(item.route);
                  setOpenNav((prev) => !prev);
                }}
              >
                {item.name}
              </button>
            );
          })}
          <div className="border w-full border-gray-300" />
          {items.map((item, index) => {
            return (
              <button
                key={index}
                className="w-full flex px-4 py-3 text-black hover:bg-[#e8e5d8]"
                type="button"
                onClick={() => {
                  // navigate(item.route);
                  setOpenNav((prev) => !prev);
                }}
              >
                {item}
              </button>
            );
          })}
        </div>
      ) : null}
    </header>
  );
}
