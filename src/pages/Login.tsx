import { useState } from "react";
import darkLogo from "../assets/darkLogo.png";
import groupImg from "../assets/Group.png";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../redux/hooks";
import { login } from "../redux/features/slice/authSlice";


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const userToken = useAppSelector(s => s.auth.token)

  const navigate = useNavigate();
  const dispatch = useAppDispatch()


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
      dispatch(login(result.token))
      navigate("/home");
      return userToken;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  return (

    <div className="flex w-310 m-auto mt-40 justify-center">
      <div className="right">
        <img src={darkLogo} alt="Logo" />
        <h1 className="text-4xl font-bold mb-3!">Welcome Back User!!</h1>
        <p className="text-[16px]! m-0! mb-5!">Please enter your credentials to log in</p>
        <form className="w-full">
          <label htmlFor="email" className="text-[20px]!">
            Email Address:
            <input
              className="w-100 text-[15px]! h-10 p-3 rounded-xl border m-2 mb-4"
              type="email"
              name={email}
              id="email"
              placeholder="user12@gmail.com"
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label htmlFor="password" className="text-[20px]!">
            Password
            <input
              className="w-100 text-[15px]! h-10 p-3 rounded-xl border m-2 mb-4"
              type="password"
              name={password}
              id="password"
              placeholder="~~~~~~~~"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>
          <button className="signup-btn" type="button" onClick={handleLogin}>
            Sign In
          </button>
        </form>
      </div>
      <div
        className="left rounded-br-[40px] rounded-tr-[40px]"
      >
        <img src={groupImg} alt="BookWorm Logo" />
        <h4>New to our platform? Sign Up now.</h4>
        <button className="flex justify-center gap-2 items-center" type="button" onClick={() => navigate("/signup")}>
          <FaArrowRightToBracket />
          <span>SIGN UP</span>
        </button>
      </div>
    </div>
  );
}
