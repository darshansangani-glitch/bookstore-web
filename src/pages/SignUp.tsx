import { SubmitEvent, useState } from "react";
import darkLogo from "../assets/darkLogo.png";
import { useNavigate } from "react-router-dom";
import image from "../assets/library.jpg";
import { signupFormValidation } from "../validation/signupValidation";
import { z } from "zod";
import { SignUPFormData, SignUPFormErrors } from "../interface/interface";
import SignupForm from "../components/Signup/SignupForm";
import SignupImageContainer from "../components/Signup/SignupImageContainer";

export default function SignUp() {
  const [user, setUser] = useState<SignUPFormData>({
    name: "",
    mobileNo: "",
    email: "",
    role: "",
    password: "",
  });
  const [error, setError] = useState<SignUPFormErrors | string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();
  const validateUserData = (
    details: SignUPFormData,
  ): SignUPFormErrors | null => {
    try {
      const parsedDetails = signupFormValidation.parse(details);
      console.log(parsedDetails);
      return null;
    } catch (error) {
      if (error instanceof z.ZodError) {
        return error.flatten().fieldErrors;
      } else {
        console.log("Validation Failed");
      }
      return {};
    }
  };

  const handleSignUp = async (e: SubmitEvent<HTMLFormElement>) => {
    try {
      e.preventDefault();
      setLoading(true);
      const newError = validateUserData(user);
      setError(newError ? newError : "");
      if (error === null) {
        const url = `${import.meta.env.VITE_API_URL}/user/signup`;
        console.log(url);
        const response = await fetch("http://localhost:5001/api/user/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(user),
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const result = await response.json();

        setLoading(false);
        if (result) {
          navigate("/login");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full h-screen flex items-center justify-center p-4 font-plus">
      <div className="flex 2xl:w-355 lg:w-285 md:w-250 md:mx-0 w-full mx-20 items-center bg-white rounded-3xl 2xl:h-270 md:h-200 p-10">
        <div className="md:w-1/2 w-full flex flex-col p-5 2xl:space-y-15 lg:space-y-5 space-y-5">
          <div className=" flex gap-5  items-center">
            <img src={darkLogo} alt="Logo" className="" />
            <span className="font-bold text-4xl ">BookWorm</span>
          </div>
          <div className="flex flex-col 2xl:space-y-10 lg:space-y-5 space-y-5  2xl:mx-20 xl:mx-10 lg:mx-5 sm:mx-0">
            <div className=" items-center justify-center  flex flex-col space-y-3">
              <span className="2xl:text-5xl text-3xl font-medium">
                Create an Account
              </span>
              <span className="2xl:text-lg lg:text-sm ">
                Join Now to Buy Exciting Books.
              </span>
            </div>
            <div>
              <SignupForm
                user={user}
                setUser={setUser}
                error={error}
                handleSignUp={handleSignUp}
                loading={loading}
              />
            </div>
          </div>
        </div>
        <SignupImageContainer image={image} />
      </div>
    </div>
  );
}
