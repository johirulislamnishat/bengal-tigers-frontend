import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Rating from 'react-rating';
import useFirebase from '../Authentication/Hooks/useFirebase';
import useAuth from '../Authentication/Hooks/useAuth'

const Orders = () => {


    const [cancelOrder, setcancelOrder] = useState([]);
    const email = sessionStorage.getItem('email');
    const { user } = useFirebase();
    const { orders, setOrders } = useAuth();

    useEffect(() => {
        fetch(`http://localhost:5000/bookingOrders/${email}`)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setOrders(data))
    })

    //Cancel Booking
    const handleCancelBooking = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/deleteOrders/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete Success');
                        const remainingOrder = cancelOrder.filter(order => order._id !== id);
                        setcancelOrder(remainingOrder);
                    }
                })
        }
    }

    return (
        <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {
                    orders.map(order => (
                        <div key={order._id} className="overflow-hidden shadow-lg rounded-lg w-5/6">
                            <div>
                                <img src={order.img} className="max-h-40 w-full object-cover" alt={order.productName} />
                                <div className="bg-white dark:bg-gray-800 w-full p-4">
                                    <div className='flex justify-between items-center'>
                                        <p className="text-gray-800 dark:text-white text-xl font-medium mb-2">
                                            {order.productName}
                                        </p>

                                        <p className="text-indigo-500 text-md font-medium">
                                            {order.color}
                                        </p>
                                    </div>

                                    <div className='flex justify-between items-center'>
                                        <p className="text-gray-400 dark:text-gray-300 font-light text-md">$ {order.productPrice}
                                        </p>

                                        {/* rating */}
                                        <Rating
                                            initialRating={order.rating}
                                            readonly
                                            emptySymbol='far fa-star text-yellow-500'
                                            fullSymbol='fas fa-star text-yellow-500'
                                        />
                                    </div>

                                    <div className='flex justify-between items-center'>
                                        <p className="text-gray-400 dark:text-gray-300 font-light text-md">{order.fuelType}
                                        </p>
                                        <p className="text-gray-400 dark:text-gray-300 font-light text-md">{order.year}
                                        </p>
                                    </div>

                                    {/* button  */}

                                    <div className='d-flex justify-content-between'>
                                        <button
                                            onClick={() => handleCancelBooking(order._id)}
                                            className='bg-red-500 text-white rounded-md px-5 py-2 text-base text-md font-medium my-2'>Cencel</button>
                                    </div>


                                </div>
                            </div>
                        </div>
                    ))
                }

            </div>
        </>
    );

    return {
        orders
    }
};

export default Orders;