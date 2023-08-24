import React, { useState } from 'react';
import "./checkout.css";
function PaymentForm() {
  const [formData, setFormData] = useState({
    cardNumber: '',
    expMonth: '',
    expYear: '',
    cvv: '',
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      const response = await fetch('http://localhost:7000/api/charge/payment', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

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
