import { useState } from "react";
import { useAppSelector } from "../../redux/hooks";
import { LuLogOut } from "react-icons/lu";
import LogOutPopUp from "./LogOutPopup";

export default function Account() {
  const [open, setOpen] = useState<boolean>(false);
  const user = useAppSelector((s) => s.auth.user);
  const getInitials = (fullName: string) => {
    if (!fullName) return "";
    const nameParts = fullName.split(" ");
    const firstNameInitial = nameParts[0] ? nameParts[0].charAt(0) : "";
    const lastNameInitial =
      nameParts.length > 1 ? nameParts[nameParts.length - 1].charAt(0) : "";
    return (firstNameInitial + lastNameInitial).toUpperCase();
  };
  const [logout, setLogOut] = useState<boolean>(false);
  return (
    <div
      className={`w-fit absolute top-13 -bottom-35 flex gap-2 ${open ? "-left-70 transition-transform" : "transition-transform -left-20"}`}
    >
      <div className="bg-[#F3F2EC] w-35 h-fit p-3 flex flex-col space-y-1 font-plus rounded-lg border border-[#a19c7c]">
        <button
          type="button"
          className="flex text-sm p-1 hover:bg-[#e8e5d8] px-2"
          onClick={() => setOpen((prev) => !prev)}
        >
          Profile
        </button>
        <div className="flex text-sm p-1 hover:bg-[#e8e5d8] px-2">Setting</div>
        <div className="border border-gray-300" />
        <button
          className="flex text-sm p-1 text-red-400 items-center gap-2 hover:bg-red-200 hover:text-red-600 px-2"
          type="button"
          onClick={() => setLogOut((prev) => !prev)}
        >
          <LuLogOut />
          Sign Out
        </button>
      </div>
      {open ? (
        <div className="bg-[#F3F2EC] w-fit h-fit p-3 flex flex-col space-y-1 font-plus rounded-lg border border-[#a19c7c]">
          <div className="flex gap-3 pb-2">
            <span className="w-9 h-9  rounded-4xl flex items-center justify-center text-sm font-bold text-[#74642F] bg-[#b6a56c92] ">
              {getInitials(user.name)}
            </span>
            <div className="w-30 flex flex-col justify-center items-start space-y-1">
              <span className="h-3 text-xs text-[#777777] ">{user.name}</span>
              <span className="h-3 text-xs text-[#777777] first-letter:uppercase">
                {user.role}
              </span>
            </div>
          </div>
          <div className="border border-gray-300" />
          <div className="text-sm font-semibold flex gap-2">
            Email: <span className="text-gray-400">{user.email}</span>
          </div>
          <div className="text-sm font-semibold flex gap-2">
            Mobile No: <span className="text-gray-400">{user.mobileNo}</span>
          </div>
        </div>
      ) : null}
      <LogOutPopUp logOut={logout} setLogOut={setLogOut} />
    </div>
  );
}
