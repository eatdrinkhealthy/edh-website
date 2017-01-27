import React from "react";
import { Router, Route, browserHistory } from "react-router";
import Hello from "../ui/components/Hello";
import PrivacyPolicy from "../ui/pages/PrivacyPolicy";
import Support from "../ui/pages/Support";

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Hello} />
    <Route path="/privacy-policy" component={PrivacyPolicy} />
    <Route path="/support" component={Support} />
  </Router>
);

export default Routes;
