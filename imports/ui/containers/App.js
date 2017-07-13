import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";
import SplashPage from "../pages/SplashPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Support from "../pages/Support";

const App = (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={SplashPage} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/support" component={Support} />
    </Switch>
  </BrowserRouter>
);

export default App;
