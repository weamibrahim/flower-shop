import React, { useState } from 'react';
import "./checkout.css";
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
function PaymentForm() {



  const [cart, setCart] = useState({});
  const userId = JSON.parse(localStorage.getItem('userData'))._id;

  useEffect(() => {
    getCart(userId);
  }, [userId]);

  const getCart = async (userId) => {
    try {
      const response = await fetch(`https://flowershop-bw6z.onrender.com/api/cart/${userId}`, {

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

  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const totalPrice = queryParams.get('totalPrice');

  const [formData, setFormData] = useState({
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: '',
    amount: calculateTotalPrice(),
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);
    const totalPrice = calculateTotalPrice(); // Calculate total price here
    const formDataWithAmount = { ...formData, amount: totalPrice }; // Set amount dynamically
    try {
      const response = await fetch('https://flowershop-bw6z.onrender.com/api/charge/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataWithAmount),
      });
       console.log(formDataWithAmount);
      if (response.ok) {
        const data = await response.json();
        alert("Your order is about to be delivered")
        console.log(data.message);
        window.location.href = "home";// "Your order is about to be delivered"
      } else {
        console.error('Failed to process payment');
        // Handle error message or show a notification to the user
      }
    } catch (error) {
      console.error(error);
      // Handle error message or show a notification to the user
    }

    setIsLoading(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className='ground'>
       
      <div className='d-flex justify-content-center my-2 '>
        <form onSubmit={handleSubmit} style={{ boxShadow: " 5px 5px 5px 5px #c8c8c8", padding: "10px", width: "500px" }}>
          <h4 className='text-center'>Payment</h4>
          {/* Form fields */}
          <label>Card Number</label>
          <input className='form-control  mb-3'
            type="text"
            name="cardNumber"
            placeholder="Card Number"
            onChange={handleChange}
          />
          <label >Exp Month</label>
          <input className='form-control mb-3'
            type="text"
            name="expMonth"
            placeholder="Exp Month"
            onChange={handleChange}
          />
          <label > Exp Year </label>
          <input className='form-control mb-3'
            type="text"
            name="expYear"
            placeholder="Exp Year"
            onChange={handleChange}
          />
          <label >CVV</label>
          <input className='form-control mb-3 '
            type="text"
            name="cvv"
            placeholder="CVV"
            onChange={handleChange}
          />
          {/* Other form fields */}
          <div className='d-flex justify-content-center' >
            <button type="submit" className="btn btn-info mb-3 " disabled={isLoading}>
              {isLoading ? 'Processing...' : 'Pay'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PaymentForm;
