import { NavLink } from "react-router-dom";
import Sidebar from "../DashBoard/sidebar/sidebar";
import "./dashboard.css";
import ChartData  from "./Chart/chart";

function DashBoard() {


  return (
    <div >
      <div className="d-flex justify-content-center">
        <Sidebar />
        
              
        <div className="container-fluid bg"><div >
                {/* <h2>Welcome to DashBoard</h2> */}
                <ChartData />
              </div></div>
       
      </div>
    </div>

  );
}

export default DashBoard;
