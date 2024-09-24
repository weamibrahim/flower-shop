import "./cart.css";
import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { AiTwotoneDelete } from "react-icons/ai";
import { FaLongArrowAltLeft } from "react-icons/fa";
import Checkout from "../checkout/checkout";
function Cart() {
  const [cart, setCart] = useState({});
  const userId = JSON.parse(localStorage.getItem("userData"))._id;

  useEffect(() => {
    getCart(userId);
  }, []);

  const getCart = async (userId) => {
    const accessToken = localStorage.getItem("accessToken");
    try {
      const response = await fetch(
        `https://flower-shop-roan.vercel.app/api/cart/${userId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      setCart(data);
      // console.log('updatedCart:', data); // Debugging
    } catch (error) {
      console.error(error);
    }
  };

  const updateCartAfterActions = async (flowerId, action) => {
    const accessToken = localStorage.getItem("accessToken");
    // console.log('userId:', userId); // Check if userId is defined
    // console.log('flowerId:', flowerId); // Check if flowerId is defined
    // console.log('action:', action);
    const flowerIdString = flowerId._id || flowerId; // Extract flowerId as a string
    console.log("flowerIdString:", flowerIdString);
    try {
      const response = await fetch(
        `https://flower-shop-roan.vercel.app/api/cart/${action}/${userId}/${flowerIdString}`,
        {
          method: "PUT", // or 'DELETE' for remove
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );
      const data = await response.json();
      setCart(data);

      getCart(userId);
    } catch (error) {
      console.error(error);
    }
  };
  const calculateTotalPrice = () => {
    let total = 0;
    if (cart.items) {
      total = cart.items.reduce((accumulator, item) => {
        const itemTotal = item.quantity * item.flowerId.price;
        return accumulator + itemTotal;
      }, 0);
    }
    return total;
  };

  return (
    <div className="container-fluid">
      <div className="table-responsive">
        <table className="table table-striped ">
          <thead>
            <tr className="text-center">
              <th scope="col">image</th>
              <th scope="col">name</th>

              <th scope="col">price </th>
              <th scope="col">quantity</th>
              <th scope="col">total price</th>
              <th>action</th>
            </tr>
          </thead>

          {cart.items &&
            cart.items.map((item) => (
              <tbody>
                <tr key={item.flowerId._id} className="text-center">
                  <td>
                    <img
                      style={{ width: "50px", height: "50px" }}
                      src={
                        "https://flower-shop-roan.vercel.app/images/" +
                        item.flowerId.image
                      }
                    />{" "}
                  </td>
                  <td>{item.flowerId.name}</td>
                  <td>{item.flowerId.price}LE</td>
                  <td>{item.quantity}</td>
                  <td>{item.quantity * item.flowerId.price}</td>
                  <td>
                    {/* <button className="btn btn-primary px-2" onClick={() => incrementItemQuantity(item.flowerId)}>+</button>
              <button className="btn btn-danger px-2"  onClick={() => decrementItemQuantity(item.flowerId)}>-</button>
              <button className="btn btn-link text-danger" onClick={() => removeItemFromCart(item.flowerId)}>Remove</button> */}
                    <button
                      className="btn btn-success px-2 "
                      onClick={() =>
                        updateCartAfterActions(item.flowerId, "increment-item")
                      }
                    >
                      +
                    </button>
                    <button
                      className="btn btn-info px-2 mx-4 my-2"
                      onClick={() =>
                        updateCartAfterActions(item.flowerId, "decrement-item")
                      }
                    >
                      -
                    </button>
                    <button
                      className="btn text-danger  px-2"
                      onClick={() =>
                        updateCartAfterActions(item.flowerId, "remove-item")
                      }
                    >
                      <AiTwotoneDelete style={{ fontSize: "50px" }} />
                    </button>
                  </td>
                </tr>
              </tbody>
            ))}
        </table>
      </div>

      <div className="row">
        {/* Left-aligned content */}

        {/* Right-aligned content */}
        <div className="col-md-6 d-flex justify-content-start align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <FaLongArrowAltLeft className="mx-2" />{" "}
            <NavLink to="/flowers" className="text-decoration-none text-black">
              Continue Shopping
            </NavLink>
          </div>
        </div>
        <div className="col-md-6 d-flex flex-column align-items-end">
          <p className="text-center mb-0">
            Total Price: {calculateTotalPrice()} LE
          </p>
          <Checkout cartItems={cart.items} />
        </div>
      </div>
    </div>
  );
}

export default Cart;
