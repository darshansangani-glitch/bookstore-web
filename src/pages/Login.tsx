import { useState } from "react";
import darkLogo from "../assets/darkLogo.png";
import groupImg from "../assets/Group.png";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { login } from "../redux/features/slice/authSlice";
import { MdErrorOutline } from "react-icons/md";
import ClipLoading from "../components/Loading";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [loading, setLoading] = useState(false);

  const handleLogin = async () => {
    const url = `${import.meta.env.VITE_API_URL}/user/login`;
    setLoading(true);
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
      setTimeout(() => {
        if (!response.ok) {
          setError(result.message || "Invalid Credentials");
          setLoading(false);
        }
        dispatch(login({ token: result.data.token, user: result.data.user }));
        setLoading(false);
        navigate("/home");
      }, 2000);
    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
      throw error;
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center font-plus">
      <div className="flex 2xl:w-285 lg:w-235 w-full items-center justify-center">
        <div className="2xl:w-170 lg:w-120 p-5 h-150 flex flex-col justify-center items-center gap-5 lg:rounded-r-none  border border-gray-300 lg:rounded-tl-2xl lg:rounded-bl-2xl rounded-2xl lg:border-r-0">
          <img src={darkLogo} alt="Logo" />
          <div className="flex flex-col justify-center items-center">
            <h1 className="sm:text-4xl text-3xl font-bold mb-3">
              Welcome Back User!!
            </h1>
            <p className="sm:text-lg text-sm ">
              Please enter your credentials to log in
            </p>
          </div>

          <form
            className="lg:w-110 w-full flex flex-col gap-3 justify-center items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="email" className="w-full text-xl">
              Email Address:
              <input
                className="sm:text-xl text-lg h-14 px-5 flex items-center justify-center rounded-xl border m-2 mb-4 focus:outline-[#74642F] focus:ring-1 "
                type="email"
                name="email"
                id="email"
                placeholder="user12@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
              />
            </label>
            <label htmlFor="password" className="w-full text-xl">
              Password
              <input
                className="sm:text-xl text-lg h-14 px-5 flex items-center  rounded-xl border m-2 mb-4 focus:outline-[#74642F] focus:ring-1  "
                type="password"
                name="password"
                id="password"
                placeholder="~~~~~~~~"
                onChange={(e) => setPassword(e.target.value)}
              />
            </label>
            {error && (
              <span className="text-red-500 2xl:w-120 lg:w-110 flex items-center px-5 text-lg gap-2">
                <MdErrorOutline />
                {error}
              </span>
            )}
            <button
              className="bg-[#74642F] flex items-center justify-center text-xl py-4 gap-3 w-full text-white rounded-xl hover:bg-[#917311] font-semibold transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-101"
              type="button"
              onClick={handleLogin}
            >
              <span>
                {loading ? <ClipLoading color="white" size={20} /> : null}
              </span>
              Sign In
            </button>
            <span className="text-xs flex gap-1 items-center">
              Register Yourself?
              <button
                className="border-b font-semibold font-plus border-gray-400 text-gray-400 hover:border-gray-700 hover:text-gray-700"
                onClick={() => navigate("/signup")}
              >
                Signup now
              </button>
            </span>
          </form>
        </div>
        <div className="2xl:w-170 lg:w-120 hidden lg:flex flex-col h-150 justify-center items-center space-y-20 font-plus border border-gray-300 rounded-br-2xl rounded-tr-2xl border-l-0 bg-black text-white">
          <img src={groupImg} alt="BookWorm Logo" className="w-90" />
          <div className="flex flex-col justify-center items-center gap-5">
            <h4 className=" text-lg">New to our platform? Sign Up now.</h4>
            <button
              className="flex justify-center gap-2 items-center border-0 hover:bg-[#917311] text-lg font-bold w-70 h-12.45 py-3 text-white bg-[#74642F] rounded-xl  transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-101 "
              type="button"
              onClick={() => navigate("/signup")}
            >
              <FaArrowRightToBracket />
              <span>Register Yourself</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
