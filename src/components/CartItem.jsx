import { USDformat } from "../utils/format";
import { FaSquarePlus, FaSquareMinus } from "react-icons/fa6";
import { useContext } from "react";
import { AppContext } from "../context/context";

const CartItem = ({ data }) => {
  const { title, image, price, quantity, id } = data;

  const {dispatch } = useContext(AppContext);

  const handleDecrease = (id) => {
    if (quantity > 1) {
      dispatch({ type: "CHANGE_QUANTITY", payload: { id, num: -1 } });
    }
  };
  return (
    <div className="cartItem">
      <img src={image} alt="" width="64" height="64" />
      <div className="cartContent">
        <h2>{title}</h2>
        <p>{USDformat(price)}</p>
        <div className="quantityControl">
          <span onClick={() => handleDecrease(id)}>
            <FaSquareMinus size={18} />
          </span>
          <span> {quantity} </span>
          <span
            onClick={() =>
              dispatch({ type: "CHANGE_QUANTITY", payload: { id, num: 1 } })
            }
          >
            <FaSquarePlus size={18} />
          </span>
        </div>
      </div>

      <div
        onClick={() => dispatch({ type: "DELETE_ITEM", payload: id })}
        style={{ marginLeft: "auto" }}
      >
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
