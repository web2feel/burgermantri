import { USDformat } from "../utils/format";
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";

const CartItem = ({ data, addCartItem, removeCartItem, deletecartItem }) => {
  const { title, image, price, quantity, id } = data;
  return (
    <div className="cartItem">
      <img src={image} alt="" width="64" height="64" />
      <div className="cartContent">
        <h2>{title}</h2>
        <p>{USDformat(price)}</p>
        <div className="quantityControl">
          <span onClick={() => removeCartItem(id)}>
            <FaSquareMinus size={18} />
          </span>
          <span> {quantity} </span>
          <span onClick={() => addCartItem(data)}>
            <FaSquarePlus size={18}/>
          </span>
        </div>
      </div>

      <div onClick={() => deletecartItem(id)} style={{ marginLeft: "auto" }}>
        <img
          src="https://www.svgrepo.com/show/13658/error.svg"
          alt=""
          width="16"
        />
      </div>
    </div>
  );
};

export default CartItem;
