// interface props<T> {
//     searchTerm?: string;
//     handleSearchChange?: React.ChangeEventHandler<HTMLInputElement | Element>;
//     handleRequestSubmission?: <T extends string>(_id: T) => Promise<void> | null;
// }
import { FaSearch, FaBook } from "react-icons/fa";
import { FcNext, FcPrevious } from "react-icons/fc";

import React from "react";
import BookCard from "./BookCards";
import { useAppSelector } from "../../redux/hooks";
import { api } from "../../utils/api";
import { book } from "../../pages/Books";


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
    onCategory?: (term: string) => void,
    uniqueCategory?: string[]
    loading?: boolean
}

export default function AllBooks({
    data,
    total,
    page,
    search,
    serverSide,
    rowsPerPage,
    onPageChange,
    onRowsPerPageChange,
    onSearch,
    onCategory,
    uniqueCategory,
    loading,
}: ReusableBooksDataProps<string>) {
    const [searchValue, setSearchValue] = React.useState<string>('')
    const [handleRequest, setHandleRequest] = React.useState([
        {
            user_id: "",
            book_id: "",
            timestamp: "",
            req_status: "",
        },
    ]);
    const token = useAppSelector((s) => s.auth.token);
    const handleRequestSubmission = async <T extends string>(id: T) => {
        try {

            const result = await api.post(
                `/request/add/${id}`,
                { id },
                token ? token : "",
            );
            setHandleRequest(result);
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
        if (serverSide)
            if (onPageChange) onPageChange(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newRows = parseInt(event.target.value, 10);
        if (serverSide) {
            if (onRowsPerPageChange) onRowsPerPageChange(newRows);
        };
    }
    const handleChangeCategory = (e: React.ChangeEvent<HTMLSelectElement>) => {
        serverSide && onCategory && onCategory(e.currentTarget.value);
    }

    const bookCardsData = displayedData && displayedData.map((b: book) => {
        return (
            <BookCard key={b._id} id={b._id} src={`${import.meta.env.VITE_SERVER_URL}img/${b._id}`} category={b.category} bookName={b.book_name} description={b.description} quantity={b.quantity} handleRequestSubmission={handleRequestSubmission} />
        );
    });
    return (
        <>
            <div className="w-full flex-1 mt-20 gap-5 flex justify-center ">
                <div className="w-340 flex justify-end gap-5 mb-20">
                    <div className={`max-w-90! flex items-center font-[Poppins]! flex-1 h-13!  pl-0 border rounded-xl border-slate-300 ${search !== '' ? 'text-[24px] font-semibold': 'text-xl'}`}>
                        <button
                            className="p-2 px-4 items-center text-gray-400! "
                            type="button"
                            aria-label="search"
                        >
                            <FaSearch className="text-2xl" />
                        </button>
                        <input
                            id="search"
                            name="search"
                            className="p-2 px-4 pl-0 font-[Poppins]! flex-1 focus:outline-0!"
                            placeholder="Search Books..."
                            aria-label="search data"
                            value={search}
                            onChange={handleSearchChange}
                        />

                    </div>
                    {onCategory && (
                        <div className="max-w-73! font-semibold font-[Poppins]! text-xl border flex-1 h-13! p-2 px-4 text-slate-400 border-slate-300 flex justify-center rounded-xl">
                            <select name="category" id="category" className="focus:outline-0! bg-white!" onChange={handleChangeCategory}>
                                <option value="" defaultChecked>--Select-Category--</option>
                                {uniqueCategory?.map(item => (
                                    <option key={item} value={item}>{item}</option>
                                ))}
                            </select>
                        </div>
                    )}
                </div>
            </div>
            <div >
                <div className="h-auto">

                    {displayedData && displayedData.length == 0 ? (
                        <div className="w-full! flex  gap-2 justify-center! mb-10 text-7xl p-50">
                            <FaBook /> Book Not Found
                        </div>
                    ) : (
                        <section className="flex flex-1 justify-center w-full ">
                            <div className="grid grid-cols-2 gap-5">
                                {bookCardsData}
                            </div>
                        </section>

                    )}
                </div>
                <div className="w-full flex justify-center mb-20 ">

                <div className="w-350 rounded-2xl p-1 bg-slate-50/40 border border-slate-300 flex justify-between items-center gap-8">
                    <div className="flex items-center gap-8">
                        <div className="flex items-center gap-4">
                            <div className="relative group">
                                <select
                                    className="p-3 text-slate-400 font-semibold text-[18px] cursor-pointer"
                                    value={rowsPerPage}
                                    onChange={handleChangeRowsPerPage}
                                >
                                    {[10, 20, 50, 100].map((count) => (
                                        <option key={count} value={count}>
                                            {count} rows
                                        </option>
                                    ))}
                                </select>

                            </div>
                        </div>
                        <div className="h-6 w-px bg-slate-200 hidden lg:block" />
                        <div className="text-[18px] font-semibold text-slate-400 font-[poppins] uppercase">
                            {total ?? 1 > 0
                                ? <><span className="text-slate-600">{(page ?? 0) * (rowsPerPage ?? 0) + 1} - {Math.min(((page ?? 0) + 1) * (rowsPerPage ?? 10), (total ?? 0))}</span> <span className="mx-1">of</span> <span className="text-slate-600">{total}</span> entries</>
                                : "No entries"}
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={() => handleChangePage(Math.max(0, (page ?? 0) - 1))}
                            disabled={totalPages === 0}
                            className="p-3.5 flex items-center text-slate-400 font-semibold text-[18px] gap-2"
                        >
                            <FcPrevious size={18} /> Prev
                        </button>

                        <div className="flex items-center border p-1 font-semibold text-slate-400 rounded-4xl  border-slate-400 text-[18px]!">
                            <button
                                key={page}
                                onClick={() => handleChangePage(page ? page : 0)}
                                className="min-w-6 h-6  "
                            >
                                {page ? page + 1 : 1}
                            </button>
                        </div>

                        <button
                            onClick={() => handleChangePage(totalPages !== undefined ? Math.min(totalPages - 1, (page || 0) + 1) : Math.min())}
                            disabled={totalPages === 0 || (page !== undefined && page >= (totalPages ? totalPages : 0) - 1)}
                            className="p-3.5 flex items-center font-semibold text-slate-400 text-[18px] gap-2 enabled:hover:text-blue-600 disabled:opacity-50"
                        >
                            Next <FcNext />
                        </button>
                    </div>
                </div>
                </div>
            </div>
        </>
    );
}


