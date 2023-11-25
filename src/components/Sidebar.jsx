import { IoIosCloseCircle } from "react-icons/io";
import CartItem from "./CartItem";
import { USDformat } from "../utils/format";

const Sidebar = ({
  handleSidebar,
  cart,
  addCartItem,
  removeCartItem,
  deletecartItem,
  count,
  total,
}) => {
  return (
    <div id="sidebar">
      <div className="cart">
        <div className="cartHead">
          <div>
            <h2>Shopping Cart</h2>
            <p>{count} items in your cart</p>
          </div>
          <div onClick={handleSidebar} className="cartClose">
            <IoIosCloseCircle color="#F59E0B" size={36} />
          </div>
        </div>
        <div className="cartBody">
          {cart.map((item) => {
            return (
              <CartItem
                key={item.id}
                data={item}
                addCartItem={addCartItem}
                removeCartItem={removeCartItem}
                deletecartItem={deletecartItem}
              />
            );
          })}
        </div>
        <div className="cartFooter">
          <h3>Total - {USDformat(Math.floor(total))}</h3>
          
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
