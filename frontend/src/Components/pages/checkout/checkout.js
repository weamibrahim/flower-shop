import React from "react";
import "./checkout.css";
import axios from "axios";

function Checkout({ cartItems }) {
  console.log(cartItems);
  const userId = JSON.parse(localStorage.getItem("userData"))._id;
  const handleCheckout = async () => {
    try {
      await axios
        .post(
          "https://flower-shop-roan.vercel.app/api/stripe/create-checkout-session",
          { cartItems, userId },
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
            },
          }
        )
        .then((response) => {
          window.location.href = response.data.url;
        });
    } catch (error) {
      console.error("Error during checkout:", error);
    }
  };

  return (
    <div>
      <button className="button_checkout my-3" onClick={handleCheckout}>
        checkout
      </button>
    </div>
  );
}

export default Checkout;
