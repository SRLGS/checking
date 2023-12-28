import { NavLink } from "react-router-dom";
import "./index.css";

const Navbar = () => {
  return (
    <div className="nav-container">
      <NavLink to="/messages" className="inactive" activeclassname="active">
        Messages
      </NavLink>
      <NavLink to="/ravi" className="inactive" activeclassname="active">
        ravi
      </NavLink>
      <NavLink to="/sai" className="inactive" activeclassname="active">
        sai
      </NavLink>
    </div>
  );
};

export default Navbar;
