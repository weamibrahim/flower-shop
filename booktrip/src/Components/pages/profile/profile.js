import { NavLink } from "react-router-dom";
import "./profile.css";
function Profile() {
    const userData = JSON.parse(localStorage.getItem('userData'));

    return (


        <div className="pt-4 area" style={{ textAlign: "center", height: "1000px " }}>
            <div className="container top-section" style={{ margin: " 0 auto", maxWidth: " 600px" }}
            >

                <div className="pic" >

                    <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8fHww&w=1000&q=80" height="200" width="200" />

                </div>

            </div>

            <div style={{ textAlign: "center" }}>
                <div className="container" style={{ margin: " 0 auto", maxWidth: " 800px" }}>
                    <div className="main-body justify-content-center align-items-center">
                        <div className="row ">

                            <div className="pb-5 col-lg-12 align-items-center justify-content-center">
                                <div className="card border-0 shadow p-0 mb-5 bg-body-tertiary rounded">
                                    <div className="card-body m-2 " >
                                        <div className="row mb-3">
                                            <div className="col-sm-2">
                                                Name
                                            </div>
                                            <div className="col-sm-10 text-secondary">
                                                <span className="pt-2 form-control" style={{ border: "2px solid red   !important" }}>{userData.user_name}</span>
                                            </div>

                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-2">
                                                Gender
                                            </div>
                                            <div className="col-sm-10 text-secondary">
                                                <span className="pt-2 form-control" style={{ border: "2px solid red   !important" }}>{userData.gender}</span>
                                            </div>

                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-2">
                                                Email
                                            </div>
                                            <div className="col-sm-10 text-secondary">
                                                <span className="pt-2 form-control" style={{ border: "2px solid red   !important" }}>{userData.email}</span>
                                            </div>
                                        </div>
                                        <div className="row mb-3">
                                            <div className="col-sm-2">
                                                Phone
                                            </div>
                                            <div className="col-sm-10 text-secondary">
                                                <span className="pt-2 form-control" style={{ border: "2px solid red   !important" }}> {userData.mobile} </span>
                                            </div>
                                        </div>

                                        <div className="row mb-3">
                                            <div className="col-sm-2">
                                                Address
                                            </div>
                                            <div className="col-sm-10 text-secondary ">
                                                <span className="pt-2 form-control" style={{ border: "2px solid red   !important" }}>{userData.address}  </span>
                                            </div>
                                        </div>



                                        <div className=" d-flex justify-content-center ">
                                            <button className="btn btn-info" ><NavLink style={{ color: "white", textDecoration: "none" }} to={'/update'}> update</NavLink>

                                            </button>
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default Profile;