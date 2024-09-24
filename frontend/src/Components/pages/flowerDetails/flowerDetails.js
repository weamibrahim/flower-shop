import { useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import "./flowerDetail.css";
const FlowerDetail = () => {
  let { id } = useParams();
  console.log(id);
  let [flower, setflower] = useState([]);
  useEffect(() => {
    fetch(`https://flower-shop-roan.vercel.app/api/flower/${id}`)
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        //console.log(data);

        setflower(data);
      });
  }, []);
  const handleAddToCart = async (e) => {
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem("userData"))._id;
    const accessToken = localStorage.getItem("accessToken");
    const flowerId = flower._id;
    const quantity = 1;
    console.log(userId, flowerId, quantity);
    try {
      const response = await fetch(
        "https://flower-shop-roan.vercel.app/api/cart/add-item",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",

            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify({ userId, flowerId, quantity }),
        }
      );

      if (response.ok) {
        console.log("Item added to cart");
      } else {
        console.error("Failed to add item to cart");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container my-5 shadow-lg p-3 mb-5 bg-body-tertiary rounded">
      <div className="row">
        <div className="col-md-6 mb-4">
          <img
            src={"https://flower-shop-roan.vercel.app/images/" + flower.image}
            alt="flower.name"
            className="img-fluid rounded-circle"
          />
        </div>
        <div className="col-md-6 text-center text-capitalize">
          {flower.des}

          <p className="text-center  my-3"> price :{flower.price}</p>
          <div className="d-flex justify-content-center mt-1 ">
            <button className="button my-5" onClick={handleAddToCart}>
              <NavLink
                style={{ color: "white", textDecoration: "none" }}
                to={`/cart`}
              >
                Add to cart
              </NavLink>

              <svg className="cartIcon" viewBox="0 0 576 512">
                <path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default FlowerDetail;
