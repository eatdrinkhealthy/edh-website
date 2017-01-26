import { configure } from "@kadira/storybook";

// const req = require.context("../imports/ui", true, /__stories__\/.*.jsx?/);
const req = require.context("../imports/ui", true, /.*.stories.jsx?/);

function loadStories() {
  req.keys().forEach((filename) => req(filename));
}

configure(loadStories, module);
