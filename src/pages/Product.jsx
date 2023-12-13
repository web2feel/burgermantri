import React, { useContext } from "react";
import { FaStar } from "react-icons/fa";
import { useLoaderData } from "react-router-dom";
import { USDformat } from "../utils/format";
import { AppContext } from "../context/context";

const Product = () => {
  const data = useLoaderData();

  const { id, title, image, description, price, reviews, rating } = data;

  const { state, dispatch } = useContext(AppContext);

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
    <div id="productSection">
      <div className="container">
        <div className="productPage">
          <div className="productContent">
            <div className="productImg">
              <img src={image} alt="" />
            </div>
            <div className="productInfo">
              <h1>{title}</h1>
              <div className="rating">
                <FaStar color="#F59E0B" />
                <span>{rating}</span>
              </div>
              <p>{description}</p>
              <div className="itemPrice">{USDformat(price)}</div>
              <div onClick={() => addCartItem(data)} className="btn">
                {itemInCart > -1 ? "Added to Cart" : "Add to Cart"}
              </div>
            </div>
          </div>

          <div className="productReviews">
            <h2>Burger Reviews</h2>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Product;

export const productLoader = async ({ params }) => {
  const { ID } = params;
  let res = await fetch(`https://burgermantri.onrender.com/data/${ID}`);
  return res;
};
