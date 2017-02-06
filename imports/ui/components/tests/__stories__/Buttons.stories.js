import React from "react";
import {
  storiesOf,
} from "@kadira/storybook";
import LinkButton from "../../LinkButton";

storiesOf("Buttons", module)
  .add("LinkButton", () => (<LinkButton text="Link Button!" url="http://www.bbc.com" />));
