import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../state/stores/store";
import SplashPage from "../pages/SplashPage";
import PrivacyPolicy from "../pages/PrivacyPolicy";
import AlertMessage from "../components/AlertMessage";

const App = (
  <div>
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={SplashPage} />
          <Route path="/privacy-policy" component={PrivacyPolicy} />
        </Switch>
      </BrowserRouter>
    </Provider>
    <AlertMessage />
  </div>
);

export default App;
