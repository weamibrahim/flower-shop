import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from "../../sidebar/sidebar";
function UpdateFlower() {
    let { id } = useParams();
    console.log(id);
    const [flowerData, setflowerData] = useState({
        name: '',
        des: '',
        image: '',
        price: ''
    });

    useEffect(() => {
        // Fetch flower data from API and populate the form
        fetch(`http://localhost:7000/api/flower/${id}`)
            .then((response) => { return response.json() }



            )
            .then((data) => {
                setflowerData(data);
                // console.log(data);
            })
            .catch((error) => {
                console.error('Error fetching flower:', error);
            });
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setflowerData((prevData) => ({
            ...prevData,
            [name]: value
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
        event.preventDefault();
        const formData = new FormData();
        formData.append('name', flowerData.name);
        formData.append('des', flowerData.des);
        formData.append('price', flowerData.price);
        formData.append('image', flowerData.image);

        // Make the API call to update the flower
        fetch(`http://localhost:7000/api/flower/update/${id}`, {
            method: 'PUT',

            body: formData
        })
            .then((response) => response.json())
            .then((data) => {
                // Handle successful update, e.g., redirect to flowers page
                console.log('flower updated:', data);
                // Redirect to the flowers page after successful update
                window.location.href = '/dashboard/allflower'; // Change this to the correct URL for your flowers page
            })
            .catch((error) => {
                console.error('Error updating flower:', error);
            });
    };

    return (
        <div>
            <div className="d-flex justify-content-center">
                <Sidebar />
                <div className='container-fluid bg'>
                    <h2 className='text-center'>Update flower</h2>
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
                                value={flowerData.name || ''}
                                onChange={handleInputChange}
                            />
                            <br />
                            <label>des </label>
                            <input
                                className='form-control mb-3'
                                type="text"
                                name="des"
                                value={flowerData.des || ''}
                                onChange={handleInputChange}
                            />
                            <br />

                            <label>price </label>
                            <input
                                className='form-control mb-3'
                                type="number"
                                name="price"
                                value={flowerData.price || ''}
                                onChange={handleInputChange}
                            />
                            <br />
                            <div className='d-flex justify-content-center'>
                                <button className='btn btn-info' type="submit">Update Flower</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UpdateFlower;
