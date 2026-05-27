import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { PageHeaderProps } from "../interfaces/interface";

export default function PageHeader({
  pageName,
  pageTitle,
  bookName,
  path,
  previousPage,
  previousPagePath,
}: PageHeaderProps) {
  const navigate = useNavigate();
  return (
    <div className="content">
      <div
        className={`relative w-screen flex justify-evenly h-60  inset-0   items-center  transition-opacity font-plus `}
      >
        <div className="w-full  text-4xl leading-15  flex-col inset-0 bg-[#EDEBE3] backdrop-blur-xs h-60 absolute flex flex-1 justify-center items-center ">
          <div className=" 2xl:w-355 xl:w-285 lg:w-230 w-full flex flex-col items-start p-5">
            <span className="font-bold text-5xl">{pageTitle}</span>
            <div className="text-2xl text-gray-400 flex items-center gap-2">
              <button
                type="button"
                className="flex gap-2 items-center cursor-pointer"
                onClick={() => navigate("/home")}
              >
                {previousPage !== "Home" ? (
                  <span className="flex items-center gap-2">
                    Home <FaArrowRight />
                  </span>
                ) : null}
              </button>
              <button
                type="button"
                disabled={!previousPagePath}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() =>
                  navigate(previousPagePath ? previousPagePath : "")
                }
              >
                {previousPage}
                <FaArrowRight />
              </button>
              <button
                type="button"
                disabled={path !== "books" ? true : false}
                onClick={() => navigate(`/${path ? path : "books"}`)}
                className="text-[#5b4f29] items-center flex gap-2"
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
