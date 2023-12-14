import "./signup.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
function Signup() {
  const [email, setEmail] = useState('');
  const [user_name, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [gender, setGender] = useState('');
  const [role, setRole] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSignup = async (e) => {
    // Basic email validation
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email.');
      return;
    }

    // Basic password validation
    if (!password || password.length < 6) {
      setErrorMessage('Password must be at least 6 characters long.');
      return;
    }

    try {
      const response = await fetch('https://flowershop-bw6z.onrender.com/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ user_name, email, password, gender, role, mobile, address }),

      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('userData', JSON.stringify(data.user));
        //localStorage.setItem('accessToken', data.accessToken);
        
        // Registration successful

        // Redirect to the login page or another page
        window.location.href = '/login';
      } else {
        // Registration failed
        const message = data.message;
        alert(`Registration failed: ${message}`);
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
          <div className="inputBox1">
            <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <span className="user">Email</span>
          </div>

          <div className="inputBox">
            <input type="text" value={user_name} onChange={(e) => setUsername(e.target.value)} required />
            <span>Username</span>
          </div>

          <div className="inputBox">
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <span>Password</span>
          </div>
          <div className="inputBox">
            <select value={gender} onChange={(e) => setGender(e.target.value)} required>
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
         
            </select>
          </div>

          <div className="inputBox">
            <select value={role} onChange={(e) => setRole(e.target.value)} required>
              <option value="">Select Role</option>
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div className="inputBox">
            <input type="text" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
            <span>mobile</span>
          </div>
          <div className="inputBox">
            <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} required />
            <span>address</span>
          </div>

          <button className="enter" onClick={handleSignup}>Enter</button>
          <p>if you have an account please <NavLink to="/login" className="text-decoration-none">login</NavLink></p>

          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default Signup;
