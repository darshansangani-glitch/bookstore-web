export default function CardInputs() {
    return (
        <div className="flex flex-col space-y-4 font-semibold">
            <label className="text-[18px] flex flex-col space-y-2 "><span>Card Number</span><input type="text" placeholder="1234 5678 9012 3456" className="border p-3 rounded-lg border-gray-300" /></label>
            <label className="text-[18px] space-y-2 flex flex-col "><span>Cardholder Name</span><input type="text" placeholder="John Doe" className="border p-3 rounded-lg border-gray-300"  /></label>
            <div className="flex gap-5">
                <label className="text-[18px] space-y-2 w-1/2 flex flex-col"><span>Expiry Date</span><input type="text" placeholder="MM/YY" className="border p-3  rounded-lg border-gray-300" /></label>
                <label className="w-1/2 space-y-2 text-[18px] flex flex-col"><span>CVV</span><input type="text" placeholder="123" className="border p-3 rounded-lg border-gray-300" /></label>
            </div>
        </div>
    )
}