import React from "react";
import { Router, Route, browserHistory } from "react-router";
import SplashPage from "../ui/pages/SplashPage";
import PrivacyPolicy from "../ui/pages/PrivacyPolicy";
import Support from "../ui/pages/Support";

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={SplashPage} />
    <Route path="/privacy-policy" component={PrivacyPolicy} />
    <Route path="/support" component={Support} />
  </Router>
);

export default Routes;
