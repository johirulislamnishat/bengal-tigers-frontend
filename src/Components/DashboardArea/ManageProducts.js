import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const ManageProducts = () => {

    const [cars, setCars] = useState([]);
    const [deleteProduct, setDeleteProduct] = useState([]);

    useEffect(() => {
        const url = ('http://localhost:5000/carsInfo')
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setCars(data))
    }, [])

    //Cancel Booking
    const handleDeleteProduct = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/deleteProduct/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete Success');
                        const remainingProduct = deleteProduct.filter(car => car._id !== id);
                        setDeleteProduct(remainingProduct);
                    }
                })
        }
    }

    return (
        <>
            <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
                <header className="px-5 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-800">Inventory</h2>
                </header>
                <div className="p-3">

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            {/* Table header */}
                            <thead className="text-xs font-semibold uppercase text-gray-800 bg-indigo-50">
                                <tr>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Product Name</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Color</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Price</div>
                                    </th>

                                    {/* rating  */}
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Rating</div>
                                    </th>

                                    {/* fuel type  */}
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Fuel Type</div>
                                    </th>

                                    {/* model */}
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Model</div>
                                    </th>

                                    {/* update button  */}
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Update</div>
                                    </th>

                                    {/* delete button */}
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Delete</div>
                                    </th>
                                </tr>
                            </thead>
                            {/* Table body */}
                            <tbody className="text-sm divide-y divide-gray-100">
                                {
                                    cars.map(car => {
                                        return (
                                            <tr key={car._id}>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                            <img src={car.img} width="40" height="40" alt={car.productName} />
                                                        </div>
                                                        <div className="font-medium text-gray-800">{car.productName}</div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">{car.color}</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left font-medium text-green-500">$ {car.productPrice}</div>
                                                </td>

                                                {/* rating  */}
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-left">{car.rating}</div>
                                                </td>

                                                {/* fuel type  */}
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-left">{car.fuelType}</div>
                                                </td>

                                                {/* year  */}
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-left">{car.year}</div>
                                                </td>

                                                {/* update  */}
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-left"><i className="far fa-edit text-indigo-600"></i></div>
                                                </td>

                                                {/* delete button  */}
                                                <td className="p-2 whitespace-nowrap">
                                                    <button onClick={() => handleDeleteProduct(car._id)} className="text-lg text-left"><i className="far fa-trash-alt text-red-600"></i></button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        </>
    );
};

export default ManageProducts;