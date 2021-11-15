import React, { useEffect, useState } from 'react';

const ManageOrders = () => {

  const [orders, setOrders] = useState([]);
  const [cancelOrder, setcancelOrder] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/bookingOrders/`)
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setOrders(data))
  })

  //Cancel Booking
  const handleCancelOrder = id => {
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
                    <div className="font-semibold text-left">Email</div>
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
                  orders.map(order => {
                    return (
                      <tr key={order._id}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                              <img src={order.img} width="40" height="40" alt={order.productName} />
                            </div>
                            <div className="font-medium text-gray-800">{order.productName}</div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{order.email}</div>
                        </td>

                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left">{order.color}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium text-green-500">$ {order.productPrice}</div>
                        </td>

                        {/* rating  */}
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-left">{order.rating}</div>
                        </td>

                        {/* fuel type  */}
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-left">{order.fuelType}</div>
                        </td>

                        {/* year  */}
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-left">{order.year}</div>
                        </td>

                        {/* update  */}
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-left"><i className="far fa-edit text-indigo-600"></i></div>
                        </td>

                        {/* delete button  */}
                        <td className="p-2 whitespace-nowrap">
                          <button onClick={() => handleCancelOrder(order._id)} className="text-lg text-left"><i className="far fa-trash-alt text-red-600"></i></button>
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

export default ManageOrders;