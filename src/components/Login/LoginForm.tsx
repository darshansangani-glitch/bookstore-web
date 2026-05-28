import { useNavigate } from "react-router-dom";
import ClipLoading from "../Loading";
import { LoginFormProps } from "../../interface/interface";

export default function LoginForm({
  handleLogin,
  setUser,
  user,
  error,
  loading,
}: LoginFormProps) {
  const navigate = useNavigate();
  return (
    <form
      className="px-5 w-full flex flex-col gap-3 justify-center items-center"
      onSubmit={handleLogin}
    >
      <label htmlFor="email" className="w-full text-xl">
        Email Address:
        <input
          className="sm:text-xl text-lg h-14 px-5 flex items-center justify-center rounded-xl border m-2 mb-4 focus:outline-[#74642F] focus:ring-1 "
          type="email"
          name="email"
          id="email"
          placeholder="user12@gmail.com"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        {error?.email ? (
          <span className="text-red-300 text-sm">{error.email[0]}</span>
        ) : null}
      </label>
      <label htmlFor="password" className="w-full text-xl">
        Password
        <input
          className="sm:text-xl text-lg h-14 px-5 flex items-center  rounded-xl border m-2 mb-4 focus:outline-[#74642F] focus:ring-1  "
          type="password"
          name="password"
          id="password"
          placeholder="~~~~~~~~"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
        />
        {error?.password ? (
          <span className="text-red-300 text-sm">{error.password[0]}</span>
        ) : null}
      </label>
      <button
        type="submit"
        className="bg-[#74642F] flex items-center justify-center text-xl py-4 gap-3 w-full text-white rounded-xl hover:bg-[#917311] font-semibold transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-101"
      >
        <span>{loading ? <ClipLoading color="white" size={20} /> : null}</span>
        Sign In
      </button>
      <span className="text-xs flex gap-1 items-center">
        Register Yourself?
        <button
          type="button"
          className="border-b font-semibold font-plus border-gray-400 text-gray-400 hover:border-gray-700 hover:text-gray-700"
          onClick={() => navigate("/signup")}
        >
          Signup now
        </button>
      </span>
    </form>
  );
}
