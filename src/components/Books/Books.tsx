import React, { SetStateAction } from "react";
import BookCard from "./BookCards";
import { useAppSelector } from "../../redux/hooks";
import { api } from "../../utils/api";
import { book } from "../../pages/Books";
import BookFilter from "./Filter";
import ShowAllBooks from "./AllBooksSection";
import ReusablePagination from "./Pagination";
import SearchSection from "./BookFiltersection";
import error404 from '../../assets/error-404-removebg-preview.png'
import ClipLoading from "../Loading";

interface ReusableBooksDataProps<T> {
    data: book[];
    showSearch?: boolean,
    uniqueKey?: keyof T;
    total?: number,
    page?: number,
    search?: string,
    serverSide?: boolean,
    rowsPerPage?: number,
    onPageChange?: (newPage: number) => void,
    onRowsPerPageChange?: (newRows: number) => void,
    onSearch?: (term: string) => void,
    uniqueCategory?: string[]
    loading?: boolean
    authorsData: string[]
    setCategory?: React.Dispatch<SetStateAction<string[]>>
    setPage?: React.Dispatch<SetStateAction<number>>
    setAuthor?: React.Dispatch<SetStateAction<string[]>>
}

export default function BooksPageComponent({
    data,
    total,
    page,
    search,
    serverSide,
    rowsPerPage,
    onPageChange,
    onRowsPerPageChange,
    onSearch,
    uniqueCategory,
    loading,
    authorsData,
    setCategory,
    setPage,
    setAuthor
}: ReusableBooksDataProps<string>) {
    const [searchValue, setSearchValue] = React.useState<string>('')
    const token = useAppSelector((s) => s.auth.token);
    const handleRequestSubmission = async <T extends string>(id: T) => {
        try {
            console.log(id)
            const result = await api.post(
                `/book/request/add/${id}`,
                { id },
                token ? token : "",
            );
            console.log(result)
        } catch (error) {
            console.log(error);
        }
    };
    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        serverSide ? onSearch && onSearch(event.target.value) : setSearchValue(event.target.value);
    };

    const filteredData = React.useMemo(() => {
        if (serverSide) return data
        if (!searchValue) return data;
        const lowercasedTerm = searchValue.toLowerCase();

        return data.filter((row) => {
            return Object.values(row).some((val) =>
                String(val).toLowerCase().includes(lowercasedTerm),
            );
        });
    }, [data, searchValue, serverSide, data]);

    const displayedData = React.useMemo(() => {
        if (serverSide) return data;
    }, [filteredData, page, rowsPerPage, serverSide, data]);

    const totalCount = serverSide ? total : filteredData.length;
    const totalPages = (totalCount && rowsPerPage) && Math.ceil(totalCount / rowsPerPage);

    const handleChangePage = (newPage: number) => {
        serverSide && onPageChange ? onPageChange(newPage) : 0;
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newRows = parseInt(event.target.value, 10);
        if (serverSide) {
            if (onRowsPerPageChange) onRowsPerPageChange(newRows);
        };
    }
    const bookCardsData = displayedData && displayedData.map((b: book) => {
        return (
            <BookCard key={b._id} id={b._id} src={`${import.meta.env.VITE_SERVER_URL}${b.book_image_filename}`} category={b.category} bookName={b.book_name} author={b.author} handleRequestSubmission={handleRequestSubmission} />
        );
    });
    return (
      <div className="flex mt-20">
        <BookFilter
          setCategory={setCategory}
          setAuthor={setAuthor}
          setPage={setPage}
          uniqueCategory={uniqueCategory as string[]}
          authorsData={authorsData}
        />
        <div className="w-275">
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
          <div className="flex flex-col w-275 justify-center items-center">
            {displayedData && displayedData.length == 0 ? (
              <div className="w-130! flex flex-col justify-center! items-center mb-10 text-[20px]  min-h-200 text-gray-400">
                <img src={error404} alt="error 404 not Found" />{" "}
                <span>No Matching Result Found</span>
                <span className="text-center ">
                  Try another Search or use Another Filter Options to Find Your
                  Books!!{" "}
                </span>
                {/* <span className="text-center ">Type Books Name, it's Author, Category, or in which Shelf are You Looking for. You can Easily Find That Way.</span> */}
              </div>
            ) : !loading ? (
              <ShowAllBooks
                handleRequestSubmission={handleRequestSubmission}
                bookCardsData={bookCardsData}
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


//  <>
//             <div className="w-full flex-1 mt-20 gap-5 flex justify-center ">
//                 <div className="w-340 flex justify-end gap-5 mb-20">
//                     <div className={`max-w-90! flex items-center font-[Poppins]! flex-1 h-13!  pl-0 border rounded-xl border-slate-300 ${search !== '' ? 'text-[24px] font-semibold': 'text-xl'}`}>
//                         <button
//                             className="p-2 px-4 items-center text-gray-400! "
//                             type="button"
//                             aria-label="search"
//                         >
//                             <FaSearch className="text-2xl" />
//                         </button>
//                         <input
//                             id="search"
//                             name="search"
//                             className="p-2 px-4 pl-0 font-[Poppins]! flex-1 focus:outline-0!"
//                             placeholder="Search Books..."
//                             aria-label="search data"
//                             value={search}
//                             onChange={handleSearchChange}
//                         />

//                     </div>
//                     {onCategory && (
//                         <div className="max-w-73! font-semibold font-[Poppins]! text-xl border flex-1 h-13! p-2 px-4 text-slate-400 border-slate-300 flex justify-center rounded-xl">
//                             <select name="category" id="category" className="focus:outline-0! bg-white!" onChange={handleChangeCategory}>
//                                 <option value="" defaultChecked>--Select-Category--</option>
//                                 {uniqueCategory?.map(item => (
//                                     <option key={item} value={item}>{item}</option>
//                                 ))}
//                             </select>
//                         </div>
//                     )}
//                 </div>
//             </div>
//             <div >
//                 <div className="h-auto">

//                     {displayedData && displayedData.length == 0 ? (
//                         <div className="w-full! flex  gap-2 justify-center! mb-10 text-7xl p-50">
//                             <FaBook /> Book Not Found
//                         </div>
//                     ) : (
//                         <section className="flex flex-1 justify-center w-full ">
//                             <div className="grid grid-cols-2 gap-5">
//                                 {bookCardsData}
//                             </div>
//                         </section>

//                     )}
//                 </div>
//                 <div className="w-full flex justify-center mb-20 ">

//                 <div className="w-350 rounded-2xl p-1 bg-slate-50/40 border border-slate-300 flex justify-between items-center gap-8">
//                     <div className="flex items-center gap-8">
//                         <div className="flex items-center gap-4">
//                             <div className="relative group">
//                                 <select
//                                     className="p-3 text-slate-400 font-semibold text-[18px] cursor-pointer"
//                                     value={rowsPerPage}
//                                     onChange={handleChangeRowsPerPage}
//                                 >
//                                     {[10, 20, 50, 100].map((count) => (
//                                         <option key={count} value={count}>
//                                             {count} rows
//                                         </option>
//                                     ))}
//                                 </select>

//                             </div>
//                         </div>
//                         <div className="h-6 w-px bg-slate-200 hidden lg:block" />
//                         <div className="text-[18px] font-semibold text-slate-400 font-[poppins] uppercase">
//                             {total ?? 1 > 0
//                                 ? <><span className="text-slate-600">{(page ?? 0) * (rowsPerPage ?? 0) + 1} - {Math.min(((page ?? 0) + 1) * (rowsPerPage ?? 10), (total ?? 0))}</span> <span className="mx-1">of</span> <span className="text-slate-600">{total}</span> entries</>
//                                 : "No entries"}
//                         </div>
//                     </div>

//                     <div className="flex items-center gap-3">
//                         <button
//                             onClick={() => handleChangePage(Math.max(0, (page ?? 0) - 1))}
//                             disabled={totalPages === 0}
//                             className="p-3.5 flex items-center text-slate-400 font-semibold text-[18px] gap-2"
//                         >
//                             <FcPrevious size={18} /> Prev
//                         </button>

//                         <div className="flex items-center border p-1 font-semibold text-slate-400 rounded-4xl  border-slate-400 text-[18px]!">
//                             <button
//                                 key={page}
//                                 onClick={() => handleChangePage(page ? page : 0)}
//                                 className="min-w-6 h-6  "
//                             >
//                                 {page ? page + 1 : 1}
//                             </button>
//                         </div>

//                         <button
//                             onClick={() => handleChangePage(totalPages !== undefined ? Math.min(totalPages - 1, (page || 0) + 1) : Math.min())}
//                             disabled={totalPages === 0 || (page !== undefined && page >= (totalPages ? totalPages : 0) - 1)}
//                             className="p-3.5 flex items-center font-semibold text-slate-400 text-[18px] gap-2 enabled:hover:text-blue-600 disabled:opacity-50"
//                         >
//                             Next <FcNext />
//                         </button>
//                     </div>
//                 </div>
//                 </div>
//             </div>
//         </>