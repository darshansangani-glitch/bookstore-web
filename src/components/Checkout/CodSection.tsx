import { MdErrorOutline } from "react-icons/md";

export default function CodSection() {
    return (
        <div className="flex  p-5 bg-amber-100 rounded-xl gap-5">
            <MdErrorOutline size={30} />
            <div className="flex flex-col gap-1 ">
                <span className="text-[22px] font-semibold">Cash on Delivery</span>
                <span className="text-[18px]">Pay with cash when your order is delivered to your doorstep.</span>
            </div>
        </div>
    )
}