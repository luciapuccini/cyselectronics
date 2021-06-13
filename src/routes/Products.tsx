import React from "react";
import {Switch,Route, useRouteMatch } from "react-router-dom";

import Positioning from "./Positioning";
import Protection from "./Protection";

const Products = () => {
  let { path } = useRouteMatch();

return(
  <Switch>
        <Route exact path={path}>
        <h2>Products</h2>
        <hr/>
        </Route>
        <Route path={`${path}/positioning`}>
          <Positioning />
        </Route>
        <Route path={`${path}/protection`}>
        <Protection />
        </Route>
      </Switch>
)

};

export default Products;
