import "../styles/contactus.css";

export default function ContactUs() {
  return (
    <div className="contact">
      <div className="con-header">
        <div className="main-title">Contact Us</div>
        <div className="sub-header">
          Have any questions? Want help before getting started?
        </div>
        <div className="help-chiz" ></div>
        <div className="help-chiz" ></div>
      </div>
      <div className="table">
        <div className="sub-table">
          <div className="input-name">Full name</div>
          <input className="mt-input" />
          <div className="input-name">Email address</div>
          <input className="mt-input" />
          <div className="input-name">Description</div>
          <input className="mt-input" />
          <button className="btn">Send Now</button>
        </div>
      </div>
    </div>
  );
}
