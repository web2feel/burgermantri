// import { burgers } from "../../data";
import ProductGridItem from "./ProductGridItem";
import { useEffect, useState } from "react";

const ProductGrid = () => {
  const [burgers, setBurgers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      let res = await fetch("https://burgermantri.onrender.com/data");
      let data = await res.json();
      setBurgers(data);
    };
    fetchData();
  }, []);

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
