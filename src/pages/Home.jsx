import React, { Suspense, lazy } from "react";
import Hero from "../components/Hero";
// import ProductGrid from "../components/ProductGrid";
const ProductGrid = lazy(() => import("../components/ProductGrid"));
import Loading from "../components/Loading";
const Home = () => {
  return (
    <>
      <Hero />
      <Suspense fallback={<Loading />}>
        <ProductGrid />
      </Suspense>
    </>
  );
};

export default Home;

export const productsLoader = async () => {
  let res = await fetch("https://burgermantri.onrender.com/data");
  return res;
};
