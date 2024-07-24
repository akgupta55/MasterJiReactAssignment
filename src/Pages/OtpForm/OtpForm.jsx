import "./OtpForm.css";
import logo from "../../assets/chaiaurcode.png";
import Navbar from "../../Components/Navbar/Navbar";

const OtpForm = () => {
  return (
    <>
      <Navbar />
      <div className="otpFrom">
        <div className="container">
          <h1>Chai aur Code</h1>
          <div className="box">
            <h2>Mobile Phone Verification</h2>
            <p>
              Enter the 4-digit verification code that was sent to
              <br /> your phone number.
            </p>

            <div className="inp">
              <input type="Number" />
              <input type="Number" />
              <input type="Number" />
              <input type="Number" />
            </div>

            <button>Verify Account</button>
            <p>
              Didn’t receive code? <span className="resend">Resend</span>
            </p>
          </div>
          <img src={logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default OtpForm;
