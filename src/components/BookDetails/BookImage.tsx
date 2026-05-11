import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
interface BookImage {
  src: string;
  bookName: string;
  loading: Boolean;
}

export default function BookImage({ src, bookName, loading }: BookImage) {
  console.log(loading);
  return (
    <div className="h-full w-80 flex justify-center">
      {loading ? (
        <Skeleton width={280} height={400} />
      ) : (
        <img className="w-70 h-95" src={src} alt={bookName} />
      )}
    </div>
  );
}
