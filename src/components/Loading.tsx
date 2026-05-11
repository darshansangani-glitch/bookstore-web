import { ClipLoader } from "react-spinners"


export default function ClipLoading() {
    return (
        <div className="w-full!  h-[90vh]! flex items-center justify-center relative ">
            {/* <ClipLoader
                color="#111111"
                size={55} /> */}
                <ClipLoader className="text-black!" size={30} color="#686769" />
        </div>
    )
}