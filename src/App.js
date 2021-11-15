import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login/Login';
import Registration from './Components/Authentication/Registration/Registration';
import Home from './Components/UserArea/Home';
import DashboardHome from './Components/DashboardArea/DashboardHome';
import AuthProvider from './Components/Authentication/Context/AuthProvider';
import PrivateRoute from './Components/Authentication/PrivateRoute/PrivateRoute';
import ProductDetails from './Components/UserArea/ProductDetails';
import Products from './Components/UserArea/Products';
import ContactUs from './Components/UserArea/ContactUs';
import NotFound from './Components/UserArea/NotFound';

function App() {
  return (
    <>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route path='/home'>
              <Home />
            </Route>

            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/registration'>
              <Registration />
            </Route>

            <Route path='/products'>
              <Products />
            </Route>

            <Route path='/contact'>
              <ContactUs />
            </Route>

            <PrivateRoute path='/car-details/:id'>
              <ProductDetails />
            </PrivateRoute>

            <PrivateRoute path='/dashboard'>
              <DashboardHome />
            </PrivateRoute>

            <Route exact path='/*'>
              <NotFound />
            </Route>
          </Switch>
        </Router>
      </AuthProvider>
    </>
  );
}

export default App;
