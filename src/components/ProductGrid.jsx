import { useLoaderData } from "react-router-dom";
import ProductGridItem from "./ProductGridItem";

const ProductGrid = () => {
  const burgers = useLoaderData();
  return (
    <main>
      <div className="container">
        <div className="productGrid">
          {burgers.map((burger) => {
            return <ProductGridItem key={burger.id} data={burger} />;
          })}
        </div>
      </div>
    </main>
  );
};

export default ProductGrid;
