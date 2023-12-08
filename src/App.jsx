import Footer from "./components/Footer";
import Header from "./components/Header";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <div id="app">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default App;
