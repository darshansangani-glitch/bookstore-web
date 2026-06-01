import A1 from "../../assets/1.png";
import A2 from "../../assets/2.png";
import A3 from "../../assets/3.png";
import A4 from "../../assets/4.png";
import A5 from "../../assets/5.png";

export default function Associate() {
  const images = [A1, A2, A3, A4, A5];
  return (
    <div className=" flex justify-center items-center bg-[#EDEBE3] mt-15">
      <div className="2xl:w-355 lg:w-285 w-full xl:h-70 md:h-40 h-30 flex justify-between items-center">
        {images.map((item, index) => (
          <img
            src={item}
            key={index}
            alt={`Associate Book ${index + 1}`}
            className="xl:w-60.25 xl:h-40 md:w-25 md:h-25 w-20 h-15"
          />
        ))}
      </div>
    </div>
  );
}
