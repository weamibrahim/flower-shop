import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { useState } from "react";
import Home from "./Components/pages/home/home";
import About from "./Components/pages/about/about";
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';
import Tour from './Components/pages/tour/tour';
import Login from './Components/pages/login/login';
import Signup from "./Components/pages/signup/signup";
import TourDetail from "./Components/pages/tourDetails/tourDetails";
import Profile from "./Components/pages/profile/profile"
import Cart from "./Components/pages/cart/cart";
import UpdateProfile from "./Components/pages/updateProfile/update";
import Checkout from "./Components/pages/checkout/checkout";



import DashBoard from "./Components/DashBoard/dashboard";
import Alltour from "./Components/DashBoard/Tours/all/alltour";
import Alluser from "./Components/DashBoard/users/all/alluser";
import Addtour from "./Components/DashBoard/Tours/create/addtour";
import Updatetour from "./Components/DashBoard/Tours/update/updatetour";
import Error from "./Components/pages/error/error";


function App() {
    const loggedIn = localStorage.getItem('accessToken') !== null;
    const userData =  JSON.parse(localStorage.getItem('userData')); 
    const userRole = userData ? userData.role : null;
 
    const isAdmin = userRole === 'admin';
    return (
        <div>
            <BrowserRouter>
            
                <Header/>
            
                <Routes>
                    <Route path="/" element={<Home />} />
               
                    {isAdmin ? (
                       <>
                    <Route path="/dashboard/*" element={<DashBoard />} />
                    <Route path="dashboard/alluser" element={<Alluser />} />
                    <Route path="dashboard/alltour" element={<Alltour />} />

                    <Route path="dashboard/alltour/addtour" element={<Addtour />} />


                    <Route path="dashboard/alltour/updatetour/:id" element={<Updatetour />} />
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
                    <Route path="/tour" element={loggedIn ? <Tour /> : <Navigate to="/login" />} />
                    
                    <Route path="/tour/:id" element={<TourDetail />} />
                    <Route path="/cart"element={loggedIn ? <Cart /> : <Navigate to="/login"/>}/>
                    <Route path="/checkout"element={<Checkout/>}/>
                    <Route path="*" element={<Error />} />
                </Routes>
                <Footer/>
            </BrowserRouter>
        </div>
    );
}

export default App;
