import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Sidebar from "../../sidebar/sidebar";
import './updateFlower.css';
function UpdateFlower() {
    const navigate = useNavigate();
    let { id } = useParams();
    console.log(id);
    const [flowerData, setflowerData] = useState({
        name: '',
        des: '',
        image: '',
        price: '',
        category: '',
    });

    useEffect(() => {
        // Fetch flower data from API and populate the form
        fetch(`https://flowershop-bw6z.onrender.com/api/flower/${id}`)
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
        formData.append('category', flowerData.category);
console.log(flowerData)
const accessToken = localStorage.getItem('accessToken');

const headers = new Headers();
headers.append('Authorization', `Bearer ${accessToken}`);
console.log( "headers",headers)

        // Make the API call to update the flower
        fetch(`https://flowershop-bw6z.onrender.com/api/flower/update/${id}`, {
            method: 'PUT',
            headers: headers,
            body: formData
        })
            .then((response) => response.json())
            .then((data) => {

                console.log('flower updated:', data);
                navigate('/dashboard/allflower');
            })
            .catch((error) => {
                console.error('Error updating flower:', error);
            });
    };

    return (
        < div>
            <div className="d-flex justify-content-center">
                <Sidebar />
                <div className="container-fluid bgform ">
                    <h2 className="text-center"> update flower </h2>
                    <div className="d-flex justify-content-center">
                        <form
                            onSubmit={handleSubmit}
                            className="flower-form my-5"
                            encType="multipart/form-data"

                        >
                            <label>Image: </label>
                            <input
                                className='form-control mb-3'
                                type="file"
                                name="image"
                                accept="image/*"

                                onChange={handleImageChange}
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
                            <label>category </label>
                            <input
                                className='form-control mb-3'
                                type="text"
                                name="category"
                                value={flowerData.category|| ''}
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
