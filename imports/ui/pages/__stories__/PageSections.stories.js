import React from "react";
import {
  storiesOf,
} from "@kadira/storybook";
import CompanyName from "../../components/CompanyName";
import Pitch from "../../components/Pitch";
import ComingSoon from "../../components/ComingSoon";
import Logo from "../../components/Logo";

storiesOf("Page Sections", module)
  .add("CompanyName", () => (<CompanyName />))
  .add("Pitch", () => (<Pitch />))
  .add("ComingSoon", () => (<ComingSoon />))
  .add("Logo", () => (<Logo />));
