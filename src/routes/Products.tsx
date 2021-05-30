import React from "react";
import {Switch,Route, useRouteMatch } from "react-router-dom";
import Product from "./Product";

const Products = () => {
  let { path } = useRouteMatch();

return(
  <Switch>
        <Route exact path={path}>
        <h2>Products</h2>
        </Route>
        <Route path={`${path}/:product`}>
          <Product />
        </Route>
      </Switch>
)

};

export default Products;
