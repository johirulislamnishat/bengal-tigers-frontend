import React from 'react';

const Blogs = () => {
    return (

        <div className="w-full bg-white p-12">
            <div className="header flex items-end justify-between mb-12">
                <div className="title">
                    <p className="text-4xl font-bold text-gray-800 mb-4">
                        Lastest articles
                    </p>

                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                    <a href="#" className="w-full block h-full">
                        <img alt="blog photo" src="/images/blog/1.jpg" className="max-h-40 w-full object-cover" />
                        <div className="bg-white dark:bg-gray-800 w-full p-4">
                            <p className="text-indigo-500 text-md font-medium">
                                Video
                            </p>
                            <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                Work at home
                            </p>
                            <p className="text-gray-400 dark:text-gray-300 font-light text-md">
                                Work at home, remote, is the new age of the job, every person can work at home....
                            </p>
                            <div className="flex items-center mt-4">
                                <a href="#" className="block relative">
                                    <img alt="profil" src="/images/person/6.jpg" className="mx-auto object-cover rounded-full h-10 w-10 " />
                                </a>
                                <div className="flex flex-col justify-between ml-4 text-sm">
                                    <p className="text-gray-800 dark:text-white">
                                        Jean Jacques
                                    </p>
                                    <p className="text-gray-400 dark:text-gray-300">
                                        20 mars 2029 - 6 min read
                                    </p>
                                </div>
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
                    </a>
                </div>

            </div>
        </div>

    );
};

export default Blogs;