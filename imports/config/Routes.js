import React from "react";
import { Router, Route, browserHistory } from "react-router";
import Hello from "../ui/components/Hello";
import PrivacyPolicy from "../ui/pages/PrivacyPolicy";

const Routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Hello} />
    <Route path="/privacy-policy" component={PrivacyPolicy} />
  </Router>
);

export default Routes;

// Import templates to load
/*
 import "../../ui/layouts/app-body.js";
 import "../../ui/pages/splash-page.js";
 import "../../ui/pages/privacy-policy-page.js";
 import "../../ui/pages/support.js";

 FlowRouter.route("/", {
 name: "App.home",
 action() {
 BlazeLayout.render("App_body", { main: "Splash_page" });
 },
 });

 FlowRouter.route("/privacy-policy", {
 name: "App.privacyPolicy",
 action() {
 BlazeLayout.render("App_body", { main: "PrivacyPolicy_page" });
 },
 });

 FlowRouter.route("/support", {
 name: "App.support",
 action() {
 BlazeLayout.render("App_body", { main: "Support_page" });
 },
 });
 */
