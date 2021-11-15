import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { useParams } from 'react-router';
import Footer from './Footer';
import Header from './Header';

const ProductDetails = () => {

    //show data start
    const [car, setCar] = useState({});
    const { img, productName, color, productPrice, productDescription } = car;
    const { id } = useParams();

    useEffect(() => {
        const url = (`https://dry-island-56194.herokuapp.com/carsInfo/${id}`);
        fetch(url)
            .then(res => res.json())
            .then(data => {
                // reset(data)
                setCar(data)
            })
    }, []);

    //show data end

    //make an order start
    const { register, handleSubmit, reset, formState: { errors } } = useForm();

    const email = sessionStorage.getItem('email')
    const onSubmit = data => {
        data.email = (email)
        // console.log(email);


        axios.post('https://dry-island-56194.herokuapp.com/bookingOrders', data)
            .then(res => {

                // console.log(res);
                if (res.data.insertedId) {
                    alert('Success');
                    reset();
                }
            })

        // console.log(data)
    };

    return (
        <>
            <Header />

            <div className='flex justify-between max-w-6xl mx-auto gap-16'>
                <div key={car._id} className="overflow-hidden shadow-lg rounded-lg  my-10 md:my-24">
                    <div>
                        <img src={img} className="max-h-80 w-full object-cover" alt={productName} />
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <div className='flex justify-between items-center'>
                                <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                    {productName}
                                </p>

                                <p className="text-indigo-500 text-md font-medium">
                                    {color}
                                </p>
                            </div>

                            <div className='flex justify-between items-center'>
                                <p className="text-gray-400 dark:text-gray-300 font-light text-md">$ {productPrice}
                                </p>

                                {/* rating */}
                                <Rating
                                    initialRating={car.rating}
                                    readonly
                                    emptySymbol='far fa-star text-yellow-500'
                                    fullSymbol='fas fa-star text-yellow-500'
                                />
                            </div>

                            <p className="text-gray-400 dark:text-gray-300 font-light text-md my-1">{productDescription}</p>

                            <div className='flex justify-between items-center'>
                                <p className="text-gray-400 dark:text-gray-300 font-light text-md">{car.fuelType}
                                </p>
                                <p className="text-gray-400 dark:text-gray-300 font-light text-md">{car.year}
                                </p>
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

                <div>
                    <div className="px-2 md:px-0 my-10 md:my-24 w-full max-w-lg">

                        <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                            <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                                Place An Order
                            </div>

                            <div className="mt-8">

                                {/* form start  */}
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    {/* product image  */}
                                    <div className="flex flex-col mb-2">
                                        <div>
                                            <span>
                                                Image
                                            </span>
                                            <input
                                                {...register("img")} value={img}
                                                type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* product name  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Product Name
                                            </span>
                                            <input {...register("productName")}
                                                value={productName}
                                                type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* price  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Product Price
                                            </span>
                                            <input {...register("productPrice")}
                                                value={productPrice}
                                                type="number" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* description  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Product Description
                                            </span>
                                            <input {...register("productDescription")}
                                                value={productDescription}
                                                type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Confirm
                                    </button>
                                </form>


                            </div>
                        </div>

                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
};

export default ProductDetails;