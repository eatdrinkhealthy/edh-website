import { Meteor } from "meteor/meteor";
import { render } from "react-dom";
// include any package css files, so they will be bundled
import "react-s-alert/dist/s-alert-default.css";

import App from "../imports/ui/containers/App";

Meteor.startup(() => {
  render(App, document.getElementById("render-target"));
});
