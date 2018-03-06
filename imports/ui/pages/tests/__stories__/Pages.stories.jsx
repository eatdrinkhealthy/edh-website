import React from "react";
import { MemoryRouter } from "react-router-dom";
import { storiesOf } from "@storybook/react";
import PrivacyPolicy from "../../PrivacyPolicy";

storiesOf("Pages", module)
  .addDecorator(story => <MemoryRouter>{story()}</MemoryRouter>)
  .add("privacy policy", () => <PrivacyPolicy />);
