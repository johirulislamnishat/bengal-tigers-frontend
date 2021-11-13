import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';

const Products = () => {

    const [cars, setCars] = useState([]);

    useEffect(() => {
        const url = ('http://localhost:5000/carsInfo')
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setCars(data))
    }, [])

    return (
        <div className="w-full bg-white">
            <div className='max-w-6xl mx-auto'>
                <div className="header flex items-end justify-between mb-12">
                    <div className="title">
                        <p className="text-4xl font-bold text-gray-800 mb-4">
                            Lastest Cars
                        </p>

                    </div>

                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                    {
                        cars.map(car => (
                            <div key={car._id} className="overflow-hidden shadow-lg rounded-lg w-5/6">
                                <div>
                                    <img src={car.img} className="max-h-40 w-full object-cover" alt={car.productName} />
                                    <div className="bg-white dark:bg-gray-800 w-full p-4">
                                        <div className='flex justify-between items-center'>
                                            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                                {car.productName}
                                            </p>

                                            <p className="text-indigo-500 text-md font-medium">
                                                {car.color}
                                            </p>
                                        </div>

                                        <div className='flex justify-between items-center'>
                                            <p className="text-gray-400 dark:text-gray-300 font-light text-md">$ {car.productPrice}
                                            </p>
                                            {/* rating */}
                                            <Rating
                                                initialRating={car.rating}
                                                readonly
                                                emptySymbol='far fa-star text-yellow-500'
                                                fullSymbol='fas fa-star text-yellow-500'
                                            />
                                        </div>

                                        <div className='flex justify-between items-center'>
                                            <p className="text-gray-400 dark:text-gray-300 font-light text-md">{car.fuelType}
                                            </p>
                                            <p className="text-gray-400 dark:text-gray-300 font-light text-md">{car.year}
                                            </p>
                                        </div>

                                        {/* button  */}

                                        <div className='d-flex justify-content-between'>
                                            <Link to={`/car-details/${car._id}`}><button variant="primary" className='bg-indigo-500 text-white rounded-md px-5 py-2 text-base text-md font-medium my-2'>Book Now</button>
                                            </Link>
                                        </div>

                                        <div className="flex flex-wrap justify-starts items-center mt-4">
                                            <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                                                #Car
                                            </div>
                                            <div className="text-xs mr-2 py-1.5 px-4 text-gray-600 bg-blue-100 rounded-2xl">
                                                #Money
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
        </div>
    );
};

export default Products;