import React from "react";
import {
  storiesOf,
} from "@kadira/storybook";
import CompanyName from "../../components/CompanyName";

storiesOf("Page Sections", module)
  .add("CompanyName", () => (<CompanyName />));
