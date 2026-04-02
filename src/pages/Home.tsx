import Header from "../components/Header.js";
import maskImg from "../assets/Mask Group.png";
import CategorySection from "../components/Category.js";
import { FaArrowRightLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";
import { FeaturedBooks, QuotesSection } from "../components/Home.js";



function IntroSection() {
  const navigate = useNavigate()
  function ExpoloreNavigate(){
    navigate('/books')
  }

  return (
    <div className="intro-container h-115!">
      <div className="intro-block">

        <p className="text-[20px]! p-5 text-gray-400! flex justify-center">
         "Books know no limits or borders, they create longings and unexpected passions, they pose more questions than answers. They represent the unruly world, filled with contradictions and complications, a world that threatens the totalitarian mindset by being beyond its control."   <span className="text-[18px]! w-full flex! justify-end font-extrabold text-black">– Azar Nafisi</span>
        </p>
        <button className="w-55! font-bold border-gray-400! hover:bg-gray-200! hover:text-black!" onClick={ExpoloreNavigate}>
          Explore Books <FaArrowRightLong className="fa-arrow-right"/>
        </button>
      </div>
      <div className="intro-img">
        <img src={maskImg} alt="Mask Image" />
      </div>
    </div>
    
  );
}

export default function Home() {
  return (
    <>
      <main className="pt-15 flex flex-col justify-center main-container">
        <IntroSection />
        <FeaturedBooks />
        <QuotesSection />
      </main>
    </>
  );
}
