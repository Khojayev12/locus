import "../styles/projects.css";
import Pro1 from "../media/pro1.png";
import Pro2 from "../media/pro2.png";
import Pro3 from "../media/pro3.png";

export default function Projects() {
  return (
    <div className="project">
      <div className="main-title">
        <div className="title">Our projects</div>
        <div className="main-sub-title">
          Introducing our first official project
        </div>
        <hr className="my-hb"/>
        <hr className="my-hr"/>
      </div>
      <div className="pro-3">
        <div className="pro-one">
          <div className="pro-main-text">Project Livingroom</div>
          <div className="pro-text">
            A simple guide to create the perfect livingro- om for . Night Watc
            works beautifully in a wi- de gamut of arrangements.
          </div>
          <img src={Pro1} alt="" className="pro-pic" />
        </div>
        <div className="pro-one" style={{marginLeft:"5%", marginRight:"5%"}} >
          <img src={Pro2} alt="" className="pro-pic" />
          <div className="pro-main-text">Project workspace</div>
          <div className="pro-text">
            A simple guide to create the perfect livingro- om for . Night Watc
            works beautifully in a wi- de gamut of arrangements.
          </div>
        </div>
        <div className="pro-one">
          <div className="pro-main-text">Library</div>
          <div className="pro-text">
            A simple guide to create the perfect livingro- om for . Night Watc
            works beautifully in a wi- de gamut of arrangements.
          </div>
          <img src={Pro3} alt="" className="pro-pic" />
        </div>
      </div>
    </div>
  );
}
