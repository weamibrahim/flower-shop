import React from "react";
import { Component } from "react";
import { NavLink } from "react-router-dom";
import "./flowers.css";
import { BsSearch } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import Carousel from "../../carousel/carousl";
class Flowers extends Component {
  constructor() {
    super();
    this.state = {
      flowers: [],
      searchQuery: "",
      flowersLoading: true,
    };
  }
  componentDidMount() {
    fetch("https://flower-shop-roan.vercel.app/api/Flower/Flowers")
      .then((response) => {
        // console.log("before .json",response)
        return response.json();
      })
      .then((data) => {
        // console.log("after response",data);
        this.setState({ flowers: data, flowersLoading: false });
      });
  }
  handleSearchInputChange = (event) => {
    this.setState({ searchQuery: event.target.value });
  };
  render() {
    const loading = this.state.flowersLoading;

    if (loading) {
      return (
        <div>
          <div>
            <Carousel />
          </div>

          <div class="  flex-column py-5  ">
            <div class=" loadingBar "></div>
            <div class=" loadingBar "></div>
            <div class=" loadingBar "></div>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <div>
            <Carousel />
          </div>

          <div className="row row-cols-1  g-0 my-5">
            <div className="d-flex justify-content-center p-2">
              <BsSearch className="icons m-2 " />
              <input
                style={{
                  maxWidth: "3000px",
                  height: "50px",
                  border: "4px solid #ff58b9",
                  borderRadius: "10px",
                }}
                type="text"
                placeholder="Search by name or price"
                value={this.state.searchQuery}
                onChange={this.handleSearchInputChange}
              />
            </div>
            {this.state.flowers
              .filter(
                (flower) =>
                  flower.name
                    .toLowerCase()
                    .includes(this.state.searchQuery.toLowerCase()) ||
                  flower.price.toString().includes(this.state.searchQuery)
              )
              .map((flower) => (
                <div
                  className="col-md-4  d-flex justify-content-around"
                  key={flower.id}
                >
                  <div className="card m-4  " style={{ maxWidth: "300px" }}>
                    <img
                      src={
                        "https://flower-shop-roan.vercel.app/images/" +
                        flower.image
                      }
                      style={{ maxHeight: "150px", maxWidth: "300px" }}
                      className="card-img-top "
                      alt="..."
                    />
                    <div className="card-body">
                      <h5 className="text-center card-title">{flower.name}</h5>
                      <h6 className="text-center card-title">
                        {flower.price}$
                      </h6>
                      <div className="d-flex justify-content-center">
                        <button className="btn btn-info">
                          <NavLink
                            style={{ color: "white", textDecoration: "none" }}
                            to={`/flower/${flower._id}`}
                          >
                            show <FaArrowRightLong />
                          </NavLink>
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
}

export default Flowers;
