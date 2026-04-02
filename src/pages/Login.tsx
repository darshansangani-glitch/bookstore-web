import { useEffect, useState } from "react";
import darkLogo from "../assets/darkLogo.png";
import groupImg from "../assets/Group.png";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [memoryToken, setMemoryToken] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (memoryToken) {
      navigate("/home");
    }
  }, [memoryToken]);

  const handleLogin = async () => {
    const url = `${import.meta.env.VITE_API_URL}/login`;

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

      localStorage.setItem("token-info", result.token);
      setMemoryToken(result.token);

      return memoryToken;
    } catch (error) {
      console.error("Login error:", error);
      throw error;
    }
  };

  return (
    <main>
      <section style={{ display: "flex" }}>
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
          className="left"
          style={{
            borderBottomLeftRadius: "40px",
            borderTopLeftRadius: "40px",
          }}
        >
          <img src={groupImg} alt="BookWorm Logo" />
          <h4>New to our platform? Sign Up now.</h4>
          <button className="flex justify-center gap-2 items-center" type="button" onClick={() => navigate("/signup")}>
            <FaArrowRightToBracket />
           <span>SIGN UP</span> 
          </button>
        </div>
      </section>
    </main>
  );
}
