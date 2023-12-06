import { useContext } from "react";
import { AppContext } from "../context/context";
const Nav = () => {
  const { state, dispatch } = useContext(AppContext);

  const handleSidebar = () => {
    dispatch({
      type: "TOGGLE_SIDEBAR",
    });
  };
  return (
    <nav className="menu">
      <div onClick={handleSidebar} className="menuItem cartOpen">
        Cart - {state.count}
      </div>
    </nav>
  );
};

export default Nav;
