import "../styles/projects.css"
import M1 from "../media/im1.png"
import M2 from "../media/m2.png"
import M3 from "../media/m3.png"
import M4 from "../media/m4.png"

export default function Test(){
    return(
        <div className="test" >
            <div className="test-title" > Testimonial </div>
            <div className="test-signs" >
                <img src={M1} alt="" className="test-img" />
                <img src={M2} alt="" className="test-img" />
                <img src={M3} alt="" className="test-img" />
                <img src={M4} alt="" className="test-img" />
            </div>
        </div>
    )
}