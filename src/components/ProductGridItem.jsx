import { FaStar } from "react-icons/fa";
import { USDformat } from "../utils/format";
import { useContext } from "react";
import { AppContext } from "../context/context";
import { Link } from "react-router-dom";

const ProductGridItem = ({ data }) => {
  const { state, dispatch } = useContext(AppContext);

  const { id, image, title, description, rating, price, reviews } = data;

  const itemInCart = state.cart.findIndex((item) => item.id === id);

  const addCartItem = (productObject) => {
    if (itemInCart > -1) {
      dispatch({
        type: "CHANGE_QUANTITY",
        payload: { id, num: 1 },
      });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: { ...productObject, quantity: 1 },
      });
    }
  };

  return (
    <div className="productGridItem">
      <img src={image} alt="" />
      <div className="itemContent">
        <Link to={`/burger/${id}`}>
            <h2>{title}</h2>
        </Link>
        <p className="rating">
          <FaStar color="#F59E0B" />
          <span>{rating}</span>
        </p>
        <p>{description}</p>
        <div className="itemMeta">
          <div className="itemPrice">{USDformat(price)}</div>
          <div onClick={() => addCartItem(data)} className="btn">
            {itemInCart > -1 ? "Added to Cart" : "Add to Cart"}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGridItem;
