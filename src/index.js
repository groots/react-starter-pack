import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import {Layout} from "./pages/layout";
import {Home} from "./pages/home";
import {Show} from "./pages/show"

const app = document.getElementById('app');



ReactDOM.render(
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="Info/:userName" component={Show}></Route>
    </Route>
  </Router>,
app);
