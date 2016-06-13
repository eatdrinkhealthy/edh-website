import { FlowRouter } from "meteor/kadira:flow-router";
import { BlazeLayout } from "meteor/kadira:blaze-layout";

// Import templates to load
import "../../ui/layouts/app-body.js";
import "../../ui/pages/splash-page.js";
import "../../ui/pages/privacy-policy-page.js";
import "../../ui/pages/support.js";

// specifically set the div in body where BlazeLayout renders
BlazeLayout.setRoot("#layoutContainer");

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
