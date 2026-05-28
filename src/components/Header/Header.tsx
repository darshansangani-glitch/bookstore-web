import NavBar from "./NavBar.js";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <header className="bg-[#F3F2EC]! flex justify-center! py-10">
      <div className="2xl:w-355 lg:w-285 md:w-235 w-full flex justify-between text-black p-5 items-center h-full relative">
        <div>
          <button
            className="font-light cursor-pointer text-5xl font-unicase text-black"
            onClick={() =>
              pathname === "/home" ? window.scrollTo(0, 0) : navigate("/home")
            }
          >
            <span className="text-black font-bold">Book</span>Worm
          </button>
        </div>
        <div className="font-plus p-5">
          <NavBar />
        </div>
      </div>
    </header>
  );
}
