import { Link } from "react-router-dom";
import { IoReorderThree } from "react-icons/io5";

export default function NavBar() {
  return (
    <div className="w-full flex text-[16px] justify-between ">
      <div className="md:flex gap-15 items-center hidden">
        <Link to="/home">HOME</Link>
        <Link to="/books">SHOP</Link>
        <Link to="#">ABOUT</Link>
        <Link to="#">CONTACT US</Link>
      </div>
      <Link className="md:hidden" to="#">
        <IoReorderThree fontSize={25} className="font-light" />
      </Link>
    </div>
  );
}
