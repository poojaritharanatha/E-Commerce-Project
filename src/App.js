import "./App.css";
import Cart from "./common/Cart/Cart";
import Header from "./common/header/Header";
import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "./pages/Pages";
import Data from "./components/FlashDeals/Data";
import Footer from "./components/Footer/Footer";

function App() {
  const { productItems } = Data;

  const [cartItem, setCardItem] = useState([]);

  const addToCart = (product) => {
    const productExit = cartItem.find((item) => item.id === product.id);
    if (productExit) {
      setCardItem(
        cartItem.map((item) =>
          item.id === product.id
            ? { ...productExit, qty: productExit.qty + 1 }
            : item
        )
      );
    } else {
      setCardItem([...cartItem, { ...product, qty: 1 }]);
    }
  };

  return (
    <>
      <Router>
        <Header cartItem={cartItem} />
        <Switch>
          <Route path="/" exact>
            <Pages productItems={productItems} addToCart={addToCart} />
          </Route>
          <Route path="/Cart" exact>
            <Cart cartItem={cartItem} addToCart={addToCart} />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
