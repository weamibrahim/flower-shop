import { NavLink } from "react-router-dom";
import Sidebar from "../DashBoard/sidebar/sidebar";
import "./dashboard.css"
function DashBoard() {


  return (
    <div >
      <div className="d-flex justify-content-center">
        <Sidebar />
        
              
        <div className="container-fluid bg"><div className="overlay">
                <h2>Welcome to DashBoard</h2>
              </div></div>
       
      </div>
    </div>

  );
}

export default DashBoard;
