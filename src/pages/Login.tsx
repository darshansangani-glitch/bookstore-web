import { SubmitEvent, useState } from "react";
import darkLogo from "../assets/darkLogo.png";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../redux/hooks";
import { login } from "../redux/features/slice/authSlice";
import { loginFormValidation } from "../validation/loginValidation";
import { z } from "zod";
import { LoginFormData, LoginFormError } from "../interface/interface";
import LoginForm from "../components/Login/LoginForm";
import LoginImageContainer from "../components/Login/LoginImageContainer";

export default function Login() {
  const [user, setUser] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [error, setError] = useState<LoginFormError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const validateLoginData = (detail: LoginFormData): LoginFormError | null => {
    try {
      const parsedDetails = loginFormValidation.parse(detail);
      console.log(parsedDetails);
      return null;
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.flatten().fieldErrors;
      } else {
        console.log("Validation Failed!!");
        return {};
      }
    }
  };

  const handleLogin = async (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newErrors = validateLoginData(user);
    setError(newErrors);
    try {
      if (newErrors === null) {
        const url = `${import.meta.env.VITE_API_URL}/user/login`;
        setLoading(true);
        const response = await fetch(url, {
          method: "POST",
          headers: {
            Accept: "application/json, text/plain, */*",
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        const result = await response.json();
        setLoading(false);
        if (!response.ok) {
          setError({ email: [result.message || "Invalid credentials"] });
          return;
        }
        dispatch(login({ token: result.data.token, user: result.data.user }));
        navigate("/home");
      }
    } catch (error) {
      console.error("Login error:", error);
      setLoading(false);
      throw error;
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center p-4 font-plus">
      <div className="flex 2xl:w-355 lg:w-285 md:w-250 md:mx-0 w-full mx-20 items-center bg-white rounded-3xl h-200 p-10">
        <div className="md:w-1/2 w-full flex flex-col p-5 2xl:space-y-15 lg:space-y-5 space-y-5">
          <div className=" flex gap-5  items-center">
            <img src={darkLogo} alt="Logo" className="" />
            <span className="font-bold text-4xl ">BookWorm</span>
          </div>
          <div className="flex flex-col 2xl:space-y-10 lg:space-y-5 space-y-5  2xl:mx-20 xl:mx-10 lg:mx-5 sm:mx-0">
            <div className=" items-center justify-center  flex flex-col space-y-3">
              <span className="2xl:text-5xl text-3xl font-medium">
                Welcome Back!!
              </span>
              <span className="2xl:text-lg lg:text-sm ">
                Login Now to Buy Exciting Books.
              </span>
            </div>
            <div>
              <LoginForm
                handleLogin={handleLogin}
                error={error ? error : {}}
                setUser={setUser}
                user={user}
                loading={loading}
              />
            </div>
          </div>
        </div>
        <LoginImageContainer />
      </div>
    </div>
  );
}
