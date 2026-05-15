import { useState } from "react";
import darkLogo from "../assets/darkLogo.png";
import groupImg from "../assets/Group.png";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { login } from "../redux/features/slice/authSlice";
import { MdErrorOutline } from "react-icons/md";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleLogin = async () => {
    const url = `${import.meta.env.VITE_API_URL}/user/login`;
    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });
      const result = await response.json();
      if (!response.ok) {
        setError(result.message || "Invalid Credentials");
      } else {
        if (!result.data?.token || !result.data?.user) {
          setError("Invalid server response. Please try again.");
          return;
        }
        dispatch(login({ token: result.data.token, user: result.data.user }));
        navigate("/home");
      }
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center p-4">
      <div className="flex 2xl:w-355 lg:w-285 items-center h-screen justify-center">
        <div className="w-170 p-5 flex flex-col h-150 justify-center items-center gap-5 font-plus border border-gray-300 rounded-tl-2xl rounded-bl-2xl border-r-0">
          <img src={darkLogo} alt="Logo" />
          <h1 className="text-4xl font-bold mb-3">Welcome Back User!!</h1>
          <p className="text-[20px] mb-5 ">
            Please enter your credentials to log in
          </p>
          {error && (
            <span className="text-red-500 w-120 flex items-center text-[20px] gap-2">
              <MdErrorOutline />
              {error}
            </span>
          )}
          <form
            className="w-full flex flex-col gap-3 justify-center items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="email" className="text-[20px]">
              Email Address:
              <input
                className="w-120 text-[20px] h-14 px-5 flex items-center justify-center rounded-xl border m-2 mb-4 "
                type="email"
                name="email"
                id="email"
                placeholder="user12@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="password" className="text-[20px]">
              Password
              <input
                className="w-120 text-[20px] h-14 px-5 flex items-center  rounded-xl border m-2 mb-4 "
                type="password"
                name="password"
                id="password"
                placeholder="~~~~~~~~"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            <button
              className="bg-black text-[20px] py-4 w-120 text-white  px-4 rounded-xl hover:bg-[#74642F] font-bold focus:outline-none focus:ring-2 focus:ring-blue-500  "
              type="button"
              onClick={handleLogin}
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="w-170 p-5 flex flex-col h-150 justify-center items-center gap-5 font-plus border border-gray-300 rounded-br-2xl rounded-tr-2xl border-l-0 bg-black text-white">
          <img src={groupImg} alt="BookWorm Logo" />
          <h4 className="text-[20px] ">
            New to our platform? Sign Up now.
          </h4>
          <button
            className="flex justify-center gap-2 items-center border-0 hover:bg-white hover:text-black text-[18px] font-bold w-38 h-12.45 p-2 text-white bg-[#74642F] rounded-xl "
            type="button"
            onClick={() => navigate("/signup")}
          >
            <FaArrowRightToBracket />
            <span>SIGN UP</span>
          </button>
        </div>
      </div>
    </div>
  );
}
