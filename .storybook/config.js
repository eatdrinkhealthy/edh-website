import { configure } from "@kadira/storybook";

import "!style!css!less!../client/main.less";

// const req = require.context("../imports/ui", true, /__stories__\/.*.jsx?/);
const req = require.context("../imports/ui", true, /.*.stories.jsx?/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
