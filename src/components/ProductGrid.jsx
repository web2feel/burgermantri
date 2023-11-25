import { burgers } from "../../data";
import ProductGridItem from "./ProductGridItem";

const ProductGrid = ({ addCartItem, cart }) => {
  return (
    <main>
      <div className="container">
        <div className="productGrid">
          {burgers.map((burger) => {
            return (
              <ProductGridItem
                key={burger.id}
                data={burger}
                addCartItem={addCartItem}
                cart={cart}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
};

export default ProductGrid;
