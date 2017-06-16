import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import SplashPage from "../ui/pages/SplashPage";
import PrivacyPolicy from "../ui/pages/PrivacyPolicy";
import Support from "../ui/pages/Support";

const Routes = (
  <BrowserRouter>
    <div>
      <Route path="/" component={SplashPage} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/support" component={Support} />
    </div>
  </BrowserRouter>
);

export default Routes;
