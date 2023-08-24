import { NavLink } from "react-router-dom";
import "./login.css"
import { useState } from "react";
function Login() {
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleSignup = async () => {



    try {
      const response = await fetch('http://localhost:7000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        // Login successful

        // Store user data and token in local storage
        localStorage.setItem('userData', JSON.stringify(data.user));
        localStorage.setItem('accessToken', data.accessToken);
        console.log(data);
        const userRole = data.user.role


        // window.location.href="./home"
        if (userRole === 'admin') {
          // Redirect admin to the dashboard
          window.location.href = '/dashboard';
        } else if (userRole === 'user') {
          // Redirect user to the home page
          window.location.href = '/home';
        }
      } else {
        // Login failed
        const message = data.message;
        setErrorMessage(`Login failed: ${message}`);
      }
    } catch (error) {
      console.error('Error:', error);
    }
    // Implement your signup logic here

  };
  return (


    <div className="container d-flex justify-content-center"><div className="my-5">
      <div className="cards">
        <a className="login">login</a>
        <div className="inputBox1">
          <input type="text" required="required " value={email} onChange={(e) => setEmail(e.target.value)} />
          <span className="user">Email</span>
        </div>



        <div className="inputBox">
          <input type="password" required="required" value={password} onChange={(e) => setPassword(e.target.value)} />
          <span>Password</span>
        </div>

        <button className="enter" onClick={handleSignup}>Enter</button>
        <p>If you dont have an account please <NavLink className="text-decoration-none" to="/signup">signup</NavLink></p>

        {errorMessage && <p className="error">{errorMessage}</p>}
      </div>
    </div></div>)
}
export default Login