import React from "react";
import { book } from "../../pages/Books";
import BookFilter from "./Filter";
import ShowAllBooks from "./AllBooksSection";
import ReusablePagination from "./Pagination";
import SearchSection from "./BookFilterSection";
import error404 from "../../assets/error-404-removebg-preview.png";
import ClipLoading from "../Loading";

interface ReusableBooksDataProps<T> {
  data: book[];
  showSearch?: boolean;
  uniqueKey?: keyof T;
  total?: number;
  page?: number;
  search?: string;
  rowsPerPage?: number;
  onPageChange?: (newPage: number) => void;
  onRowsPerPageChange?: (newRows: number) => void;
  onSearch?: (term: string) => void;
  uniqueCategory?: string[];
  loading?: boolean;
  authorsData: string[];
  setCategory?: React.Dispatch<React.SetStateAction<string[]>>;
  setPage?: React.Dispatch<React.SetStateAction<number>>;
  setAuthor?: React.Dispatch<React.SetStateAction<string[]>>;
}

export default function BooksPageComponent({
  data,
  total,
  page,
  search,
  rowsPerPage,
  onPageChange,
  onRowsPerPageChange,
  onSearch,
  uniqueCategory,
  loading,
  authorsData,
  setCategory,
  setPage,
  setAuthor,
}: ReusableBooksDataProps<string>) {
  const [searchValue, setSearchValue] = React.useState<string>("");


  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch
      ? onSearch(event.target.value)
      : setSearchValue(event.target.value);
  };

  const filteredData = React.useMemo(() => {
    return data;
  }, [data, searchValue]);

  const displayedData = React.useMemo(() => {
    return data;
  }, [filteredData, page, rowsPerPage, data]);

  const totalCount = total ? total : filteredData.length;
  const totalPages =
    totalCount && rowsPerPage && Math.ceil(totalCount / rowsPerPage);

  const handleChangePage = (newPage: number) => {
    if (onPageChange) {
      onPageChange(newPage);
    }
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLSelectElement>,
  ) => {
    const newRows = parseInt(event.target.value, 10);
    if (onRowsPerPageChange) onRowsPerPageChange(newRows);
  };
  return (
    <div className="flex mt-20">
      <BookFilter
        setCategory={setCategory}
        setAuthor={setAuthor}
        setPage={setPage}
        uniqueCategory={uniqueCategory as string[]}
        authorsData={authorsData}
      />
      <div className="2xl:w-275 lg:w-205">
        <SearchSection
          search={search ? search : ""}
          handleSearchChange={handleSearchChange}
          totalPages={totalPages ? totalPages : 0}
          page={page ? page : 1}
          rowsPerPage={rowsPerPage ? rowsPerPage : 0}
          total={total ? total : 0}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
          handleChangePage={handleChangePage}
        />
        <div className="flex flex-col 2xl:w-275 lg:w-205 justify-center items-center">
          {displayedData && displayedData.length === 0 ? (
            <div className="w-130 flex flex-col justify-center items-center *:text-[20px] min-h-200 text-gray-400">
              <img src={error404} alt="error 404 not Found" />
              <span>No Matching Result Found</span>
              <span className="text-center ">
                Try another Search or use Another Filter Options to Find Your
                Books!!
              </span>
            </div>
          ) : !loading ? (
            <ShowAllBooks
              displayedData={displayedData}
            />
          ) : (
            <ClipLoading />
          )}
          <ReusablePagination
            totalPages={totalPages ? totalPages : 0}
            page={page ? page : 1}
            rowsPerPage={rowsPerPage ? rowsPerPage : 0}
            total={total ? total : 0}
            handleChangeRowsPerPage={handleChangeRowsPerPage}
            handleChangePage={handleChangePage}
          />
        </div>
      </div>
    </div>
  );
}
