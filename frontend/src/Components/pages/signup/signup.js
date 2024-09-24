import "./signup.css";
import { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate();
  const[users,setUsers] = useState({
    email:'',
    user_name:'',
    password:'',
    gender:'',
    // role:'',
    mobile:'',
    address:''
  });

  
  const [errorMessage, setErrorMessage] = useState({
    email: '',
    user_name: '',
    password: '',
    gender: '',
    // role: '',
    mobile: '',
    address: '',
  });

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setUsers({ ...users, [name]: value });
    setErrorMessage({ ...errorMessage, [name]: '' });
  };
  const handleSignup = async (e) => {
    e.preventDefault();
    const { email, user_name, password, gender, mobile, address } = users;
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage({ ...errorMessage, email: 'Please enter a valid email address.' });
      return;
    }

    // Basic name validation
    if (!user_name) {
      setErrorMessage({ ...errorMessage, user_name: 'Please enter your name.' });
      return;
    }

    // Basic password validation
    if (!password || password.length < 8) {
      setErrorMessage({ ...errorMessage, password: 'Password must be at least 8 characters long.' });
      return;
    }

    // Basic mobile number validation
    const mobileRegex = /^\d{11}$/;
    if (!mobileRegex.test(mobile)) {
      setErrorMessage({ ...errorMessage, mobile: 'Please enter a valid 11-digit mobile number.' });
      return;
    }

    try {
      const response = await fetch('https://flowershop-bw6z.onrender.com/api/users/register',
       { method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        // body: JSON.stringify({ user_name, email, password, gender, role, mobile, address }),
        body: JSON.stringify({ user_name, email, password, gender, mobile, address }),

      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('userData', JSON.stringify(data.user));
        //localStorage.setItem('accessToken', data.accessToken);
        
      
      navigate('/login');
      } else {
      
        const message = data.message;
        if (message.includes('already exists')) {
          // Handle case where user with the provided email already exists
          setErrorMessage({ ...errorMessage, email: 'User with this email already exists.' });
        } else {
          setErrorMessage({ ...errorMessage, message });
        }
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
   
      <div className="container d-flex justify-content-center">
        <div className="my-5">
          <div className="cards">
            <a className="singup">Sign Up</a>
            <div className="input">
              <input type="email" name="email" value={users.email} onChange={handleInputChange} required />
              <span className="user">Email</span>
            </div>
            {errorMessage.email && <p className="error">{errorMessage.email}</p>}
            <div className="input">
              <input type="text" name="user_name" value={users.user_name} onChange={handleInputChange} required />
              <span>name</span>
            </div>
            {errorMessage.user_name && <p className="error">{errorMessage.user_name}</p>}
        
            <div className="input">
              <input type="password" name="password" value={users.password} onChange={handleInputChange} required />
              <span style={{fontSize:"12px"}} >Password</span>
            </div>
            {errorMessage.password && <p className="error">{errorMessage.password}</p>}
            <div className="inputBox w-100">
              <select name="gender" value={users.gender} onChange={handleInputChange} required>
                <option value="">Select Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </div>
           
            <div className="input">
              <input type="text" name="mobile" value={users.mobile} onChange={handleInputChange} required />
              <span>Mobile</span>
            </div>
            {errorMessage.mobile && <p className="error">{errorMessage.mobile}</p>}
            <div className="input">
              <input type="text" name="address" value={users.address} onChange={handleInputChange} required />
              <span style={{fontSize:"15px"}} >Address</span>
            </div>
           
            <button className="enter" onClick={handleSignup}>Enter</button>
            <p className="text-center">If you have an account, please <NavLink to="/login" className="text-decoration-none">login</NavLink></p>
  
            
          </div>
        </div>
      </div>
    );}

export default Signup;
