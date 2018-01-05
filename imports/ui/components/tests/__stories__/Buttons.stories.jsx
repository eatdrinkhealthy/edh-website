import React from "react";
import {
  storiesOf,
} from "@storybook/react";
import LinkButton from "../../LinkButton";

storiesOf("Buttons", module)
  .add("LinkButton", () => (<LinkButton text="Link Button!" url="http://www.bbc.com" />));
