import "./App.css";
import { BrowserRouter, Route, Routes, Navigate, NavLink } from "react-router-dom";
import { useState ,useEffect} from "react";
import Home from "./Components/pages/home/home";
import About from "./Components/pages/about/about";
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Flowers from './Components/pages/flowers/flowers';
import Login from './Components/pages/login/login';
import Signup from "./Components/pages/signup/signup";
import FlowerDetail from "./Components/pages/flowerDetails/flowerDetails";
import Profile from "./Components/pages/profile/profile"
import Cart from "./Components/pages/cart/cart";
import UpdateProfile from "./Components/pages/updateProfile/update";


import ContactUs from "./Components/pages/contactUs/contactus";

import DashBoard from "./Components/DashBoard/dashboard";
import AllFlower from "./Components/DashBoard/Flowers/all/allFlower";
import Alluser from "./Components/DashBoard/users/all/alluser";
import AddFlower from "./Components/DashBoard/Flowers/create/addFlower";
import UpdateFlower from "./Components/DashBoard/Flowers/update/updateFlower";
import Loading from "./Components/Loading/loading";
import Error from "./Components/pages/error/error";


function App() {
    const loggedIn = localStorage.getItem('accessToken') !== null;
    const userData =  JSON.parse(localStorage.getItem('userData')); 
    const userRole = userData ? userData.role : null;
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
      setTimeout(() => {
        setIsLoading(false);
      }, 1500); // Adjust time as needed
    }, []);
    const isAdmin = userRole === 'admin';
    return (
        <div>
            {isLoading ? (
      <Loading />
    ) : (
            <BrowserRouter>
            
                <Header/>
            
                <Routes>
                    <Route path="/" element={<Home />} />
               
                    {isAdmin ? (
                       <>
                    <Route path="/dashboard/*" element={<DashBoard />} />
                    <Route path="dashboard/alluser" element={<Alluser />} />
                    <Route path="dashboard/allflower" element={<AllFlower />} />

                    <Route path="dashboard/allflower/addflower" element={<AddFlower />} />


                    <Route path="dashboard/allflower/updateflower/:id" element={<UpdateFlower />} />
</>

                    ) : (
                        <Route path="/dashboard/*" element={<Navigate to="/dashboard/not-authorized" />} />
                        )}


                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About />} />
                  
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/profile" element={loggedIn ? <Profile /> : <Navigate to="/login" />} />
                    <Route path="/update" element={loggedIn ? <UpdateProfile /> : <Navigate to="/login" />} />
                    {/* Use a function to conditionally navigate */}
                    <Route path="/flowers" element={<Flowers />} />
                    
                    <Route path="/flower/:id" element={loggedIn ?<FlowerDetail />: <Navigate to="/login"/>} />
                    <Route path="/cart"element={loggedIn ? <Cart /> : <Navigate to="/login"/>}/>
                    
                    <Route path="/contactus" element={<ContactUs />} />
                    <Route path="*" element={<Error />} />
                </Routes>
                <NavLink    className="whatsapp_float" to="https://wa.me/+201008864924"><i className="fa-brands fa-whatsapp  fs-4 my-2"></i></NavLink>

                <Footer/>
            </BrowserRouter>
    )}
        </div>
    );
}

export default App;
