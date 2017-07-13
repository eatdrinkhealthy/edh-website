import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
import App from "../imports/ui/containers/App";

/* global document */

Meteor.startup(() => {
  render(App, document.getElementById("render-target"));
});
