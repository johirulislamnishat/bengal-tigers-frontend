import React, { useState } from 'react';
import ManageOrders from "./ManageOrders";
import WelcomeBanner from "./WelcomeBanner";
import Sidebar from "./Navigation/Sidebar";
import Topbar from './Navigation/Topbar';
import AddProducts from './AddProducts';
import ManageProducts from './ManageProducts';
import Pay from './Pay';
import MakeAdmin from './MakeAdmin';
import Orders from './Orders';
import Review from './Review';

const DashboardHome = () => {

  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <div className="flex h-screen overflow-hidden">
      {/* Sidebar */}
      <Sidebar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

      {/* Content area */}
      <div className="relative flex flex-col flex-1 overflow-y-auto overflow-x-hidden">

        {/*  Site header */}
        <Topbar sidebarOpen={sidebarOpen} setSidebarOpen={setSidebarOpen} />

        <main>
          <div className="px-4 sm:px-6 lg:px-8 py-8 w-full max-w-9xl mx-auto">

            {/* Welcome banner */}
            <WelcomeBanner />

            {/* Dashboard actions */}
            <AddProducts />
            <ManageOrders />
            <Pay />
            <ManageProducts />
            <MakeAdmin />
            <Orders />
            <Review />

            {/* Cards */}
            <div className="grid grid-cols-12 gap-6">

              {/* Card (Customers) */}
              <ManageOrders />

            </div>

          </div>
        </main>

      </div>
    </div>
  );
};

export default DashboardHome;