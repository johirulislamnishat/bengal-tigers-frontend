import axios from 'axios';
import React from 'react';
import { useForm } from 'react-hook-form';

const Review = () => {

    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        axios.post('http://localhost:5000/shopReviews', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Success');
                    reset();
                }
            })
    };

    return (
        <div className="bg-indigo-100 w-full">
            <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                <div className="px-2 md:px-0 my-10 md:my-24 w-full max-w-lg">

                    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                            Write A Review
                        </div>

                        <div className="mt-8">

                            {/* form start  */}
                            <form onSubmit={handleSubmit(onSubmit)}>

                                {/* your image  */}
                                <div className="flex flex-col mb-2">
                                    <div>
                                        <span>
                                            Your Image
                                        </span>
                                        <input
                                            {...register("yourImg")}
                                            placeholder="Enter Your Image URL"
                                            type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                    </div>
                                </div>

                                {/* Your name  */}
                                <div className="flex flex-col mb-6">
                                    <div>
                                        <span>
                                            Your Name
                                        </span>
                                        <input {...register("yourName")}
                                            placeholder="Enter Your Name"
                                            type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                    </div>
                                </div>


                                {/* review  */}
                                <div className="flex flex-col mb-6">
                                    <div>
                                        <span>
                                            Review
                                        </span>
                                        <input {...register("review")}
                                            placeholder="Write a review"
                                            type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                    </div>
                                </div>

                                {/* rating  */}
                                <div className="flex flex-col mb-6">
                                    <div>
                                        <span>
                                            Rating
                                        </span>
                                        <input {...register("duration")}
                                            placeholder="Enter Post Duration"
                                            type="number" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                    </div>
                                </div>

                                {/* duration  */}
                                <div className="flex flex-col mb-6">
                                    <div>
                                        <span>
                                            Duration
                                        </span>
                                        <input {...register("storeRating")}
                                            placeholder="Enter Store Rating"
                                            type="number" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                    </div>
                                </div>



                                <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Submit
                                </button>
                            </form>


                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Review;