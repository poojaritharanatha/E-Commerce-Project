import React from "react";
import "./style.css";

const Cart = ({ cartItem, addToCart, decreaseQty }) => {
  const totalPrice = cartItem.reduce(
    (price, item) => price + item.qty * item.price,
    0
  );
  return (
    <>
      <div className="cart-items">
        <div className="container d_flex">
          <div className="cart-details">
            {cartItem.length === 0 && (
              <h1 className="no-items product">No Items Are in the Cart</h1>
            )}
            {cartItem.map((item) => {
              const productQty = item.price * item.qty;

              return (
                <div className="cart-list product d-flex">
                  <div className="img">
                    <img src={item.cover} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.name}</h3>
                    <h4>
                      ${item.price}.00 x {item.qty}
                      <span>${productQty}.00</span>
                    </h4>
                  </div>
                  <div className="cart-items-function">
                    <div className="removeCart"></div>
                    <div className="cartControl d_flex">
                      <button
                        className="inCart"
                        onClick={() => addToCart(item)}
                      >
                        <i className="fa fa-plus"></i>
                      </button>
                      <button
                        className="desCart"
                        onClick={() => decreaseQty(item)}
                      >
                        <i className="fa fa-minus"></i>
                      </button>
                    </div>
                  </div>
                  <div className="cart-item-price"></div>
                </div>
              );
            })}
            <div className="cart-total product">
              <h2>Cart Summery</h2>
              <div className="d_flex">
                <h4>Total Price :</h4>
                <h3>${totalPrice}.00</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
