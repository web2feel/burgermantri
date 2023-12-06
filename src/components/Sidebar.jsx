import { IoIosCloseCircle } from "react-icons/io";
import CartItem from "./CartItem";
import { USDformat } from "../utils/format";
import { useContext } from "react";
import { AppContext } from "../context/context";
const Sidebar = () => {
  const { state, dispatch } = useContext(AppContext);
  return (
    <div id="sidebar">
      <div className="cart">
        <div className="cartHead">
          <div>
            <h2>Shopping Cart</h2>
            <p> {state.count} items in your cart</p>
          </div>
          <div
            onClick={() => dispatch({ type: "TOGGLE_SIDEBAR" })}
            className="cartClose"
          >
            <IoIosCloseCircle color="#F59E0B" size={36} />
          </div>
        </div>
        <div className="cartBody">
          {state.cart.map((item) => {
            return <CartItem key={item.id} data={item} />;
          })}
        </div>
        <div className="cartFooter">
          <h3>Total - {USDformat(state.total)}</h3>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
