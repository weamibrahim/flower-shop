import React from "react";
import { useState } from "react";
import Sidebar from "../../sidebar/sidebar";
import "./addFlower.css";
import { useNavigate } from "react-router-dom";
function AddFlower() {
  const navigate = useNavigate();
  const [flowerData, setflowerData] = useState({
    name: "",
    des: "",
    image: "",
    price: "",
    category: "",
  });
  //console.log(flowerData)
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setflowerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleImageChange = (event) => {
    const imageFile = event.target.files[0];

    setflowerData((prevData) => ({
      ...prevData,
      image: imageFile,
    }));
    // console.log(imageFile);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const accessToken = localStorage.getItem("accessToken");
    console.log("Access Token:", accessToken);

    if (!accessToken) {
      console.error("Access Token is missing.");
      return;
    }

    const headers = new Headers();
    headers.append("Authorization", `Bearer ${accessToken}`);
    console.log("headers", headers);

    const formData = new FormData();
    formData.append("name", flowerData.name);
    formData.append("category", flowerData.category);
    formData.append("des", flowerData.des);
    formData.append("price", flowerData.price);
    formData.append("image", flowerData.image);

    fetch(`https://flower-shop-roan.vercel.app/api/flower/create`, {
      method: "POST",
      headers: headers,
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          console.log("Flower created successfully");
          navigate("/dashboard/allflower");
        } else {
          return response.json().then((errorData) => {
            console.error(
              "Error creating flower:",
              response.statusText,
              errorData
            );
          });
        }
      })
      .catch((error) => {
        console.error("Error creating flower:", error);
      });
  };

  return (
    <div>
      <div className="d-flex justify-content-center">
        <Sidebar />
        <div className="container-fluid bgform ">
          <h2 className="text-center"> Create New </h2>
          <div className="d-flex justify-content-center">
            <form
              onSubmit={handleSubmit}
              className="flower-form my-5"
              encType="multipart/form-data"
            >
              <label>Image: </label>
              <input
                className="form-control mb-3"
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageChange}
              />
              <br />

              <label>Name: </label>
              <input
                className="form-control mb-3"
                type="text"
                name="name"
                value={flowerData.name}
                onChange={handleInputChange}
              />
              <br />

              <label>category: </label>
              <input
                className="form-control mb-3"
                type="text"
                name="category"
                value={flowerData.category}
                onChange={handleInputChange}
              />
              <br />

              <label>description</label>
              <input
                className="form-control mb-3"
                type="text"
                name="des"
                value={flowerData.des}
                onChange={handleInputChange}
              />
              <br />

              <label>Price: </label>
              <input
                className="form-control mb-3"
                type="number"
                name="price"
                value={flowerData.price}
                onChange={handleInputChange}
              />
              <br />
              <div className="d-flex justify-content-center">
                <button className="btn btn-info" type="submit">
                  Create Flower
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddFlower;
