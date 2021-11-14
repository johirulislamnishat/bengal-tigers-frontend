import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div>

            <div style={{ backgroundImage: "url('https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fGNhcnxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60')", backgroundRepeat: 'no-repeat', width: '100%', backgroundSize: 'cover', height: '520px', }} className="mb-10 md:mb-16">
                <div className="text-center w-full mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 z-20">
                    <h2 className="text-3xl font-extrabold text-white dark:text-white sm:text-4xl">
                        <span className="block">
                            Want to be luxurious cars ?
                        </span>
                        <span className="block text-indigo-500">
                            It&#x27;s today or never.
                        </span>
                    </h2>
                    <p className="text-xl mt-4 max-w-md mx-auto text-gray-400">
                        I had noticed that both in the very poor and very rich extremes of society the mad were often allowed to mingle freely
                    </p>
                    <div className="lg:mt-0 lg:flex-shrink-0">
                        <div className="mt-12 inline-flex rounded-md shadow">
                            <button type="button" className="py-4 px-6  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                <Link to='/products'>Book More</Link>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Banner;