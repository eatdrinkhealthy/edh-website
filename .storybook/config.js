import { configure } from "@storybook/react";

import "!style-loader!css-loader!../client/app.css";

const req = require.context("../imports/ui", true, /__stories__\/.*.stories.jsx?/);

function loadStories () {
  req.keys().forEach(filename => req(filename));
}

configure(loadStories, module);
