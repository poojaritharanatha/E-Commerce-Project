import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="contaner grid1">
          <div className="box">
            <h1>
              ME - <span>KART</span>
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iure
              magni dolorem incidunt eveniet veritatis culpa dicta soluta
              repellendus ex cupiditate.
            </p>
            <div className="icon d_flex">
              <div className="img d_flex">
                <i class="fa fa-play"></i>
                <span>Google Play</span>
              </div>
              <div className="img d_flex">
                <i class="fa-solid fa-heart-crack"></i>
                <span>App Store</span>
              </div>
            </div>
          </div>

          <div className="box">
            <h2>About Us</h2>
            <ul>
              <li>Career</li>
              <li>Our Stores</li>
              <li>Our Cares</li>
              <li>Terms & Conditions</li>
              <li>Privacy & Policy</li>
            </ul>
          </div>
          <div className="box">
            <h2>Customer Care</h2>
            <ul>
              <li>Help Centre</li>
              <li>How to Buy</li>
              <li>Track Your Order</li>
              <li>Corporate and Bulk Purchasing</li>
              <li>Return % Refunds</li>
            </ul>
          </div>
          <div className="box">
            <h2>Contact Us</h2>
            <ul>
              <li>#73 Bangalore south, Anandha Bhavan Building,India 560045</li>
              <li>mekart.help@gmail.com</li>
              <li>+1122334455</li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
