import React, { useState } from "react";
import "./update.css";
import { useNavigate } from "react-router-dom";
function UpdateProfile() {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userData"));

  const [formData, setUserUpdateData] = useState({
    user_name: userData.user_name,
    email: userData.email,
    mobile: userData.mobile,
    gender: userData.gender,
    address: userData.address,
    // role: userData.role
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    setUserUpdateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    try {
      // console.log(formData);
      let accessToken = localStorage.getItem("accessToken");

      const response = await fetch(
        `https://flower-shop-roan.vercel.app/api/users/update/${userData._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${accessToken}`,
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        // Update localStorage with the new data
        const updatedUserData = { ...userData, ...formData };
        localStorage.setItem("userData", JSON.stringify(updatedUserData));

        // console.log("success");
        navigate("/profile");
      } else {
        console.error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="my-5">
        <form onSubmit={handleUpdate} className="cardsup">
          <h2 className="login">Update </h2>
          <div className="">
            <span>Name</span>
            <input
              type="text"
              name="user_name"
              value={formData.user_name || ""}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="">
            <span className="">Email</span>
            <input
              type="text"
              name="email"
              value={formData.email || ""}
              onChange={handleInputChange}
              className="form-control"
            />
          </div>

          <div className="">
            <span className="">Gender</span>
            <select
              value={formData.gender}
              name="gender"
              onChange={handleInputChange}
              className="select form-control"
              required
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>
          </div>
          {/* <div className="">
                        <select value={formData.role} name="role" onChange={handleInputChange} required>
                            <option value="">Select Role</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div> */}
          <div className="">
            <span className="">mobile</span>
            <input
              type="text"
              value={formData.mobile}
              name="mobile"
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="">
            <span className="">address</span>
            <input
              type="text"
              value={formData.address}
              name="address"
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>

          <button
            className="btn btn-info"
            style={{ marginBottom: "20px" }}
            type="submit"
          >
            Update{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpdateProfile;
