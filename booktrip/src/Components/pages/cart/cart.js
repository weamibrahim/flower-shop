import "./cart.css";
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { AiTwotoneDelete } from 'react-icons/ai';
function Cart() {
  const [cart, setCart] = useState({});
  const userId = JSON.parse(localStorage.getItem('userData'))._id;

  useEffect(() => {
    getCart(userId);
  }, [userId]);

  const getCart = async (userId) => {
    try {
      const response = await fetch(`http://localhost:7000/api/cart/${userId}`, {

        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }

      });
      const data = await response.json();
      setCart(data);
      // console.log('updatedCart:', data); // Debugging

    } catch (error) {
      console.error(error);
    }
  };


  const updateCartAfterActions = async (flowerId, action) => {
    // console.log('userId:', userId); // Check if userId is defined
    // console.log('flowerId:', flowerId); // Check if flowerId is defined
    // console.log('action:', action);
    const flowerIdString = flowerId._id || flowerId; // Extract flowerId as a string
    console.log('flowerIdString:', flowerIdString);
    try {
      const response = await fetch(
        `http://localhost:7000/api/cart/${action}/${userId}/${flowerIdString}`,
        {
          method: 'PUT', // or 'DELETE' for remove
          headers: {
            'Content-Type': 'application/json',
          },
        }
      );
      const data = await response.json();
      setCart(data);

      // xxxxxxxxxxxxxxxxxxxxxxxxxxx   it work but when click incement the img and name dis apear and need to refersh to apear xxxxxxxxxxx
      //  you should make sure to update the local state 
      //with the updated cart data after each action. 
      //You can do this by calling the getCart function again after a successful 

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

      <table class="table table-striped">

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
                <td >
                  <img style={{ width: "50px", height: "50px" }} src={'http://localhost:7000/images/'+item.flowerId.image} />             </td>
                <td >
                  {item.flowerId.name}
                </td>
                <td >
                  {item.flowerId.price}LE
                </td>
                <td >
                  {item.quantity}</td>
                < td >
                  {item.quantity * item.flowerId.price}</td>
                <td >
                  {/* <button className="btn btn-primary px-2" onClick={() => incrementItemQuantity(item.flowerId)}>+</button>
              <button className="btn btn-danger px-2"  onClick={() => decrementItemQuantity(item.flowerId)}>-</button>
              <button className="btn btn-link text-danger" onClick={() => removeItemFromCart(item.flowerId)}>Remove</button> */}
                  <button
                    className="btn btn-success px-2"
                    onClick={() => updateCartAfterActions(item.flowerId, 'increment-item')}
                  >
                    +
                  </button>
                  <button
                    className="btn btn-info px-2 mx-4"
                    onClick={() => updateCartAfterActions(item.flowerId, 'decrement-item')}
                  >
                    -
                  </button>
                  <button
                    className="btn text-danger  px-2"
                    onClick={() => updateCartAfterActions(item.flowerId, 'remove-item')}
                  >
                    <AiTwotoneDelete style={{ fontSize: "50px" }} />
                  </button>






                </td>
              </tr>

            </tbody>
          ))}
      </table>
      <div className="row d-flex justify-content-center" >
        <p className="text-center">Total Price: {calculateTotalPrice()} LE</p>
        <button className="btn btn-info px-2 " style={{ width: '200px' }}  ><NavLink style={{ color: "white", textDecoration: "none" }} to="/checkout"> Checkout </NavLink></button>
      </div>
    </div>




  );
}

export default Cart;