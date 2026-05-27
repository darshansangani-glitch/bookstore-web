import { ClipLoader } from "react-spinners";

export default function ClipLoading() {
  return (
    <div className="w-full  h-4 flex items-center justify-center relative ">
      <ClipLoader size={30} color="#686769" />
    </div>
  );
}
