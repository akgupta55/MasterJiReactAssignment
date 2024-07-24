import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <ul>
        <li>
          <Link to="/otp-form"> OTP From </Link>
        </li>
        <li>
          <Link to="/course-list"> D&D Course Card </Link>
        </li>
        <li>
          <Link to="/batches"> Data Table </Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
