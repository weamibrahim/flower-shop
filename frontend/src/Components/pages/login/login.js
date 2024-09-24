import { NavLink, useNavigate } from "react-router-dom";
import "./login.css"
import { useState } from "react";

function Login({ setLoggedIn }) {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = async () => {
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setErrorMessage('Please enter a valid email address.');
      return;
    }

    // Basic password validation
    if (!password || password.length < 8) {
      setErrorMessage('Password must be at least 8 characters long.');
      return;
    }

    try {
      const response = await fetch('https://flowershop-bw6z.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('userData', JSON.stringify(data.user));
        localStorage.setItem('accessToken', data.accessToken);

        setLoggedIn(true);
        const userRole = data.user.role;

        if (userRole === 'admin') {
          navigate('/dashboard');
        } else if (userRole === 'user') {
          navigate('/home');
        }
      } else {
        const message = data.message;
        setErrorMessage(`Login failed: ${message}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="my-5">
        <div className="cardslog">
          <a className="login">Login</a>
          <div className="inputBox">
            <input type="text" required value={email} onChange={(e) => setEmail(e.target.value)} />
            <span className="user">Email</span>
          </div>

          <div className="inputBox">
            <input type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
            <span style={{fontSize:"12px"}}>Password</span>
          </div>

          <button className="enter" onClick={handleLogin}>Enter</button>
          <p className="text-center"> If you don't have an account, please <NavLink className="text-decoration-none" to="/signup">signup</NavLink></p>

          {errorMessage && <p className="error">{errorMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;
