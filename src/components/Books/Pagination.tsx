import { GrPrevious } from "react-icons/gr";
interface Pagination {
    totalPages: number
    page: number
    total: number
    rowsPerPage: number
    handleChangeRowsPerPage: any
    handleChangePage: (newPage: number) => void
}
export default function ReusablePagination({
    totalPages,
    page,
    total,
    rowsPerPage,
    handleChangeRowsPerPage,
    handleChangePage, }: Pagination) {
    return (
        <>
            <div className="w-250 rounded-2xl p-1 flex justify-between items-center gap-8 font-plus! text-[18px]! px-7">
                <div className="flex items-center gap-8">

                    <div className="w-70 text-[18px] font-semibold text-gray-400 ">
                        {total > 0
                            ? <div className="flex items-center gap-1"><span>Showing </span><span className="text-slate-600">{(page - 1) * (rowsPerPage) + 1} - {Math.min(((page)) * (rowsPerPage ?? 10), (total ?? 0))}</span> <span className="mx-1">of</span> <span className="text-slate-600">{total}</span> entries</div>
                            : "No entries"}
                    </div>
                </div>

                <div className="flex items-center gap-3">
                    <button
                        onClick={() => handleChangePage(Math.max(0, (page) - 1))}
                        disabled={page - 1 === 0}
                        className="p-3.5 flex items-center font-semibold text-gray-400 text-[18px] gap-2 enabled:hover:text-[#74642F] disabled:opacity-50"
                    >
                        <GrPrevious size={18} className="" /> Prev
                    </button>

                    <div className="flex items-center border p-1 font-semibold text-slate-400 rounded-4xl  border-[#E0E0E0] text-[18px]!">
                        <button
                            key={page}
                            onClick={() => handleChangePage(page ? page : 0)}
                            className="min-w-6 h-6  "
                        >
                            {page}
                        </button>
                    </div>

                    <button
                        onClick={() => handleChangePage(totalPages !== undefined ? Math.min(totalPages, (page || 0) + 1) : Math.min())}
                        disabled={totalPages === 0 || (page >= (totalPages))}
                        className="p-3.5 flex items-center font-semibold text-gray-400 text-[18px] gap-2 enabled:hover:text-[#74642F] disabled:opacity-50"
                    >
                        Next <GrPrevious className="rotate-180" />
                    </button>
                </div>
                <div className="flex items-center gap-4 border border-[#E0E0E0] p-2">
                    <div className="relative group">
                        <select
                            className=" text-gray-400 font-semibold text-[18px] cursor-pointer"
                            value={rowsPerPage}
                            onChange={handleChangeRowsPerPage}
                        >
                            {[12, 21, 60, 100].map((count) => (
                                <option className="bg-red-200!" key={count} value={count}>
                                    {count} rows
                                </option>
                            ))}

                        </select>
                    </div>
                </div>
            </div>
        </>
    )
}

