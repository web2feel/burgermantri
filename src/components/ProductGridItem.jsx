import { FaStar } from "react-icons/fa";
import { USDformat } from "../utils/format";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, updateQuantity } from "../store/slices/cart";

const ProductGridItem = ({ data }) => {
  const state = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const { id, image, title, description, rating, price, reviews } = data;

  const itemInCart = state.cart.findIndex((item) => item.id === id);

  const addCartItem = (productObject) => {
    if (itemInCart > -1) {
      dispatch(updateQuantity({ id, num: 1 }));
    } else {
      dispatch(addToCart({ ...productObject, quantity: 1 }));
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
