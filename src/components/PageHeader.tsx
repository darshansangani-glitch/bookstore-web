import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

interface Src {
  pageTitle: string;
  path: string;
  previousPage: string;
  pageName: string;
  bookName?: string;
  previousPagePath: string;
}
export default function PageHeader({
  pageName,
  pageTitle,
  bookName,
  path,
  previousPage,
  previousPagePath,
}: Src) {
  const navigate = useNavigate();
  return (
    <div className="content">
      <div
        className={`relative w-screen flex justify-evenly h-60  inset-0   items-center  transition-opacity font-plus `}
      >
        <div className="w-full  text-4xl leading-15  flex-col inset-0 bg-[#EDEBE3] backdrop-blur-xs h-60 absolute flex flex-1 justify-center items-center ">
          <div className=" 2xl:w-355 xl:w-285 lg:w-230 w-full flex flex-col items-start p-5">
            <span className="font-bold text-[54px]">{pageTitle}</span>
            <div className="text-[24px] text-gray-400 flex items-center gap-2">
              <button
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => navigate("/home")}
              >
                {previousPage !== "Home" ? `Home ` : null}
                {previousPage !== "Home" ? <FaArrowRight /> : null}
              </button>
              <button
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => navigate(previousPagePath)}
              >
                {previousPage}
                <FaArrowRight />
              </button>
              <button
                onClick={() => navigate(`/${path ? path : "books"}`)}
                className="text-[#5b4f29] items-center flex gap-2 cursor-pointer"
              >
                {pageName}
              </button>
              <span className="text-[#5b4f29] items-center flex">
                {bookName ? (
                  <span className="items-center flex gap-2">
                    <FaArrowRight /> {bookName}
                  </span>
                ) : (
                  ""
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
