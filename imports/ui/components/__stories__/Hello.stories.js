import React from "react";
import {
  storiesOf
} from "@kadira/storybook";
import Hello from "../Hello";

storiesOf("Hello", module)
  .add("default", () => (<Hello />));
