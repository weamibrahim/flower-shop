// ContactUs.js

import axios from 'axios';
import React, { useState } from 'react';
import './contactus.css';
const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();


    // Your EmailJS service ID and template ID
    const serviceId = 'service_jjzb16e';
    const templateId = 'template_ixpy7y4';

    // Retrieve EmailJS public key from environment variable
    const publicKey = 'V3ZP_dOhBpKMX7G1s';

    // Create an object with EmailJS service ID, template ID, Public Key, and Template params
    const data = {
      service_id: serviceId,
      template_id: templateId,
      user_id: publicKey,
      template_params: {
        from_name: name,
        from_email: email,
        to_name: 'weam ibrahim',
        message: message,
      }
    };

    // Send the email using EmailJS
    try {
      const res = await axios.post("https://api.emailjs.com/api/v1.0/email/send", data);
      console.log(res.data);
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      console.error("Error sending email:", error.response.data);
    }
  }

  return (
    <div className='row container-fluid'>
        <div className='col-md-6'> <img className='img-fluid my-4' src="https://img.freepik.com/free-photo/flowers_23-2148134272.jpg?w=1380&t=st=1703270369~exp=1703270969~hmac=10f7becb23ee2f6b815e51e69313554b6f102d4bd67ae6693fd3914dab62985d"/></div>
        <div className='col-md-6'>
        <h5 className='text-center my-4'>Contact Us</h5>
      <form onSubmit={handleSubmit} className='emailForm my-4'>
      
        <input
          type="text"
          placeholder="Your Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className='form-control '
        />
        <input
          type="email"
          placeholder="Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className='form-control my-3'
        />
        <textarea
            placeholder="send your message here"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className='form-control'
        />
        <div className='d-flex justify-content-center my-3'>
        <button className='btn btn-info' type="submit">Send Email</button>
        </div>
      </form>
      </div>
    </div>
  );
}

export default ContactUs;
