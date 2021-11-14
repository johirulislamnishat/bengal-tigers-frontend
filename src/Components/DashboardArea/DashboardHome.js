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
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import useAuth from '../Authentication/Hooks/useAuth';

const DashboardHome = () => {
  let { path } = useRouteMatch();
  const { admin } = useAuth();
  // sidebar 
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

            <Switch>
              {/* <Route exact path={path}>
                <Pay />
              </Route> */}

              <Route path={`${path}/pay`}>
                <Pay />
              </Route>

              <Route path={`${path}/orders`}>
                <Orders />
              </Route>

              <Route path={`${path}/review`}>
                <Review />
              </Route>

              {
                admin && <>
                  <Route path={`${path}/make-admin`}>
                    <MakeAdmin />
                  </Route>
                  <Route path={`${path}/manage-orders`}>
                    <ManageOrders />
                  </Route>
                  <Route path={`${path}/add-products`}>
                    <AddProducts />
                  </Route>
                  <Route path={`${path}/manage-products`}>
                    <ManageProducts />
                  </Route>
                </>
              }
            </Switch>
          </div>
        </main>
      </div>
    </div>
  );
};

export default DashboardHome;