import { NavLink, useNavigate } from "react-router-dom";
import "./login.css"
import { useState } from "react";
function Login() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('');

  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const handleSignup = async () => {



    try {
      const response = await fetch('https://flowershop-bw6z.onrender.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data)
      if (response.ok) {
   
        localStorage.setItem('userData', JSON.stringify(data.user));
        localStorage.setItem('accessToken', data.accessToken);
        console.log(data);
        const userRole = data.user.role


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


    <div className="container d-flex justify-content-center" ><div className="my-5">
      <div className="cardslog">
        <a className="login">login</a>
        <div className="inputBox1 ">
          <input type="text" required="required " value={email} onChange={(e) => setEmail(e.target.value)} />
          <span className="user">Email</span>
        </div>



        <div className="inputBox ">
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