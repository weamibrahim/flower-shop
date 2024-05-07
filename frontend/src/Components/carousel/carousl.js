import './carousl.css';
function Carousel() {
    return (
      
     
        <div id="carouselExampleAutoplaying" className="carousel slide " data-bs-ride="carousel">
        <div className="carousel-inner ">
          <div className="carousel-item active">
            <div className="carousel-overlay">
              <h2>Welcome to  Website</h2>
            </div>
            <img
              src="https://img.freepik.com/free-photo/beautiful-tulips-white-pink-white-wooden-background_24972-218.jpg?size=626&ext=jpg&ga=GA1.2.1532466403.1676939380&semt=sph"
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "500px" }}
            />
          </div>
          <div className="carousel-item">
            <div className="carousel-overlay">
              <h2>Welcome to  Website</h2>
            </div>
            <img
              src="https://img.freepik.com/free-photo/lovely-bouquet-pink-white-tulips-white-wooden-background_24972-225.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph"
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "700px" }}
            />
          </div>
          <div className="carousel-item">
            <div className="carousel-overlay">
              <h2>Welcome to  Website</h2>
            </div>
            <img
              src="https://img.freepik.com/free-photo/blue-pink-flowers-with-vintage-wooden-background_24837-132.jpg?size=626&ext=jpg&ga=GA1.1.1532466403.1676939380&semt=sph"
              className="d-block w-100"
              alt="..."
              style={{ maxHeight: "700px" }}
            />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
     
    )

}
export default Carousel