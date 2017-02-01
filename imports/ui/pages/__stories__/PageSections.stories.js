import React from "react";
import {
  storiesOf,
} from "@kadira/storybook";
import CompanyName from "../../components/CompanyName";
import Pitch from "../../components/Pitch";

storiesOf("Page Sections", module)
  .add("CompanyName", () => (<CompanyName />))
  .add("Pitch", () => (<Pitch />));
