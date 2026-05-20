import { useNavigate } from "react-router-dom"
interface BookContent {
    book_name: string,
    description: string,
    category: string,
    author: string
}

export default function BookContent({ description, category, author }: BookContent) {
    return (
        <div className="h-full w-275 flex flex-col font-plus!">
            <div className="flex flex-col flex-1 gap-2 pb-3 border-b-2 border-b-[#E0E0E0]" >
                <span className="text-[20px]"><span className="text-black font-bold">Author: </span> {author}</span>

                <span className="text-[20px]"><span className="text-black font-bold">Category: </span> {category}</span>
                <div className="flex justify-end">
                    <button className="border-0 p-2 px-6 bg-black text-white font-bold hover:bg-[#9c894d]">Add to Cart</button>
                </div>
            </div>
            <div className="flex flex-col gap-2 py-5">
                <span className="text-[22px] font-bold text-gray-600 w-fit  py-2 ">Description</span>
                <span className="text-[18px] whitespace-pre-line!">
                    {description}
                </span>
            </div>
        </div>
    )
}