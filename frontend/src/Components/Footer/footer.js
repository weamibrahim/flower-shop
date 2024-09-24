import './footer.css';
import { NavLink } from 'react-router-dom';
function Footer() {
    return (
        <div>
        <div className="container-fluid bg-dark text-light footer pt-5 wow" data-wow-delay="0.1s">
          <div className="container py-5">
            <div className="row g-5 text-center text-md-start">
              <div className="col-lg-4 col-md-6">
                <h4 className="section-title ff-secondary text-center text-md-start fw-normal mb-4">Company</h4>
                <div className="row justify-content-center justify-content-md-start">
                  <NavLink to="#" className="text-decoration-none text-white d-block mb-2">ABOUT US</NavLink>
                  <NavLink to="#" className="text-decoration-none text-white d-block mb-2">CONTACT US</NavLink>
                  <NavLink to="#" className="text-decoration-none text-white d-block mb-2">PRIVACY POLICY</NavLink>
                  <NavLink to="#" className="text-decoration-none text-white d-block mb-2">TERMS & CONDITIONS</NavLink>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <h4 className="section-title ff-secondary text-center text-md-start fw-normal mb-4">Contact</h4>
                <p className="mb-2"><i className="fa fa-map-marker-alt mx-2"></i>Our Location: 1 Mahmoud Salamah Al Attarin, Alexandria</p>
                <p className="mb-2"><i className="fa fa-phone-alt mx-2"></i>+012 345 67890</p>
                <p className="mb-2"><i className="fa fa-envelope mx-2"></i>info@example.com</p>
                <div className="d-flex justify-content-center justify-content-md-start pt-2">
                  <a className="btn btn-outline-light btn-social mx-2" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-outline-light btn-social mx-2" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-outline-light btn-social mx-2" href="#"><i className="fab fa-youtube"></i></a>
                  <a class="btn btn-outline-light btn-social mx-2" href="#"><i class="fab fa-linkedin-in"></i></a>
                </div>
              </div>
              <div className="col-lg-4 col-md-6">
                <h4 className="section-title ff-secondary text-center text-md-start fw-normal mb-4">Newsletter</h4>
                <p className="text-center text-md-start">Dolor amet sit justo amet elitr clita ipsum elitr est.</p>
                <div className=" mx-auto mx-md-0 ">
                  <button type="button" className="btn btn-primary py-2 my-3">Sign Up</button>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    );
}

export default Footer;
