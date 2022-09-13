import "../styles/howworks.css";
import Pic1 from "../media/working1.png";
import Pic2 from "../media/undervideo.png";
import See from "../media/see.png";

export default function HowWorks() {
  return (
    <div className="working">
      <div className="working-header">
        <div className="working-title">How it works</div>
        <div className="working-subheader">
          Spice up your space even simpler than you think
        </div>
      </div>
      <div className="video">
        <div className="video-pic">
          <img src={Pic1} alt="" className="video-photo" />
        </div>
        <div className="video-text">
          <div className="video-text-main">
            We provide design and build for commercial building, interior and
            furniture to improve the better life.
          </div>
          <div className="video-text-see">SEE VIDEO</div>
        </div>
        <img src={See} alt="" className="video-see-img" />
      </div>
      <div className="under-video">
        <div className="under-video-img">
          <img src={Pic2} alt="" className="inder-video-pic" />
        </div>
        <div className="under-video-text">
          <div className="under-title">
            Our mission is to deliver aesthetic visual for your home
          </div>
          <div className="under-subtitle">
            By applying bacis psychology principles, we are going to explain how
            perception works and how we can use this understanding to maximise
            the space that we occupy in our homes.
          </div>
        </div>
      </div>
    </div>
  );
}
