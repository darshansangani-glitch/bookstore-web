import { FaSearch } from "react-icons/fa";
import ReusablePagination from "./Pagination";

interface SearchFilter {
  search: string;
  handleSearchChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  totalPages: number;
  page: number;
  total: number;
  rowsPerPage: number;
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  handleChangePage: (newPage: number) => void;
}

export default function SearchSection({
  search,
  handleSearchChange,
  totalPages,
  page,
  total,
  rowsPerPage,
  handleChangeRowsPerPage,
  handleChangePage,
}: SearchFilter) {
  return (
    <div className="w-full flex justify-center items-center pb-2 font-plus border-b-[#E0E0E0] border-b">
      <div className="2xl:w-275 lg:w-205 flex justify-between gap-8">
        <ReusablePagination
          totalPages={totalPages}
          page={page}
          rowsPerPage={rowsPerPage}
          total={total}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleChangePage={handleChangePage}
        />
        <div className="flex  gap-4 h-15  items-center">
          <div className=" flex items-center flex-1 p-1 border rounded-xl border-[#E0E0E0]">
            <input
              id="search"
              name="search"
              className=" px-4 text-[18px] flex-1 focus:outline-0"
              placeholder="Search Books..."
              aria-label="search data"
              value={search}
              onChange={handleSearchChange}
            />
            <button
              className="p-2 px-4 items-center text-gray-400  "
              type="button"
              aria-label="search"
            >
              <FaSearch size={22} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
