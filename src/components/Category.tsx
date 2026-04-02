import { Outlet, useNavigate } from "react-router-dom";
import { CSSProperties } from "react";
import fantasyImg from "../assets/fantasy.jpg";
import engineerImg from "../assets/Engineering.png";
import financeImg from "../assets/finance.png";
import higherImg from "../assets/higher.png";
import manageImg from "../assets/management.png";
import { Link } from "react-router-dom";

export default function CategorySection() {
  const img = [
    {
      src: fantasyImg,
      alt: "fantasyImg",
      className: "fantasyImg",
      span: "Fantasy",
    },
    {
      src: engineerImg,
      alt: "engineerImg",
      className: "engineerImg",
      span: "Engineer",
    },
    {
      src: financeImg,
      alt: "financeImg",
      className: "financeImg",
      span: "Finance",
    },
    {
      src: higherImg,
      alt: "higherImg",
      className: "higherImg",
      span: "Higher",
    },
    {
      src: manageImg,
      alt: "manageImg",
      className: "manageImg",
      span: "Management",
    },
  ];

  const spanStyle: CSSProperties = {
    fontSize: "25px",
    position: "absolute",
    color: "white",
    left: "22px",
    fontWeight: "600",
    bottom: "70px",
  };

  const style = {
    width: "350px",
    height: "350px",
    borderRadius: "20px",
  };

  const CategoryImageElements = img.map((image) => {
    return (
      <div className={image.className} style={{ position: "relative" }}>
        <Link to={image.src} className="imgs">
          <img src={image.src} alt={image.alt} style={style}/>
          <figcaption style={spanStyle}>{image.span}</figcaption>
        </Link>
      </div>
    );
  });

  const navigate = useNavigate();
  const viewAllNavigation = () => {
    navigate("/books");
  };
  return (
    <section className="category-container">
      <div className="explore-div">
        <h3>Explore our Top Categories</h3>
        <button onClick={viewAllNavigation} type="button">
          View All
        </button>
      </div>
      <div className="group-img">
        {CategoryImageElements}
        <Outlet />
      </div>
    </section>
  );
}
