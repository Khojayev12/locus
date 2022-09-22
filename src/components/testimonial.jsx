import "../styles/projects.css";
import M1 from "../media/im1.png";
import M2 from "../media/m2.png";
import M3 from "../media/m3.png";
import M4 from "../media/m4.png";
import BigPic from "../media/bigpic.png";

export default function Test() {
  return (
    <div className="test">
      <div className="test-title"> Testimonial </div>
      <div className="test-signs">
        <img
          src={M1}
          alt=""
          className="test-img"
          width="239px"
          height="239px"
        />
        <img
          src={M2}
          alt=""
          className="test-img"
          width="237px"
          height="90px"
          style={{ marginTop: "74.5px" }}
        />
        <img
          src={M3}
          alt=""
          className="test-img"
          width="296px"
          height="44px"
          style={{ marginTop: "97.5px" }}
        />
        <img
          src={M4}
          alt=""
          className="test-img"
          width="199px"
          height="131px"
          style={{ marginTop: "54.5px" }}
        />
      </div>
      <div className="big">
        <div className="big-pic">
          {" "}
          <img src={BigPic} alt="" width="100%" />{" "}
        </div>
        <div className="big-text">
          <div className="numbers">
            <div className="num-name">
              <div className="big-num">105</div>
              <div className="name">project done </div>
            </div>

            <div className="num-name">
              <div className="big-num">12</div>
              <div className="name"> years of experience</div>
            </div>

            <div className="num-name">
              <div className="big-num">10+</div>
              <div className="name">big company partnership </div>
            </div>
          </div>
          <div className="big-title">
            "Not able to tell you how happy I am with interior design. Interior
            design has completely surpassed our expectations. Interior design
            saved my business. Interior design is worth much more than I paid."
            - Roscoe
          </div>
        </div>
      </div>
    </div>
  );
}
