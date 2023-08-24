
import "./about.css"
function about() {
    return (
        <div style={{ backgroundColor: "#f3f3f3" }}>


            <div className="container-fluid py-5" >
                <div className="container pt-5" >
                    <div className="row " >
                        <div className="col-md-6 " style={{ minHeight: "500px" }} >
                            <div className="h-100 " >
                                <img className=" w-100 h-100" src="https://img.freepik.com/free-photo/vertical-closeup-shot-beautiful-pink-tulips-white-background_181624-33261.jpg?size=626&ext=jpg&ga=GA1.2.1532466403.1676939380&semt=sph" style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                        <div className="col-md-6 pt-5 pb-lg-5">
                            <div className="text bg-white p-4 p-lg-5 my-lg-5" >
                                <h6 className="text-warning text-uppercase" style={{ letterSpacing: "5px" }}>About Us</h6>
                                <h1 className="mb-3">We Provide Best flower  In Your Budget</h1>
                                <p>Dolores lorem lorem ipsum sit et ipsum. Sadip sea amet diam dolore sed et. Sit rebum labore sit sit ut vero no sit. Et elitr stet dolor sed sit et sed ipsum et kasd ut. Erat duo eos et erat sed diam duo</p>
                                <div className="row mb-4">
                                    <div className="col-6">
                                        <img className="img-fluid  " src="https://img.freepik.com/free-photo/spring-composition-with-bouquet-flowers-blurred-background-copy-space_169016-28703.jpg?size=626&ext=jpg&ga=GA1.2.1532466403.1676939380&semt=sph" />
                                    </div>
                                    <div className="col-6">
                                        <img className="img-fluid " src="https://img.freepik.com/free-photo/pink-flowers-with-defocused-background_1259-30.jpg?size=626&ext=jpg&ga=GA1.2.1532466403.1676939380&semt=sph" />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container-fluid pb-5">
                <div className="container pb-5">
                    <div className="row">
                        <div className="col-md-4">
                            <div className="d-flex mb-4 mb-lg-0">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center mr-3" style={{ height: "100px", width: "100px", backgroundColor: "#ff58b9" }}>
                                    <i className="fa fa-2x fa-money-check-alt text-white"></i>
                                </div>
                                <div className="d-flex flex-column mx-3">
                                    <h5 className="">Competitive Pricing</h5>
                                    <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex mb-4 mb-lg-0">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center  mr-3" style={{ height: "100px", width: "100px", backgroundColor: "#ff58b9" }}>
                                    <i className="fa fa-2x fa-award text-white"></i>
                                </div>
                                <div className="d-flex flex-column mx-3">
                                    <h5 className="">Best Services</h5>
                                    <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex mb-4 mb-lg-0">
                                <div className="d-flex flex-shrink-0 align-items-center justify-content-center mr-3" style={{ height: "100px", width: "100px", backgroundColor: "#ff58b9" }}

                                >
                                    <i className="fa fa-2x fa-globe text-white"></i>
                                </div>
                                <div className="d-flex flex-column mx-3">
                                    <h5 className="">Worldwide Coverage</h5>
                                    <p className="m-0">Magna sit magna dolor duo dolor labore rebum amet elitr est diam sea</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="container-fluid bg-registration py-5" style={{margin: "90px 0"}}>
        <div className="container py-5">
            <div className="row align-items-center">
                <div className="col-lg-7 mb-5 mb-lg-0">
                    <div className="mb-4">
                        <h6 className="text-warning text-uppercase" style={{letterSpacing:"5px"}}>Mega Offer</h6>
                        <h1 className="text-white"><span className="text-warning">30% OFF</span> For Honeymoon</h1>
                    </div>
                    <p className="text-white">Invidunt lorem justo sanctus clita. Erat lorem labore ea, justo dolor lorem ipsum ut sed eos,
                        ipsum et dolor kasd sit ea justo. Erat justo sed sed diam. Ea et erat ut sed diam sea ipsum est
                        dolor</p>
                    <ul className="list-inline text-white m-0">
                        <li className="py-2"><i className="fa fa-check text-warning mr-3"></i>Labore eos amet dolor amet diam</li>
                        <li className="py-2"><i className="fa fa-check text-warning mr-3"></i>Etsea et sit dolor amet ipsum</li>
                        <li className="py-2"><i className="fa fa-check text-warning mr-3"></i>Diam dolor diam elitripsum vero.</li>
                    </ul>
                </div>
                <div className="col-lg-5">
                    <div className="card border-0">
                        <div className="card-header bg-warning text-center p-4">
                            <h1 className="text-white m-0">Sign Up Now</h1>
                        </div>
                        <div className="card-body rounded-bottom bg-white p-5">
                            <form>
                                <div className="form-group my-2">
                                    <input type="text" className="form-control p-4" placeholder="Your name" required="required" />
                                </div>
                                <div className="form-group my-2">
                                    <input type="email" className="form-control p-4" placeholder="Your email" required="required" />
                                </div>
                                <div className="form-group my-2">
                                    <select className="custom-select px-4" style={{height: "47px"}}>
                                        <option selected>Select a destination</option>
                                        <option value="1">destination 1</option>
                                        <option value="2">destination 1</option>
                                        <option value="3">destination 1</option>
                                    </select>
                                </div>
                                <div>
                                    <button className="btn btn-warning btn-block py-3" type="submit">Sign Up Now</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div> */}

            <div className="container-fluid py-5">
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        <h6 className=" text-uppercase" style={{ letterSpacing: "5px", color: "#ff58b9" }}>our team</h6>
                        <h1>Our Expert Team</h1>
                    </div>
                    <div className="row">
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                            <div className="team-item bg-white mb-4">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="https://img.freepik.com/free-photo/portrait-attractive-woman-has-healthy-skin-has-toothy-smile-looks-directly-wears-green-jumper-has-long-straight-hair-poses-against-pink-pastel-wall-face-expressions-concept_273609-42674.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt="" />
                                    <div className="team-social">
                                        <a className="btn  btn-square" style={{ backgroundColor: "#ff58b9" }} href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn  btn-square" style={{ backgroundColor: "#ff58b9" }} href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn  btn-square" style={{ backgroundColor: "#ff58b9" }} href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn  btn-square" style={{ backgroundColor: "#ff58b9" }} href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="text-truncate">Person</h5>
                                    <p className="m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                            <div className="team-item bg-white mb-4">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="https://img.freepik.com/free-photo/portrait-attractive-woman-has-healthy-skin-has-toothy-smile-looks-directly-wears-green-jumper-has-long-straight-hair-poses-against-pink-pastel-wall-face-expressions-concept_273609-42674.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt="" />
                                    <div className="team-social">
                                        <a className="btn  btn-square" style={{ backgroundColor: "#ff58b9" }} href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn  btn-square" style={{ backgroundColor: "#ff58b9" }} href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn  btn-square" style={{ backgroundColor: "#ff58b9" }} href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn  btn-square" style={{ backgroundColor: "#ff58b9" }} href=""><i className="fab fa-linkedin-in"></i></a>

                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="text-truncate">Person</h5>
                                    <p className="m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                            <div className="team-item bg-white mb-4">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="https://img.freepik.com/free-photo/portrait-attractive-woman-has-healthy-skin-has-toothy-smile-looks-directly-wears-green-jumper-has-long-straight-hair-poses-against-pink-pastel-wall-face-expressions-concept_273609-42674.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt="" />
                                    <div className="team-social">
                                        <a className="btn  btn-square" style={{ backgroundColor: "#ff58b9" }} href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn  btn-square" style={{ backgroundColor: "#ff58b9" }} href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn  btn-square" style={{ backgroundColor: "#ff58b9" }} href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn  btn-square" style={{ backgroundColor: "#ff58b9" }} href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="text-truncate">Person</h5>
                                    <p className="m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 pb-1">
                            <div className="team-item bg-white mb-4">
                                <div className="team-img position-relative overflow-hidden">
                                    <img className="img-fluid w-100" src="https://img.freepik.com/free-photo/portrait-attractive-woman-has-healthy-skin-has-toothy-smile-looks-directly-wears-green-jumper-has-long-straight-hair-poses-against-pink-pastel-wall-face-expressions-concept_273609-42674.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph" alt="" />
                                    <div className="team-social">
                                        <a className="btn  btn-square" style={{ backgroundColor: "#ff58b9" }} href=""><i className="fab fa-twitter"></i></a>
                                        <a className="btn  btn-square" style={{ backgroundColor: "#ff58b9" }} href=""><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn  btn-square" style={{ backgroundColor: "#ff58b9" }} href=""><i className="fab fa-instagram"></i></a>
                                        <a className="btn  btn-square" style={{ backgroundColor: "#ff58b9" }} href=""><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                                <div className="text-center py-4">
                                    <h5 className="text-truncate">Person</h5>
                                    <p className="m-0">Designation</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>



        </div>

    );
}
export default about