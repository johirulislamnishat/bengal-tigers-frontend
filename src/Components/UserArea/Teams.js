import React from 'react';

const Teams = () => {
    return (
        <div className="w-full bg-white p-12">
            <div className="header flex items-end justify-between mb-12">
                <div className="title">
                    <p className="text-4xl font-bold text-gray-800 mb-4">
                        Lastest Cars
                    </p>

                </div>

            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                <div className="overflow-hidden shadow-lg rounded-lg h-90 w-60 md:w-80 cursor-pointer m-auto">
                    <div className="w-full block h-full">
                        <div className="md:w-1/2 text-center mb-8 md:mb-0">
                            <img className="w-48 h-48 rounded-full mx-auto -mb-24" src="/images/person/6.jpg" alt="Avatar Jacky" />
                            <div className="bg-white shadow-lg rounded-lg px-8 pt-32 pb-10 text-gray-400">
                                <h3 className="font-title text-gray-800 text-xl mb-3">
                                    Jacky Pout
                                </h3>
                                <p className="font-body">
                                    FullStack Engineer
                                </p>
                                <p className="font-body text-sm mb-4">
                                    He love caramel and he hate PHP
                                </p>
                                <a className="font-body text-blue-500 hover:text-gray-800" href="#">
                                    Jacky@poute.com
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Teams;


