import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './Components/Authentication/Login/Login';
import Registration from './Components/Authentication/Registration/Registration';
import Home from './Components/UserArea/Home';
import DashboardHome from './Components/DashboardArea/DashboardHome';

function App() {
  return (
    <>
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
          <Route path='/dashboard'>
            <DashboardHome />
          </Route>

        </Switch>
      </Router>
    </>
  );
}

export default App;
