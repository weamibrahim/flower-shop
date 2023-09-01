
import React from 'react';
import { useState } from "react";
import Sidebar from '../../sidebar/sidebar';

function AddFlower() {
    const [flowerData, setflowerData] = useState({
        name: '',
        des: '',
        image: '',
        price: ''
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
        console.log(imageFile);
    };

    const handleSubmit = (event) => {
        const formData = new FormData();
        formData.append('name', flowerData.name);
        formData.append('des', flowerData.des);
        formData.append('price', flowerData.price);
        formData.append('image', flowerData.image);
        event.preventDefault();

        // Make the API call to create a new flower
        fetch(`http://localhost:7000/api/flower/create`, {
            method: 'POST',

            body: formData
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle successful creation, e.g., redirect to flowers page
                // console.log('flower created:', data);
                // Redirect to the flowers page after successful creation
            window.location.href = '/dashboard/allflower'; // Change this to the correct URL for your flowers page
            })
            .catch((error) => {
                console.error('Error creating flower:', error);
            });
    };

    return (
        /* The code you provided is rendering a form for creating a new flower. It includes input fields for
        the flower's name, bio, cover, and genre. The values of these input fields are controlled by the
        `flowerData` state variable, and any changes to the input fields will trigger the
        `handleInputChange` function to update the `flowerData` state. */
        <div>



            <div className="d-flex justify-content-center">
                <Sidebar />
                <div className='container-fluid bg '>
                    <h2 className='text-center'> Create New </h2>
                    <div className='d-flex justify-content-center'>
                        <form onSubmit={handleSubmit} style={{ boxShadow: " 5px 5px 5px 5px #c8c8c8", padding: "10px", width: "500px" }} className='my-5' encType="multipart/form-data">

                            <label>Image: </label>
                            <input
                                className='form-control mb-3'
                                type="file"
                                name="image"
                                accept="image/*"
                                onChange={handleImageChange} // You need to implement this function
                            />
                            <br />

                            <label>Name: </label>
                            <input
                                className='form-control mb-3'
                                type="text"
                                name="name"
                                value={flowerData.name}
                                onChange={handleInputChange}
                            />
                            <br />
                            <label>description</label>
                            <input
                                className='form-control mb-3'
                                type="text"
                                name="des"
                                value={flowerData.des}
                                onChange={handleInputChange}
                            />
                            <br />

                            <label>Price: </label>
                            <input
                                className='form-control mb-3'
                                type="number"
                                name="price"
                                value={flowerData.price}
                                onChange={handleInputChange}
                            />
                            <br />
                            <div className='d-flex justify-content-center'>

                                <button className='btn btn-info' type="submit">Create Flower</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default AddFlower;
