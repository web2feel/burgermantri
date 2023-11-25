import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Sidebar from "./components/Sidebar";

const App = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleSidebar = () => {
    setShowSidebar((prev) => !prev);
  };

  const [cart, setCart] = useState([]);

  console.log(cart);

  const count = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  const total = cart.reduce((acc,curr) => acc + (curr.quantity * curr.price),0 )

  const addCartItem = (productObj) => {
    // Check if product is already in cart array
    let existingProductIndex = cart.findIndex(
      (item) => item.id === productObj.id
    );
    // if product exist, increase quantity by 1
    if (existingProductIndex > -1) {
      setCart((prev) => {
        return prev.map((item) => {
          if (item.id === productObj.id) {
            return { ...item, quantity: item.quantity + 1 };
          } else {
            return item;
          }
        });
      });
      // if product is added first time, include a quanity property with value 1
    } else {
      setCart((prev) => [...prev, { ...productObj, quantity: 1 }]);
    }
  };

  const removeCartItem = (_id) => {
    let productObj = cart.find((item) => item.id === _id);
    let productQuantity = productObj.quantity;
    console.log(productQuantity);
    if (productQuantity > 1) {
      setCart((prev) => {
        return prev.map((item) => {
          return item.id === _id
            ? { ...item, quantity: item.quantity - 1 }
            : item;
        });
      });
    } else {
      setCart((prev) => prev.filter((item) => item.id !== _id));
    }
  };

  const deletecartItem = (_id) => {
    setCart((prev) => prev.filter((item) => item.id !== _id));
  };

  return (
    <div id="app">
      <Header handleSidebar={handleSidebar} count={count} />
      <Hero />
      <ProductGrid addCartItem={addCartItem} cart={cart} />
      <Footer />
      {showSidebar && (
        <Sidebar
          handleSidebar={handleSidebar}
          cart={cart}
          addCartItem={addCartItem}
          removeCartItem={removeCartItem}
          deletecartItem={deletecartItem}
          count={count}
          total={total}
        />
      )}
    </div>
  );
};

export default App;
