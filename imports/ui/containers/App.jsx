import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "../../state/stores/store";
import SplashPage from "../pages/SplashPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import Support from "../pages/Support";

const App = (
  <Provider store={store}>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
        <Route path="/support" component={Support} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default App;