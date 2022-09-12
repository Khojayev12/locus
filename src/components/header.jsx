import Logo from "../media/logo.png"
import "../styles/header.css"
export default function Header(){
    return(
        <div className="header" >
            <div className="header-left" >
                <img src={Logo} alt="" className="header-logo" />
                Locus
            </div>
            <div className="header-center" >
                <div className="each-header" >Home</div>
                <div className="each-header" >Contact</div>
                <div className="each-header" >Location</div>
                <div className="each-header" >About Us</div>
            </div>
            <div className="header-sign" >
                <button className="header-btn" >
                    Sign Up
                </button>
            </div>
        </div>
    )
}