import React from "react";
import FlashDeals from "../components/FlashDeals/FlashDeals";
import Home from "../components/mainPage/Home";

const Pages = ({ productItems, cartItem, addToCart }) => {
  return (
    <>
      <Home cartItem={cartItem} />
      <FlashDeals productItems={productItems} addToCart={addToCart} />
    </>
  );
};

export default Pages;
