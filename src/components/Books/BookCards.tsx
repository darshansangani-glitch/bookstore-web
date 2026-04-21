interface cardsProps<T> {
    id: T,
    category: T,
    bookName: T,
    src: T,
    description: T,
    quantity: T,
    handleRequestSubmission: <T extends string>(_id: T) => Promise<void> | null;
}


export default function BookCard(props: cardsProps<string>) {
    return (
        <div
            className="max-w-250 h-76 border-2 rounded-2xl border-gray-300 flex  gap-2 justify-center! mb-10 shadow-2xl shadow-gray-300"
            key={props.id}
        >
            <img
                src={props.src}
                alt=""
                className="w-55 rounded-xl h-75"
            />
            <div className="flex w-110 justify-between flex-col p-5 pt-12 relative">
                <span className="absolute right-2  top-2 text-white font-extrabold text-[15px] bg-orange-300  rounded-2xl pl-4 pr-4 p-1    ">
                    {props.category}
                </span>
                <div className="flex flex-col gap-4">
                    <p className="w-fit! line-clamp-2 overflow-hidden leading-8  font-bold text-gray-500 text-[30px]" >
                        {props.bookName}
                    </p>
                    <p className="line-clamp-4 overflow-hidden ">
                        {props.description}
                    </p>
                </div>

                <div className="flex items-center justify-between">
                    <p className="font-semibold text-xl">
                        Quantity: <span className="font-medium">{props.quantity}</span>
                    </p>
                    <button
                        className="w-50 border p-3 rounded-xl bg-green-500 text-[18px] text-white hover:bg-amber-500 font-bold"
                        type="submit"
                        onClick={() =>
                            props.handleRequestSubmission(props.id)
                        }
                    >
                        Request Book
                    </button>
                </div>

            </div>

        </div>
    )
}