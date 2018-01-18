import React from "react";
import { storiesOf } from "@storybook/react";
import Preview from "../../../components/Preview";
import Header from "../../../components/Header";

storiesOf("Page Sections", module)
  .add("Header", () => <Header />)
  .add("Preview", () => <Preview />);
