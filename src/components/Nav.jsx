import { useContext } from "react";
import { AppContext } from "../context/context";
import { NavLink } from "react-router-dom";

const Nav = () => {
  const { state } = useContext(AppContext);

  return (
    <nav className="menu">
      <NavLink to="/cart" className="menuItem">
        Cart: {state.count}
      </NavLink>
      <NavLink to="/about" className="menuItem">
        About
      </NavLink>
    </nav>
  );
};

export default Nav;
