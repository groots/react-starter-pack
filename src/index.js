import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, IndexRoute, browserHistory } from "react-router";

import {DataStore} from "./stores/DataStore";
import {Layout} from "./pages/layout";
import {Home} from "./pages/home";
import {Show} from "./pages/show"

const app = document.getElementById('app');

const store = new DataStore();

const passPropsComponent = (Component, props) => {
  return <Component store={store} {...props} />;
}

ReactDOM.render(
  <Router history={browserHistory} createElement={passPropsComponent}>
    <Route path="/" component={Layout}>
      <IndexRoute component={Home}></IndexRoute>
      <Route path="Info/:userName" component={Show}></Route>
    </Route>
  </Router>,
app);
