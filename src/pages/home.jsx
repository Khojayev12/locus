import "../styles/home.css";
import Home2 from "../media/home.png"

export default function Home() {
  return (
    <div className="home">
      <div className="home-text">
        <div className="home-main-title">
          Get the inspiration of interior design here
        </div>
        <div className="home-subtitle">
          architecture not only about engineering, it even lands to art and
          aesthetics. With us, you will get a residentical design with an
          extraordinary touch of art.
        </div>
        <button className="home-btn" >
            Let's go
        </button>
      </div>
      <div className="home-right" >
        <img src={Home2} alt="" className="home-pic" />
      </div>
    </div>
  );
}
