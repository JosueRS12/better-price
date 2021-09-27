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
          <Route path='/productos/:categoria' component={ProductPage}/>
        </Switch>
      </Router>
    </>
  );
}

export default RoutingApp;
