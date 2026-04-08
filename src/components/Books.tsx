interface props<T> {
    searchTerm?: string;
    handleSearchChange?: React.ChangeEventHandler<HTMLInputElement | Element>;
    handleRequestSubmission?: <T extends string>(_id: T) => Promise<void> | null;
}

interface cardsProps<T> {
    id: T,
    category: T,
    bookName: T,
    src: T,
    description: T,
    quantity: T,
    handleRequestSubmission: <T extends string>(_id: T) => Promise<void> | null;
}

export function SearchBar({ searchTerm, handleSearchChange }: props<string | number>) {
    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search Books..."
                value={searchTerm}
                onChange={handleSearchChange}
            />
        </div>
    );
}


export function BookCard(props: cardsProps<string>) {
    return (
        <div
            className="w-62.5 flex flex-col gap-2 justify-center! mb-10"
            key={props.id}
        >
            <div className="w-62.5 relative">
                <img
                    src={props.src}
                    alt=""
                    className="w-60 rounded-xl h-80"
                />
                <span className="absolute left-2  top-2 text-white font-extrabold text-[12px] bg-orange-300  rounded-2xl pl-2 pr-2    ">
                    {props.category}
                </span>
            </div>
            <div className="flex flex-col p-3">
                <p className="w-full whitespace-nowrap overflow-hidden text-ellipsis  font-bold text-gray-500 text-xl">
                    {props.bookName}
                </p>
                <p className="whitespace-nowrap overflow-hidden text-ellipsis ">
                    {props.description}
                </p>

                <p className="font-semibold text-[18px]">
                    Quantity: <span className="font-medium">{props.quantity}</span>
                </p>
            </div>
            <button
                className="w-full border p-4 rounded-2xl bg-orange-300 text-xl text-white hover:bg-amber-500 font-bold"
                type="submit"
                onClick={() =>
                    props.handleRequestSubmission(props.id)
                }
            >
                Request Book
            </button>
        </div>
    )
}