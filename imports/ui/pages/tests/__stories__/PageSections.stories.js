/* eslint-disable import/no-extraneous-dependencies */

import React from "react";
import {
  storiesOf,
} from "@kadira/storybook";
import CompanyName from "../../../components/CompanyName";
import Pitch from "../../../components/Pitch";
import ComingSoon from "../../../components/ComingSoon";
import Logo from "../../../components/Logo";
import Preview from "../../../components/Preview";

storiesOf("Page Sections", module)
  .add("CompanyName", () => (<CompanyName />))
  .add("Pitch", () => (<Pitch />))
  .add("ComingSoon", () => (<ComingSoon />))
  .add("Logo", () => (<Logo />))
  .add("Preview", () => (<Preview />));
