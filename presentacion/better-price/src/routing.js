import React from 'react';
import Home from './index.js';
import ProductPage from './pages/Products-Page/ProductsPage.js'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const RoutingApp = () =>{
  return(
    <>
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/productos' component={ProductPage}/>
        {
          /*
           *<Route path='/' component={ProductPage}/>
           *<Route path='/' component={FavPage}/>
           */
        }
        </Switch>
      </Router>
    </>
  );
}

export default RoutingApp;
