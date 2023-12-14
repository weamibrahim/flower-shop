import React from 'react';
import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./flowers.css"
import { BsSearch } from "react-icons/bs"
class Flowers extends Component {
  constructor() {
    super();
    this.state = {
      flowers: [],
      searchQuery: ''
    }
  }
  componentDidMount() {
    fetch("https://flowershop-bw6z.onrender.com/api/Flower/Flowers")
      .then((response) => { 
       // console.log("before .json",response)
        return response.json(); })
      .then((data) => {
       // console.log("after response",data);
        this.setState({ flowers: data })

      })
      

  }
  handleSearchInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };
  render() {
    return (

      <div>

        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
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
        <div></div>










        <div className="row row-cols-1  g-0 my-5"  >
          <div style={{ display: "flex", justifyContent: "center" }}>
            <BsSearch className='icons mx-2 ' />
            <input style={{maxWidth: "400px", height: "50px", border: "4px solid #ff58b9", borderRadius: "10px" }}
              type="text"
              placeholder="Search by name or price"
              value={this.state.searchQuery}
              onChange={this.handleSearchInputChange}
            />
          </div>
          {this.state.flowers.filter(
            (flower) =>
              flower.name.toLowerCase().includes(this.state.searchQuery.toLowerCase()) ||
              flower.price.toString().includes(this.state.searchQuery)
          )
            .map((flower) => (



              <div className="col-md-4  d-flex justify-content-around" key={flower.id}  >
                <div className="card m-4  " style={{ maxWidth: "300px" }}  >
                  <img src={'https://flowershop-bw6z.onrender.com/images/' + flower.image} style={{ maxHeight: "150px", maxWidth: "300px" }} className="card-img-top " alt="..." />
                  <div className="card-body">
                    <h5 className="text-center card-title">{flower.name}</h5>
                    <h6 className="text-center card-title">{flower.price}$</h6>
                    <div className='d-flex justify-content-center'>



                      <button className='btn btn-info'><NavLink style={{ color: "white", textDecoration: "none" }} to={`/flower/${flower._id}`}>read more</NavLink>
                      </button>
                    </div>
                  </div>

                </div>
              </div>


            ))}

        </div>







      </div>



    );
  }



}

export default Flowers;
