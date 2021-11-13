import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';

const ProductDetails = () => {
    const [car, setCar] = useState({});
    // const { img, title, discount, description, location } = car;
    const { id } = useParams();

    useEffect(() => {
        const url = (`http://localhost:5000/carsInfo/${id}`);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setCar(data)
            })
    }, []);

    return (
        <div>
            {id}

            <img src={car.img} alt="" />
            <p>{car.rating}</p>
        </div>
    );
};

export default ProductDetails;