import "./home.css";

function Home() {
    return (
        <div>
            <section className="banner">
                <div className="banner-text-item">
                    <div className="banner-heading">
                        <h1>Find your favourite flower</h1>
                    </div>
                    {/* <form className="form">
            <input type="text" placeholder="Where would you like to go?" />
            <datalist id="mylist">
              <option>London</option>
              <option>Canada</option>
              <option>Monaco</option>
              <option>France</option>
              <option>Japan</option>
              <option>Switzerland</option>
              <option>Seoul</option>
            </datalist>
          </form> */}
                </div>
            </section>





            <div className="container-fluid py-5" >
                <div className="container pt-5 pb-3">
                    <div className="text-center mb-3 pb-3">
                        {/* <h6 className="text-primary text-uppercase" style={{letterSpacing: "5px"}}></h6> */}
                        <h3>MY favourite flower </h3>
                    </div>
                    <div className="row">
                        <div className="col-lg-4 col-md-6 mb-4" >
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="https://img.freepik.com/free-photo/beautiful-background-roses-valentine-s-day_24972-167.jpg?size=626&ext=jpg&ga=GA1.2.1532466403.1676939380&semt=sph" alt="" />
                                <a className="destination-overlay text-white text-decoration-none" href="">
                                    <h5 className="text-white">my flower</h5>

                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4" >
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="https://img.freepik.com/free-photo/copy-space-roses-flowers_23-2148860032.jpg?size=626&ext=jpg&ga=GA1.2.1532466403.1676939380&semt=sph" alt="" />
                                <a className="destination-overlay text-white text-decoration-none" href="">
                                    <h5 className="text-white">my flower</h5>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4" >
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="https://img.freepik.com/free-photo/tulips-bouquet-pink-background-with-copyspace_24972-271.jpg?size=626&ext=jpg&ga=GA1.2.1532466403.1676939380&semt=sph" alt="" />
                                <a className="destination-overlay text-white text-decoration-none" href="">
                                    <h5 className="text-white">my flower</h5>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4" >
                            <div className="destination-item position-relative overflow-hidden mb-2" >
                                <img className="img-fluid " src="https://img.freepik.com/free-photo/bunch-flowers-coniferous-twigs_23-2148071783.jpg?size=626&ext=jpg&ga=GA1.2.1532466403.1676939380&semt=sph" alt="" />
                                <a className="destination-overlay text-white text-decoration-none" href="">
                                    <h5 className="text-white">my flower</h5>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4" >
                            <div className="destination-item position-relative overflow-hidden mb-2" >
                                <img className="img-fluid" src="https://img.freepik.com/free-photo/beautiful-little-pink-flowers-branches_24837-280.jpg?size=626&ext=jpg&ga=GA1.2.1532466403.1676939380&semt=sph" alt="" />
                                <a className="destination-overlay text-white text-decoration-none" href="">
                                    <h5 className="text-white">my flower</h5>
                                </a>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 mb-4">
                            <div className="destination-item position-relative overflow-hidden mb-2">
                                <img className="img-fluid" src="https://img.freepik.com/free-photo/flat-lay-valentine-s-day-with-copy-space_23-2148741356.jpg?size=626&ext=jpg&ga=GA1.2.1532466403.1676939380&semt=sph" alt="" />
                                <a className="destination-overlay text-white text-decoration-none" href="">
                                    <h5 className="text-white">my flower</h5>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>







        </div>


    );
}

export default Home;
