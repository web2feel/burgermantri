import { useContext } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ProductGrid from "./components/ProductGrid";
import Sidebar from "./components/Sidebar";
import { AppContext } from "./context/context";

const App = () => {
  const { state } = useContext(AppContext);
  return (
    <div id="app">
      <Header />
      <Hero />
      <ProductGrid />
      <Footer />
      {state.showSidebar && <Sidebar />}
    </div>
  );
};

export default App;
