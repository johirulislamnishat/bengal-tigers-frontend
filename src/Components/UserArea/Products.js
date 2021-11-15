import React, { useState, useEffect } from 'react';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import useAuth from '../Authentication/Hooks/useAuth';

const Products = () => {

    const [cars, setCars] = useState([]);
    const { isLoading } = useAuth();

    useEffect(() => {
        const url = ('https://dry-island-56194.herokuapp.com/carsInfo')
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setCars(data))
    }, [])

    return (

        <>
            <Header />

            <div className="bg-white my-20">
                <div className='mx-auto container px-6 md:px-0'>
                    <div className="header flex items-end justify-between mb-12">
                        <div className="title">
                            <p className="text-4xl font-bold text-gray-800 mb-4">
                                All Cars
                            </p>

                        </div>

                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">


                        {
                            cars.map(car => (
                                <div key={car._id} className="shadow-lg rounded-lg">
                                    {isLoading ? <div class="border border-blue-300 shadow rounded-md p-4 max-w-sm w-full mx-auto">
                                        <div class="animate-pulse flex space-x-4">
                                            <div class="rounded-full bg-indigo-100 h-12 w-12"></div>
                                            <div class="flex-1 space-y-4 py-1">
                                                <div class="h-4 bg-gray-200 rounded w-3/4"></div>
                                                <div class="space-y-2">
                                                    <div class="h-4 bg-gray-200 rounded"></div>
                                                    <div class="h-4 bg-gray-200 rounded w-5/6"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                        : <div>
                                            <img src={car.img} className="max-h-52 w-full object-cover rounded-t-lg" alt={car.productName} />

                                            <div className="bg-white dark:bg-gray-800 rounded-lg p-4">
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
                                    }
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default Products;