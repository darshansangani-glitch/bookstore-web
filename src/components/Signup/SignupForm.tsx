import { useNavigate } from "react-router-dom";
import { SignupFormProps } from "../../interface/interface";
import { FaUserAlt } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { CiMobile2, CiLock } from "react-icons/ci";
import ClipLoading from "../Loading";

export default function SignupForm({
  handleSignUp,
  user,
  setUser,
  error,
  loading,
}: SignupFormProps) {
  const navigate = useNavigate();
  return (
    <form className="flex flex-col space-y-4 h-full" onSubmit={handleSignUp}>
      <label className="font-semibold flex flex-col space-y-2">
        <span className="2xl:text-lg md:text-sm text-lg flex items-center gap-3">
          <FaUserAlt />
          Full Name
        </span>
        <input
          type="text"
          className="2xl:text-xl md:text-sm text-lg px-5 2xl:py-3 md:py-2 py-2 border-gray-300 border rounded-xl cursor-pointer"
          placeholder="Full Name"
          id="name"
          name="name"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          required
        />
        {error !== null && typeof error !== "string" ? (
          error.name ? (
            <span className="text-red-300">{error.name}</span>
          ) : null
        ) : (
          ""
        )}
      </label>
      <label className="font-semibold flex flex-col space-y-2">
        <span className="2xl:text-lg md:text-sm text-lg flex items-center gap-3">
          <CiMobile2 />
          Mobile no.
        </span>
        <input
          type="text"
          className="2xl:text-xl md:text-sm text-lg px-5 2xl:py-3 md:py-2 py-2 border-gray-300 border rounded-xl cursor-pointer"
          placeholder="+91 9921235745"
          id="mobileNo"
          name="mobileNo"
          value={user.mobileNo}
          onChange={(e) => setUser({ ...user, mobileNo: e.target.value })}
          required
        />
        {error !== null && typeof error !== "string" ? (
          error.mobileNo ? (
            <span className="text-red-300">{error.mobileNo}</span>
          ) : null
        ) : (
          ""
        )}
      </label>
      <label className="font-semibold flex flex-col space-y-2">
        <span className="2xl:text-lg md:text-sm text-lg flex items-center gap-3">
          <MdOutlineEmail />
          Email Address
        </span>
        <input
          className="2xl:text-xl md:text-sm text-lg px-5 2xl:py-3 md:py-2 py-2 border-gray-300 border rounded-xl cursor-pointer"
          type="email"
          value={user.email}
          id="email"
          name="email"
          placeholder="user12@gmail.com"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          required
        />
        {error !== null && typeof error !== "string" ? (
          error.email ? (
            <span className="text-red-300">{error.email}</span>
          ) : null
        ) : (
          ""
        )}
      </label>
      <label className="font-semibold flex flex-col space-y-2">
        <span className="2xl:text-lg md:text-sm text-lg flex items-center gap-3">
          <FaUserAlt />
          User Role
        </span>
        <select
          name="role"
          value={user.role}
          className="2xl:text-xl md:text-sm text-lg px-5 2xl:py-3 md:py-2 py-2 border-gray-300 border rounded-xl cursor-pointer"
          id="role"
          onChange={(e) => setUser({ ...user, role: e.target.value })}
          required
        >
          <option value="">--Select Role--</option>
          <option value="student">Student</option>
          <option value="local">Local</option>
        </select>
        {error !== null && typeof error !== "string" ? (
          error.role ? (
            <span className="text-red-300">{error.role}</span>
          ) : null
        ) : (
          ""
        )}
      </label>
      <label className="font-semibold flex flex-col space-y-2">
        <span className="2xl:text-lg md:text-sm text-lg flex items-center gap-3">
          <CiLock />
          Password
        </span>
        <input
          className="2xl:text-xl md:text-sm text-lg px-5 2xl:py-3 md:py-2 py-2 border-gray-300 border rounded-xl cursor-pointer"
          type="password"
          value={user.password}
          id="password"
          name="password"
          placeholder="********"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          required
        />
        {error !== null && typeof error !== "string" ? (
          error.password ? (
            <span className="text-red-300">{error.password}</span>
          ) : null
        ) : (
          ""
        )}
      </label>
      <button
        type="submit"
        className="2xl:py-4 md:py-2 py-3 border cursor-pointer rounded-xl 2xl:text-2xl md:text-lg font-semibold bg-[#74642F] hover:bg-[#967a1c] text-white transition delay-50 duration-200 ease-in-out hover:-translate-y-1 hover:scale-101 flex gap-2 items-center justify-center"
      >
        <span>{loading ? <ClipLoading /> : null}</span> Register
      </button>
      <div className="2xl:text-lg md:text-sm text-lg flex justify-center items-center gap-2">
        Already Have an Account?{" "}
        <button
          type="button"
          className="cursor-pointer text-black font-bold border-b "
          onClick={() => navigate("/login")}
        >
          Sign In
        </button>
      </div>
    </form>
  );
}
