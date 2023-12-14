import React, { useState } from "react";
import "./update.css"
function UpdateProfile() {

    const userData = JSON.parse(localStorage.getItem('userData'));

    const [formData, setUserUpdateData] = useState({
        user_name: userData.user_name,
        email: userData.email,
        mobile: userData.mobile,
        gender: userData.gender,
        address: userData.address,
        role: userData.role

    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;

        setUserUpdateData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleUpdate = async () => {
        try {
            // console.log(formData);
            const response = await fetch(`https://flowershop-bw6z.onrender.com/api/users/update/${userData._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('accessToken')}`,
                },
                body: JSON.stringify(formData),

            });

            if (response.ok) {
                // Update localStorage with the new data
                const updatedUserData = { ...userData, ...formData };
                localStorage.setItem('userData', JSON.stringify(updatedUserData));

                // console.log("success");
                window.location.href = "/profile"// Redirect to the profile page after successful update
            } else {
                console.error('Failed to update profile');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="container d-flex justify-content-center">
            <div className="my-5">


                <form onSubmit={handleUpdate} className="cardsup">
                    <h2 className="login">Update </h2>
                    <div className="inputBox1">
                        <input
                            type="text"
                            name="user_name"
                            value={formData.user_name || ''}
                            onChange={handleInputChange}
                        />
                        <span className="user">name</span>
                    </div>

                    <div className="inputBox">
                        <input
                            type="text"
                            name="email"
                            value={formData.email || ''}
                            onChange={handleInputChange}
                        />
                        <span className="user">Email</span>
                    </div>


                    <div className="inputBox">
                        <select value={formData.gender} name="gender" onChange={handleInputChange} required>
                            <option value="">Select Gender</option>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                        </select>

                    </div>
                    <div className="inputBox">
                        <select value={formData.role} name="role" onChange={handleInputChange} required>
                            <option value="">Select Role</option>
                            <option value="user">User</option>
                            <option value="admin">Admin</option>
                        </select>
                    </div>
                    <div className="inputBox">

                        <input type="text" value={formData.mobile} name="mobile" onChange={handleInputChange} required />
                        <span className="user">address</span>
                    </div>
                    <div className="inputBox">

                        <input type="text" value={formData.address} name="address" onChange={handleInputChange} required />
                        <span className="user">address</span>
                    </div>

                    <button className="btn btn-info" style={{ marginBottom: "20px" }} type="submit">Update </button>
                </form>
            </div>
        </div>
    );
}

export default UpdateProfile;
