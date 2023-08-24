import '../../App.css';
function footer() {
    return( 
       
       <div>
            <div className="container-fluid bg-dark text-light footer pt-5  wow " data-wow-delay="0.1s">
                <div className="container py-5">
                    <div className="row g-5">
                        <div className="col-lg-4 col-md-6">
                            <h4 className="section-title ff-secondary text-start fw-normal mb-4" style={{color:"#ff58b9"}}>Company</h4>
                            <a className="btn btn-link">About Us</a>
                            <a className="btn btn-link" >Contact Us</a>

                            <a className="btn btn-link" >Privacy Policy</a>
                            <a className="btn btn-link" >Terms & Condition</a>
                        </div>
                        <div className="col-lg-4 col-md-6">
                            <h4 className="section-title ff-secondary text-start  fw-normal mb-4"  style={{color:"#ff58b9"}}>Contact</h4>
                            <p className="mb-2"><i className="fa fa-map-marker-alt mx-2"></i>Our Locatio 1 Mahmoud Salamah  Al Attarin, Alexandria</p>
                            <p className="mb-2"><i className="fa fa-phone-alt  mx-2"></i>+012 345 67890</p>
                            <p className="mb-2"><i className="fa fa-envelope  mx-2"></i>info@example.com</p>
                            <div className="d-flex pt-2">
                                <a className="btn btn-outline-light btn-social" ><i className="fab fa-twitter"></i></a>
                                <a className="btn btn-outline-light btn-social" ><i className="fab fa-facebook-f"></i></a>
                                <a className="btn btn-outline-light btn-social"><i className="fab fa-youtube"></i></a>
                                <a className="btn btn-outline-light btn-social" ><i className="fab fa-linkedin-in"></i></a>
                            </div>
                        </div>

                        <div className="col-lg-4 col-md-6">
                            <h4 className="section-title ff-secondary text-start  fw-normal mb-4"  style={{color:"#ff58b9"}}>Newsletter</h4>
                            <p>Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                            <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>

                                <button type="button" className="btn py-2 position-absolute my-3"  style={{backgroundColor:"#ff58b9"}}>SignUp</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="copyright">
                        <div className="row">
                            <div className="col-md-6 text-center text-md-start mb-3 mb-md-0">
                             
                            </div>
                            <div className="col-md-6 text-center text-md-end">
                                <div className="footer-menu">
                                 
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}
export default footer