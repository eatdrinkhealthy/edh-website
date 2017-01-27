import React from "react";
import {
  storiesOf,
} from "@kadira/storybook";
import PrivacyPolicy from "./PrivacyPolicy";

storiesOf("PrivacyPolicy", module)
  .add("page", () => (<PrivacyPolicy />));
