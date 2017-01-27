import React from "react";
import {
  storiesOf,
} from "@kadira/storybook";
import LinkButton from "../LinkButton";

storiesOf("Buttons", module)
  .add("LinkButton", () => (<LinkButton />));
